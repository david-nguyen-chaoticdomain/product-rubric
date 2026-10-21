# Contributing to ProductRubric

Thank you for considering a contribution. The library grows one rubric at a time, and the bar is that every rubric in it can be trusted to produce a careful, honest evaluation.

## What a contribution is

A contribution is a pull request that adds:

1. One rubric file in a category folder under `rubrics/`, written in the format described in `FORMAT.md`. Start from `rubrics/_template.md`.
2. One worked example in the matching folder under `examples/`, produced by running your rubric against a fixture from `fixtures/` (or against a screen of your own, with the input described at the top of the example) and keeping the output as the rubric produced it.

You do not have to write the files by hand. The builder at productrubric.com/create produces both files from a form, and the library's MCP server offers an author_a_rubric prompt that walks your own AI assistant through drafting, self-checking, and preparing the same two files. Files started either way carry a small source marker (an HTML comment naming the route), and a workflow labels the pull request to match, so the maintainer can see how each submission was made. The review is the same however the files were drafted.

Adding a rubric to an existing category is the easy path. A new category folder is a bigger step, because categories define what the library is about; open an issue to talk it through with the maintainer before writing the rubric.

## The writing rule

Contribute only your own writing.

Public methods, principle lists, and rating scales are ideas, and you may build a rubric on them. The words used to explain them belong to whoever wrote them, so describe the method in your own words, credit the source in the rubric's frontmatter and in its Sources section, and never paste a source's definitions, explanations, or examples into your file. Do not name a rubric after a person or an organization in a way that suggests they endorse it.

Each contributor is responsible for their own file. Rubric text you contribute is published under CC BY 4.0 with you named as its author; see `LICENSE-CONTENT.md`.

## Rubrics based on a published framework

Some rubrics adapt a framework that someone else published, such as a set of usability heuristics or a published design method. Those rubrics are welcome here, including the ones the maintainer writes, and they follow the same writing rule, with two additions.

The file carries two different credits, because they mean two different things. The `author` fields name whoever wrote the rubric file in this repository, and that rubric text is theirs to publish under CC BY 4.0. The `source_author`, `source_title`, and `source_url` fields name the person or organization whose published framework the rubric is based on, and the file's Sources section credits them and links the original publication. The framework itself remains its author's. Licensing the rubric text under CC BY 4.0 does not license the underlying method, and the Sources section says so.

Check the source's own terms before writing the rubric. Some publishers expressly invite reuse with credit, and others restrict it. Never copy the source's definitions, explanations, or examples, and never name or present the rubric in a way that suggests the source author endorses it.

## Before you open the pull request

- Run the validation script (`scripts/validate.mjs`) and fix what it reports. It checks that the frontmatter is complete, that the category matches the folder, and that all five required sections are present in order.
- Read your criteria once as if you were the AI: could you judge a screen from what is written, without guessing what the author meant? If a level of your scale or a line in your output format needs interpretation, tighten the words until it does not.
- Check your honesty rules against your criteria. Every claim your scoring implies should be a claim your honesty rules allow.

## What review looks for

The maintainer reviews for three things: the format is followed, the criteria are concrete enough to judge consistently, and the honesty rules are strong enough for the claims the rubric makes. Expect questions about wording rather than about taste; in a rubric, the wording is the product.

## Governance

ProductRubric is maintainer-led. The community proposes, and the maintainer decides.

Anyone can open an issue or a pull request, including a proposal to change the format or another part of the core. A proposal starts a discussion; it is not a decision. Nothing enters the library or the format until the maintainer accepts and merges it, and only maintainers can merge.

The core, meaning FORMAT.md, the template, the validation rules, and the licenses, changes the most slowly by design. Contributions add rubric files, and adding a rubric never requires a core change, so the core is never the bottleneck for contributing.

Anyone may fork this repository under its licenses and develop their fork under their own rules. A fork is not ProductRubric: the name, the GitHub organization, and the canonical library stay with the maintainer, so people can experiment freely without moving the standard everyone else relies on.
