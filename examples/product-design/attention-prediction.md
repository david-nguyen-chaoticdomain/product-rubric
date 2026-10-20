# Worked example: Attention Prediction

**Fixture:** `fixtures/nexus-homepage/homepage-a-above-fold.png` (the Nexus marketing homepage, Option A light direction, above the fold; the fixture brief is in the same folder).
**Rubric:** Attention Prediction (`attention-prediction`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. This is a prediction from the screenshot, not a measurement: no eye tracking was done. The fixture brief supplied the intended attention path: announcement, headline, primary call to action, product visual.

---

This result is a prediction, based on the screenshot named above. An intended attention path was supplied with the fixture: the announcement pill first, then the headline, then the primary call to action, then the product visual.

## Predicted attention path

**Hotspot 1**
- **Element**: the headline, "The project platform engineered for high-growth teams"
- **Position**: x 25, y 20
- **Radius**: 18
- **Intensity**: 85 (High)
- **Reason**: The heaviest type on the screen by a wide margin, set in near-black ExtraBold on a pale ground, occupying the left half where a desktop reading scan begins. Size and visual weight (criterion 1) and reading gravity (criterion 4) both put it first; nothing else on the page is within reach of its mass.

**Hotspot 2**
- **Element**: the product visual, the dark dashboard on a monitor inside the "One connected workspace." card
- **Position**: x 71, y 26
- **Radius**: 15
- **Intensity**: 74 (High)
- **Reason**: The only photograph-like element and the largest single object after the headline: a dark, high-contrast rectangle on a pale page pulls the eye the moment the headline releases it. Contrast and color distinction (criterion 2) do the work; the card around it is pale lavender, which isolates the dark image further (criterion 5). It lands second, ahead of the call to action it sits beside, because in a two-column hero the image's mass beats a button's.

**Hotspot 3**
- **Element**: the "Get Started Free" button under the subhead
- **Position**: x 11, y 36
- **Radius**: 6
- **Intensity**: 55 (Medium)
- **Reason**: The most saturated color on the page and the natural end of the left column's reading line (headline, subhead, button), so the scan arrives here with intent. It ranks third rather than second because it is small next to the two masses above, and its indigo is spent in several places (the pill, the nav's identical button, the card's tab labels), which dilutes the distinction that would otherwise pull it earlier.

## Verification

- Hotspot 1 (x 25, y 20): verified, no change. The coordinate sits inside the headline's second line ("platform").
- Hotspot 2 (x 71, y 26): verified, no change. The coordinate sits on the dark product image, right of the monitor's center.
- Hotspot 3 (x 11, y 36): verified, no change. The coordinate sits on the "Get Started Free" button in the hero's left column.

## Intended path check

- Position 1: intended the announcement pill; predicted the headline. **Mismatch. This is the headline finding of this report**: the element the page most wants read first is the one the eye skips. The pill is the smallest text in the hero, pale indigo on paler lavender, set above the largest type on the screen, and the scan passes over it on the way to the headline every time.
- Position 2: intended the headline; predicted the product visual. Mismatch, caused by the same ordering as position 1: everything on the intended path is present, but the visual's mass promotes it one place.
- Position 3: intended the primary call to action; predicted the "Get Started Free" button. Match.

## Highest impact fixes

1. Give the announcement the weight of a first stop, or stop asking it to be one. If the Sprints 2.0 launch matters, the pill needs the size and contrast of an element meant to be read before the headline (it is currently the hero's smallest text). If it is a note for returning visitors, the intended path should be rewritten to match what the page actually does, which is headline first.
2. Narrow the gap between the visual and the button. The button's indigo is used in at least four places in the hero; reserving that exact saturation for actions alone would pull the primary button's landing earlier without changing the layout.
3. Keep the headline where it is. It is the one element whose predicted and intended importance agree in size, if not in order, and both fixes above work by promoting other elements, not by demoting the page's clearest asset.

```
Rubric summary
Rubric: Attention Prediction v1.0 · Date: 2026-10-20 · Artifact: Nexus homepage, Option A above the fold (homepage-a-above-fold.png)
Hotspots: 3 predicted, in order
Result: 1 of the 3 predicted hotspots match the intended attention path
```
