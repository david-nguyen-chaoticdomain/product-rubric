# ProductRubric MCP server

The MCP server for [ProductRubric](https://github.com/productrubric/product-rubric). It serves the library's rubric files to any MCP client through three tools:

- `list_rubrics`: list the available rubrics (id, name, category, summary, scale, level), optionally filtered by category.
- `get_rubric`: the full text of one rubric file, exactly as written, for the calling AI to apply.
- `about`: the server's identity card (version, author, licenses, library counts, links).

It also offers prompts (apply a rubric, review a survey, critique a design board, author a new rubric) and exposes every rubric as a `rubric://` resource for clients that support attaching resources.

The server holds no user data, needs no API key, and never receives the material being evaluated. Evaluations run in the user's own chat, on their own AI.

## Run it locally

From this folder:

```sh
npm install
npm run build
npm start
```

By default, inside this repository the server reads the repo's own `rubrics/` folder, so edits and new rubric files are picked up on restart. To serve a different folder (a team's own rubrics, in the format described in `../FORMAT.md`):

```sh
npx product-rubric-mcp --dir /path/to/rubrics
# or
RUBRICS_DIR=/path/to/rubrics npx product-rubric-mcp
```

With no directory available, the server falls back to the shipped library embedded at build time.

Point your MCP client at the stdio command above. For the hosted copy, connect your client to `https://mcp.productrubric.com` instead; no key or header is needed.

## How the hosted copy is built

`src/worker.ts` is a Cloudflare Worker (see `wrangler.toml`). It serves the shipped library only, embedded into `src/rubrics.generated.ts` by `scripts/gen-rubrics.mjs`. That generated file is a build artifact (gitignored, not committed): `npm run build` and `npm run deploy` both run the generator first. A GitHub-connected Cloudflare deploy must likewise run `npm run gen` as its build step before `wrangler deploy`.

The hosted copy is rate limited to 100 requests per minute per client IP, through the Workers Rate Limiting binding declared in `wrangler.toml`; over the limit the Worker answers 429. A normal MCP session uses a handful of requests at connect and a few per review, so the limit only trips on loops and scrapers. Counters are per Cloudflare location and eventually consistent, and the check fails open, so a limiter problem never breaks a tool call. The local stdio server has no limit.

## The submission helper and authorization server (submit.productrubric.com)

The same Worker serves the sign-in and submission machinery on the
submit.productrubric.com hostname. It powers two submission routes:

- One-click submission from the builder at productrubric.com/create
  (src/submit.ts). The contributor signs in with GitHub (OAuth app
  "ProductRubric Submit", owned by this org), and the helper opens
  the pull request under their own account: it makes sure their fork
  exists, creates a branch, commits the rubric and the worked
  example, and opens the PR against main. The visitor's token arrives
  per request and is never stored or logged.
- Direct submission from an MCP client, through the submit_rubric
  tool (src/auth.ts). The submit host doubles as an OAuth 2.1
  authorization server for the MCP: a client that calls submit_rubric
  without a token gets a 401 pointing at the protected-resource
  metadata on mcp.productrubric.com, discovers this server, registers
  itself (dynamic client registration), and sends its user through
  GitHub sign-in inline. The token it receives seals the user's
  GitHub token inside it (AES-GCM, key derived from the client
  secret); nothing is stored server-side, and the GitHub app's one
  callback URL serves both flows, told apart by a cookie. Clients
  that cannot do this fall back to the builder, whose Start from list
  imports an AI-prepared draft directly.

Routes on the submit host: GET / (about), GET /auth/start and
/auth/callback (the sign-in round trips for both flows), POST
/submit (the GitHub sequence for the builder, token in the
Authorization header, CORS limited to productrubric.com), GET
/.well-known/oauth-authorization-server, POST /oauth/register, GET
/oauth/authorize, POST /oauth/token. GET /handoff, the old
paste-your-files page, redirects to the builder, which took over its
job through draft import.

The routes stay inert until two environment values are set on the
Worker, GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET, and the
submit.productrubric.com custom domain is attached to the Worker.
Until then the auth routes answer 503 and nothing else changes; the
MCP service on mcp.productrubric.com is unaffected either way. The
hosted MCP advertises submit_rubric only when those values are set;
the local package stays read-only.

## Layout

- `src/frontmatter.ts`: the small frontmatter reader for the rubric format.
- `src/library.ts`: the in-memory library and its two operations.
- `src/directory.ts`: fills the library from a rubrics folder on disk.
- `src/server.ts`: the MCP server: its tools, prompts, resources, and instructions.
- `src/stdio.ts`: the local entry point (`npx product-rubric-mcp`).
- `src/submit.ts`: the submission helper: builder sign-in, the GitHub submission sequence, and validation shared by both routes.
- `src/auth.ts`: the authorization server for MCP submission: sealed tokens, dynamic client registration, and the authorize and token endpoints.
- `src/worker.ts`: the hosted entry point (Cloudflare Worker).
- `src/rubrics.generated.ts`: generated at build time by the script above; do not edit by hand.
