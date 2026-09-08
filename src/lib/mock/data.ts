import { DEFAULT_CREATOR_SLUG } from "../constants";
import type {
  BuyerBooking,
  ContentItem,
  Creator,
  Customer,
  DigitalProduct,
  OnboardingStep,
  Order,
  PortfolioItem,
  Service,
} from "../types";

export const creators: Creator[] = [
  {
    id: "c_elena",
    slug: "elena-voss",
    displayName: "Elena Voss",
    handle: "@elenavoss",
    bio: "Director and colorist making cinematic short films, LUTs, and story-first brand films for teams who care about craft.",
    location: "Los Angeles, CA",
    niches: ["film-video"],
    followers: 428000,
    rating: 4.9,
    reviewCount: 312,
    isVerified: true,
    featuredTitle: "Neon Harbor — teaser",
    featuredSubtitle: "A rain-soaked night portrait of a port city that never clocks out.",
  },
  {
    id: "c_julian",
    slug: "julian-park",
    displayName: "Julian Park",
    handle: "@julianpark",
    bio: "Brand designer shipping logo systems, pitch decks, and Figma kits for early-stage companies.",
    location: "Brooklyn, NY",
    niches: ["graphic-design"],
    followers: 186000,
    rating: 4.8,
    reviewCount: 198,
    isVerified: true,
    featuredTitle: "Atlas identity system",
    featuredSubtitle: "A modular wordmark, motion suite, and launch kit in 14 days.",
  },
  {
    id: "c_kenji",
    slug: "kenji-brooks",
    displayName: "Kenji Brooks",
    handle: "@kenjifit",
    bio: "Strength coach packaging 8-week programs, mobility flows, and form-check sessions for busy professionals.",
    location: "Austin, TX",
    niches: ["fitness"],
    followers: 512000,
    rating: 4.7,
    reviewCount: 640,
    isVerified: true,
    featuredTitle: "Desk-to-deadlift",
    featuredSubtitle: "Twenty minutes, three days a week, no gym required.",
  },
  {
    id: "c_priya",
    slug: "priya-shah",
    displayName: "Priya Shah",
    handle: "@priyabiz",
    bio: "Operator and advisor helping independent creators turn offers, pricing, and ops into a real business.",
    location: "Chicago, IL",
    niches: ["business"],
    followers: 94000,
    rating: 4.9,
    reviewCount: 121,
    isVerified: true,
    featuredTitle: "Offer architecture clinic",
    featuredSubtitle: "A 90-minute teardown of pricing, packaging, and positioning.",
  },
  {
    id: "c_marcus",
    slug: "marcus-hale",
    displayName: "Marcus Hale",
    handle: "@learnwithmarcus",
    bio: "Educator building cohort courses and study systems for first-gen students navigating creative careers.",
    location: "Atlanta, GA",
    niches: ["education"],
    followers: 210000,
    rating: 4.8,
    reviewCount: 274,
    isVerified: true,
    featuredTitle: "Portfolio lab — week 3",
    featuredSubtitle: "How to tell a 90-second story about work that is still in progress.",
  },
  {
    id: "c_sofia",
    slug: "sofia-alvarez",
    displayName: "Sofia Alvarez",
    handle: "@sofiaeats",
    bio: "Recipe developer and cookbook author sharing weeknight meals, pantry sauces, and photography presets.",
    location: "Miami, FL",
    niches: ["food"],
    followers: 367000,
    rating: 4.9,
    reviewCount: 451,
    isVerified: true,
    featuredTitle: "Citrus & smoke",
    featuredSubtitle: "A Sunday table built from one roast chicken and three sauces.",
  },
  {
    id: "c_riley",
    slug: "riley-chen",
    displayName: "Riley Chen",
    handle: "@rileycreates",
    bio: "UGC creator making scroll-stopping product stories, hooks, and usage demos for DTC brands.",
    location: "Seattle, WA",
    niches: ["ugc"],
    followers: 291000,
    rating: 4.8,
    reviewCount: 188,
    isVerified: true,
    featuredTitle: "Hook in 1.2 seconds",
    featuredSubtitle: "A three-clip framework brands actually reuse.",
  },
  {
    id: "c_amara",
    slug: "amara-diallo",
    displayName: "Amara Diallo",
    handle: "@amaratype",
    bio: "Editorial designer crafting type-driven lookbooks, social systems, and print-ready templates.",
    location: "Oakland, CA",
    niches: ["graphic-design"],
    followers: 132000,
    rating: 4.7,
    reviewCount: 96,
    isVerified: false,
    featuredTitle: "Night market lookbook",
    featuredSubtitle: "Typography that feels like neon on wet pavement.",
  },
];

