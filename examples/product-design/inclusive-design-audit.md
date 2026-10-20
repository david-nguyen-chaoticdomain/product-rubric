# Worked example: Inclusive Design Audit

**Fixture:** `fixtures/nexus-app/app-01-workspace.png` (the Nexus app, Website launch workspace, Members tab; the fixture brief is in the same folder).
**Rubric:** Inclusive Design Audit (`inclusive-design-audit`), version 1.0, built on the five Inclusive Design Principles, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Judgments are about this screen; where the product does better elsewhere, the finding says so.

---

**Overall score: 6 / 10 (Good foundation)**, 5 of 5 principles applied.

## Representation & Bias: 2 / 2, Fully Met

- *Avatars show variety in skin tone, age, body type*: **Not met.** Every member is an initials disc (SJ, AR, PP, DK). Initials are neutral, which avoids the one-default-face failure, but they show no variety either; representation on this screen is carried entirely by names.
- *Icons and illustrations avoid gender and role stereotypes*: **Met.** The navigation and card icons are objects (home, inbox, folder, settings), with no human figures and no role imagery to stereotype.
- *Default personas include diverse backgrounds*: **Met.** The workspace's people (Sarah Jenkins, Alex Rivera, Priya Patel, Daniel Kim) span backgrounds, and this is the product's own default content, not a diversity variant of it.
- *Diversity feels authentic, not tokenistic*: **Met.** The roles distribute across the names without a pattern (the project admin is Sarah Jenkins; editors and the viewer are spread across the rest), so no one appears as the diversity appointment to a single role type.

## Cultural Sensitivity: 1 / 2, Partially Met

- *Symbols and emojis checked for cultural meanings*: **Not met.** The search field's shortcut is shown as "⌘K", a Mac-only symbol; a Windows user is shown a key that does not exist on their keyboard, with no alternative offered.
- *Colors selected with regional awareness*: **Met.** Nothing on the screen uses color with a loaded cultural meaning. The green "On track" pill is a Western business convention, but it is paired with words, so its meaning does not depend on the convention.
- *Forms and inputs support global names, dates, and families*: **Not met.** Dates appear in one country's long form ("Launch October 30, 2026," "Renews October 18, 2026") with no locale adaptation in evidence. No name input is present on this screen to judge further.
- *Locale content (currency, units) considered*: **Met.** Nothing on this screen mis-states a localizable value; the only quantity is "8 of 12 seats," which is a count, not a unit.

## Fair Access: 0 / 2, Major Issues

- *Assets compressed, with low-data fallbacks*: **Not met.** No low-data or simplified path is visible anywhere on the screen, and nothing in the layout suggests the rich version has a fallback. A screenshot cannot show compression itself; it can show the absence of any alternative, and that absence is total here.
- *No assumption of fast internet or high-end hardware*: **Not met.** The screen is a dense, wide, multi-card grid that assumes a large display and a full desktop session; no condensed or staged form of it is in evidence.
- *Language and input alternatives provided*: **Not met.** The interface is English only, with a single search input as the one input method. No language choice, and no alternative way to reach the member actions, appears on the screen.
- *Mobile and small-screen layouts supported*: **Not met.** This screen shows no small-screen form: the member table and the three-card right column would have to be rebuilt, not shrunk, to work on a phone. The product's marketing site does have a phone composition (a separate fixture), which makes the gap here a choice about the app, not an oversight about phones in general.

## Inclusive Messaging: 2 / 2, Fully Met

- *Ableist terms avoided*: **Met.** No wording on the screen describes people through their bodies or abilities; presence is "Active now" and "Active yesterday," which is about time, not capacity.
- *Gendered language removed*: **Met.** The signed-in member is marked "(you)"; no pronoun or gendered term appears anywhere in the interface copy.
- *Jargon and idioms replaced with plain language*: **Not met.** Two pieces of insider vocabulary sit at the screen's center: "seats" ("8 of 12 seats") for what the pricing page calls members, and two tiers of admin ("Workspace admin" for the person, "Project admin" for the role) that a new admin must decode to know who can do what. The role definitions themselves are plain, which keeps this a single-item failure rather than a pattern.
- *Tone is welcoming and non-exclusionary*: **Met.** The copy is matter-of-fact throughout; even the access note ("Only project members can access tasks and documents") states a boundary without shaming anyone outside it.

## Power Dynamics: 1 / 2, Partially Met

- *"No" and opt-out options visible and equal to "Yes"*: **Not met.** This screen offers no decline surface at all to weigh against its offers: joining and inviting are one visible click, while leaving or removing lives unseen inside the "..." menus. As presented, forward is prominent and backward is hidden.
- *Undo and cancel actions easy and prominent*: **Not met.** Nothing on the screen shows a way back from a member change; the actions with consequences are the ones behind the unlabeled menus, and no undo is in evidence.
- *No coercive nudges toward paid features*: **Met.** The Pro plan card is a plain statement of state ("8 of 12 seats," "Renews October 18, 2026") with no urgency, no countdown, and no upgrade pressure; it informs rather than nudges.
- *Consent and privacy choices straightforward*: **Met.** Who can see the project is stated in one plain sentence on the screen, and the permissions explanation is one click away and written in words a first-time admin can follow.

## Highest impact fixes

1. Give member management visible, labeled controls with a way back (an undo or a confirm that names the consequence). It raises Power Dynamics and it is the same fix the screen's other reviews keep arriving at.
2. Produce a small-screen form of the workspace screen, and a stated path for language and low-data use. Fair Access is at zero because nothing on this screen provides an alternative to the full desktop experience.
3. Settle the vocabulary: one word for a paid person (the pricing page says "member"), and a gloss for the two admin tiers at first use. The screen explains roles well and then undercuts it with jargon at the exact points of decision.

```
Rubric summary
Rubric: Inclusive Design Audit v1.0 · Date: 2026-10-20 · Artifact: Nexus App, Website launch workspace, Members tab (app-01-workspace.png)
Principles: Scored 5 of 5 · Not judged 0
Result: 6/10
```
