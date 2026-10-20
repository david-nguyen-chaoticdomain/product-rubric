---
name: Problem Statement Review
category: product-management
version: 1.0
summary: Reviews a problem statement or problem brief, judging whether it names a specific person, rests on evidence, states the cost of the status quo, stays free of a smuggled-in solution, and draws its own boundary.
when_to_use: When a team is about to commit to a problem: at the top of a PRD, in a discovery brief, or in a one-page proposal, when the question is whether the problem itself is stated well enough to build against.
inputs: The problem statement itself, a paragraph to a page. Supporting evidence strengthens the review when pasted with it; without it, the review judges the statement's claims as stated and says so.
scale: No numeric score; each criterion judged Holds, Needs work, or Missing, with an overall verdict
level: simple
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to review a problem statement before a team builds on it. The problem statement is the cheapest document in product work to fix and the most expensive to get wrong, because everything downstream, the research, the PRD, the roadmap item, inherits its framing. A statement that names the wrong person, or names a solution wearing a problem's clothing, does not produce a failed project. It produces a successful project that solves nothing.

This review judges the statement as a framing. It asks whether a reader can tell whose problem it is, how the team knows it exists, what it costs to leave it alone, and where it ends. It runs on the statement alone, in minutes, and is meant to be run early and often, while the framing is still a paragraph and not yet a plan.

The review does not judge whether solving this problem is the team's best use of time. Priority among true problems is a strategy decision made above the statement; this rubric judges whether the statement, as written, is one a team could trust. If the input is a solution pitch with no problem stated at all (a feature request, a build instruction), say so and stop; there is no statement to review until someone writes the problem down.

## Criteria

Judge each criterion Holds, Needs work, or Missing, using the Scoring section. Every judgment cites the statement's own words.

### 1. The person with the problem is specific
The statement names who has this problem closely enough that the team could go and find them.
- What to examine: Whether the subject is a role in a situation ("a team admin preparing a quarterly usage report") or a category too wide to act on ("users," "customers," "businesses"). Whether the statement distinguishes the person with the problem from the person who will pay, approve, or benefit secondhand, when those are different people.
- What good looks like: A reader could recruit five people matching the description this week, and would know when they had found the wrong five.
- What bad looks like: A statement true of everyone and therefore about no one; the buyer named where the sufferer was meant, because the buyer is who the team talks to.

### 2. Evidence the problem exists
The statement rests on something observed, not on the team's belief that the problem must exist.
- What to examine: Whether the statement cites its basis: interviews, support tickets, usage data, observed workarounds, even a named small sample honestly labeled. Whether frequency and severity signals appear (how often, for how many, how badly) or the problem floats at the level of "people struggle with this." Whether the evidence is about the problem itself or about demand for a particular solution, which is a different claim.
- What good looks like: A skeptic can see what the team saw, and can tell the difference between what was observed and what is being extrapolated from it.
- What bad looks like: "Users have been asking for" with no count or source; a competitor having the feature offered as evidence that the problem exists.

### 3. The cost of the status quo is stated
The statement says what happens if nothing is done, in terms a decision can be weighed against.
- What to examine: Whether the cost lands on the person (time, errors, workarounds, money, risk) in concrete terms rather than adjectives; whether any cost to the business is stated separately and just as concretely. Whether the statement admits the status quo's coping mechanisms, because a problem everyone has already routed around is sized differently from one that blocks work outright.
- What good looks like: A reader can explain, from the statement alone, why this quarter rather than next year, and what the team is choosing to keep paying by waiting.
- What bad looks like: "This is a pain point" as the entire cost case; urgency asserted by exclamation rather than by consequence.

### 4. The statement is solution-free
No particular answer is smuggled into the framing, so more than one solution could honestly be built against it.
- What to examine: The test: could two genuinely different solutions (a feature, a process change, a partnership, a removal) each claim to solve this statement? Whether the statement names a mechanism ("needs a dashboard," "lacks an export") instead of the underlying difficulty ("cannot get usage numbers into the report their leadership reads"). Whether nouns from the current product's architecture are doing quiet framing work.
- What good looks like: The statement survives its first proposed solution being rejected in a design review, unchanged.
- What bad looks like: A statement that is the feature request with "the problem is that users cannot" pasted in front of it; a "problem" that exactly one backlog item in the world could solve.

