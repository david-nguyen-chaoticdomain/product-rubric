---
name: Copy Review
category: product-design
version: 1.0
summary: Reviews every piece of text on a screen and returns a revision for each one that fits the same space and does the same job better.
when_to_use: Before design handoff, when a screen's words need a dedicated pass: headlines, buttons, labels, empty states, and error text that were written in the layout and never reviewed as writing.
inputs: A screenshot of the screen, or the screen's text supplied directly (a copy list, a transcript of the design, or the strings from the product). If text is supplied directly, say so in the result.
scale: none
level: standard
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to review the words on one screen as writing. It goes through every distinct piece of text the user will read, judges each one against the criteria below, and returns a revision that fits the same space, keeps the same job, and reads better.

This rubric revises interface text: headlines, subheads, buttons, links, labels, helper text, empty states, and error messages. It is not for long-form content such as articles, help center pages, or marketing pages, and it is not a naming exercise. It also does not settle legal, pricing, or product claims; if the current text states a fact, the revision keeps that fact or flags it, and never quietly changes it.

If the input contains no readable text (a blank frame, an image with no words, a wireframe with placeholder blocks), say so and stop. Do not invent text to review.

## Criteria

Judge every text element against all five criteria. A revision must satisfy the criteria without breaking the ones above it in this list: a clearer label that no longer fits its button is not an improvement.

### 1. Fit the space
The revision must work in the slot the original occupies.
- What to examine: The approximate length of the original, and the physical room it has: a button's width, a headline's lines, a label's single line. Count characters when the slot is tight.
- What good looks like: The revision is about the same length as the original, so it drops into the design with no resizing, no truncation, and no new wrapping.
- What bad looks like: The revision only works if the button gets wider, the headline gets a third line, or the layout moves. That is a redesign suggestion, not a copy revision, and it does not belong here unless it is flagged as one.

### 2. Specific and clear
The revision says the actual thing, in words a first-time reader already has.
- What to examine: Whether the original names the object, the action, and the outcome concretely, or leans on vague words (things, stuff, manage, handle, get started), internal jargon, and idioms that a new user or a non-native reader has to decode.
- What good looks like: A reader who has never seen the product can say what will happen if they act, and what they are looking at if they do not.
- What bad looks like: The revision swaps one vague phrase for a fresher vague phrase, or adds precision by adding length the slot cannot hold.

### 3. Action language where it belongs
Elements that ask the user to do something should say the action.
- What to examine: Buttons, links, and instructions. Whether the text starts from the user's action (Save changes, Download the report) or from a system noun or a confirmation (OK, Yes, Submit, Click here).
- What good looks like: The user can predict what happens from the words on the button alone, without the surrounding paragraph. Headlines and labels are exempt from this criterion; they have different jobs, and forcing verbs into them reads as noise.
- What bad looks like: A row of buttons that all say the same generic word while doing different things, or an instruction that describes the system's behavior instead of the user's next step.

### 4. Communicate the value
Where the original promises an outcome, the revision keeps the promise concrete.
- What to examine: Headlines, subheads, and empty states especially. Whether the text tells the user what they get, in terms of their own goal, or only announces that a feature exists.
- What good looks like: The benefit is stated as something the user can picture having: time back, an answer, a finished task. It uses only facts the original text or the screen itself supports.
- What bad looks like: Hype words with nothing under them (powerful, seamless, amazing), or a benefit the product has not stated anywhere in the input. Invented claims fail this criterion outright; see the honesty rules.

### 5. Fit the hierarchy and the context
Each element should sound like its role on the screen, and the set should read as one voice.
- What to examine: Whether the headline carries the main message and the subhead supports it rather than repeating it; whether labels are consistent with sibling labels (same structure, same terms for the same things); whether the tone matches the element's moment, plain for errors, warm for empty states, brief for labels.
- What good looks like: Read top to bottom, the revised text tells the screen's story once, in order, with one term per concept throughout.
- What bad looks like: The headline and subhead say the same thing twice, two labels name the same thing differently, or one element is rewritten in a voice none of its neighbors share.

## Scoring

This rubric has no scores. Do not assign ratings, grades, percentages, or pass and fail marks to the text, to individual elements, or to the screen as a whole. The deliverable is the set of revisions and the reasoning behind each one.

Not applicable: an element that already satisfies the criteria is returned with its current text repeated as the suggestion and a rationale that says it should be kept as it is, and why. Do not manufacture a change to an element that does not need one; a review that changes everything teaches the reader to trust none of it.

## Output format

Return the review in this structure, in Markdown:

1. An opening line stating how many distinct text elements were reviewed, and whether the source was a screenshot or supplied text.
2. One block per text element, in the screen's reading order (top to bottom, left to right), each with:
   - **Type**: headline, button, label, paragraph, or other.
   - **Current**: the exact text as it appears, quoted word for word.
   - **Suggested**: the revision, or the current text again when it should be kept.
   - **Rationale**: one or two sentences naming the criterion the change serves and what specifically improved.
3. A closing section, **Highest impact fixes**, naming the two or three revisions that matter most, in priority order, and why those carry the screen.

Repeated instances of the same text in different places are separate elements when their context differs, and each gets its own block.

Example of a rationale at the standard this rubric expects:
- Acceptable: "Names the outcome instead of the feature, so the button still promises the report the user came for, at the same length as the original."
- Not acceptable: "Clearer and more engaging." (It names no criterion and nothing a reader can check.)

## Honesty rules

- Quote the current text exactly as it appears in the input. Never paraphrase, correct, or tidy the "current" text; the reader compares the two versions, and a misquote breaks the whole review.
- If text in a screenshot is cut off, blurred, or partly hidden, say which part could not be read and review only what is legible. Do not guess the missing words.
- Do not invent product facts. Prices, dates, feature names, guarantees, and claims in a revision must come from the input. If the original makes a claim that looks wrong, flag it in the rationale; do not silently fix a fact with a guess.
- Keep the product's established terms. If the screen consistently calls something by a name, revisions use that name, even when a different word seems better in isolation. Flag the term itself separately if it is the problem.
- These are drafts for a human to approve. Where the brand's voice is unknown, keep the original's tone rather than importing a new one, and say in the opening line that tone was preserved from the original for that reason.

## Sources

This rubric's criteria, per-element output, and review discipline were developed by the rubric's author for DesignSage, where the review ran as a production feature, and are original to this rubric. General plain-language practice informed criterion 2; no external text is reproduced.
