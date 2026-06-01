"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function Hero() {
  const { ref, className } = useReveal();

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Modern office workspace"
          className="hero__img"
          fill
          priority
          sizes="100vw"
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
