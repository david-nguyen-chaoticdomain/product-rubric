#!/usr/bin/env node
/**
 * Validate ProductRubric rubric files against FORMAT.md.
 *
 * Checks every rubric file under rubrics/ (files whose names start with
 * an underscore, such as _template.md, are skipped, the same convention
 * the Skill generator and the MCP server use):
 *
 * - The filename is the rubric's ID in lowercase kebab-case.
 * - The frontmatter is present and carries every required field
 *   (name, category, version, summary, when_to_use, inputs, scale,
 *   level) with a non-empty value, and level is simple, standard, deep.
 * - The category field matches the folder the file lives in.
 * - The five required body sections (Purpose, Criteria, Scoring,
 *   Output format, Honesty rules) are present, in that order. Optional
 *   and unknown sections are ignored: the format grows by optional
 *   additions, and a validator that rejected them would break that.
 * - A Sources section is present whenever source_url is set.
 *
 * Usage:
 *   node scripts/validate.mjs              validate the whole library
 *   node scripts/validate.mjs <path>       validate one file or folder
 *
 * Exit code is 0 when everything checked passes, 1 otherwise. This is
 * the script CONTRIBUTING.md asks contributors to run before opening a
 * pull request, and the pull request workflow runs it on every PR, so
 * a submission is held to the same standard however it arrives.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const defaultTarget = join(repoRoot, "rubrics");

const REQUIRED_FIELDS = [
  "name",
  "category",
  "version",
  "summary",
  "when_to_use",
  "inputs",
  "scale",
  "level",
];
const LEVELS = ["simple", "standard", "deep"];
const REQUIRED_SECTIONS = [
  "Purpose",
  "Criteria",
  "Scoring",
  "Output format",
  "Honesty rules",
];
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Parse frontmatter the same way the MCP server does (mcp/src/frontmatter.ts). */
function parseFrontmatter(text) {
  if (!text.startsWith("---")) return null;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return null;
  const block = text.slice(3, end);
  const body = text.slice(end + 4).replace(/^\r?\n/, "");
  const meta = {};
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

/** Level-2 headings in the body, with fenced code blocks removed first
 *  so an example heading inside a code sample is not read as a section. */
function sectionHeadings(body) {
  const unfenced = body.replace(/^```[\s\S]*?^```/gm, "");
  const headings = [];
  for (const line of unfenced.split("\n")) {
    const match = line.match(/^##\s+(.+?)\s*$/);
    if (match) headings.push(match[1]);
  }
  return headings;
}

function validateFile(filePath, categoryFolder) {
  const problems = [];
  const fileName = basename(filePath);
  const id = fileName.replace(/\.md$/, "");

  if (!KEBAB.test(id)) {
    problems.push(
      `filename "${fileName}" is not lowercase kebab-case, so it cannot serve as the rubric's ID`,
    );
  }

  const text = readFileSync(filePath, "utf8");
  const parsed = parseFrontmatter(text);
  if (!parsed) {
    problems.push("frontmatter is missing or malformed (no closing --- fence)");
    return problems;
  }
  const { meta, body } = parsed;

  for (const field of REQUIRED_FIELDS) {
    if (!meta[field] || meta[field].trim() === "") {
      problems.push(`frontmatter field "${field}" is missing or empty`);
    }
  }

  if (meta.category && categoryFolder && meta.category !== categoryFolder) {
    problems.push(
      `category is "${meta.category}" but the file lives in the "${categoryFolder}" folder`,
    );
  }

  if (meta.level && !LEVELS.includes(meta.level)) {
    problems.push(
      `level is "${meta.level}"; it must be one of: ${LEVELS.join(", ")}`,
    );
  }

  const headings = sectionHeadings(body);
  let lastIndex = -1;
  for (const section of REQUIRED_SECTIONS) {
    const index = headings.indexOf(section);
    if (index === -1) {
      problems.push(`required section "## ${section}" is missing`);
    } else {
      if (index < lastIndex) {
        problems.push(`section "## ${section}" is out of order`);
      }
      lastIndex = Math.max(lastIndex, index);
    }
  }

  if (meta.source_url && !headings.includes("Sources")) {
    problems.push(
      'source_url is set but there is no "## Sources" section crediting the source',
    );
  }

  return problems;
}

function collectFiles(target) {
  const stat = statSync(target);
  if (stat.isFile()) return [{ path: target, folder: basename(dirname(target)) }];
  const files = [];
  for (const entry of readdirSync(target, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      for (const file of readdirSync(join(target, entry.name))) {
        if (file.endsWith(".md") && !file.startsWith("_")) {
          files.push({ path: join(target, entry.name, file), folder: entry.name });
        }
      }
    } else if (entry.name.endsWith(".md") && !entry.name.startsWith("_")) {
      files.push({ path: join(target, entry.name), folder: basename(target) });
    }
  }
  return files.sort((a, b) => a.path.localeCompare(b.path));
}

const target = process.argv[2] ? resolve(process.cwd(), process.argv[2]) : defaultTarget;
const files = collectFiles(target);

if (files.length === 0) {
  console.error(`No rubric files found under ${target}. Nothing was validated.`);
  process.exit(1);
}

let failed = 0;
for (const { path, folder } of files) {
  const shown = path.startsWith(repoRoot) ? path.slice(repoRoot.length + 1) : path;
  const problems = validateFile(path, folder);
  if (problems.length === 0) {
    console.log(`ok    ${shown}`);
  } else {
    failed += 1;
    for (const problem of problems) console.log(`FAIL  ${shown}: ${problem}`);
  }
}

console.log(
  `\nValidated ${files.length} rubric file${files.length === 1 ? "" : "s"}: ` +
    `${files.length - failed} passed, ${failed} failed.`,
);
process.exit(failed === 0 ? 0 : 1);
