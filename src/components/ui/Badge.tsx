import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "success" | "warning" | "danger" | "demo";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
        tone === "neutral" && "border border-white/10 bg-white/5 text-muted",
        tone === "accent" &&
          "border border-accent/30 bg-accent/15 text-sky-200",
        tone === "success" &&
          "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
        tone === "warning" &&
          "border border-amber-400/30 bg-amber-400/10 text-amber-200",
        tone === "danger" &&
          "border border-rose-400/30 bg-rose-400/10 text-rose-200",
        tone === "demo" &&
          "border border-violet-400/30 bg-violet-400/10 text-violet-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
