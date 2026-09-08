import type { Metadata } from "next";
import { getDefaultCreator, ordersByCreator } from "@/lib/mock";
import { formatDate, formatUsd } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DataTable } from "@/components/dashboard/DataTable";
import { DemoAction } from "@/components/dashboard/DemoAction";

export const metadata: Metadata = { title: "Orders" };

const tone = {
  completed: "success",
  processing: "warning",
  refunded: "danger",
  cancelled: "neutral",
} as const;

export default function CreatorOrdersPage() {
  const orders = ordersByCreator(getDefaultCreator().id);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      <DemoNotice>
        Buyer names are fictional. Refunds and fulfillment are not live.
      </DemoNotice>
      <DataTable
        columns={["ID", "Date", "Buyer", "Item", "Type", "Amount", "Status", ""]}
        rows={orders.map((o) => [
          o.id,
          formatDate(o.createdAt),
          o.buyerName,
          o.itemTitle,
          o.itemType,
          formatUsd(o.amountCents),
          <Badge key={o.id} tone={tone[o.status]}>
            {o.status}
          </Badge>,
          <DemoAction key={`${o.id}-a`} label="Open" />,
        ])}
      />
    </div>
  );
}
