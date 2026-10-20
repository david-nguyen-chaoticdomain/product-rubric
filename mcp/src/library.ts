/**
 * The rubric library: an in-memory collection of rubric files with the
 * two operations the MCP tools expose. Platform-neutral: the stdio entry
 * fills it from a directory (see directory.ts) and the hosted Worker fills
 * it from the embedded records (see rubrics.generated.ts).
 */

import {
  parseFrontmatter,
  missingRequiredFields,
} from "./frontmatter.js";

export interface Rubric {
  id: string;
  name: string;
  category: string;
  version: string;
  summary: string;
  when_to_use: string;
  inputs: string;
  scale: string;
  level: string;
  author?: string;
  author_url?: string;
  /** The complete file text, frontmatter included, exactly as written. */
  text: string;
}

export class Library {
  private rubrics: Rubric[] = [];
  private skipped: string[] = [];

  /**
   * Add one rubric file's text under the given id (its filename without
   * the .md extension). Files missing a required frontmatter field are
   * skipped and recorded, per FORMAT.md: a malformed file is not served.
   */
  add(id: string, text: string): void {
    const parsed = parseFrontmatter(text);
    if (!parsed) {
      this.skipped.push(`${id} (no frontmatter)`);
      return;
    }
    const missing = missingRequiredFields(parsed.meta);
    if (missing.length > 0) {
      this.skipped.push(`${id} (missing: ${missing.join(", ")})`);
      return;
    }
    const m = parsed.meta;
    this.rubrics.push({
      id,
      name: m.name,
      category: m.category,
      version: m.version,
      summary: m.summary,
      when_to_use: m.when_to_use,
      inputs: m.inputs,
      scale: m.scale,
      level: m.level,
      author: m.author,
      author_url: m.author_url,
      text,
    });
  }

  /** Ids of files that were skipped as malformed, for diagnostics. */
  skippedIds(): string[] {
    return [...this.skipped];
  }

  /** Public listing entries, sorted by category then name. */
  list(category?: string): Omit<Rubric, "text">[] {
    return this.rubrics
      .filter((f) => !category || f.category === category)
      .sort((a, b) =>
        a.category === b.category
          ? a.name.localeCompare(b.name)
          : a.category.localeCompare(b.category),
      )
      .map(({ text: _text, ...rest }) => rest);
  }

  get(id: string): Rubric | undefined {
    return this.rubrics.find((f) => f.id === id);
  }

  ids(): string[] {
    return this.rubrics.map((f) => f.id).sort();
  }
}