export const products: DigitalProduct[] = [
  {
    id: "p_harbor_luts",
    slug: "harbor-night-luts",
    creatorId: "c_elena",
    title: "Harbor Night LUT Pack",
    description:
      "Twelve cinematic LUTs tuned for wet pavement, sodium lights, and handheld night work. Includes Rec.709 and log variants.",
    category: "film-video",
    priceCents: 4900,
    format: "lut",
    tags: ["color", "night", "cinematic"],
    rating: 4.9,
    reviewCount: 86,
    salesCount: 1240,
    status: "published",
  },
  {
    id: "p_shotlist",
    slug: "short-film-shot-bible",
    creatorId: "c_elena",
    title: "Short Film Shot Bible",
    description:
      "A 48-page planning workbook covering coverage maps, lighting plots, and a one-location production calendar.",
    category: "film-video",
    priceCents: 2900,
    format: "ebook",
    tags: ["production", "planning"],
    rating: 4.8,
    reviewCount: 54,
    salesCount: 610,
    status: "published",
  },
  {
    id: "p_atlas_kit",
    slug: "atlas-brand-kit",
    creatorId: "c_julian",
    title: "Atlas Brand Kit",
    description:
      "Figma file with logo construction, color tokens, type ramp, and 18 social templates for a launch week.",
    category: "graphic-design",
    priceCents: 7900,
    format: "template",
    tags: ["branding", "figma", "launch"],
    rating: 4.8,
    reviewCount: 41,
    salesCount: 390,
    status: "published",
  },
  {
    id: "p_pitch_deck",
    slug: "seed-pitch-deck",
    creatorId: "c_julian",
    title: "Seed Pitch Deck System",
    description:
      "A 14-slide narrative deck with speaker notes and a companion one-pager. Swap logos, keep the story spine.",
    category: "graphic-design",
    priceCents: 5900,
    format: "template",
    tags: ["pitch", "startups"],
    rating: 4.7,
    reviewCount: 33,
    salesCount: 280,
    status: "published",
  },
  {
    id: "p_desk_program",
    slug: "desk-to-deadlift",
    creatorId: "c_kenji",
    title: "Desk-to-Deadlift (8 weeks)",
    description:
      "Three 20-minute sessions a week. Mobility openers, strength progressions, and a no-equipment travel week.",
    category: "fitness",
    priceCents: 3900,
    format: "course",
    tags: ["strength", "mobility"],
    rating: 4.8,
    reviewCount: 210,
    salesCount: 2860,
    status: "published",
  },
  {
    id: "p_form_guide",
    slug: "hinge-form-guide",
    creatorId: "c_kenji",
    title: "Hinge Form Photo Guide",
    description:
      "Printable wall charts and a self-check checklist for hip hinges, rows, and split squats.",
    category: "fitness",
    priceCents: 1200,
    format: "printable",
    tags: ["form", "printable"],
    rating: 4.6,
    reviewCount: 70,
    salesCount: 940,
    status: "published",
  },
  {
    id: "p_offer_os",
    slug: "creator-offer-os",
    creatorId: "c_priya",
    title: "Creator Offer OS",
    description:
      "Notion + spreadsheet system for packaging digital products, services, and retainers without underpricing.",
    category: "business",
    priceCents: 12900,
    format: "template",
    tags: ["pricing", "ops", "notion"],
    rating: 4.9,
    reviewCount: 64,
    salesCount: 510,
    status: "published",
  },
  {
    id: "p_pricing_ebook",
    slug: "stop-hourly-pricing",
    creatorId: "c_priya",
    title: "Stop Hourly Pricing",
    description:
      "A short ebook on value-based packages, scope fences, and the email you send when a client asks for a discount.",
    category: "business",
    priceCents: 1900,
    format: "ebook",
    tags: ["pricing", "clients"],
    rating: 4.8,
    reviewCount: 102,
    salesCount: 1480,
    status: "published",
  },
  {
    id: "p_portfolio_lab",
    slug: "portfolio-story-lab",
    creatorId: "c_marcus",
    title: "Portfolio Story Lab",
    description:
      "A four-module course on selecting work, writing case studies, and recording a 90-second walkthrough.",
    category: "education",
    priceCents: 8900,
    format: "course",
    tags: ["portfolio", "career"],
    rating: 4.8,
    reviewCount: 88,
    salesCount: 720,
    status: "published",
  },
  {
    id: "p_study_system",
    slug: "deep-work-study-system",
    creatorId: "c_marcus",
    title: "Deep Work Study System",
    description:
      "Printable weekly planner plus a digital tracker for studio classes, freelance gigs, and rest.",
    category: "education",
    priceCents: 1500,
    format: "printable",
    tags: ["planner", "students"],
    rating: 4.7,
    reviewCount: 45,
    salesCount: 530,
    status: "published",
  },
  {
    id: "p_weeknight",
    slug: "weeknight-sauce-book",
    creatorId: "c_sofia",
    title: "Weeknight Sauce Book",
    description:
      "Eighteen sauces, three proteins, endless plates. Photo-led ebook with shopping lists and make-ahead notes.",
    category: "food",
    priceCents: 2400,
    format: "ebook",
    tags: ["recipes", "weeknight"],
    rating: 4.9,
    reviewCount: 176,
    salesCount: 2140,
    status: "published",
  },
  {
    id: "p_food_presets",
    slug: "citrus-food-presets",
    creatorId: "c_sofia",
    title: "Citrus Food Presets",
    description:
      "Eight Lightroom presets for daylight kitchens: warm citrus, cool marble, and evening tungsten.",
    category: "food",
    priceCents: 2900,
    format: "preset",
    tags: ["lightroom", "food photography"],
    rating: 4.8,
    reviewCount: 91,
    salesCount: 870,
    status: "published",
  },
  {
    id: "p_ugc_hooks",
    slug: "ugc-hook-library",
    creatorId: "c_riley",
    title: "UGC Hook Library (120)",
    description:
      "One hundred twenty spoken hooks, on-screen text patterns, and B-roll prompts organized by product category.",
    category: "ugc",
    priceCents: 4700,
    format: "ebook",
    tags: ["hooks", "ugc", "scripts"],
    rating: 4.8,
    reviewCount: 77,
    salesCount: 990,
    status: "published",
  },
  {
    id: "p_ugc_pack",
    slug: "dtc-ugc-shot-pack",
    creatorId: "c_riley",
    title: "DTC UGC Shot Pack",
    description:
      "A 22-clip shot list with framing notes, lighting recipes, and caption starters for unbox + demo + social proof.",
    category: "ugc",
    priceCents: 3500,
    format: "template",
    tags: ["production", "dtc"],
    rating: 4.7,
    reviewCount: 39,
    salesCount: 410,
    status: "published",
  },
  {
    id: "p_lookbook",
    slug: "editorial-lookbook-kit",
    creatorId: "c_amara",
    title: "Editorial Lookbook Kit",
    description:
      "InDesign + Figma templates for a 24-page lookbook, including grid, type pairings, and print marks.",
    category: "graphic-design",
    priceCents: 6400,
    format: "template",
    tags: ["editorial", "print"],
    rating: 4.7,
    reviewCount: 28,
    salesCount: 190,
    status: "published",
  },
  {
    id: "p_social_type",
    slug: "type-first-social-system",
    creatorId: "c_amara",
    title: "Type-First Social System",
    description:
      "Sixty type-led frames for launches, quotes, and merch drops. Built for 4:5 and 9:16.",
    category: "graphic-design",
    priceCents: 4200,
    format: "template",
    tags: ["social", "type"],
    rating: 4.6,
    reviewCount: 22,
    salesCount: 260,
    status: "draft",
  },
];

