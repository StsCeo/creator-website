import type { Metadata } from "next";
import { getDefaultCreator, ordersByCreator } from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { KpiCard } from "@/components/ui/KpiCard";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { SparkBars } from "@/components/dashboard/SparkBars";
import { DataTable } from "@/components/dashboard/DataTable";

export const metadata: Metadata = { title: "Revenue" };

export default function AnalyticsPage() {
  const creator = getDefaultCreator();
  const orders = ordersByCreator(creator.id);
  const completed = orders.filter((o) => o.status === "completed");
  const productRev = completed
    .filter((o) => o.itemType === "product")
    .reduce((s, o) => s + o.amountCents, 0);
  const serviceRev = completed
    .filter((o) => o.itemType === "service")
    .reduce((s, o) => s + o.amountCents, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Revenue & sales</h1>
      <DemoNotice>
        Charts are static SVG placeholders. No analytics vendor is loaded.
      </DemoNotice>
      <div className="grid gap-3 sm:grid-cols-3">
        <KpiCard label="Product GMV" value={formatUsd(productRev)} />
        <KpiCard label="Service GMV" value={formatUsd(serviceRev)} />
        <KpiCard
          label="Avg. order"
          value={formatUsd(
            completed.length
              ? Math.round(
                  completed.reduce((s, o) => s + o.amountCents, 0) /
                    completed.length,
                )
              : 0,
          )}
        />
      </div>
      <SparkBars values={[8, 11, 9, 14, 18, 16, 21, 19, 24, 22, 27, 31]} />
      <DataTable
        columns={["Source", "Orders", "GMV"]}
        rows={[
          ["Digital products", String(completed.filter((o) => o.itemType === "product").length), formatUsd(productRev)],
          ["Services", String(completed.filter((o) => o.itemType === "service").length), formatUsd(serviceRev)],
        ]}
      />
    </div>
  );
}
