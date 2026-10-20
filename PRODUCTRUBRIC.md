# ProductRubric library index

This file is the master index of the ProductRubric library. It is generated from the rubric files by `scripts/build-index.mjs`; do not edit the index tables by hand.

A project can carry its own PRODUCTRUBRIC.md at its root to declare which rubrics the team uses. The convention is a folder rule, not a file list: the project points at its rubrics folder, and every rubric file in that folder is in scope. New files are picked up automatically, and nobody has to edit the index when a rubric is added.

## Reporting rules for this library

- Run the rubric exactly as written. Do not merge criteria, skip sections, or soften the honesty rules.
- Report results in the output format the rubric specifies, including its closing highest-impact fixes.
- When two rubrics cover the same screen, report each evaluation separately under its rubric's name, so results stay comparable across runs and across AI tools.
- Every report ends with the tracking summary block the rubric's output format specifies. When a team tracks results over time, the block is the record to keep: it is tallied from the report's own judgments, and the rubric version it names is what makes runs comparable.

## product-design

| Rubric | Summary | Scale | Level |
| --- | --- | --- | --- |
| [Design Principles Score](rubrics/product-design/design-principles-score.md) | Scores a screen or flow against seven product design principles, with findings tied to visible elements. | 1-5 per principle; overall 0-100 | Standard |
| [Inclusive Design Audit](rubrics/product-design/inclusive-design-audit.md) | Audits a screen or flow against five inclusive design principles for cultural fit, checking who the design includes and who it unintentionally leaves out. | 0-2 per principle; overall 0-10 | Standard |
| [Five Second Test](rubrics/product-design/five-second-test.md) | Predicts what a first-time visitor will remember after seeing a screen for five seconds, and which notable elements they will miss. | Memorability 0-10; simulated panel of 5; 3-of-5 rule | Simple |
| [Copy Review](rubrics/product-design/copy-review.md) | Reviews every piece of text on a screen and returns a revision for each one that fits the same space and does the same job better. | No scale; per-element revisions | Standard |
| [Accessibility Review](rubrics/product-design/accessibility-review.md) | Reviews a screen's design for accessibility problems that are visible in a screenshot or description, judged against criteria derived from WCAG 2.2. | No overall score; findings rated Blocker to Minor, or Cannot judge | Standard |
| [Attention Prediction](rubrics/product-design/attention-prediction.md) | Predicts the three places a viewer's eye will land first on a screen, in order, with positions a tool can draw as an overlay. | Exactly 3 hotspots; intensity High 70-100, Medium 40-69, Low 20-39 | Simple |
| [Design Quality](rubrics/product-design/design-quality.md) | Reviews a design submission, a multi-frame board with its rationale, against seven dimensions of professional design quality, the way a design leader would in a critique. | 1-5 per dimension; overall 0-100 across judged dimensions | Deep |

## product-research

| Rubric | Summary | Scale | Level |
| --- | --- | --- | --- |
| [Study Plan Review](rubrics/product-research/study-plan-review.md) | Reviews a research study plan before it is fielded, judging whether the questions are answerable, the method fits them, and the participants and materials will produce evidence the team can act on. | No numeric score; verdicts Ready, Needs work, or Missing, with an overall readiness verdict | Deep |
| [Survey Review](rubrics/product-research/survey-review.md) | Reviews a survey questionnaire question by question, finding the wording, scale, and ordering flaws that bias answers or make them impossible to give, and suggesting a corrected version of each flawed question. | No overall score; flaws rated Invalidating, Biasing, or Burden | Standard |
| [Findings Review](rubrics/product-research/findings-review.md) | Reviews a research readout, the report or summary stakeholders will read, judging whether every claim traces to evidence, whether observation and interpretation are kept apart, and whether recommendations stay proportional to what the study can support. | No numeric score; verdicts Holds, Needs work, or Missing, plus a claim audit and a reliance verdict | Standard |
| [Competitive Analysis Review](rubrics/product-research/competitive-analysis-review.md) | Reviews a competitive analysis, judging whether the competitor set is complete, the evidence is first-hand and dated, the comparison serves the reader's decision, and competitor strengths are reported as honestly as their weaknesses. | No numeric score; verdicts Holds, Needs work, or Missing, with an overall reliance verdict | Standard |

