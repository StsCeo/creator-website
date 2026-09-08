"use client";

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string; reference: string }
  | { kind: "error"; message: string; fieldErrors?: Record<string, string> };

const INITIAL = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const disabled = status.kind === "submitting";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus({
          kind: "success",
          message: data.message as string,
          reference: data.reference as string,
        });
        setValues(INITIAL);
      } else {
        setStatus({
          kind: "error",
          message:
            (data.error as string) ??
            "Please fix the highlighted fields and try again.",
          fieldErrors: data.errors as Record<string, string> | undefined,
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: "Network error — please try again in a moment.",
      });
    }
  }

  function update<K extends keyof typeof INITIAL>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  const fieldError = (name: keyof typeof INITIAL) =>
    status.kind === "error" ? status.fieldErrors?.[name] : undefined;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Jordan Lee"
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
        />
        {fieldError("name") && (
          <p className="text-sm text-accent-2">{fieldError("name")}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
        />
        {fieldError("email") && (
          <p className="text-sm text-accent-2">{fieldError("email")}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell me about your project or collaboration idea…"
          className="resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
        />
        {fieldError("message") && (
          <p className="text-sm text-accent-2">{fieldError("message")}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {disabled ? "Sending…" : "Send message"}
      </button>

      {status.kind === "success" && (
        <div
          role="status"
          className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
        >
          {status.message}{" "}
          <span className="opacity-70">(ref: {status.reference})</span>
        </div>
      )}

      {status.kind === "error" && !status.fieldErrors && (
        <div
          role="alert"
          className="rounded-lg border border-accent-2/30 bg-accent-2/10 px-4 py-3 text-sm text-accent-2"
        >
          {status.message}
        </div>
      )}
    </form>
  );
}
