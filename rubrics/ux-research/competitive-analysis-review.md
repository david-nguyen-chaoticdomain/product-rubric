---
name: Competitive Analysis Review
category: ux-research
version: 1.0
summary: Reviews a competitive analysis, judging whether the competitor set is complete, the evidence is first-hand and dated, the comparison serves the reader's decision, and competitor strengths are reported as honestly as their weaknesses.
when_to_use: Before a competitive analysis is circulated or used to plan against: a competitor teardown, a feature comparison, or a market landscape document, when the question is whether the team can plan on what it claims.
inputs: The competitive analysis itself, in full: the competitor set, the comparison, and the conclusions, as the audience will read them. Screenshots, recordings, or notes from using the competing products strengthen the review when included; without them, the review judges the document's evidence as presented and says so.
scale: No numeric score; each criterion judged Holds, Needs work, or Missing, with an overall reliance verdict
level: standard
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to review a competitive analysis before the team plans on it. A competitive analysis is research, and it fails the way research fails: a sample chosen for convenience, evidence gathered from a distance, and conclusions written larger than what was observed. Its failures are more dangerous than most, because they harden into strategy. Within a quarter, "their onboarding takes eleven steps, we counted, in the March build" has become "we win on onboarding" in a roadmap, a pricing decision, and a pitch deck, with the counting nowhere in sight.

This review audits the analysis as a piece of evidence about the market. It asks whether the right competitors are in the set, whether the comparisons rest on actually using the products or on reading their marketing, whether the dimensions compared are the ones customers choose on, and whether the document reports where competitors are better with the same energy it reports where they are worse.

The review judges the document in front of it. It does not re-run the analysis, and it cannot verify a competitor's current state from the document alone; where the review was given access to the products or to live sources, it says so, and where it was not, claims are rated against the evidence the document presents. If the input is raw material rather than an analysis (a pile of screenshots, a list of links, an unorganized teardown), say so and stop; there is not yet an analysis to audit.

## Criteria

Judge each criterion Holds, Needs work, or Missing, using the Scoring section. Every judgment cites the document's own text, tables, or figures.

### 1. The competitor set is complete and argued
The set covers the alternatives a customer would actually weigh, and the document can say why each entry is in and why the notable absences are out.
- What to examine: Whether the set includes indirect competitors (the spreadsheet, the manual process, the in-house tool, doing nothing) alongside the direct ones; whether emerging or adjacent products a customer might adopt next are present; whether inclusion follows a stated rule (shared customer, shared job, shared budget) or follows fame. Whether the document names who was excluded and on what grounds, especially exclusions that flatter the author's product.
- What good looks like: A skeptical reader can see the rule the set was built by, and the exclusions they would have challenged are addressed in the document itself.
- What bad looks like: Two famous direct competitors and nothing else; the workaround most customers actually use today absent from the document because it is not a product; a set that happens to contain exactly the competitors the author's product beats.

### 2. Evidence is first-hand and dated
Comparisons rest on using the products, with the date and version of what was examined stated, not on the competitors' own descriptions of themselves.
- What to examine: For each material claim about a competitor: whether it is backed by direct use (an account, a trial, a recorded session, a dated screenshot) or by the competitor's marketing pages, review roundups, or memory. Whether prices are quoted from the competitor's pricing page as of a stated date or repeated from a third-party listicle. Whether hands-on limits are admitted where they exist (a trial tier judged as if it were the paid product, a workflow the reviewer could not access).
- What good looks like: A reader can tell, for any claim that matters, what the reviewer actually did, in which version of the product, and when.
- What bad looks like: A comparison whose every competitor claim could have been written from the competitors' homepages; screenshots with no date in a document that will be read for a year; pricing stated to the dollar with no source or as-of date anywhere.

### 3. Comparison dimensions serve the customer's decision
The things compared are the things customers choose on, not the things that were easy to count or safe to win.
- What to examine: The dimension list against how a buyer in this market actually decides: the job they are hiring the product for, the switching cost, the integrations their stack requires, the support and trust signals they weigh. Whether feature presence is recorded as a checkbox or as how well the feature works for the customer's task. Whether dimensions were chosen before or after the author knew who won them.
- What good looks like: The dimensions read like a buyer's shortlist, features are judged in use rather than in existence, and at least one dimension is one the author's product does not win.
- What bad looks like: A forty-row feature matrix in which the author's product has no empty cells; depth, quality, and fit absent in favor of counts; price compared without the packaging differences that make the prices mean different things.

### 4. Competitor strengths are reported honestly
The analysis can say, in plain words, where a competitor is better, and competitor weaknesses rest on the same standard of evidence as their strengths.
- What to examine: Whether each competitor is credited with what it genuinely does well (a smoother flow, a fairer price, a feature customers love); whether weaknesses are observed facts or characterizations ("clunky," "confusing") with no observation under them; whether the author's product is held to the comparison's own dimensions or quietly exempted from them. The tone test: would the competitor's own product team, reading this, call it fair?
- What good looks like: Every competitor in the document has at least one strength stated as plainly as any of its weaknesses, and the author's product appears in the comparison on the same terms as everyone else.
- What bad looks like: Strengths sections that are really weaknesses in disguise ("their strength is marketing"); a rival's flagship capability dismissed in a clause; the author's product absent from its own comparison table.

