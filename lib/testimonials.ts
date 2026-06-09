import type { SilhouetteVariant } from "@/lib/silhouetteMasks";

export type { SilhouetteVariant };

export const GOOGLE_MAPS_REVIEWS_URL = "https://maps.app.goo.gl/mYPvy5eUxWNYsK1T6";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  silhouette: SilhouetteVariant;
};

/** Real Google Maps reviews — Al-Khobar branch */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "adhwaa",
    quote: "Beautiful view, friendly people — you should have a visit.",
    name: "Adhwaa Alanazi",
    role: "Google review",
    rating: 5,
    silhouette: "female",
  },
  {
    id: "khalid",
    quote:
      "Excellent and great workspace. You don't need to bring your coffee from home; they have a coffee corner for everyone.",
    name: "Khalid Alrooqi",
    role: "Google review",
    rating: 5,
    silhouette: "male",
  },
  {
    id: "retag",
    quote:
      "The work environment is very beautiful and the view is wonderful. I congratulate you on this.",
    name: "Retag alenizy",
    role: "Google review",
    rating: 5,
    silhouette: "female",
  },
  {
    id: "adel",
    quote: "The best environment to start your work from — smart and unique.",
    name: "Adel Bakhdhar",
    role: "Local Guide · Google review",
    rating: 5,
    silhouette: "male",
  },
  {
    id: "oby",
    quote: "The place is more than amazing.",
    name: "Oby Dirdeeri",
    role: "Google review",
    rating: 5,
    silhouette: "female",
  },
  {
    id: "rasheed",
    quote: "Great place and the vibe is unbelievable.",
    name: "Rasheed Aldossari",
    role: "Google review",
    rating: 5,
    silhouette: "male",
  },
  {
    id: "nouf",
    quote:
      "The vibe is unbelievable! The staff and the services are the best of the best.",
    name: "Nouf",
    role: "Google review",
    rating: 5,
    silhouette: "female",
  },
  {
    id: "sarkhel",
    quote: "One of the best offices in Al-Khobar.",
    name: "Sarkhel Manzoor",
    role: "Local Guide · Google review",
    rating: 5,
    silhouette: "male",
  },
  {
    id: "aseel",
    quote: "Good idea, good place, good personnel.",
    name: "aseel alshaibi",
    role: "Local Guide · Google review",
    rating: 5,
    silhouette: "female",
  },
];
