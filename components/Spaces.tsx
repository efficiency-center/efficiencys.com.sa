"use client";

import { useRef, useEffect, useState } from "react";
import { STORY_CARDS } from "@/lib/data";
import { withBasePath } from "@/lib/paths";
import { useReveal } from "@/hooks/useReveal";

type CardState = {
  x: number;
  y: number;
  rotate: number;
  z: number;
};

const SEED_POSITIONS: CardState[] = [
  { x: 0, y: 0, rotate: -4, z: 1 },
  { x: 220, y: 30, rotate: 3, z: 2 },
  { x: 460, y: -10, rotate: -2, z: 3 },
  { x: 140, y: 260, rotate: 5, z: 4 },
  { x: 370, y: 240, rotate: -6, z: 5 },
  { x: 580, y: 20, rotate: 2, z: 6 },
  { x: 300, y: 280, rotate: -3, z: 7 },
  { x: 680, y: 250, rotate: 4, z: 8 },
  { x: 80, y: 140, rotate: -5, z: 9 },
  { x: 520, y: 160, rotate: 3, z: 10 },
  { x: 260, y: 120, rotate: -1, z: 11 },
];

export default function Spaces() {
  const header = useReveal({ stagger: true });
  const containerRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState<CardState[]>([]);
  const [topZ, setTopZ] = useState(STORY_CARDS.length + 1);
  const dragging = useRef<{ index: number; startX: number; startY: number; cardX: number; cardY: number } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const w = container.offsetWidth;

    const positions = STORY_CARDS.map((_, i) => {
      const seed = SEED_POSITIONS[i % SEED_POSITIONS.length];
      const scaleX = w / 800;
      return {
        x: seed.x * scaleX + (Math.random() - 0.5) * 40,
        y: seed.y + (Math.random() - 0.5) * 30,
        rotate: seed.rotate + (Math.random() - 0.5) * 4,
        z: seed.z,
      };
    });
    setCards(positions);
  }, []);

  const onPointerDown = (e: React.PointerEvent, index: number) => {
    e.preventDefault();
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);

    const newZ = topZ + 1;
    setTopZ(newZ);
    setCards((prev) =>
      prev.map((c, i) => (i === index ? { ...c, z: newZ } : c))
    );

    dragging.current = {
      index,
      startX: e.clientX,
      startY: e.clientY,
      cardX: cards[index]?.x ?? 0,
      cardY: cards[index]?.y ?? 0,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const { index, startX, startY, cardX, cardY } = dragging.current;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    setCards((prev) =>
      prev.map((c, i) =>
        i === index ? { ...c, x: cardX + dx, y: cardY + dy } : c
      )
    );
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    dragging.current = null;
  };

  return (
    <section className="section spaces" id="stories">
      <div className="container">
        <div className={`spaces__header ${header.className}`} ref={header.ref}>
          <h2 className="section-heading">Life at the center</h2>
          <p className="spaces__lead">
            Taken by the people who work here. No staging, just real days at Efficiency Center.
          </p>
        </div>
      </div>

      <div className="spaces__pile-wrap">
        <div className="container spaces__pile" ref={containerRef}>
          {STORY_CARDS.map((card, i) => {
            const pos = cards[i];
            if (!pos) return null;
            return (
              <div
                key={card.src}
                className="spaces__photo"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`,
                  zIndex: pos.z,
                }}
                onPointerDown={(e) => onPointerDown(e, i)}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
              >
                <div className="spaces__photo-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withBasePath(card.src)}
                    alt={card.alt}
                    className="spaces__photo-img"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="spaces__photo-bottom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBasePath("/assets/imgs/nav-mark.png")}
                      alt=""
                      className="spaces__photo-logo"
                      draggable={false}
                    />
                    <p className="spaces__photo-caption">{card.headline}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
