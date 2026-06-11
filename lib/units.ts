import { withBasePath } from "@/lib/paths";

export type Unit = {
  slug: string;
  title: string;
  detail: string;
  image: string;
  featured?: boolean;
};

export const UNITS: Unit[] = [
  {
    slug: "private-offices",
    title: "Private Offices",
    detail: "Fully furnished and move-in ready. Designed for teams that need their own integrated headquarters.",
    image: "/assets/imgs/services/furnished-offices-14.png",
    featured: true,
  },
  {
    slug: "open-space",
    title: "Shared Workspaces",
    detail: "Open desks in a collaborative environment that connects you with professionals across sectors.",
    image: "/assets/imgs/services/open-space-offices-dsc05461.png",
    featured: true,
  },
  {
    slug: "conference-room",
    title: "Conference Room",
    detail: "Seats up to 35. Equipped for board meetings, presentations, and corporate events.",
    image: "/assets/imgs/services/conference.png",
  },
  {
    slug: "meeting-room",
    title: "Meeting Room",
    detail: "Seats up to 7. AV-ready for focused discussions and partner syncs.",
    image: "/assets/imgs/services/meeting-room-dsc.png",
  },
  {
    slug: "business-lounge",
    title: "Business Lounge",
    detail: "A refined space to host guests, network, and recharge between meetings.",
    image: "/assets/imgs/services/business-lounge.jpeg",
  },
  {
    slug: "studio",
    title: "Sound & Photo Studio",
    detail: "Dedicated recording and photography studios for professional content creation.",
    image: "/assets/imgs/services/studio.png",
  },
  {
    slug: "balcony",
    title: "Balcony",
    detail: "276 sqm open-air space overlooking the Gulf. Perfect for events, celebrations, and networking.",
    image: "/assets/imgs/services/balcony.JPG",
  },
];

export function getUnitImage(unit: Unit): string {
  return withBasePath(unit.image);
}
