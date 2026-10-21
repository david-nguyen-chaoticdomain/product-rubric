---
name: Usability Heuristics Review
category: product-design
version: 1.0
summary: Evaluates a screen or flow against the ten usability heuristics published by Jakob Nielsen, reporting problems with severity ratings.
when_to_use: A structured usability inspection of a screen or flow by its design alone, the classic heuristic evaluation, when no users are available yet or before testing with users is scheduled.
inputs: Screenshots of the screen or the flow's screens in order, or a description detailed enough to name the states, messages, and actions. State the product's context (what it is, who uses it) when the screens do not make it obvious.
scale: No overall score; every problem rated 0-4 on the severity scale defined in the Scoring section
level: standard
author: David Nguyen
author_url: https://davidnguyen.com/
source_author: Jakob Nielsen
source_title: 10 Usability Heuristics for User Interface Design
source_url: https://www.nngroup.com/articles/ten-usability-heuristics/
---

## Purpose

Use this rubric to run a heuristic evaluation: a structured inspection of a design against ten long-established usability principles, called heuristics. For each heuristic, the review looks for the places the design breaks the principle, describes each problem where it occurs, and rates how severe it is. The result reads the way heuristic evaluations have been reported for decades: a list of usability problems, organized by principle, ordered by how much they matter.

A heuristic evaluation is an inspection, not a test. It finds problems a trained eye can see in the design itself. It does not find every problem real users will hit, and a clean result does not mean users will succeed; it means no violations of these ten principles are visible in what was submitted. Testing with users remains the way to learn what users actually do.

If the input shows no interface to evaluate, say so and stop. If the input is a single static screen, evaluate it as one, and mark the heuristics that need a flow or system behavior (error recovery, help) by what the screen itself shows, using the not-applicable rule rather than guessing.

## Criteria

The ten heuristics are the criteria. Their names below are Nielsen's. Everything else in each block, what to examine and what good and bad look like, is written for this rubric. Judge each heuristic and give it a result: problems found (each listed and rated), Looks sound (with the visible evidence), or No surface to judge (using the rule in the Scoring section).

### 1. Visibility of System Status
The design keeps users informed about what is happening.
- What to examine: Loading and progress states; confirmation that an action took effect; where the user is in a process; whether the current state of the system (saved, sending, offline, selected) is shown at the moment the user needs it.
- What good looks like: Every action gets a timely, visible response, and the user never has to wonder whether the system heard them or what it is doing now.
- What bad looks like: A button that gives no response when pressed; a save with no saved state; a multi-step process with no indication of position or progress.

### 2. Match Between the System and the Real World
The design speaks the users' language and follows real-world conventions.
- What to examine: Words, phrases, and concepts for insider jargon; icons and metaphors for whether they match what they represent; the order of information and steps for whether it follows the order users expect from the world outside the product.
- What good looks like: A first-time user understands the screen using only the knowledge they brought with them.
- What bad looks like: System terms presented as user concepts (database records, SKUs, session tokens); an icon whose meaning only the product team knows.

### 3. User Control and Freedom
Users can get out of states and undo actions without a struggle.
- What to examine: Exits from dialogs, flows, and modes; undo for actions that change or delete things; cancel paths that do not punish the user by discarding everything they entered.
- What good looks like: Every state the user can enter has a clearly marked way out, and mistakes are reversible at the point where they happen.
- What bad looks like: A modal with no exit; a deletion with no undo and no warning; a wizard that forces a full restart to change one early answer.

### 4. Consistency and Standards
Things that mean the same act the same, and the design follows the conventions of its platform.
- What to examine: Terminology for the same concept across screens; the placement and behavior of standard elements (navigation, search, settings); whether the design breaks a platform convention its users will arrive already knowing.
- What good looks like: One word per concept, one behavior per control, and platform conventions honored unless the design visibly gains from breaking one.
- What bad looks like: Two labels for one thing in a single flow; a gesture or placement that means the opposite of what the platform taught the user.

### 5. Error Prevention
The design stops problems before they happen.
- What to examine: Constraints that make invalid input impossible or hard (pickers instead of free text where the value is known); confirmations reserved for genuinely destructive or irreversible actions; defaults and examples that steer input toward valid values.
- What good looks like: The easy path is the correct path, and the design's structure quietly removes whole classes of error.
- What bad looks like: Free-text fields for dates, amounts, or codes with no guidance; a destructive action one careless tap away, treated the same as a harmless one.

### 6. Recognition Rather than Recall
Users can see their options instead of having to remember them.
- What to examine: Whether information needed at a step is visible at that step (or one glance away); whether instructions must be memorized across screens; whether recent items, current selections, and prior entries stay visible when they matter.
- What good looks like: The screen carries the memory load, and the user can act by recognizing what is in front of them.
- What bad looks like: A code shown on one screen that must be typed on the next; options described in help text but invisible in the interface where the choice is made.

### 7. Flexibility and Efficiency of Use
The design serves first-time users and experts without forcing either into the other's pace.
- What to examine: Shortcuts, defaults, and recent or frequent actions for returning users; whether personalization or bulk actions exist where the task is repetitive; whether the accelerators stay invisible to novices rather than cluttering their path.
- What good looks like: A returning user can move measurably faster than a first-time user, and the first-time path is not slowed by the expert features.
- What bad looks like: A repetitive task with no bulk path and no remembered defaults; expert features presented as primary interface to people meeting the product for the first time.

