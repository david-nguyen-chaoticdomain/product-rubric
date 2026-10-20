---
name: Roadmap Review
category: product-management
version: 1.0
summary: Reviews a product roadmap, judging whether it is organized by outcomes rather than outputs, whether each item traces to a strategy, whether its dates are honest about their certainty, and whether what is not on it is as clear as what is.
when_to_use: Before a roadmap is shared with executives, sales, customers, or the team itself: a quarterly plan, a Now Next Later board, or a release timeline, when the question is whether people can plan on what it says.
inputs: The roadmap as its audience will see it: the items, their grouping, and their timing, in whatever form it is kept. The strategy or objectives it serves strengthen the review when supplied; without them, the review judges the roadmap's internal traceability and says so.
scale: No numeric score; each criterion judged Holds, Needs work, or Missing, with an overall reliance verdict
level: standard
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to review a product roadmap before it is shared. A roadmap is a promise-making document read by people who will spend money, sell, hire, and plan against it, and its most common failure is that it looks like a plan while functioning as a wish: a list of features sorted by hope, with dates that mean different things in different rows and certainty nowhere labeled. Within a quarter the document has been quoted to a customer, a board, and a new hire, each of whom read a firmer commitment into it than its author intended.

This review judges the roadmap as an instrument of shared planning. It asks whether the roadmap is organized around outcomes and problems or around outputs, whether a reader can trace each item to the strategy it serves, whether the timing is honest about what is committed and what is directional, and whether the document is as clear about what the team is not doing as about what it is.

The review does not judge whether the strategy is right or whether the items are the ones the reviewer would have chosen. A roadmap for a wrong strategy can pass this review by being honest about what it is, and a sound strategy can be carried by a roadmap that fails it. If the input is a single project's delivery plan rather than a roadmap (milestones, owners, dependencies for work already decided), say so; that is the Project Plan Review's territory, not this rubric's.

## Criteria

Judge each criterion Holds, Needs work, or Missing, using the Scoring section. Every judgment cites the roadmap's own items, groupings, or labels.

### 1. Organized by outcomes, not outputs
The roadmap's units are problems to solve and results to achieve, with features appearing as candidate solutions rather than as the plan itself.
- What to examine: Whether items are stated as outcomes ("reduce time-to-first-report for new teams") or as deliverables ("build CSV export v2"); whether themes or objectives group the work by the result sought; whether, where a feature is named, the roadmap marks it as the current best solution to a stated problem, open to being replaced by a better one.
- What good looks like: A reader can say what will be different for customers if each item succeeds, and a feature could be swapped for a different solution without the roadmap's structure breaking.
- What bad looks like: A column of feature names with dates, under which no problem or outcome is stated anywhere; themes that are really department names ("Platform," "Mobile") grouping outputs by who builds them.

### 2. Every item traces to a strategy
Each item on the roadmap connects visibly to a goal, objective, or strategy the team has stated, and items that cannot be traced are visible as exceptions rather than hidden in the list.
- What to examine: Whether the strategy the roadmap serves is named on or with the document; whether each item carries its line to that strategy (an objective tag, a stated rationale, a metric it moves); whether there are orphan items whose presence no stated goal explains, including executive requests and partner commitments absorbed without a label.
- What good looks like: A skeptical reader can pick any item and find, in the document, the reason it outranks the work that did not make the list.
- What bad looks like: A strategy page in one deck and a roadmap in another, with no visible thread between them; items whose only traceable rationale is who asked for them.

### 3. Time horizons are honest
The roadmap distinguishes what is committed from what is directional, and its precision matches its certainty at every distance.
- What to examine: Whether near-term work is specific and owned while later work is progressively coarser, or whether the far columns are as detailed as the near ones (a sign of fiction); whether dates appear at all, and where they do, whether the document says what kind of date each is (committed, targeted, estimated); whether sequencing claims (this before that) are distinguished from timing claims (this in March).
- What good looks like: A reader planning against the Later column knows they are holding a direction, and a reader planning against Now knows they are holding a commitment, because the document's own labels say so.
- What bad looks like: A four-quarter grid with equal detail in every cell; ship dates on items that have not been designed; the word "Q3" doing the work of both a promise and a hope in adjacent rows.

### 4. Dependencies and capacity are visible
The roadmap shows the work it depends on and does not quietly assume more team than exists.
- What to examine: Whether cross-team, platform, vendor, or regulatory dependencies are named on the items that carry them; whether the total near-term load is plausible for the teams named or the document states the capacity it assumes; whether items blocked on the same scarce resource are sequenced as if that were true.
- What good looks like: Nothing on the roadmap is a surprise dependency waiting for its first planning meeting, and an overloaded quarter looks overloaded in the document rather than only in the team's calendar.
- What bad looks like: Three "Now" items all silently requiring the same two engineers; a dependency discovered by reading the org chart rather than the roadmap.

