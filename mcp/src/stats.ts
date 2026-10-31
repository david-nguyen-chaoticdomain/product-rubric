/**
 * Usage statistics extraction for the hosted server.
 *
 * The hosted MCP server is stateless and sees no user content: a request
 * contains only protocol messages (a tool name, a rubric id, the client's
 * self-reported name and version). This module turns a raw JSON-RPC
 * request body into aggregate stat events of exactly that shape, so the
 * Worker can count which tools and rubrics are used and which clients
 * connect, without recording anything about the material being reviewed.
 *
 * Pure function, no I/O: the Worker writes the returned events to
 * Cloudflare Workers Analytics Engine when the STATS binding exists.
 */

export interface StatEvent {
  /** Event kind: initialize, tool, prompt, or resource. */
  kind: string;
  /** Tool, prompt, or client name, depending on kind. */
  name: string;
  /** Rubric id for get_rubric and resource reads, category for
   *  list_rubrics, client version for initialize. Empty when not applicable. */
  detail: string;
}

interface JsonRpcMessage {
  method?: unknown;
  params?: {
    name?: unknown;
    uri?: unknown;
    arguments?: Record<string, unknown>;
    clientInfo?: { name?: unknown; version?: unknown };
  };
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function extractEvents(bodyText: string): StatEvent[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(bodyText);
  } catch {
    return [];
  }
  const messages: JsonRpcMessage[] = Array.isArray(parsed)
    ? (parsed as JsonRpcMessage[])
    : [parsed as JsonRpcMessage];

  const events: StatEvent[] = [];
  for (const message of messages) {
    const method = asString(message?.method);
    const params = message?.params ?? {};
    if (method === "initialize") {
      events.push({
        kind: "initialize",
        name: asString(params.clientInfo?.name),
        detail: asString(params.clientInfo?.version),
      });
    } else if (method === "tools/call") {
      const tool = asString(params.name);
      let detail = "";
      if (tool === "get_rubric") detail = asString(params.arguments?.id);
      else if (tool === "list_rubrics") detail = asString(params.arguments?.category);
      events.push({ kind: "tool", name: tool, detail });
    } else if (method === "prompts/get") {
      events.push({ kind: "prompt", name: asString(params.name), detail: "" });
    } else if (method === "resources/read") {
      const uri = asString(params.uri);
      events.push({
        kind: "resource",
        name: uri.replace(/^rubric:\/\//, ""),
        detail: "",
      });
    }
    // Everything else (notifications, pings, list calls) is not counted.
  }
  return events;
}
