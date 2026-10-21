---
name: TEST GITHUB OAUTH
category: marketing
version: 1.0
summary: A test rubric created only to verify the GitHub OAuth one-click submission flow.
when_to_use: Never in production. This rubric exists to test the submission plumbing.
inputs: Any short piece of marketing copy.
scale: One verdict: pass or fail
level: simple
# The author was not sure of the depth; simple is the builder's suggestion from their answers, for a reviewer to confirm.
author: Test Owner
---
<!-- source: builder -->

## Purpose

Confirm that a signed-in visitor can submit a rubric and a worked example in one click and get a pull request.

## Criteria

### 1. OAuth flow completes
- What to examine: Whether the sign-in, the token return, and the submission all complete.
- What good looks like: A pull request opens with both files and the page shows its link.
- What bad looks like: Any step errors, stalls, or opens GitHub's file editor.

## Scoring

One verdict: pass if the pull request opens with both files, fail otherwise.

## Output format

Return the report in this order:

1. A one-paragraph orientation: what was reviewed, against which criteria, and the shape of the result.
2. Findings, criterion by criterion, in the rubric's order. Label every finding with the criterion it belongs to. For each finding, name the specific element or passage it is about, what the rubric's standard says, and what you found.
3. The highest-impact fixes: the three changes that would improve the work most, in order, each in one sentence.

Write findings the way this example is written: "[Criterion] The step indicator shows step 2 of 4, but the back link returns to the cart instead of step 1, so a shopper who wants to fix a quantity has to restart." A finding like "the flow could be clearer" is not acceptable: it names no element and no standard.

End the report with the summary block, in this exact shape:

```
Rubric summary
Rubric: TEST GITHUB OAUTH v1.0 · Date: {date of the run} · Artifact: {the artifact's name as given, or: not named}
{counts line: the report's judgments tallied in this rubric's own terms, copied from the report, never converted into a new score}
{result line: the report's overall result, in this rubric's own words}
```

Every value in the block is copied or counted from the judgments in the same report. If a value cannot be derived from the report, the block says so instead of estimating.

## Honesty rules

- Do not invent elements, states, data, or content that are not in the input. Judge only what is there.
- Label predictions as predictions. This rubric cannot establish how real people will behave, and it must not present a prediction as an observed result.
