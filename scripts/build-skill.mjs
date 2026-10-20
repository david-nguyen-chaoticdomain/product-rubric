#!/usr/bin/env node
// build-skill.mjs — generate the ProductRubric Skill pack from the rubric files.
//
// Usage: node scripts/build-skill.mjs [rubrics-dir] [out-dir]
// Defaults: rubrics/ and skill/ relative to the repo root (the parent of scripts/).
//
// Each rubric becomes one installable skill folder:
//   skill/<rubric-id>/SKILL.md   frontmatter (name + trigger description) and instructions
//   skill/<rubric-id>/rubric.md  the rubric file, verbatim
// The rubric files stay the single source of truth; rerun this after editing one.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const rubricsDir = process.argv[2] ? join(process.cwd(), process.argv[2]) : join(root, "rubrics");
const outDir = process.argv[3] ? join(process.cwd(), process.argv[3]) : join(root, "skill");

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return {};
  const fields = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) fields[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return fields;
}

const ids = [];
for (const category of readdirSync(rubricsDir, { withFileTypes: true })) {
  if (!category.isDirectory()) continue;
  for (const file of readdirSync(join(rubricsDir, category.name))) {
    if (!file.endsWith(".md") || file.startsWith("_")) continue;
    const id = file.replace(/\.md$/, "");
    const text = readFileSync(join(rubricsDir, category.name, file), "utf8");
    const fm = frontmatter(text);
    if (!fm.name || !fm.when_to_use || !fm.summary) {
      console.error(`skip ${id}: missing name, summary, or when_to_use`);
      continue;
    }
    const dir = join(outDir, id);
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(dir, { recursive: true });

    const hasContext = text.includes("## Context requests");
    const contextPara = hasContext
      ? "\nThis rubric includes a Context requests section. Before judging, ask the user for that context in one grouped round, and only for items the rubric names. If the user cannot or does not want to answer, proceed and report the gap the way the rubric instructs.\n"
      : "";
    const attribution = fm.author
      ? `Rubric author: ${fm.author}${fm.author_url ? ` (${fm.author_url})` : ""}.`
      : "See the rubric file for authorship.";

    const skill = `---
name: ${id}
description: ${fm.when_to_use}
---

# ${fm.name}

${fm.summary}

## How to use this skill

Apply the rubric in \`rubric.md\`, bundled in this folder, to the material the user provides. Follow the rubric exactly as written: its criteria, its scoring, its output format, and its honesty rules. Do not merge it with other rubrics, and do not soften or omit findings the rubric requires.
${contextPara}
## Attribution

From ProductRubric, the open library of evaluation rubrics: https://github.com/productrubric/product-rubric
${attribution} Rubric text is licensed CC BY 4.0.
`;
    writeFileSync(join(dir, "SKILL.md"), skill);
    writeFileSync(join(dir, "rubric.md"), text);
    ids.push(id);
    console.log(`skill: ${id}`);
  }
}
console.log(`build-skill: generated ${ids.length} skills into ${outDir}`);
