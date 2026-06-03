"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { withBasePath } from "@/lib/paths";
import { useReveal } from "@/hooks/useReveal";

export default function ContactCta() {
  const reveal = useReveal();

  return (
    <section className="section contact-cta" id="contact">
      <div className="contact-cta__visual" aria-hidden="true">
        <Image
          src={withBasePath("/assets/imgs/services/special-location.png")}
          alt=""
          fill
          sizes="100vw"
          className="contact-cta__visual-img"
        />
        <div className="contact-cta__visual-overlay" />
      </div>
      <div className={`container contact-cta__inner ${reveal.className}`} ref={reveal.ref}>
        <h2 className="section-heading section-heading--light">Get in Touch</h2>
        <p className="contact-cta__text">
          Share your details and we&apos;ll reach out about available offices, incubator spaces, and
          tailored plans.
        </p>
        <p className="contact-cta__contact-line">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
          <span aria-hidden="true"> · </span>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <Link href="/contact" className="btn btn--pill btn--solid-light contact-cta__btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
};
