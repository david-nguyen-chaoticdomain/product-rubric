/**
 * Hosted entry point: a Cloudflare Worker serving the shipped library at
 * https://mcp.productrubric.com (see wrangler.toml).
 *
 * Stateless streamable HTTP: each request builds a fresh server over the
 * embedded library (generated at build time from the repository's rubrics
 * by scripts/gen-rubrics.mjs). No sessions, no storage, no keys: the
 * hosted copy serves the public defaults only. Teams with their own
 * rubrics run the local package instead.
 */

import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { Library } from "./library.js";
import { buildServer } from "./server.js";
import { RUBRICS } from "./rubrics.generated.js";

function embeddedLibrary(): Library {
  const library = new Library();
  for (const [id, text] of Object.entries(RUBRICS)) library.add(id, text);
  return library;
}

export default {
  async fetch(request: Request): Promise<Response> {
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
