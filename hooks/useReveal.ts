"use client";

import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  opts: { stagger?: boolean } = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    let done = false;
    const check = () => {
      if (done) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
        done = true;
        el.classList.add("is-visible");
        window.removeEventListener("scroll", check);
      }
    };

    window.addEventListener("scroll", check, { passive: true });
    check();
    const tid = setTimeout(check, 150);

    return () => {
      window.removeEventListener("scroll", check);
      clearTimeout(tid);
    };
  }, []);

  const base = opts.stagger ? "reveal reveal--stagger" : "reveal";
  return { ref, className: base };
}
