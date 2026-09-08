import type { Niche } from "./types";

export const PRODUCT_COVER: Record<string, string> = {
  p_harbor_luts: "/covers/cover-harbor-night.png",
  p_shotlist: "/covers/cover-shot-bible.png",
  p_atlas_kit: "/covers/cover-atlas-brand.png",
  p_pitch_deck: "/covers/cover-pitch-deck.png",
  p_desk_program: "/covers/cover-desk-deadlift.png",
  p_form_guide: "/covers/cover-hinge-form.png",
  p_offer_os: "/covers/cover-offer-os.png",
  p_pricing_ebook: "/covers/cover-hourly-pricing.png",
  p_portfolio_lab: "/covers/cover-portfolio-lab.png",
  p_study_system: "/covers/cover-study-system.png",
  p_weeknight: "/covers/cover-weeknight-sauce.png",
  p_food_presets: "/covers/cover-citrus-presets.png",
  p_ugc_hooks: "/covers/cover-ugc-hooks.png",
  p_ugc_pack: "/covers/cover-ugc-shot-pack.png",
  p_lookbook: "/covers/cover-lookbook.png",
  p_social_type: "/covers/cover-type-social.png",
  p_free_lighting: "/covers/cover-free-lighting.png",
  p_free_color: "/covers/cover-free-color.png",
  p_free_mobility: "/covers/cover-free-mobility.png",
};

export const SERVICE_COVER: Record<string, string> = {
  s_brand_film: "/covers/cover-service-brand-film.png",
  s_color_session: "/covers/cover-service-color.png",
  s_identity: "/covers/cover-service-identity.png",
  s_form_check: "/covers/cover-service-form.png",
  s_offer_clinic: "/covers/cover-service-clinic.png",
  s_portfolio_review: "/covers/cover-service-portfolio.png",
  s_menu_dev: "/covers/cover-service-menu.png",
  s_ugc_batch: "/covers/cover-service-ugc.png",
  s_lookbook: "/covers/cover-service-lookbook.png",
  s_coaching_block: "/covers/cover-service-programming.png",
};

export const CREATOR_AVATAR: Record<string, string> = {
  c_elena: "/avatars/avatar-elena.png",
  c_julian: "/avatars/avatar-julian.png",
  c_kenji: "/avatars/avatar-kenji.png",
  c_priya: "/avatars/avatar-priya.png",
  c_marcus: "/avatars/avatar-marcus.png",
  c_sofia: "/avatars/avatar-sofia.png",
  c_riley: "/avatars/avatar-riley.png",
  c_amara: "/avatars/avatar-amara.png",
};

export const CATEGORY_COVER: Record<Niche, string> = {
  "film-video": "/categories/cat-film-video.png",
  "graphic-design": "/categories/cat-graphic-design.png",
  fitness: "/categories/cat-fitness.png",
  business: "/categories/cat-business.png",
  education: "/categories/cat-education.png",
  food: "/categories/cat-food.png",
  ugc: "/categories/cat-ugc.png",
};

export const HERO_IMAGE = "/hero/hero-creator-district.png";
export const SPOTLIGHT_IMAGE = "/hero/spotlight-elena.png";

export function productCover(id: string): string {
  return PRODUCT_COVER[id] ?? "/covers/cover-harbor-night.png";
}

export function serviceCover(id: string): string {
  return SERVICE_COVER[id] ?? "/covers/cover-service-brand-film.png";
}

export function creatorAvatar(id: string): string {
  return CREATOR_AVATAR[id] ?? "/avatars/avatar-elena.png";
}
