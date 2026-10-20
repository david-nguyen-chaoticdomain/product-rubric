---
name: PRD Review
category: product-management
version: 1.0
summary: Reviews a product requirements document before a team builds against it, judging whether the problem is established with evidence, the scope is decidable, success is measurable, and the undecided things are labeled as undecided.
when_to_use: Before engineering and design commit to building from a PRD, a product spec, or a requirements document, when the document is about to become the thing a team is held to and its flaws are still cheap to fix.
inputs: The PRD as written, in full. Supporting material the document points to (research, data, designs) strengthens the review when supplied; without it, the review judges the document's internal completeness and names what it could not check.
scale: No numeric score; each criterion judged Ready, Needs work, or Missing, with an overall readiness verdict
level: deep
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to review a product requirements document before a team builds against it. A PRD is the document a dozen later arguments will be settled by, usually read under time pressure by people who were not in the room when it was written. Its flaws are expensive in a specific way: they do not show up as document problems. They show up as a sprint spent building the unimportant half, a launch that cannot say whether it worked, and a scope dispute in week six resolved by whoever remembers the meeting best.

This review judges the PRD as a contract for work. It asks whether the problem is established before the solution is specified, whether a reader can settle a scope question from the text alone, whether success is defined in a way that can be checked after launch, and whether the things the team has not decided yet are labeled as undecided rather than smoothed over.

The review does not judge whether the product idea is good, whether the strategy behind it is right, or how the solution should be designed. A PRD for a weak idea can pass this review by being honest about its evidence, and a PRD for a strong idea can fail it by never writing anything down. If the input contains no requirements document at all (a pitch, a roadmap item, a request to "build X"), say so, and return the Context requests below as the outline of the document that needs writing. Do not invent a PRD and review your own invention.

## Context requests

Before judging, check the submission for the context below. If an item is missing and the setting allows conversation, ask for it, in one grouped round, before judging. If the user cannot or does not want to supply it, proceed and let the affected criteria be judged on what the document carries, with the missing context named.

Ask for:

- The strategy or goal this PRD serves, in a sentence or two: what should change for the business when this ships. (Needed for fairness in The problem is established and Success is defined.)
- Who the primary user of this work is, if the document does not name them plainly. (Needed for The problem is established.)
- Any hard constraints the document does not state: a fixed launch date, a platform or regulatory limit, a dependency another team owns. (Needed for Edge cases, dependencies, and rollout.)
- Whether evidence exists that the document summarizes but does not include, such as the research or data behind the problem statement. Offer to judge from it if the user pastes it. (Needed for The problem is established.)

Context supplied in conversation is judged normally. Evidence is different: a requirement, a metric baseline, or a research finding that exists only because the user describes it in conversation is judged as described, not shown, and the report flags it as such.

## Criteria

Judge each criterion Ready, Needs work, or Missing, using the Scoring section. Every judgment cites the document's own sections.

### 1. The problem is established before the solution
The document earns its solution by first showing, with evidence, whose problem this is and how the team knows.
- What to examine: Whether the problem section names a specific user in a specific situation rather than a market in general; whether it rests on evidence (research, support data, usage numbers, observed behavior) or on the team's belief; whether it states how the problem is handled today and what that costs. Whether the problem, as stated, could survive the proposed solution being replaced by a different one.
- What good looks like: A reader who disagrees with the proposed solution can still accept the problem section as true, and can point to the evidence inside the document.
- What bad looks like: A problem section that is the solution described twice ("users lack a way to export reports" as the problem for an export feature); evidence phrases like "users have asked for" with no count, source, or date attached.

### 2. Goals and non-goals make scope decidable
A reader can settle the arguments this document will be used to settle, from the text alone.
- What to examine: Whether goals state outcomes rather than activities; whether non-goals are listed at all, and whether they name the tempting adjacent work (the second platform, the admin console, the migration) rather than safe strawmen; whether, tested against three plausible scope questions a builder would ask, the document answers at least the ones it should foresee.
- What good looks like: The non-goals section names things a reasonable person would otherwise assume are included, and excludes them on purpose, with a reason.
- What bad looks like: Goals that restate the feature list in outcome costume; a document under which "is X in scope?" can only be answered by asking its author.

### 3. Success is defined and measurable
The document says what will be different when this works, in terms that can be checked after launch.
- What to examine: Whether each goal carries a metric, a baseline (or an honest statement that no baseline exists yet), a target, and a point in time when it will be read. Whether guardrail metrics name what must not get worse. Whether a metric is a measurement of the outcome or a count of the shipping (launched, adopted by the team that built it).
- What good looks like: A reader could, on the stated date, determine from data the team can actually get whether this succeeded, without interviewing the author about what they meant.
- What bad looks like: "Improve engagement" with no instrument named; targets with no baselines; success defined as the feature existing.

### 4. The solution is specified to the level decisions need
The document makes the decisions that are the PRD's to make, and visibly leaves the ones that are not.
- What to examine: Whether the core flows and states a builder will hit are covered at the behavioral level: what the user can do, what the system does in response, what happens on the paths that are not the happy one. Whether the document strays into prescribing design or implementation detail it should leave open, while leaving genuinely open product questions (pricing behavior, permission rules, data retention) unmarked and therefore looking decided.
- What good looks like: An engineer and a designer could each list what they still get to decide, and the lists match what the document intends.
- What bad looks like: Pixel-level specification beside an unnamed permission model; a flow described only on the day everything works.

