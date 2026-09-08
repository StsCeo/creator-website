"use client";

import { useMemo, useState } from "react";
import { NICHE_LABELS } from "@/lib/constants";
import { publishedProducts } from "@/lib/mock";
import type { Niche } from "@/lib/types";
import { ProductCard } from "@/components/commerce/ProductCard";

const FILTERS = ["all", ...Object.keys(NICHE_LABELS)] as const;

export default function ProductsPage() {
  const [filter, setFilter] = useState<string>("all");
  const items = useMemo(() => {
    const all = publishedProducts();
    if (filter === "all") return all;
    return all.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Digital products</h1>
        <p className="mt-2 text-sm text-muted">
          Presets, templates, ebooks, and courses. Prices in USD. Mock catalog.
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
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
