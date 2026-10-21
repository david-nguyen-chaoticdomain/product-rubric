/**
 * The ProductRubric authorization server, served by the same Worker as
 * the MCP server on the submit.productrubric.com hostname.
 *
 * Why it exists: an MCP client whose user wants to submit a rubric (the
 * submit_rubric tool on the MCP host) needs a GitHub token for that
 * user. This module is the OAuth 2.1 authorization server the client
 * talks to, federated to the "ProductRubric Submit" GitHub OAuth app:
 *
 *   client -> GET /oauth/authorize -> GitHub consent (the app's single
 *   callback URL, /auth/callback, shared with the builder flow and
 *   told apart by a cookie) -> POST /oauth/token -> our access token.
 *
 * Nothing is stored. Every artifact is a sealed envelope: AES-GCM
 * ciphertext, keyed by an HKDF derivation from the GitHub client
 * secret, carrying its own type and expiry. Client registrations from
 * dynamic client registration are sealed into the client_id itself;
 * authorization codes seal the GitHub tokens they will exchange for;
 * access and refresh tokens seal the GitHub tokens they stand for.
 * Rotating the GitHub client secret invalidates every outstanding
 * envelope, which is the intended kill switch.
 *
 * Endpoints:
 * - GET  /.well-known/oauth-authorization-server  discovery document
 * - POST /oauth/register   dynamic client registration (RFC 7591),
 *                          public clients with PKCE only
 * - GET  /oauth/authorize  validates the client and the request, then
 *                          bounces through GitHub sign-in
 * - POST /oauth/token      authorization_code and refresh_token grants
 *
 * The GitHub round trip finishes on /auth/callback (see submit.ts),
 * which hands the code back here via completeAuthorizationCallback.
 */

import type { SubmitEnv } from "./submit.js";

export const AS_ISSUER = "https://submit.productrubric.com";
export const MCP_RESOURCE = "https://mcp.productrubric.com/mcp";
export const PRM_URL = "https://mcp.productrubric.com/.well-known/oauth-protected-resource";
const GITHUB_CALLBACK = "https://submit.productrubric.com/auth/callback";
const ACCESS_TTL_SECONDS = 3600;
const CODE_TTL_SECONDS = 300;
const REFRESH_TTL_SECONDS = 30 * 24 * 3600;

// ---------------------------------------------------------------- sealing

const enc = new TextEncoder();
const dec = new TextDecoder();

function b64url(bytes: Uint8Array): string {
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function unb64url(s: string): Uint8Array<ArrayBuffer> {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (s.length % 4)) % 4);
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function sealKey(env: SubmitEnv): Promise<CryptoKey> {
  const base = await crypto.subtle.importKey("raw", enc.encode(env.GITHUB_CLIENT_SECRET ?? ""), "HKDF", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "HKDF", hash: "SHA-256", salt: enc.encode("productrubric-as-v1"), info: enc.encode("seal") },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function seal(env: SubmitEnv, payload: Record<string, unknown>): Promise<string> {
  const key = await sealKey(env);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(JSON.stringify(payload))));
  const out = new Uint8Array(iv.length + ct.length);
  out.set(iv, 0);
  out.set(ct, iv.length);
  return b64url(out);
}

export async function unseal(env: SubmitEnv, token: string, type: string): Promise<Record<string, any> | null> {
  try {
    const raw = unb64url(token);
    const key = await sealKey(env);
    const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: raw.subarray(0, 12) }, key, raw.subarray(12));
    const payload = JSON.parse(dec.decode(pt));
    if (payload.t !== type) return null;
    if (typeof payload.exp === "number" && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

const now = () => Math.floor(Date.now() / 1000);

// ------------------------------------------------------- GitHub token API

type FetchFn = (url: string, init?: RequestInit) => Promise<Response>;

export interface GitHubTokens {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
}

async function githubTokenRequest(fetchFn: FetchFn, env: SubmitEnv, fields: Record<string, string>): Promise<GitHubTokens> {
  const res = await fetchFn("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, ...fields }),
  });
  const json: any = await res.json().catch(() => null);
  if (!json?.access_token) throw new Error("GitHub did not complete the sign-in.");
  return json as GitHubTokens;
}

export function exchangeCodeFull(fetchFn: FetchFn, env: SubmitEnv, code: string): Promise<GitHubTokens> {
  return githubTokenRequest(fetchFn, env, { code, redirect_uri: GITHUB_CALLBACK });
}

// ---------------------------------------------------------------- helpers

function json(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}

function oauthError(error: string, description: string, status = 400): Response {
  return json({ error, error_description: description }, status);
}

async function sha256B64url(text: string): Promise<string> {
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", enc.encode(text)));
  return b64url(digest);
}

