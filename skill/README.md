# ProductRubric Skill pack

Each folder in this directory is one installable Skill, generated from the rubric of the same name in `../rubrics/`. A skill folder holds two files:

- `SKILL.md` is the skill definition: its name, the description your AI tool uses to decide when the skill applies, and the instructions for applying the rubric.
- `rubric.md` is the rubric itself, copied verbatim from the library.

## Install

Copy any rubric's folder into your AI tool's skills directory, and the assistant can apply that rubric when you ask for that kind of review. Which directory that is depends on the tool. For Claude, it is `.claude/skills/` inside a project, or `~/.claude/skills/` for your user account.

## Regenerate

These folders are generated. Do not edit them by hand. Edit the rubric in `../rubrics/` instead, then run:

    node scripts/build-skill.mjs
