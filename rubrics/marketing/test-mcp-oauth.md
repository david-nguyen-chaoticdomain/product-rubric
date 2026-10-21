---
name: Test MCP OAuth
category: marketing
version: 1.0.0
summary: A throwaway rubric that exists only to prove the MCP submit path works end to end.
when_to_use: Never in production. This file is a flow test and will be closed unmerged.
inputs: A piece of marketing copy to check.
scale: Pass or needs work per criterion.
level: simple
author: David Nguyen
---

## Purpose
Prove that an MCP client can submit a rubric and a worked example after a GitHub sign-in, and that the submission opens a pull request under the sign-in account.

## Criteria
1. The submission contains both files.
2. The pull request opens under the account that signed in.

## Scoring
Each criterion is pass or needs work. There is no total score.

## Output format
A short list of the criteria with a verdict for each, ending with the Rubric summary block.

## Honesty rules
- This is a test artifact, not a real rubric.
- Do not merge the pull request it arrives in.
