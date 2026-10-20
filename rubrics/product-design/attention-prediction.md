---
name: Attention Prediction
category: product-design
version: 1.0
summary: Predicts the three places a viewer's eye will land first on a screen, in order, with positions a tool can draw as an overlay.
when_to_use: To check whether a screen's visual hierarchy sends attention where the design intends, especially when something decorative might be out-pulling the headline or the main action.
inputs: A screenshot of the screen (required for coordinates). Optionally, the intended attention path: the elements the design wants seen first, second, and third. A text description alone can support the ranked prediction but not the coordinates; say so and omit them.
scale: Exactly 3 hotspots; intensity High 70-100, Medium 40-69, Low 20-39
level: simple
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to predict where attention lands first on a screen: which element the eye goes to first, second, and third. The result is a short ordered list with positions, so it can be read as text or drawn over the screenshot as a simple overlay.

This rubric carries the softest claim in the library, and its framing is part of the rubric. The prediction is reasoned from visible design features (size, contrast, color, faces, position, isolation). It is not eye-tracking, it is not observed user behavior, and its intensity numbers are not percentages of viewers or of viewing time. Used honestly, it is a hierarchy check: it catches the common failure where the loudest thing on the screen is not the thing the screen is for. Real eye-tracking, or testing with real people, is how a prediction like this gets verified.

If the input shows no analyzable interface elements, say so and stop. If the input is a written description rather than an image, produce the ranked prediction without coordinates, and say why at the top.

## Procedure

Follow these steps in order.

1. Scan the whole image, top to bottom, and note every element that pulls attention, before ranking anything.
2. Rank the candidates by the criteria below and select exactly 3 hotspots, no more and no fewer. Three is deliberate: the first three landings are the prediction that can be reasoned about with any confidence; a longer list invents precision.
3. Place each hotspot at the exact center of the element it names, using percentage coordinates: x from 0 at the left edge to 100 at the right, y from 0 at the top edge to 100 at the bottom. Percentages only, never pixels. Before writing a coordinate down, run the dot test: if a dot were drawn at (x, y), would it land on the element itself, not above it, below it, or in the empty space beside it?
4. Assign each hotspot an intensity from the bands in the Scoring section, with a genuine spread across the three.
5. Run the verification pass. For each coordinate, look again at the image and state what is actually at that position. If what is there is not the element the hotspot names, move the coordinate to the element's real center, and report the correction in the output. A coordinate that survives this pass unchanged is reported as verified.
6. If an intended attention path was supplied with the input, compare it with the predicted order, position by position, as the output format requires.

## Criteria

Rank attention by these five factors. They are the reasoning, not decoration: every hotspot's reason must name the factors doing the work.

### 1. Size and visual weight
Larger and denser elements pull the eye earlier than smaller, lighter ones.
- What to examine: The element's area relative to the screen and to its neighbors; filled shapes against outlined ones; blocks of imagery against text.
- What good looks like: The screen's most important element is also among its heaviest, so first attention and first importance coincide.
- What bad looks like: A minor element (a badge, a decorative panel, a footer block) outweighs the headline or the primary action.

### 2. Contrast and color distinction
Elements that stand apart from their surroundings in brightness or hue are seen before elements that blend in.
- What to examine: Saturated color on a muted screen, dark blocks on light layouts and the reverse, and the single element whose color appears nowhere else.
- What good looks like: The strongest contrast sits on the element the design most wants seen.
- What bad looks like: The highest-contrast element is an advertisement-like banner, a warning, or a secondary button, pulling first attention off the message.

### 3. Faces and human imagery
Faces draw attention earlier and hold it longer than almost anything else on a screen, and eyes within a face draw the gaze to where the face is looking.
- What to examine: Photographs or illustrations of people, their size and placement, and the direction of their gaze relative to the headline and the action.
- What good looks like: A face is present where warmth is wanted, sized below the message, and looking toward the headline or the call to action, handing attention to it.
- What bad looks like: A large face out-pulls the headline, or gazes off the screen or at nothing, taking the viewer's attention with it out of the design.

