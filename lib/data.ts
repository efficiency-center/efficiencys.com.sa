export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#partners", label: "Partners" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
] as const;

export type StoryCard = {
  src: string;
  alt: string;
  headline: string;
  body: string;
  featured?: boolean;
};

export const STORY_CARDS: StoryCard[] = [
  {
    featured: true,
    src: "/assets/imgs/stories/story-stairs.png",
    alt: "Team member on the stairs at Efficiency Center",
    headline: "Your hike to peak.",
    body: "Real moments from our spaces — where teams climb toward their next milestone, one step at a time.",
  },
  {
    featured: true,
    src: "/assets/imgs/stories/story-building.png",
    alt: "Efficiency Center building exterior",
    headline: "Built for how you work.",
    body: "Fully serviced offices and lounges at Corniche Park — designed for focus, collaboration, and growth.",
  },
  {
    src: "/assets/imgs/stories/story-bar.png",
    alt: "High-top lounge at Efficiency Center",
    headline: "Coffee chats count.",
    body: "The lounge is where ideas meet before the meeting starts.",
  },
  {
    src: "/assets/imgs/stories/story-marble-office.png",
    alt: "Glass office with marble desk",
    headline: "Private offices.",
    body: "Turn-key spaces with premium finishes and room to think.",
  },
  {
    src: "/assets/imgs/stories/story-creative.png",
    alt: "Creative desk with monitor",
    headline: "Creative desks.",
    body: "Open layouts with views and the tools your team needs.",
  },
  {
    src: "/assets/imgs/stories/story-focus.png",
    alt: "Minimal desk setup from above",
    headline: "Deep focus.",
    body: "Quiet corners for work that needs your full attention.",
  },
  {
    src: "/assets/imgs/stories/story-desk-detail.png",
    alt: "Desk detail with plant",
    headline: "Details matter.",
    body: "Plants, light, and calm — the small things that shape the day.",
  },
];

export const STORY_FEATURED = STORY_CARDS.filter((card) => card.featured);
export const STORY_GALLERY = STORY_CARDS.filter((card) => !card.featured);

export type PartnerLogo = {
  file: string;
  name: string;
  /** Preserve original brand colors on dark background */
  color?: boolean;
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  { file: "saudi-aramco.png", name: "Saudi Aramco", color: true },
  { file: "satorp-logo-colored.png", name: "SATORP", color: true },
  { file: "adnoc-logo.png", name: "ADNOC", color: true },
  { file: "accenture-logo.png", name: "Accenture", color: true },
  { file: "gdc-new.png", name: "GDC Middle East", color: true },
  { file: "Al-Salam-Hospitals.jpg", name: "Al-Salam Hospitals", color: true },
  { file: "keeta-logo.png", name: "Keeta", color: true },
  { file: "channel-logo-color.webp", name: "Channel", color: true },
  { file: "Dhahia-logo-maroon.png", name: "Dhahia", color: true },
  { file: "IWS_logo_transparent.png", name: "IWS", color: true },
  { file: "STATS_Group_2022-compressed.webp", name: "STATS Group", color: true },
  { file: "draken.svg", name: "Draken", color: true },
  { file: "ebit.svg", name: "Ebit", color: true },
  { file: "ef.svg", name: "EF", color: true },
  { file: "foodaroma.png", name: "Food Aroma", color: true },
  { file: "kepco.png", name: "KEPCO", color: true },
  { file: "logo-foodex.png", name: "Foodex", color: true },
  { file: "sahseh.webp", name: "Sahseh", color: true },
  { file: "ada.png", name: "ADA", color: true },
];

export const FAQ_ITEMS = [
  {
    question: "What types of workspaces do you offer?",
    answer:
      "Private enclosed offices, open shared workspaces, a conference room seating 35, a 7-person meeting room, a business lounge, sound and photography studios, a balcony event space (276 sqm), and specialized incubator environments — all fully serviced.",
    defaultOpen: true,
  },
  {
    question: "Do you only provide coworking, or more?",
    answer:
      "We offer four core services: business incubation and coworking, workspace preparation from scratch, facility operations with trained teams, and business challenge solutions including technical support, accounting, HR, legal, and secretarial services.",
    defaultOpen: false,
  },
  {
    question: "Where are you located?",
    answer:
      "Two branches: Efficiency Center — Al-Khobar at 6919 Prince Turki ST, Corniche Park (overlooking the Arabian Gulf and Khobar Tower), and Efficiency Center — Riyadh. Both are near restaurants, cafés, and key business districts.",
    defaultOpen: false,
  },
  {
    question: "What's included with my office?",
    answer:
      "High-speed Wi-Fi, printing and scanning, 24/7 access, professional reception and secretarial support, hospitality service, business lounge access, meeting room booking, stationery kits, and access to success-partner offers.",
    defaultOpen: false,
  },
  {
    question: "How does this align with Vision 2030?",
    answer:
      "Our vision is aligned with Saudi Vision 2030 — we aspire to shape the Kingdom's future by delivering efficient workspaces for local and international sectors, contributing to progress, innovation, and economic growth.",
    defaultOpen: false,
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out via our contact form, call +966 58 111 5550, or message us on WhatsApp. Our team will schedule a tour of the center and help you find the right space and plan for your business.",
    defaultOpen: false,
  },
] as const;
