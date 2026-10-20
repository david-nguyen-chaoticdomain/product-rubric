# ProductRubric

Open AI UX audit and design evaluation rubrics for product teams.

ProductRubric is a library of evaluation rubrics written as plain Markdown files. Each file carries the criteria, the scoring scale, the exact output format, and the honesty rules for one kind of review. Your own AI assistant reads the file and applies it to your design, so the same rubric produces the same shape of review in Claude, ChatGPT, Cursor, or any other tool that can read text.

There is no AI in this repository, no API key to configure, and nothing to upload. Your screenshots and files stay in your own chat, with your own AI provider.

DESIGN.md tells an AI how to create the design. PRODUCTRUBRIC.md tells an AI how to judge it.

## Three ways to use it

1. **Use the files directly.** Open a rubric from `rubrics/`, give it to your AI assistant along with the thing you want reviewed (a screen, a board, a study plan, a questionnaire, a readout), and ask for the evaluation. This works today, with no setup.
2. **Install the Skills.** Each rubric also ships as an installable Skill in `skill/`, one folder per rubric, so your assistant can pick the right evaluation on its own when you describe the design you want reviewed. Install the whole pack or take a single skill.
3. **Connect the MCP server.** The server in `mcp/` serves the same rubric files to any MCP client through three tools, `list_rubrics`, `get_rubric`, and `about`. Run it locally against your own rubrics folder, or use the hosted copy to try the shipped library with no install.

A project can also carry its own `PRODUCTRUBRIC.md` at its root, declaring which rubrics the team uses, which one is the default, and how results should be reported. See this repository's own `PRODUCTRUBRIC.md` for the shape.

## Which AI should you use?

For the product design rubrics, your AI needs to be able to see images. That is the normal case, and it is what the rubrics are written for. A text-only AI can only judge from a written description of the design, and the rubrics treat that as a lesser input and say so in the results. The product research rubrics judge documents (plans, questionnaires, reports), so any AI that reads text can run them. Beyond that: Simple rubrics run well on any current model, Standard rubrics are best on a current mid-tier model or better, and Deep rubrics reward a frontier model, the current top tier from OpenAI, Anthropic, or Google.

## A note on results

A rubric standardizes the questions, the criteria, and the shape of the report. It cannot standardize the judgment inside the answers. What you get depends on the model you run, the material you give it, and the context you supply when it asks. Treat a result as a structured review by a capable reader, not as a measurement, and check the findings yourself before a decision rests on them. The rubrics are written to say what they could not judge; if a report hides its limits, that is a reason to distrust that run, not a reason to trust the rubric less.

Every report also ends with a small summary block: the rubric and its version, the date, the artifact, and the result tallied in the rubric's own terms, criteria at each grade, flaws at each rating, any gate criteria not met. Keep those blocks across runs and you can watch a team's work improve in concrete terms: criteria moving from Missing to Ready, the same gate failing less often, fewer biasing questions per survey. One run is one structured judgment and carries the noise of one. The trend across runs is the signal.

## The library

The library has four categories: product design, with seven rubrics that judge what a team ships; product research, with four that judge how a team learns; product management, with five that judge how a team decides what to build and in what order; and product marketing, with four that judge how a team takes it to market. Twenty rubrics in total.

Product design:

| Rubric | What it does | Level | Status |
| --- | --- | --- | --- |
| Design Principles Score | Scores a screen or flow against seven product design principles, with findings tied to visible elements | Standard | Ready |
| Inclusive Design Audit | Checks a design against five inclusive design principles, four concrete checks each | Standard | Ready |
| Accessibility Review | Reviews what is visible in a screenshot or description against WCAG-derived criteria | Standard | Ready |
| Five Second Test | Predicts what a first-time visitor will remember after a five second view | Simple | Ready |
| Copy Review | Reviews interface copy element by element and suggests revisions at about the same length | Standard | Ready |
| Attention Prediction | Predicts where attention will land on a screen, with the strongest honesty framing in the library | Simple | Ready |
| Design Quality | Reviews a design board against seven quality dimensions, the way a design leader would in a critique | Deep | Ready |

