import type { Metadata } from "next";
import { DemoNotice } from "@/components/ui/DemoNotice";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <article className="prose prose-invert mx-auto max-w-2xl space-y-4 text-sm leading-relaxed text-muted">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Terms of Service
      </h1>
      <DemoNotice>
        Placeholder only. This is not a legal agreement. An attorney must draft
        and review production terms before launch.
      </DemoNotice>
      <p>
        Creator Website is a non-production front-end prototype. It uses mock
        data and local UI state. It does not create accounts, process payments,
        store personal information, or form a contract with visitors.
      </p>
      <p>
        The intended future launch market is the United States only, priced in
        USD, for users 18 years of age or older. Marketplace, creator, and
        platform-admin experiences shown here are demonstrations.
      </p>
      <p>
        Simulated carts, checkouts, bookings, uploads, messages, and
        integrations do not move money, send email, or grant licenses.
      </p>
      <p>
        Do not submit real names, emails, passwords, government IDs, tax
        identifiers, or payment details anywhere in this prototype.
      </p>
    </article>
  );
}
