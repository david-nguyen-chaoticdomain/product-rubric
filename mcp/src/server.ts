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
 * survey, critique a design board) that clients can surface to users.
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
    "for study plans, surveys, findings, and competitive analysis in product research; " +
    "for PRDs, roadmaps, problem statements, user stories, and project plans in product management; " +
    "and for positioning, messaging, launch plans, and battlecards in product marketing.",
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
        "(simple, standard, or deep). Pass a category (for example, product-design or product-research) to filter.",
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
