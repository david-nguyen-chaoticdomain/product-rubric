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
 */

import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { Library } from "./library.js";
import { buildServer } from "./server.js";
import { RUBRICS } from "./rubrics.generated.js";

/** Minimal shape of the Rate Limiting binding (see wrangler.toml). */
interface RateLimiterBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

interface Env {
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
    if (url.pathname === "/" && request.method === "GET") {
      return new Response(
        "ProductRubric MCP server. Connect an MCP client to this URL to use the list_rubrics, get_rubric, and about tools. Documentation: https://github.com/productrubric/product-rubric",
        { headers: { "content-type": "text/plain; charset=utf-8" } },
      );
    }

    const server = buildServer(embeddedLibrary());
    const transport = new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
      enableJsonResponse: true,
    });
    await server.connect(transport);
    return transport.handleRequest(request);
  },
};
