"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PixelAvatar from "@/components/PixelAvatar";
import { TESTIMONIALS } from "@/lib/testimonials";
export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollBack(scrollLeft > 8);
    setCanScrollForward(scrollLeft < scrollWidth - clientWidth - 8);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".testimonials__card");
    const gap = 28;
    const delta = (card?.offsetWidth ?? 520) + gap;
    track.scrollBy({ left: direction * delta, behavior: "smooth" });
  };

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__inner container">
        <div className="testimonials__head">
          <p className="testimonials__eyebrow">Member voices</p>
          <h2 id="testimonials-heading" className="testimonials__title">
            Testimonials
          </h2>
          <p className="testimonials__lead">
            Teams across Al-Khobar share what it&apos;s like to work from Efficiency Center.
          </p>
        </div>

      <div className="testimonials__carousel">
        <div className="testimonials__fade testimonials__fade--left" aria-hidden="true" />
        <div className="testimonials__fade testimonials__fade--right" aria-hidden="true" />

        <div
          ref={trackRef}
          className="testimonials__track"
          onScroll={updateScrollState}
          tabIndex={0}
          role="region"
          aria-label="Testimonial quotes"
        >
          {TESTIMONIALS.map((item) => (
            <article key={item.id} className="testimonials__card">
              <div className="testimonials__card-media">
                <PixelAvatar seed={item.id} variant={item.silhouette} className="testimonials__portrait" />
              </div>
              <div className="testimonials__card-body">
                <blockquote className="testimonials__quote">{item.quote}</blockquote>
                <footer className="testimonials__meta">
                  <cite className="testimonials__attribution">
                    {item.name}, {item.role}
                  </cite>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>

        <div className="testimonials__controls">
          <button
            type="button"
            className="testimonials__arrow"
            aria-label="Previous testimonials"
            disabled={!canScrollBack}
            onClick={() => scrollByCard(-1)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="testimonials__arrow"
            aria-label="Next testimonials"
            disabled={!canScrollForward}
            onClick={() => scrollByCard(1)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
