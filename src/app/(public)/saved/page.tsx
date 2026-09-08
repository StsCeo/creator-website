"use client";

import Link from "next/link";
import { getCreator, getProduct, getService } from "@/lib/mock";
import { useDemo } from "@/components/providers/DemoProvider";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ServiceCard } from "@/components/commerce/ServiceCard";
import { CreatorCard } from "@/components/commerce/CreatorCard";
import { EmptyState } from "@/components/ui/EmptyState";

export default function SavedPage() {
  const { saved } = useDemo();
  const products = saved.products
    .map((id) => getProduct(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const services = saved.services
    .map((id) => getService(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const creators = saved.creators
    .map((id) => getCreator(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const empty = products.length + services.length + creators.length === 0;

  return (
    <div className="space-y-10">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2">
          Your space
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Saved</h1>
        <p className="mt-2 max-w-xl text-muted">
          Hearts stay in this browser session. The buyer studio at{" "}
          <Link href="/buyer/saved" className="underline">
            /buyer/saved
          </Link>{" "}
          still works.
        </p>
      </header>
      {empty && (
        <EmptyState
          title="Nothing saved yet"
          body="Tap the heart on a product, service, or creator."
        />
      )}
      {products.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold">Products</h2>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
      {services.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold">Services</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </section>
      )}
      {creators.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold">Creators</h2>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {creators.map((c) => (
              <CreatorCard key={c.id} creator={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
