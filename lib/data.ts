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
    src: "/assets/imgs/stories/story-stairs.jpg",
    alt: "Walking up the stairs at Efficiency Center",
    headline: "morning commute",
    body: "",
  },
  {
    src: "/assets/imgs/stories/drinking-coffee.png",
    alt: "Drinking coffee at the center",
    headline: "first cup of the day",
    body: "",
  },
  {
    src: "/assets/imgs/stories/office-with-a-view.png",
    alt: "Office desk overlooking the city",
    headline: "my office today",
    body: "",
  },
  {
    src: "/assets/imgs/stories/story-bar.png",
    alt: "Lounge area at Efficiency Center",
    headline: "quick catch up",
    body: "",
  },
  {
    src: "/assets/imgs/stories/work-in-a-shared-space.png",
    alt: "Working in a shared workspace",
    headline: "deep work mode",
    body: "",
  },
  {
    src: "/assets/imgs/stories/setting-in-the-businessloung.png",
    alt: "Sitting in the business lounge",
    headline: "between meetings",
    body: "",
  },
  {
    src: "/assets/imgs/stories/brainstorm-together.png",
    alt: "Team brainstorming together",
    headline: "planning Q3",
    body: "",
  },
  {
    src: "/assets/imgs/stories/watching0the-view.png",
    alt: "Watching the view from the center",
    headline: "the view never gets old",
    body: "",
  },
  {
    src: "/assets/imgs/stories/take-a-break.png",
    alt: "Taking a break with a view",
    headline: "5 min break",
    body: "",
  },
  {
    src: "/assets/imgs/stories/story-building.png",
    alt: "Efficiency Center building exterior",
    headline: "the building",
    body: "",
  },
  {
    src: "/assets/imgs/stories/coffee.png",
    alt: "Coffee moment",
    headline: "fuel",
    body: "",
  },
];

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
      "Private enclosed offices, open shared workspaces, a conference room seating 35, a 7-person meeting room, a business lounge, sound and photography studios, a balcony event space (276 sqm), and specialized incubator environments, all fully serviced.",
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
      "Three branches: Efficiency Center Al-Khobar at 6919 Prince Turki ST, Corniche Park (overlooking the Arabian Gulf and Khobar Tower), plus two Riyadh locations: 1st Branch and 2nd Branch on Abi Bakr As Siddiq Rd, Al Mursalat. All are near restaurants, cafes, and key business districts.",
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
      "Our vision is aligned with Saudi Vision 2030. We aspire to shape the Kingdom's future by delivering efficient workspaces for local and international sectors, contributing to progress, innovation, and economic growth.",
    defaultOpen: false,
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out via our contact form, call +966 58 111 5550, or message us on WhatsApp. Our team will schedule a tour of the center and help you find the right space and plan for your business.",
    defaultOpen: false,
  },
] as const;
