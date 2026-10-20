---
name: Design Quality
category: product-design
version: 1.0
summary: Reviews a design submission, a multi-frame board with its rationale, against seven dimensions of professional design quality, the way a design leader would in a critique.
when_to_use: Before a design critique, a handoff, or a portfolio review, when the question is not only whether the screens work but whether the work itself is good: well aimed, well grounded, well built, and well explained.
inputs: The design as a multi-frame board (a board overview plus the frames in reading order), with whatever rationale the designer has written on the board or alongside it. A single screen can be submitted, but the dimensions that judge intent and evidence will usually be unjudgeable from a screen alone.
scale: 1-5 per dimension; overall 0-100 across the dimensions that could be judged
level: deep
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to review design work at the altitude of a design critique. The other rubrics in this library judge a screen as its users will meet it. This one judges the work as a design leader meets it in a review: Was the right problem chosen? Is the work grounded in anything real? Does it hold together as a system? Is the execution finished? And does the submission explain itself, so its decisions can be examined rather than guessed at?

The submission is the unit of review. In practice that is a multi-frame board, the way designers lay out work in a tool like Figma: frames in reading order that together show a journey, with rationale written on the board as annotations or sent alongside it. Judge what was submitted. A dimension the submission does not give you the material to judge is not a low score; it is not judged, and the report says what was missing.

This rubric states one practitioner's quality bar, and it says so on purpose. Quality bars are partly a matter of team values, and a team adopting this rubric should edit the dimensions and the standards to their own bar rather than treating this one as universal. What should not change in the editing is the discipline: every dimension judged from evidence in the submission, every unjudged dimension named, and no overall score built on too little.

If the submission contains no design work at all (an empty board, a mood board with no product design in it, a document about a design rather than the design), say so and stop.

## Context requests

Before judging, check the submission for the context below. If the board is a conversation and an item is missing, ask for it, in one grouped round, before scoring. If the user cannot or does not want to supply it, proceed and let the affected dimensions be not judged.

Ask for:

- The goal of the piece, in one or two sentences: what should change for users or for the business when this ships. (Needed for Right problem.)
- Who the design is for, and anything known about them that shaped decisions. (Needed for Right problem and Grounded in evidence.)
- The constraints the work was done under, when they are not visible on the board: platform rules, technical limits, deadlines that forced trade-offs. (Needed for fairness in every dimension.)
- Whether there is a written brief, research notes, or rationale that was not included in the submission. Offer to judge from it if the user pastes it. (Needed for Explains itself.)

Context supplied in conversation is judged normally. Evidence is different: a state, frame, or rationale that exists only because the user describes it in conversation is judged as described, not shown, and the report flags it as such.

## Criteria

Score each dimension 1 to 5 using the Scoring section. Ground every score in things visible in the submission: quote the frame, the annotation, or the decision you are judging. A score with no cited evidence is not a judgment; redo it.

### 1. Right problem
The work aims at a problem worth solving, framed tightly enough to design against.
- What to examine: The problem or goal as stated on the board or in the brief; whether the chosen scope matches it (a flow redesigned when the problem was trust, a screen polished when the problem was comprehension); whether the framing names the user and the situation, or only a business want.
- What good looks like: The stated problem is specific, the design's scope answers it directly, and a reviewer can trace the major design decisions back to it.
- What bad looks like: No problem is stated anywhere; or the stated problem and the designed solution are about different things; or the scope is a tour of everything adjacent, with the actual problem getting one frame among many.

### 2. Grounded in evidence
Decisions trace to something real: research, data, or assumptions the designer knows are assumptions.
- What to examine: Any research findings, analytics, support themes, or prior test results referenced on the board; how specific they are (a named study or number versus "users want"); whether the submission distinguishes what is known from what is guessed.
- What good looks like: The load-bearing decisions cite their basis, the evidence is about these users and this problem, and guesses are labeled as guesses with a way they could be checked.
- What bad looks like: Assertions about users with nothing under them, evidence that is really competitor screenshots described as research, or a rationale that treats every preference of the designer as a user need.

### 3. Holds together as a system
The work reuses the product's patterns, covers its states, and scales past the happy path.
- What to examine: Across the board's frames: whether the same components and terminology recur instead of being reinvented per frame; whether empty, loading, error, and overflow states exist as frames; whether the design survives realistic content (long names, many items, nothing yet) or only the tidy sample data it is shown with.
- What good looks like: One pattern per job throughout, the unglamorous states designed with the same care as the main path, and content extremes visibly considered.
- What bad looks like: A frame that quietly invents its own button, list, or vocabulary; a journey with no error or empty state anywhere in it; layouts that only work at exactly the content lengths shown.

### 4. Flow quality
The path through the task is direct, legible, and forgiving.
- What to examine: The journey across frames in reading order: the number of steps against what the task needs; whether each step asks only for what that moment requires; where a user can go wrong, and whether the design shows the way back (undo, cancel, edit, recover) in the frames themselves.
- What good looks like: No step exists without a reason, the next action is always apparent, and mistakes are cheap because recovery is designed, not implied.
- What bad looks like: Detours and confirmations that protect the system instead of the user; information demanded early that is only needed late, if at all; a wrong turn with no visible way back.

