# Worked example: PRD Review

**Fixture:** `fixtures/nexus-product-management/prd-project-templates.md` (the requirements document for Nexus Project Templates; the fixture brief is in the same folder).
**Rubric:** PRD Review (`prd-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder).

---

**Readiness verdict: Build after fixes**

The problem, the scope fence, and most of the requirements are buildable today; what holds the document back is that it contradicts its own scope in one requirement, leaves one goal unmeasurable, and parks a decision the build depends on in Open Questions with no owner and no date.

Context: the strategy this PRD serves and its primary user were available to this review from the document itself and its companion problem statement (`problem-statement-admin-stall.md` in the same fixture folder), which the PRD names. Nothing was judged from description rather than from the document. The one context item not supplied anywhere is the pricing decision the document itself defers to November 10, 2026; that is the document's open question, not a gap in this review.

## 1. The problem is established before the solution: Ready

The document opens with the problem (setup time is the most named stall in the day-30 survey; blank-project admins invite later than copying admins; two quarters of support requests) and cites the fuller problem statement as a separate document rather than re-arguing it. The solution arrives after, sized to the problem described. A builder can tell what would make this feature a failure, which is what this criterion exists to establish.

## 2. Goals and non-goals make scope decidable: Needs work

The in-scope and out-of-scope lists are explicit and mostly decidable, until R7: "An admin can submit a template to the community gallery from the template's menu" requires the very gallery the Scope section places out of scope, and assigns its moderation to a team this document cannot commit. A scope question that will certainly arrive mid-build ("are we building the gallery submission or not?") cannot be settled from this document, because the document answers it both ways. Fix: strike R7, or move the gallery into scope with its real cost stated.

## 3. Success is defined and measurable: Needs work

Two of the three goals carry the full shape (a baseline, a target, and a date: "3 days to 1 day within two quarters"; "at least 25% of new projects within six months"). The activation goal carries none of it: "More new admins invite a teammate in their first week" names no current rate, no target rate, and no date, so the launch review cannot conclude whether the feature's central purpose was met. Fix, in the neighboring rows' own form: the current week-1 invite rate, the target, and the quarter it is read in.

## 4. The solution is specified to the level decisions need: Needs work

Most requirements sit at the right level: R1 bounds the steps, R2 and R4 settle copying semantics (roles not people; copies not links), which are the decisions a builder would otherwise have to invent. Two requirements leave the level in opposite directions. R5 prescribes the interface ("a modal with a swipeable carousel of template cards") instead of the need it serves, so a better picker would technically violate the PRD. R6 ("Templates should feel fast to create from") specifies a feeling with no measure at all. Fixes: restate R5 as the need (preview a template's contents before committing, in the new-project flow), and give R6 R1's treatment (a step count or a time bound on the five starter templates it names).

## 5. Edge cases, dependencies, and rollout are named: Needs work

The load-bearing dependency is named plainly (the permissions update must ship first, because templates store its role format), and the owning team's sprint boundary is given. What is missing is everything after that: the permissions update carries no date, so the December 4 launch rests on an undated predecessor; rollout is a single all-workspaces date with no phasing or trial group; and the document does not say what happens to a template when a project or doc inside it is deleted. Fixes: a date or a named owner for the dependency, a first audience smaller than everyone, and one sentence on deletion.

## 6. Open questions and assumptions are labeled: Needs work

The section exists and is honestly kept, which is rarer than it should be; the pricing question even carries a decision date. But the first question ("Whether templates can include member assignments by name before the permissions update ships. TBD.") decides whether R2 can be built as written, and it has neither an owner nor a date, three weeks before the requirements freeze the document itself sets. A question that gates a requirement needs a decider and a deadline. Fix: name both, or descope named assignments from version 1 and say so in Scope.

## 7. The reasoning survives the author: Ready

A reader who never meets the author can reconstruct why this feature exists, what it excludes, what it depends on, and which questions were still open when it was written, including the reasoning inside individual requirements (R2's note on why assignments copy as roles is the document at its best). The contradictions named above are failures of consistency, not of explanation; the document explains itself throughout.

## Fixes before this is built against

1. Resolve R7 against the Scope section, one way or the other.
2. Give the activation goal a baseline, a target, and a date.
3. Give the member-assignment question an owner and a decision date before the October 30 freeze, or descope it.
4. Restate R5 as the need it serves and give R6 a measure.
5. Date the permissions dependency and phase the rollout.

```
Rubric summary
Rubric: PRD Review v1.0 · Date: 2026-10-20 · Artifact: Project Templates - Product Requirements Document (prd-project-templates.md)
Criteria: Ready 2 · Needs work 5 · Missing 0 · Not judged 0
Gate criteria not met: Goals and non-goals make scope decidable; Success is defined and measurable
Result: Build after fixes
```
