// Single network boundary. Every resource service goes through `api`.
// USE_MOCK (default on) makes services resolve local mock data instead.

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

/** Simulated network latency for mock mode. */
export function delay(value, ms = 350) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export class ApiError extends Error {
  /**
   * @param {string} message
   * @param {number} status
   * @param {any} [body]
   */
  constructor(message, status, body) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

/**
 * Build a query string from a params object, skipping empty/all values.
 * @param {Record<string, any>} [params]
 */
function toQuery(params) {
  if (!params) return "";
  const usp = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "" || value === "all")
      continue;
    usp.set(key, String(value));
  }
  const s = usp.toString();
  return s ? `?${s}` : "";
}

/**
 * @param {string} path
 * @param {RequestInit & { params?: Record<string, any> }} [options]
 */
async function request(path, options = {}) {
  const { params, headers, ...rest } = options;
  const res = await fetch(`${API_URL}${path}${toQuery(params)}`, {
    headers: { "Content-Type": "application/json", ...headers },
    ...rest,
  });

  if (!res.ok) {
    let body;
    try {
      body = await res.json();
    } catch {
      body = await res.text();
    }
    throw new ApiError(
      body?.message || `Request failed: ${res.status}`,
      res.status,
      body
    );
  }

  if (res.status === 204) return undefined;
  return res.json();
}

export const api = {
  get: (path, params) => request(path, { method: "GET", params }),
  post: (path, data) =>
    request(path, { method: "POST", body: data ? JSON.stringify(data) : undefined }),
  put: (path, data) =>
    request(path, { method: "PUT", body: data ? JSON.stringify(data) : undefined }),
  patch: (path, data) =>
    request(path, { method: "PATCH", body: data ? JSON.stringify(data) : undefined }),
  delete: (path) => request(path, { method: "DELETE" }),
};
