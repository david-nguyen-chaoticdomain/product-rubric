# Worked example: User Story Review

**Fixture:** `fixtures/nexus-product-management/user-stories-project-templates.md` (eight user stories for Nexus Project Templates; the fixture brief is in the same folder).
**Rubric:** User Story Review (`user-story-review`), version 1.0, built on Bill Wake's INVEST criteria, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder). One set-level note before the stories: Story 8 specifies a feature (a marker on template-born tasks) that appears nowhere in the companion PRD. No INVEST criterion owns traceability to a requirements document, so the stories are graded on their merits below and the gap is flagged here, where a planner will see it.

---

**Set summary: 8 stories reviewed. Ready for planning: 5. Refine before planning: 1. Not yet a story: 2.**

## Story 1: create a project from a template the team has used before

**Readiness verdict: Ready for planning.** A bounded job for a named user, with an acceptance test that checks the two things the story promises (contents copied, due dates shifted).

- **Valuable to a named user: Holds.** The workspace admin, starting a project, gets the team's proven setup instead of a blank page.
- **Independent: Holds.** Deliverable without any other story in the set.
- **Negotiable: Holds.** Nothing prescribes an interface; the team can negotiate how creation happens.
- **Estimable: Holds.** One flow, known parts (tasks, docs, dates).
- **Small: Holds.** A single creation path; fits comfortably in an iteration.
- **Testable, and confirmed by its criteria: Holds.** "Contains the template's tasks and docs, with due dates shifted" can be checked by inspection.
- **Repairs before planning:** none.

## Story 2: save a finished project as a template

**Readiness verdict: Ready for planning.** The mirror of Story 1, equally bounded, and its acceptance protects the original project, which is the risk a tester would probe first.

- **Valuable to a named user: Holds.** The project lead reuses a launch that worked.
- **Independent: Holds.** Saving stands alone; it does not require Story 1 to be built first to be worth having.
- **Negotiable: Holds.** The story says what is saved, not how the saving is presented.
- **Estimable: Holds.** The parts are enumerated (tasks, docs, roles) and each is a known quantity.
- **Small: Holds.** One action with three options.
- **Testable, and confirmed by its criteria: Holds.** "Offers tasks, docs, and roles as separate choices, and the original project is unchanged" is two checks a tester can run.
- **Repairs before planning:** none.

## Story 3: edit a template without disturbing projects made from it

**Readiness verdict: Ready for planning.** A small story whose whole value is an integrity guarantee, and whose acceptance states the guarantee directly.

- **Valuable to a named user: Holds.** The template owner can improve the template without fear, which is what makes templates maintainable.
- **Independent: Holds.** The copy-not-link rule can be built and verified on its own.
- **Negotiable: Holds.** No mechanism is prescribed; the guarantee is.
- **Estimable: Holds.** A single rule about how projects relate to templates.
- **Small: Holds.** The smallest story in the set.
- **Testable, and confirmed by its criteria: Holds.** "Editing a template changes no existing project" is a pass-or-fail check.
- **Repairs before planning:** none.

## Story 4: "templates to handle my whole onboarding, so that setup is effortless"

**Readiness verdict: Not yet a story.** The team would be committing to the entire feature under one line, with a finish line ("effortless") that no tester could hold.

- **Valuable to a named user: Needs work.** The user is named (an admin setting up for a client) but the value is unbounded: "my whole onboarding" and "effortless" describe a feeling about everything, so nothing in the story can be traded away in a planning conversation.
- **Independent: Holds.** It depends on no other story; it merely contains all of them.
- **Negotiable: Needs work.** There is nothing to negotiate with: no specific job is named that the team could satisfy a smaller, better way.
- **Estimable: Missing.** No estimator can size "the whole onboarding" from this text; the story gives no edges to estimate against.
- **Small: Missing.** This is the epic the other stories were split from, re-entered as a story.
- **Testable, and confirmed by its criteria: Missing.** "The admin finishes setup without help" cannot be tested against a story of this size: which setup, which admin, and what counts as help are all undefined.
- **Repairs before planning:** Split along the value the set already contains (create from a template, Story 1; save as a template, Story 2; preview before committing, Story 7), and let this line retire into the feature's goal statement, where "effortless setup" can live as an aspiration instead of a commitment.

## Story 5: "As Nexus, I want to suggest templates to new admins, so that engagement with the feature rises"

**Readiness verdict: Not yet a story.** Its subject is the company. Whatever this is (a growth goal, a design task), it is not a user's story, and planning from it commits the team to a metric with no user's job underneath it.

