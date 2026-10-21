/**
 * Hosted entry point: a Cloudflare Worker serving the shipped library at
 * https://mcp.productrubric.com (see wrangler.toml).
 *
 * Stateless streamable HTTP: each request builds a fresh server over the
 * embedded library (generated at build time from the repository's rubrics
 * by scripts/gen-rubrics.mjs). No sessions, no storage, no keys: the
 * hosted copy serves the public defaults only. Teams with their own
 * rubrics run the local package instead.
 *
 * Rate limiting: the hosted copy allows 100 requests per minute per
 * client IP, enforced through the Workers Rate Limiting binding declared
 * in wrangler.toml. Counters are per Cloudflare location and eventually
 * consistent, so this is an abuse speed bump, not exact accounting. The
 * check fails open: a limiter problem must never break a tool call.
 *
 * The same Worker also serves the submission helper on the
 * submit.productrubric.com hostname (see src/submit.ts): GitHub
 * sign-in and one-click rubric submission for the builder. Those
 * routes stay inert until the OAuth app's credentials are set in the
 * Worker's environment and the hostname is attached.
 *
 * The submit host also runs the authorization server for the MCP
 * (see src/auth.ts). On this host, the submit_rubric tool is
 * protected: a tools/call naming it without a valid bearer token
 * gets a 401 pointing at the protected-resource metadata served at
 * /.well-known/oauth-protected-resource, which is what makes an MCP
 * client start the inline sign-in. Authorized calls run the
 * submission with the GitHub token the bearer token seals.
 */

import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { Library } from "./library.js";
import { buildServer } from "./server.js";
import { RUBRICS } from "./rubrics.generated.js";
import { handleSubmitHost, performSubmission, type SubmitEnv } from "./submit.js";
import {
  handleAuthRoutes,
  protectedResourceMetadata,
  unauthorizedResponse,
  verifyAccessToken,
} from "./auth.js";

/** Minimal shape of the Rate Limiting binding (see wrangler.toml). */
interface RateLimiterBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

interface Env extends SubmitEnv {
  RATE_LIMITER?: RateLimiterBinding;
}

function embeddedLibrary(): Library {
  const library = new Library();
  for (const [id, text] of Object.entries(RUBRICS)) library.add(id, text);
  return library;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (env?.RATE_LIMITER) {
      try {
        const key = request.headers.get("CF-Connecting-IP") ?? "unknown";
        const { success } = await env.RATE_LIMITER.limit({ key });
        if (!success) {
          return new Response(
            "Too Many Requests. The hosted ProductRubric MCP server allows 100 requests per minute per IP. Wait a minute and try again.",
            {
              status: 429,
              headers: {
                "content-type": "text/plain; charset=utf-8",
                "retry-after": "60",
              },
            },
          );
        }
      } catch {
        // Rate limiting is best-effort only.
      }
    }

    const url = new URL(request.url);
    if (url.hostname === "submit.productrubric.com") {
      const authResponse = await handleAuthRoutes(request, env);
      if (authResponse) return authResponse;
      return handleSubmitHost(request, env);
    }
    if (
      (url.pathname === "/.well-known/oauth-protected-resource" ||
        url.pathname === "/.well-known/oauth-protected-resource/mcp") &&
      request.method === "GET"
    ) {
      return protectedResourceMetadata();
    }
    if (url.pathname === "/" && request.method === "GET") {
      return new Response(
        "ProductRubric MCP server. Connect an MCP client to this URL to use the list_rubrics, get_rubric, and about tools. Documentation: https://github.com/productrubric/product-rubric",
        { headers: { "content-type": "text/plain; charset=utf-8" } },
      );
    }

    const asConfigured = Boolean(env?.GITHUB_CLIENT_ID && env?.GITHUB_CLIENT_SECRET);
    let submitter: ((input: unknown) => Promise<string>) | undefined;
    if (asConfigured && request.method === "POST") {
      let bodyText = "";
      try {
        bodyText = await request.clone().text();
      } catch {
        bodyText = "";
      }
      if (bodyText.includes('"submit_rubric"')) {
        const ghToken = await verifyAccessToken(env, request.headers.get("authorization"));
        if (!ghToken) return unauthorizedResponse();
        submitter = (input: unknown) => performSubmission(fetch, ghToken, input);
      }
    }

    const server = buildServer(embeddedLibrary(), {
      submitEnabled: asConfigured,
      submitter,
    });
    const transport = new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
      enableJsonResponse: true,
    });
    await server.connect(transport);
    return transport.handleRequest(request);
  },
};