export const services: Service[] = [
  {
    id: "s_brand_film",
    slug: "brand-film-direction",
    creatorId: "c_elena",
    title: "Brand Film Direction",
    description:
      "Treatment, shot list, and on-set direction for a 60–90 second brand film. Color and finishing quoted separately.",
    category: "film-video",
    startingPriceCents: 480000,
    deliveryDays: 28,
    rating: 5,
    reviewCount: 18,
    status: "published",
    packages: [
      {
        name: "Treatment",
        priceCents: 480000,
        deliveryDays: 10,
        includes: ["Creative treatment", "References", "Shot outline"],
      },
      {
        name: "Direct",
        priceCents: 980000,
        deliveryDays: 28,
        includes: ["Treatment", "Two shoot days", "Selects reel"],
      },
      {
        name: "Direct + color",
        priceCents: 1280000,
        deliveryDays: 35,
        includes: ["Everything in Direct", "Color grade", "Online finish"],
      },
    ],
  },
  {
    id: "s_color_session",
    slug: "remote-color-session",
    creatorId: "c_elena",
    title: "Remote Color Session",
    description:
      "A live grading session on a locked cut. You leave with a look development stills pack and notes.",
    category: "film-video",
    startingPriceCents: 65000,
    deliveryDays: 5,
    rating: 4.9,
    reviewCount: 27,
    status: "published",
    packages: [
      {
        name: "Look dev",
        priceCents: 65000,
        deliveryDays: 5,
        includes: ["90-minute session", "3 stills", "LUT export"],
      },
      {
        name: "Sequence grade",
        priceCents: 140000,
        deliveryDays: 8,
        includes: ["Half-day grade", "Notes", "Review round"],
      },
    ],
  },
  {
    id: "s_identity",
    slug: "identity-sprint",
    creatorId: "c_julian",
    title: "Identity Sprint (14 days)",
    description:
      "A focused brand sprint: wordmark, color, type, and a launch kit. One round of revisions.",
    category: "graphic-design",
    startingPriceCents: 420000,
    deliveryDays: 14,
    rating: 4.8,
    reviewCount: 21,
    status: "published",
    packages: [
      {
        name: "Wordmark",
        priceCents: 420000,
        deliveryDays: 14,
        includes: ["Wordmark", "Color + type", "Usage guide"],
      },
      {
        name: "Full system",
        priceCents: 780000,
        deliveryDays: 21,
        includes: ["Wordmark", "Social kit", "Deck cover system"],
      },
    ],
  },
  {
    id: "s_form_check",
    slug: "form-check-pack",
    creatorId: "c_kenji",
    title: "Form-Check Pack",
    description:
      "Send three lift videos. Get timestamped notes, regressions, and a 7-day corrective plan.",
    category: "fitness",
    startingPriceCents: 8900,
    deliveryDays: 3,
    rating: 4.8,
    reviewCount: 154,
    status: "published",
    packages: [
      {
        name: "3 lifts",
        priceCents: 8900,
        deliveryDays: 3,
        includes: ["Written notes", "Corrective plan"],
      },
      {
        name: "Monthly",
        priceCents: 29000,
        deliveryDays: 30,
        includes: ["4 check-ins", "Programming tweaks"],
      },
    ],
  },
  {
    id: "s_offer_clinic",
    slug: "offer-architecture-clinic",
    creatorId: "c_priya",
    title: "Offer Architecture Clinic",
    description:
      "A 90-minute live teardown of pricing, packaging, and the page that sells the offer.",
    category: "business",
    startingPriceCents: 45000,
    deliveryDays: 7,
    rating: 5,
    reviewCount: 36,
    status: "published",
    packages: [
      {
        name: "Clinic",
        priceCents: 45000,
        deliveryDays: 7,
        includes: ["90-minute call", "Offer one-pager", "Follow-up notes"],
      },
      {
        name: "Clinic + 30 days",
        priceCents: 120000,
        deliveryDays: 30,
        includes: ["Clinic", "Two async reviews", "Launch checklist"],
      },
    ],
  },
  {
    id: "s_portfolio_review",
    slug: "portfolio-review",
    creatorId: "c_marcus",
    title: "Portfolio Review",
    description:
      "A structured critique of 6–10 pieces with a recommended sequence and a script for talking about the work.",
    category: "education",
    startingPriceCents: 12000,
    deliveryDays: 5,
    rating: 4.9,
    reviewCount: 62,
    status: "published",
    packages: [
      {
        name: "Async review",
        priceCents: 12000,
        deliveryDays: 5,
        includes: ["Written critique", "Sequence rec"],
      },
      {
        name: "Live review",
        priceCents: 22000,
        deliveryDays: 7,
        includes: ["45-minute call", "Script notes"],
      },
    ],
  },
  {
    id: "s_menu_dev",
    slug: "private-menu-development",
    creatorId: "c_sofia",
    title: "Private Menu Development",
    description:
      "A 6-recipe menu for a pop-up, cookbook chapter, or brand collab, shot-ready and scaled for 20 covers.",
    category: "food",
    startingPriceCents: 180000,
    deliveryDays: 21,
    rating: 4.9,
    reviewCount: 14,
    status: "published",
    packages: [
      {
        name: "Chapter",
        priceCents: 180000,
        deliveryDays: 21,
        includes: ["6 recipes", "Shopping lists", "Plating notes"],
      },
      {
        name: "Pop-up",
        priceCents: 320000,
        deliveryDays: 28,
        includes: ["10 recipes", "Prep calendar", "Allergen matrix"],
      },
    ],
  },
  {
    id: "s_ugc_batch",
    slug: "ugc-batch-6",
    creatorId: "c_riley",
    title: "UGC Batch (6 videos)",
    description:
      "Six vertical videos: hook, demo, and social proof. Raw files plus a caption kit. Usage licensed for paid social (demo).",
    category: "ugc",
    startingPriceCents: 240000,
    deliveryDays: 10,
    rating: 4.8,
    reviewCount: 44,
    status: "published",
    packages: [
      {
        name: "6 videos",
        priceCents: 240000,
        deliveryDays: 10,
        includes: ["6 raw + cutdowns", "Captions", "Usage memo (demo)"],
      },
      {
        name: "12 videos",
        priceCents: 420000,
        deliveryDays: 16,
        includes: ["12 videos", "Hook variants", "Usage memo (demo)"],
      },
    ],
  },
  {
    id: "s_lookbook",
    slug: "lookbook-art-direction",
    creatorId: "c_amara",
    title: "Lookbook Art Direction",
    description:
      "Grid, type, and sequence for a 16–24 page lookbook. You shoot or we pair with a photographer.",
    category: "graphic-design",
    startingPriceCents: 260000,
    deliveryDays: 18,
    rating: 4.7,
    reviewCount: 11,
    status: "published",
    packages: [
      {
        name: "Art direction",
        priceCents: 260000,
        deliveryDays: 18,
        includes: ["Grid + type", "Sequence", "Print specs"],
      },
    ],
  },
  {
    id: "s_coaching_block",
    slug: "programming-block",
    creatorId: "c_kenji",
    title: "12-Week Programming Block",
    description:
      "Custom 12-week strength block with a mid-point call. Equipment-aware and travel-week ready.",
    category: "fitness",
    startingPriceCents: 24900,
    deliveryDays: 84,
    rating: 4.7,
    reviewCount: 39,
    status: "paused",
    packages: [
      {
        name: "12 weeks",
        priceCents: 24900,
        deliveryDays: 84,
        includes: ["Custom program", "Mid-point call"],
      },
    ],
  },
];

