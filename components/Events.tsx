"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EVENTS } from "@/lib/events";
import { withBasePath } from "@/lib/paths";
import { useReveal } from "@/hooks/useReveal";

const COPIES = 3;
const ITEMS = Array.from({ length: COPIES }, () => EVENTS).flat();

export default function Events() {
  const head = useReveal({ stagger: true });
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const update = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const loopScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const oneSet = track.scrollWidth / COPIES;
    const mid = oneSet * Math.floor(COPIES / 2);

    if (track.scrollLeft < oneSet) {
      track.scrollLeft += oneSet;
    } else if (track.scrollLeft > oneSet * (COPIES - 1)) {
      track.scrollLeft -= oneSet;
    }
  }, []);

  const updateScale = useCallback(() => {
    const track = trackRef.current;
    if (!track || reducedMotion) return;

    const cards = track.querySelectorAll<HTMLElement>(".events__card");
    const center = track.getBoundingClientRect().left + track.clientWidth / 2;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const dist = Math.abs(center - cardCenter);
      const maxDist = track.clientWidth * 0.5;
      const progress = Math.max(0, 1 - dist / maxDist);

      const scale = 0.65 + progress * 0.35;
      const opacity = 1;
      const rotateY = (center - cardCenter) / maxDist * 8;

      card.style.transform = `perspective(1200px) scale(${scale}) rotateY(${rotateY}deg)`;
      card.style.opacity = `${opacity}`;
    });
  }, [reducedMotion]);

  const onScroll = useCallback(() => {
    loopScroll();
    updateScale();
  }, [loopScroll, updateScale]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const oneSet = track.scrollWidth / COPIES;
    const cards = track.querySelectorAll<HTMLElement>(".events__card");
    const cardWidth = cards[0]?.offsetWidth ?? 400;
    const gap = 80; // 5rem gap
    // Center on index 1 (Keeta V) of the middle copy
    const keetaOffset = (cardWidth + gap) * 1;
    track.scrollLeft = oneSet * Math.floor(COPIES / 2) + keetaOffset - (track.clientWidth / 2 - cardWidth / 2);
    updateScale();
  }, [updateScale]);

  useEffect(() => {
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

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
    <section className="events" id="events">
      <div className="container">
        <div className={`events__head ${head.className}`} ref={head.ref}>
          <h2 className="events__title">Moments that bring the center to life.</h2>
        </div>
      </div>

      <div className="events__carousel">
        <div className="events__fade events__fade--left" aria-hidden="true" />
        <div className="events__fade events__fade--right" aria-hidden="true" />

        <div
          ref={trackRef}
          className="events__track"
          onScroll={onScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          role="region"
          aria-label="Event highlights"
        >
          {ITEMS.map((event, i) => (
            <article
              key={`${event.id}-${i}`}
              className="events__card"
              aria-hidden={i >= EVENTS.length && i < ITEMS.length - EVENTS.length ? true : undefined}
            >
              {event.video ? (
                <video
                  src={withBasePath(event.video)}
                  className="events__card-img"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="none"
                  draggable={false}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={withBasePath(event.image)}
                  alt={event.title}
                  className="events__card-img"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              )}
              <div className="events__card-overlay" />
              <div className="events__card-content">
                <h3 className="events__card-title">{event.title}</h3>
                <p className="events__card-desc">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
