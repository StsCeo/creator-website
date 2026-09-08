import type { Metadata } from "next";
import { creators, orders } from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { DataTable } from "@/components/dashboard/DataTable";
import { SparkBars } from "@/components/dashboard/SparkBars";
import { DemoNotice } from "@/components/ui/DemoNotice";

export const metadata: Metadata = { title: "Admin · Reports" };

export default function AdminReportsPage() {
  const byCreator = creators.map((c) => {
    const gmv = orders
      .filter((o) => o.creatorId === c.id && o.status === "completed")
      .reduce((s, o) => s + o.amountCents, 0);
    return [c.displayName, formatUsd(gmv), String(orders.filter((o) => o.creatorId === c.id).length)];
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
      <DemoNotice>
        No warehouse, no PII export, no CSV of real customers.
      </DemoNotice>
      <SparkBars values={[14, 16, 15, 19, 23, 21, 26, 30, 28, 34, 33, 40]} />
      <DataTable
        columns={["Creator", "Completed GMV", "Orders"]}
        rows={byCreator}
      />
    </div>
  );
}
