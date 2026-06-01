"use client";

import Image from "next/image";
import { useState } from "react";
import { SERVICES, getServiceImage, type Service } from "@/lib/services";
import { useReveal } from "@/hooks/useReveal";

function ServiceShowcaseImage({ service }: { service: Service }) {
  const [failed, setFailed] = useState(false);
  const src = getServiceImage(service);

  if (failed) {
    return (
      <div className="services__placeholder" aria-hidden="true">
        <span className="services__placeholder-num">{service.num}</span>
        <span className="services__placeholder-title">{service.title}</span>
      </div>
    );
  }

  return (
    <Image
      key={src}
      src={src}
      alt={service.title}
      fill
      sizes="(max-width: 768px) 92vw, min(560px, 42vw)"
      className="services__showcase-img"
      onError={() => setFailed(true)}
      priority={service.num === "01"}
    />
  );
}

export default function Services() {
  const heading = useReveal();
  const panel = useReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];

  return (
    <section className="section services" id="services">
      <div className="container services__layout">
        <div className={heading.className} ref={heading.ref}>
          <h2 className="section-heading services__heading">We Provide Various Services</h2>
          <p className="services__intro">
            Browse our full range of serviced workspace amenities — tap any service to view details.
          </p>
        </div>

        <div className={`services__explorer ${panel.className} reveal--delay`} ref={panel.ref}>
          <div className="services__showcase" aria-live="polite">
            <div className="services__showcase-visual">
              <ServiceShowcaseImage service={active} />
            </div>
            <div className="services__showcase-copy">
              <span className="services__showcase-num">{active.num}</span>
              <h3 className="services__showcase-title">{active.title}</h3>
              <p className="services__showcase-desc">{active.desc}</p>
            </div>
          </div>

          <nav className="services__nav" aria-label="Services">
            <ul className="services__tabs">
              {SERVICES.map((service, index) => (
                <li key={service.slug}>
                  <button
                    type="button"
                    className={`services__tab ${index === activeIndex ? "is-active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    aria-current={index === activeIndex ? "true" : undefined}
                  >
                    <span className="services__tab-num">{service.num}</span>
                    <span className="services__tab-title">{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
