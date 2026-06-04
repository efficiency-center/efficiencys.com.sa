import type { SilhouetteVariant } from "@/lib/silhouetteMasks";

export type { SilhouetteVariant };

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  silhouette: SilhouetteVariant;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sara",
    quote:
      "Moving our team into Efficiency Center was the easiest office decision we've made. Reception, internet, and meeting rooms just work — we focus on the business.",
    name: "Sara Al-Harbi",
    role: "Founder, Gulf Scale Studio",
    rating: 5,
    silhouette: "female",
  },
  {
    id: "omar",
    quote:
      "The lounge and private offices strike the right balance. Clients love meeting here, and the Corniche location gives us credibility from day one.",
    name: "Omar Al-Qahtani",
    role: "Managing Director, Nexus Advisory",
    rating: 5,
    silhouette: "male",
  },
  {
    id: "layla",
    quote:
      "We scaled from two desks to a full suite without changing our address. The team on site is responsive and genuinely cares about how we work.",
    name: "Layla Mansour",
    role: "COO, Horizon Labs",
    rating: 5,
    silhouette: "female",
  },
  {
    id: "fahad",
    quote:
      "Booked a tour on Tuesday and were operational by the following week. Clear pricing, no surprises, and amenities that match what they promise.",
    name: "Fahad Al-Dossary",
    role: "Partner, Bridge Legal",
    rating: 5,
    silhouette: "male",
  },
  {
    id: "noura",
    quote:
      "Our incubator cohort uses the shared spaces daily. The energy is professional, quiet when you need focus, and social when you want to connect.",
    name: "Noura Al-Zahrani",
    role: "Program Lead, Eastern Founders",
    rating: 5,
    silhouette: "female",
  },
  {
    id: "khalid",
    quote:
      "Efficiency Center feels built for Saudi teams going regional — bilingual support, premium fit-out, and flexible terms that fit how we actually grow.",
    name: "Khalid Al-Mutairi",
    role: "CEO, Cedar Digital",
    rating: 5,
    silhouette: "male",
  },
];