export const orders: Order[] = [
  {
    id: "ord_1001",
    creatorId: "c_elena",
    buyerName: "Casey Nguyen",
    itemType: "product",
    itemId: "p_harbor_luts",
    itemTitle: "Harbor Night LUT Pack",
    amountCents: 4900,
    status: "completed",
    createdAt: "2026-08-28T14:12:00Z",
  },
  {
    id: "ord_1002",
    creatorId: "c_elena",
    buyerName: "Sam Ortega",
    itemType: "product",
    itemId: "p_shotlist",
    itemTitle: "Short Film Shot Bible",
    amountCents: 2900,
    status: "completed",
    createdAt: "2026-08-30T09:40:00Z",
  },
  {
    id: "ord_1003",
    creatorId: "c_elena",
    buyerName: "Northline Studio",
    itemType: "service",
    itemId: "s_color_session",
    itemTitle: "Remote Color Session — Look dev",
    amountCents: 65000,
    status: "processing",
    createdAt: "2026-09-02T16:05:00Z",
  },
  {
    id: "ord_1004",
    creatorId: "c_elena",
    buyerName: "Harper Quinn",
    itemType: "product",
    itemId: "p_harbor_luts",
    itemTitle: "Harbor Night LUT Pack",
    amountCents: 4900,
    status: "completed",
    createdAt: "2026-09-04T11:22:00Z",
  },
  {
    id: "ord_1005",
    creatorId: "c_elena",
    buyerName: "Mira Patel",
    itemType: "product",
    itemId: "p_shotlist",
    itemTitle: "Short Film Shot Bible",
    amountCents: 2900,
    status: "refunded",
    createdAt: "2026-09-05T18:01:00Z",
  },
  {
    id: "ord_2001",
    creatorId: "c_julian",
    buyerName: "Lumen Labs",
    itemType: "service",
    itemId: "s_identity",
    itemTitle: "Identity Sprint — Wordmark",
    amountCents: 420000,
    status: "processing",
    createdAt: "2026-09-01T13:00:00Z",
  },
  {
    id: "ord_2002",
    creatorId: "c_julian",
    buyerName: "Drew Kim",
    itemType: "product",
    itemId: "p_atlas_kit",
    itemTitle: "Atlas Brand Kit",
    amountCents: 7900,
    status: "completed",
    createdAt: "2026-08-22T10:18:00Z",
  },
  {
    id: "ord_3001",
    creatorId: "c_kenji",
    buyerName: "Alex Rivera",
    itemType: "product",
    itemId: "p_desk_program",
    itemTitle: "Desk-to-Deadlift (8 weeks)",
    amountCents: 3900,
    status: "completed",
    createdAt: "2026-08-19T07:44:00Z",
  },
  {
    id: "ord_3002",
    creatorId: "c_kenji",
    buyerName: "Jamie Cole",
    itemType: "service",
    itemId: "s_form_check",
    itemTitle: "Form-Check Pack — 3 lifts",
    amountCents: 8900,
    status: "completed",
    createdAt: "2026-09-03T20:11:00Z",
  },
  {
    id: "ord_4001",
    creatorId: "c_priya",
    buyerName: "Eden Craft Co.",
    itemType: "service",
    itemId: "s_offer_clinic",
    itemTitle: "Offer Architecture Clinic",
    amountCents: 45000,
    status: "completed",
    createdAt: "2026-08-26T15:30:00Z",
  },
  {
    id: "ord_4002",
    creatorId: "c_priya",
    buyerName: "Noah Ellis",
    itemType: "product",
    itemId: "p_offer_os",
    itemTitle: "Creator Offer OS",
    amountCents: 12900,
    status: "completed",
    createdAt: "2026-09-06T12:09:00Z",
  },
  {
    id: "ord_5001",
    creatorId: "c_marcus",
    buyerName: "Taylor Brooks",
    itemType: "product",
    itemId: "p_portfolio_lab",
    itemTitle: "Portfolio Story Lab",
    amountCents: 8900,
    status: "completed",
    createdAt: "2026-08-21T19:02:00Z",
  },
  {
    id: "ord_6001",
    creatorId: "c_sofia",
    buyerName: "Chris Lang",
    itemType: "product",
    itemId: "p_weeknight",
    itemTitle: "Weeknight Sauce Book",
    amountCents: 2400,
    status: "completed",
    createdAt: "2026-08-29T08:55:00Z",
  },
  {
    id: "ord_6002",
    creatorId: "c_sofia",
    buyerName: "Harbor Table",
    itemType: "service",
    itemId: "s_menu_dev",
    itemTitle: "Private Menu Development — Chapter",
    amountCents: 180000,
    status: "processing",
    createdAt: "2026-09-07T17:40:00Z",
  },
  {
    id: "ord_7001",
    creatorId: "c_riley",
    buyerName: "Northbound Goods",
    itemType: "service",
    itemId: "s_ugc_batch",
    itemTitle: "UGC Batch (6 videos)",
    amountCents: 240000,
    status: "processing",
    createdAt: "2026-09-04T14:28:00Z",
  },
  {
    id: "ord_7002",
    creatorId: "c_riley",
    buyerName: "Quinn Adler",
    itemType: "product",
    itemId: "p_ugc_hooks",
    itemTitle: "UGC Hook Library (120)",
    amountCents: 4700,
    status: "completed",
    createdAt: "2026-08-25T11:16:00Z",
  },
  {
    id: "ord_8001",
    creatorId: "c_amara",
    buyerName: "Sable Studio",
    itemType: "service",
    itemId: "s_lookbook",
    itemTitle: "Lookbook Art Direction",
    amountCents: 260000,
    status: "completed",
    createdAt: "2026-08-18T13:47:00Z",
  },
  {
    id: "ord_8002",
    creatorId: "c_amara",
    buyerName: "Reese Dalton",
    itemType: "product",
    itemId: "p_lookbook",
    itemTitle: "Editorial Lookbook Kit",
    amountCents: 6400,
    status: "cancelled",
    createdAt: "2026-09-01T09:03:00Z",
  },
];

