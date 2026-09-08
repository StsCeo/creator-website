"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { DEFAULT_BUYER_NAME, ROLE_LABELS } from "@/lib/constants";
import { getDefaultCreator } from "@/lib/mock";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { useDemo } from "@/components/providers/DemoProvider";
import type { DemoRole } from "@/lib/types";
import { cn } from "@/lib/cn";

const ROLE_HOME: Record<DemoRole, string> = {
  creator: "/dashboard",
  buyer: "/buyer",
  admin: "/admin",
};

const NOTIFICATIONS = [
  { id: "n1", text: "Demo: Harbor Night LUT Pack sold (mock).", time: "2h" },
  { id: "n2", text: "Demo: Northline Studio requested a color session.", time: "1d" },
  { id: "n3", text: "Demo: Weekly revenue snapshot is ready.", time: "3d" },
];

export function TopNav() {
  const router = useRouter();
  const {
    setMobileNavOpen,
    setSearchOpen,
    cartCount,
    role,
    setRole,
  } = useDemo();
  const creator = getDefaultCreator();

  function switchRole(next: DemoRole) {
    setRole(next);
    router.push(ROLE_HOME[next]);
  }

  const profileLabel =
    role === "buyer"
      ? DEFAULT_BUYER_NAME
      : role === "admin"
        ? "Platform Admin"
        : creator.displayName;

  return (
    <header className="sticky top-0 z-30 flex h-[var(--topbar)] items-center gap-3 border-b border-white/10 bg-[#09060f]/70 px-3 backdrop-blur-xl sm:px-5">
      <button
        type="button"
        className="rounded-lg p-2 text-muted hover:bg-white/10 hover:text-foreground lg:hidden"
        onClick={() => setMobileNavOpen(true)}
        aria-label="Open navigation"
      >
        <Icon name="menu" />
      </button>

      <button
        type="button"
        onClick={() => setSearchOpen(true)}
        className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-muted transition hover:border-white/20 sm:max-w-md"
      >
        <Icon name="search" className="h-4 w-4 shrink-0" />
        <span className="truncate">Search Creator District</span>
        <kbd className="ml-auto hidden rounded-md border border-white/10 px-1.5 py-0.5 text-[10px] text-muted sm:inline">
          /
        </kbd>
      </button>

      <Link
        href="/cart"
        className="relative rounded-full p-2 text-muted hover:bg-white/10 hover:text-foreground"
        aria-label="Open demo cart"
      >
        <Icon name="cart" />
        {cartCount > 0 && (
          <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </Link>

      <details className="relative">
        <summary className="list-none rounded-full p-2 text-muted hover:bg-white/10 hover:text-foreground [&::-webkit-details-marker]:hidden">
          <span className="sr-only">Notifications (demo)</span>
          <Icon name="bell" />
        </summary>
        <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-white/10 bg-[#12121a] p-2 shadow-2xl">
          <p className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
            Notifications · demo
          </p>
          {NOTIFICATIONS.map((item) => (
            <p
              key={item.id}
              className="rounded-xl px-2 py-2 text-sm text-foreground/90 hover:bg-white/5"
            >
              {item.text}
              <span className="mt-0.5 block text-xs text-muted">{item.time}</span>
            </p>
          ))}
        </div>
      </details>

      <details className="relative">
        <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-2 [&::-webkit-details-marker]:hidden">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent via-accent-2 to-accent-3 text-[11px] font-bold">
            {profileLabel
              .split(" ")
              .map((p) => p[0])
              .join("")
              .slice(0, 2)}
          </span>
          <span className="hidden max-w-[9rem] truncate text-xs font-medium sm:inline">
            {profileLabel}
          </span>
        </summary>
        <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-white/10 bg-[#12121a] p-3 shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold">Demo profile</p>
            <Badge tone="demo">Mock</Badge>
          </div>
          <p className="text-xs text-muted">
            Local UI switcher only. No accounts, passwords, or sessions.
          </p>
          <div className="mt-3 flex flex-col gap-1">
            {(["creator", "buyer", "admin"] as DemoRole[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => switchRole(item)}
                className={cn(
                  "rounded-xl px-3 py-2 text-left text-sm",
                  role === item ? "bg-white/10" : "hover:bg-white/5",
                )}
              >
                {ROLE_LABELS[item]}
              </button>
            ))}
          </div>
        </div>
      </details>
    </header>
  );
}
