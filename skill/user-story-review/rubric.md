---
name: User Story Review
category: product-management
version: 1.0
summary: Reviews a user story and its acceptance criteria, judging whether the story is valuable to a named user, small and independent enough to build, estimable from what is written, and confirmed by criteria a tester could actually check.
when_to_use: Before a story enters a sprint or a planning session: a single story with its acceptance criteria, or a small set from a backlog, when the question is whether the team can build and confirm it without coming back to ask what was meant.
inputs: One user story with its acceptance criteria, as written in the backlog. A small set of stories may be supplied and is reviewed story by story. Designs, mockups, or technical notes attached to the story strengthen the review when included.
scale: No numeric score; each criterion judged Holds, Needs work, or Missing, with an overall readiness verdict per story
level: simple
author: David Nguyen
author_url: https://davidnguyen.com/
source_author: Bill Wake
source_title: INVEST in Good Stories, and SMART Tasks
source_url: https://xp123.com/invest-in-good-stories-and-smart-tasks/
---

## Purpose

Use this rubric to review a user story before a team commits a sprint to it. A story is the smallest contract in product work, and its failures are small-contract failures: the value clause is a benefit to the system rather than to a person, the story is quietly three stories wearing one title, or the acceptance criteria cannot be checked by anyone, so "done" gets negotiated at the end of the sprint instead of confirmed. Each failure is a sentence to fix in refinement and a week to fix in the sprint.

This review judges the story as written, against the six attributes of a good story that Bill Wake's INVEST acronym names: Independent, Negotiable, Valuable, Estimable, Small, and Testable. It adds one discipline of its own on top of them: the acceptance criteria are read the way a tester will read them, as the definition of how anyone will know the story is true. Where several stories are supplied, each gets its own verdicts; the review does not average a set into a general impression.

The review does not judge priority. A story can pass every criterion here and still be the wrong thing to build next; ordering the backlog is the product owner's judgment, and the Problem Statement Review in this library speaks to whether the underlying problem was framed honestly. If the input is not a story at all (a task list with no user, a bug report, a technical chore), say so and judge it only on the criteria that can apply, naming the mismatch rather than failing a chore for not being a story.

## Criteria

Judge each criterion Holds, Needs work, or Missing, using the Scoring section. Every judgment cites the story's or criteria's own words.

### 1. Valuable to a named user
The story's benefit belongs to a person, in words that say what becomes possible for them.
- What to examine: The "as a" clause for a role a tester could picture (a team admin, a returning buyer) versus a mask for the system ("as a user," "as the platform"). The "so that" clause for an outcome in the user's world (finish the report before the meeting ends) versus a restatement of the feature ("so that I can use the export button") or a benefit to the business wearing the user's clothes.
- What good looks like: Someone could ask the named user whether the story, once true, mattered to them, and the question would make sense.
- What bad looks like: Value that only the builder can feel; a "so that" that collapses if the feature is removed, because it was the feature all along.

### 2. Independent
The story can be scheduled and built in any order relative to its neighbors, or its dependencies are named where a planner will see them.
- What to examine: Whether the story secretly requires another unfinished story, a data migration, or an external team's delivery, and whether that requirement is written on the story or discoverable only in stand-up. Whether the story overlaps a sibling in concept, so building both double-counts the work.
- What good looks like: A planner could pull this story into the next sprint without pulling a chain behind it, or can see the chain plainly on the card before trying.
- What bad looks like: "Part 2" of a split whose Part 1 is unscheduled; a story whose acceptance criteria reference behavior that does not exist yet and is owned by nobody's plan.

### 3. Negotiable
The story states the need and leaves the shape of the answer open to the conversation it is meant to start.
- What to examine: Whether the story and its criteria prescribe the implementation (a named library, a specified layout, an exact algorithm) where the need does not require it, freezing decisions the builders should make. Equally, whether the story is so open it is a topic rather than a story ("improve reporting"), leaving nothing to negotiate from.
- What good looks like: The card captures the essence tightly enough to prioritize and loosely enough that the designer and engineers can still improve the answer in conversation.
- What bad looks like: A miniature specification with a story's title pasted on top; or a slogan with acceptance criteria to be written later by somebody else.

### 4. Estimable
A team could size this story from what is written, because its unknowns are few and named.
- What to examine: Whether the scope's edges are readable (which screens, which data, which roles); whether unknowns that would change the size are stated as unknowns ("depends on whether the vendor API supports bulk fetch") or buried. Whether the story mixes a known small part with an unexamined large part in a way that makes any single number a fiction.
- What good looks like: The team might still argue about the number, but they would be arguing about the work, not about what the story means.
- What bad looks like: An estimate would be a guess about intent; the story that everyone sizes differently because each reader silently includes a different second half.

