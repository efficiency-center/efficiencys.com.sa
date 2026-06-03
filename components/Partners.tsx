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
        />
      )}
    </div>
  );
}

export default function Partners() {
  const intro = useReveal();
  const grid = useReveal();

  return (
    <section className="section partners" id="partners">
      <div className="container">
        <div className={`partners__intro ${intro.className}`} ref={intro.ref}>
          <h2 className="section-heading">Success Partners</h2>
          <p className="partners__subtext">
            Get unlimited offers from our success partners once you get your office — perks that
            grow with your business.
          </p>
        </div>
        <div className={`partners__grid ${grid.className} reveal--delay`} ref={grid.ref}>
          {PARTNER_LOGOS.map((partner) => (
            <PartnerLogoItem key={partner.file} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};
