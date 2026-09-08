"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ADMIN_NAV,
  BRAND,
  BUYER_NAV,
  CREATOR_NAV,
  PUBLIC_NAV,
  ROLE_LABELS,
} from "@/lib/constants";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { useDemo } from "@/components/providers/DemoProvider";
import type { DemoRole } from "@/lib/types";

const ROLE_HOME: Record<DemoRole, string> = {
  creator: "/dashboard",
  buyer: "/buyer",
  admin: "/admin",
};

function navFor(pathname: string) {
  if (pathname.startsWith("/dashboard")) return CREATOR_NAV;
  if (pathname.startsWith("/buyer")) return BUYER_NAV;
  if (pathname.startsWith("/admin")) return ADMIN_NAV;
  return PUBLIC_NAV;
}

function sectionLabel(pathname: string) {
  if (pathname.startsWith("/dashboard")) return "Creator studio";
  if (pathname.startsWith("/buyer")) return "Buyer";
  if (pathname.startsWith("/admin")) return "Platform";
  return "Discover";
}

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const {
    sidebarCollapsed,
    toggleSidebar,
    mobileNavOpen,
    setMobileNavOpen,
    role,
    setRole,
  } = useDemo();
  const items = navFor(pathname);

  function switchRole(next: DemoRole) {
    setRole(next);
    setMobileNavOpen(false);
    router.push(ROLE_HOME[next]);
  }

  const nav = (
    <>
      <div className="flex items-center justify-between gap-2 px-3 py-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2"
          onClick={() => setMobileNavOpen(false)}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-white">
            {BRAND.short}
          </span>
          {!sidebarCollapsed && (
            <span className="truncate text-sm font-semibold tracking-tight">
              {BRAND.name}
            </span>
          )}
        </Link>
        <button
          type="button"
          className="hidden rounded-lg p-1.5 text-muted hover:bg-white/10 hover:text-foreground lg:inline-flex"
          onClick={toggleSidebar}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Icon name="panel" className="h-4 w-4" />
        </button>
      </div>

      {!sidebarCollapsed && (
        <p className="px-4 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {sectionLabel(pathname)}
        </p>
      )}

      <nav className="flex flex-1 flex-col gap-0.5 px-2">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileNavOpen(false)}
              title={item.label}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
                sidebarCollapsed && "justify-center px-2",
                active
                  ? "bg-white/10 text-foreground"
                  : "text-muted hover:bg-white/5 hover:text-foreground",
              )}
            >
              <Icon name={item.icon as IconName} className="h-[18px] w-[18px] shrink-0" />
              {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/10 p-3">
        {!sidebarCollapsed && (
          <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Demo view
          </p>
        )}
        <div className={cn("flex flex-col gap-1", sidebarCollapsed && "items-center")}>
          {(["creator", "buyer", "admin"] as DemoRole[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => switchRole(item)}
              className={cn(
                "rounded-xl px-3 py-2 text-left text-xs font-medium transition",
                sidebarCollapsed && "px-2",
                role === item
                  ? "bg-gradient-to-r from-accent/30 to-accent-2/30 text-foreground"
                  : "text-muted hover:bg-white/5 hover:text-foreground",
              )}
              title={ROLE_LABELS[item]}
            >
              {sidebarCollapsed ? ROLE_LABELS[item][0] : ROLE_LABELS[item]}
            </button>
          ))}
        </div>
        {!sidebarCollapsed && (
          <div className="mt-3">
            <Badge tone="demo">Not authentication</Badge>
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {mobileNavOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          aria-label="Close navigation"
          onClick={() => setMobileNavOpen(false)}
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[var(--sidebar)] flex-col border-r border-white/10 bg-[#0a0a10] transition-[width,transform] duration-200",
          sidebarCollapsed && "lg:w-[var(--sidebar-collapsed)]",
          mobileNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {nav}
      </aside>
    </>
  );
}
