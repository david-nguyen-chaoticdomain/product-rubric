# Worked example: Accessibility Review

**Fixture:** `fixtures/nexus-app/app-01-workspace.png` (the Nexus app, Website launch workspace, Members tab; the fixture brief is in the same folder).
**Rubric:** Accessibility Review (`accessibility-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder), which names the same two serious problems from the design side.

---

**Scope**: a screenshot of one app screen (the Website launch project's Members tab), desktop web. This is a design review of what the screenshot shows, not a conformance audit; nothing here claims or denies WCAG conformance.

## Findings

### 1. Perceivable: text readability

- **The palest text on the screen carries freshness and access information, at Serious severity.** The presence lines under each member ("Active 20 min ago," "Active yesterday"), the Latest project update strip, and the lock note ("Only project members can access tasks and documents") are set in a pale gray that appears far below readable contrast norms on the white ground. These are not decorations: presence tells an admin whether a teammate is reachable, and the lock note is the screen's access statement. A low-vision user loses exactly the information this screen exists to give. Fix at the design level: set secondary text in a gray that meets readable contrast, and rebuild the hierarchy with weight and size, which the screen already uses well elsewhere.

### 2. Perceivable: meaning never rides on color alone

No findings. See Looks sound.

### 3. Operable: targets and spacing

- **The per-member "..." menu buttons are small targets, at Moderate severity.** Each member row ends in a small, tightly spaced "..." button, repeated four times. On a trackpad they are merely fiddly; on a touch screen or for a user with a motor impairment, a target this size, this close to the row it acts on, invites the wrong row. Fix: give the button a hit area at platform norms (the row's full height is available), even if the glyph stays small.

### 4. Operable and understandable: visible state and order

No findings. See Looks sound.

### 5. Understandable: labels, instructions, and errors

- **The member-management controls have no visible label, at Serious severity.** The "..." buttons hold the actions that change who can access the project, including removing a member, and nothing on the screen says so: no text label, no tooltip in evidence, only a punctuation glyph. A user who cannot guess the convention cannot find the screen's most consequential actions, and a screen reader user depends entirely on a name the picture cannot show. Fix: label the control ("Manage" or the member's name plus "actions"), at least on focus and hover, and give it a proper accessible name in the build.

### 6. Robust: what the picture cannot promise

Cannot judge. See below.

## Looks sound

- **Meaning never rides on color alone (criterion 2)**: the "On track" pill pairs its green with the words; launch readiness pairs its progress bar with "18 of 24 tasks" and "75%"; presence is stated in words ("Active now," "Active 20 min ago") rather than shown as colored dots alone.
- **Visible state and order (criterion 4)**: the signed-in user is identified in text ("Sarah Jenkins (you)"), the workspace and project context are named at the top, and the Members tab's selected state is carried by its label styling in a list of labeled tabs, so the reading order (context, members, access, readiness) matches the task order.
- **Labels and instructions (criterion 5, in part)**: the three project roles are defined in plain words on the screen itself, in the Project access card, with a "Learn about permissions" link for more; the search field is labeled with its shortcut ("Search Nexus ⌘K").

## Cannot judge from this input

- **Errors (criterion 5, in part)**: this screen shows no form in an error state, so how the design communicates a failed invitation or a wrong address cannot be judged. The invite dialog and its review step (a separate fixture screen) with an error forced would be needed.
- **Robust (criterion 6)**: nothing about the build (markup, names, roles) can be judged from a picture. The built product and a code-level tool would be needed.

## Not covered by this review

A screenshot review never covers: keyboard operation, screen reader names and order, focus behavior, exact contrast ratios, and behavior at high zoom. The contrast finding above is a visual judgment that these fall short, not a measured ratio.

## Highest impact fixes

1. Label the member-row menus. The screen's most consequential actions should not hide behind an unlabeled glyph.
2. Raise the palest text to readable contrast. Presence and the access note are the screen's working information, not its decoration.
3. Enlarge the menu buttons' hit areas to platform norms, using the row height that is already there.

```
Rubric summary
Rubric: Accessibility Review v1.0 · Date: 2026-10-20 · Artifact: Nexus App, Website launch workspace, Members tab (app-01-workspace.png)
Findings: Blocker 0 · Serious 2 · Moderate 1 · Minor 0 · Criteria not judged 1
Result: Highest severity present: Serious
```
