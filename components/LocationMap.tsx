"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { type OfficeLocation } from "@/lib/constants";
import { add3DBuildings, MAP_STYLE_URL } from "@/lib/map";

function OsmFallback({ office }: { office: OfficeLocation }) {
  const [lng, lat] = office.coordinates;
  return (
    <div className="location-map location-map--fallback">
      <div className="location-map__fallback-inner">
        <p className="location-map__fallback-title">{office.name}</p>
        <p className="location-map__fallback-text">
          {office.address}, {office.city}
        </p>
        <a
          href={office.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          Open in Google Maps
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
      <iframe
        title={office.name}
        className="location-map__iframe"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.008}%2C${lat - 0.006}%2C${lng + 0.008}%2C${lat + 0.006}&layer=mapnik&marker=${lat}%2C${lng}`}
      />
    </div>
  );
}

type LocationMapProps = {
  office: OfficeLocation;
};

export default function LocationMap({ office }: LocationMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const frameRef = useRef<number>(0);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    if (!containerRef.current) return;

    setStatus("loading");
    let map: maplibregl.Map | null = null;

    const setup = () => {
      try {
        map = new maplibregl.Map({
          container: containerRef.current!,
          style: MAP_STYLE_URL,
          center: office.coordinates,
          zoom: 16.2,
          pitch: 62,
          bearing: -32,
          attributionControl: false,
        });

        mapRef.current = map;

        map.addControl(
          new maplibregl.AttributionControl({ compact: true }),
          "bottom-right"
        );
        map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");

        map.on("error", () => setStatus("fallback"));

        map.on("load", () => {
          try {
            add3DBuildings(map!);
          } catch {
            /* optional */
          }

          const markerEl = document.createElement("div");
          markerEl.className = "map-marker";
          markerEl.innerHTML =
            '<span class="map-marker__pulse"></span><span class="map-marker__dot"></span>';

          new maplibregl.Marker({ element: markerEl, anchor: "bottom" })
            .setLngLat(office.coordinates)
            .setPopup(
              new maplibregl.Popup({
                offset: 28,
                closeButton: false,
                className: "map-popup",
              }).setHTML(`<strong>${office.name}</strong><br/>${office.address}, ${office.city}`)
            )
            .addTo(map!);

          setStatus("ready");

          let bearing = -32;
          let rotating = true;

          const pauseRotation = () => {
            rotating = false;
          };

          map!.on("mousedown", pauseRotation);
          map!.on("touchstart", pauseRotation);
          map!.on("wheel", pauseRotation);

          const animate = () => {
            if (rotating && map) {
              bearing += 0.015;
              map.setBearing(bearing);
            }
            frameRef.current = requestAnimationFrame(animate);
          };
          frameRef.current = requestAnimationFrame(animate);
        });
      } catch {
        setStatus("fallback");
      }
    };

    if (mapRef.current) {
      cancelAnimationFrame(frameRef.current);
      mapRef.current.remove();
      mapRef.current = null;
    }

    setup();

    return () => {
      cancelAnimationFrame(frameRef.current);
      map?.remove();
      mapRef.current = null;
    };
  }, [office.id, office.coordinates, office.name, office.address, office.city]);

  if (status === "fallback") {
    return <OsmFallback office={office} />;
  }

  return (
    <div className="location-map">
      {status === "loading" && <div className="location-map__loader" aria-hidden="true" />}
      <div ref={containerRef} className="location-map__canvas" />
    </div>
  );
}
