import type { Metadata } from "next";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "Admin · Settings" };

const FUTURE = [
  ["Managed authentication", "No passwords, SSO, or session cookies in this MVP."],
  ["Tenant isolation", "Every mock row already carries creatorId for a future boundary."],
  ["Rate limiting", "No public write APIs ship in this prototype."],
  ["Audit logging", "Sample only — see the notifications menu for fake events."],
  ["Stripe-hosted payments", "Checkout is a local simulator. Cards must never hit this origin."],
  ["OWASP testing", "Lint, typecheck, and build run in CI-style scripts; authz tests come later."],
];

export default function AdminSettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Platform settings</h1>
      <DemoNotice>
        Launch target: United States, USD, ages 18+. These controls are copy
        only.
      </DemoNotice>
      <ul className="space-y-3">
        {FUTURE.map(([title, body]) => (
          <li
            key={title}
            className="rounded-2xl border border-dashed border-white/15 p-4"
          >
            <div className="flex items-center gap-2">
              <p className="font-semibold">{title}</p>
              <Badge tone="demo">Future</Badge>
            </div>
            <p className="mt-1 text-sm text-muted">{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
