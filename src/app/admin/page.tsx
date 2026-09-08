import type { Metadata } from "next";
import { creators, orders, products, services } from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { KpiCard } from "@/components/ui/KpiCard";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { SparkBars } from "@/components/dashboard/SparkBars";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "Platform admin" };

export default function AdminOverviewPage() {
  const gmv = orders
    .filter((o) => o.status === "completed")
    .reduce((s, o) => s + o.amountCents, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Platform · demo
          </p>
          <h1 className="text-3xl font-bold tracking-tight">Marketplace health</h1>
        </div>
        <Badge tone="demo">Not authorization</Badge>
      </div>
      <DemoNotice>
        Platform Admin is a local UI view. It does not grant privileges and does
        not expose other tenants&apos; real data — only the shared mock catalog.
      </DemoNotice>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Creators" value={String(creators.length)} />
        <KpiCard
          label="Live listings"
          value={String(
            products.filter((p) => p.status === "published").length +
              services.filter((s) => s.status === "published").length,
          )}
        />
        <KpiCard label="Orders" value={String(orders.length)} />
        <KpiCard label="Completed GMV" value={formatUsd(gmv)} hint="USD · mock" />
      </div>
      <SparkBars values={[20, 24, 22, 30, 36, 33, 41, 39, 48, 52, 49, 61]} />
    </div>
  );
}
