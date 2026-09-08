import type { DemoRole, Niche } from "./types";

export const BRAND = {
  name: "Creator District",
  short: "CD",
  tagline: "Everything creators make, all in one place.",
} as const;

export const DEFAULT_CREATOR_SLUG = "elena-voss";
export const DEFAULT_BUYER_NAME = "Jordan Blake";

export const DEMO_NOTICE =
  "Front-end prototype. Mock data and local UI only. No real accounts, payments, or personal data are collected.";

export const NICHE_LABELS: Record<Niche, string> = {
  "film-video": "Film & Video",
  "graphic-design": "Graphic Design",
  fitness: "Fitness",
  business: "Business",
  education: "Education",
  food: "Food & Cookbooks",
  ugc: "UGC",
};

export const FORMAT_LABELS: Record<string, string> = {
  preset: "Presets",
  template: "Templates",
  ebook: "eBook",
  course: "Course",
  lut: "LUTs",
  printable: "Printable",
};

export const ROLE_LABELS: Record<DemoRole, string> = {
  creator: "Creator",
  buyer: "Buyer",
  admin: "Platform Admin",
};

export const MARKETPLACE_NAV = [
  { href: "/", label: "Discover", icon: "home" },
  { href: "/products", label: "Digital Products", icon: "bag" },
  { href: "/services", label: "Services", icon: "spark" },
  { href: "/creators", label: "Creators", icon: "users" },
  { href: "/trending", label: "Trending", icon: "flame" },
  { href: "/following", label: "Following", icon: "users" },
  { href: "/saved", label: "Saved", icon: "heart" },
  { href: "/library", label: "My Library", icon: "grid" },
  { href: "/orders", label: "Orders & Bookings", icon: "list" },
  { href: "/sell", label: "Sell on Creator District", icon: "store" },
] as const;

export const MARKETPLACE_GROUPS = [
  {
    label: "Explore",
    items: MARKETPLACE_NAV.slice(0, 5),
  },
  {
    label: "Your space",
    items: MARKETPLACE_NAV.slice(5, 9),
  },
] as const;

export const PUBLIC_NAV = MARKETPLACE_NAV;

export const CREATOR_NAV = [
  { href: "/dashboard", label: "Overview", icon: "home" },
  { href: "/dashboard/analytics", label: "Revenue", icon: "chart" },
  { href: "/dashboard/products", label: "Products", icon: "bag" },
  { href: "/dashboard/services", label: "Services", icon: "spark" },
  { href: "/dashboard/orders", label: "Orders", icon: "list" },
  { href: "/dashboard/customers", label: "Customers", icon: "users" },
  { href: "/dashboard/portfolio", label: "Portfolio", icon: "grid" },
  { href: "/dashboard/content", label: "UGC / Content", icon: "play" },
  { href: "/dashboard/onboarding", label: "Onboarding", icon: "check" },
  { href: "/dashboard/settings", label: "Settings", icon: "gear" },
] as const;

export const BUYER_NAV = [
  { href: "/buyer", label: "Overview", icon: "home" },
  { href: "/buyer/orders", label: "Orders", icon: "list" },
  { href: "/buyer/library", label: "Library", icon: "grid" },
  { href: "/buyer/saved", label: "Saved", icon: "heart" },
  { href: "/buyer/bookings", label: "Bookings", icon: "spark" },
] as const;

export const ADMIN_NAV = [
  { href: "/admin", label: "Overview", icon: "home" },
  { href: "/admin/creators", label: "Creators", icon: "users" },
  { href: "/admin/catalog", label: "Catalog", icon: "bag" },
  { href: "/admin/orders", label: "Orders", icon: "list" },
  { href: "/admin/reports", label: "Reports", icon: "chart" },
  { href: "/admin/settings", label: "Settings", icon: "gear" },
] as const;

export function isStudioPath(pathname: string): boolean {
  return (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/buyer") ||
    pathname.startsWith("/admin")
  );
}
