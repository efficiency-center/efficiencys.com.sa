export type OfficeLocation = {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  /** [lng, lat] for MapLibre */
  coordinates: [number, number];
  googleMapsUrl: string;
};

export const CONTACT = {
  phone: "+966 58 111 5550",
  email: "info@efficiencycenter.com",
} as const;

export const OFFICES: OfficeLocation[] = [
  {
    id: "khobar",
    name: "Efficiency Center — Al-Khobar",
    address: "6919 Prince Turki ST, Cornich Park",
    city: "Al-Khobar",
    country: "Saudi Arabia",
    phone: CONTACT.phone,
    email: CONTACT.email,
    coordinates: [50.2242877, 26.3076202],
    googleMapsUrl: "https://share.google/Wy58G1U4nu8NuKSDW",
  },
  {
    id: "riyadh",
    name: "Efficiency Center — Riyadh Branch",
    address: "Efficiency Center — Riyadh Branch",
    city: "Riyadh",
    country: "Saudi Arabia",
    phone: CONTACT.phone,
    email: CONTACT.email,
    coordinates: [46.7070678, 24.778489],
    googleMapsUrl: "https://maps.app.goo.gl/3aJJ1dCFfyYc2ZEC8",
  },
];

/** @deprecated Use OFFICES — kept for compatibility */
export const SITE_LOCATION = OFFICES[0];

export const DEFAULT_OFFICE_ID = "khobar";

export function getOffice(id: string): OfficeLocation {
  return OFFICES.find((o) => o.id === id) ?? OFFICES[0];
}
