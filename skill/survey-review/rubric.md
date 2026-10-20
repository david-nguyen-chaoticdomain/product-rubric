---
name: Survey Review
category: product-research
version: 1.0
summary: Reviews a survey questionnaire question by question, finding the wording, scale, and ordering flaws that bias answers or make them impossible to give, and suggesting a corrected version of each flawed question.
when_to_use: Before a survey is sent, while the questionnaire can still be changed: for satisfaction surveys, screening surveys, product feedback surveys, and any questionnaire whose results will be quoted as evidence.
inputs: The full questionnaire text: the introduction shown to respondents, every question with its answer options and scales in order, and any skip logic described. The survey's purpose and audience, when known, sharpen the review; without them the review judges craft alone and says so.
scale: No overall score; every flaw rated Invalidating, Biasing, or Burden, with a suggested revision for each flawed question
level: standard
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to review a questionnaire before it goes to respondents. A survey's data is made at the moment the questions are written, and almost nothing afterward can repair it: a leading question produces confident, wrong numbers at scale, and the analysis stage has no way to see that the answers were manufactured by the wording. This review exists to catch the flaws while they are still sentences that can be rewritten.

The review works at two levels. At the question level, it examines every question against the criteria below and returns a suggested revision for each flawed one, in the manner of the Copy Review rubric in the product design library: the flaw is named, and a corrected version is offered at the same job and roughly the same length. At the questionnaire level, it judges the instrument as a whole: its order, its scales, its length, and whether every question earns its place.

This rubric reviews the questionnaire as an instrument for collecting answers people can actually give. It does not design the study around it (sampling, recruitment, and analysis belong to the Study Plan Review), and it does not guarantee results: a flawless questionnaire can still be sent to the wrong people. What it guarantees is narrower and worth having: the questions themselves are not the reason the answers mislead.

If the input is not a questionnaire (a plan to write one, a list of topics, results from a survey already run), say so and stop. Results from a survey already run cannot be reviewed by this rubric; flawed wording in fielded results is noted as a caution in interpretation, not repaired.

## Context requests

If the survey's purpose or audience is not stated and this is a conversation, ask for them in one grouped round before reviewing: what decision the results feed, and who will receive the survey. Two criteria (Answerable, and Every question earns its place) depend on them. If they cannot be supplied, review on craft alone and mark those two criteria as judged without the purpose, which limits what their findings can claim.

## Criteria

Review every question against criteria 1 to 5. Judge the questionnaire as a whole against criteria 6 and 7.

### 1. Neutral wording
The question does not push toward an answer.
- What to examine: Loaded words and praise baked into the premise ("our new streamlined checkout"); questions that assume the respondent agrees with a claim; answer options phrased so one side sounds like the reasonable one; introductions that announce what the team hopes to hear.
- What good looks like: A respondent who loves the product and a respondent who is about to leave it can both answer the question as written, without arguing with it first.
- What bad looks like: "How much do you love the new design?" with a scale from a lot to a little; "Do you agree that pricing is unfair?" as the survey's first contact with the topic.

### 2. One question per question
Each item asks exactly one thing.
- What to examine: Any question joining two ideas with "and" or a slash, where a respondent could honestly answer the halves differently; questions bundling an experience with its evaluation (did it happen, and was it good); scales asked to carry two judgments at once.
- What good looks like: Every answer maps to exactly one fact or judgment, and the analyst will never have to guess which half a respondent meant.
- What bad looks like: "Was the setup fast and easy to understand?" A respondent who found it fast and confusing has no truthful box to tick.

### 3. Answerable from the respondent's position
A respondent can produce a true answer from what they know and remember.
- What to examine: Questions asking for recall beyond plausible memory (exact counts from months ago); questions asking people to judge things they cannot observe (why a system behaved as it did, what other users think); hypothetical predictions ("would you use X") presented as though they measure behavior; questions whose truthful answer is "it depends" with no way to say so.
- What good looks like: Every question can be answered from the respondent's own recent experience, with a recall window the question itself provides.
- What bad looks like: "How many times did you visit settings last quarter?" as a free recall question; "Why did you not complete your purchase?" asked of people whose records show they did.

### 4. Scales that behave
Rating scales are balanced, fully labeled, and consistent across the questionnaire.
- What to examine: Symmetry of positive and negative options; whether every point is labeled or only the ends, and whether end-only labels leave the middle to guesswork; the same construct measured on different scales in different questions; scales whose numeric direction flips between questions; a neutral midpoint offered where neutrality is meaningful and withheld where the survey needs a lean; "not applicable" and "don't know" available where a respondent may genuinely have neither experience nor opinion.
- What good looks like: A respondent can predict what each point on every scale means before they reach it, because the questionnaire taught them once and stayed consistent.
- What bad looks like: Four shades of agreement against one disagreement; a satisfaction scale running 1 to 5 in question 3 and 5 to 1 in question 9; forcing a rating of a feature the respondent has never seen.

### 5. Answer options that cover the truth
The choices offered include the answers respondents actually have.
- What to examine: Options for exhaustiveness (the common real answers are present) and exclusivity (options do not overlap); an "other" with a text field where the list is a guess; options written in the respondent's vocabulary rather than the company's internal names; single-select questions hiding multi-select realities.
- What good looks like: Most respondents find their true answer already written, in words they would use themselves.
- What bad looks like: A reasons list containing only the causes the team already suspects; overlapping ranges ("1 to 5 times" and "5 to 10 times") where the boundary answer fits two boxes.

