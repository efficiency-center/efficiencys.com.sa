"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICE_PILLARS } from "@/lib/profile";
import { withBasePath } from "@/lib/paths";
import { UNITS, getUnitImage } from "@/lib/units";
import { useReveal } from "@/hooks/useReveal";

export default function Services() {
  const intro = useReveal({ stagger: true });
  const grid = useReveal();

  return (
    <section className="services" id="services">
      <div className={`services__intro-block ${intro.className}`} ref={intro.ref}>
        <div className="container services__intro-inner">
          <h2 className="services__title">Everything your business needs under one roof</h2>
        </div>
      </div>

      <div className="services__stories">
        {SERVICE_PILLARS.map((pillar, index) => {
          const num = String(index + 1).padStart(2, "0");
          const isReverse = index % 2 === 1;
          return (
            <article
              key={pillar.slug}
              className={`services__story ${isReverse ? "services__story--reverse" : ""}`}
            >
              <div className="container services__story-grid">
                <div className="services__story-copy">
                  <span className="services__story-num">{num}</span>
                  <h3 className="services__story-title">{pillar.title}</h3>
                  <p className="services__story-text">{pillar.summary}</p>
                </div>
                <div className="services__story-media">
                  <Image
                    src={withBasePath(pillar.image)}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="services__units">
        <div className="container">
          <div className="services__units-top">
            <div className="services__units-head">
              <h2 className="services__title services__title--sm">Spaces designed for every need</h2>
            </div>
            <div className="services__units-cta">
              <Link href="/contact" className="btn btn--solid btn--pill">
                Book a tour
              </Link>
            </div>
          </div>

          <div className={`units-grid ${grid.className}`} ref={grid.ref}>
            {UNITS.map((unit) => (
              <div
                key={unit.slug}
                className={`unit-card ${unit.featured ? "unit-card--featured" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getUnitImage(unit)}
                  alt={unit.title}
                  className="unit-card__img"
                  loading="lazy"
                />
                <div className="unit-card__overlay" />
                <div className="unit-card__content">
                  <h3 className="unit-card__title">{unit.title}</h3>
                  <p className="unit-card__detail">{unit.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
