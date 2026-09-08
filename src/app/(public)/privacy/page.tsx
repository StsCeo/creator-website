import type { Metadata } from "next";
import { DemoNotice } from "@/components/ui/DemoNotice";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <article className="prose prose-invert mx-auto max-w-2xl space-y-4 text-sm leading-relaxed text-muted">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Privacy Policy
      </h1>
      <DemoNotice>
        Placeholder only. This is not a privacy notice. Counsel must review
        production privacy, CCPA/state, and COPPA/age-gating language before
        launch.
      </DemoNotice>
      <p>
        This prototype does not collect, transmit, log, or persist real personal
        or financial information. Catalog search, cart, and demo role run in
        React state for the current session.
      </p>
      <p>
        There is no authentication, database, analytics pixel, email provider,
        advertising SDK, or payment processor connected. A previous contact API
        was removed so names and emails cannot be posted to the server.
      </p>
      <p>
        Planned production posture: United States only, USD, 18+, managed
        authentication, Stripe-hosted payment collection, tenant isolation, and
        least-privilege integrations. None of those systems are live here.
      </p>
      <p>
        Fictional buyer and creator names in the catalog are invented. They are
        not real people.
      </p>
    </article>
  );
}
