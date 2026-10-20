---
name: Inclusive Design Audit
category: product-design
version: 1.0
summary: Audits a screen or flow against five inclusive design principles for cultural fit, checking who the design includes and who it unintentionally leaves out.
when_to_use: An inclusion review of a screen or flow: representation, cultural fit, access, language, and user control, judged from what is visible in the design.
inputs: A screenshot of the screen or flow, or a description that names the visible elements, imagery, and text.
scale: 0-2 per principle; overall 0-10
level: standard
author: David Nguyen
author_url: https://davidnguyen.com/
source_author: David Nguyen
source_title: "The Missing Layer in Inclusive Design: 5 Principles for Cultural Fit"
source_url: https://usercentric.beehiiv.com/p/the-missing-layer-in-inclusive-design-5-principles-for-cultural-fit
---

## Purpose

Use this rubric to audit one screen or one flow against five inclusive design principles. For each principle it reports a score, a status, and a finding for every checklist item, so the review shows exactly which checks passed, which failed, and why.

The audit is about cultural respect and unintentional exclusion: who is represented, whose norms the design assumes, and who holds power inside the flow. It is not a technical accessibility review. Contrast, focus order, touch targets, and the rest of WCAG conformance belong to the Accessibility Review rubric, not this one.

If the input shows no analyzable interface elements (no text, imagery, controls, or content), say so and stop. Do not audit an empty or unrelated image.

## Criteria

### 1. Representation & Bias
Make sure visuals and symbols show a wide range of people instead of defaulting to one narrow look or pushing stereotypes.
- What to examine:
  - Avatars show variety in skin tone, age, body type
  - Icons and illustrations avoid gender and role stereotypes
  - Default personas include diverse backgrounds
  - Diversity feels authentic, not tokenistic
- What good looks like: People in the design vary the way real users vary, defaults are not one narrow look repeated, and no group appears only in a stereotyped role.
- What bad looks like: A single default look for every person, stereotyped pairings of people and roles, or one visibly different person added as decoration.

### 2. Cultural Sensitivity
Pay attention to how symbols, colors, and layouts carry different meanings across cultures.
- What to examine:
  - Symbols and emojis checked for cultural meanings
  - Colors selected with regional awareness
  - Forms and inputs support global names, dates, and families
  - Locale content (currency, units) considered
- What good looks like: Symbols and colors are safe choices across the cultures the product serves, and names, dates, addresses, and units are handled the way the user's locale handles them.
- What bad looks like: Gestures, icons, or colors with a negative meaning somewhere the product ships; name fields that assume one name order or one name length; dates, currency, or units hard-coded to one country.

### 3. Fair Access
Do not build assuming everyone has fast internet, new hardware, big screens, or perfect English.
- What to examine:
  - Assets compressed, with low-data fallbacks
  - No assumption of fast internet or high-end hardware
  - Language and input alternatives provided
  - Mobile and small-screen layouts supported
- What good looks like: The design holds up on a small screen, a slow connection, and an older device, and there is a workable alternative when the rich version or the primary language does not fit the user.
- What bad looks like: Heavy media with no fallback, layouts that only work on large screens, and a single language or input method treated as universal.

### 4. Inclusive Messaging
Write copy, labels, and instructions that do not exclude people through language, assumptions, or ableist terms.
- What to examine:
  - Ableist terms avoided ("navigate," not "walk")
  - Gendered language removed ("you" and "they")
  - Jargon and idioms replaced with plain language
  - Tone is welcoming and non-exclusionary
- What good looks like: Any reader can follow the text on the first read, nobody is addressed through an assumption about their body, gender, or background, and the tone invites rather than gatekeeps.
- What bad looks like: Ableist or gendered wording, idioms that only land in one culture, insider jargon, or a tone that talks down to the reader.

### 5. Power Dynamics
Build flows and choices that give users real control instead of manipulating them or hiding important options.
- What to examine:
  - "No" and opt-out options visible and equal to "Yes"
  - Undo and cancel actions easy and prominent
  - No coercive nudges toward paid features
  - Consent and privacy choices straightforward
- What good looks like: Accepting and declining carry the same visual weight, leaving is as easy as joining, and consent is a real choice the user can understand and reverse.
- What bad looks like: A bright "Yes" against a hidden or shamed "No," exits buried or missing, pre-checked consent, and pressure toward paid options dressed up as guidance.

## Scoring

Score each principle from 0 to 2, based on how many of its four checklist items are satisfied:

- 2 (Fully Met): Most to all checklist items satisfied.
- 1 (Partially Met): Some checklist items satisfied.
- 0 (Major Issues): Few to none satisfied.

Not applicable: some principles cannot be judged from a given screen. Decide this before scoring, using these rules:

- Representation & Bias: mark N/A if there are no avatars, people, persona imagery, or illustrations of humans.
- Cultural Sensitivity: mark N/A if there are no symbols, emojis, form inputs, or culturally significant colors.
- Fair Access: mark N/A if this is a static component or screen with no performance considerations visible.
- Inclusive Messaging: mark N/A if there is no text content, labels, or copy present.
- Power Dynamics: mark N/A if there are no user choices, opt-ins, consent flows, or action buttons present.

A principle marked N/A gets no score and no checklist evaluation. Give the reason it does not apply, in one line.

Overall score: add the scores of the applicable principles, divide by the highest total they could have reached (the number of applicable principles times 2), and convert the result to a whole number from 0 to 10. Report the result with its band:

- 8 to 10: Strong
- 5 to 7: Good foundation
- 0 to 4: High risk

If every principle is N/A, there is no overall score. Say that the design did not present enough to audit.

## Output format

Return the audit in this structure, in Markdown:

1. **Overall score: N / 10 (Band)**, followed by the count of applicable principles (for example, "4 of 5 principles applied"). If no principle applied, say so instead of giving a score.
2. One block per principle, in the order listed above, each containing:
   - The principle name, its score and status (for example, "Representation & Bias: 1 / 2, Partially Met"), or "Not applicable" with the one-line reason.
   - For each of the four checklist items: the item, whether it is met or not met, and one finding naming the specific element in the design that supports the judgment.
3. A closing section, **Highest impact fixes**, listing the three changes that would most raise the overall score, in priority order.

Finally, end the report with the tracking summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary, for tracking
Rubric: Inclusive Design Audit v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Principles: Scored {n} of 5 · Not judged {n}
Result: {overall score}/10
```

## Honesty rules

- Judge only what is visible in the input. Do not invent people, imagery, copy, or options that are not shown, and do not assume how a flow behaves beyond what the input shows.
- This audit is structured expert judgment about cultural fit. It is not a substitute for research with the communities a design affects, and its scores are not evidence of how any community will receive the design. Do not present them that way.
- Stay inside this rubric's scope: cultural respect and exclusion. Do not score technical accessibility questions such as contrast ratios or focus order, and do not soften a finding here because a design passes a technical standard.
- If the input is a written description rather than an image, say at the top that the audit is based on a description and that scores may change against the actual design.
- Be constructive and specific. A finding the designer cannot act on is not a finding.

## Sources

The five principles in this rubric were first published by the rubric's author in David Nguyen, "The Missing Layer in Inclusive Design: 5 Principles for Cultural Fit," Design Clarity on beehiiv (https://usercentric.beehiiv.com/p/the-missing-layer-in-inclusive-design-5-principles-for-cultural-fit), where the framework is licensed CC BY 4.0. The principles and their checklist items were also the Inclusive Design Audit in DesignSage, and the checklist wording here follows that implementation. The "what good looks like" and "what bad looks like" guidance, the output format, and the honesty rules are original to this rubric.
