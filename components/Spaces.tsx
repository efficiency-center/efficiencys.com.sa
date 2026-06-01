"use client";

import Image from "next/image";
import { SPACE_IMAGES } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

export default function Spaces() {
  const heading = useReveal();
  const grid = useReveal();

  return (
    <section className="section spaces" id="spaces">
      <div className="container">
        <h2 className={`section-heading section-heading--center ${heading.className}`} ref={heading.ref}>
          Our Spaces
        </h2>
        <div className={`spaces__grid ${grid.className} reveal--delay`} ref={grid.ref}>
          {SPACE_IMAGES.map((img) => (
            <div
              key={img.src}
              className={`spaces__item ${img.className} ${"local" in img && img.local ? "spaces__item--color" : ""}`.trim()}
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
