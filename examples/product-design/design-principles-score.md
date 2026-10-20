# Worked example: Design Principles Score

**Fixture:** `fixtures/nexus-app/app-01-workspace.png` (the Nexus app's Website launch project, Members tab; the fixture brief is in the same folder).
**Rubric:** Design Principles Score (`design-principles-score`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written, against the PNG export of the Figma frame. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder).

---

**Overall score: 77 / 100**

The screen's main strength is that the current state of the project (progress, presence, roles, and latest activity) is readable at a glance, in words as well as graphics. Its main problem is that the actions which change who has access are hidden behind an unlabeled menu with no visible safeguards, and its most consequential claim, "On track," shows no basis on the screen that makes it.

### 1. Deliver Clear Feedback: 4 / 5

- Strength: Project progress is stated three ways that agree: "18 of 24 tasks complete" in the project meta, "18 / 24 tasks, 75%" with a progress bar in the Launch readiness card, and a green "On track" pill beside the Invite collaborator button.
- Strength: Member presence is given in words rather than dots alone: each row's Active pill is paired with "Active now," "Active 20 min ago," "Active 1 hour ago," or "Active yesterday."
- Issue: The "On track" pill asserts a judgment the screen never supports. Nothing on the Members tab shows what the status is computed from or when it was last updated, so the most consequential feedback on the screen cannot be checked from the screen.
- Issue: The freshness and access lines are set in the palest gray text on the page: "Active 20 min ago" under each status, the breadcrumb, and the lock note "Only project members can access tasks and documents." The feedback exists, but it is the hardest text on the screen to read.

### 2. Real-World Alignment: 4 / 5

- Strength: Labels use the words a team would use: "Invite collaborator," "Project members," "Launch readiness," "Next milestone: Content sign-off," and the activity line narrates an event as a sentence ("Priya Patel completed 'Homepage content review'").
- Strength: The Project access card defines Project admin, Editor, and Viewer in everyday language ("Create and edit tasks and documents") instead of assuming the product's role vocabulary is known.
- Issue: Two terms lean on SaaS convention rather than plain speech: "8 of 12 seats" in the Pro plan card, and the Workspace admin (header) versus Project admin (member table) pair, which takes the explainer card to tell apart.

### 3. Empower User Control: 3 / 5

- Strength: Navigation gives the user free movement: a workspace switcher ("Acme Product"), five project tabs, a global search with its shortcut shown, and a left nav that separates projects from workspace areas.
- Issue: Every consequential action on this screen, changing a member's role or removing a member, is hidden behind an identical unlabeled "..." icon at the end of each row. A user cannot see how to correct a mistake, such as a wrong role or a wrong invite, without exploring a menu the screen never names.
- Issue: The screen offers no visible way to undo or reverse an access change after the fact; whether one exists cannot be told from what is shown.

### 4. Build Consistent Experience: 4 / 5

- Strength: One indigo accent carries the selected nav item, the selected tab, the primary button, links, and the progress bar, so interactive and current-state elements read the same way everywhere on the screen.
- Strength: People are represented one way throughout (initial avatars, name, email, role, status), and the member table's columns stay aligned across all four rows.
- Issue: The green pill treatment means two different things: "On track" reports project health in the header area, while "Active" reports a person's presence in the table. Same color, same shape, different claims, with nothing but position to tell them apart.

### 5. Favor Recognition: 5 / 5

- Strength: Nothing on this screen has to be remembered. The role definitions sit in the Project access card beside the list they describe, the member count appears both in the tab ("Members 4") and in the card's subheading, and the next milestone is named rather than implied.
- Strength: The search field shows its keyboard shortcut ("⌘ K") in the field itself, and the latest project update is written out in full instead of being left behind the Activity tab.

### 6. Prevent and Recover from Errors: 3 / 5

- Strength: The role system itself is prevention: the access card and the lock note under the table state that only project members can reach tasks and documents, and that a Viewer can comment but not edit, so the boundaries are set before anyone acts.
- Issue: No safeguard is visible at the point of risk. The screen where access is granted and removed shows no confirmation, no consequence statement, and no recovery path for the two mistakes this screen makes possible: inviting the wrong person, or giving someone the wrong level of access.

### 7. Balance Minimalism and Support: 4 / 5

- Strength: The primary action is unmistakable (one filled button, "Invite collaborator"), the member table leads the layout, and the right rail stays quiet and relevant (access explainer, launch readiness) instead of competing with the work.
- Issue: Progress is repeated in three places (project meta, readiness card, and the latest update strip) while the help a new admin would need, how roles and removal work, is left to a single "Learn about permissions" link. Support is thinnest exactly where the screen's risky actions are.

## Highest impact fixes

1. Give "On track" a visible basis on this screen: what it is computed from and when it last changed, or move the claim to the Tasks tab where its evidence lives.
2. Make member management visible and safe: label the per-row actions (change role, remove member) instead of hiding them behind an unlabeled "...", and state the consequence before a removal takes effect.
3. Raise the contrast of the small gray lines that carry access and freshness information (the lock note, the presence timestamps, the breadcrumb), so the feedback the screen already provides can actually be read.

```
Rubric summary
Rubric: Design Principles Score v1.0 · Date: 2026-10-20 · Artifact: Nexus App, Website launch workspace, Members tab (app-01-workspace.png)
Principles: Scored 7 of 7 · Not judged 0
Result: 77/100, the average of the scored principles as a percentage
```
