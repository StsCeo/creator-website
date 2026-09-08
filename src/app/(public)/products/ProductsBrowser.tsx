"use client";

import { useMemo, useState } from "react";
import { NICHE_LABELS } from "@/lib/constants";
import { publishedProducts } from "@/lib/mock";
import type { Niche } from "@/lib/types";
import { ProductCard } from "@/components/commerce/ProductCard";

const FILTERS = ["all", ...Object.keys(NICHE_LABELS)] as const;

export function ProductsBrowser({ initialNiche }: { initialNiche?: string }) {
  const start =
    initialNiche && FILTERS.includes(initialNiche as (typeof FILTERS)[number])
      ? initialNiche
      : "all";
  const [filter, setFilter] = useState(start);
  const items = useMemo(() => {
    const all = publishedProducts();
    if (filter === "all") return all;
    return all.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2">
          Catalog
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Digital products
        </h1>
        <p className="mt-2 text-muted">
          Presets, templates, ebooks, and courses. Prices in USD. Mock catalog.
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
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