export const customers: Customer[] = [
  {
    id: "cus_01",
    creatorId: "c_elena",
    displayName: "Northline Studio",
    stage: "active",
    notes: "Color session in progress. Wants a Q4 brand film treatment.",
    lastTouchAt: "2026-09-06T16:00:00Z",
    valueCents: 65000,
  },
  {
    id: "cus_02",
    creatorId: "c_elena",
    displayName: "Casey Nguyen",
    stage: "closed",
    notes: "Bought LUT pack. Follow up with shot bible bundle.",
    lastTouchAt: "2026-08-28T14:12:00Z",
    valueCents: 4900,
  },
  {
    id: "cus_03",
    creatorId: "c_elena",
    displayName: "Harbor Pictures",
    stage: "qualified",
    notes: "Asked about Direct + color package. Demo inquiry only.",
    lastTouchAt: "2026-09-05T10:20:00Z",
    valueCents: 0,
  },
  {
    id: "cus_04",
    creatorId: "c_elena",
    displayName: "Indie Cohort West",
    stage: "lead",
    notes: "Workshop inquiry from the discovery feed (simulated).",
    lastTouchAt: "2026-09-07T08:11:00Z",
    valueCents: 0,
  },
  {
    id: "cus_05",
    creatorId: "c_elena",
    displayName: "Sam Ortega",
    stage: "closed",
    notes: "Shot bible purchase. Left a 5-star review.",
    lastTouchAt: "2026-08-30T09:40:00Z",
    valueCents: 2900,
  },
  {
    id: "cus_06",
    creatorId: "c_elena",
    displayName: "Lumen Labs",
    stage: "lead",
    notes: "Referred by Julian Park. Needs a product film.",
    lastTouchAt: "2026-09-03T12:00:00Z",
    valueCents: 0,
  },
];

