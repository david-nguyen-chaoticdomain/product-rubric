# Worked example: Design Quality

**Fixture:** `fixtures/nexus-homepage/homepage-mobile.png` (the Nexus homepage composed for a phone, 390 px wide; the fixture brief is in the same folder).
**Rubric:** Design Quality (`design-quality`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Context available to this run, from the fixture brief: the composition's job (a stacked phone version of the homepage carrying the hero, both calls to action, the product visual, and the features introduction) and the fact that Nexus is a fictional product, so no production behavior can be consulted. No research evidence or design rationale was submitted with the screen.

---

**Overall score: 70 / 100**, across the 6 of 7 dimensions that could be judged.

The composition's strongest quality is discipline: one column, one accent color, one type voice, carried from the desktop direction without a single improvised element. Its most consequential weakness is that the product itself never becomes legible on the phone: the visual is a desktop monitor shrunk to a third of its size, so the one piece of evidence on the page arrives as texture, and the page asks for a signup in front of it.

## 1. Right problem: 3

- Issue: The phone problem is "show a visitor the product, on the device in their hand," and the composition solves a narrower one: "stack the desktop hero." The product visual is a photograph of a desktop monitor, dark and small, whose interface cannot be read at 390 px; the visitor is shown that a product exists, not what it does.
- Issue: The features section, which on desktop carries three worked stories (boards, sprints, roadmapping), collapses into one summary sentence. The phone page's job narrows to the hero alone, so a visitor who is not ready to tap a button has nothing further to be persuaded by.
- Strength: The narrowing is at least consistent: the hero keeps its full argument (announcement, claim, promise, both actions) rather than truncating the claim, which is the failure most stacked pages choose.

## 2. Grounded in evidence: Not judged

- Not judged (na): No evidence was submitted with this screen: no test results, no analytics, no record of what phone visitors do on the current page. The fixture brief states the composition's intended contents, which is a goal, not evidence. Phone-visitor behavior data, or a first-click test on this composition, would make the dimension judgeable.

## 3. Holds together as a system: 4

- Strength: Every element belongs to the desktop direction's system: the same dark ground, the same indigo reserved for actions and the announcement, the same headline voice and radius language. Nothing on the phone page looks invented for the phone page.
- Strength: The stacked rhythm is regular (announcement, headline, promise, actions, visual, section) with consistent spacing, so the page reads as one composition rather than a pile of blocks.
- Issue: The one break in the system is the product visual's chrome: its tiny desktop window controls and "Tasks · Docs · Sprints · Roadmaps" header belong to a different scale of the same system, and at this size they read as noise rather than as the product.

## 4. Flow quality: 3

- Strength: The order is the argument's order: news, claim, promise, action, evidence, depth. A thumb reaches both calls to action without scrolling, and the primary is a full-width block that cannot be missed or mis-tapped.
- Issue: Both calls to action arrive before any evidence. "Book a Demo" takes a full-width row of its own, at nearly the primary's visual weight, so the page spends two large commitments before it has shown the visitor a single legible thing the product does.
- Issue: The flow dead-ends at the summary sentence. After "Everything you need to ship faster," the composition ends; there is no next step offered to a visitor whom the hero did not convert.

## 5. Execution and polish: 4

- Strength: Type hierarchy is crisp at this size: the headline holds its ExtraBold presence across four lines without awkward breaks, the subhead is set at a comfortable reading size, and nothing on the page is cramped or clipped.
- Strength: The announcement pill survives the move to phone better than it does on desktop: at full width it is the largest small element on the screen, and its arrow reads clearly.
- Issue: The product visual's internal text (window chrome, metric labels) is illegible at this size, which is a polish failure the composition chose when it reused the desktop asset instead of producing a phone-scale one.

## 6. Words do their job: 3

- Strength: The headline and subhead carry over unchanged, so the phone visitor gets the same claim and the same four-noun product definition as the desktop visitor; the words are not dumbed down for the smaller screen.
- Issue: The features summary ("Visual Kanban boards, automated sprints, and real-time roadmapping, sized for a phone and ready for a first-click test") describes the page's own construction instead of the product's value. "Sized for a phone" is a fact about the artifact the visitor is holding, not a reason to buy, and it spends the page's last sentence on it.
- Issue: "Book a Demo" is the only words on the page that promise a sales conversation, and nothing near it says what the demo is or how long it takes, so the page's second-largest action is also its least described.

## 7. Explains itself: 4

- Strength: A cold visitor can say, after one screen, what Nexus is (the subhead's four nouns), who it is for (the headline), and what to do next (the full-width button). The page needs no caption.
- Issue: The one thing the page does not explain is its own visual: nothing labels or frames the product image, so the visitor must infer that the dark rectangle is the product, at the size where inference is hardest.

## Highest impact fixes

1. Replace the desktop-monitor visual with a phone-legible product view (one board, one metric, readable at 390 px). Every weak dimension in this review traces back to the evidence being illegible.
2. Demote "Book a Demo" to a text-weight action under the primary button, so the page spends one commitment before its evidence instead of two.
3. Rewrite the features summary as product value, and give the page an ending: either the first feature story in full, as the desktop page does, or a closing action for the unconvinced.

```
Rubric summary
Rubric: Design Quality v1.0 · Date: 2026-10-20 · Artifact: Nexus homepage, mobile composition (homepage-mobile.png)
Dimensions: Scored 6 of 7 · Not judged 1
Result: 70/100 across the dimensions that could be judged
```
