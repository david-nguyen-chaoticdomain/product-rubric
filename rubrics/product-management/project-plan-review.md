---
name: Project Plan Review
category: product-management
version: 1.0
summary: Reviews a project plan, judging whether its outcome and scope are decidable, its milestones are verifiable states, its estimates take the outside view instead of the optimistic inside one, its critical path is visible, its risks, assumptions, issues, and dependencies are kept as a living register, ownership is singular, and the plan knows how it will change.
when_to_use: Before a project plan is committed to: dates promised, teams booked, stakeholders told. Also at any major replan, when the question is whether the new dates deserve more belief than the old ones did.
inputs: The project plan as written: goal, scope, milestones, timeline, owners, and risk material. The team's history on comparable work strengthens the estimation judgments when supplied; without it, estimates are judged on the basis the plan itself states, and the review says so.
scale: No numeric score; each criterion judged Ready, Needs work, or Missing, with a commitment verdict
level: deep
author: David Nguyen
author_url: https://davidnguyen.com/
---

## Purpose

Use this rubric to review a project plan before anyone commits to it. Project plans rarely fail because the listed work is wrong. They fail because the estimate was built from the inside view alone, every task estimated as if nothing would interrupt it, dependencies were discovered rather than planned, and risks were written down once at kickoff and never looked at again. The research record here is unusually blunt: Bent Flyvbjerg's project database, built over decades and summarized in How Big Things Get Done, shows overruns are the norm across project types, driven substantially by the planning fallacy Daniel Kahneman and Amos Tversky identified, our systematic tendency to forecast our own project from its details and ignore what happened to similar projects.

This review judges a plan the way that research and standard practice suggest a plan earns belief: an outcome and scope that can be decided against, milestones that are verifiable states rather than percentages, estimates anchored in a reference class, a critical path that is visible and protected, a RAID register (risks, assumptions, issues, dependencies) kept alive on a cadence, singular ownership, and a stated mechanism for the plan to change, because it will.

The review does not judge whether the project should exist, and it does not re-estimate the work. Where the plan's own basis for a date is missing, the finding is the missing basis, not a substitute date supplied by the reviewer. A product roadmap belongs to the Roadmap Review; this rubric's subject is a bounded project with a delivery commitment.

## Context requests

Before judging, check whether the supplied material establishes the following. Ask only for items that are missing here, would change a criterion's verdict, and that the requester plausibly knows. Ask in a single grouped message, then proceed with whatever you receive.

- Where the dates came from: estimated by the teams who will do the work, derived from comparable past projects, or set by a deadline and worked backward from. The estimation criterion cannot be judged fairly without this.
- Whether the named people's time is actually committed, including what else they are already carrying.
- Any hard external constraints the plan must fit: a contractual date, an event, a regulatory window, a dependency on another team's committed delivery.

If the requester cannot supply an item, mark the affected criteria Not judged with the missing context named, and do not estimate. A plan review that assumes its own answers about resourcing is fiction reviewing fiction.

## Criteria

Judge each criterion Ready, Needs work, or Missing, using the Scoring section. Every judgment cites the plan's own text.

### 1. The outcome and the scope boundary are decidable
The plan states what will be true when the project succeeds, and what is out of scope, in terms a later argument can be settled by.
- What to examine: A success statement that could be checked (a capability live for a named audience at a named quality bar, a migration complete with data verified), not a restatement of the activity ("deliver the platform"). The out-of-scope list, which for real projects is where scope creep is actually prevented. The change mechanism: how a scope change gets proposed, priced in time, and decided, and who may decide it, agreed now while the agreeing is cheap.
- What good looks like: Two reasonable readers, shown a mid-project request, reach the same answer about whether it is in scope, and both can point to the sentence that settles it.
- What bad looks like: Success phrased so that any finished state qualifies; scope defined by a feature list with no exclusions and no mechanism, meaning the plan's dates silently cover an unbounded project.

### 2. Milestones are verifiable states
Each milestone describes a condition that can be demonstrated true or false on its date, owned by one person, with checkpoints close enough together that trouble surfaces while it is still small.
- What to examine: Milestones phrased as states ("checkout live for 5% of traffic with error rate under threshold") versus activities ("checkout work complete") versus percentages, which are unverifiable by construction. The gaps between milestones: a plan whose first checkable state is at 80% of its timeline has no early-warning system, only a late one. Ownership per milestone, singular, and the demonstration each milestone will use, a demo, a metric, a sign-off by name.
- What good looks like: A stakeholder could attend the milestone date, look at what is shown, and know without interpretation whether the project is on track.
- What bad looks like: Milestones a project can claim at any state of actual completion; a final third of the plan containing no milestone at all, which is where projects go to be discovered late.

