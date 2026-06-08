"use client";

import { useState } from "react";
import { PARTNER_LOGOS, type PartnerLogo } from "@/lib/data";
import { withBasePath } from "@/lib/paths";
import { useReveal } from "@/hooks/useReveal";

function PartnerLogoItem({ partner }: { partner: PartnerLogo }) {
  const [placeholder, setPlaceholder] = useState(false);
  const src = withBasePath(`/assets/imgs/logos/partners/${partner.file}`);

  return (
    <div className={`partners__logo ${placeholder ? "partners__logo--placeholder" : ""}`}>
      {!placeholder && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${partner.name} logo`}
          width={120}
          height={80}
          className={partner.color ? "partners__logo-img--color" : undefined}
          onError={() => setPlaceholder(true)}
          draggable={false}
        />
      )}
    </div>
  );
}

const half = Math.ceil(PARTNER_LOGOS.length / 2);
const ROW_1 = PARTNER_LOGOS.slice(0, half);
const ROW_2 = PARTNER_LOGOS.slice(half);

export default function Partners() {
  const intro = useReveal({ stagger: true });

  return (
    <section className="section partners" id="partners">
      <div className="container">
        <div className={`partners__intro ${intro.className}`} ref={intro.ref}>
          <h2 className="section-heading">Success partners</h2>
          <p className="partners__subtext">
            Every member gets exclusive offers from our network of success partners — perks designed to add real value to your business from day one.
          </p>
        </div>
      </div>

      <div className="partners__marquee">
        <div className="partners__row partners__row--left">
          <div className="partners__row-inner">
            {[...ROW_1, ...ROW_1].map((partner, i) => (
              <PartnerLogoItem key={`${partner.file}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
        <div className="partners__row partners__row--right">
          <div className="partners__row-inner">
            {[...ROW_2, ...ROW_2].map((partner, i) => (
              <PartnerLogoItem key={`${partner.file}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