function redirectError(redirectUri: string, state: string | null, error: string, description: string): Response {
  const u = new URL(redirectUri);
  u.searchParams.set("error", error);
  u.searchParams.set("error_description", description);
  if (state) u.searchParams.set("state", state);
  return new Response(null, { status: 302, headers: { location: u.toString() } });
}

// ------------------------------------------------------------- endpoints

export function authorizationServerMetadata(): Response {
  return json({
    issuer: AS_ISSUER,
    authorization_endpoint: `${AS_ISSUER}/oauth/authorize`,
    token_endpoint: `${AS_ISSUER}/oauth/token`,
    registration_endpoint: `${AS_ISSUER}/oauth/register`,
    response_types_supported: ["code"],
    grant_types_supported: ["authorization_code", "refresh_token"],
    code_challenge_methods_supported: ["S256"],
    token_endpoint_auth_methods_supported: ["none"],
    scopes_supported: ["submit"],
  });
}

export function protectedResourceMetadata(): Response {
  return json({
    resource: MCP_RESOURCE,
    authorization_servers: [AS_ISSUER],
    scopes_supported: ["submit"],
    bearer_methods_supported: ["header"],
    resource_documentation: "https://github.com/productrubric/product-rubric",
  });
}

export async function registerClient(request: Request, env: SubmitEnv): Promise<Response> {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return oauthError("invalid_client_metadata", "The registration request was not JSON.");
  }
  const uris: unknown = body?.redirect_uris;
  if (!Array.isArray(uris) || uris.length === 0 || uris.length > 10) {
    return oauthError("invalid_redirect_uri", "Register between one and ten redirect URIs.");
  }
  for (const u of uris) {
    let parsed: URL;
    try {
      parsed = new URL(String(u));
    } catch {
      return oauthError("invalid_redirect_uri", "A redirect URI was not a URL.");
    }
    const local = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
    if (parsed.protocol !== "https:" && !(local && parsed.protocol === "http:")) {
      return oauthError("invalid_redirect_uri", "Redirect URIs must be https, or http on localhost.");
    }
  }
  const clientId = "prc." + (await seal(env, { t: "client", rus: uris.map(String), name: typeof body.client_name === "string" ? body.client_name.slice(0, 80) : "" }));
  return json(
    {
      client_id: clientId,
      client_id_issued_at: now(),
      redirect_uris: uris,
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
      scope: "submit",
    },
    201,
  );
}

export async function authorize(request: Request, env: SubmitEnv): Promise<Response> {
  const url = new URL(request.url);
  const q = url.searchParams;
  const clientId = q.get("client_id") ?? "";
  const redirectUri = q.get("redirect_uri") ?? "";
  const state = q.get("state");
  const client = await unseal(env, clientId.replace(/^prc\./, ""), "client");
  if (!client || !Array.isArray(client.rus) || !client.rus.includes(redirectUri)) {
    return oauthError("invalid_client", "The client is not registered, or the redirect URI does not match its registration.", 400);
  }
  if (q.get("response_type") !== "code") {
    return redirectError(redirectUri, state, "unsupported_response_type", "Only the authorization code flow is supported.");
  }
  const challenge = q.get("code_challenge") ?? "";
  if (!challenge || q.get("code_challenge_method") !== "S256") {
    return redirectError(redirectUri, state, "invalid_request", "PKCE with the S256 method is required.");
  }
  const ghState = await seal(env, {
    t: "ghstate",
    cid: clientId,
    ru: redirectUri,
    cs: state ?? "",
    ch: challenge,
    exp: now() + 600,
  });
  const gh = new URL("https://github.com/login/oauth/authorize");
  gh.searchParams.set("client_id", env.GITHUB_CLIENT_ID ?? "");
  gh.searchParams.set("redirect_uri", GITHUB_CALLBACK);
  gh.searchParams.set("scope", "public_repo");
  gh.searchParams.set("state", ghState);
  const headers = new Headers({ location: gh.toString() });
  headers.append("set-cookie", `pr_as=${encodeURIComponent(ghState)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`);
  return new Response(null, { status: 302, headers });
}

/**
 * The GitHub round trip for the authorization flow ends on
 * /auth/callback (the app's one registered callback URL). submit.ts
 * routes here when the pr_as cookie matches the returned state.
 */
