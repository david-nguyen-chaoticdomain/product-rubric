# The ProductRubric file format

A rubric is one Markdown file. The filename is the rubric's ID, written in lowercase kebab-case (for example, `design-principles-score.md`). The file has two parts: YAML frontmatter that machines read, and a body that the AI reads.

The format is domain neutral. Categories are folders under `rubrics/`, and nothing in the format assumes the rubric is about design.

This document is version 1 of the format. How the format itself changes over time is covered in the last section.

## Frontmatter

Required fields:

- `name`: the rubric's display name, in title case.
- `category`: the rubric's category. It must match the name of the folder the file lives in.
- `version`: the rubric's version, starting at 1.0. Raise it when the criteria, the scale, or the output format changes in a way that would make results hard to compare with earlier runs.
- `summary`: one plain sentence saying what the rubric evaluates.
- `when_to_use`: one or two sentences describing the situations this rubric is for. This text becomes the trigger description when the rubric is wrapped as a Skill, so write it the way a user would describe the task.
- `inputs`: what the AI needs to run the evaluation, stated plainly (for example, a screenshot, a flow, or a written description).
- `scale`: the scoring scale in short form (for example, `1-5 per principle; overall 0-100`), or `none` when the rubric does not score.
- `level`: the rubric's depth, one of `simple`, `standard`, or `deep`. It tells a reader what running this rubric asks of them:
  - `simple`: one self-contained input (a single screen), one narrow question, and no outside context needed.
  - `standard`: one screen or one flow judged against a structured set of criteria, with a fuller report. Still no outside context required.
  - `deep`: needs more than the artifact itself: a multi-frame board, a rationale, a stated task, or context the AI requests in conversation.

  Level describes the run, never the rubric's quality or importance; a simple rubric is not a lesser one. Choose the level by the mechanical test (what must the user supply, and how much judgment does the report carry?), not by prestige.

Optional fields:

- `author`: the name of the person who wrote the rubric. Required for contributed rubrics.
- `author_url`: one public URL for the author, such as a website, a LinkedIn profile, or a GitHub profile. Never an email address.
- `source_author`, `source_title`, `source_url`: the published source the rubric is based on, when one exists. Use these when the rubric adapts a method or framework that its author (or another author) has published elsewhere. A rubric based on a published source also carries a Sources section at the end of the body; see below.

## Body sections

The body has five required sections, in this order. A file that is missing a required section is malformed: the server skips it and the validation script fails it on a pull request.

### 1. Purpose

Say what the rubric evaluates and what it is for. Name what it is not for, so the AI does not stretch it onto tasks it cannot judge. If the rubric has an input gate (a condition under which the AI should refuse to run, such as an input with nothing analyzable in it), state the gate here.

### Optional: Procedure

Most rubrics do not need this section. A rubric that runs as a protocol, where the AI must perform a sequence of steps in order (a timed test, a multi-pass review, a simulation), may add a `## Procedure` section between Purpose and Criteria, listing the steps in order. If a rubric has no genuine sequence, leave the section out; do not restate the criteria as steps.

### Optional: Context requests

A rubric may declare context it needs beyond the artifact itself: the goal of the piece, its audience, the constraints it was designed under. When a rubric declares context requests, the AI asks the user for the missing items in conversation, in one grouped round, before judging, and only for items that would otherwise be unjudgeable and that the user plausibly knows. If the user declines or cannot answer, the run proceeds and the affected criteria are reported as not judged, with the missing context named.

Two rules keep this honest. Context (intent, audience, constraints) can be supplied in conversation and then judged normally. Evidence cannot: work that should exist in the submission itself (a state that was never designed, a rationale that was never written) is not created by describing it, and anything judged from a description instead of the artifact is flagged as judged from a description. In a host that cannot hold a conversation, this section doubles as the list of what to name as missing in the report.

### 2. Criteria

One block per criterion. Each block carries:

