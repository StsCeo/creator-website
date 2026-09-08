"use client";

import Link from "next/link";
import { DEFAULT_BUYER_NAME } from "@/lib/constants";
import { getProduct } from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { useDemo } from "@/components/providers/DemoProvider";
import { KpiCard } from "@/components/ui/KpiCard";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { Badge } from "@/components/ui/Badge";

export default function BuyerOverviewPage() {
  const { buyerOrders, libraryIds, bookings, saved } = useDemo();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Buyer · demo
        </p>
        <h1 className="text-3xl font-bold tracking-tight">{DEFAULT_BUYER_NAME}</h1>
        <p className="text-sm text-muted">
          Fictional buyer profile. Not an account.
        </p>
      </div>
      <DemoNotice />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Orders" value={String(buyerOrders.length)} />
        <KpiCard label="Library" value={String(libraryIds.length)} />
        <KpiCard
          label="Saved"
          value={String(
            saved.products.length + saved.services.length + saved.creators.length,
          )}
        />
        <KpiCard label="Bookings" value={String(bookings.length)} />
      </div>
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
          Recent demo orders
        </h2>
        <ul className="divide-y divide-white/10 rounded-2xl border border-white/10">
          {buyerOrders.slice(0, 4).map((order) => (
            <li
              key={order.id}
              className="flex items-center justify-between px-4 py-3 text-sm"
            >
              <span>
                {order.title}{" "}
                <Badge tone="demo" className="ml-2">
                  mock
                </Badge>
              </span>
              <span>{formatUsd(order.amountCents)}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/buyer/library" className="underline">
          Open library
        </Link>
        <Link href="/products" className="underline">
          Keep browsing
        </Link>
        {libraryIds[0] && getProduct(libraryIds[0]) && (
          <Link
            href={`/products/${getProduct(libraryIds[0])!.slug}`}
            className="underline"
          >
            Last library item
          </Link>
        )}
      </div>
    </div>
  );
}
