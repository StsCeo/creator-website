import type { Metadata } from "next";
import { products, services } from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { DataTable } from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/Badge";
import { DemoNotice } from "@/components/ui/DemoNotice";

export const metadata: Metadata = { title: "Admin · Catalog" };

export default function AdminCatalogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Catalog</h1>
      <DemoNotice />
      <section>
        <h2 className="mb-3 font-semibold">Products</h2>
        <DataTable
          columns={["Title", "Price", "Status", "Sales"]}
          rows={products.map((p) => [
            p.title,
            formatUsd(p.priceCents),
            <Badge
              key={p.id}
              tone={p.status === "published" ? "success" : "warning"}
            >
              {p.status}
            </Badge>,
            String(p.salesCount),
          ])}
        />
      </section>
      <section>
        <h2 className="mb-3 font-semibold">Services</h2>
        <DataTable
          columns={["Title", "From", "Status"]}
          rows={services.map((s) => [
            s.title,
            formatUsd(s.startingPriceCents),
            <Badge
              key={s.id}
              tone={s.status === "published" ? "success" : "warning"}
            >
              {s.status}
            </Badge>,
          ])}
        />
      </section>
    </div>
  );
}