### 5. Execution and polish
The craft of the frames themselves: hierarchy, typography, spacing, and finish.
- What to examine: Whether each frame has one clear order of reading; whether type sizes, weights, and spacing follow a visible discipline or drift frame to frame; alignment and detail at the level a user feels as care or carelessness, including the smallest frames on the board.
- What good looks like: A consistent visual system across the whole board, hierarchy that survives a squint, and no frame that looks like it escaped the pass the others got.
- What bad looks like: Spacing and type decisions that change between adjacent frames, competing focal points inside a frame, and annotation or placeholder sloppiness in the submission itself.

### 6. Words do their job
The text inside the design is clear, specific, and in one voice.
- What to examine: Headlines, labels, buttons, and error text as they appear in the frames: whether they say the concrete thing; whether the same concept keeps the same name across the whole journey; whether errors and empty states speak helpfully or in system language. (The Copy Review rubric owns this dimension in depth; here it is judged at the level a quality bar needs.)
- What good looks like: A reader can follow the journey by its words alone, terms never change mid-flow, and the voice is steady from the first frame to the error state.
- What bad looks like: Placeholder-grade text left in presented frames, three names for one thing across the journey, or copy that was clearly never read as writing.

### 7. Explains itself
The submission makes its reasoning examinable: intentions, trade-offs, and how success will be known.
- What to examine: The annotations, brief, or notes in the submission: whether the designer states what they were trying to achieve, names the alternatives they rejected and the trade-offs they accepted, and defines what success looks like in terms someone could later check.
- What good looks like: A reviewer can disagree with a decision because the decision and its reasoning are visible; open questions are listed as open questions.
- What bad looks like: A board of bare frames with no written thinking anywhere, conclusions announced without the reasoning under them, or a rationale that describes what the design is instead of why it is that way.

## Scoring

Score each dimension from 1 to 5:

- **5, Exemplary**: the dimension could be shown to another team as how this is done.
- **4, Strong**: sound throughout, with at most a small gap that does not weaken the work.
- **3, Adequate**: the basics are present, but the dimension has a real weakness a reviewer would name.
- **2, Weak**: the dimension was largely not attended to, and the work suffers for it visibly.
- **1, Absent**: the dimension is missing or contradicted by the submission (a rationale that argues against the design it presents).

Not applicable, stated as **Not judged**: when the submission does not contain the material a dimension judges (most often Right problem, Grounded in evidence, or Explains itself when no goal, evidence, or rationale was submitted and none was supplied through the context requests), give no score for that dimension. Attach exactly one finding of type "na" naming what was missing and what would have made the dimension judgeable.

For each scored dimension, give 2 to 4 findings, typed as strength or issue, each tied to a specific frame, annotation, or decision in the submission.

Overall score: average the scores of the judged dimensions, divide by 5, and convert to a whole number from 0 to 100. Dimensions that were not judged are excluded, and the report states how many of the seven were judged. If fewer than four dimensions could be judged, give no overall score; a number built on less than half the bar would claim a basis the review does not have. State what additional material would make an overall score possible.

## Output format

Return the review in this structure, in Markdown:

1. **Overall score: N / 100** (or "Overall score: not given," with the reason), followed by how many of the seven dimensions were judged.
2. A one-paragraph summary of the work's quality as a reviewer would open a critique: its strongest quality, its most consequential weakness.
3. One section per dimension, in the order above, each showing: the dimension name, its score or "Not judged," and its findings, strengths and issues labeled, each tied to the frame or text it judges. For a dimension judged partly from context supplied in conversation, say which context, and flag any evidence that was described rather than shown.
4. A closing section, **Highest impact fixes**, listing the changes that would most raise the quality of the work, in priority order.

Example of a finding at the standard this rubric expects:
- Acceptable: "Issue (Flow quality): the payment frame asks for a billing address before the order total is shown anywhere in the journey, so the step demands commitment before the user has the information the commitment depends on."
- Not acceptable: "The flow could be smoother." (It names no frame, no decision, and nothing a designer could act on.)

Finally, end the report with the tracking summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary, for tracking
Rubric: Design Quality v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Dimensions: Scored {n} of 7 · Not judged {n}
Result: {overall score}/100 across the dimensions that could be judged
```

## Honesty rules

- Judge the submission, not the designer, and not the product's reputation. The same frames from a famous company and from an unknown one get the same scores.
- Never score a dimension from material that is not in the submission or the supplied context. An impressive rationale the designer might have given is not evidence; that is what Not judged is for.
- Distinguish shown from described. Evidence the user described in conversation is reported as described, and a dimension resting on described evidence says so next to its score.
- Do not let the dimensions contaminate each other. Beautiful frames do not raise the evidence score; a sharp rationale does not raise the execution score. Each dimension is scored on its own material.
- Name uncertainty where the board is genuinely ambiguous (frames out of order, an annotation that could be read two ways) rather than resolving it silently in whichever direction suits the score.
- This is a review against one stated quality bar, offered for the team's use. Present scores as structured professional judgment, not measurement, and note in the summary when the team's own bar, if it differs from this rubric's, is the one that should govern.

## Sources

This rubric's dimensions, standards, and scoring discipline were written by the rubric's author for ProductRubric and are original to this rubric. The quality bar it states is the author's own, offered as a starting point for teams to adapt.
