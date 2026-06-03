export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#partners", label: "Partners" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
] as const;

export type StoryImage = {
  src: string;
  alt: string;
};

export const STORY_IMAGES: StoryImage[] = [
  {
    src: "/assets/imgs/stories/story-bar.png",
    alt: "High-top lounge at Efficiency Center",
  },
  {
    src: "/assets/imgs/stories/story-stairs.png",
    alt: "Team member on the stairs at Efficiency Center",
  },
  {
    src: "/assets/imgs/stories/story-building.png",
    alt: "Efficiency Center building exterior",
  },
  {
    src: "/assets/imgs/stories/story-marble-office.png",
    alt: "Glass office with marble desk",
  },
  {
    src: "/assets/imgs/stories/story-creative.png",
    alt: "Creative desk with monitor",
  },
  {
    src: "/assets/imgs/stories/story-focus.png",
    alt: "Minimal desk setup from above",
  },
  {
    src: "/assets/imgs/stories/story-desk-detail.png",
    alt: "Desk detail with plant",
  },
];

/** @deprecated Use STORY_IMAGES */
export const SPACE_IMAGES = STORY_IMAGES;
export type SpaceImage = StoryImage;

export type PartnerLogo = {
  file: string;
  name: string;
  /** Preserve original brand colors on dark background */
  color?: boolean;
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  { file: "ada.png", name: "ADA — أداء", color: true },
];

export const FAQ_ITEMS = [
  {
    question: "What types of workspaces do you offer?",
    answer:
      "We offer furnished private offices, open-space desks, meeting and conference rooms, a creative studio, and specialized incubator environments — all fully serviced and ready for your team.",
    defaultOpen: true,
  },
  {
    question: "Do you help prepare or operate workspaces?",
    answer:
      "Yes. Beyond coworking, we support preparing workspaces from the ground up and operating facilities with trained teams — aligned with the services in our company profile.",
    defaultOpen: false,
  },
  {
    question: "Where are you located?",
    answer:
      "We have two branches: Efficiency Center — Al-Khobar at 6919 Prince Turki ST, Cornich Park, and Efficiency Center — Riyadh Branch. Use Find Us or the footer to open either location on the map.",
    defaultOpen: false,
  },
  {
    question: "What's included in the office package?",
    answer:
      "Your package includes high-speed Wi-Fi, printing, reception, business lounge access, hospitality, 24/7 access, meeting facilities, and access to success-partner offers.",
    defaultOpen: false,
  },
  {
    question: "How does this align with Vision 2030?",
    answer:
      "We aim to be a leading provider of efficient workspaces for local and international sectors, contributing to the Kingdom's goals for progress, innovation, and economic growth.",
    defaultOpen: false,
    hidden: true,
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out via our contact form or call +966 58 111 5550. Our team will schedule a tour and help you find the right space and plan for your business.",
    defaultOpen: false,
    hidden: true,
  },
] as const;