export const portfolio: PortfolioItem[] = [
  { id: "pf_1", creatorId: "c_elena", title: "Neon Harbor", kind: "Short film", year: "2026" },
  { id: "pf_2", creatorId: "c_elena", title: "After Hours Transit", kind: "Brand film", year: "2025" },
  { id: "pf_3", creatorId: "c_elena", title: "Salt & Sodium", kind: "Music video", year: "2025" },
  { id: "pf_4", creatorId: "c_elena", title: "Glass District", kind: "Doc short", year: "2024" },
  { id: "pf_5", creatorId: "c_julian", title: "Atlas identity", kind: "Brand system", year: "2026" },
  { id: "pf_6", creatorId: "c_kenji", title: "Desk-to-Deadlift campaign", kind: "UGC series", year: "2026" },
  { id: "pf_7", creatorId: "c_sofia", title: "Citrus & Smoke", kind: "Editorial", year: "2025" },
  { id: "pf_8", creatorId: "c_riley", title: "Northbound launch set", kind: "UGC batch", year: "2026" },
];

export const contentItems: ContentItem[] = [
  {
    id: "ct_1",
    creatorId: "c_elena",
    title: "Harbor teaser — 9:16 cut",
    platform: "tiktok",
    status: "published",
    scheduledAt: "2026-09-01T17:00:00Z",
  },
  {
    id: "ct_2",
    creatorId: "c_elena",
    title: "LUT before/after carousel",
    platform: "instagram",
    status: "scheduled",
    scheduledAt: "2026-09-09T16:00:00Z",
  },
  {
    id: "ct_3",
    creatorId: "c_elena",
    title: "Color session behind the grade",
    platform: "youtube",
    status: "draft",
    scheduledAt: "2026-09-12T18:00:00Z",
  },
  {
    id: "ct_4",
    creatorId: "c_elena",
    title: "Storefront featured poster",
    platform: "storefront",
    status: "published",
    scheduledAt: "2026-08-20T12:00:00Z",
  },
];

