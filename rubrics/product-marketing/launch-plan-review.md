---
name: Launch Plan Review
category: product-marketing
version: 1.0
summary: Reviews a product launch plan, judging whether the launch tier is named and resourced to match, every audience has a message and a moment, internal teams are enabled rather than surprised, execution is sequenced and owned, success is instrumented before launch day, and risk, rollback, and a slipping date are all planned for.
when_to_use: Weeks before a product or feature launch, while the plan can still change: when the question is whether this launch will land as one coordinated event or as a release the market barely notices and the support queue experiences as an ambush.
inputs: The launch plan as written: goals, tier, timeline, assets, owners, and channel activities. The release scope it assumes strengthens the review when supplied; without it the review judges the plan against its own description of what is shipping and says so.
scale: No numeric score; each criterion judged Ready, Needs work, or Missing, with a launch readiness verdict
level: deep
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to review a launch plan while there is still time to change it. Launches fail in two opposite ways, and both are planning failures. The quiet launch ships a significant capability with the effort budget of a minor fix, and the market never learns it exists. The loud launch spends a major campaign on a minor release, and teaches the audience to discount the next announcement. Between those failures sits the discipline the Product Marketing Alliance's launch work describes: assign the release a tier, honestly, and let the tier dictate the effort, because audience attention is finite and a company that launches everything at full volume launches nothing.

The plan also fails inwardly. Sales hears about the feature from a prospect, support meets it in the ticket queue, and the success of the whole exercise is argued about afterward from anecdotes because nobody instrumented it beforehand. This review judges the plan as the coordination document it has to be: tier and effort, audiences, internal readiness, sequencing, measurement, risk, and what happens when the date moves, which dates do.

The review does not judge the product being launched or the messaging it will carry; positioning and message have their own rubrics. It judges the plan. A plan for a launch the reviewer believes should not happen at all is still reviewed as a plan, with the disagreement stated once, up front, and not threaded through every finding.

## Context requests

Before judging, check whether the supplied material establishes the following. Ask only for items that are missing here, would change a criterion's verdict, and that the requester plausibly knows. Ask in a single grouped message, then proceed with whatever you receive.

- Whether the tier in the plan was agreed with the teams who must staff it, or assigned by one function alone. Tier agreement is what makes resourcing judgments possible.
- The confidence in the ship date the plan is pinned to: committed, expected, or aspirational, and what the date depends on.
- Which audiences are contractual or committed: a partner announcement promised, a customer advisory board expecting early word, a conference slot booked.

If the requester cannot supply an item, mark the affected criteria Not judged with the missing context named, and do not estimate. A plan reviewed against an invented date confidence is worse than a smaller honest review.

## Criteria

Judge each criterion Ready, Needs work, or Missing, using the Scoring section. Every judgment cites the plan's own text.

### 1. The tier is named, and the effort matches it
The plan states how big this launch claims to be, and the activities, spend, and attention it requests are proportional to that claim.
- What to examine: A tier or its equivalent in the plan's own terms (the Product Marketing Alliance's published model runs Tier 1, market-moving; Tier 2, significant capability for a defined audience; Tier 3, improvements existing customers should hear about; Tier 4, routine, shipping quietly). The reasoning for the tier: audience impact and novelty, not the effort already sunk into building the thing or the seniority of its sponsor. The match in both directions: a Tier 2 effort plan for a Tier 3 release, a Tier 1 claim staffed like a Tier 3.
- What good looks like: The tier is argued in two or three sentences a skeptic would accept, and every activity in the plan earns its place at that tier, such that a reader could remove a tier's worth of activity and feel the loss.
- What bad looks like: No tier anywhere, and the plan contains a press push, a webinar, and a homepage takeover for a settings improvement; or a genuinely new capability announced in release notes alone because no one was asked to decide.

