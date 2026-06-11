"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/paths";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => {
        /* autoplay blocked — poster still visible */
      });
    };

    play();
    video.addEventListener("loadeddata", play);
    return () => video.removeEventListener("loadeddata", play);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <video
          ref={videoRef}
          className="hero__img"
          src={withBasePath("/assets/video/hero.mp4")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={withBasePath("/assets/imgs/services/furnished-offices.png")}
          aria-label="Efficiency Center hero background video"
        />
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">Where Your Business Echoes</h1>
        <p className="hero__subtitle">
          Three locations across Saudi Arabia. Private offices overlooking the Corniche, coworking spaces that connect you with the right people, and a team that handles the rest.
        </p>
        <Link href="/contact" className="btn btn--outline hero__cta">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
