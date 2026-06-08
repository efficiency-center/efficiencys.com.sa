export type ServicePillar = {
  slug: string;
  title: string;
  summary: string;
  image: string;
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    slug: "coworking",
    title: "Business Incubator & Coworking",
    summary:
      "Tailored spaces with comprehensive amenities across various fields. General branches serve any sector, while specialized branches connect you with pioneers in your field — private enclosed offices or shared workspaces, equipped for the highest quality and efficiency.",
    image: "/assets/imgs/services/01.png",
  },
  {
    slug: "preparing",
    title: "Preparing Workspaces",
    summary:
      "We make your vision a reality. Starting from a comprehensive study of your field, we select and design the location to your needs, then equip it with the latest technologies — ensuring your work environment is ready for peak performance.",
    image: "/assets/imgs/services/02.png",
  },
  {
    slug: "operator",
    title: "Workspace Operator",
    summary:
      "Decades of business experience, reflected in our strategic vision. We operate your facilities with high efficiency across administrative aspects, laying strong foundations for a successful start through trained and developed teams.",
    image: "/assets/imgs/services/03.png",
  },
  {
    slug: "solutions",
    title: "Business Challenge Solutions",
    summary:
      "A wide range of services to tackle your challenges — technical support, accounting, HR, legal affairs, secretarial services, training courses, events, and products that keep your business moving forward in a changing market.",
    image: "/assets/imgs/services/04.png",
  },
];
