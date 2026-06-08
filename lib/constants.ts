export type OfficeLocation = {
  id: string;
  name: string;
  tabLabel: string;
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
    tabLabel: "Al-Khobar",
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
    id: "riyadh-1",
    tabLabel: "1st Branch Riyadh",
    name: "Efficiency Center — Riyadh (1st Branch)",
    address: "Riyadh — 1st Branch",
    city: "Riyadh",
    country: "Saudi Arabia",
    phone: CONTACT.phone,
    email: CONTACT.email,
    coordinates: [46.6935173, 24.8007895],
    googleMapsUrl: "https://maps.app.goo.gl/ugD9etNij2GqSuyi8",
  },
  {
    id: "riyadh-2",
    tabLabel: "2nd Branch Riyadh",
    name: "Efficiency Center — Riyadh (2nd Branch)",
    address: "6651 Abi Bakr As Siddiq Rd, Al Mursalat",
    city: "Riyadh",
    country: "Saudi Arabia",
    phone: CONTACT.phone,
    email: CONTACT.email,
    coordinates: [46.7007381, 24.7501034],
    googleMapsUrl: "https://maps.app.goo.gl/BKMDdRNg7hqT4RadA",
  },
];

export const DEFAULT_OFFICE_ID = "khobar";

export function getOffice(id: string): OfficeLocation {
  return OFFICES.find((o) => o.id === id) ?? OFFICES[0];
}
