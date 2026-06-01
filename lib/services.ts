export type Service = {
  num: string;
  slug: string;
  title: string;
  desc: string;
  /** Override path; defaults to /assets/imgs/services/{slug}.png */
  image?: string;
};

export const SERVICES: Service[] = [
  {
    num: "01",
    slug: "furnished-offices",
    title: "Furnished Offices",
    desc: "Move-in-ready private offices with premium furniture, climate control, and everything your team needs from day one.",
    image: "/assets/imgs/services/furnished-offices.png",
  },
  {
    num: "02",
    slug: "open-space-offices",
    title: "Open Space Offices",
    desc: "Flexible open-plan desks designed for collaboration, focus, and scaling teams without long-term commitments.",
  },
  {
    num: "03",
    slug: "conference-room",
    title: "Conference Room",
    desc: "Fully equipped conference rooms for board meetings, client presentations, and team workshops.",
  },
  {
    num: "04",
    slug: "meeting-room",
    title: "Meeting Room",
    desc: "Intimate meeting spaces with AV support for quick syncs, interviews, and partner calls.",
  },
  {
    num: "05",
    slug: "wifi-printers",
    title: "Wi-Fi & Printers",
    desc: "High-speed enterprise Wi-Fi and professional printing, scanning, and copying on every floor.",
  },
  {
    num: "06",
    slug: "business-lounge",
    title: "Business Lounge",
    desc: "A refined lounge to host guests, take breaks, and network in a premium coworking environment.",
  },
  {
    num: "07",
    slug: "hospitality",
    title: "Hospitality",
    desc: "Complimentary refreshments and attentive service so you can stay focused on what matters.",
  },
  {
    num: "08",
    slug: "studio",
    title: "Studio",
    desc: "Dedicated studio space for content creation, podcasts, and creative production work.",
  },
  {
    num: "09",
    slug: "24-7-access",
    title: "24/7 Access",
    desc: "Round-the-clock secure access for teams that work across time zones and deadlines.",
  },
  {
    num: "10",
    slug: "reception",
    title: "Reception",
    desc: "Professional front-desk reception to greet visitors and handle mail on your behalf.",
  },
  {
    num: "11",
    slug: "special-location",
    title: "Special Location",
    desc: "Prime Corniche Park address in Al-Khobar with stunning views and excellent connectivity.",
  },
  {
    num: "12",
    slug: "smoking-area",
    title: "Smoking Area",
    desc: "Designated outdoor smoking zones kept separate from workspaces for everyone's comfort.",
  },
];

export function getServiceImage(service: Service): string {
  return service.image ?? `/assets/imgs/services/${service.slug}.png`;
}
