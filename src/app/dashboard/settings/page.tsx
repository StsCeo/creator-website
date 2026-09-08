import type { Metadata } from "next";
import { getDefaultCreator } from "@/lib/mock";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { Badge } from "@/components/ui/Badge";
import { DemoAction } from "@/components/dashboard/DemoAction";

export const metadata: Metadata = { title: "Settings" };

const DISABLED = [
  {
    title: "Payouts",
    body: "Future: Stripe Connect hosted onboarding. Bank routing, account numbers, and tax IDs will never be collected on this origin.",
  },
  {
    title: "Tax forms",
    body: "Future: W-9 / 1099 workflow via a licensed vendor. Disabled here.",
  },
  {
    title: "Email & calendar",
    body: "No Gmail, Outlook, or calendar OAuth. Integrations stay least-privilege and off until production auth exists.",
  },
  {
    title: "Password & SSO",
    body: "Managed authentication is not connected. The Demo View switcher is not a login.",
  },
];

export default function SettingsPage() {
  const creator = getDefaultCreator();
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <DemoNotice />
      <section className="rounded-2xl border border-white/10 p-5">
        <h2 className="font-semibold">Public profile (read-only mock)</h2>
        <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted">Display name</dt>
            <dd>{creator.displayName}</dd>
          </div>
          <div>
            <dt className="text-muted">Handle</dt>
            <dd>{creator.handle}</dd>
          </div>
          <div>
            <dt className="text-muted">Location</dt>
            <dd>{creator.location}</dd>
          </div>
          <div>
            <dt className="text-muted">Launch market</dt>
            <dd>United States · USD · 18+</dd>
          </div>
        </dl>
        <div className="mt-4">
          <DemoAction label="Save profile (demo)" />
        </div>
      </section>
      {DISABLED.map((panel) => (
        <section
          key={panel.title}
          className="rounded-2xl border border-dashed border-white/15 p-5 opacity-90"
        >
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">{panel.title}</h2>
            <Badge tone="demo">Disabled</Badge>
          </div>
          <p className="mt-2 text-sm text-muted">{panel.body}</p>
        </section>
      ))}
    </div>
  );
}
