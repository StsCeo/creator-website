"use client";

import { useMemo, useState } from "react";
import { NICHE_LABELS } from "@/lib/constants";
import { publishedServices } from "@/lib/mock";
import type { Niche } from "@/lib/types";
import { ServiceCard } from "@/components/commerce/ServiceCard";

const FILTERS = ["all", ...Object.keys(NICHE_LABELS)] as const;

export default function ServicesPage() {
  const [filter, setFilter] = useState<string>("all");
  const items = useMemo(() => {
    const all = publishedServices();
    if (filter === "all") return all;
    return all.filter((s) => s.category === filter);
  }, [filter]);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2">
          Book
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Services</h1>
        <p className="mt-2 text-sm text-muted">
          Bookings are simulated. No calendars, inboxes, or payments connect.
        </p>
      </header>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              filter === key
                ? "border-transparent bg-gradient-to-r from-accent/40 via-accent-2/40 to-accent-3/30"
                : "border-white/10 text-muted hover:text-foreground"
            }`}
          >
            {key === "all" ? "All" : NICHE_LABELS[key as Niche]}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
