import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  href,
  actionLabel = "See all",
}: {
  eyebrow?: string;
  title: string;
  href?: string;
  actionLabel?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-bold tracking-tight sm:text-[1.7rem]">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="shrink-0 text-sm font-medium text-muted transition hover:text-foreground"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

export function Carousel({ children }: { children: ReactNode }) {
  return (
    <div className="carousel-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
      {children}
    </div>
  );
}
