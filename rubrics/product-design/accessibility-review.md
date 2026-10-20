---
name: Accessibility Review
category: product-design
version: 1.0
summary: Reviews a screen's design for accessibility problems that are visible in a screenshot or description, judged against criteria derived from WCAG 2.2.
when_to_use: At design time, before a screen is built, to catch the accessibility problems a picture of the design can already show, so they are fixed in the design instead of discovered in the code.
inputs: A screenshot of the screen at a realistic size, or a description that names the text, its colors, and the controls. State the platform (web, iOS, Android, desktop) when it is known, because target and text expectations differ by platform.
scale: No overall score; each finding rated Blocker, Serious, Moderate, or Minor; criteria that cannot be judged from the input are reported as Cannot judge
level: standard
author: David Nguyen
author_url: https://davidnguyen.com/
source_author: W3C
source_title: Web Content Accessibility Guidelines (WCAG) 2.2
source_url: https://www.w3.org/TR/WCAG22/
---

## Purpose

Use this rubric to review a design for accessibility problems while it is still a design. It judges what a screenshot or a careful description can genuinely show: whether text looks readable, whether controls look big enough to use, whether meaning depends on color alone, and whether the people who will struggle with this screen can be identified from the picture.

Read the limits before the criteria, because they are part of this rubric's job. A picture cannot prove accessibility. Keyboard operation, screen reader behavior, focus order in the code, and exact contrast ratios are not visible in a screenshot, and this review does not claim them. A clean result from this rubric means "no problems are visible in the design as presented." It never means the product conforms to WCAG, and it never replaces automated testing against the built product or testing with disabled users. Technical conformance belongs to tools that inspect real code and to audits run against it.

This rubric covers accessibility in the WCAG sense: disability, assistive technology, and the senses and motor control a design assumes. Cultural inclusion, representation, and who a design welcomes are the Inclusive Design Audit's subject, not this rubric's.

If the input shows no interface to review (a photograph with no product UI, a blank frame, a logo alone), say so and stop.

## Criteria

The criteria follow WCAG's four principles, restricted to what a design review can see. Judge each criterion, and give every criterion one of three results: a finding (with a severity), Looks sound (say what supports that), or Cannot judge from this input (say what is missing). Silently skipping a criterion is not allowed.

### 1. Perceivable: text readability
Whether the words on the screen can be read by people with low vision, in poor light, or on a small display.
- What to examine: The contrast relationship between text and its background as it appears (light gray text on white, text placed over photographs or gradients, thin type weights at small sizes); the size of body text relative to headings and to the platform's norms; line length and spacing where they are extreme.
- What good looks like: Body text is in a clearly dark or clearly light tone against its background, at a size comparable to standard body text on the platform, with no text sitting on busy imagery without a scrim or panel behind it.
- What bad looks like: Paragraph text in light gray, placeholder-toned text used for real content, text over a photograph whose brightness varies behind the words, or body text visibly much smaller than the platform's usual reading size.

### 2. Perceivable: meaning never rides on color alone
Whether anything on the screen can only be understood by telling colors apart.
- What to examine: Error states shown only by a red outline; selected and unselected states that differ only in hue; charts, statuses, and required-field markers carried by color; links inside paragraphs identified by color only.
- What good looks like: Every color signal is doubled by something else: an icon, a label, an underline, a shape change, or words that say what the color means.
- What bad looks like: A user who cannot distinguish the colors loses information the screen considers essential, such as which field failed or which item is selected.

### 3. Operable: targets and spacing
Whether the controls can be pressed or clicked by people with limited motor precision.
- What to examine: The apparent size of buttons, icons, list rows, and other targets, and the gaps between adjacent targets, judged against the platform's norms (roughly 44 points on iOS, 48 density-independent pixels on Android, and WCAG's minimum of 24 by 24 CSS pixels with spacing on the web).
- What good looks like: Primary targets are comfortably large, small icon targets are the exception rather than the pattern, and neighboring targets have visible separation.
- What bad looks like: Rows of small icons packed edge to edge, text links a few pixels tall in a dense footer, or two destructive and confirming actions placed close together at small size.

### 4. Operable and understandable: visible state and order
Whether the screen shows where the user is and what is happening, in an order that makes sense.
- What to examine: Whether the current location or step is visibly indicated; whether the reading order implied by the layout matches the order the content needs to be understood in; whether anything flashes, moves, or auto-plays in a way the description or image shows (mark Cannot judge for motion when the input is a still image and says nothing about it).
- What good looks like: The layout's visual order is the content's logical order, the user's current position is shown by more than color, and nothing in the presented design depends on watching movement.
- What bad looks like: Content whose meaning scrambles if read strictly top to bottom, a current-step indicator carried by color alone, or essential information presented as animation with no static equivalent shown.

