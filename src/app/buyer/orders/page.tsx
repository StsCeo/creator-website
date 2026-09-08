"use client";

import { formatDate, formatUsd } from "@/lib/format";
import { useDemo } from "@/components/providers/DemoProvider";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DataTable } from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/Badge";

export default function BuyerOrdersPage() {
  const { buyerOrders } = useDemo();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      <DemoNotice>
        Includes seeded mock purchases plus any demo checkouts from this browser.
      </DemoNotice>
      <DataTable
        columns={["ID", "Item", "Amount", "Date", ""]}
        rows={buyerOrders.map((o) => [
          o.id,
          o.title,
          formatUsd(o.amountCents),
          formatDate(o.createdAt),
          <Badge key={o.id} tone="demo">
            demo
          </Badge>,
        ])}
      />
    </div>
  );
}