Product research:

| Rubric | What it does | Level | Status |
| --- | --- | --- | --- |
| Study Plan Review | Reviews a study plan before it is fielded: answerable questions, a method that fits them, the right participants | Deep | Ready |
| Survey Review | Reviews a questionnaire question by question and suggests a corrected version of each flawed question | Standard | Ready |
| Findings Review | Audits a research readout claim by claim, so stakeholder decisions rest on evidence rather than on summaries of it | Standard | Ready |
| Competitive Analysis Review | Reviews a competitive analysis: whether the right competitors are in the set, the evidence is first-hand and dated, and strengths are reported honestly | Standard | Ready |

Product management:

| Rubric | What it does | Level | Status |
| --- | --- | --- | --- |
| PRD Review | Reviews a requirements document before a team builds against it: problem established, scope decidable, success measurable, open questions labeled | Deep | Ready |
| Roadmap Review | Reviews a roadmap for outcome framing instead of feature lists, traceability to strategy, and dates that are honest about their certainty | Standard | Ready |
| Problem Statement Review | Reviews a problem statement: a specific person, evidence it exists, the cost of doing nothing, and no solution smuggled into the framing | Simple | Ready |
| User Story Review | Reviews a user story and its acceptance criteria against the INVEST attributes, with criteria a tester can actually check | Simple | Ready |
| Project Plan Review | Reviews a project plan before a team commits to it: verifiable milestones, estimates that take the outside view, a visible critical path, and a living register of risks, assumptions, issues, and dependencies | Deep | Ready |

Product marketing:

| Rubric | What it does | Level | Status |
| --- | --- | --- | --- |
| Positioning Review | Reviews a positioning document against the five components of effective positioning: real competitive alternatives, actually unique attributes, value with proof, a specific best-fit customer, and a category that was chosen rather than defaulted into | Standard | Ready |
| Messaging Review | Reviews a messaging document: whether it leads with an insight instead of the product, lets the differentiated value carry the hierarchy, attaches proof to its claims, and closes with a specific ask | Standard | Ready |
| Launch Plan Review | Reviews a launch plan: the tier named and the effort matched to it, every audience with a message and a moment, internal teams enabled before launch day, and risk, rollback, and a slipping date planned for | Deep | Ready |
| Battlecard Review | Reviews a competitive battlecard: claims about the competitor sourced and dated, their strengths stated honestly, why we win and why we lose both covered, and talk tracks a rep can use in the middle of a call | Simple | Ready |

The `fixtures/` folder holds fictional product material made for this repository: Nexus marketing pages and app screens, two study plans written in the maintainer's own test plan formats, and a project brief, each folder with a brief and an answer key of the problems deliberately present. They give new users something to run a rubric against immediately, and they let maintainers check that a rubric edit still catches what it should.

## Write your own

A rubric is one Markdown file in the format described in `FORMAT.md`. Start from `rubrics/_template.md`, write the criteria in your own words, and put the file in a category folder. Your own rubrics work with the same tools as the shipped ones, because the format is the interface.

Contributions are welcome. See `CONTRIBUTING.md` for what a good contribution looks like: one rubric file, one worked example, and your own writing only.

## Licenses

The code in this repository (the MCP server and the scripts) is released under the Apache License 2.0; see `LICENSE` and `NOTICE`. The rubric files, examples, and documentation are released under CC BY 4.0; see `LICENSE-CONTENT.md`. Credit the author named in each file when you reuse its text.

## Maintainer

ProductRubric is created and maintained by [David Nguyen](https://davidnguyen.com/), founder of [User Sage](https://usersage.com/), a user research and usability testing platform, and maker of [Design Sage](https://designsage.app/), an AI design review tool for Figma.
