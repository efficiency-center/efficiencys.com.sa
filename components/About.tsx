"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const statement = useReveal({ stagger: true });

  return (
    <section className="about" id="about">
      <div className="about__statement">
        <div className={`container about__statement-inner ${statement.className}`} ref={statement.ref}>
          <h2 className="about__statement-title">
            More than a workspace
          </h2>
          <p className="about__statement-lead">
            Efficiency Center is where startups launch and established companies scale. You get a fully equipped office on the Al-Khobar Corniche, a reception team that handles your guests, meeting rooms when you need them, and a community of professionals around you. We also prepare and operate workspaces from scratch, and provide business support from accounting to HR. You focus on your business, we handle the rest.
          </p>
          <Link href="/contact" className="btn btn--solid btn--pill about__statement-cta">
            Explore spaces
          </Link>
        </div>
      </div>
    </section>
  );
}
