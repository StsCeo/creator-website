import type { Metadata } from "next";
import Link from "next/link";
import {
  getDefaultCreator,
  ordersByCreator,
  productsByCreator,
  servicesByCreator,
} from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DataTable } from "@/components/dashboard/DataTable";
import { SparkBars } from "@/components/dashboard/SparkBars";

export const metadata: Metadata = { title: "Creator overview" };

export default function DashboardOverviewPage() {
  const creator = getDefaultCreator();
  const orders = ordersByCreator(creator.id);
  const products = productsByCreator(creator.id);
  const services = servicesByCreator(creator.id);
  const revenue = orders
    .filter((o) => o.status === "completed")
    .reduce((s, o) => s + o.amountCents, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Creator studio · demo
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            {creator.displayName}
          </h1>
          <p className="text-sm text-muted">
            Default fictional creator. Switch views from the sidebar — this is
            not a login.
          </p>
        </div>
        <Badge tone="demo">Elena Voss workspace</Badge>
      </div>
      <DemoNotice />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Completed GMV"
          value={formatUsd(revenue)}
          hint="Mock · last 30 days sample"
        />
        <KpiCard label="Orders" value={String(orders.length)} />
        <KpiCard
          label="Live products"
          value={String(products.filter((p) => p.status === "published").length)}
        />
        <KpiCard
          label="Live services"
          value={String(services.filter((s) => s.status === "published").length)}
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            Revenue trend (placeholder)
          </h2>
          <SparkBars values={[12, 18, 15, 22, 28, 21, 34, 30, 41, 38, 44, 52]} />
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            Recent orders
          </h2>
          <DataTable
            columns={["Order", "Buyer", "Item", "Amount", "Status"]}
            rows={orders.slice(0, 6).map((o) => [
              o.id,
              o.buyerName,
              o.itemTitle,
              formatUsd(o.amountCents),
              o.status,
            ])}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/dashboard/products" className="underline">
          Manage products
        </Link>
        <Link href="/dashboard/customers" className="underline">
          CRM pipeline
        </Link>
        <Link href={`/creators/${creator.slug}`} className="underline">
          View public storefront
        </Link>
      </div>
    </div>
  );
}
