# Worked example: Launch Plan Review

**Fixture:** `fixtures/nexus-product-marketing/launch-plan-sprints-2.md` (the launch plan for Nexus Sprints 2.0, launching November 18, 2026; the fixture brief is in the same folder).
**Rubric:** Launch Plan Review (`launch-plan-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder).

---

**Verdict: Launch after fixes**

The plan is sequenced and owned like a real launch, but it claims a Tier 1 moment and resources a routine drop, it enables sales and support two days after the launch they are meant to carry, and two of its three success measures cannot be scored at the retro it schedules.

Date confidence available to this review: the plan pins itself to a feature freeze on November 11, 2026 and gives no confidence statement for it (committed, expected, or aspirational), and this review was not supplied one. Whether the Tier 1 designation was agreed with the teams who must staff it was likewise not supplied; the tier findings below judge the match between the plan's own tier claim and its own resourcing, which the document itself provides. Criteria marked Not judged: none.

## 1. The tier is named, and the effort matches it: Needs work

The tier is named with its reasoning (sprints are why teams choose Nexus; sales has been promising 2.0 since summer; "a market moment, not a feature drop"). The resourcing then describes a feature drop: one launch email, an in-product banner, a changelog post, a blog post, and a homepage pill. There is no press or analyst motion, no customer story, no webinar, no partner push, nothing that spends the "market moment" the tier claims. A tier is a resourcing decision before it is a label; as written, the label will set expectations in the building that the asset list will not meet. Fix: either resource the tier (a customer story and a live session at minimum) or rename the launch honestly to the tier its assets describe, so the teams staffing it plan for the real thing.

## 2. Every audience has a message and a moment: Needs work

Three of the four audiences are fully served (message, asset, owner). Integration partners get a message ("Cycle events are now available in the API") and "Asset: TBD," owned by dev relations, on a plan whose assets are due final two days before launch: the audience most likely to need lead time (their customers' integrations depend on the API) is the one with nothing to send. The admin audience's moment is also soft: a changelog post with no stated timing against launch day. Fix: name the partner asset and its date, or move partners to a dated post-launch wave and say so, so the gap is a decision rather than a discovery.

## 3. Internal readiness is planned, not assumed: Needs work

The plan schedules the sales and support enablement session for November 20, two days after launch day, which means the highest-volume question window (the plan's own risk section expects rollover questions in week one) is staffed by teams who have not had the session. The support help article is properly inside the launch assets, which saves this from worse; but readiness that arrives after the moment it readies people for is a calendar entry, not readiness. Fix: move the session before November 18 (the assets are final on the 16th; the 17th exists), and put a named support owner on launch day itself.

## 4. Execution is sequenced, owned, and dated: Ready

The spine of the plan is sound: freeze (November 11), assets final (16th), launch day with its four actions named (18th), retro (December 2), each with a single owner, in an order that respects the dependencies between them. The enablement mis-sequencing is judged under readiness, where it belongs; the plan's own sequence, as a sequence, is one a coordinator could run.

## 5. Success is instrumented before launch day: Needs work

Three measures are named, and one can be scored: "40% of active sprint teams enable automatic rollover by December 18" has a numerator, a population, and a date. "Sprint feature adoption rises 25%" has none of the three (25% above what baseline, measured where, of whom), and "launch email click rate above the lifecycle average" names an average the plan never states. The December 2 retro will therefore be able to report one measure and argue about two, which is the outcome this criterion exists to prevent. Fix: one line per measure (baseline, source, population, date), written now, while the numbers are cheap.

## 6. Risk and rollback are planned: Needs work

Slip risk and support-volume risk are named with real mitigations (date-flexible assets; the help article inside the launch set). What is absent is rollback: if Sprints 2.0 ships with a rollover defect on November 18, the plan has no stated path (disable rollover by default, revert, hold the email), and no communications plan for a bad first day. A launch whose core feature moves customers' work automatically is precisely the kind that needs the rollback paragraph written in advance. Fix: one paragraph (the defect scenario, the switch that exists, who may throw it, and what customers are told).

## 7. The plan survives the date moving: Ready

This is the plan's quiet strength: "If the feature freeze slips, launch day moves with it; the homepage pill and the email are date-flexible." The plan has already decided which assets are date-bound (none of the public ones) and which are not, so a one-week slip is an inconvenience inside this plan rather than a renegotiation of it. The missing date confidence (noted at the top) limits how much weight this carries, but the mechanism is the right one.

## Before launch day

1. Reconcile the tier with the resourcing, in one direction or the other, before the building plans around the word "Tier 1."
2. Move enablement ahead of launch day and name a support owner for the 18th.
3. Give the partner audience an asset and a date, or move the audience to a dated wave.
4. Instrument the two unmeasurable success measures (baseline, source, population, date).
5. Write the rollback paragraph: the defect scenario, the switch, the decider, the customer message.

```
Rubric summary
Rubric: Launch Plan Review v1.0 · Date: 2026-10-20 · Artifact: Nexus Sprints 2.0 - Launch Plan (launch-plan-sprints-2.md)
Criteria: Ready 2 · Needs work 5 · Missing 0 · Not judged 0
Gate criteria not met: The tier is named, and the effort matches it; Internal readiness is planned, not assumed; Success is instrumented before launch day
Result: Launch after fixes
```
