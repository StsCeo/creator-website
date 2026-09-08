"use client";

import { useMemo, useState } from "react";
import { NICHE_LABELS } from "@/lib/constants";
import { creators } from "@/lib/mock";
import type { Niche } from "@/lib/types";
import { CreatorCard } from "@/components/commerce/CreatorCard";

const FILTERS = ["all", ...Object.keys(NICHE_LABELS)] as const;

export default function CreatorsPage() {
  const [filter, setFilter] = useState<string>("all");
  const items = useMemo(() => {
    if (filter === "all") return creators;
    return creators.filter((c) => c.niches.includes(filter as Niche));
  }, [filter]);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Creators</h1>
        <p className="mt-2 text-sm text-muted">
          Fictional storefronts across film, design, fitness, business,
          education, food, and UGC.
        </p>
      </header>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
              filter === key
                ? "border-accent bg-accent/20"
                : "border-white/10 text-muted hover:text-foreground"
            }`}
          >
            {key === "all" ? "All" : NICHE_LABELS[key as Niche]}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}
