"use client";

import { STORY_FEATURED, STORY_GALLERY } from "@/lib/data";
import { withBasePath } from "@/lib/paths";

export default function Spaces() {
  return (
    <section className="section spaces" id="stories">
      <div className="container">
        <div className="spaces__header">
          <h2 className="section-heading">Our Stories</h2>
          <p className="spaces__lead">
            Real moments from Efficiency Center — the climb, the coffee, and the work in between.
          </p>
        </div>

        <div className="spaces__cards">
          {STORY_FEATURED.map((card) => (
            <article key={card.src} className="spaces__card spaces__card--featured">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(card.src)}
                alt={card.alt}
                className="spaces__card-media"
                loading="lazy"
              />
              <div className="spaces__card-shade" aria-hidden="true" />
              <div className="spaces__card-copy">
                <h3 className="spaces__card-title">{card.headline}</h3>
                <p className="spaces__card-text">{card.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="spaces__gallery">
          {STORY_GALLERY.map((card) => (
            <article key={card.src} className="spaces__card spaces__card--compact">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(card.src)}
                alt={card.alt}
                className="spaces__card-media"
                loading="lazy"
              />
              <div className="spaces__card-shade" aria-hidden="true" />
              <div className="spaces__card-copy">
                <h3 className="spaces__card-title">{card.headline}</h3>
                <p className="spaces__card-text">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
