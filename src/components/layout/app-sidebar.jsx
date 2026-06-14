"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { ProjectSwitcher } from "@/components/layout/project-switcher";
import { clearUser } from "@/store/slices/authSlice";
import { selectActiveProjectId } from "@/store/slices/projectSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M8 16V8l4 5 4-5v8" />
      </svg>
    </span>
  );
}

export function AppSidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const activeProjectId = useAppSelector(state=>state.project.activeProjectId);
  const activeProjectName = useAppSelector(state=>state.project.activeProjectName);

  function signOut() {
    document.cookie = "austelix_session=; path=/; max-age=0";
    dispatch(clearUser());
    router.push("/cms/login");
  }

  return (
    <>
      <div
        onClick={() => setSidebarOpen(false)}
        className={cn(
          "fixed inset-0 z-30 bg-black/40 lg:hidden",
          sidebarOpen ? "block" : "hidden"
        )}
      />
      <aside
        className={cn(
          "fixed z-40 flex h-full w-64 shrink-0 flex-col border-r border-border bg-card transition-transform duration-300 lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center gap-2.5 border-b border-border px-4">
          <Logo />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Austelix CMS</div>
            <div className="text-[11px] text-muted-foreground">
              {activeProjectName}
            </div>
          </div>
        </div>

        <div className="border-b border-border p-3 md:hidden">
          <ProjectSwitcher />
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-3">
          <button
            onClick={signOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <LogOut className="h-5 w-5 shrink-0" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
