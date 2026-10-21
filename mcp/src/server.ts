/**
 * The ProductRubric MCP server.
 *
 * Tools:
 * - list_rubrics: discover the rubrics in the library (id, name,
 *   category, summary, scale, level), optionally filtered by category.
 * - get_rubric: the full text of one rubric file, exactly as written,
 *   for the calling AI to apply.
 * - about: the server's identity card (name, version, author, licenses,
 *   library counts, links), so questions like "who made this?" are
 *   answered by the server rather than guessed by the model.
 *
 * Prompts: ready-made starting points (apply a rubric, review a
 * survey, critique a design board, author a new rubric) that clients
 * can surface to users.
 *
 * Resources: every rubric is also exposed as a resource at
 * rubric://<id>, for clients that let users attach material directly.
 *
 * The server holds no user data, requires no key, and never receives the
 * material being evaluated: evaluation happens in the caller's own chat.
 */

import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { Library } from "./library.js";

export const SERVER_NAME = "product-rubric";
export const SERVER_VERSION = "1.0.0";

export const ABOUT = {
  name: "ProductRubric",
  server_version: SERVER_VERSION,
  format_version: "1",
  description:
    "An open library of evaluation rubrics for product teams: " +
    "rubrics for AI UX audits and design evaluation in product design; " +
    "for study plans, surveys, findings, and competitive analysis in UX research; " +
    "for PRDs, roadmaps, problem statements, user stories, and project plans in product management; " +
    "and for positioning, messaging, launch plans, and battlecards in marketing.",
  author: "David Nguyen",
  author_url: "https://davidnguyen.com/",
  repository: "https://github.com/productrubric/product-rubric",
  website: "https://productrubric.com/",
  licenses:
    "Server code: Apache License 2.0. Rubric content: CC BY 4.0, credit the author named in each file.",
  also_by_the_author:
    "User Sage (https://usersage.com/), a user research and usability testing platform, and Design Sage (https://designsage.app/), an AI design review tool for Figma.",
};

const INSTRUCTIONS = [
  "ProductRubric is an open library of evaluation rubrics for product teams, created and maintained by David Nguyen (https://davidnguyen.com/), founder of User Sage and maker of Design Sage. This server is product-rubric version " +
    SERVER_VERSION +
    ", serving format version 1.",
  "How to work: call list_rubrics to see the available rubrics, then get_rubric to fetch one rubric's full text, then apply that rubric exactly as written to the material the user provides (a screen, a board, a study plan, a questionnaire, a readout). Each rubric defines its own criteria, scoring, output format, and honesty rules. Follow them as given. Do not merge two rubrics into one report, do not soften a rubric's honesty rules, and do not invent criteria the rubric does not contain. Where a rubric is based on a published framework or standard, that framework is its author's; the rubric file credits it.",
  "Back-and-forth: some rubrics (level: deep, and any rubric with a Context requests section) ask for context the artifact alone does not carry, such as the goal of the piece, its audience, or the decision a study feeds. When a rubric asks for context, ask the user for it, in one grouped round, before judging, and proceed with the rubric's not-judged rules for anything the user cannot supply. Context can be supplied in conversation; evidence cannot, and anything judged from a description rather than the artifact itself must be flagged as such, as the rubrics specify.",
  "Identity questions: if the user asks who made this, what version this is, or what ProductRubric is, answer from the about tool rather than guessing. Each rubric file carries its own version and, where it is based on a published source, its attribution; preserve that attribution when you report results.",
  "The server is read-only and holds no user data. The material being evaluated never passes through it; your evaluation happens here, in this conversation.",
].join("\n\n");