## product-management

| Rubric | Summary | Scale | Level |
| --- | --- | --- | --- |
| [PRD Review](rubrics/product-management/prd-review.md) | Reviews a product requirements document before a team builds against it, judging whether the problem is established with evidence, the scope is decidable, success is measurable, and the undecided things are labeled as undecided. | No numeric score; verdicts Ready, Needs work, or Missing, with an overall readiness verdict | Deep |
| [Roadmap Review](rubrics/product-management/roadmap-review.md) | Reviews a product roadmap, judging whether it is organized by outcomes rather than outputs, whether each item traces to a strategy, whether its dates are honest about their certainty, and whether what is not on it is as clear as what is. | No numeric score; verdicts Holds, Needs work, or Missing, with an overall reliance verdict | Standard |
| [Problem Statement Review](rubrics/product-management/problem-statement-review.md) | Reviews a problem statement or problem brief, judging whether it names a specific person, rests on evidence, states the cost of the status quo, stays free of a smuggled-in solution, and draws its own boundary. | No numeric score; verdicts Holds, Needs work, or Missing, with an overall verdict | Simple |
| [User Story Review](rubrics/product-management/user-story-review.md) | Reviews a user story and its acceptance criteria, judging whether the story is valuable to a named user, small and independent enough to build, estimable from what is written, and confirmed by criteria a tester could actually check. | No numeric score; verdicts Holds, Needs work, or Missing, with an overall readiness verdict per story | Simple |
| [Project Plan Review](rubrics/product-management/project-plan-review.md) | Reviews a project plan before anyone commits to its dates, judging whether its outcome and scope are decidable, its milestones are verifiable states, its estimates take the outside view, its critical path is visible, its risks, assumptions, issues, and dependencies are kept as a living register, and it knows how it will change. | No numeric score; verdicts Ready, Needs work, or Missing, with an overall commitment verdict | Deep |

## product-marketing

| Rubric | Summary | Scale | Level |
| --- | --- | --- | --- |
| [Positioning Review](rubrics/product-marketing/positioning-review.md) | Reviews a positioning document against the five components of effective positioning, judging whether the competitive alternatives are the real ones, the unique attributes are actually unique, the value has proof, the best-fit customer is specific, and the market category is chosen rather than defaulted into. | No numeric score; verdicts Holds, Needs work, or Missing, with an overall verdict | Standard |
| [Messaging Review](rubrics/product-marketing/messaging-review.md) | Reviews a messaging document, judging whether it leads with an insight rather than the product, engages the alternatives honestly, lets the differentiated value carry the hierarchy, attaches proof at the right strength, keeps the customer as the subject, and answers objections before closing with a clear ask. | No numeric score; verdicts Holds, Needs work, or Missing, with an overall verdict | Standard |
| [Launch Plan Review](rubrics/product-marketing/launch-plan-review.md) | Reviews a product launch plan, judging whether the launch tier is named and resourced to match, every audience has a message and a moment, internal teams are enabled rather than surprised, execution is sequenced and owned, success is instrumented before launch day, and risk, rollback, and a slipping date are all planned for. | No numeric score; verdicts Ready, Needs work, or Missing, with a launch readiness verdict | Deep |
| [Battlecard Review](rubrics/product-marketing/battlecard-review.md) | Reviews a competitive battlecard, judging whether its claims about the competitor are sourced and dated, whether the competitor's strengths are stated honestly, whether the card arms a rep for both winning and losing ground, whether it can be used in the middle of a live call, and whether its freshness is owned. | No numeric score; verdicts Holds, Needs work, or Missing, with an overall verdict | Simple |
