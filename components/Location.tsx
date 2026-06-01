"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { DEFAULT_OFFICE_ID, OFFICES, getOffice } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  ssr: false,
  loading: () => <div className="location-map location-map--loading" aria-label="Loading map" />,
});

export default function Location() {
  const header = useReveal();
  const map = useReveal();
  const [activeId, setActiveId] = useState(DEFAULT_OFFICE_ID);
  const office = getOffice(activeId);

  return (
    <section className="section location" id="location">
      <div className="container">
        <div className={`location__header ${header.className}`} ref={header.ref}>
          <div className="location__copy">
            <h2 className="section-heading">Find Us</h2>
            <div className="location__tabs" role="tablist" aria-label="Office locations">
              {OFFICES.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  role="tab"
                  aria-selected={activeId === loc.id}
                  className={`location__tab ${activeId === loc.id ? "is-active" : ""}`}
                  onClick={() => setActiveId(loc.id)}
                >
                  {loc.city === "Al-Khobar" ? "Al-Khobar" : "Riyadh Branch"}
                </button>
              ))}
            </div>
            <p className="location__office-name">{office.name}</p>
            <p className="location__address">{office.address}</p>
            <p className="location__country">
              {office.city}, {office.country}
            </p>
            <a
              href={office.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent location__directions"
            >
              Get Directions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
          <p className="location__hint">
            Two locations across Saudi Arabia — switch branches above and explore in 3D.
          </p>
        </div>
        <div className={`location__map-wrap ${map.className} reveal--delay`} ref={map.ref}>
          <LocationMap key={office.id} office={office} />
        </div>
      </div>
    </section>
  );
}