### 8. Aesthetic and Minimalist Design
Screens contain what is needed, in the order it is needed, and no more.
- What to examine: Every element for whether it earns its place against the screen's job; the ratio of signal to decoration; whether rarely needed information competes at the same weight as the primary content.
- What good looks like: Removing anything from the screen would remove information or function the user needs at that moment.
- What bad looks like: Competing announcements, upsells, and decoration at the same visual weight as the task; paragraphs of explanation for what a clearer design would make obvious.

### 9. Help Users Recognize, Diagnose, and Recover from Errors
When errors happen, the design explains them plainly and points at the way out.
- What to examine: Error messages for plain language (no codes standing alone), for naming the exact problem, for appearing at the place the problem is, and for suggesting the fix, including preserving what the user already entered.
- What good looks like: The user learns what went wrong, where, and what to do next, in one reading, without losing their work.
- What bad looks like: "Invalid input" with no location or cause; an error that clears the form; a code the user is expected to report or look up.

### 10. Help and Documentation
Help exists, is findable at the moment of need, and answers in tasks rather than in system structure.
- What to examine: Whether help is reachable from where users get stuck; whether it is organized around what users are trying to do; whether it is short enough to be used mid-task. On a design with no help surfaces in scope, judge what the screens show about getting help, or use the not-applicable rule.
- What good looks like: A stuck user can find task-shaped help in one obvious move, and the answers are concrete steps.
- What bad looks like: Help that mirrors the org chart or the database; a help link that exists in marketing pages but not inside the product where the confusion happens.

## Scoring

This rubric gives no overall score and no grade. In the tradition of the method, its output is the problem list, and the severity ratings carry the priorities.

Rate every problem on this scale, which follows Nielsen's published severity scale:

- **0, Not a problem**: noted behavior that does not affect usability. Rarely used; most entries below start at 1.
- **1, Cosmetic**: a surface flaw. Fix it if time is available; users are not slowed by it.
- **2, Minor**: users are slowed or mildly frustrated, and find their way through. Fix at normal priority.
- **3, Major**: users are seriously impeded, blocked for a time, or driven to a wrong outcome. Fix at high priority.
- **4, Catastrophe**: users cannot complete the task, or complete it wrongly without knowing. Fix before release.

Judge severity from three things together: how often the problem will be hit, how hard it hits when it is, and whether it persists (a one-time confusion the design then teaches away is lighter than one that recurs every use). When a rating could reasonably be two values, choose the higher one when the problem sits on the product's main task, and say in the finding that it was a close call.

Not applicable: a heuristic with no surface in the submission to judge (for example, Help and Documentation on a single screen with no help in scope) is reported as **No surface to judge**, with one line naming what would be needed to judge it. Do not convert an absent surface into a problem, and do not skip the heuristic silently.

## Output format

Return the review in this structure, in Markdown:

1. **Summary line**: how many problems were found, counted by severity (for example, "9 problems: 1 catastrophe, 3 major, 4 minor, 1 cosmetic"), and which heuristics were reported as no surface to judge.
2. One section per heuristic, in the order above, showing one of: its problems, each with the element or state where the problem occurs, the problem stated concretely, its severity rating, and what would fix it; or **Looks sound**, with the visible evidence; or **No surface to judge**, with the reason.
3. A closing section, **Highest impact fixes**, listing the problems to fix first, in severity order, catastrophe first, each in one line with its heuristic named.

Example of a finding at the standard this rubric expects:
- Acceptable: "Major (User Control and Freedom): the delete confirmation for a project offers only Delete and Cancel; after confirming, there is no undo and the project list shows no trace the project existed, so one mistaken tap destroys work permanently."
- Not acceptable: "Navigation is confusing and inconsistent." (It names no screen, no element, and nothing to fix.)

## Honesty rules

- Report violations you can point to. Every problem names the screen, element, or state where it occurs; a general impression about the product is not a finding.
- Do not invent system behavior. If the submission does not show what happens after an action, judge the affordance that is visible and say the behavior itself was not shown, using the closest applicable rule rather than assuming feedback exists.
- Severity is a judgment about users, not a measure of how much the flaw bothers the reviewer. Ground each rating in frequency, impact, and persistence as the Scoring section defines, and do not inflate ratings to make the report feel important.
- A heuristic evaluation does not replace usability testing, and this report must not claim the design is usable because few problems were found. Say so in the summary when the problem count is low.
- Keep this rubric's text and the source apart: the heuristics and the severity scale are Nielsen's, credited in the Sources; the judgments about this design are the reviewer's own, written for this evaluation.

## Sources

The ten heuristics used as criteria in this rubric are the usability heuristics published by Jakob Nielsen in "10 Usability Heuristics for User Interface Design," Nielsen Norman Group, https://www.nngroup.com/articles/ten-usability-heuristics/. They were originally developed by Jakob Nielsen and Rolf Molich in 1990 and refined by Nielsen in 1994. NN/g permits the heuristics to be used in one's own work with credit to Jakob Nielsen and a link to that page, which this section provides. The severity scale in the Scoring section likewise follows Nielsen's published scale. All other text in this rubric, including the examination guidance, the examples, and the reporting format, is original ProductRubric material, written by the rubric's author. This rubric is not affiliated with or endorsed by Jakob Nielsen or Nielsen Norman Group.