export function buildServer(library: Library): McpServer {
  const server = new McpServer(
    {
      name: SERVER_NAME,
      version: SERVER_VERSION,
      title: "ProductRubric",
      description: ABOUT.description,
      websiteUrl: ABOUT.repository,
    },
    { instructions: INSTRUCTIONS },
  );

  // ---------------------------------------------------------------- tools

  server.registerTool(
    "list_rubrics",
    {
      title: "List rubrics",
      description:
        "List the evaluation rubrics available in the ProductRubric library. " +
        "Returns each rubric's id, name, category, summary, when to use it, its scale, and its level " +
        "(simple, standard, or deep). Pass a category (for example, product-design or ux-research) to filter.",
      inputSchema: {
        category: z
          .string()
          .optional()
          .describe("Optional category name to filter by."),
      },
      outputSchema: {
        count: z.number(),
        rubrics: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            category: z.string(),
            version: z.string(),
            summary: z.string(),
            when_to_use: z.string(),
            inputs: z.string(),
            scale: z.string(),
            level: z.string(),
            author: z.string().optional(),
            author_url: z.string().optional(),
          }),
        ),
      },
      annotations: {
        readOnlyHint: true,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ category }) => {
      const rubrics = library.list(category);
      const payload = { count: rubrics.length, rubrics };
      return {
        content: [
          { type: "text", text: JSON.stringify(payload, null, 2) },
        ],
        structuredContent: payload,
      };
    },
  );

  server.registerTool(
    "get_rubric",
    {
      title: "Get a rubric",
      description:
        "Get the full text of one ProductRubric rubric file by its id, exactly as written: " +
        "frontmatter, criteria, scoring, output format, and honesty rules. Apply it as given.",
      inputSchema: {
        id: z
          .string()
          .describe("The rubric id, as returned by list_rubrics."),
      },
      annotations: {
        readOnlyHint: true,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ id }) => {
      const rubric = library.get(id);
      if (!rubric) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `Unknown rubric id "${id}". Available ids: ${library.ids().join(", ")}`,
            },
          ],
        };
      }
      return { content: [{ type: "text", text: rubric.text }] };
    },
  );

  server.registerTool(
    "about",
    {
      title: "About ProductRubric",
      description:
        "The server's identity card: what ProductRubric is, its version, who made it, its licenses, " +
        "how many rubrics the library holds, and its links. Use it to answer questions about the " +
        "server or the library itself (who made this, what version, what is this) instead of guessing.",
      inputSchema: {},
      annotations: {
        readOnlyHint: true,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async () => {
      const all = library.list();
      const byCategory: Record<string, number> = {};
      const byLevel: Record<string, number> = {};
      for (const f of all) {
        byCategory[f.category] = (byCategory[f.category] ?? 0) + 1;
        byLevel[f.level] = (byLevel[f.level] ?? 0) + 1;
      }
      const payload = {
        ...ABOUT,
        rubrics: { total: all.length, by_category: byCategory, by_level: byLevel },
      };
      return {
        content: [
          { type: "text", text: JSON.stringify(payload, null, 2) },
        ],
        structuredContent: payload,
      };
    },
  );

  // -------------------------------------------------------------- prompts

  server.registerPrompt(
    "apply_rubric",
    {
      title: "Apply a rubric",
      description:
        "Run one ProductRubric rubric against material the user provides.",
      argsSchema: {
        rubric_id: z
          .string()
          .describe("The rubric id, as returned by list_rubrics."),
        material: z
          .string()
          .describe(
            "What is being evaluated: describe it here, or say what the user will attach or paste.",
          ),
      },
    },
    async ({ rubric_id, material }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text:
              `Use the get_rubric tool to fetch the ProductRubric rubric "${rubric_id}", ` +
              `then apply it exactly as written to the following material. Follow the rubric's ` +
              `criteria, scoring, output format, and honesty rules as given, including any context ` +
              `it asks you to request from me before judging.\n\nMaterial: ${material}`,
          },
        },
      ],
    }),
  );

  server.registerPrompt(
    "review_a_survey",
    {
      title: "Review a survey",
      description:
        "Review a questionnaire with the ProductRubric Survey Review rubric.",
      argsSchema: {
        questionnaire: z
          .string()
          .describe("The questionnaire text, or a note that the user will paste it."),
      },
    },
    async ({ questionnaire }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text:
              `Use the get_rubric tool to fetch the ProductRubric rubric "survey-review", ` +
              `then review this questionnaire with it, exactly as the rubric specifies, including ` +
              `a suggested revision for every flawed question.\n\nQuestionnaire: ${questionnaire}`,
          },
        },
      ],
    }),
  );

  server.registerPrompt(
    "critique_a_design_board",
    {
      title: "Critique a design board",
      description:
        "Review a multi-frame design board with the ProductRubric Design Quality rubric.",
      argsSchema: {
        board: z
          .string()
          .describe(
            "Describe the board (frames in reading order, any rationale on it), or say what the user will attach.",
          ),
      },
    },
    async ({ board }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text:
              `Use the get_rubric tool to fetch the ProductRubric rubric "design-quality", ` +
              `then review this design board with it. The rubric asks for context before judging ` +
              `(the goal of the piece, its audience, its constraints, and any brief or research notes ` +
              `not on the board); ask me for whatever of that is missing, in one grouped round, before ` +
              `you score anything.\n\nBoard: ${board}`,
          },
        },
      ],
    }),
  );

  server.registerPrompt(
    "author_a_rubric",
    {
      title: "Author a rubric",
      description:
        "Write a new rubric for the ProductRubric library, in the shared format, with AI help: interview, draft, self-check, worked example, and submission links.",
      argsSchema: {
        idea: z
          .string()
          .describe(
            "What the new rubric should review, and any framework it should be based on, if known.",
          ),
      },
    },
    async ({ idea }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text:
              `Help me write a new rubric for the ProductRubric library, in the library's shared format, ready to submit as a pull request. The rubric I have in mind: ${idea}\n\n` +
              `Work in this order, and finish each step before starting the next.\n\n` +
              `1. Interview me, in one grouped round of questions: what artifact the rubric reviews (a screen, a document, a plan); the moment it is run, and by whom; whether it is based on a published framework or is original. If it is based on a framework, get the exact source: its title, its author, and its URL. Before drafting, call the list_rubrics tool and check the library does not already have a rubric that does this job; if it does, tell me and ask whether mine should differ or stop here.\n\n` +
              `2. Draft the rubric file to this specification. The file name is the rubric's id in lowercase kebab-case, and it will live at rubrics/<category>/<id>.md. The file opens with frontmatter carrying these fields: name; category (one of product-design, ux-research, product-management, marketing); version (1.0 for a new rubric); summary (one or two plain sentences on what the rubric judges); when_to_use; inputs (what the reviewer needs to be given); scale (the scale the report uses, in words); level (one of simple, standard, deep); author and author_url (me). When the rubric is based on a published framework, add source, source_author, and source_url. Immediately after the frontmatter, put this line exactly: <!-- source: mcp -->. Then the body, with these sections in this order: Purpose (what the rubric judges and the moment it is for); Criteria (one subsection per criterion, each with an opening line, then what to examine, what good looks like, and what bad looks like, all concrete enough for an AI to judge without guessing); Scoring (choose one pattern that fits the work: verdicts per criterion, severity ratings, a numeric score, or no score, and define every level in words); Output format (the shape of the report, which must end with a block headed "Rubric summary" holding the rubric name and version, the date, the artifact reviewed, one line per criterion with its verdict, and a result line, all derived from the review above it with no new judgment); Honesty rules (judge only what the material shows, say plainly what cannot be judged from it, and never invent facts about the artifact). When source_url is set, add a Sources section crediting the framework in my own words, linking the original, and stating that this rubric is not affiliated with or endorsed by the source. Write everything in my own words throughout: never copy a source's definitions, explanations, or examples.\n\n` +
              `3. Self-check the draft against the same rules the repository's validator runs, and fix anything that fails before showing me the file: the file name is lowercase kebab-case; every frontmatter field above is present; level is simple, standard, or deep; the category matches the folder the file will live in; the five required sections are present in the order given; a Sources section is present whenever source_url is set.\n\n` +
              `4. Produce the worked example, which every submission needs: run the finished draft against material I supply, or realistic sample material we write together and label as sample material. Keep the output as the rubric produces it, including the Rubric summary block. The example file will live at examples/<category>/<id>.md and opens with lines naming the input it ran on, the rubric and its version, and the model that produced it.\n\n` +
              `5. Finish by giving me both files in full, then the submission links. Build each link as https://github.com/productrubric/product-rubric/new/main?filename=<the file path>&value=<the file content, URL-encoded>. I open the rubric link first, which creates the file in my fork on a new branch, then the example link, which adds the second file to the same branch, then I open the pull request against main. Tell me the repository runs the validator as a check on the pull request and that the maintainer reviews every submission. If you are running in a tool that can use the GitHub CLI, you may create the branch, both files, and the pull request directly instead; keep the <!-- source: mcp --> line in the rubric file either way, because a workflow reads it and labels the pull request with where the submission came from. There is also a no-editor route: the submission helper at https://submit.productrubric.com/handoff takes the two files pasted in, signs me in with GitHub, and opens the pull request under my account in one click. Offer it when I would rather not drive GitHub's file editor.`,
          },
        },
      ],
    }),
  );

  // ------------------------------------------------------------ resources

  server.registerResource(
    "rubric",
    new ResourceTemplate("rubric://{id}", {
      list: async () => ({
        resources: library.list().map((f) => ({
          uri: `rubric://${f.id}`,
          name: `${f.name} (ProductRubric rubric)`,
          description: f.summary,
          mimeType: "text/markdown",
        })),
      }),
    }),
    {
      title: "ProductRubric rubric",
      description:
        "One rubric file from the ProductRubric library, exactly as written.",
      mimeType: "text/markdown",
    },
    async (uri, variables) => {
      const id = String(variables.id);
      const rubric = library.get(id);
      if (!rubric) throw new Error(`Unknown rubric id "${id}"`);
      return {
        contents: [
          { uri: uri.href, mimeType: "text/markdown", text: rubric.text },
        ],
      };
    },
  );

  return server;
}