### 5. Observation, interpretation, and implication stay separate
What competitors do, what it means, and what the team should do about it are three different statements, and the document keeps them visibly different.
- What to examine: Passages where an observed fact slides into a strategic conclusion inside one sentence ("they lack templates, so their churn must be high"); market-share or motive claims presented as observations ("they are moving upmarket" inferred from one pricing change); recommendation sections whose size can be traced to the evidence above them or floats free of it.
- What good looks like: The reader can lift the observation layer out of the document and reuse it even if they dispute every implication, because the layers are labeled as what they are.
- What bad looks like: A document whose facts cannot be quoted without also quoting its spin; implications sized to the team's hopes rather than to the evidence gathered.

### 6. Currency and upkeep are established
The document is dated, owned, and built to be refreshed, because a competitive analysis decays from the day it is finished.
- What to examine: Whether the document states when the evidence was gathered, who owns the analysis, and what would trigger an update (a competitor launch, a pricing change, a new entrant). Whether older material carried forward from previous versions is marked as such or silently re-dated. Whether the document's own claims about how fast the market moves are consistent with how it will be maintained.
- What good looks like: A reader picking this up in six months can tell what is still safe to rely on, and a named person is responsible for finding out when it stops being true.
- What bad looks like: No date anywhere on a document describing fast-moving products; last year's screenshots presented under this year's heading; a comparison the team treats as a standing fact with no owner and no refresh trigger.

## Scoring

This rubric gives no numeric score. Each criterion receives one verdict:

- **Holds**: the analysis meets this criterion; the team can rely on it in this respect.
- **Needs work**: the criterion is attempted but a specific gap undermines it. The finding names the gap and what would repair it.
- **Missing**: the analysis makes no attempt at this criterion (no competitor rationale anywhere, no dates on any evidence), or the attempt is so thin it cannot be relied on.

Overall reliance verdict, stated once at the top, in exactly one of these forms:

- **Can be relied on**: no criterion below Holds except at most one Needs work.
- **Rely on it with the noted gaps**: any other combination short of the line below; the gaps travel with the document until fixed.
- **Do not circulate yet**: any criterion Missing on The competitor set is complete and argued or Evidence is first-hand and dated. In this state the analysis would mislead even careful readers, because its frame or its facts cannot be checked.

## Output format

Return the review in this structure, in Markdown:

1. **Reliance verdict: [Can be relied on / Rely on it with the noted gaps / Do not circulate yet]**, with one sentence of reason, and a line stating what evidence was available to the review beyond the document itself (first-hand product material, live sources, or the document alone).
2. One section per criterion, in the order above, with its verdict and findings tied to specific passages, tables, or figures of the analysis.
3. A closing section, **Fixes before this is planned on**, in priority order: frame problems (the set, the evidence) first, then fairness and separation, then upkeep.

Example of a finding at the standard this rubric expects:
- Acceptable: "Needs work: the analysis states that Fieldnotes 'charges per seat with no free tier,' citing a roundup article. The competitor's pricing page, checked during this review, shows a free tier for up to three seats. The claim the evidence supports is 'free for small teams; per-seat pricing begins at the Team plan,' with the page and the date named in the document."
- Not acceptable: "The competitive research could be more thorough." (It names no claim, no gap, and no repair.)

Finally, end the report with the summary block, in exactly this form. Every value in the block is copied or counted from the judgments in this report; the block adds no new judgment of its own. It is the record a team keeps when it runs this rubric repeatedly and wants to see whether its work is improving.

```
Rubric summary
Rubric: Competitive Analysis Review v1.0 · Date: {the date of this run} · Artifact: {the artifact's name as given in the request, or: not named}
Criteria: Holds {n} · Needs work {n} · Missing {n}
Gate criteria not met: {the criteria whose grade held the verdict below Can be relied on, or: none}
Result: {the reliance verdict, exactly as stated at the top of this report}
```

## Honesty rules

- Audit the document, not the competitors and not the author. Every finding is about a claim and its support, never about a rival's quality or the analyst's diligence as a person.
- Do not import outside knowledge as evidence. A claim about a competitor that the reviewer happens to know is stale is still rated against what the document presents, unless the review was given live access and says so; in that case the check and its date are reported as part of the finding.
- Judge competitor strengths with the same generosity the Findings Review gives disconfirming evidence: an analysis that finds nothing to admire in any rival has failed a criterion, and the review must not soften that verdict because the document is otherwise polished.
- Do not let a clean format disguise thin evidence. A beautifully typeset matrix built from marketing pages is Needs work on evidence however it looks, and the review says so rather than grading the presentation.
- Where the reviewer cannot tell how evidence was gathered, say so and rate the claim as presented, undated and unsourced, rather than assuming the underlying work was sound.

## Sources

The criteria and verdicts in this rubric are the author's own, written for ProductRubric from product research practice. They are in conversation with the established practice of competitive evaluation in UX research, including first-hand comparative testing of competing products, but they adapt no single published framework, and no source's text or checklist is reproduced.
