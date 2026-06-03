/** Copy sourced from COMPANY PROFILE (Efficiency Point Co.) */

export const COMPANY_TAGLINE = "Your hike to PEAK";

export const ABOUT_INTRO =
  "Efficiency Point Co. is where innovation thrives and knowledge flourishes — cooperative centers designed to enhance communication and expertise across business sectors.";

export const ABOUT_BODY =
  "We are a driving force and catalyst for your business. Fully equipped shared and private workspaces meet your needs and help you increase productivity in an ideal environment for development and growth. Whether you are a large company seeking new goals or a small company establishing its presence, we equip and operate with a clear vision and solid foundations.";

export const VISION =
  "At Efficiency Center, our vision is to set the standard as a leading provider of exceptional business solutions and unparalleled client experiences. Aligned with Saudi Vision 2030, we aspire to shape the Kingdom's future through efficient workspaces tailored to evolving local and international needs.";

export const MISSION =
  "Our mission is to provide practical solutions that facilitate and enhance business operations — from startups to large teams — with inspiring workspaces, a motivating environment, and supportive services that add value and help you meet market challenges.";

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
      "Tailored spaces with comprehensive amenities — private offices or shared workspaces, general and specialized branches that connect you with pioneers in your field.",
    image: "/assets/imgs/services/business-incubator-coworking.png",
  },
  {
    slug: "preparing",
    title: "Preparing Workspaces",
    summary:
      "We study your specialization, select and design the location to your vision, and equip it with the latest technologies for effective work.",
    image: "/assets/imgs/services/preparing-workspaces.png",
  },
  {
    slug: "operator",
    title: "Workspace Operator",
    summary:
      "Long experience in business operations — we run your facilities with high efficiency across administrative aspects and strong foundations for growth.",
    image: "/assets/imgs/services/workspace-operator.png",
  },
  {
    slug: "solutions",
    title: "Business Challenge Solutions",
    summary:
      "Technical support, accounting, HR, legal, secretarial services, training, events, and products that keep your business moving forward.",
    image: "/assets/imgs/services/business-challenge-solutions.png",
  },
];
