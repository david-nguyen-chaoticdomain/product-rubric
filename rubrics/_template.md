---
name: 
<!-- The rubric's display name, in title case. The filename is the rubric's ID in lowercase kebab-case; rename this file to match. -->
category: 
<!-- The category. It must match the name of the folder this file lives in. -->
version: 1.0
summary: 
<!-- One plain sentence saying what this rubric evaluates. -->
when_to_use: 
<!-- One or two sentences describing the situations this rubric is for, written the way a user would describe the task. This becomes the trigger description when the rubric is wrapped as a Skill. -->
inputs: 
<!-- What the AI needs to run the evaluation, stated plainly. -->
scale: 
<!-- The scoring scale in short form, or the word none when this rubric does not score. -->
level: 
<!-- One of: simple (one self-contained input, one narrow question), standard (one screen or flow, structured criteria, no outside context required), deep (needs more than the artifact itself: a board, a rationale, a task, or requested context). Level describes the run, not the rubric's quality. -->
author: 
<!-- Your name. Required for contributed rubrics. -->
author_url: 
<!-- Optional. One public URL for you: a website, a LinkedIn profile, or a GitHub profile. Never an email address. -->
source_author: 
<!-- Optional. Fill in the next three fields only when this rubric is based on a published source. -->
source_title: 
source_url: 
---

## Purpose

<!-- Say what this rubric evaluates and what it is for. Name what it is not for. If the AI should refuse to run under some condition (for example, an input with nothing analyzable in it), state that gate here. Delete this comment when the section is written. -->

## Procedure

<!-- OPTIONAL. Include this section only when the rubric runs as a protocol with steps the AI must perform in order (a timed test, a multi-pass review, a simulation). List the steps in order. If there is no genuine sequence, delete this whole section. -->

## Criteria

<!-- One block per criterion, in this shape:

### Criterion name
- What to examine: where the AI should look and what evidence counts.
- What good looks like: the standard, stated concretely.
- What bad looks like: the failure, stated just as concretely.

Write the good and bad lines so that two runs would judge the same screen the same way. Delete this comment when the section is written. -->

## Scoring

<!-- Define every level of the scale with a label and a description. State the not-applicable rule: when a criterion cannot be judged from the input, what the AI reports instead of a score. State how the overall result is calculated.

If this rubric has no scores, say so here, and state that the AI must not invent a rating. Delete this comment when the section is written. -->

## Output format

<!-- Give the exact structure the AI must return: the order of the parts, what each part contains, and how findings are labeled. End the structure with a closing line or section naming the highest-impact fixes, and then the summary block (see FORMAT.md, "The summary block"): specify its counts line in this rubric's vocabulary, its gate line if this rubric's verdict has gate criteria, and its result line.

Recommended: include one calibrated example finding written the way this rubric wants, and one vague finding marked as not acceptable. Delete this comment when the section is written. -->

## Honesty rules

<!-- List the claims the AI must not make while running this rubric: what the evaluation cannot establish, what the AI must not invent, and how predictions must be labeled as predictions. Delete this comment when the section is written. -->

## Sources

<!-- Include this section only when the rubric is based on a published source. Credit the source author and link the source. State what the rubric takes from the source and what is original to the rubric, and state plainly when the rubric is not affiliated with or endorsed by the source author or their organization. Delete this whole section when there is no source. -->
