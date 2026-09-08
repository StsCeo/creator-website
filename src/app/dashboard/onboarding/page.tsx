"use client";

import { useState } from "react";
import { onboardingSteps } from "@/lib/mock";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useDemo } from "@/components/providers/DemoProvider";

export default function OnboardingPage() {
  const { notify } = useDemo();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Client onboarding</h1>
      <DemoNotice>
        Intake is a visual checklist. Submitting does not email anyone or store
        client files. Do not enter real client information.
      </DemoNotice>
      <ol className="space-y-3">
        {onboardingSteps.map((step) => (
          <li
            key={step.id}
            className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 p-4"
          >
            <div>
              <p className="font-semibold">{step.label}</p>
              <p className="text-sm text-muted">{step.detail}</p>
            </div>
            <Badge tone={step.done ? "success" : "warning"}>
              {step.done ? "Done" : "Blocked"}
            </Badge>
          </li>
        ))}
      </ol>
      <form
        className="max-w-lg space-y-3 rounded-2xl border border-white/10 p-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          notify("Demo intake recorded locally. No data was transmitted.");
        }}
      >
        <p className="text-sm font-semibold">Mock intake (do not use real data)</p>
        <label className="block text-sm">
          Project nickname (optional demo field)
          <input
            name="nickname"
            placeholder="e.g. Harbor teaser"
            autoComplete="off"
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2"
          />
        </label>
        <p className="text-xs text-muted">
          Name, email, phone, and file upload fields are omitted on purpose.
        </p>
        <Button type="submit">Mark intake complete (demo)</Button>
        {submitted && (
          <p className="text-sm text-emerald-300">
            Checklist marked complete in this browser session only.
          </p>
        )}
      </form>
    </div>
  );
}
