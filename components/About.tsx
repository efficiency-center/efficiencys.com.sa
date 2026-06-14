"use client";

import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const statement = useReveal({ stagger: true });

  return (
    <section className="about" id="about">
      <div className="about__statement">
        <div className={`container about__statement-inner ${statement.className}`} ref={statement.ref}>
          <h2 className="about__statement-title">
            More than a workspace, a complete business ecosystem
          </h2>
          <p className="about__statement-lead">
            Offices, coworking, meeting rooms, and full business support across three locations in Al-Khobar and Riyadh. You focus on your business, we handle the rest.
          </p>
          <a href="#services" className="btn btn--solid btn--pill about__statement-cta">
            Explore spaces
          </a>
        </div>
      </div>
    </section>
  );
}