### 3. Estimates take the outside view
Durations are anchored in what comparable work actually took, with uncertainty held visibly in the plan rather than smeared invisibly into every task or ignored entirely.
- What to examine: Whether the plan names its basis: the team's own history on similar work, a stated reference class, or, failing those, an honest statement that the estimates are first-principles and unproven. Flyvbjerg's remedy for the planning fallacy is reference class forecasting: start from the outcomes of similar projects and adjust only for specific, arguable differences. Where contingency lives: an explicit buffer, owned and visible, positioned where uncertainty is (typically before the committed date and around external dependencies), versus padding hidden inside every line, which cannot be managed and always gets spent. Single-point dates attached to work the plan itself calls uncertain, with no range and no statement of confidence.
- What good looks like: The plan can answer "why do you believe this date?" with evidence instead of confidence, and the buffer is a deliberate decision a leader can see, defend, or consciously spend.
- What bad looks like: A timeline assembled from each owner's best case, summed as if best cases compose; the word "aggressive but doable" anywhere a basis was needed.

### 4. The critical path is visible and protected
The plan shows its dependency chain, knows which sequence of work determines the end date, and gives that sequence its slack and its attention.
- What to examine: Dependencies drawn or listed in a form from which the longest chain can be found, the chain whose slip moves the date day for day. Whether float exists anywhere off the critical path, or whether every task is scheduled as if it were critical, which means nothing is managed as critical. Protection where it matters: the critical tasks staffed first, their owners' other commitments examined, and the buffer of criterion 3 placed in relation to this path rather than at random.
- What good looks like: Asked "what slips the date?" the plan answers with a short named chain, and asked "what can slip safely?" it can answer that too.
- What bad looks like: A Gantt of parallel bars with no dependency arrows; a plan in which a two-week slip in any of twenty tasks is equally fatal, a condition teams describe as "everything is critical" and experience as "nothing is prioritized."

### 5. Risks, assumptions, issues, and dependencies are kept as a living register
The plan carries a RAID register in standard form, with owners and a review cadence, treating the four categories as different things.
- What to examine: Risks: named, with likelihood and impact distinguished, a mitigation or an explicit acceptance, and an owner who is watching, not merely a scribe. Assumptions: listed as assumptions, each with how and when it will be validated, since an unvalidated assumption is a risk the plan has agreed not to see; the test Flyvbjerg's work suggests is whether the plan's biggest dates rest on its least-examined assumptions. Issues: problems already real, kept separate from risks, which are still potential; a register whose risks section contains present-tense problems is telling you its cadence has already failed. Dependencies: both directions, inbound and outbound, with the date each is needed and the impact if it lands late. The cadence itself: a named rhythm (weekly is the standard practice these registers document) at which the register is reviewed and items closed, converted, or escalated.
- What good looks like: The register reads like an early-warning system someone maintains: recent dates, items in motion between categories, mitigations with their own small deadlines.
- What bad looks like: Four risks, all generic ("resource constraints," "scope creep"), written at kickoff in the future tense forever; assumptions nowhere in the document although the timeline plainly rests on several.

### 6. Ownership and decision rights are singular
Every workstream has one accountable owner, the plan's key decisions have a named decider, and the people named have the hours the plan spends.
- What to examine: Accountability that resolves to a person rather than a team or a pair, since shared accountability in a plan is the plan declining to decide. Decision rights for the recurring decisions the project will face (scope trade-offs, date versus quality, dependency conflicts), with an escalation path whose response time is stated, because an escalation that waits two weeks for a steering meeting is a schedule item disguised as governance. Capacity honesty: the plan accounts for the named people's other commitments and for the coordination cost of the team size it assumes, or states plainly that it does not.
- What good looks like: Any person in the plan can answer "who decides this, and by when will they?" for the five decisions most likely to stall the project.
- What bad looks like: Owners listed as departments; a RACI in which three parties are accountable for the same deliverable; a timeline that requires one named person to be in three workstreams at once in the same month.

