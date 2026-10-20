# ProductRubric MCP server

The MCP server for [ProductRubric](https://github.com/productrubric/product-rubric). It serves the library's rubric files to any MCP client through three tools:

- `list_rubrics`: list the available rubrics (id, name, category, summary, scale, level), optionally filtered by category.
- `get_rubric`: the full text of one rubric file, exactly as written, for the calling AI to apply.
- `about`: the server's identity card (version, author, licenses, library counts, links).

It also offers prompts (apply a rubric, review a survey, critique a design board) and exposes every rubric as a `rubric://` resource for clients that support attaching resources.

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

## Layout

- `src/frontmatter.ts`: the small frontmatter reader for the rubric format.
- `src/library.ts`: the in-memory library and its two operations.
- `src/directory.ts`: fills the library from a rubrics folder on disk.
- `src/server.ts`: the MCP server: its tools, prompts, resources, and instructions.
- `src/stdio.ts`: the local entry point (`npx product-rubric-mcp`).
- `src/worker.ts`: the hosted entry point (Cloudflare Worker).
- `src/rubrics.generated.ts`: generated at build time by the script above; do not edit by hand.
