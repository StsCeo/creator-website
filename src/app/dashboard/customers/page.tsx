"use client";

import { useState } from "react";
import { customersByCreator, getDefaultCreator } from "@/lib/mock";
import { formatDate, formatUsd } from "@/lib/format";
import type { CrmStage, Customer } from "@/lib/types";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { Badge } from "@/components/ui/Badge";

const STAGES: CrmStage[] = ["lead", "qualified", "active", "closed"];

export default function CustomersPage() {
  const seed = customersByCreator(getDefaultCreator().id);
  const [rows, setRows] = useState<Customer[]>(seed);

  function move(id: string, stage: CrmStage) {
    setRows((prev) => prev.map((c) => (c.id === id ? { ...c, stage } : c)));
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Customers & pipeline</h1>
      <DemoNotice>
        Pipeline moves stay in this page&apos;s React state. No CRM, email, or
        contact records are stored on a server. Names are fictional.
      </DemoNotice>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {STAGES.map((stage) => (
          <section
            key={stage}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-3"
          >
            <h2 className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted">
              {stage}
              <Badge>{rows.filter((r) => r.stage === stage).length}</Badge>
            </h2>
            <div className="space-y-2">
              {rows
                .filter((r) => r.stage === stage)
                .map((customer) => (
                  <article
                    key={customer.id}
                    className="rounded-xl border border-white/10 bg-[#0c0c12] p-3"
                  >
                    <p className="text-sm font-semibold">{customer.displayName}</p>
                    <p className="mt-1 text-xs text-muted">{customer.notes}</p>
                    <p className="mt-2 text-[11px] text-muted">
                      {formatUsd(customer.valueCents)} ·{" "}
                      {formatDate(customer.lastTouchAt)}
                    </p>
                    <label className="mt-2 block text-[11px] text-muted">
                      Move
                      <select
                        className="ml-2 rounded-md border border-white/10 bg-white/5 px-1 py-0.5 text-foreground"
                        value={customer.stage}
                        onChange={(e) =>
                          move(customer.id, e.target.value as CrmStage)
                        }
                      >
                        {STAGES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </label>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
