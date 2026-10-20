/**
 * A minimal frontmatter reader for ProductRubric files.
 *
 * The ProductRubric format (see FORMAT.md) uses simple `key: value` lines
 * between `---` fences, with plain scalar values only. This parser handles
 * exactly that subset, so the server needs no YAML dependency. Values may
 * contain colons (URLs, for example); the split is on the first ": ".
 */

export interface ParsedFile {
  meta: Record<string, string>;
  body: string;
}

export function parseFrontmatter(text: string): ParsedFile | null {
  if (!text.startsWith("---")) return null;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return null;

  const block = text.slice(3, end);
  const body = text.slice(end + 4).replace(/^\r?\n/, "");

  const meta: Record<string, string> = {};
  for (const rawLine of block.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) meta[key] = value;
  }

  return { meta, body };
}

/** Fields FORMAT.md requires in every rubric file's frontmatter. */
export const REQUIRED_FIELDS = [
  "name",
  "category",
  "version",
  "summary",
  "when_to_use",
  "inputs",
  "scale",
  "level",
] as const;

export function missingRequiredFields(meta: Record<string, string>): string[] {
  return REQUIRED_FIELDS.filter((f) => !meta[f] || meta[f].trim() === "");
}
