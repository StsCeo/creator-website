import { cn } from "@/lib/cn";

export type IconName =
  | "home"
  | "bag"
  | "spark"
  | "users"
  | "chart"
  | "list"
  | "grid"
  | "play"
  | "check"
  | "gear"
  | "heart"
  | "search"
  | "bell"
  | "cart"
  | "menu"
  | "close"
  | "chevron"
  | "panel";

const paths: Record<IconName, string> = {
  home: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z",
  bag: "M6 8h12l-1 12H7L6 8zm3 0V7a3 3 0 0 1 6 0v1",
  spark:
    "M12 3l1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5L12 3z",
  users:
    "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3.5 19c.4-2.6 2.7-4 5.5-4s5.1 1.4 5.5 4M14 15.2c1.7-.4 4.4-.2 5.5 3.8",
  chart:
    "M4 19V9m5 10V5m5 14v-7m5 7V8",
  list: "M8 7h12M8 12h12M8 17h12M5 7h.01M5 12h.01M5 17h.01",
  grid: "M5 5h6v6H5V5zm8 0h6v6h-6V5zM5 13h6v6H5v-6zm8 0h6v6h-6v-6z",
  play: "M8 6.2v11.6L18.5 12 8 6.2z",
  check: "M5 12.5l4.2 4.2L19 7.5",
  gear: "M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zM12 3.5v2M12 18.5v2M4.9 7.1l1.4 1.4M17.7 15.5l1.4 1.4M3.5 12h2M18.5 12h2M4.9 16.9l1.4-1.4M17.7 8.5l1.4-1.4",
  heart:
    "M12 20s-7-4.4-7-9.2C5 8 6.8 6.4 9 6.4c1.3 0 2.4.6 3 1.6.6-1 1.7-1.6 3-1.6 2.2 0 4 1.6 4 4.4C19 15.6 12 20 12 20z",
  search:
    "M11 5.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM16.5 16.5 20 20",
  bell: "M6 16h12l-1.2-2.4a6 6 0 0 1-.8-3.1V9a5 5 0 0 0-10 0v1.5c0 1.1-.3 2.1-.8 3.1L6 16zm4 2a2 2 0 0 0 4 0",
  cart: "M5 6h2l1.2 9h9.3L19 9H8M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  chevron: "M9 6l6 6-6 6",
  panel: "M4 6h16v12H4V6zm6 0v12",
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  );
}
