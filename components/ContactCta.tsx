"use client";

import Link from "next/link";
import { CONTACT, OFFICES } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

export default function ContactCta() {
  const reveal = useReveal();

  return (
    <section className="section contact-cta" id="contact">
      <div className={`container contact-cta__inner ${reveal.className}`} ref={reveal.ref}>
        <h2 className="section-heading">Get in Touch</h2>
        <p className="contact-cta__text">
          Visit us in Al-Khobar or Riyadh, or share your details and we&apos;ll reach out about
          available offices and plans.
        </p>
        <ul className="contact-cta__offices">
          {OFFICES.map((office) => (
            <li key={office.id} className="contact-cta__office">
              <strong>{office.name}</strong>
              <span>
                {office.address}, {office.city}
              </span>
              <a
                href={office.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                Directions
              </a>
            </li>
          ))}
        </ul>
        <p className="contact-cta__contact-line">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
          <span aria-hidden="true"> · </span>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <Link href="/contact" className="btn btn--outline contact-cta__btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
