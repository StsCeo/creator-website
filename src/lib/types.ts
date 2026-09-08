export type Niche =
  | "film-video"
  | "graphic-design"
  | "fitness"
  | "business"
  | "education"
  | "food"
  | "ugc";

export type ProductFormat =
  | "preset"
  | "template"
  | "ebook"
  | "course"
  | "lut"
  | "printable";

export type ProductStatus = "published" | "draft" | "archived";
export type ServiceStatus = "published" | "paused" | "draft";
export type OrderStatus =
  | "completed"
  | "processing"
  | "refunded"
  | "cancelled";
export type BookingStatus =
  | "requested"
  | "confirmed"
  | "completed"
  | "cancelled";
export type CrmStage = "lead" | "qualified" | "active" | "closed";
export type DemoRole = "creator" | "buyer" | "admin";
export type ContentPlatform = "tiktok" | "instagram" | "youtube" | "storefront";
export type ContentStatus = "draft" | "scheduled" | "published";

export type Creator = {
  id: string;
  slug: string;
  displayName: string;
  handle: string;
  bio: string;
  location: string;
  niches: Niche[];
  followers: number;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  featuredTitle: string;
  featuredSubtitle: string;
};

export type DigitalProduct = {
  id: string;
  slug: string;
  creatorId: string;
  title: string;
  description: string;
  category: Niche;
  priceCents: number;
  format: ProductFormat;
  tags: string[];
  rating: number;
  reviewCount: number;
  salesCount: number;
  status: ProductStatus;
};

export type ServicePackage = {
  name: string;
  priceCents: number;
  deliveryDays: number;
  includes: string[];
};

export type Service = {
  id: string;
  slug: string;
  creatorId: string;
  title: string;
  description: string;
  category: Niche;
  startingPriceCents: number;
  deliveryDays: number;
  packages: ServicePackage[];
  rating: number;
  reviewCount: number;
  status: ServiceStatus;
};

export type Order = {
  id: string;
  creatorId: string;
  buyerName: string;
  itemType: "product" | "service";
  itemId: string;
  itemTitle: string;
  amountCents: number;
  status: OrderStatus;
  createdAt: string;
};

export type Customer = {
  id: string;
  creatorId: string;
  displayName: string;
  stage: CrmStage;
  notes: string;
  lastTouchAt: string;
  valueCents: number;
};

export type PortfolioItem = {
  id: string;
  creatorId: string;
  title: string;
  kind: string;
  year: string;
};

export type ContentItem = {
  id: string;
  creatorId: string;
  title: string;
  platform: ContentPlatform;
  status: ContentStatus;
  scheduledAt: string;
};

export type OnboardingStep = {
  id: string;
  label: string;
  detail: string;
  done: boolean;
};

export type BuyerBooking = {
  id: string;
  serviceId: string;
  creatorId: string;
  packageName: string;
  status: BookingStatus;
  requestedFor: string;
  amountCents: number;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type LocalBuyerOrder = {
  id: string;
  productId: string;
  title: string;
  amountCents: number;
  createdAt: string;
  demo: true;
};
