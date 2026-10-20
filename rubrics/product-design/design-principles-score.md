---
name: Design Principles Score
category: product-design
version: 1.0
summary: Scores a screen or flow against seven product design principles, with findings tied to visible elements.
when_to_use: A general design critique of a screen or flow, when you want a scored review rather than open-ended comments.
inputs: A screenshot of the screen or flow, or a description that names the visible elements and their text.
scale: 1-5 per principle; overall 0-100
level: standard
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to evaluate one screen or one flow against seven product design principles. It returns a score per principle, the specific findings behind each score, and an overall score, so two designs or two versions of a design can be compared on the same basis.

It is not a usability test and says nothing about how real people will behave. It is a structured expert judgment of what is visible in the design itself.

If the input shows no analyzable interface elements (no text, controls, or content), say so and stop. Do not score an empty or unrelated image.

## Criteria

### 1. Deliver Clear Feedback
Keep users informed about what is happening through timely, understandable updates.
- What to examine: Whether every action, state change, and wait in the design produces a visible response: confirmations, progress indicators, success and error states, and changes that show what the system just did.
- What good looks like: Actions visibly register. Loading and processing states are shown rather than implied. Success is confirmed in words or state the user can see, and the current state of the work is always readable from the screen.
- What bad looks like: Buttons that give no response when used, silent failures, spinners with no explanation on long waits, and state changes the user has to guess at.

### 2. Real-World Alignment
Use language, concepts, and conventions that feel natural and familiar from everyday life.
- What to examine: The words, labels, icons, ordering, and metaphors on the screen, judged against what the intended user already knows from the physical world and from common products.
- What good looks like: Labels say what a non-specialist would call the thing. Information appears in the order people expect. Icons and gestures behave the way they do elsewhere in everyday life.
- What bad looks like: Internal jargon, system terms, or engineering vocabulary on user-facing text; ordering that follows the database instead of the task; metaphors that fight the real-world thing they imitate.

### 3. Empower User Control
Give users full agency, with clear ways to explore, undo, override, and navigate freely.
- What to examine: Exits, undo, cancel, back paths, editing after the fact, and whether the design forces a single path or lets the user change direction safely.
- What good looks like: Every consequential action can be undone or corrected. Cancel and back are present and honest. Users can skip, postpone, and revisit without penalty.
- What bad looks like: Dead ends, destructive actions with no undo, forced sequences with no exit, and settings that cannot be changed once chosen.

### 4. Build Consistent Experience
Maintain uniform behavior, terminology, and patterns while honoring platform and cultural norms.
- What to examine: Whether the same words mean the same things throughout, similar controls behave similarly, and the screen follows the conventions of its platform.
- What good looks like: One term per concept, everywhere. Repeated elements look and behave identically. Standard platform patterns are used in their standard places.
- What bad looks like: The same action labeled two ways, controls that look alike but behave differently, or a pattern reinvented where the platform already has one users know.

### 5. Favor Recognition
Make options and information visible or easily retrievable, minimizing what users must remember.
- What to examine: Whether the user can recognize what to do from what is on the screen, or must recall instructions, codes, or earlier steps from memory.
- What good looks like: Choices are shown, not remembered. Recently used and relevant items surface where the decision happens. Help and reference information appear at the point of need.
- What bad looks like: Instructions given once and required later, hidden options behind unlabeled gestures, and fields that demand information the product already showed or already knows.

### 6. Prevent and Recover from Errors
Stop problems before they happen when possible, and make recovery simple and clear when they do.
- What to examine: Constraints, defaults, and confirmations that keep errors from occurring, and the quality of recovery when something goes wrong: message clarity, preserved work, and the path back.
- What good looks like: Invalid input is prevented or caught at the field where it happens. Confirmations guard destructive actions. Error messages say what happened and how to fix it, and the user's work is still there afterward.
- What bad looks like: Errors reported only after submission with no location given, messages written in codes or blame, work lost on failure, and destructive actions one tap from routine ones.

### 7. Balance Minimalism and Support
Focus on essential elements with aesthetic harmony, offering help only when truly needed.
- What to examine: Whether everything on the screen earns its place, whether the essential content leads, and whether help is available without crowding the task.
- What good looks like: The primary action and content are unmistakable. Secondary material is present but quiet. Help exists at the point of need and stays out of the way otherwise.
- What bad looks like: Competing calls to action, decorative elements diluting the task, rarely used options given equal weight with primary ones, or a bare screen that leaves a new user with no guidance at all.

## Scoring

Score each principle from 1 to 5:

- 5 (Excellent): All aspects well implemented, no issues.
- 4 (Good): Largely followed, minor improvements possible.
- 3 (Fair): Partially followed, notable issues to address.
- 2 (Poor): Significant violations, multiple issues.
- 1 (Critical): Not followed, major usability problems.

Not applicable: if a principle cannot be evaluated from the input (for example, no text is visible to judge terminology), score it null, and give exactly one finding of type "na" explaining what information was missing. Do not guess a score.

Overall score: average the numeric principle scores, convert to a percentage of 5, and report a whole number from 0 to 100. Null principles are excluded from the average.

## Output format

Return the evaluation in this structure, in Markdown:

1. **Overall score: NN / 100**, followed by one sentence summarizing the design's main strength and its main problem.
2. One block per principle, in the order listed above, each containing:
   - The principle name and its score (for example, "Deliver Clear Feedback: 4 / 5"), or "Not applicable" for a null score, with the one "na" finding as its explanation.
   - 2 to 4 findings. Label each finding a strength or an issue. Every finding must name a specific element visible in the design and say what about it supports the judgment. Do not write findings that could apply to any design.
3. A closing section, **Highest impact fixes**, listing the three changes that would most improve the overall score, in priority order.

Finally, end the report with the summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary
Rubric: Design Principles Score v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Principles: Scored {n} of 7 · Not judged {n}
Result: {overall score}/100, the average of the scored principles as a percentage
```

## Honesty rules

- Judge only what is visible in the input. Do not invent elements, states, or behaviors that are not shown, and do not assume what happens after a tap or click unless the flow shows it.
- These scores are structured expert judgment against the criteria above. They are not measurements, and they are not evidence of how real users will perform or feel. Do not present them as user data.
- If the input is a written description rather than an image, say at the top that the evaluation is based on a description and that scores may change against the actual design.
- Be constructive and specific. A finding the designer cannot act on is not a finding.

## Sources

The seven principles in this rubric are the Design Sage Principles from DesignSage, an earlier design review tool by the same author. The principle names, descriptions, scoring guide, and output structure were first developed there and are adapted here into the ProductRubric format. The "what good looks like" and "what bad looks like" guidance under each principle is original to this rubric.
