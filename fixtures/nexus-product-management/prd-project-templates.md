# Project Templates - Product Requirements Document | Prepared by Marcus Webb

### Summary

Admins setting up a new Nexus project repeat the same work every time: the same task lists, the same starter docs, the same role setup. Project Templates lets an admin create a project from a template, and save an existing project as a template, so a team's proven setup becomes the starting point instead of a blank page. This document covers the first version.

### Problem

In the day-30 onboarding survey, setup time is the most common stall point new admins name, and workspace admins who start from a blank project invite their first teammate later than admins who copy an existing project. Teams have asked for templates in support conversations for two quarters. The full problem statement is a separate document (Problem Statement: New admins stall before their first invitation).

### Goals

|Goal|Success Metric|
|---|---|
|Shorten time from workspace creation to a working project|Median time from signup to a project with 5 or more tasks falls from 3 days to 1 day within two quarters of launch|
|Raise first-month activation for new workspaces|More new admins invite a teammate in their first week|
|Make proven setups reusable|At least 25% of new projects are created from a template within six months of launch|

### Scope

In scope:

- Creating a project from a template: tasks (with relative due dates), docs, and default member roles
- Saving an existing project as a template, within the same workspace
- Five starter templates written by the Nexus team (product launch, sprint starter, content calendar, hiring pipeline, event plan)

Out of scope:

- A public template gallery or marketplace
- Automations inside templates (a later version)
- Templates for docs outside projects

### Requirements

|#|Requirement|Notes|
|---|---|---|
|R1|An admin can create a project from any template they can access, in no more steps than creating a blank project takes today plus one|Template picker appears in the new-project flow|
|R2|Creating from a template copies its tasks, docs, and default role assignments; relative due dates shift to the creation date|Member assignments are copied as roles, not as named people|
|R3|An admin can save a project they administer as a template, choosing which parts to include|Tasks, docs, and roles are independently optional|
|R4|A template can be edited after creation without changing projects already made from it|Projects are copies, not links|
|R5|The template picker will be a modal with a swipeable carousel of template cards, each with a preview image|Design has the carousel pattern from the mobile homepage work|
|R6|Templates should feel fast to create from|Test with the five starter templates before launch|
|R7|An admin can submit a template to the community gallery from the template's menu|Gallery moderation is owned by the community team|

### Dependencies

- The permissions update (roles as project defaults) must ship first; templates store default roles in its format.
- The new-project flow is owned by the onboarding team, whose current sprint ends November 6, 2026.

### Open Questions

- Whether templates can include member assignments by name before the permissions update ships. TBD.
- Whether a copied doc keeps its comments. Proposed: no, comments do not copy.
- Pricing: whether templates are a Pro feature or available on all plans. Decision needed from the pricing review on November 10, 2026.

### Timeline

|Milestone|Date|
|---|---|
|Requirements freeze|October 30, 2026|
|Build complete|November 20, 2026|
|Launch to all workspaces|December 4, 2026|
