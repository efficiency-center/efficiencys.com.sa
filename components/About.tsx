"use client";

import Link from "next/link";
import { ABOUT_INTRO, COMPANY_TAGLINE } from "@/lib/profile";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const statement = useReveal();

  return (
    <section className="about" id="about">
      <div className={`about__statement ${statement.className}`} ref={statement.ref}>
        <div className="container about__statement-inner">
          <p className="about__eyebrow">{COMPANY_TAGLINE}</p>
          <h2 className="about__statement-title">
            Modern workspaces built for efficiency and growth
          </h2>
          <p className="about__statement-lead">{ABOUT_INTRO}</p>
          <Link href="/contact" className="btn btn--solid btn--pill about__statement-cta">
            Explore spaces
          </Link>
        </div>
      </div>
    </section>
  );
};
