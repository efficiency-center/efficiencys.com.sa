export type EventCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
};

export const EVENTS: EventCard[] = [
  {
    id: "seren",
    title: "Seren",
    description:
      "An exclusive gathering celebrating creativity and innovation at Efficiency Center.",
    image: "/assets/imgs/services/01.png",
    video: "/assets/video/seren.mp4",
  },
  {
    id: "keeta-v",
    title: "Keeta V",
    description:
      "A special collaboration event hosted at Efficiency Center — connecting creators and businesses.",
    image: "/assets/imgs/services/01.png",
    video: "/assets/video/keeta-v.mp4",
  },
  {
    id: "balcony",
    title: "Balcony Evening",
    description:
      "Networking under the Khobar skyline — 276 sqm of open-air space for events and celebrations.",
    image: "/assets/imgs/services/special-location-building.png",
    video: "/assets/video/balcony-snap.mp4",
  },
  {
    id: "carnival",
    title: "Carnival Games",
    description:
      "Team-building activities and games that bring our community together in the shared spaces.",
    image: "/assets/imgs/stories/story-bar.png",
  },
  {
    id: "ramadan-iftar",
    title: "Ramadan Iftar",
    description:
      "Breaking fast together as a community — hospitality and connection during the holy month.",
    image: "/assets/imgs/services/business-lounge-dsc04416.png",
  },
  {
    id: "ghabga",
    title: "Ghabga Night",
    description:
      "Late-night gatherings celebrating tradition and building lasting business relationships.",
    image: "/assets/imgs/stories/story-creative.png",
  },
  {
    id: "workshops",
    title: "Workshops & Training",
    description:
      "Knowledge-sharing sessions and skill-building workshops hosted in our conference facilities.",
    image: "/assets/imgs/services/conference-room-5.png",
  },
];
