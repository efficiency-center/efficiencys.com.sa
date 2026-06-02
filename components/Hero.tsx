"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { withBasePath } from "@/lib/paths";

export default function Hero() {
  const { ref, className } = useReveal();

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <video
          className="hero__img"
          src={withBasePath("/assets/video/hero.mp4")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Efficiency Center hero background video"
        />
        <div className="hero__overlay" />
      </div>
      <div className={`container hero__content ${className}`} ref={ref}>
        <h1 className="hero__title">Your Hike to Peak</h1>
        <p className="hero__subtitle">
          Modern Fully-Serviced Office Spaces for Productive Time to be Spent
        </p>
        <Link href="/contact" className="btn btn--outline hero__cta">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
