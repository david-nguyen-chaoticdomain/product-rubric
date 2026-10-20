# Worked example: Project Plan Review

**Fixture:** `fixtures/nexus-website-launch/project-brief.md` (the Website Launch project brief, whose timeline, owners, and risks form the plan under review; the fixture brief is in the same folder).
**Rubric:** Project Plan Review (`project-plan-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder), extended by the review below where the rubric reaches further than the key.

---

**Verdict: Commit after fixes**

The plan's shape is sound (a fenced scope, dated milestones with single owners, a fixed external date it is honest about), but one of its two risks is unowned, the critical path is never drawn, and the review cannot judge its estimates because the plan never says where its dates came from.

Where the plan's dates came from: not stated anywhere in the brief. The single exception is the launch date, which is not an estimate at all: it is fixed by the CEO's keynote at the customer summit on October 31, 2026, and the brief says so plainly. Criteria marked Not judged: Estimates take the outside view (the origin of the interior dates, and whether the named people's time is committed, were not supplied and cannot be inferred).

## 1. The outcome and the scope boundary are decidable: Needs work

Scope is the plan's strength: the in-scope and out-of-scope lists fence the work on both sides, down to naming the docs rewrite as a later project. The outcome is weaker. Two of the three objectives are decidable (zero known inaccuracies at launch; a 15% rise in trial starts against a named baseline). The third ("the site feels like the next chapter of Acme," judged by "stakeholders agree") has no measure and no moment of judgment, so at launch nobody can say whether the project met it. Fix: give it a countable form (a named stakeholder review with a date) or move it to the background where aspirations belong.

## 2. Milestones are verifiable states: Ready

Each milestone is a state a third party could check, not an activity: content signed off (October 16), design frozen (October 20), build complete (October 24), QA and fixes done (October 27), launched (October 30), each with one named owner. The interim progress report uses the same discipline (18 of 24 tasks complete, next milestone named), so the plan's state is as checkable mid-flight as it is on paper.

## 3. Estimates take the outside view: Not judged

Not judged: the brief never says where the interior dates came from (estimated by the people doing the work, derived from comparable past launches, or set backward from October 30), and it does not say whether the four named people's time is committed or what else they are carrying. Without that, no honest verdict exists about the estimates. One thing can be said without it: the plan contains no reference class at all, no "the last relaunch took this long," so when the context is supplied, this criterion starts from an empty page.

## 4. The critical path is visible and protected: Needs work

The path is implicit in the milestone order (content, design, build, QA, launch, four days of slack between QA and a fixed date) but it is never drawn, and its protection is thin: the only buffer thinking in the plan lives inside one risk row ("drafts due October 13 so review has a buffer"). If design slips two days, the plan does not say which later milestone absorbs it, and QA, the last craft step before an immovable date, is where unspoken compression always lands. Fix: name the path, and state in advance what gives (the cut-a-page fallback already exists for content; give build and QA the same treatment).

## 5. Risks, assumptions, issues, and dependencies are kept as a living register: Needs work

A register exists, in the right shape for its first row: the content-slip risk has an owner (Priya Patel), a trigger date, and a concrete fallback. The second row shows what the register is for by failing it: the leadership-permissions risk has no owner and no plan, only "raised in the October 9 review; no decision yet," three weeks before a fixed launch, and it is an issue (already happening) recorded in a table that does not distinguish issues from risks. The register also has no review cadence; the brief's own progress note suggests the project meets, but the register's upkeep is nobody's named job. Fix: an owner and a next step for the permissions issue this week, and a standing line in the progress report that the register was reviewed.

## 6. Ownership and decision rights are singular: Needs work

Milestone ownership is admirably singular (one name per row, and the launch call is explicitly Sarah's). Two gaps: the unowned risk above, which by definition has no decision-maker, and the open question (the launch announcement channel) owned by "the growth team," a group rather than a person, with a due date of October 20 that the plan does not escalate if it passes. Fix: a name on both, since a team cannot be asked in a meeting why a date slipped.

## 7. The plan knows how it will change: Needs work

The plan has a reporting mechanism (status and task counts in the workspace, a written progress note at brief review) and one worked example of change (the content fallback). It has no change mechanism: nothing says how a slipped milestone re-plans the ones after it, who can move scope against the fixed date, or when the team would conclude the date itself must be renegotiated with the summit. With an immovable end date, the change conversation is the whole game, and the plan has not had it yet. Fix: two sentences (what triggers a re-plan, and who may trade scope for the date) added to the brief.

## Before anyone commits

1. Supply the missing context this review names: where the interior dates came from, and whether the four people's time is committed. The estimates cannot be judged, by this rubric or by the team, until then.
2. Put an owner and a next step on the leadership-permissions issue, and a person's name on the announcement question.
3. Draw the critical path and pre-agree what compresses, in build and QA, if it slips.
4. Give the third objective a countable success criterion or move it to the background.
5. Write the change rule: what triggers a re-plan, and who may trade scope against the fixed date.

```
Rubric summary
Rubric: Project Plan Review v1.0 · Date: 2026-10-20 · Artifact: Website Launch - Project Brief (project-brief.md)
Criteria: Ready 1 · Needs work 5 · Missing 0 · Not judged 1
Gate criteria not met: Estimates take the outside view (not judged); Risks, assumptions, issues, and dependencies are kept as a living register
Result: Commit after fixes
```
