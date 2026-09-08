"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchCatalog } from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { useDemo } from "@/components/providers/DemoProvider";
import { Icon } from "@/components/ui/Icon";

export function SearchModal() {
  const { searchOpen, setSearchOpen } = useDemo();
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchCatalog(query), [query]);

  if (!searchOpen) return null;

  function close() {
    setQuery("");
    setSearchOpen(false);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-[12vh]">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close search"
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search catalog"
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#101018] shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4">
          <Icon name="search" className="h-4 w-4 text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fictional creators, products, and services"
            onKeyDown={(e) => {
              if (e.key === "Escape") close();
            }}
          />
          <button type="button" className="text-xs text-muted" onClick={close}>
            Esc
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {!query.trim() && (
            <p className="px-2 py-6 text-center text-sm text-muted">
              Client-side search over mock data. Nothing is sent to a server.
            </p>
          )}
          {query.trim() &&
            results.creators.length +
              results.products.length +
              results.services.length ===
              0 && (
              <p className="px-2 py-6 text-center text-sm text-muted">
                No matches in the demo catalog.
              </p>
            )}
          {results.creators.map((creator) => (
            <Link
              key={creator.id}
              href={`/creators/${creator.slug}`}
              onClick={close}
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
            >
              <p className="text-sm font-medium">{creator.displayName}</p>
              <p className="text-xs text-muted">{creator.handle} · Creator</p>
            </Link>
          ))}
          {results.products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              onClick={close}
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
            >
              <p className="text-sm font-medium">{product.title}</p>
              <p className="text-xs text-muted">
                Product · {formatUsd(product.priceCents)}
              </p>
            </Link>
          ))}
          {results.services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              onClick={close}
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
            >
              <p className="text-sm font-medium">{service.title}</p>
              <p className="text-xs text-muted">
                Service · from {formatUsd(service.startingPriceCents)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
