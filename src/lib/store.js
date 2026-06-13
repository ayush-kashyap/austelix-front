import { create } from "zustand";

/**
 * Cross-component UI flags only. Server data lives in React Query;
 * forms own their field state. (See README › state strategy.)
 */
export const useUIStore = create((set) => ({
  sidebarOpen: false,
  sidebarCollapsed: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  toggleCollapsed: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
}));
