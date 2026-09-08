import type { Metadata } from "next";
import { trendingProducts } from "@/lib/mock";
import { ProductCard } from "@/components/commerce/ProductCard";

export const metadata: Metadata = { title: "Trending" };

export default function TrendingPage() {
  const items = trendingProducts();
  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2">
          Pulse
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Trending</h1>
        <p className="mt-2 text-muted">
          What the district is buying, booking, and saving right now. Mock
          rankings from the demo catalog.
        </p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
