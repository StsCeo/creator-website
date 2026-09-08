import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
        size === "sm" && "px-3 py-1.5 text-xs",
        size === "md" && "px-4 py-2 text-sm",
        size === "lg" && "px-6 py-3 text-base",
        variant === "primary" &&
          "bg-gradient-to-r from-accent via-accent-2 to-accent-3 text-white shadow-lg shadow-accent-2/20 hover:opacity-90",
        variant === "secondary" &&
          "border border-white/15 bg-white/5 hover:border-white/30",
        variant === "ghost" && "hover:bg-white/5",
        variant === "danger" &&
          "border border-rose-400/30 bg-rose-400/10 text-rose-200 hover:bg-rose-400/20",
        className,
      )}
      {...props}
    />
  );
}
