/**
 * The ProductRubric submission helper, served by the same Worker as the
 * MCP server on the submit.productrubric.com hostname (attached as a
 * custom domain separately; until then these routes are unreachable).
 *
 * What it does: lets a visitor sign in with GitHub (OAuth, app
 * "ProductRubric Submit", owned by the productrubric org) and submit a
 * rubric they made, so the pull request opens under their own account
 * without them having to drive GitHub's file editor. The visitor's
 * access token arrives per request (in the Authorization header for
 * /submit, or straight from the OAuth exchange in the callback), is
 * used for that one job, and is never stored or logged.
 *
 * Routes:
 * - GET  /              a short explanation page
 * - GET  /auth/start    begin sign-in (?next=builder|handoff)
 * - GET  /auth/callback finish sign-in, hand the token back by URL
 *                       fragment to the builder or the handoff page
 * - GET  /handoff       paste-your-files page for the MCP route: the
 *                       visitor's AI prepared two files; here they
 *                       review them, sign in, and submit
 * - POST /submit        { rubricPath, rubricContent, examplePath,
 *                       exampleContent, title, body? } with the
 *                       visitor's token -> fork, branch, two commits,
 *                       pull request; answers { ok, prUrl }
 *
 * Inert until configured: without GITHUB_CLIENT_ID and
 * GITHUB_CLIENT_SECRET in the Worker's environment, the auth routes
 * answer 503 and /submit answers that sign-in is not set up.
 */

export interface SubmitEnv {
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
}

const UPSTREAM = "productrubric/product-rubric";
const REPO_NAME = "product-rubric";
const CALLBACK = "https://submit.productrubric.com/auth/callback";
const BUILDER_URL = "https://productrubric.com/create";
const SCOPE = "public_repo";
const MAX_FILE_CHARS = 200_000;

const RUBRIC_PATH = /^rubrics\/[a-z0-9-]+\/[a-z0-9-]+\.md$/;
const EXAMPLE_PATH = /^examples\/[a-z0-9-]+\/[a-z0-9-]+\.md$/;

// ---------------------------------------------------------------- helpers

function b64utf8(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(bin);
}

function cookies(request: Request): Record<string, string> {
  const out: Record<string, string> = {};
  const raw = request.headers.get("cookie") ?? "";
  for (const part of raw.split(";")) {
    const eq = part.indexOf("=");
    if (eq > 0) out[part.slice(0, eq).trim()] = decodeURIComponent(part.slice(eq + 1).trim());
  }
  return out;
}

