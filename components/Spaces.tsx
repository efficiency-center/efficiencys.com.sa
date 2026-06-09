"use client";

import { STORY_CARDS } from "@/lib/data";
import { withBasePath } from "@/lib/paths";
import { useReveal } from "@/hooks/useReveal";

const MARQUEE_ITEMS = [...STORY_CARDS, ...STORY_CARDS];

type PolaroidProps = {
  src: string;
  alt: string;
  headline: string;
  body: string;
  hidden?: boolean;
};

function Polaroid({ src, alt, headline, body, hidden }: PolaroidProps) {
  return (
    <article className="spaces__polaroid" aria-hidden={hidden || undefined}>
      <div className="spaces__polaroid-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath(src)}
          alt={alt}
          className="spaces__polaroid-photo"
          loading="lazy"
          draggable={false}
        />
        <div className="spaces__polaroid-caption">
          <h3 className="spaces__polaroid-title">{headline}</h3>
          <p className="spaces__polaroid-text">{body}</p>
        </div>
      </div>
    </article>
  );
}

export default function Spaces() {
  const header = useReveal({ stagger: true });

  return (
    <section className="section spaces" id="stories">
      <div className="spaces__inner container">
        <div className={`spaces__header ${header.className}`} ref={header.ref}>
          <h2 className="section-heading">Our Stories</h2>
          <p className="spaces__lead">
            Real moments from Efficiency Center — the climb, the coffee, and the work in between.
          </p>
        </div>

        <div className="spaces__carousel">
          <div className="spaces__fade spaces__fade--left" aria-hidden="true" />
          <div className="spaces__fade spaces__fade--right" aria-hidden="true" />

          <div className="spaces__marquee" role="region" aria-label="Our Stories polaroid gallery">
            <div className="spaces__track">
              {MARQUEE_ITEMS.map((card, i) => (
                <Polaroid
                  key={`${card.src}-${i}`}
                  src={card.src}
                  alt={card.alt}
                  headline={card.headline}
                  body={card.body}
                  hidden={i >= STORY_CARDS.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