### 5. What is not on it is clear
The document lets a reader answer "are we doing X?" for the plausible Xes, including the ones recently cut or repeatedly requested.
- What to examine: Whether exclusions are stated anywhere: a not-now list, a considered-and-deferred note, or item rationales that name the road not taken. Whether the roadmap's audience (sales, support, executives) could each find the answer to the question they will actually ask it. Whether the absence of a popular item is legible as a decision rather than an oversight.
- What good looks like: The three most likely "why isn't X on here" questions are answered inside the document, so they do not have to be answered in meetings all quarter.
- What bad looks like: A roadmap whose omissions are only discoverable by asking its author; a big customer request absent with no trace, so every reader assumes their own answer.

### 6. It is current, dated, and owned
A reader can tell when this roadmap was true, who keeps it true, and what changed since the last version.
- What to examine: Whether the document carries a date or version, an owner's name, and a review cadence; whether changes since the previous sharing are visible or at least summarized (items moved, cut, or added) rather than silently edited in place; whether the roadmap the reviewer was given matches the one the team is actually working from, as far as the document itself can show.
- What good looks like: Two readers holding printouts from different months can tell which is newer and what changed between them.
- What bad looks like: An undated slide exported into every deck in the company; a roadmap that changed under its audience with no record that it changed.

## Scoring

This rubric gives no numeric score. Each criterion receives one verdict:

- **Holds**: the roadmap meets this criterion; people can plan on it in this respect.
- **Needs work**: the criterion is attempted but a specific gap undermines it. The finding names the gap and what would repair it.
- **Missing**: the roadmap makes no attempt at this criterion (no strategy named anywhere, no exclusions of any kind), or the attempt is so thin it cannot be planned on.

Overall reliance verdict, stated once at the top, in exactly one of these forms:

- **Can be planned against**: no criterion below Holds except at most one Needs work.
- **Plan against it with the noted gaps**: any other combination short of the line below; the gaps travel with the document to every audience it is shown to.
- **Do not share this yet**: any criterion Missing on Organized by outcomes, not outputs or Time horizons are honest. In this state the document will be read as a commitment list however its author describes it, and the misunderstanding will be the document's fault, not the reader's.

## Output format

Return the review in this structure, in Markdown:

1. **Reliance verdict: [Can be planned against / Plan against it with the noted gaps / Do not share this yet]**, with one sentence of reason, and a line stating whether the strategy the roadmap serves was available to the review.
2. One section per criterion, in the order above, with its verdict and findings tied to specific items, groupings, or labels on the roadmap.
3. A closing section, **Fixes before this is shared**, in priority order: honesty of horizons first, then outcome framing and traceability, then upkeep.

Example of a finding at the standard this rubric expects:
- Acceptable: "Needs work: the Later column names fourteen features with the same specificity as the Now column, including 'AI summaries' with a ship month, though no design work exists for it yet. Read by sales, this is a commitment. The repair is to restate Later items as outcomes ('shorten the weekly reporting task') and drop dates beyond the next quarter."
- Not acceptable: "The roadmap feels more like a feature list." (It names no items, no gap, and no repair.)

## Honesty rules

- Review the document, not the strategy and not the team. Whether the reviewer would have chosen these items is outside the review; whether the document states its choices honestly is the whole of it.
- Do not treat a format as compliance. A board with Now, Next, and Later columns whose Later column is dated feature promises has the vocabulary of an outcome roadmap and the substance of a release plan, and the review judges the substance.
- Do not soften a Missing on time horizons because the team "knows what the dates mean." The document will be read by people who were never told, and the review judges the reading they will give it.
- Where the strategy was not supplied, judge traceability only as far as the document itself goes, and say once, plainly, that items may trace to a strategy the review could not see. Do not mark orphans as proven orphans when the evidence for their parentage was never provided.
- Resist inventing capacity judgments the input cannot support: flag an implausible load as a question the document leaves open unless the team size is stated in the input itself.

## Sources

The criteria and verdicts in this rubric are the author's own, written for ProductRubric from product management practice. They draw on the published outcome-roadmap tradition, in particular the Now Next Later framing popularized by Janna Bastow at ProdPad, which the roadmap shapes this rubric accepts include, but they adapt no single published framework, and no source's text or template is reproduced.