### 7. The plan knows how it will change
A baseline exists, changes to it are logged with their reasons, and trigger points for a replan conversation are agreed before they are needed.
- What to examine: The baseline: a version of this plan that future actuals will be compared against, kept when the plan is inevitably revised, so the project retains the ability to learn its own estimation error, which is the raw material of every future outside view. A change log with cause, not just content (date moved because dependency X landed late), or its agreed equivalent. Replan triggers stated as conditions, not vibes: if milestone two slips by more than the buffer, the scope conversation of criterion 1 happens, chaired by the named decider, within a stated number of days. A status cadence tied to the milestones, at which progress is reported against verifiable states from criterion 2 rather than as narrative.
- What good looks like: Six months in, the project can reconstruct why its dates are what they are, and its sponsors were never surprised by a change they had not watched approach through the triggers.
- What bad looks like: The plan is a file that gets edited in place until nobody can say what was originally promised, which is how organizations end up unable to forecast: they deleted their own reference class.

## Scoring

This rubric gives no numeric score. Each criterion receives one verdict:

- **Ready**: the plan meets this criterion; commitments can be made on this front.
- **Needs work**: the criterion is attempted but a specific gap endangers the commitment. The finding names the gap, where it will bite, and the fix.
- **Missing**: the plan makes no attempt at this criterion (no outside view of any kind, no dependency register, no change mechanism), or the attempt is so thin it cannot carry weight.
- **Not judged**: context the plan's judgability depends on (see Context requests) was not supplied, and no honest verdict exists without it.

Overall verdict, stated once at the top, in exactly one of these forms:

- **Ready to commit**: no criterion below Ready except at most one Needs work, and nothing Not judged on the estimation or ownership criteria.
- **Commit after fixes**: any other combination short of the line below; the fixes are the difference between this plan and a believable one, and committing first and fixing later reliably produces the later without the fixes.
- **Not ready to commit**: any criterion Missing on Estimates take the outside view or Risks, assumptions, issues, and dependencies are kept as a living register. In this state the plan is an intention with dates attached, and the dates will be quoted by stakeholders long after the intention is forgotten.

## Output format

Return the review in this structure, in Markdown:

1. **Verdict: [Ready to commit / Commit after fixes / Not ready to commit]**, with one sentence of reason, a line stating where the plan's dates were said to come from, and a line listing any criteria marked Not judged with their missing context.
2. One section per criterion, in the order above, with its verdict and findings tied to specific milestones, dates, estimates, and register entries in the plan.
3. A closing section, **Before anyone commits**, in priority order: estimation basis and RAID fixes first, then the critical path and ownership, then the change mechanism.

Example of a finding at the standard this rubric expects:
- Acceptable: "Missing: the integration phase is estimated at three weeks with no stated basis, and the plan's own dependency list makes it the start of the critical path. The team's last two integrations took six and nine weeks. Either the estimate adopts that reference class and the date moves, or the plan states the specific differences it is relying on, so the disagreement is visible now instead of in week five."
- Not acceptable: "The timeline seems optimistic." (It names no estimate, no basis, and no repair.)

## Honesty rules

- Judge the plan, not the project and not the planners. A well-built plan for a doomed project is still a well-built plan, with any strategic doubt stated once in the verdict.
- Do not substitute your own estimates. Where the reviewer believes a duration is wrong, the finding is the absent or weak basis and the reference class that contradicts it, never a confident replacement number, which would repeat the inside view with a different author.
- Do not reward false precision. A range with a stated confidence outranks a single date with none, and a plan that admits an estimate is unprecedented earns more credit than one that borrows the formatting of certainty.
- Do not let a beautiful register format substitute for live content. RAID judged on currency, movement, and ownership, not on the template's completeness.
- Where the plan's dates were imposed rather than estimated, judge the plan on how honestly it handles that fact (what it protects, what it flags, what it refuses to promise) rather than penalizing it for the imposition, and say in the report that the dates were imposed.

## Sources

The estimation discipline in criterion 3 follows reference class forecasting: Bent Flyvbjerg and Dan Gardner, "How Big Things Get Done" (2023), building on Daniel Kahneman and Amos Tversky's work on the planning fallacy and the outside view; the method anchors a forecast in the actual outcomes of a reference class of similar projects, adjusting only for specific differences. The register in criterion 5 follows the RAID convention of standard project management practice (risks, assumptions, issues, and dependencies), as documented in the Project Management Institute's practice literature and the standard practitioner references (for example, Smartsheet's RAID guide), including the discipline that the register is reviewed on a fixed cadence and that risks, potential, and issues, already real, are tracked as different things. Critical path scheduling is long-standing project management practice originating with the critical path method of the late 1950s. The verdict scale, output format, and honesty rules are the rubric author's own, written for ProductRubric. This rubric is not affiliated with or endorsed by Flyvbjerg, Gardner, or the Project Management Institute, and no text from those sources is reproduced.
