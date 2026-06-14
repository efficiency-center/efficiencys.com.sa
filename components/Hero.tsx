"use client";

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
        <a
          href="https://wa.me/966581115550?text=Hello%20Efficiency%20Center%2C%20I%20would%20like%20to%20know%20more%20about%20your%20workspaces.%0A%0A%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%85%D8%B1%D9%83%D8%B2%20%D8%A7%D9%84%D9%83%D9%81%D8%A7%D8%A1%D8%A9%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%B2%D9%8A%D8%AF%20%D8%B9%D9%86%20%D9%85%D8%B3%D8%A7%D8%AD%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D9%84%D8%AF%D9%8A%D9%83%D9%85."
          className="btn btn--outline hero__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
