/**
 * Fill a Library from a rubrics directory on disk (Node only; used by the
 * stdio entry and by scripts/gen-rubrics.mjs logic).
 *
 * Layout: <dir>/<category>/<rubric>.md. Files whose names start with "_"
 * (such as _template.md) are authoring aids, not rubrics, and are skipped.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { Library } from "./library.js";

export function libraryFromDirectory(rubricsDir: string): Library {
  const library = new Library();
  for (const entry of readdirSync(rubricsDir)) {
    const categoryPath = join(rubricsDir, entry);
    if (!statSync(categoryPath).isDirectory()) continue;
    for (const file of readdirSync(categoryPath)) {
      if (!file.endsWith(".md") || file.startsWith("_")) continue;
      const text = readFileSync(join(categoryPath, file), "utf8");
      library.add(file.slice(0, -3), text);
    }
  }
  return library;
}
