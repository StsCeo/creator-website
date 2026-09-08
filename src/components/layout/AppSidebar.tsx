"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ADMIN_NAV,
  BRAND,
  BUYER_NAV,
  CREATOR_NAV,
  MARKETPLACE_GROUPS,
  ROLE_LABELS,
  isStudioPath,
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

function studioNav(pathname: string) {
  if (pathname.startsWith("/dashboard")) return CREATOR_NAV;
  if (pathname.startsWith("/buyer")) return BUYER_NAV;
  return ADMIN_NAV;
}

function sectionLabel(pathname: string) {
  if (pathname.startsWith("/dashboard")) return "Creator studio";
  if (pathname.startsWith("/buyer")) return "Buyer";
  if (pathname.startsWith("/admin")) return "Platform";
  return "Marketplace";
}

function NavLink({
  href,
  label,
  icon,
  collapsed,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: IconName;
  collapsed: boolean;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      onClick={onNavigate}
      title={label}
      className={cn(
        "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition duration-200",
        collapsed && "justify-center px-2",
        active
          ? "bg-white/10 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          : "text-muted hover:bg-white/5 hover:text-foreground",
      )}
    >
      <Icon name={icon} className="h-[18px] w-[18px] shrink-0" />
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  );
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
  const studio = isStudioPath(pathname);
  const items = studio ? studioNav(pathname) : [];

  function switchRole(next: DemoRole) {
    setRole(next);
    setMobileNavOpen(false);
    router.push(ROLE_HOME[next]);
  }

  const nav = (
    <>
      <div className="flex items-center justify-between gap-2 px-3 py-5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5"
          onClick={() => setMobileNavOpen(false)}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent via-accent-2 to-accent-3 text-xs font-bold text-white shadow-lg shadow-accent-2/30">
            {BRAND.short}
          </span>
          {!sidebarCollapsed && (
            <span className="truncate text-[15px] font-semibold tracking-tight">
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

      {!sidebarCollapsed && studio && (
        <p className="px-4 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {sectionLabel(pathname)}
        </p>
      )}

      <nav
        className={cn(
          "flex flex-1 flex-col overflow-y-auto px-2 pb-3",
          studio ? "gap-1" : "gap-4",
        )}
      >
        {studio
          ? items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon as IconName}
                collapsed={sidebarCollapsed}
                onNavigate={() => setMobileNavOpen(false)}
              />
            ))
          : MARKETPLACE_GROUPS.map((group) => (
              <div key={group.label} className="space-y-1">
                {!sidebarCollapsed && (
                  <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted/80">
                    {group.label}
                  </p>
                )}
                {group.items.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon as IconName}
                    collapsed={sidebarCollapsed}
                    onNavigate={() => setMobileNavOpen(false)}
                  />
                ))}
              </div>
            ))}
        {!studio && (
          <Link
            href="/sell"
            onClick={() => setMobileNavOpen(false)}
            className={cn(
              "mt-1 rounded-2xl bg-gradient-to-r from-accent via-accent-2 to-accent-3 p-[1px] shadow-lg shadow-accent-2/20",
              sidebarCollapsed && "mx-auto",
            )}
          >
            <span
              className={cn(
                "flex items-center gap-2 rounded-[15px] bg-[#120c1c] px-3 py-2.5 text-sm font-semibold",
                sidebarCollapsed && "justify-center px-2",
              )}
            >
              <Icon name="store" className="h-4 w-4" />
              {!sidebarCollapsed && "Sell on Creator District"}
            </span>
          </Link>
        )}
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
                  ? "bg-gradient-to-r from-accent/25 via-accent-2/25 to-accent-3/20 text-foreground"
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
          "fixed inset-y-0 left-0 z-50 flex w-[var(--sidebar)] flex-col border-r border-white/10 bg-[#0b0812]/90 backdrop-blur-xl transition-[width,transform] duration-200",
          sidebarCollapsed && "lg:w-[var(--sidebar-collapsed)]",
          mobileNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {nav}
      </aside>
    </>
  );
}
