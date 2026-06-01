"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const text = useReveal();
  const media = useReveal();

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className={text.className} ref={text.ref}>
          <h2 className="section-heading">About Us</h2>
          <p className="about__body">
            A center that offers you modern fully-equipped shared and individual office spaces that
            suit all businesses. We help you be efficient by providing your business with the proper
            place to get things done.
          </p>
          <a href="/assets/docs/our-profile.pdf" className="link-accent" download>
            Our Profile
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
        <div className={`about__media ${media.className} reveal--delay`} ref={media.ref}>
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
            alt="Efficiency Center workspace"
            className="about__img"
            width={900}
            height={1125}
          />
        </div>
      </div>
    </section>
  );
}
