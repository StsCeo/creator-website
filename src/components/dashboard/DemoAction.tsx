"use client";

import { Button } from "@/components/ui/Button";
import { useDemo } from "@/components/providers/DemoProvider";

export function DemoAction({
  label,
  message = "Demo only. This control does not save, upload, email, or charge.",
}: {
  label: string;
  message?: string;
}) {
  const { notify } = useDemo();
  return (
    <Button variant="secondary" size="sm" onClick={() => notify(message)}>
      {label}
    </Button>
  );
}
