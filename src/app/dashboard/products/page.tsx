import type { Metadata } from "next";
import {
  getDefaultCreator,
  productsByCreator,
} from "@/lib/mock";
import { FORMAT_LABELS } from "@/lib/constants";
import { formatUsd } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DataTable } from "@/components/dashboard/DataTable";
import { DemoAction } from "@/components/dashboard/DemoAction";

export const metadata: Metadata = { title: "Products" };

export default function CreatorProductsPage() {
  const creator = getDefaultCreator();
  const products = productsByCreator(creator.id);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold tracking-tight">Digital products</h1>
        <DemoAction label="Create product (demo)" />
      </div>
      <DemoNotice>
        Create/edit drawers are not wired to a database. Uploads are disabled.
      </DemoNotice>
      <DataTable
        columns={["Title", "Format", "Price", "Status", "Sales", ""]}
        rows={products.map((p) => [
          p.title,
          FORMAT_LABELS[p.format],
          formatUsd(p.priceCents),
          <Badge
            key={p.id}
            tone={p.status === "published" ? "success" : "warning"}
          >
            {p.status}
          </Badge>,
          String(p.salesCount),
          <DemoAction key={`${p.id}-e`} label="Edit" />,
        ])}
      />
    </div>
  );
}