- **Valuable to a named user: Missing.** There is no user. "As Nexus" names the beneficiary as the product itself, and "engagement rises" is the company's outcome, not a person's.
- **Independent: Holds.** The suggestion mechanism could be built on its own.
- **Negotiable: Needs work.** A user story is negotiable between the team and the user's need; a metric target is only arguable.
- **Estimable: Needs work.** "Suggest templates" has no stated surface, frequency, or audience segment, so an estimate would be a guess about scope the story has not chosen.
- **Small: Holds.** As a mechanism, it is small.
- **Testable, and confirmed by its criteria: Holds.** "Suggestions appear in the new-project flow" is checkable, which is exactly the problem: the story can be fully tested while serving no one in particular.
- **Repairs before planning:** Rewrite it from the person's side or move it to the roadmap where company goals belong. The user story hiding inside it is probably Story 7's (a new admin who wants to find a fitting template without knowing the library), which the set already has.

## Story 6: share a template to the community gallery

**Readiness verdict: Refine before planning.** The story is well formed and unusable in this version, because it depends on the gallery the companion PRD places out of scope.

- **Valuable to a named user: Holds.** A workspace admin shares proven work; the value is real when the gallery exists.
- **Independent: Missing.** It cannot be delivered in this version: its object (the community gallery) is excluded by the PRD's own Scope section, a contradiction the PRD review in this example set also flags from the other side (requirement R7). A story whose precondition is another project's launch is not independent.
- **Negotiable: Holds.** The sharing need could be met other ways (a link, an export), and the story does not forbid them.
- **Estimable: Needs work.** "Appears in the gallery after moderation" includes a moderation process nobody has specified, so the estimate hides a second project.
- **Small: Holds.** The submission act itself is small.
- **Testable, and confirmed by its criteria: Holds.** Submission followed by appearance after moderation can be checked.
- **Repairs before planning:** Hold the story with the gallery work, or re-scope it to sharing within reach of this version (an exportable template file), and say which. Do not let it into this version's plan as written.

## Story 7: preview a template before committing, "via a carousel of cards"

**Readiness verdict: Ready for planning.** One flaw, named below, and within the tolerance this rubric allows: the story is a real job with a strong acceptance test, and the flaw is a phrase, not a foundation.

- **Valuable to a named user: Holds.** A new admin choosing sight unseen is a real risk; the preview is what makes the choice confident.
- **Independent: Holds.** The preview stands alone.
- **Negotiable: Needs work.** "Via a carousel of cards" imports a finished interface (the same prescription the companion PRD makes in R5), so the team is handed a solution where it should have been handed the job. The job is seeing every task and doc title before committing; a list, a page, or a carousel could all serve it.
- **Estimable: Holds.** A preview surface over known data.
- **Small: Holds.** One surface, one decision.
- **Testable, and confirmed by its criteria: Holds.** "The preview shows every task title and doc title without creating a project" is the best acceptance line in the set.
- **Repairs before planning:** Strike "via a carousel of cards" and let the acceptance line carry the story.

## Story 8: a marker on template-born tasks

**Readiness verdict: Ready for planning.** As a story it is complete: a named user, a reason (knowing what is safe to rename or delete), and a checkable acceptance. Its problem is outside the story, noted at the top of this review: the feature appears in no requirement, so planning it is a scope decision, not a story defect.

- **Valuable to a named user: Holds.** A team member inheriting a project learns which tasks are standard and which are local.
- **Independent: Holds.** The marker can be built against Story 1's creation path.
- **Negotiable: Holds.** How the marker looks is left open; "visible until first edited" is a behavior, not a design.
- **Estimable: Holds.** A flag on a task plus one display rule.
- **Small: Holds.** The second-smallest story in the set.
- **Testable, and confirmed by its criteria: Holds.** Presence of the marker, and its disappearance on first edit, are both checkable.
- **Repairs before planning:** none to the story. The set-level repair is the PRD's: either the marker becomes a requirement or the story waits.

```
Rubric summary
Rubric: User Story Review v1.0 · Date: 2026-10-20 · Artifact: User Stories: Project Templates (user-stories-project-templates.md)
Criteria: Holds 37 · Needs work 6 · Missing 5 (counted across every story reviewed) · Stories reviewed 8
Gate criteria not met: Valuable to a named user; Independent; Testable, and confirmed by its criteria
Result: Stories ready for planning 5 of 8
```
