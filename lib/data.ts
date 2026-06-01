export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#partners", label: "Partners" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
] as const;

export const SPACE_IMAGES = [
  {
    src: "/assets/imgs/services/furnished-offices.png",
    alt: "Furnished offices at Efficiency Center",
    className: "spaces__item--tall",
    local: true,
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
    alt: "Meeting area",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
    alt: "Collaborative workspace",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e7c?auto=format&fit=crop&w=900&q=80",
    alt: "Lounge area",
    className: "spaces__item--wide",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
    alt: "Private office",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1577412647305-991150c7d4b8?auto=format&fit=crop&w=600&q=80",
    alt: "Desk area",
    className: "",
  },
] as const;

export type PartnerLogo = {
  file: string;
  name: string;
  /** Preserve original brand colors on dark background */
  color?: boolean;
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  { file: "ada.png", name: "ADA — أداء", color: true },
  { file: "a.png", name: "Partner" },
  { file: "b.png", name: "Partner" },
  { file: "d.png", name: "Partner" },
  { file: "e.png", name: "Partner" },
  { file: "f.png", name: "Partner" },
  { file: "ff.png", name: "Partner" },
  { file: "p.png", name: "Partner" },
  { file: "sdfgsf.png", name: "Partner" },
];

export const FAQ_ITEMS = [
  {
    question: "What types of offices do you offer?",
    answer:
      "We offer furnished private offices, open-space desks, meeting rooms, conference rooms, and a creative studio — all fully serviced and ready for your team.",
    defaultOpen: true,
  },
  {
    question: "Where are you located?",
    answer:
      "We have two branches: Efficiency Center — Al-Khobar at 6919 Prince Turki ST, Cornich Park, and Efficiency Center — Riyadh Branch in Riyadh. Use the Find Us section or footer to view either location on the map.",
    defaultOpen: false,
  },
  {
    question: "What's included in the office package?",
    answer:
      "Your package includes high-speed Wi-Fi, printing, reception services, business lounge access, hospitality, 24/7 access, and use of meeting facilities.",
    defaultOpen: false,
  },
  {
    question: "Do you offer flexible plans?",
    answer:
      "Yes. We offer flexible membership and office plans tailored to startups, growing teams, and established businesses. Contact us to discuss options.",
    defaultOpen: false,
    hidden: true,
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out via our contact form or call +966 58 111 5550. Our team will schedule a tour and help you find the right space for your business.",
    defaultOpen: false,
    hidden: true,
  },
] as const;
