"use client";

import type { ReactNode } from "react";
import { DemoProvider } from "./DemoProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <DemoProvider>{children}</DemoProvider>;
}