### 5. Small
The story is one finishable slice, sized in days rather than in a fraction of a quarter.
- What to examine: Whether the story delivers one coherent piece of value end to end (a thin slice through the whole path) versus one horizontal layer (all the database work, none of the visible behavior). Whether it is carrying riders: unrelated fixes, a second user, a "while we are in there" expansion. Where it is too large, whether the split is visible along value lines rather than merely urged.
- What good looks like: The story could plausibly be demonstrated, working, inside one sprint by the team that will build it.
- What bad looks like: An epic with a story's formatting; a layer cake slice that shows the user nothing until three more stories land.

### 6. Testable, and confirmed by its criteria
The acceptance criteria define how anyone will know the story is true, and each one can actually be checked.
- What to examine: Whether criteria exist at all; whether each is checkable by a named observer performing an action and seeing a result (in Given When Then form or an equally concrete checklist) versus adjectives awaiting a judge ("fast," "intuitive," "robust") with no measure or threshold. Whether the negative and edge cases that matter for this story (empty state, denied permission, partial data) appear where a reasonable tester would look for them. Whether any criterion contradicts another, or requires behavior the story's own text excludes.
- What good looks like: A tester given only this card could write the test cases today, and two testers would write substantially the same ones.
- What bad looks like: Criteria that restate the story in the future tense ("the user will be able to export"); a single criterion, "works as expected," carrying the whole definition of done.

## Scoring

This rubric gives no numeric score. Each criterion receives one verdict:

- **Holds**: the story meets this criterion; the team can rely on it in this respect.
- **Needs work**: the criterion is attempted but a specific gap undermines it. The finding names the gap and what would repair it.
- **Missing**: the story makes no attempt at this criterion (no acceptance criteria at all, no value clause), or the attempt is so thin it cannot be relied on.

Overall readiness verdict, stated once per story, in exactly one of these forms:

- **Ready for planning**: no criterion below Holds except at most one Needs work.
- **Refine before planning**: any other combination short of the line below; the repairs are sentences, and refinement is where they belong.
- **Not yet a story**: any criterion Missing on Valuable to a named user or Testable, and confirmed by its criteria. In this state the team would be committing to work whose value and whose finish line are both undefined.

When several stories are supplied, the report carries each story's verdicts separately and opens with a one-line summary of the set (how many of each verdict), never a blended grade.

## Output format

Return the review in this structure, in Markdown, repeated per story when a set is supplied:

1. **The story, quoted or tightly paraphrased, and its readiness verdict: [Ready for planning / Refine before planning / Not yet a story]**, with one sentence of reason.
2. One short section per criterion, in the order above, with its verdict and the finding tied to the story's own words.
3. A closing section, **Repairs before planning**, in priority order: value and testability first, then size and independence, then the rest. Where a story is too large, the repairs name the split the story's own value lines suggest.

Example of a finding at the standard this rubric expects:
- Acceptable: "Needs work: the criterion 'the export loads fast' cannot be checked by anyone, because no time, data size, or device is named. The repair is a threshold a tester can hold: 'with 500 rows, the export completes within 3 seconds on a mid-range laptop,' or the criterion should be dropped and the speed concern moved to the story's notes as a hope rather than a test."
- Not acceptable: "The acceptance criteria need work." (It names no criterion and no repair.)

## Honesty rules

- Review the story as written, not the conversation the team may have had about it. A story whose meaning lives in its author's head fails the criteria it fails, however good the meeting was; the card is what the sprint runs on.
- Do not judge priority, and do not let priority leak into the verdicts. A low-value ordering decision is not a badly written story, and the review does not use craft verdicts to argue sequencing.
- Do not invent the missing criteria and credit the story with them. Repairs show what a fix would look like; the verdict reflects the card as submitted.
- Do not treat the story format itself as a requirement. A story written as a plain sentence with concrete criteria can pass, and a perfect "As a / I want / So that" incantation with empty clauses fails Valuable on its own words.
- An estimate's existence is not evidence of estimability, and its absence is not evidence against it. Judge whether the written story supports a size judgment, not whether a number happens to be attached.

## Sources

This rubric is built on the INVEST criteria for good user stories, from Bill Wake, "INVEST in Good Stories, and SMART Tasks," XP123, 2003: https://xp123.com/invest-in-good-stories-and-smart-tasks/. The criteria names and the attributes they point at are Wake's. The verdict scale, the reading of acceptance criteria as the story's confirmation, the output format, and the honesty rules are the rubric author's own, written for ProductRubric. This rubric is not affiliated with or endorsed by Bill Wake or XP123, and no text from the source is reproduced.
