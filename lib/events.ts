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
    title: "Seren Launch",
    description:
      "Hosting the launch of Seren, a luxury jewelry brand, right here at Efficiency Center.",
    image: "/assets/imgs/services/01.jpg",
    video: "/assets/video/seren.mp4",
  },
  {
    id: "keeta-v",
    title: "Keeta App Launch",
    description:
      "Efficiency Center celebrates the launch of the global app Keeta in Al-Khobar, supporting its entry into the Saudi market.",
    image: "/assets/imgs/services/01.jpg",
    video: "/assets/video/keeta-v.mp4",
  },
  {
    id: "balcony",
    title: "Balcony Market",
    description:
      "A seasonal event on our balcony supporting local brands and bringing the community together.",
    image: "/assets/imgs/services/special-location-building.png",
    video: "/assets/video/balcony-snap.mp4",
  },
];
