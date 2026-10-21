# Worked example: Usability Heuristics Review

**Fixture:** `fixtures/nexus-homepage/homepage-a-above-fold.png` (the Nexus marketing homepage, Option A, light theme, above the fold and the first feature stories; the fixture brief is in the same folder).
**Rubric:** Usability Heuristics Review (`usability-heuristics-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 21, 2026, by an AI assistant running the rubric exactly as written, against the PNG export of the Figma frame.

---

**4 problems: 3 minor, 1 cosmetic.** Three heuristics are reported as no surface to judge (User Control and Freedom, Error Prevention, and Help Users Recognize, Diagnose, and Recover from Errors): the submission is a static marketing page with no flows, no inputs, and no error states. The low problem count reflects how few interactive surfaces a page like this has. It is not evidence that the product itself is usable; the surfaces where most of the heuristics bite, signup and the app, were not part of this submission.

### 1. Visibility of System Status

- **Minor:** The four labels under the hero product visual (Tasks, Docs, Sprints, Roadmaps) are styled like selectable tabs, evenly spaced in the accent color directly beneath the visual they seem to control, but none of them is shown selected, and the visual above them, a dark dashboard that does not visibly correspond to any one of the four, gives no indication of which state the showcase is in. A visitor cannot tell whether these switch the visual or are captions for it, and if they do switch it, cannot tell where they are. Whether clicking one changes the visual was not shown in the submission; the affordance and its missing state are what is visible. Fix: show a selected state on the active label, or restyle the four as plain captions if they do not switch anything.
- Looks sound elsewhere: the primary navigation shows the page's destinations in full words, and the depicted sprint visual carries a visible "Active cycle" status pill rather than leaving the state implied.

### 2. Match Between the System and the Real World

**Looks sound.** The page speaks in the visitor's task words throughout: tasks, docs, sprints, and roadmaps in the subheading, "Visual Kanban Boards" and "Automated Sprints" as feature names, and conventional navigation labels (Features, Solutions, Pricing, Enterprise, Changelog). The product vocabulary it does use, sprints, rollover, velocity, is the working vocabulary of the product teams the page addresses, not system terminology leaking out.

### 3. User Control and Freedom

**No surface to judge.** The submission is a single static page with no dialogs, wizards, modes, or actions that change or delete anything, so there is no state to exit and nothing to undo. Judging this heuristic needs the signup flow or the app screens, where entries can be made and mistakes can happen.

### 4. Consistency and Standards

**Looks sound.** One accent color carries every interactive element (navigation call to action, hero buttons, links, and the depicted product's highlights). The primary call to action keeps the same words, "Get Started Free," and the same treatment in the navigation and the hero. Product areas are named identically in the navigation, the subheading, and the showcase labels, one word per concept throughout.

### 5. Error Prevention

**No surface to judge.** The page contains no form fields or other input, so there is nothing for the design to constrain, pre-fill, or confirm. The one consequential action offered, starting a free account, happens behind the call to action and outside this submission. Judging prevention needs the signup form, where invalid input becomes possible.

### 6. Recognition Rather than Recall

- **Cosmetic:** The small glyph at the top right of the hero showcase card, a cluster of connected nodes, has no label and no evident referent. Everything else on the page can be acted on by recognition; this one element asks the visitor to guess what it means or what it does. Fix: label it, tie it visibly to the showcase it sits on, or remove it.
- Looks sound elsewhere: options are visible rather than remembered. The navigation lists every destination in words, and each feature section pairs its claim with a picture of the thing itself, the Kanban board, the sprint chart, and the roadmap are shown rather than described from memory.

### 7. Flexibility and Efficiency of Use

**Looks sound.** The page offers two distinct paths matched to two kinds of visitor, "Get Started Free" for the self-serve visitor and "Book a Demo" for the evaluator, side by side in the hero and repeated in the navigation, so neither audience is forced through the other's route. Accelerators and shortcuts belong to the product's own interface and are not part of this submission.

### 8. Aesthetic and Minimalist Design

- **Minor:** The hero's product visual is a photograph of a monitor on a desk, inside a browser window mock, inside the showcase card: three nested frames of decoration around product interface text that is far too small to read. The largest element on the page therefore carries the least usable information, and a first-time visitor finishes the hero knowing the product has a dashboard but unable to see anything it shows. This is the main task of a marketing hero, which is why it is rated minor rather than cosmetic. Fix: show the product interface itself at readable size, the way the feature sections below already do with their board, chart, and roadmap visuals.
- Looks sound elsewhere: the sections below the hero are spacious and single-minded, one feature, one visual, one short paragraph each, with nothing competing at the primary content's weight.

### 9. Help Users Recognize, Diagnose, and Recover from Errors

**No surface to judge.** No errors can occur on a page with no input and no actions that can fail, and no error messages appear in the submission. Judging this heuristic needs a flow where something can go wrong, such as signup or the depicted product's own screens.

### 10. Help and Documentation

- **Minor:** Nothing in the submitted page offers a route to help or documentation. The primary navigation (Features, Solutions, Pricing, Enterprise, Changelog) has no Docs or Support entry, and no help affordance appears anywhere in the sections shown. An evaluator who gets stuck, or who wants to read how the product actually works before committing, has no task-shaped help to turn to; the only learning path offered is booking a demo. The problem is in every page's navigation, so it persists for every visitor who needs it. Fix: add a Docs or Support link to the primary navigation.

## Highest impact fixes

1. Visibility of System Status: give the hero showcase's four labels a visible selected state, or restyle them as captions if they do not switch the visual.
2. Aesthetic and Minimalist Design: replace the monitor photograph in the hero with the product interface at readable size.
3. Help and Documentation: add a Docs or Support link to the primary navigation.
4. Recognition Rather than Recall: label or remove the unlabeled glyph on the hero showcase card.

```
Rubric summary
Rubric: Usability Heuristics Review v1.0 · Date: 2026-10-21 · Artifact: Nexus marketing homepage, Option A above the fold (homepage-a-above-fold.png)
Heuristics: Judged 7 of 10 · No surface to judge 3
Result: 4 problems found (3 minor, 1 cosmetic); no overall score, per the rubric
```
