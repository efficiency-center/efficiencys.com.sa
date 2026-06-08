"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const statement = useReveal({ stagger: true });

  return (
    <section className="about" id="about">
      <div className="about__statement">
        <div className={`container about__statement-inner ${statement.className}`} ref={statement.ref}>
          <p className="about__eyebrow">About Efficiency Center</p>
          <h2 className="about__statement-title">
            A driving force for your business
          </h2>
          <p className="about__statement-lead">
            Fully equipped shared and private workspaces designed to meet your needs — whether you&apos;re a startup establishing its presence or a large company building an integrated headquarters. We go beyond coworking with workspace preparation, facility operations, and business support services that help you focus on growth.
          </p>
          <Link href="/contact" className="btn btn--solid btn--pill about__statement-cta">
            Explore spaces
          </Link>
        </div>
      </div>
    </section>
  );
}