- The criterion's name.
- What to examine: where the AI should look and what evidence counts.
- What good looks like: the standard, stated concretely enough that two runs would judge the same screen the same way.
- What bad looks like: the failure, stated just as concretely.

### 3. Scoring

Define every level of the scale with a label and a description. State the not-applicable rule: when a criterion cannot be judged from the input, what the AI reports instead of a score. State how the overall result is calculated, including how not-applicable criteria are treated.

A rubric with no scores still has this section. It states that there are no scores and that the AI must not invent a rating.

### 4. Output format

Give the exact structure the AI must return: the order of the parts, what each part contains, and how findings are labeled. End the structure with a closing line or section that names the highest-impact fixes, so every evaluation finishes with priorities rather than a flat list.

A calibrated example inside this section helps: one finding written the way the rubric wants, and one vague finding marked as not acceptable.

Every rubric's output format also ends, after the closing fixes, with the tracking summary block described in the next section. The rubric's own Output format section specifies the block's counts and result lines in the block's fixed shape.

### The tracking summary block

The last element of every report is a small block in a fixed form, headed "Rubric summary, for tracking." Its purpose is record keeping: a team that runs a rubric repeatedly can keep the blocks and watch its criterion results change over time. That is how a team answers "are we improving?" with these reports. Not from any single run, which is one structured judgment and carries the noise of one, but from the trend across many runs of the same rubric at the same version: criteria migrating from the lowest grade to the highest, gate failures getting rarer, flaw counts by severity shrinking.

The block has a fixed shape:

```
Rubric summary, for tracking
Rubric: {name} v{version} · Date: {date of the run} · Artifact: {the artifact's name as given, or: not named}
{counts line}
{gate line, when the rubric has gate criteria}
{result line}
```

- The counts line tallies the report's own judgments in the rubric's own vocabulary: criteria at each grade, findings at each severity, flaws at each rating, claims audited, whatever the rubric produces. It never converts those tallies into a new score.
- The gate line, for rubrics whose overall verdict has gate criteria, names the gate criteria that were not met, or says none. A team tracking only the result line would miss a gate that keeps failing while everything else improves; the gate line exists so that cannot happen quietly.
- The result line repeats the report's overall result exactly: the verdict in the rubric's own words, or the native score for a rubric that scores. It introduces no rating the rubric does not already produce.

Every value in the block is copied or counted from the judgments in the same report. If a value cannot be derived from the report, the block says so instead of estimating. The rubric version in the first line is part of the record: when a rubric's criteria or scale change, its version rises, and trend lines should be read within a version.

### 5. Honesty rules

List the claims the AI must not make while running this rubric. Cover what the evaluation cannot establish (for example, how real users will behave), what the AI must not invent (elements, states, or data that are not in the input), and how the AI should label predictions as predictions.

## Sources section (optional, closing)

When a rubric is based on a published source, end the file with a `## Sources` section after the honesty rules. Credit the source author and link the source. State what the rubric takes from the source and what is original to the rubric, and state plainly when the rubric is not affiliated with or endorsed by the source author or their organization.

Methods, principle lists, processes, and rating scales are ideas. The words used to explain them belong to whoever wrote them. Describe public methods in your own writing and credit the source. Never paste a source's definitions, explanations, or examples into a rubric.

## Validation rules

The validation script checks every rubric file for:

- All required frontmatter fields present.
- The `category` field matching the folder the file lives in.
- All five required body sections present, in order.
- A Sources section present whenever the `source_url` field is set.

The validator checks that the required pieces are present. It does not reject fields or sections it does not know.

## How this format changes

This format will need to grow, and growth is safe as long as it follows one rule: additions are optional first. A new optional frontmatter field or a new optional section can be added at any time, because readers ignore fields and sections they do not know, and every file written against an older version of this format stays valid.

The required core, meaning the required frontmatter fields and the five body sections, changes rarely, and only alongside a new version of this document. When that happens, older files remain readable: the server and the scripts keep supporting the previous required core, and the change is described here with the version number at the top raised.