### 4. Position and reading gravity
Viewers start at the top, weight the upper and central areas first, and reach bottom edges and corners last.
- What to examine: Height on the screen, centrality, and alignment with where a scanning path naturally begins for the layout's reading direction.
- What good looks like: The intended first element sits where scanning starts, and later elements follow a natural path downward.
- What bad looks like: The primary action sits low or in a corner while announcements and navigation occupy the gravity well at the top.

### 5. Isolation and whitespace
An element alone in empty space is noticed out of proportion to its size, because nothing competes with it locally.
- What to examine: Elements separated from groups, single buttons in open areas, and lone lines of text surrounded by space.
- What good looks like: Isolation is spent on the primary action or the one message, making it unmissable.
- What bad looks like: An isolated minor element (a small print link, a lone icon) harvests attention its importance does not justify.

## Scoring

There is no score for the screen. The only numbers are the three intensities, one per hotspot, expressing relative predicted pull:

- **High, 70 to 100**: a primary attention landing. One or two of the three hotspots.
- **Medium, 40 to 69**: a secondary landing. One or two of the three hotspots.
- **Low, 20 to 39**: a tertiary landing. The remainder.

The three intensities must spread across the bands. Three hotspots at similar intensities, or all three in the High band, describe a screen with no hierarchy and usually mean the ranking was not actually done; redo the ranking rather than flattening the numbers.

Not applicable: this rubric has no N/A result. Any screen with content has a first landing. The honest limits live in the input gate (a description earns no coordinates) and in the honesty rules, not in skipped hotspots.

## Output format

Return the prediction in this structure, in Markdown:

1. An opening line labeling the result a prediction and stating its basis: the screenshot reviewed, and whether an intended path was supplied.
2. **Predicted attention path**: the 3 hotspots in predicted viewing order. Each hotspot gives, on labeled lines:
   - **Element**: the specific element, named (for example, the headline "Grow your savings," not "the text").
   - **Position**: x and y as percentages of the image, the center of the element.
   - **Radius**: 5 to 20, the element's approximate extent as a percentage.
   - **Intensity**: the number and its band (High, Medium, or Low).
   - **Reason**: the element and the criteria factors that make it land at this position in the order.
3. **Verification**: one line per hotspot stating what the verification pass found at its coordinate, and any correction it made, or "verified, no change."
4. **Intended path check**, when an intended path was supplied: for each of the three positions, whether the prediction matches the intent. A mismatch at the first position is the headline finding of the whole report and is stated as such.
5. A closing section, **Highest impact fixes**, listing the design changes that would move attention toward the intended path, in priority order. When no intended path was supplied, the fixes target the clearest case of attention landing on something its importance does not justify.

Finally, end the report with the summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary
Rubric: Attention Prediction v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Hotspots: 3 predicted, in order
Result: {n} of the 3 predicted hotspots match the intended attention path, or: no intended path was supplied
```

## Honesty rules

- Label the result a prediction wherever it is reported. It is not eye-tracking data, not a heatmap of real users, and not evidence of what any actual person did.
- Intensity is relative predicted pull between the three hotspots on this one screen. Never present it as a share of viewers, a share of viewing time, or a probability.
- Coordinates are careful estimates, and the verification pass reduces placement error without eliminating it. Never present a coordinate as measured.
- Do not emit coordinates for a description-only input, and do not reconstruct a screenshot's layout from memory of similar products. Judge the image that was given.
- A prediction that matches the intended path is a good sign, not a proof. Say so when reporting a full match, and name the ways to verify with real people (eye-tracking, a five second test, first-click testing) when the stakes of the screen justify it.
- Do not lengthen the hotspot list to appear thorough. Exactly three, ranked honestly, including when the third is a judgment call; say it is one in its reason when that is true.

## Sources

This rubric's method, meaning the three-hotspot limit, the percentage coordinate discipline with its verification pass, the intensity bands, and the intended-path comparison, was developed by the rubric's author for DesignSage, where it ran as a production feature, and is original to this rubric. The attention factors it reasons from are established findings in visual attention and reading research, described here in the author's own words; no external text is reproduced.