export async function completeAuthorizationCallback(fetchFn: FetchFn, env: SubmitEnv, code: string, state: string): Promise<Response> {
  const pending = await unseal(env, state, "ghstate");
  if (!pending) {
    return new Response("That sign-in did not complete. The sign-in link was incomplete or out of date. Go back and start again.", {
      status: 400,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
  let tokens: GitHubTokens;
  try {
    tokens = await exchangeCodeFull(fetchFn, env, code);
  } catch (e) {
    return new Response(`That sign-in did not complete. ${(e as Error).message} Go back and start again.`, {
      status: 502,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
  const authCode = await seal(env, {
    t: "code",
    gha: tokens.access_token,
    ghr: tokens.refresh_token ?? "",
    cid: pending.cid,
    ru: pending.ru,
    ch: pending.ch,
    exp: now() + CODE_TTL_SECONDS,
  });
  const dest = new URL(pending.ru as string);
  dest.searchParams.set("code", authCode);
  if (pending.cs) dest.searchParams.set("state", pending.cs as string);
  const headers = new Headers({ location: dest.toString(), "referrer-policy": "no-referrer" });
  headers.append("set-cookie", "pr_as=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0");
  return new Response(null, { status: 302, headers });
}

async function mintTokens(env: SubmitEnv, ghAccess: string, ghRefresh: string, clientId: string): Promise<Response> {
  const access = await seal(env, { t: "at", gha: ghAccess, ghr: ghRefresh, cid: clientId, exp: now() + ACCESS_TTL_SECONDS });
  const refresh = await seal(env, { t: "rt", ghr: ghRefresh, cid: clientId, exp: now() + REFRESH_TTL_SECONDS });
  return json({
    access_token: access,
    token_type: "Bearer",
    expires_in: ACCESS_TTL_SECONDS,
    refresh_token: refresh,
    scope: "submit",
  });
}

export async function tokenEndpoint(request: Request, env: SubmitEnv): Promise<Response> {
  let form: URLSearchParams;
  try {
    form = new URLSearchParams(await request.text());
  } catch {
    return oauthError("invalid_request", "The token request was not form-encoded.");
  }
  const grant = form.get("grant_type");
  if (grant === "authorization_code") {
    const code = await unseal(env, form.get("code") ?? "", "code");
    if (!code) return oauthError("invalid_grant", "The authorization code is invalid or expired. Sign in again.");
    if (form.get("client_id") && form.get("client_id") !== code.cid) return oauthError("invalid_grant", "The code was not issued to this client.");
    if (form.get("redirect_uri") !== code.ru) return oauthError("invalid_grant", "The redirect URI does not match the authorization request.");
    const verifier = form.get("code_verifier") ?? "";
    if (!verifier || (await sha256B64url(verifier)) !== code.ch) return oauthError("invalid_grant", "The PKCE code verifier does not match.");
    return mintTokens(env, code.gha as string, (code.ghr as string) ?? "", code.cid as string);
  }
  if (grant === "refresh_token") {
    const rt = await unseal(env, form.get("refresh_token") ?? "", "rt");
    if (!rt || !rt.ghr) return oauthError("invalid_grant", "The refresh token is invalid or expired. Sign in again.");
    let tokens: GitHubTokens;
    try {
      tokens = await githubTokenRequest(fetch, env, { grant_type: "refresh_token", refresh_token: rt.ghr as string });
    } catch {
      return oauthError("invalid_grant", "GitHub would not refresh the sign-in. Sign in again.");
    }
    return mintTokens(env, tokens.access_token, tokens.refresh_token ?? (rt.ghr as string), rt.cid as string);
  }
  return oauthError("unsupported_grant_type", "Only authorization_code and refresh_token grants are supported.");
}

/** Verify a bearer access token from an MCP request; returns the GitHub token it seals, or null. */
export async function verifyAccessToken(env: SubmitEnv, header: string | null): Promise<string | null> {
  if (!header || !header.startsWith("Bearer ")) return null;
  const payload = await unseal(env, header.slice(7), "at");
  return payload?.gha ? (payload.gha as string) : null;
}

export function unauthorizedResponse(): Response {
  return json(
    { error: "invalid_token", error_description: "The submit_rubric tool needs you to sign in with GitHub first." },
    401,
    { "www-authenticate": `Bearer resource_metadata="${PRM_URL}", scope="submit"` },
  );
}

/**
 * Routes for the submit hostname owned by this module. Returns null
 * when the path belongs to the submission helper instead.
 */
export async function handleAuthRoutes(request: Request, env: SubmitEnv): Promise<Response | null> {
  const url = new URL(request.url);
  const configured = Boolean(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET);
  if (url.pathname === "/.well-known/oauth-authorization-server" && request.method === "GET") {
    return authorizationServerMetadata();
  }
  if (url.pathname === "/oauth/register" && request.method === "POST") {
    if (!configured) return oauthError("server_error", "Sign-in is not set up yet.", 503);
    return registerClient(request, env);
  }
  if (url.pathname === "/oauth/authorize" && request.method === "GET") {
    if (!configured) return new Response("Sign-in is not set up yet.", { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } });
    return authorize(request, env);
  }
  if (url.pathname === "/oauth/token" && request.method === "POST") {
    if (!configured) return oauthError("server_error", "Sign-in is not set up yet.", 503);
    return tokenEndpoint(request, env);
  }
  return null;
}
