"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SERVICE_PILLARS } from "@/lib/profile";
import { withBasePath } from "@/lib/paths";
import { SERVICES, getServiceImage, type Service } from "@/lib/services";
import { useReveal } from "@/hooks/useReveal";

const AUTO_MS = 5200;

function ServiceSlideImage({ service }: { service: Service }) {
  const src = getServiceImage(service);

  return (
    // Native img — reliable for local assets; Next/Image was failing on some slides
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={service.title}
      className="services__showcase-img"
      loading={service.num === "01" ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export default function Services() {
  const intro = useReveal();
  const panel = useReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const active = SERVICES[activeIndex];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setProgressKey((k) => k + 1);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % SERVICES.length);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, goNext]);

  const selectService = (index: number) => {
    goTo(index);
    setPaused(true);
    window.setTimeout(() => setPaused(false), AUTO_MS * 2);
  };

  return (
    <section className="services" id="services">
      <div className={`services__intro-block ${intro.className}`} ref={intro.ref}>
        <div className="container services__intro-inner">
          <p className="services__eyebrow">What we offer</p>
          <h2 className="services__title">Services built around your business</h2>
          <p className="services__lead">
            From coworking and incubators to workspace design, operations, and business support —
            everything in one efficient center.
          </p>
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="services__amenities">
        <div className="container services__amenities-head">
          <p className="services__eyebrow">Included in your space</p>
          <h2 className="services__title services__title--sm">Center amenities</h2>
        </div>

        <div
          className={`services__feature ${panel.className} reveal--delay`}
          ref={panel.ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="services__feature-visual" aria-live="polite">
            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                className={`services__slide ${index === activeIndex ? "is-active" : ""}`}
                aria-hidden={index !== activeIndex}
              >
                    <ServiceSlideImage service={service} />
              </div>
            ))}
          </div>

          <div className="container services__feature-body">
            <div className="services__showcase-copy" key={active.slug}>
              <span className="services__showcase-num">{active.num}</span>
              <h3 className="services__showcase-title">{active.title}</h3>
              <p className="services__showcase-desc">{active.desc}</p>
            </div>

            <nav className="services__nav" aria-label="Center amenities">
              <ul className="services__tabs">
                {SERVICES.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <li key={service.slug}>
                      <button
                        type="button"
                        className={`services__tab ${isActive ? "is-active" : ""}`}
                        onClick={() => selectService(index)}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span className="services__tab-title">{service.title}</span>
                        {isActive && !paused && !reducedMotion && (
                          <span
                            key={progressKey}
                            className="services__tab-progress"
                            style={{ animationDuration: `${AUTO_MS}ms` }}
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Link href="/contact" className="btn btn--solid btn--pill services__cta">
              Book a tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