### 5. Edge cases, dependencies, and rollout are named
The document shows its work on the parts of shipping that are not the feature.
- What to examine: Empty, error, loading, and permission-denied behavior at the product level; data migration or backfill where existing users are affected; dependencies on other teams, systems, or vendors, named with their owners where known; how the work rolls out (all at once, phased, behind a flag) and what happens if it has to come back; support and documentation implications where the change alters what users are told.
- What good looks like: Nothing in this section is a surprise the team will meet later; each dependency has a name attached, and the rollback is a described path rather than a hope.
- What bad looks like: "Dependencies: none" in a document that touches billing; a launch plan that is the word "launch."

### 6. Open questions and assumptions are labeled
The document distinguishes what has been decided from what has not, and what is known from what is being assumed.
- What to examine: Whether undecided items are collected and visible, each with an owner and ideally a date by which it must be decided; whether load-bearing assumptions are stated as assumptions (a vendor's capability, a legal reading, a usage projection) so the team can see what the plan falls with; whether any settled-sounding prose in the body quietly depends on an item the open questions list as undecided.
- What good looks like: A new team member can learn, from this section alone, exactly where the plan is soft and who is hardening it.
- What bad looks like: An open questions section containing only questions nobody minds leaving open; the one assumption the schedule rests on written in the body as a fact.

### 7. The reasoning survives the author
The document records why this and not the alternatives, well enough that the decision can be revisited when conditions change.
- What to examine: Whether alternatives seriously considered are named with the reason each was set aside; whether key trade-offs are stated as trade-offs (what was bought, what was paid); whether the document links or cites the evidence and prior decisions it leans on, so a reader in six months can rebuild the reasoning without the author in the room.
- What good looks like: A future reader can tell which parts of this document to reopen if the market, the data, or the constraints change, because they can see what each decision rested on.
- What bad looks like: A document that reads as if the solution descended fully formed; a "considered alternatives" section listing options nobody ever seriously held.

## Scoring

This rubric gives no numeric score. Each criterion receives one verdict:

- **Ready**: the document meets this criterion; a team can build on it in this respect.
- **Needs work**: the criterion is attempted but a specific gap undermines it. The finding names the gap and what would repair it.
- **Missing**: the document makes no attempt at this criterion (no non-goals anywhere, no success metric of any kind), or the attempt is so thin it cannot be built on.

Overall readiness verdict, stated once at the top, in exactly one of these forms:

- **Ready to build**: no criterion below Ready except at most one Needs work.
- **Build after fixes**: any other combination short of the line below; the named fixes are the author's next task, and the team should not have to discover them mid-build.
- **Not ready**: any criterion Missing on The problem is established before the solution or Goals and non-goals make scope decidable, or three or more criteria below Ready. In this state the document would generate more arguments than it settles.

Where a criterion could not be judged because context the Context requests name was not supplied, report it as Not judged, name the missing context, and exclude it from the count above rather than scoring the document down for an answer it was never given.

## Output format

Return the review in this structure, in Markdown:

1. **Readiness verdict: [Ready to build / Build after fixes / Not ready]**, with one sentence of reason, and a line stating what context was supplied, what was asked for and not supplied, and what was judged from description rather than from the document.
2. One section per criterion, in the order above, with its verdict and findings tied to specific sections or passages of the document.
3. A closing section, **Fixes before this is built against**, in priority order: problem and scope first, then success measures, then the rest.

Example of a finding at the standard this rubric expects:
- Acceptable: "Needs work: the Success section sets a target of '20 percent more reports exported' but gives no baseline and no date. As written, the team cannot tell in the launch review whether the target was met. The repair is one sentence: the current weekly export count, the date the target is read, and the dashboard it is read from."
- Not acceptable: "The PRD needs clearer goals." (It names no passage, no gap, and no repair.)

Finally, end the report with the tracking summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary, for tracking
Rubric: PRD Review v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Criteria: Ready {n} · Needs work {n} · Missing {n} · Not judged {n}
Gate criteria not met: {the criteria whose grade held the verdict below Ready to build, or: none}
Result: {the overall verdict, exactly as stated at the top of this report}
```

## Honesty rules

- Review the document, not the idea and not the author. A finding is about a passage and what it fails to settle, never about the product's merit or the writer's competence.
- Do not supply the missing work and then credit the document with it. When the review states what a repair would look like, the criterion's verdict still reflects the document as submitted.
- Do not judge strategy. Whether this problem deserves a team is a decision above the document; the review judges only whether the document establishes the problem honestly and completely enough for that decision to be made from it.
- Anything judged from a description rather than from the document itself is flagged every time it happens, not only once. A PRD whose evidence is described but never shown is weaker than one that shows less and claims less.
- Resist inventing precision the document does not contain: do not restate "several customers" as a count, do not give an unnamed metric a name and then fault the document for the name, and do not treat boilerplate sections (a non-goals list copied from a template) as evidence the thinking was done.

## Sources

The criteria and verdicts in this rubric are the author's own, written for ProductRubric from product management practice. They are in conversation with the established writing on product requirements and empowered product teams, including the tradition that a requirements document exists to settle scope and success questions for the people who build, but they adapt no single published framework, and no source's text or template is reproduced.