### 6. Order that does not contaminate
Earlier questions do not manufacture the answers to later ones.
- What to examine: The sequence: whether an early question primes a topic, a brand judgment, or a mood that later questions then measure; whether specifics come before the general evaluation they would distort; whether sensitive or demographic items sit where they belong (usually late) rather than as the greeting; whether the survey asks its most important questions while attention is still fresh.
- What good looks like: Each question meets the respondent with the least possible residue from the ones before it.
- What bad looks like: A question listing the product's new features, followed immediately by "how innovative is the product?"; income asked as question 1.

### 7. Every question earns its place
The questionnaire is as short as the decisions it feeds allow.
- What to examine: Each question against the survey's stated purpose: what decision or analysis consumes its answers; questions kept from habit, curiosity, or because a stakeholder asked once; duplicates of the same construct in different words; the total burden against what respondents were promised in the invitation.
- What good looks like: Removing any question would remove an answer the team has named a use for.
- What bad looks like: Demographic questions the analysis will never cut by; a forty-question survey whose stated decision needs six answers.

## Scoring

This rubric gives no overall score. It rates each flaw by what it does to the data:

- **Invalidating**: the flaw means answers to this question cannot be trusted for their stated purpose. The question manufactures its answers (leading wording on the survey's central measure), cannot be answered truthfully (double-barreled on the key item, recall nobody has), or its scale is broken in a way that scrambles the meaning of every response. Fix before sending; data collected with an invalidating flaw should not be quoted.
- **Biasing**: the flaw predictably pushes answers in one direction or adds noise, without destroying the question. Unbalanced scales, priming order, missing common options, mild loading. Fix before sending whenever the question matters; the finding says which direction the answers will lean.
- **Burden**: the flaw costs respondents effort, attention, or goodwill without directly corrupting answers: redundancy, unnecessary length, jargon, awkward mechanics. Fix as part of the same editing pass; burden flaws compound, and three burden flaws on adjacent questions are reported as a pattern, not as three accidents.

Every flawed question receives a rating and a suggested revision. A question with no flaw is reported as sound, briefly. Do not manufacture flaws to seem thorough: a clean questionnaire is a possible and welcome result, and it is reported as one, with the questionnaire-level criteria still judged on their own evidence.

## Output format

Return the review in this structure, in Markdown:

1. **Summary line**: the number of questions reviewed, and the counts by rating (for example, "24 questions: 2 invalidating, 5 biasing, 3 burden, 14 sound"), plus whether the purpose and audience were available to the review.
2. **Question-by-question review**, in the questionnaire's own order. For each flawed question: the question quoted exactly, its rating, the flaw in one or two sentences naming the criterion it breaks, and a suggested revision written to be pasted in its place. For each sound question: its number and the word Sound.
3. **Questionnaire as a whole**: findings under Order that does not contaminate and Every question earns its place, including any questions recommended for removal, named individually.
4. A closing section, **Highest impact fixes**, listing the invalidating and biasing flaws first in the order they should be fixed, each in one line.

Example of a finding at the standard this rubric expects:
- Acceptable: "Q7 (Biasing, breaks Neutral wording): 'How satisfied are you with our fast and friendly support team?' embeds the conclusion in the question; respondents rate the adjectives as much as the service. Suggested revision: 'How satisfied are you with the support you received?' with the scale unchanged."
- Not acceptable: "Some questions are a bit leading and should be reworded." (It quotes nothing, rates nothing, and fixes nothing.)

Finally, end the report with the summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary
Rubric: Survey Review v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Questions: Reviewed {n} · Invalidating flaws {n} · Biasing flaws {n} · Burden flaws {n} · Sound {n}
Result: {n} of {m} questions need revision before the survey is fielded
```

## Honesty rules

- Quote questions exactly. A review that paraphrases the wording it criticizes cannot be checked, and small wording differences are the entire subject of this rubric.
- Suggested revisions must preserve the question's intent and its respondent: fix the flaw, do not redesign the study through the revision. Where a question's intent is itself the flaw (the survey's real purpose is to manufacture a quotable number), say that plainly instead of laundering it into a neutral rewrite.
- Rate by effect on data, not by how the wording reads to a copywriter. An elegant question can be invalidating; an awkward one can be sound. The criteria, not prose taste, decide.
- Do not promise what a fixed questionnaire will find. This review judges the instrument, not the population; response rates, sampling, and who actually answers are outside it and are named as outside it when they matter.
- Where a judgment depends on the survey's purpose and the purpose was not supplied, mark the finding as craft-only, so a reader does not mistake a wording opinion for a verdict on the question's usefulness.

## Sources

The criteria in this rubric are the author's own, written for ProductRubric. They draw on the shared craft of survey methodology, the discipline that studies how question wording, scales, and order affect answers; its standard references include the Tailored Design Method (Dillman, Smyth, and Christian) and Fowler's work on improving survey questions. No checklist or text from those works is reproduced here; the criteria, ratings, examples, and revision practice are original to this rubric.