### 2. Every audience has a message and a moment
The plan enumerates who must hear about this launch, what each audience is told, and when in the sequence they hear it.
- What to examine: Coverage of the audiences launches actually have: existing customers (segmented when their stake differs), prospects in flight, partners and channels, the press or analyst tier when the tier warrants it, and internal audiences, who each need their own version. Whether each audience's message is differentiated or one announcement blasted at all of them. Sequencing that respects reality: customers before or with the public announcement, partners before they are asked questions they cannot answer, nobody learning launch news from a screenshot of someone else's email.
- What good looks like: A table or its equivalent exists from which each audience's owner could act: audience, message, asset, owner, timing, in the order time will actually present them.
- What bad looks like: "Announce on all channels" as the audience plan; existing customers, whose workflows the release changes, finding out from the blog post.

### 3. Internal readiness is planned, not assumed
The teams who must answer for the launch can answer for it: sales enabled, support briefed, documentation written, pricing and packaging questions settled.
- What to examine: Enablement with dates before launch day, not at it: talk track, demo path, FAQ, competitive notes where relevant, and a way to know reps actually received them. Support readiness: help articles drafted, known-issue notes, an escalation path, and a forecast of contact volume if the release changes behavior. Commercial readiness: pricing, packaging, migration, and entitlement answers in writing, because launch week is when unanswered pricing questions become discounts invented on calls.
- What good looks like: A named readiness check exists before launch day at which each function confirms ready or blocked with a contingency, the format the launch literature treats as the single most important meeting of the launch.
- What bad looks like: Enablement listed as one line, "sales training," undated and unowned, falling after the announcement it was meant to support.

### 4. Execution is sequenced, owned, and dated
Every activity has an owner, a deadline relative to launch, and an order that respects its dependencies.
- What to examine: Whether the timeline works backward from the launch moment with the asset-production lead times real creative and review cycles need. Dependencies made explicit: assets that need final product screenshots, claims that need legal review, translations, partner approvals. Single points of failure: the plan's critical path running through one person, one approval, or one external party with no slack. The launch-day run of show itself: who publishes, who monitors, who can pause the campaign.
- What good looks like: The plan could be executed by its owners without a single "who is doing this?" meeting, and its critical path is visible enough to argue about.
- What bad looks like: A list of assets with a launch date at the top and nothing connecting them; approvals scheduled for the same morning as publication.

### 5. Success is instrumented before launch day
The plan states what this launch is for in measurable terms, how each measure will be captured, and when the result will be read.
- What to examine: Goals that descend from the tier (a Tier 1 launch owes market-level signals; a Tier 3 launch owes adoption and retention movement), with targets or at least baselines, not activity counts (posts published, emails sent) dressed as outcomes. Instrumentation named: tracking, dashboards, campaign tagging, and an owner for reading them. A post-launch review moment already on the calendar, with the decision it exists to inform (double down, extend, retire the campaign).
- What good looks like: A reader could return thirty days after launch, open this plan, and settle whether the launch worked without interviewing anyone's memory.
- What bad looks like: Success defined as the launch happening; measurement assigned to "analytics" with no metric named and no date to look at it.

### 6. Risk and rollback are planned
The plan says what could go wrong, what would cause the launch to pause or pull back, and who communicates if it does.
- What to examine: A risk list with likelihood taken seriously: product instability at scale, a claim that draws a competitor or regulator response, a news environment that makes the launch tone-deaf, a dependency party missing its date. Rollback in both senses: the product sense (can the release be withdrawn or feature-flagged off) and the communications sense (what is said, by whom, within what time, if the announcement must be corrected or pulled). Pre-drafted holding language for the two or three most plausible failures, which is the only kind that exists in time.
- What good looks like: The plan's authors have visibly imagined launch week going badly and have spent some of the plan on it, with named decision-makers for a pause rather than a committee to convene.
- What bad looks like: Risk handled by optimism; the first contingency thought given to a public stumble scheduled for during the stumble.

### 7. The plan survives the date moving
The plan distinguishes what is pinned to the ship date from what can flex, and says what happens to committed audiences and assets when engineering time moves.
- What to examine: Which elements are date-locked by outsiders (an event slot, a partner embargo, press briefed under NDA) and which are internal preferences wearing dates. The slip protocol: who decides the new date, which audiences are told in what order, what happens to embargoed materials and booked media. How much slip the plan tolerates before the tier or the campaign shape should be revisited, because a Tier 1 campaign stretched over six drifting weeks is a different, weaker launch.
- What good looks like: Reading the plan, a leader learns in one section exactly what a two-week slip costs and who absorbs it, and the answer is not "everything breaks equally."
- What bad looks like: Every date in the plan derived from one engineering estimate treated as certain, with external commitments bolted to it and no sentence about what happens if it moves.

