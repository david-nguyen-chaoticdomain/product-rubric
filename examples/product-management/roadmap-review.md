# Worked example: Roadmap Review

**Fixture:** `fixtures/nexus-product-management/roadmap-2026.md` (the Nexus roadmap, Q4 2026 to Q2 2027; the fixture brief is in the same folder).
**Rubric:** Roadmap Review (`roadmap-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder).

---

**Reliance verdict: Plan against it with the noted gaps**

The Now column and the exclusions can be planned on today; the Next column is written as promises with dates instead of problems in order, and the Later column dates its guesses to the day, so anything past this quarter will be quoted back as commitment however the author describes it.

The strategy this roadmap serves was not stated on the document and was only partly available to this review: the companion documents in the fixture folder (a problem statement about activation, a PRD) imply one, but the roadmap names none, and this review does not supply one on its behalf.

## 1. Organized by outcomes, not outputs: Needs work

The document knows the discipline and applies it unevenly. Now items pair initiatives with outcomes ("New admins reach a working project in a day, not three"). The Next column inverts it: three of its four rows lead with a ship date ("Ships January 19, 2027") and one, "SSO and SCIM provisioning," has a circular outcome ("SSO and SCIM are available"), which is the feature restated as its own result. A reader planning against Next is planning against a release calendar, not against problems taken on in order. Fix: give each Next row the Now treatment (the outcome first, timing as a note), and state SSO's outcome in the buyer's terms (a security review passed, an enterprise deal unblocked).

## 2. Every item traces to a strategy: Needs work

No strategy is named anywhere on the document, so no item can be checked against one. The items plausibly belong to a story (activation, sprint depth, platform completeness), and the "How to Read" note explains the columns' logic well, but traceability that lives in the reader's inference is not traceability: when a Later item is challenged in a planning meeting, this document gives its defender nothing to point to. Fix: one or two sentences at the top naming what the company is trying to make true this year, in the form the problem statement in this fixture set already uses.

## 3. Time horizons are honest: Needs work

The horizons are labeled honestly (Now is work in progress, Later "is expected to change"), and then the Later column dates its directional items to the day: April 14, May 5, June 22, 2027. Nobody can hold those dates, and every audience this roadmap is shared with will hold them anyway; the disclaimer in the header will not be quoted in the meeting where the date is. The Next column's exact ship dates make the same promise a quarter closer. Fix: Later items carry quarters, not dates; Next items carry months; exact dates stay in Now, where the work exists to support them.

## 4. Dependencies and capacity are visible: Needs work

Nothing on the roadmap connects its items. Mobile app v2 offline mode (Now) and Mobile approvals (Next) plainly rest on the same underlying sync work, which appears nowhere as an item, owned by no one, so a reader cannot see that the February item inherits the November item's risk. Capacity is likewise invisible: four Next initiatives land in one quarter with no sense of how many teams exist to build them, so the column reads as a list of hopes at equal weight. Fix: name the shared dependency as its own line where it first bites, and mark which team carries each Next item.

## 5. What is not on it is clear: Holds

The Not Planned section is the document's best feature and the one most roadmaps skip: a desktop app and time tracking are excluded, each with a reason and, for the desktop app, the condition that would reopen it ("only if offline demand changes character"). A reader can settle a scope argument from this document, which is what the criterion asks.

## 6. It is current, dated, and owned: Needs work

The roadmap is owned in the byline ("Prepared by Marcus Webb") and bounded by quarter, but it carries no date of preparation or last review, no statement of what changed since the previous version, and no next review point. For a document whose Later column will be read for at least two quarters, a reader has no way to tell whether they are holding this month's thinking or last quarter's. Fix: an "as of" date and a one-line change note per version, kept in the header where the reading instructions already live.

## Fixes before this is shared

1. Take the exact dates off Later (quarters) and soften Next to months, so the document stops making promises its own header disclaims.
2. Restate the Next column as outcomes in order, starting with the circular SSO row.
3. Name the strategy in two sentences at the top, and the shared mobile dependency as its own item.
4. Add an as-of date and a change line to the header.

```
Rubric summary
Rubric: Roadmap Review v1.0 · Date: 2026-10-20 · Artifact: Nexus Product Roadmap - Q4 2026 to Q2 2027 (roadmap-2026.md)
Criteria: Holds 1 · Needs work 5 · Missing 0
Gate criteria not met: Organized by outcomes, not outputs; Time horizons are honest
Result: Plan against it with the noted gaps
```
