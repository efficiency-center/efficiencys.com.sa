"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SERVICES, getServiceImage, type Service } from "@/lib/services";
import { useReveal } from "@/hooks/useReveal";

const AUTO_MS = 5200;

function ServiceSlideImage({ service, isActive }: { service: Service; isActive: boolean }) {
  const [failed, setFailed] = useState(false);
  const src = getServiceImage(service);

  if (failed) {
    return (
      <div className="services__placeholder" aria-hidden={!isActive}>
        <span className="services__placeholder-num">{service.num}</span>
        <span className="services__placeholder-title">{service.title}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={service.title}
      fill
      sizes="(max-width: 768px) 92vw, min(560px, 42vw)"
      className="services__showcase-img"
      onError={() => setFailed(true)}
      priority={service.num === "01"}
      loading={service.num === "01" ? undefined : "lazy"}
    />
  );
}

export default function Services() {
  const heading = useReveal();
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
    <section className="section services" id="services">
      <div className="container services__layout">
        <div className={heading.className} ref={heading.ref}>
          <h2 className="section-heading services__heading">We Provide Various Services</h2>
          <p className="services__intro">
            Services cycle automatically. Hover to pause, or select any item to jump ahead.
          </p>
        </div>

        <div
          className={`services__explorer ${panel.className} reveal--delay`}
          ref={panel.ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="services__showcase" aria-live="polite">
            <div className="services__showcase-visual">
              {SERVICES.map((service, index) => (
                <div
                  key={service.slug}
                  className={`services__slide ${index === activeIndex ? "is-active" : ""}`}
                  aria-hidden={index !== activeIndex}
                >
                  <ServiceSlideImage service={service} isActive={index === activeIndex} />
                </div>
              ))}
            </div>

            <div className="services__showcase-copy" key={active.slug}>
              <span className="services__showcase-num">{active.num}</span>
              <h3 className="services__showcase-title">{active.title}</h3>
              <p className="services__showcase-desc">{active.desc}</p>
            </div>
          </div>

          <nav className="services__nav" aria-label="Services">
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
                      <span className="services__tab-num">{service.num}</span>
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
        </div>
      </div>
    </section>
  );
}
