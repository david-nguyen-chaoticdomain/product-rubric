# Worked example: Study Plan Review

**Fixture:** `fixtures/nexus-study-plans/usability-test-plan.md` (the Nexus Invite Flow usability study test plan; the fixture brief is in the same folder).
**Rubric:** Study Plan Review (`study-plan-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Context available to this run: the decision the study feeds, stated in the plan's own Summary. Who commissioned the study and what they already believe is not stated in the plan or the fixture, and the report names that gap where the rubric requires it. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder).

---

**Overall readiness: Not ready**

Not ready for one narrow reason: the plan never names who commissioned the study or what they already believe, so the Risks, bias, and ethics criterion cannot be judged and is Missing under this rubric's context rules. Everything else in the plan is a sentence or two from fieldable, and the closing section is ordered so the planner can fix it in one pass.

The plan's strongest point is that it knows what it is for. The Summary attaches a decision ("ship as is, or fix the blockers the study finds first"), and two of its three objectives carry countable criteria ("at least 4 of 5 participants"), which is the shape that lets a readout conclude something. The single risk most likely to damage the evidence is quieter: between a screener that requires participants who have already invited in Nexus and a task that dictates the clicks, the study as written would run experienced users through instructions and report the result as a first-use finding.

## 1. Answerable questions: Needs work

- Needs work: The role objective cannot be answered as posed. Its success criterion is "Observe behavior during the role task," which defines no outcome that counts as success, so the study cannot conclude whether participants give the invited teammate the role the scenario asks for. The neighboring objectives show the fix's shape. Paste-ready fix: "At least 4 of 5 participants set Maya's role to Viewer in Task 3 without moderator help."
- The other two questions are answerable by the evidence the method produces: unaided completion is observable in a moderated session, and the status question is asked immediately after the final task, while the participant's memory of it is fresh.

## 2. Method fits the questions: Needs work

- Needs work: Task 2 teaches the answer the study exists to discover. Hypothesis 1 asks where participants look for inviting (the Members tab or the project header), but Task 2 reads "Click Invite collaborator and send an invitation to maya.chen@acmeproduct.com": it names the button, dictates the address, and comes after Task 1 has already had the participant add Maya. After Task 2, no later behavior can show where a first-time user would look. Fix: delete Task 2 and give Task 1 the address: "Get her added to the project. Her email is maya.chen@acmeproduct.com."
- The rest of the method fits: a moderated prototype session with think-aloud is the right instrument for first-use discovery and for watching role comprehension happen.

## 3. Participants match the questions: Needs work

- Needs work: Screening question 3 ("Have you sent at least one invitation from inside Nexus before? Must answer yes") excludes the people the study is about. The plan says the flow is judged "on first use rather than on habit" and mixes in non-customers, but the screener admits only experienced inviters. Fix: the criterion should read "has never sent an invitation in Nexus," which also makes the customer and non-customer mix coherent.
- The rest of the match is sound: team leads who have set up a shared tool before are the people who invite teammates, and five participants suit a discovery study of one flow.

## 4. Scope and decisions: Needs work

- Needs work: Task 5 ("Remove Daniel Kim from the Website launch project") is outside the invite flow the plan says it is evaluating, and outside the prototype states the plan lists (workspace screen, invite dialog, review step, confirmation). It also loads a 30-minute session with five tasks, a post-study interview, and a 64-word desirability exercise, so the last work in the session will be rushed. Fix: move Task 5 to a separate study of member management, or add its prototype state, extend sessions to 45 minutes, and trim the post-study set.
- The decision scope is otherwise right: one flow, one decision, a readout date a week after the last session.

## 5. Procedure and materials: Needs work

- Needs work: The plan counts "unaided" completions (Objective 1) but never defines moderator help: what the facilitator may say when a participant stalls, and when a task counts as failed. Five sessions judged by an undefined standard will not agree with each other. Fix: one sentence in Methodology: "The facilitator may repeat the task wording but may not name an interface element; a task is failed when the participant asks for direction or stops progressing for one minute."
- The rest of the procedure is specified well enough to run: facilitator and note taker named, think-aloud set, sessions recorded with consent, the desirability word list included in full rather than referenced.

## 6. Risks, bias, and ethics: Missing

- Missing (context): Neither the plan nor anything supplied with it names who commissioned this study or what they already believe about the invite flow. This rubric requires that context before this criterion can be judged, because a plan built to confirm a belief needs different scrutiny than one built to explore, so the criterion is judged Missing and the gap is named here rather than assumed away. One sentence from the planner closes it.
- What can be seen from the plan itself: the ethics basics are handled (recording with consent, a stated $50 incentive, no deception in the tasks), and the sampling and wording biases that would shape the evidence are the ones named under Participants and Method above. If the commissioner context arrives and shows the study was commissioned to explore, this criterion would still carry those two findings as Needs work; it cannot be graded until the context exists.

## Fixes before fielding

To protect the evidence:

1. Name who commissioned the study and what they already believe about the invite flow (closes the Missing verdict above).
2. Change screening question 3 so it recruits people who have never sent an invitation in Nexus.
3. Delete Task 2 and give its email address to Task 1, so discovery stays observable.
4. Give the role objective a countable criterion: "At least 4 of 5 participants set Maya's role to Viewer in Task 3 without moderator help."

To protect the participants:

5. Define moderator help and task failure in Methodology, so "unaided" means the same thing in all five sessions.

To protect the team's time:

6. Move Task 5 out of this study, or add its prototype state and lengthen sessions to 45 minutes with a trimmed post-study set.

```
Rubric summary
Rubric: Study Plan Review v1.0 · Date: 2026-10-20 · Artifact: Nexus Invite Flow - Usability Study Test Plan (usability-test-plan.md)
Criteria: Ready 0 · Needs work 5 · Missing 1 · Not judged 0
Gate criteria not met: Risks, bias, and ethics
Result: Not ready
```