function text(body: string, status = 200): Response {
  return new Response(body, {
    status,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

function page(title: string, inner: string, status = 200): Response {
  return new Response(
    `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}: ProductRubric Submit</title>
<style>
  body { margin: 0; background: #fffdf7; color: #191817; font-family: "Hanken Grotesk", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.65; }
  main { max-width: 720px; margin: 0 auto; padding: 64px 28px 80px; }
  h1 { font-family: Georgia, "Times New Roman", serif; font-weight: 600; font-size: 34px; line-height: 1.15; margin: 0 0 18px; }
  p { margin: 0 0 16px; }
  label { display: block; font-weight: 600; margin: 22px 0 6px; }
  input[type="text"] { width: 100%; box-sizing: border-box; padding: 9px 11px; border: 1px solid #191817; background: #fff; font: inherit; }
  textarea { width: 100%; box-sizing: border-box; min-height: 130px; padding: 9px 11px; border: 1px solid #e4ded2; background: #fff; font: 13px/1.5 ui-monospace, Menlo, Consolas, monospace; }
  button, .button { display: inline-block; background: #191817; color: #fffdf7; border: 1px solid #191817; padding: 10px 18px; font: inherit; font-weight: 700; text-decoration: none; cursor: pointer; }
  button[disabled] { opacity: .45; cursor: default; }
  .note { color: #6b6660; font-size: 14.5px; }
  .err { color: #9e2a2b; font-weight: 600; }
  code { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: .92em; }
</style>
</head>
<body>
<main>
${inner}
</main>
</body>
</html>`,
    { status, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

// ------------------------------------------------------------- validation

export interface Submission {
  rubricPath: string;
  rubricContent: string;
  examplePath: string;
  exampleContent: string;
  title: string;
  body?: string;
}

export function validateSubmission(input: unknown): Submission | string {
  if (typeof input !== "object" || input === null) return "The submission was not an object.";
  const o = input as Record<string, unknown>;
  const rubricPath = o.rubricPath, examplePath = o.examplePath;
  const rubricContent = o.rubricContent, exampleContent = o.exampleContent;
  if (typeof rubricPath !== "string" || !RUBRIC_PATH.test(rubricPath))
    return "The rubric file path must look like rubrics/<category>/<rubric-id>.md.";
  if (typeof examplePath !== "string" || !EXAMPLE_PATH.test(examplePath))
    return "The example file path must look like examples/<category>/<rubric-id>.md.";
  if (rubricPath.split("/")[1] !== examplePath.split("/")[1])
    return "The rubric and the example must be in the same category.";
  if (rubricPath.split("/")[2] !== examplePath.split("/")[2])
    return "The rubric and the example must use the same file name.";
  if (typeof rubricContent !== "string" || rubricContent.trim().length < 50)
    return "The rubric file looks empty.";
  if (typeof exampleContent !== "string" || exampleContent.trim().length < 50)
    return "The worked example looks empty.";
  if (rubricContent.length > MAX_FILE_CHARS || exampleContent.length > MAX_FILE_CHARS)
    return "One of the files is larger than this helper accepts.";
  const id = rubricPath.split("/")[2].replace(/\.md$/, "");
  const title = typeof o.title === "string" && o.title.trim() ? o.title.trim().slice(0, 120) : `Add the ${id} rubric`;
  const body = typeof o.body === "string" ? o.body.slice(0, 4000) : undefined;
  return { rubricPath, rubricContent, examplePath, exampleContent, title, body };
}

// ------------------------------------------------------------ GitHub flow

type FetchFn = (url: string, init?: RequestInit) => Promise<Response>;

async function gh(
  fetchFn: FetchFn,
  token: string,
  method: string,
  path: string,
  body?: unknown,
): Promise<{ status: number; json: any }> {
  const res = await fetchFn(`https://api.github.com${path}`, {
    method,
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "x-github-api-version": "2022-11-28",
      "user-agent": "productrubric-submit",
      ...(body !== undefined ? { "content-type": "application/json" } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  let json: any = null;
  try {
    json = await res.json();
  } catch {
    /* some answers have no body */
  }
  return { status: res.status, json };
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * The whole submission dance, with fetch injected for testing:
 * fork (creating and waiting if needed), branch, two commits, PR.
 * Returns the pull request URL.
 */
export async function submitToGitHub(
  fetchFn: FetchFn,
  token: string,
  sub: Submission,
): Promise<string> {
  const me = await gh(fetchFn, token, "GET", "/user");
  if (me.status !== 200 || !me.json?.login) {
    throw new Error("GitHub did not accept the sign-in. Sign in again and retry.");
  }
  const login: string = me.json.login;
  const forkPath = `/repos/${login}/${REPO_NAME}`;

  let fork = await gh(fetchFn, token, "GET", forkPath);
  if (fork.status === 404) {
    const created = await gh(fetchFn, token, "POST", `/repos/${UPSTREAM}/forks`, {});
    if (created.status !== 202) {
      throw new Error("GitHub would not create the fork needed for the submission.");
    }
    for (let i = 0; i < 10 && fork.status !== 200; i++) {
      await sleep(1500);
      fork = await gh(fetchFn, token, "GET", forkPath);
    }
  }
  if (fork.status !== 200) {
    throw new Error("The fork of the library is not ready yet. Wait a moment and retry.");
  }

  // Best effort: bring the fork's main up to date so the branch starts fresh.
  await gh(fetchFn, token, "POST", `${forkPath}/merge-upstream`, { branch: "main" }).catch(() => null);

  const mainRef = await gh(fetchFn, token, "GET", `${forkPath}/git/ref/heads/main`);
  const mainSha: string | undefined = mainRef.json?.object?.sha;
  if (!mainSha) throw new Error("Could not read the fork's main branch.");

  const id = sub.rubricPath.split("/")[2].replace(/\.md$/, "");
  let branch = `add-${id}`;
  let made = false;
  for (let attempt = 1; attempt <= 4 && !made; attempt++) {
    const name = attempt === 1 ? branch : `${branch}-${attempt}`;
    const res = await gh(fetchFn, token, "POST", `${forkPath}/git/refs`, {
      ref: `refs/heads/${name}`,
      sha: mainSha,
    });
    if (res.status === 201) {
      branch = name;
      made = true;
    } else if (res.status !== 422) {
      throw new Error("GitHub would not create the submission branch.");
    }
  }
  if (!made) throw new Error("GitHub would not create the submission branch.");

  const put = async (path: string, content: string, message: string) => {
    const res = await gh(fetchFn, token, "PUT", `${forkPath}/contents/${path}`, {
      message,
      content: b64utf8(content),
      branch,
    });
    if (res.status !== 201) {
      throw new Error(`GitHub would not add ${path} to the submission.`);
    }
  };
  await put(sub.rubricPath, sub.rubricContent, `Add the ${id} rubric`);
  await put(sub.examplePath, sub.exampleContent, `Add the worked example for ${id}`);

  const pr = await gh(fetchFn, token, "POST", `/repos/${UPSTREAM}/pulls`, {
    title: sub.title,
    head: `${login}:${branch}`,
    base: "main",
    body:
      sub.body ??
      "Submitted with the ProductRubric submission helper after signing in with GitHub. The two files were prepared by the contributor, with the builder or their own AI assistant, and the pull request was opened under their account.",
  });
  if (pr.status !== 201 || !pr.json?.html_url) {
    throw new Error("The files were added to the fork, but GitHub would not open the pull request.");
  }
  return pr.json.html_url as string;
}

// -------------------------------------------------------------- auth flow

export function buildAuthorizeUrl(clientId: string, state: string): string {
  const u = new URL("https://github.com/login/oauth/authorize");
  u.searchParams.set("client_id", clientId);
  u.searchParams.set("redirect_uri", CALLBACK);
  u.searchParams.set("scope", SCOPE);
  u.searchParams.set("state", state);
  return u.toString();
}

export async function exchangeCode(
  fetchFn: FetchFn,
  env: SubmitEnv,
  code: string,
): Promise<string> {
  const res = await fetchFn("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: CALLBACK,
    }),
  });
  const json: any = await res.json().catch(() => null);
  if (!json?.access_token) {
    throw new Error("GitHub did not complete the sign-in.");
  }
  return json.access_token as string;
}

// ---------------------------------------------------------------- routing

const HANDOFF_INNER = `
<h1>Submit a rubric your AI helped you write</h1>
<p>Your AI assistant prepared two files: the rubric itself and its worked example. Paste each file's full text below, sign in with GitHub, and this page opens the submission under your own account for the maintainer to review. Nothing is stored here; the files travel from this page to GitHub when you press submit.</p>
<label for="rp">Rubric file path</label>
<input type="text" id="rp" placeholder="rubrics/marketing/my-rubric.md">
<label for="rc">Rubric file</label>
<textarea id="rc" spellcheck="false"></textarea>
<label for="ep">Worked example file path</label>
<input type="text" id="ep" placeholder="examples/marketing/my-rubric.md">
<label for="ec">Worked example file</label>
<textarea id="ec" spellcheck="false"></textarea>
<label for="ti">Submission title</label>
<input type="text" id="ti" placeholder="Add the my-rubric rubric">
<p style="margin-top:26px">
  <a class="button" id="signin" href="/auth/start?next=handoff">Sign in with GitHub</a>
  <button id="go" disabled>Submit the rubric</button>
</p>
<p class="note" id="status">Sign in first; the submit button wakes up once you are back.</p>
<script>
  var token = null;
  if (location.hash.indexOf("#t=") === 0) {
    token = decodeURIComponent(location.hash.slice(3));
    history.replaceState(null, "", location.pathname);
    document.getElementById("go").disabled = false;
    document.getElementById("signin").style.display = "none";
    document.getElementById("status").textContent = "Signed in. Check the two files, then submit.";
  }
  document.getElementById("go").addEventListener("click", async function () {
    var status = document.getElementById("status");
    var body = {
      rubricPath: document.getElementById("rp").value.trim(),
      rubricContent: document.getElementById("rc").value,
      examplePath: document.getElementById("ep").value.trim(),
      exampleContent: document.getElementById("ec").value,
      title: document.getElementById("ti").value.trim()
    };
    status.textContent = "Sending to GitHub. This takes a few seconds while the fork and the submission are prepared.";
    try {
      var res = await fetch("/submit", { method: "POST", headers: { "content-type": "application/json", authorization: "Bearer " + token }, body: JSON.stringify(body) });
      var data = await res.json();
      if (data.ok) {
        status.innerHTML = "Submitted. Your pull request is open: <a href=\\"" + data.prUrl + "\\">" + data.prUrl + "</a>. The maintainer reviews every submission.";
      } else {
        status.innerHTML = "<span class=\\"err\\">" + (data.error || "The submission did not go through.") + "</span>";
      }
    } catch (e) {
      status.innerHTML = "<span class=\\"err\\">The submission did not go through. Check your connection and try again.</span>";
    }
  });
</script>`;

export async function handleSubmitHost(request: Request, env: SubmitEnv): Promise<Response> {
  const url = new URL(request.url);
  const configured = Boolean(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET);

  if (url.pathname === "/" && request.method === "GET") {
    return page(
      "About this helper",
      `<h1>The ProductRubric submission helper</h1>
<p>This small service signs a contributor in with GitHub and opens their rubric submission under their own account. It exists for the <a href="${BUILDER_URL}">rubric builder</a> and for contributors whose AI assistant prepared their files.</p>
<p>It holds no accounts and keeps nothing: a visitor's GitHub token is used for the one submission they asked for and then forgotten. The library itself lives at <a href="https://productrubric.com/">productrubric.com</a> and on <a href="https://github.com/${UPSTREAM}">GitHub</a>.</p>`,
    );
  }

  if (url.pathname === "/handoff" && request.method === "GET") {
    return page("Submit a rubric", HANDOFF_INNER);
  }

  if (url.pathname === "/auth/start" && request.method === "GET") {
    if (!configured) return text("Sign-in is not set up yet.", 503);
    const next = url.searchParams.get("next") === "handoff" ? "handoff" : "builder";
    const state = crypto.randomUUID();
    const headers = new Headers({ location: buildAuthorizeUrl(env.GITHUB_CLIENT_ID!, state) });
    const cookieOpts = "HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600";
    headers.append("set-cookie", `pr_state=${state}; ${cookieOpts}`);
    headers.append("set-cookie", `pr_next=${next}; ${cookieOpts}`);
    return new Response(null, { status: 302, headers });
  }

  if (url.pathname === "/auth/callback" && request.method === "GET") {
    if (!configured) return text("Sign-in is not set up yet.", 503);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const jar = cookies(request);
    if (!code || !state || jar.pr_state !== state) {
      return page("Sign-in did not complete", `<h1>That sign-in did not complete</h1><p>The sign-in link was incomplete or out of date. Go back and start the sign-in again.</p>`, 400);
    }
    let token: string;
    try {
      token = await exchangeCode(fetch, env, code);
    } catch (e) {
      return page("Sign-in did not complete", `<h1>That sign-in did not complete</h1><p>${(e as Error).message} Go back and start the sign-in again.</p>`, 502);
    }
    const dest = jar.pr_next === "handoff" ? `https://submit.productrubric.com/handoff#t=${encodeURIComponent(token)}` : `${BUILDER_URL}#t=${encodeURIComponent(token)}`;
    const headers = new Headers({ location: dest, "referrer-policy": "no-referrer" });
    headers.append("set-cookie", "pr_state=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0");
    headers.append("set-cookie", "pr_next=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0");
    return new Response(null, { status: 302, headers });
  }

  if (url.pathname === "/submit" && request.method === "POST") {
    const origin = request.headers.get("origin");
    const cors: Record<string, string> = origin === "https://productrubric.com" ? { "access-control-allow-origin": origin, vary: "Origin" } : {};
    if (origin && origin !== "https://productrubric.com" && origin !== "https://submit.productrubric.com") {
      return new Response(JSON.stringify({ ok: false, error: "This helper only accepts submissions from ProductRubric pages." }), { status: 403, headers: { "content-type": "application/json" } });
    }
    if (!configured) {
      return new Response(JSON.stringify({ ok: false, error: "Sign-in is not set up yet." }), { status: 503, headers: { "content-type": "application/json", ...cors } });
    }
    const auth = request.headers.get("authorization") ?? "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    if (!token) {
      return new Response(JSON.stringify({ ok: false, error: "Sign in with GitHub first." }), { status: 401, headers: { "content-type": "application/json", ...cors } });
    }
    let parsed: unknown;
    try {
      parsed = await request.json();
    } catch {
      return new Response(JSON.stringify({ ok: false, error: "The submission was not readable." }), { status: 400, headers: { "content-type": "application/json", ...cors } });
    }
    const valid = validateSubmission(parsed);
    if (typeof valid === "string") {
      return new Response(JSON.stringify({ ok: false, error: valid }), { status: 400, headers: { "content-type": "application/json", ...cors } });
    }
    try {
      const prUrl = await submitToGitHub(fetch, token, valid);
      return new Response(JSON.stringify({ ok: true, prUrl }), { headers: { "content-type": "application/json", ...cors } });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: (e as Error).message }), { status: 502, headers: { "content-type": "application/json", ...cors } });
    }
  }

  if (url.pathname === "/submit" && request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "access-control-allow-origin": "https://productrubric.com",
        "access-control-allow-methods": "POST",
        "access-control-allow-headers": "content-type, authorization",
        "access-control-max-age": "600",
      },
    });
  }

  return text("Not found.", 404);
}
