"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useDemo } from "@/components/providers/DemoProvider";
import { AppSidebar } from "./AppSidebar";
import { TopNav } from "./TopNav";
import { DemoBanner } from "./DemoBanner";
import { SearchModal } from "./SearchModal";

export function AppShell({ children }: { children: ReactNode }) {
  const { sidebarCollapsed, toast, setSearchOpen } = useDemo();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (typing) return;
      if (e.key === "/") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  useEffect(() => {
    router.prefetch("/");
  }, [pathname, router]);

  return (
    <div className="min-h-full">
      <AppSidebar />
      <div
        className={cn(
          "flex min-h-full flex-col transition-[padding] duration-200 lg:pl-[var(--sidebar)]",
          sidebarCollapsed && "lg:pl-[var(--sidebar-collapsed)]",
        )}
      >
        <DemoBanner />
        <TopNav />
        <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-7 sm:px-6 lg:px-10 lg:py-9">
          {children}
        </main>
        <footer className="mt-auto border-t border-white/10 px-4 py-6 text-xs text-muted sm:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              © {new Date().getFullYear()} {BRAND.name} · non-production prototype
            </span>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <span>USD · United States · 18+</span>
          </div>
        </footer>
      </div>
      <SearchModal />
      {toast && (
        <div
          role="status"
          className="fixed bottom-4 left-1/2 z-50 w-[min(28rem,calc(100%-1.5rem))] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#16161f] px-4 py-3 text-sm shadow-2xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
