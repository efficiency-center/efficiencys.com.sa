"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PixelAvatar from "@/components/PixelAvatar";
import { TESTIMONIALS } from "@/lib/testimonials";
import { useReveal } from "@/hooks/useReveal";

const COPIES = 5;
const ITEMS = Array.from({ length: COPIES }, () => TESTIMONIALS).flat();

export default function Testimonials() {
  const head = useReveal({ stagger: true });
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const loopScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const oneSet = track.scrollWidth / COPIES;
    if (track.scrollLeft < oneSet) {
      track.scrollLeft += oneSet;
    } else if (track.scrollLeft > oneSet * (COPIES - 1)) {
      track.scrollLeft -= oneSet;
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const oneSet = track.scrollWidth / COPIES;
    track.scrollLeft = oneSet * Math.floor(COPIES / 2);
  }, []);

  const onScroll = useCallback(() => {
    loopScroll();
  }, [loopScroll]);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
    track.style.cursor = "grabbing";
    track.style.scrollSnapType = "none";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    const dx = e.clientX - startX.current;
    track.scrollLeft = scrollStart.current - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    const track = trackRef.current;
    if (!track) return;
    track.releasePointerCapture(e.pointerId);
    track.style.cursor = "";
    track.style.scrollSnapType = "";
  };

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__inner container">
        <div className={`testimonials__head ${head.className}`} ref={head.ref}>
          <p className="testimonials__eyebrow">Member voices</p>
          <h2 id="testimonials-heading" className="testimonials__title">
            What our members say
          </h2>
          <p className="testimonials__lead">
            Teams across Al-Khobar share what it&apos;s like to grow their business from Efficiency Center.
          </p>
        </div>

        <div className="testimonials__carousel">
          <div className="testimonials__fade testimonials__fade--left" aria-hidden="true" />
          <div className="testimonials__fade testimonials__fade--right" aria-hidden="true" />

          <div
            ref={trackRef}
            className="testimonials__track"
            onScroll={onScroll}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            role="region"
            aria-label="Testimonial quotes"
          >
            {ITEMS.map((item, i) => (
              <article
                key={`${item.id}-${i}`}
                className="testimonials__card"
                aria-hidden={i >= TESTIMONIALS.length && i < ITEMS.length - TESTIMONIALS.length ? true : undefined}
              >
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
      </div>
    </section>
  );
}
