#!/usr/bin/env node
/**
 * Local entry point (stdio transport), for `npx product-rubric-mcp` and for
 * running inside this repository.
 *
 * Which rubrics are served, in order:
 *   1. the --dir <path> argument, if given;
 *   2. the RUBRICS_DIR environment variable, if set;
 *   3. the library embedded at build time (the shipped defaults).
 *
 * A local directory lets a team serve its own rubric files, in the format
 * described in FORMAT.md, through the same two tools.
 */

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { existsSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Library } from "./library.js";
import { libraryFromDirectory } from "./directory.js";
import { RUBRICS } from "./rubrics.generated.js";

function embeddedLibrary(): Library {
  const library = new Library();
  for (const [id, text] of Object.entries(RUBRICS)) library.add(id, text);
  return library;
}

function resolveRubricsDir(): string | null {
  const args = process.argv.slice(2);
  const dirFlag = args.indexOf("--dir");
  if (dirFlag !== -1 && args[dirFlag + 1]) return resolve(args[dirFlag + 1]);
  if (process.env.RUBRICS_DIR) return resolve(process.env.RUBRICS_DIR);

  // In this repository the rubrics live two levels above mcp/dist/.
  const here = dirname(fileURLToPath(import.meta.url));
  const repoRubrics = resolve(here, "../../rubrics");
  if (existsSync(repoRubrics) && readdirSync(repoRubrics).length > 0) {
    return repoRubrics;
  }
  return null;
}

async function main(): Promise<void> {
  const dir = resolveRubricsDir();
  const library = dir ? libraryFromDirectory(dir) : embeddedLibrary();

  const skipped = library.skippedIds();
  if (skipped.length > 0) {
    console.error(
      `product-rubric-mcp: skipped malformed rubric files: ${skipped.join("; ")}`,
    );
  }
  console.error(
    `product-rubric-mcp: serving ${library.ids().length} rubrics${dir ? ` from ${dir}` : " (embedded library)"}`,
  );

  const { buildServer } = await import("./server.js");
  const server = buildServer(library);
  await server.connect(new StdioServerTransport());
}

main().catch((err) => {
  console.error("product-rubric-mcp: fatal", err);
  process.exit(1);
});