## Scoring

This rubric gives no numeric score. Each criterion receives one verdict:

- **Ready**: the plan meets this criterion; the launch can proceed on this front.
- **Needs work**: the criterion is attempted but a specific gap endangers the launch. The finding names the gap, the moment it would bite, and the fix.
- **Missing**: the plan makes no attempt at this criterion (no tier, no instrumentation, no slip thinking), or the attempt is so thin it cannot carry weight.
- **Not judged**: context the plan's judgability depends on (see Context requests) was not supplied, and no honest verdict exists without it.

Overall verdict, stated once at the top, in exactly one of these forms:

- **Ready to launch**: no criterion below Ready except at most one Needs work, and nothing Not judged on the tier or internal readiness criteria.
- **Launch after fixes**: any other combination short of the line below; the fixes named are the price of the date, and launching before paying it transfers the cost to launch week, where it is paid in public.
- **Not ready**: any criterion Missing on The tier is named, and the effort matches it, Internal readiness is planned, not assumed, or Risk and rollback are planned. In this state the launch is a hope with a date attached.

## Output format

Return the review in this structure, in Markdown:

1. **Verdict: [Ready to launch / Launch after fixes / Not ready]**, with one sentence of reason, a line stating the date confidence the review was given, and a line listing any criteria marked Not judged with their missing context.
2. One section per criterion, in the order above, with its verdict and findings tied to specific activities, dates, and owners in the plan.
3. A closing section, **Before launch day**, in priority order: tier and readiness fixes first, then instrumentation, then risk and slip preparation.

Example of a finding at the standard this rubric expects:
- Acceptable: "Missing: the plan schedules the announcement email, the partner briefing, and the press embargo lift for the same morning, and the partner section promises partners 'advance notice' without defining it. Support's FAQ is dated the day after launch. On current sequencing, partners and support both meet this launch in public, which is the failure the readiness criterion exists to prevent."
- Not acceptable: "The launch plan needs more coordination." (It names no audience, no date, and no fix.)

Finally, end the report with the summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary
Rubric: Launch Plan Review v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Criteria: Ready {n} · Needs work {n} · Missing {n} · Not judged {n}
Gate criteria not met: {the criteria whose grade held the verdict below Ready to launch, or: none}
Result: {the overall verdict, exactly as stated at the top of this report}
```

## Honesty rules

- Judge the plan, not the launch and not the product. A weak product with a strong plan earns a strong review of the plan, with any strategic disagreement stated once in the verdict and not smuggled into criteria.
- Do not accept the plan's own tier as ground truth. Tier is judged against audience impact and novelty as the plan itself describes them; an inflated tier is a finding even when senior people chose it, because the finding's reader is the team that must staff it.
- Do not convert optimism into a date. Where the plan treats estimates as commitments, judge against the estimate's real confidence when given, and say plainly in the report that the review did not verify engineering dates.
- Instrumentation findings judge presence and ownership, not statistical sophistication. A modest metric named, captured, and scheduled for reading beats an elegant measurement framework nobody owns.
- Where the reviewer cannot tell whether a function agreed to its load, that is exactly what Context requests exist for. Do not resolve it by guessing in a finding.

## Sources

The tiering discipline in criterion 1 follows the launch tier model published by the Product Marketing Alliance, including Richard King, "Stop launching everything" (Product Marketing Alliance, 2025), and PMA's tiered-effort guidance, under which the tier decision is owned by product marketing and effort scales with audience impact rather than build effort. The audience, enablement, and go-to-market structure draws on the Product Marketing Alliance's "Product Launch Framework" (2024), which organizes a launch around what is being marketed, the reason for adoption per audience, internal and external involvement, and the tools each audience needs. The readiness review in criterion 3 reflects standard launch practice as documented in PMA's launch roadmap and checklist literature. The verdict scale, output format, and honesty rules are the rubric author's own, written for ProductRubric. This rubric is not affiliated with or endorsed by the Product Marketing Alliance, and no text from those sources is reproduced.
