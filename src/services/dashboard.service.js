import { api, USE_MOCK, delay } from "./api-client";
import {
  mockDashboard,
  mockCategories,
  mockAuthors,
  mockTags,
  mockUsers,
} from "./mock-data";

export const dashboardService = {
  overview() {
    if (USE_MOCK) return delay(mockDashboard);
    return api.get("/dashboard/overview");
  },
};

/** Small lookups used to populate selects across the app. */
export const lookupService = {
  categories() {
    if (USE_MOCK) return delay(mockCategories);
    return api.get("/categories");
  },
  authors() {
    if (USE_MOCK) return delay(mockAuthors);
    return api.get("/authors");
  },
  tags() {
    if (USE_MOCK) return delay(mockTags);
    return api.get("/tags");
  },
};

/**
 * Mock auth. Replace the mock branches with your session/JWT logic and the
 * cookie write/clear with real calls (see README › Real auth).
 */
export const authService = {
  async login({ email }) {
    if (USE_MOCK) {
      const user = mockUsers.find((u) => u.email === email) ?? mockUsers[0];
      if (typeof document !== "undefined") {
        document.cookie = `austelix_session=mock; path=/; max-age=86400`;
      }
      return delay({ user, token: "mock-token" });
    }
    return api.post("/auth/login", { email });
  },
  async logout() {
    if (typeof document !== "undefined") {
      document.cookie = "austelix_session=; path=/; max-age=0";
    }
    if (USE_MOCK) return delay(undefined);
    return api.post("/auth/logout");
  },
  async requestPasswordReset({ email }) {
    if (USE_MOCK) return delay({ ok: true, email });
    return api.post("/auth/forgot-password", { email });
  },
  async resetPassword({ token, password }) {
    if (USE_MOCK) return delay({ ok: true });
    return api.post("/auth/reset-password", { token, password });
  },
};