### 5. The boundary is drawn
The statement is one problem, with its edges marked against the adjacent problems it is not claiming.
- What to examine: Whether the statement bundles several problems into one sentence and calls them a theme; whether it names what is out of scope (the neighboring workflow, the different user, the later stage) or leaves the reader to discover the edges during the project. Whether its scope words ("onboarding," "reporting," "the whole flow") are defined by the sentence that uses them or left to each reader's private meaning.
- What good looks like: A reader can name one adjacent problem and correctly say whether it is inside or outside this statement, in both directions.
- What bad looks like: A paragraph containing three problems and a platform ambition, sized like a quarter and written like a sentence.

## Scoring

This rubric gives no numeric score. Each criterion receives one verdict:

- **Holds**: the statement meets this criterion; a team can build on it in this respect.
- **Needs work**: the criterion is attempted but a specific gap undermines it. The finding names the gap and what would repair it.
- **Missing**: the statement makes no attempt at this criterion (no evidence mentioned anywhere, no boundary of any kind), or the attempt is so thin it cannot be relied on.

Overall verdict, stated once at the top, in exactly one of these forms:

- **States a real problem**: no criterion below Holds except at most one Needs work.
- **Partly states it**: any other combination short of the line below; the statement can be repaired in a paragraph, and should be, before anything is scheduled against it.
- **Does not yet state a problem**: any criterion Missing on The person with the problem is specific or The statement is solution-free. In this state the document is a preference or a feature request in problem costume, and work scheduled against it inherits the costume.

## Output format

Return the review in this structure, in Markdown:

1. **Verdict: [States a real problem / Partly states it / Does not yet state a problem]**, with one sentence of reason.
2. One short section per criterion, in the order above, with its verdict and the finding tied to the statement's own words.
3. A closing section, **The statement as this review would leave it**: the problem statement rewritten at the size the evidence in the input supports, with anything the rewrite had to drop (for lack of evidence or specificity) listed in one line under it, so the author can restore it by supplying what is missing rather than by arguing.

Example of a finding at the standard this rubric expects:
- Acceptable: "Missing: the statement says 'users' throughout. The evidence sentence mentions team admins preparing reports, which is a findable person in a findable situation; the statement should claim that person or drop the evidence sentence, because as written the two halves describe different problems."
- Not acceptable: "The problem statement could be more specific." (It names no passage and no repair.)

Finally, end the report with the tracking summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary, for tracking
Rubric: Problem Statement Review v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Criteria: Holds {n} · Needs work {n} · Missing {n}
Gate criteria not met: {the criteria whose grade held the verdict below States a real problem, or: none}
Result: {the overall verdict, exactly as stated at the top of this report}
```

## Honesty rules

- Review the statement, not the problem's worthiness and not its author. A true problem can be badly stated and an unworthy one beautifully stated; this rubric judges the stating.
- Do not supply evidence the input does not contain and then credit the statement with it. The closing rewrite uses only material present in the input, and names what it had to drop rather than inventing what it lacked.
- Do not mistake a vivid example for evidence of frequency. One named customer's story can establish that a problem exists; it cannot establish how many share it, and the review keeps those two claims separate.
- Do not punish a statement for being early. A short statement with its evidence honestly labeled as thin is in a better state than a long one whose confidence is performed, and the verdicts should say so.
- Where the statement could be read two ways, judge the reading a busy sponsor would take away, because that is the reading the work will be funded under.

## Sources

The criteria and verdicts in this rubric are the author's own, written for ProductRubric from product management practice. They are in conversation with the established problem-framing tradition in product discovery, including the discipline that a problem statement should be able to outlive any particular solution proposed for it, but they adapt no single published framework, and no source's text is reproduced.