export const onboardingSteps: OnboardingStep[] = [
  {
    id: "ob_1",
    label: "Storefront profile",
    detail: "Name, bio, niches, and cover poster.",
    done: true,
  },
  {
    id: "ob_2",
    label: "Publish a digital product",
    detail: "At least one live product with a USD price.",
    done: true,
  },
  {
    id: "ob_3",
    label: "Publish a service",
    detail: "Packages with delivery windows.",
    done: true,
  },
  {
    id: "ob_4",
    label: "Connect payouts",
    detail: "Future: Stripe-hosted onboarding. Disabled in this demo.",
    done: false,
  },
  {
    id: "ob_5",
    label: "Verify age 18+",
    detail: "Future: managed identity check. United States only.",
    done: false,
  },
];

export const buyerLibraryProductIds = [
  "p_harbor_luts",
  "p_desk_program",
  "p_weeknight",
  "p_ugc_hooks",
];

export const buyerSavedProductIds = ["p_offer_os", "p_atlas_kit", "p_food_presets"];
export const buyerSavedServiceIds = ["s_offer_clinic", "s_color_session"];
export const buyerSavedCreatorIds = ["c_elena", "c_sofia", "c_priya"];

export const seedBuyerBookings: BuyerBooking[] = [
  {
    id: "bk_01",
    serviceId: "s_form_check",
    creatorId: "c_kenji",
    packageName: "3 lifts",
    status: "confirmed",
    requestedFor: "2026-09-18",
    amountCents: 8900,
  },
  {
    id: "bk_02",
    serviceId: "s_portfolio_review",
    creatorId: "c_marcus",
    packageName: "Async review",
    status: "requested",
    requestedFor: "2026-09-22",
    amountCents: 12000,
  },
];