### 5. Understandable: labels, instructions, and errors
Whether a person meeting this screen for the first time is told what to enter and what went wrong.
- What to examine: Form fields with visible labels that stay visible while typing, against fields identified only by placeholder text; instructions placed before the field they govern; error messages that name the problem and the fix in plain words, positioned at the field they concern.
- What good looks like: Every field keeps its label, instructions arrive before they are needed, and an error reads as a sentence a person can act on ("Enter the date as month, day, year"), not a code or a color.
- What bad looks like: Placeholder-only fields whose purpose disappears on input, errors announced at the top of the screen far from their fields, or error text that says something is invalid without saying what valid looks like.

### 6. Robust: what the picture cannot promise
This criterion exists to be answered honestly, not to be passed.
- What to examine: Nothing on the screen can show whether the built product will expose correct names, roles, and states to assistive technology, keep a sane focus order, or remain usable at 200 percent zoom and in forced-colors modes. When the input is a design, the result for this criterion is Cannot judge, with the explanation stated in the output.
- What good looks like: The review names this gap plainly in its Not covered list, every time, so nobody mistakes a design review for an assistive-technology test.
- What bad looks like: Any sentence in the result that implies the design will work with a screen reader, a keyboard, or zoom because it looks tidy. Looking tidy is not evidence.

## Scoring

There is no overall score and no letter grade. A number would claim a precision this kind of review does not have, and a conformance claim of any kind ("passes AA," "WCAG compliant," a percentage of criteria met) is forbidden in the result.

Each finding carries one severity:

- **Blocker**: As designed, some users cannot complete the screen's job at all. Example: the only way to tell which field failed is its color.
- **Serious**: The job is possible but hard enough that many affected users will fail or abandon it. Example: body text whose contrast appears far below readable norms.
- **Moderate**: Real friction that slows or misleads affected users without stopping them. Example: targets visibly smaller and tighter than the platform's norms in a secondary toolbar.
- **Minor**: A small improvement with limited user impact. Example: one link in a paragraph identified by color plus a weight change that could be stronger.

Not applicable: a criterion with no relevant content on the screen (no form, so no labels to judge) is reported as Cannot judge with the reason "nothing on this screen to judge," which keeps the three-result rule honest without penalizing the design.

## Output format

Return the review in this structure, in Markdown:

1. **Scope line**: what was reviewed (screenshot or description), the platform if known, and one sentence stating that this is a design review, not a conformance audit.
2. **Findings**, grouped by criterion in the order above. Each finding names the element specifically, states its severity, explains the problem in terms of the user it affects, and says what would fix it at the design level.
3. **Looks sound**: the criteria judged sound, with the visible evidence for each, briefly.
4. **Cannot judge from this input**: every criterion that could not be judged, with what would be needed to judge it (the built product, a code-level tool, a motion recording).
5. **Not covered by this review**: a standing list naming the areas a screenshot review never covers: keyboard operation, screen reader names and order, focus behavior, exact contrast ratios, and behavior at high zoom. This list appears in every result, complete.
6. A closing section, **Highest impact fixes**, listing the changes that matter most, in severity order.

## Honesty rules

- Never claim or imply WCAG conformance, compliance, or certification, for the design or for any part of it. The words "passes" and "compliant" do not apply to anything this review produces.
- Never state an exact contrast ratio from an image. Report what is visible ("the caption text appears much lighter than the body text") and direct exact measurement to a code-level tool.
- Distinguish observation from inference. If a target's size is estimated from a screenshot's proportions, say it is estimated.
- Do not soften a Blocker to keep the result pleasant, and do not inflate a Minor to fill the report. An empty findings list is an acceptable result when the design genuinely shows no problems, as long as the Cannot judge and Not covered sections still appear in full.
- When the input is a written description, the result inherits the description's blind spots. Say at the top which of the criteria rest on described rather than seen evidence.
- Nothing in this review substitutes for testing with disabled users or for automated and manual testing of the built product. Recommend those by name in the closing when findings are serious.

## Sources

The criteria in this rubric are derived from the Web Content Accessibility Guidelines (WCAG) 2.2, published by the World Wide Web Consortium (W3C) at https://www.w3.org/TR/WCAG22/, and are restricted to the parts of WCAG a visual design review can judge. All wording here is original to this rubric; WCAG's own text, success criteria definitions, and techniques are not reproduced, and WCAG remains the W3C's work. This rubric is a design aid and is not affiliated with or endorsed by the W3C.
