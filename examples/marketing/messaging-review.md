# Worked example: Messaging Review

**Fixture:** `fixtures/nexus-product-marketing/messaging-sprints-2.md` (the messaging and sales pitch for Nexus Sprints 2.0; the fixture brief is in the same folder).
**Rubric:** Messaging Review (`messaging-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder).

---

**Verdict: Usable with the noted gaps**

The document contains a good pitch, in the wrong order: its insight is buried in the story section, its proof mixes one verifiable point with one quote no buyer can check, its hardest objection is answered with a shrug, and it ends by asking for nothing in particular.

The positioning behind this message was available to the review (the Nexus Positioning fixture), and one gap below is inherited from it: the positioning's undecided target is why these messages can address "team leads," "product managers," and "admins" without a first audience.

## 1. Leads with an insight, not the product: Needs work

The Pitch opens with the product and its inventory: "Sprints 2.0 is our biggest sprint release yet. It adds automatic cycle rollover, cycle metrics..., velocity trends..., a new sprint planning view." The insight this release actually owns (a team lead loses an hour a week to sprint bookkeeping) exists in the document, three sections later, inside The Story. A listener who hears the first thirty seconds learns what shipped and nothing about why it matters to them, and the pitch's own structure never recovers that order. Fix: open with the lost hour, and let the features arrive as its answer, in the order the story already tells it.

## 2. Engages the alternatives honestly: Needs work

The objection table engages the real alternatives with substance in two of its three rows (custom process, shallow metrics). The Pitch, though, claims "No other project platform automates the whole cycle," an exclusivity assertion nothing in the document or the positioning substantiates, aimed at exactly the buyers most likely to know a counterexample. Honest engagement cannot survive one unverifiable superlative in the lead paragraph. Fix: strike the claim or narrow it to the specific automation (full-cycle rollover with board-computed metrics) that the document can defend.

## 3. Differentiated value carries the hierarchy: Needs work

There is a hierarchy here (a lead pitch, three audience messages, proof, objections), and the audience messages are genuinely differentiated in content. But the top of the hierarchy is occupied by speed ("the fastest way to run a sprint"), a claim every competitor makes, while the differentiated value the whole document supports (the bookkeeping hour is returned, every week, because the cycle runs itself and the metrics come from the work) sits in the story's middle, phrased once and never repeated as the lead. The hierarchy carries the commodity claim at the top and the owned one underneath. Fix: promote the hour-back value to the lead message and demote "fastest" to a supporting line, where it does no harm.

## 4. Proof is attached, at the right strength: Needs work

Two proof items, at opposite standards. The Acme point is right-sized (a named company, a bounded claim: 24 tasks, one roadmap date, hit). The quotation is not: "It changed how our whole company works," attributed to a role at an unnamed Fortune 500 company, is unverifiable by any listener, unusable by any careful rep, and outsized for the claim it decorates. In a pitch, one uncheckable proof item taxes the credibility of the checkable one beside it. Fix: name the customer and shrink the quote to what they actually said about the specific thing, or cut it; the document's pitch survives on the Acme point and the mechanism.

## 5. The customer is the subject: Needs work

The Story knows its subject for two sentences (the team lead, her lost hour, the job she did not sign up for) and then hands the verbs to the product: "Then Nexus arrives..., rolls the cycle over on its own, computes the metrics..., and hands her the hour back, every week, forever. Her roadmap updates itself... The team just ships." The customer ends the story as a spectator of her own rescue, and the key messages share the tilt ("the fastest way," "nothing to configure" are product properties; only the admin message's framing is about the person's work). Fix: keep the customer as the actor (she closes her sprint in minutes, she walks into the retro with the metrics already true) and let Nexus be the guide that makes her the kind of lead who does not do bookkeeping.

## 6. Objections are anticipated, and the ask is clear: Needs work

The objections are the right three, and two answers carry substance. The hardest one gets the least: "We already live in another tool" is answered with "Switching is easy. Most teams are up and running in a day," with no import path, no timeline, and no help offered, although the team's own battlecard promises a one-pass import this document never mentions. And after eight steps of build, the ask is "Try Nexus today": no trial named, no next step, no specific action a persuaded listener can take. Fix: answer switching with the import and a real timeline, and close with the actual offer (the 14-day trial the pricing page names, and what happens in it).

## Fixes before this is repeated

1. Reorder the pitch: insight first (the bookkeeping hour), product as its answer.
2. Promote the owned value (the hour returned weekly) to the lead message; demote "fastest," and strike or narrow the exclusivity claim.
3. Repair the proof: name the quoted customer or cut the quote.
4. Rewrite The Story with the customer as the actor and the product as the guide.
5. Answer the switching objection with the import and a timeline, and end with a specific ask.

```
Rubric summary
Rubric: Messaging Review v1.0 · Date: 2026-10-20 · Artifact: Nexus Sprints 2.0 - Messaging and Sales Pitch (messaging-sprints-2.md)
Criteria: Holds 0 · Needs work 6 · Missing 0
Gate criteria not met: Leads with an insight, not the product; Differentiated value carries the hierarchy; Proof is attached, at the right strength
Result: Usable with the noted gaps
```