export const seedBuyerOrders: Order[] = [
  {
    id: "bord_01",
    creatorId: "c_elena",
    buyerName: "Jordan Blake",
    itemType: "product",
    itemId: "p_harbor_luts",
    itemTitle: "Harbor Night LUT Pack",
    amountCents: 4900,
    status: "completed",
    createdAt: "2026-08-12T15:04:00Z",
  },
  {
    id: "bord_02",
    creatorId: "c_kenji",
    buyerName: "Jordan Blake",
    itemType: "product",
    itemId: "p_desk_program",
    itemTitle: "Desk-to-Deadlift (8 weeks)",
    amountCents: 3900,
    status: "completed",
    createdAt: "2026-08-19T07:44:00Z",
  },
  {
    id: "bord_03",
    creatorId: "c_sofia",
    buyerName: "Jordan Blake",
    itemType: "product",
    itemId: "p_weeknight",
    itemTitle: "Weeknight Sauce Book",
    amountCents: 2400,
    status: "completed",
    createdAt: "2026-08-29T08:55:00Z",
  },
  {
    id: "bord_04",
    creatorId: "c_riley",
    buyerName: "Jordan Blake",
    itemType: "product",
    itemId: "p_ugc_hooks",
    itemTitle: "UGC Hook Library (120)",
    amountCents: 4700,
    status: "completed",
    createdAt: "2026-09-01T19:21:00Z",
  },
];

export function getCreator(idOrSlug: string): Creator | undefined {
  return creators.find((c) => c.id === idOrSlug || c.slug === idOrSlug);
}

export function getDefaultCreator(): Creator {
  return getCreator(DEFAULT_CREATOR_SLUG)!;
}

export function getProduct(idOrSlug: string): DigitalProduct | undefined {
  return products.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export function getService(idOrSlug: string): Service | undefined {
  return services.find((s) => s.id === idOrSlug || s.slug === idOrSlug);
}

export function productsByCreator(creatorId: string): DigitalProduct[] {
  return products.filter((p) => p.creatorId === creatorId);
}

export function servicesByCreator(creatorId: string): Service[] {
  return services.filter((s) => s.creatorId === creatorId);
}

export function ordersByCreator(creatorId: string): Order[] {
  return orders.filter((o) => o.creatorId === creatorId);
}

export function customersByCreator(creatorId: string): Customer[] {
  return customers.filter((c) => c.creatorId === creatorId);
}

export function portfolioByCreator(creatorId: string): PortfolioItem[] {
  return portfolio.filter((p) => p.creatorId === creatorId);
}

export function contentByCreator(creatorId: string): ContentItem[] {
  return contentItems.filter((c) => c.creatorId === creatorId);
}

export function publishedProducts(): DigitalProduct[] {
  return products.filter((p) => p.status === "published");
}

export function publishedServices(): Service[] {
  return services.filter((s) => s.status === "published");
}

export function searchCatalog(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) {
    return { creators: [], products: [], services: [] };
  }
  return {
    creators: creators.filter(
      (c) =>
        c.displayName.toLowerCase().includes(q) ||
        c.handle.toLowerCase().includes(q) ||
        c.bio.toLowerCase().includes(q) ||
        c.niches.some((n) => n.includes(q)),
    ),
    products: publishedProducts().filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)),
    ),
    services: publishedServices().filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q),
    ),
  };
}
