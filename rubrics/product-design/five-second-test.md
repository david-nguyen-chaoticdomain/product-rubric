---
name: Five Second Test
category: product-design
version: 1.0
summary: Predicts what a first-time visitor will remember after seeing a screen for five seconds, and which notable elements they will miss.
when_to_use: A first-impression check on a landing page, a hero section, an app screen, or any single screen whose job is to land its message and its main action within seconds.
inputs: A screenshot of one screen at its full bounds, or a description that names the visible elements and their text. One screen per run.
scale: Memorability 0-10; simulated panel of 5; 3-of-5 rule
level: simple
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to predict what a first-time visitor takes away from a five second view of one screen: which elements they will remember once the screen is gone, and which notable elements they will miss. It answers the question every landing page and hero section lives or dies on: in five seconds, did the point land?

This is a prediction, not a test with real people. It estimates recall from what is known about attention and first impressions. It does not measure real users, and its results must never be reported as user data.

If the input shows no analyzable interface elements (no text, imagery, controls, or content), say so and stop. Do not run the test on an empty or unrelated image.

## Procedure

Follow these steps in order.

1. Take the design as a whole, at its actual bounds. The viewer sees the entire screen at once; there is no scrolling and nothing is clipped or hidden below a fold inside this test.
2. Simulate a panel of 5 independent participants. Each one is a first-time visitor with no prior familiarity with this brand or product, seeing the screen cold.
3. Each participant views the screen for five seconds. Then the screen is taken away, and each participant reports what they remember.
4. Identify the notable elements of the design: 3 to 6 in total. Notable means the elements the screen's job depends on, such as its headline, its main call to action, its brand, its hero image, its price, or its proof points. Do not inventory every element on the screen.
5. For each notable element, estimate how many of the 5 participants would remember it. Reason about genuine variation between participants: differences in scanning order, in what draws attention first, and in prior assumptions. Do not invent a plausible-looking spread of numbers; every count needs a reason.
6. Sort the elements by the partitioning rule in the Scoring section, then compute the memorability score from the counts, exactly as the Scoring section defines it. Never estimate the score directly.

## Criteria

Judge each notable element against the three things that decide whether it survives a five second view.

### 1. Attention capture
Whether the element draws the eye early in the view.
- What to examine: The element's size, contrast, and color against everything around it; the presence of faces or human imagery, which draw attention strongly; and its position, since viewers start at the top and the center and reach edges and footers last, if at all.
- What good looks like: The element is among the first things the eye lands on, because it is large, distinct, or placed where scanning begins.
- What bad looks like: The element competes at equal weight with several others, sits at an edge or in a footer, or blends into its surroundings, so most viewers never reach it in five seconds.

### 2. Message clarity
Whether the element's meaning can be grasped inside the brief view.
- What to examine: For text, whether the words state their point directly in language a cold visitor already has. For imagery, whether what it shows is readable at a glance rather than after study.
- What good looks like: A participant can repeat the point back in their own words after the screen is gone: what this is, what it promises, whose it is.
- What bad looks like: The element needs a second read, depends on context the viewer does not have yet, or says something generic enough to be forgotten with the screen.

### 3. Action clarity
Whether the viewer leaves knowing what to do next.
- What to examine: The primary call to action: whether there is one, whether it reads as the action to take, and whether it stands apart from secondary actions competing with it.
- What good looks like: One action is unmistakable, labeled with what happens when it is taken, and visibly ahead of every other option on the screen.
- What bad looks like: Several actions at equal weight, a primary action styled like a secondary one, or no action visible at all, so the visitor remembers the message but not the next step.

## Scoring

The panel size is 5. Every notable element gets one agreement count: the number of simulated participants, from 0 to 5, who would remember it.

Partitioning rule: an element counts as **remembered** when its agreement count is 3 or more. Below 3, it counts as **likely missed**. The count always means the number who would remember it, in both lists.

Memorability score: average the agreement counts of all identified elements (remembered and likely missed together), divide by the panel size, and scale the result to a number from 0 to 10, keeping one decimal place. Worked example: counts of 5, 4, 3, 1 across four elements average to 3.25; divided by 5 and scaled by 10, the memorability score is 6.5.

Not applicable: this rubric has no per-criterion N/A. A screen that cannot be viewed as a whole (for example, one frame of a multi-step flow presented without its context) can still be tested, but say in the summary that the result covers only what was shown.

## Output format

Return the test result in this structure, in Markdown:

1. **Memorability score: N / 10**, followed by a one or two sentence summary of what the five seconds accomplished and what they lost.
2. **Remembered**, a list of the elements with an agreement count of 3 to 5. For each: the element named specifically (for example, the green "Add to Cart" button, not "the button"), its count as "n of 5," and the reason it is memorable.
3. **Likely missed**, a list of the elements with an agreement count of 0 to 2. For each: the element named specifically, its count as "n of 5," and the reason it is easy to miss.
4. A closing section, **Highest impact fixes**, listing the changes that would most improve recall of the elements that matter most, in priority order. Draw them from the likely missed list first.

Finally, end the report with the tracking summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary, for tracking
Rubric: Five Second Test v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Recall: Elements recalled by 3 or more of the panel of 5 {n} · Notable elements missed {n}
Result: Memorability {x}/10
```

## Honesty rules

- This is predicted recall produced by a simulation. It is not a claim about real users, and it must never be presented as observed behavior or test data. Label it a prediction wherever the result is reported.
- The agreement counts are reasoned judgments, not measurements. Do not give them false precision, and do not adjust them to make the memorability score come out to a number that feels right.
- Judge only what is visible in the input. Do not credit the design with elements a real page might have elsewhere, and do not assume scrolling, animation, or interaction the input does not show.
- If the input is a written description rather than an image, say at the top that the prediction is based on a description and that the result may change against the actual design.
- Be constructive and specific. A reason that could apply to any element on any screen is not a reason.

## Sources

The five second test is a long-standing method in usability research, in which a design is shown briefly and the viewer is then asked what they remember. This rubric's protocol, meaning the simulated panel of five first-time visitors, the 3-of-5 partitioning rule, and the memorability score computed from the agreement counts, was developed by the rubric's author for DesignSage, and the criteria, procedure, and output format here are original to this rubric.
