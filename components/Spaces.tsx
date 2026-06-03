"use client";

import { STORY_IMAGES } from "@/lib/data";
import { withBasePath } from "@/lib/paths";
import { useReveal } from "@/hooks/useReveal";

export default function Spaces() {
  const heading = useReveal();
  const grid = useReveal();

  return (
    <section className="section spaces" id="stories">
      <div className="container">
        <div className={`spaces__header ${heading.className}`} ref={heading.ref}>
          <h2 className="section-heading">Our Stories</h2>
          <p className="spaces__lead">
            Real moments from Efficiency Center — the climb, the coffee, and the work in between.
          </p>
        </div>
      </div>

      <div className={`spaces__strip ${grid.className} reveal--delay`} ref={grid.ref}>
        <div className="spaces__grid">
          {STORY_IMAGES.map((item) => (
            <figure key={item.src} className="spaces__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBasePath(item.src)} alt={item.alt} className="spaces__img" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
