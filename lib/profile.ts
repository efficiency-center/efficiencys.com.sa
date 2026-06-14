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
      "Private offices and shared desks in general or specialized branches. General branches welcome any sector. Specialized branches put you next to professionals in your field, so the right connections happen naturally.",
    image: "/assets/imgs/services/01.jpg",
  },
  {
    slug: "preparing",
    title: "Preparing Workspaces",
    summary:
      "We study your field, pick the right location, design it to your vision, and equip it with everything your team needs. You walk into a workspace that is ready from day one.",
    image: "/assets/imgs/services/02.jpg",
  },
  {
    slug: "operator",
    title: "Workspace Operator",
    summary:
      "We run your facility so you don't have to. Reception, administration, maintenance, trained staff. You get the benefit of a professional operation without building one yourself.",
    image: "/assets/imgs/services/03.jpg",
  },
  {
    slug: "solutions",
    title: "Business Challenge Solutions",
    summary:
      "Technical support, accounting, HR, legal, secretarial services, training, and events. Whatever challenge slows your business down, we have a service that keeps it moving.",
    image: "/assets/imgs/stories/brainstorm-together.jpg",
  },
];
