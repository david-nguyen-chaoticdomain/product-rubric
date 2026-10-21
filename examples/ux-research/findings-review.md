# Worked example: Findings Review

**Fixture:** `fixtures/nexus-research-reports/findings-invite-flow.md` (the findings report for the Nexus invite flow usability study; the fixture brief is in the same folder).
**Rubric:** Findings Review (`findings-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder).

---

**Reliance verdict: Do not circulate yet**

The report's evidence habits are mostly good, but four of its eight most quotable claims are unsupported by the evidence inside it, and two of those are contradicted by the report's own appendix and summary, so a reader who quotes its findings will quote at least one thing the study did not find.

The underlying study material (session recordings and notes) was not available to this review; the audit checks claims against the evidence presented in the report itself, including its appendix. The study plan was available and is noted where the report departs from it.

## Claim audit

1. **"The flow has three critical blockers that must be fixed before it ships"** (Summary). **Unsupported.** The findings name at most two candidates for blocker weight, Finding 1's evidence is a hesitation every participant resolved within a minute, and Finding 5's is one participant calling the role names "a bit formal." No third blocker is identified anywhere in the report.
2. **"Admins cannot tell whether their invitation was sent"** (Finding 1). **Partly supported.** The evidence under it is that two of five participants hesitated and all five found the invitation's status within a minute. The claim the evidence supports is "some admins hesitate at the point of sending because the confirmation does not say plainly what happened," which is a smaller and more fixable claim.
3. **"The review step catches real mistakes"** (Finding 2). **Supported.** Two concrete catches are reported (a wrong role, a mistyped address), each corrected unaided at the review step, with a participant quote that matches the claim's size.
4. **"Nobody starts from the Members tab"** (Finding 3). **Unsupported.** The report's own appendix records that three of five participants started Task 1 from the Members tab. The evidence argues the other way, and the study's plan (Hypothesis 1) predicted the behavior the appendix shows.
5. **"The invite button should be moved into the project header"** (Finding 4). **Unsupported.** No participant evidence is presented under it, and the appendix's start-point counts lean against the preference it asserts. It is also a prescription, not a finding (see criterion 2).
6. **"Role names feel formal, and that is a critical barrier to adoption"** (Finding 5). **Partly supported.** One participant did call the names "a bit formal," which supports the observation. Nothing in the report supports grading a single mild comment as a critical barrier to adoption.
7. **"Participants distrusted the review step"** (Finding 6). **Unsupported.** No quote, count, or observation is presented for it, and it contradicts Finding 2's evidenced account and the Summary's own sentence ("participants trusted the review step to catch mistakes").
8. **"Participants liked the two-step structure and trusted the review step"** (Summary). **Partly supported.** Trust is evidenced by Finding 2. Liking was never measured or quoted; the summary adds an attitude the study did not ask about.

## 1. Claims trace to evidence: Needs work

The pattern is split down the middle. Findings 1 and 2 do the work properly: counts, behavior, and a quote the reader can weigh. Findings 3, 4, and 6 rest on nothing the reader can inspect, and Finding 3 is worse than unsupported, because the disproving evidence is printed in the same document's appendix. A readout cannot ask to be believed on its evidence while three of its six findings decline to provide any.

## 2. Observation and interpretation stay separate: Needs work

Finding 1 upgrades a hesitation into an inability ("cannot tell"), which is interpretation traveling as observation. Finding 6 assigns a motive (distrust, "because a second step implies the first one might have failed") with no participant saying anything of the kind. Finding 4 is a design prescription numbered as a finding. The reader is left to sort observation from opinion by hand, and the quotable sentences are the inferences.

## 3. Disconfirming evidence is present: Needs work

Unusually, the disconfirming evidence is in the document: the appendix's Task 1 note (three of five from the Members tab) and Finding 1's own last count (all five found the status within a minute). The failure is that the findings ignore it. Finding 3 states the opposite of the appendix without acknowledging it, and Finding 1's headline carries no boundary for the three participants who did not hesitate. Evidence that is present but unheeded does not protect a reader.

## 4. Recommendations stay proportional: Needs work

The spread is uneven. "Say plainly, at the point of sending, that the invitation was sent" is sized exactly to Finding 1's real evidence, and "Keep the review step" is sized to Finding 2's. "Move the invite button into the project header" rests on Finding 4, which has no evidence, and "Rename the roles in plainer words" is a product-wide vocabulary change sized to one participant's "a bit formal." The largest asks sit on the smallest evidence in the document, and the readout's own language does not mark the difference.

## 5. The basis is stated honestly: Holds

The report says what it rests on: five participants, who they were, session length and format, the prototype's states, the study window, and a limits section that names the obvious constraint ("a prototype, five participants, one flow") without hedging the findings into mush. Denominators stay visible throughout ("two of the five," "4 of 5"). A reader months later can weigh these claims correctly, which is what this criterion asks.

## 6. Participant voice is representative: Needs work

Five participants produce two quotes in the entire report (P3 on the confirmation, P5 on the review step), each attached to a finding it fits. The third voice, P4's "a bit formal," is not quoted in full anywhere and is made to carry a "critical barrier" grading in Finding 5, which is the most dramatic possible use of the mildest material in the study. The other participants are silent, so the reader meets the study through its most quotable edges only.

## Fixes before this circulates

1. Correct or delete Finding 3. The appendix is the record: most participants started from the Members tab, and the study's Hypothesis 1 was right.
2. Delete Finding 6, or produce the observation it rests on. As written it contradicts Finding 2 and the Summary.
3. Move Finding 4 into Recommendations and argue for it there, against the appendix's counts, which currently lean the other way.
4. Restate Finding 1 at the size of its evidence: a hesitation at the point of sending, resolved by all five within a minute.
5. Restate the Summary's blocker count to what the findings support, and regrade Finding 5's "critical barrier" to what one mild comment can carry.
6. Add the disconfirming counts to the findings they bound, so the appendix stops being the only place the whole story is told.

```
Rubric summary
Rubric: Findings Review v1.0 · Date: 2026-10-20 · Artifact: Invite Flow Usability Study - Findings Report (findings-invite-flow.md)
Criteria: Holds 1 · Needs work 5 · Missing 0 · Claims audited 8: Supported 1 · Partly supported 3 · Unsupported 4
Gate criteria not met: Claims trace to evidence
Result: Do not circulate yet
```
