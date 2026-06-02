"use client";

import Image from "next/image";
import { useState } from "react";
import { PARTNER_LOGOS, type PartnerLogo } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function PartnerLogo({ partner }: { partner: PartnerLogo }) {
  const [placeholder, setPlaceholder] = useState(false);

  return (
    <div className={`partners__logo ${placeholder ? "partners__logo--placeholder" : ""}`}>
      {!placeholder && (
        <Image
          src={`/assets/imgs/logos/partners/${partner.file}`}
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
            Get unlimited offers from our success partners once you get your office!
          </p>
        </div>
        <div className={`partners__grid ${grid.className} reveal--delay`} ref={grid.ref}>
          {PARTNER_LOGOS.map((partner) => (
            <PartnerLogo key={partner.file} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
