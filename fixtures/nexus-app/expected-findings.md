# Expected findings: Nexus app screens

The answer key for the Design Principles Score worked example (`examples/product-design/design-principles-score.md`), which scores `app-01-workspace.png`. A competent run does not need to match the example's exact scores; it should surface the strengths and issues below and land in the same overall band (mid 70s to low 80s out of 100). Findings about states the screenshot does not show (what happens after a click, error messages, empty states) are out of bounds for this fixture: the rubric judges what is visible.

## app-01-workspace.png

Strengths a run should find:

- Current state is readable everywhere: the "On track" pill, "18 of 24 tasks complete" in the project meta and again as "18 / 24 tasks, 75%" with a progress bar in the Launch readiness card, member presence stated in words ("Active now," "Active 20 min ago"), and the latest activity narrated as a sentence at the bottom.
- Roles are explained in plain language at the point of need: the Project access card defines Project admin, Editor, and Viewer in everyday words next to the member list, with a "Learn about permissions" link.
- One accent color (indigo) carries selection, the primary action, links, and progress consistently, and status pills use one treatment for active and on-track states.

Issues a run should find:

- "On track" is asserted with no visible basis: nothing on this tab shows what the claim is computed from or when it was last true, so the screen's most consequential piece of feedback cannot be checked from the screen.
- The actions that change access are hidden behind an unlabeled "..." menu on each member row. Nothing on the screen shows how to change a role or remove a member, and no safeguard or consequence is visible for doing so. This is the screen's weakest area (user control, error prevention).
- The smallest, palest text on the screen carries safety and freshness information: the lock note under the member table ("Only project members can access tasks and documents"), the presence timestamps, and the breadcrumb. The feedback is present but set at the lowest contrast on the page.
- SaaS vocabulary does quiet work: "8 of 12 seats" in the Pro plan card, and the Workspace admin / Project admin pair, which the explainer card has to disambiguate.

## app-03-invite-populated.png

Not scored by the worked example. For runs that use it, a competent pass should notice:

- The dialog prevents errors by design: the role picker explains the selected role's powers in place ("Editors can create and edit tasks and documents. They cannot manage members or project settings."), the flow is two steps with a Review invitation step before anything is sent, and "Step 1 of 2 · Details" keeps the user oriented.
- The project is prefilled from context (Website launch), so the user confirms rather than recalls.
- The dialog inherits the workspace screen's muted background treatment, which lowers the contrast of everything behind it; a run may note that the underlying member list stays half-legible rather than fully dismissed.
