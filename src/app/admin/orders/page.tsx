import type { Metadata } from "next";
import { getCreator, orders } from "@/lib/mock";
import { formatDate, formatUsd } from "@/lib/format";
import { DataTable } from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/Badge";
import { DemoNotice } from "@/components/ui/DemoNotice";

export const metadata: Metadata = { title: "Admin · Orders" };

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">All orders</h1>
      <DemoNotice>
        Cross-tenant order list is mock-only. Production must enforce
        authorization per tenant.
      </DemoNotice>
      <DataTable
        columns={["ID", "Creator", "Buyer", "Item", "Amount", "Status", "Date"]}
        rows={orders.map((o) => [
          o.id,
          getCreator(o.creatorId)?.displayName ?? o.creatorId,
          o.buyerName,
          o.itemTitle,
          formatUsd(o.amountCents),
          <Badge key={o.id}>{o.status}</Badge>,
          formatDate(o.createdAt),
        ])}
      />
    </div>
  );
}
