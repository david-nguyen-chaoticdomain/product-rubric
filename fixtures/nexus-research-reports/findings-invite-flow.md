# Invite Flow Usability Study - Findings Report | Prepared by Jordan Lee

### Summary

Five moderated sessions ran October 19 to 23, 2026 against the invite flow prototype. The study asked whether a first-time admin can invite a teammate, set the right role, and confirm the invitation was sent. The flow has three critical blockers that must be fixed before it ships. Participants liked the two-step structure and trusted the review step to catch mistakes. Detailed findings follow, with the task results in the appendix.

### Method in Brief

Five participants, team leads who coordinate projects and had set up a shared tool before. Thirty-minute remote sessions, think-aloud, one facilitator and one note taker. Each participant worked the same five tasks in the same prototype: the workspace screen, the invite dialog, the review step, and the confirmation.

### Findings

**1. Admins cannot tell whether their invitation was sent.**
After sending, participants hesitated at the confirmation. Two of the five asked aloud where the invitation had gone. All five located the invitation's status within a minute, in the member list, where the invitee appears as invited. P3: "I think it sent? I would love it to just say so." The confirmation screen returns the participant to the workspace without a persistent record at the point of sending.

**2. The review step catches real mistakes.**
Across the five sessions, the review step caught one wrong role (P2, Editor instead of Viewer) and one mistyped email address (P5). Both participants corrected the error at the review step without help. P5: "Good thing that screen showed me, I had the wrong Maya."

**3. Nobody starts from the Members tab.**
Participants went to the project header to begin inviting. The Members tab, where the project's people are listed, was not where anyone started the task.

**4. The invite button should be moved into the project header.**
The invite action belongs in the header next to the project name, where participants look for it, rather than where it sits now.

**5. Role names feel formal, and that is a critical barrier.**
One participant (P4) said the role names were "a bit formal" ("Project admin, Editor, Viewer"). The names are the vocabulary the whole permissions model uses, and unfamiliar vocabulary at the moment of granting access is a critical barrier to adoption.

**6. Participants distrusted the review step.**
Participants treated the review step as a formality and moved through it quickly, because a second step implies the first one might have failed.

### Recommendations

- Say plainly, at the point of sending, that the invitation was sent and where to find it.
- Keep the review step; it earns its place by catching errors.
- Move the invite button into the project header.
- Rename the roles in plainer words.

### Appendix: Task Results

|Task|Completed unaided|Notes|
|---|---|---|
|1. Add Maya to the project|4 of 5|Three of five started from the Members tab; two from the project header|
|2. Click Invite collaborator and send|5 of 5|Task named the button; completion expected|
|3. Set the role to Viewer|4 of 5|P2 chose Editor, caught it at the review step|
|4. Confirm the invitation and find resend|3 of 5|Two hesitated, then found the status in the member list|
|5. Remove a member|2 of 5|The removal path lives behind the member's menu; sessions ran long and this task was cut short twice|

### Limits

A prototype, five participants, one flow. Nothing here measures how the flow performs in a real workspace with real data.
