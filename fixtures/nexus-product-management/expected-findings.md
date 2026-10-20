# Expected findings: Nexus product management documents

Answer keys for the four documents in this folder, one per rubric. A competent run should find the planted weaknesses below; it should also judge the rest of each document as the sound, ordinary work it is. None of these documents is a disaster, and a fair overall verdict for each is in the middle range of its rubric's forms, not the bottom.

## prd-project-templates.md (PRD Review)

1. **A goal with no measurable success metric.** "Raise first-month activation for new workspaces" is paired with "More new admins invite a teammate in their first week": no baseline, no target, no date. The neighboring goals show the expected shape (3 days to 1 day within two quarters; 25% within six months), which makes this row's gap visible.
2. **Scope smuggled in through a requirement.** The Scope section puts a public template gallery out of scope, but R7 requires submitting templates to "the community gallery," and assigns its moderation to another team that this document cannot commit. The document contradicts itself.
3. **A launch blocker parked in Open Questions.** "Whether templates can include member assignments by name before the permissions update ships. TBD." decides whether R2 can be built as written, and the same document depends on that permissions update and commits a December 4 launch. A decision with a date (the pricing question has one) is the expected shape; this one has neither owner nor date.
4. **Requirements written as solutions, and one that cannot be tested.** R5 prescribes the interface (a modal with a swipeable carousel) instead of the need it serves, and R6 ("Templates should feel fast to create from") states a feeling with no measure, unlike R1's step count.

## roadmap-2026.md (Roadmap Review)

1. **The Next column is a dated feature list.** Now items carry outcomes with timing as a note; Next items invert it ("Ships January 19, 2027") so the column reads as promises with dates instead of problems taken on in order. One Next row ("SSO and SCIM provisioning") has a circular outcome: its outcome is that the feature exists.
2. **False precision in Later.** Directional work two or three quarters out carries exact calendar dates (April 14, May 5, June 22, 2027), which no one can hold and readers will treat as commitments anyway.
3. **A dependency that appears nowhere.** Mobile app v2 offline mode (Now) and Mobile approvals (Next) both rest on the same sync work, which is not an item on the roadmap, owned by no one here, and invisible to a reader planning around the mobile dates.
4. **No freshness signals.** No last-reviewed date, no owner for the document's upkeep, and no statement of what changed since the last version, so a reader cannot tell how much to trust the later columns. (The honest Not planned section is a strength worth naming.)

## problem-statement-admin-stall.md (Problem Statement Review)

1. **A solution inside the problem statement.** The statement's final sentence prescribes "a guided way to reach their first invitation and their first assigned task," which is the Project Templates direction wearing the problem's clothes. The problem (an admin alone, facing every setup decision at once, going cold) stands without it.
2. **Evidence at two weights presented as one.** Three findings rest on cohort data and the survey; the fourth is one remark to an account manager, listed in the same sequence with the same authority. A reader cannot tell it is an illustration, not a finding.
3. **The population slips.** The headline says "new workspace admins," but the evidence covers trial workspaces, and the statement itself notes paid-plan admins behave differently. The problem as evidenced is narrower than the problem as titled.

## user-stories-project-templates.md (User Story Review)

1. **Story 4 is an epic in story's clothing.** "Templates to handle my whole onboarding, so that setup is effortless" names no bounded job, and its acceptance line ("finishes setup without help") cannot be tested against a story this size. (Independent, estimable, testable all fail.)
2. **Story 5 has no user.** "As Nexus, I want to suggest templates, so that engagement rises" is the company's goal written in story grammar; there is no user whose job it describes. (Valuable to whom is unanswerable.)
3. **Story 6 depends on what the PRD put out of scope.** Sharing to the community gallery cannot be delivered in this version (the PRD excludes the gallery, its own R7 contradiction aside), so the story is neither independent nor deliverable as part of this set.
4. **Story 7 bakes in the solution.** "Via a carousel of cards" imports the PRD's R5 prescription; the user's job is previewing before committing, which any number of interfaces could serve.
5. A smaller note: Story 8 (a marker on template-born tasks) invents a feature that appears nowhere in the PRD. A run may flag the traceability gap; it is not one of the four planted faults above.
