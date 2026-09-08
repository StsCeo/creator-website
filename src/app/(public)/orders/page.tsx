"use client";

import Link from "next/link";
import { formatDate, formatUsd } from "@/lib/format";
import { getCreator, getService } from "@/lib/mock";
import { useDemo } from "@/components/providers/DemoProvider";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DataTable } from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/Badge";

export default function OrdersBookingsPage() {
  const { buyerOrders, bookings } = useDemo();
  return (
    <div className="space-y-10">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2">
          Your space
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Orders & Bookings
        </h1>
        <p className="mt-2 max-w-xl text-muted">
          Combined buyer activity. Original routes{" "}
          <Link href="/buyer/orders" className="underline">
            /buyer/orders
          </Link>{" "}
          and{" "}
          <Link href="/buyer/bookings" className="underline">
            /buyer/bookings
          </Link>{" "}
          still work.
        </p>
      </header>
      <DemoNotice>
        Fictional buyers and demo checkouts only. Nothing was charged.
      </DemoNotice>
      <section>
        <h2 className="mb-4 text-xl font-bold">Orders</h2>
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
      </section>
      <section>
        <h2 className="mb-4 text-xl font-bold">Bookings</h2>
        <DataTable
          columns={["Service", "Creator", "Package", "Date", "Amount", "Status"]}
          rows={bookings.map((b) => {
            const service = getService(b.serviceId);
            const creator = getCreator(b.creatorId);
            return [
              service?.title ?? b.serviceId,
              creator?.displayName ?? "—",
              b.packageName,
              b.requestedFor,
              formatUsd(b.amountCents),
              <Badge key={b.id} tone="demo">
                {b.status}
              </Badge>,
            ];
          })}
        />
      </section>
    </div>
  );
}
