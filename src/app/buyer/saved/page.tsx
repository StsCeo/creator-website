"use client";

import { getCreator, getProduct, getService } from "@/lib/mock";
import { useDemo } from "@/components/providers/DemoProvider";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ServiceCard } from "@/components/commerce/ServiceCard";
import { CreatorCard } from "@/components/commerce/CreatorCard";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { EmptyState } from "@/components/ui/EmptyState";

export default function BuyerSavedPage() {
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

  const empty =
    products.length + services.length + creators.length === 0;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Saved</h1>
      <DemoNotice>
        Saved IDs stay in this browser session. They are catalog IDs only — not
        personal data.
      </DemoNotice>
      {empty && (
        <EmptyState
          title="Nothing saved"
          body="Use Save on a product, service, or creator card."
        />
      )}
      {products.length > 0 && (
        <section>
          <h2 className="mb-3 font-semibold">Products</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
      {services.length > 0 && (
        <section>
          <h2 className="mb-3 font-semibold">Services</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </section>
      )}
      {creators.length > 0 && (
        <section>
          <h2 className="mb-3 font-semibold">Creators</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {creators.map((c) => (
              <CreatorCard key={c.id} creator={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
