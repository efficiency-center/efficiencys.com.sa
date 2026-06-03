import { withBasePath } from "@/lib/paths";

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
    desc: "Move-in-ready private offices with premium furniture and climate control — designed for teams that need a fully integrated headquarters from day one.",
    image: "/assets/imgs/services/furnished-offices-14.png",
  },
  {
    num: "02",
    slug: "open-space-offices",
    title: "Open Space Offices",
    desc: "Flexible shared workspaces that foster collaboration, skill development, and efficient use of resources across sectors.",
    image: "/assets/imgs/services/open-space-offices-dsc05461.png",
  },
  {
    num: "03",
    slug: "conference-room",
    title: "Conference Room",
    desc: "Fully equipped conference rooms for board meetings, client presentations, training, and official celebrations.",
    image: "/assets/imgs/services/conference-room-5.png",
  },
  {
    num: "04",
    slug: "meeting-room",
    title: "Meeting Room",
    desc: "Intimate meeting spaces with AV support for syncs, interviews, and partner discussions.",
    image: "/assets/imgs/services/meeting-room-dsc.png",
  },
  {
    num: "05",
    slug: "wifi-printers",
    title: "Wi-Fi & Printers",
    desc: "Enterprise Wi-Fi plus professional printing, scanning, and copying — operational support built into every floor.",
  },
  {
    num: "06",
    slug: "business-lounge",
    title: "Business Lounge",
    desc: "A refined lounge to host guests, network, and recharge in a motivating coworking environment.",
    image: "/assets/imgs/services/business-lounge-dsc04416.png",
  },
  {
    num: "07",
    slug: "hospitality",
    title: "Hospitality",
    desc: "Complimentary refreshments and attentive service for a comprehensive, unique center experience.",
  },
  {
    num: "08",
    slug: "studio",
    title: "Studio",
    desc: "Dedicated studio space for content creation, podcasts, and creative production.",
  },
  {
    num: "09",
    slug: "24-7-access",
    title: "24/7 Access",
    desc: "Secure round-the-clock access for teams working across time zones and deadlines.",
  },
  {
    num: "10",
    slug: "reception",
    title: "Reception",
    desc: "Professional front-desk reception, secretarial support, and visitor handling on your behalf.",
    image: "/assets/imgs/services/reception-dsc00220.png",
  },
  {
    num: "11",
    slug: "special-location",
    title: "Special Location",
    desc: "Prime Corniche Park address in Al-Khobar with stunning views, connectivity, and a specialized environment for your sector.",
    image: "/assets/imgs/services/special-location-building.png",
  },
  {
    num: "12",
    slug: "smoking-area",
    title: "Smoking Area",
    desc: "Designated outdoor zones kept separate from workspaces for everyone's comfort.",
  },
];

export function getServiceImage(service: Service): string {
  const path = service.image ?? `/assets/imgs/services/${service.slug}.png`;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return withBasePath(path);
}
