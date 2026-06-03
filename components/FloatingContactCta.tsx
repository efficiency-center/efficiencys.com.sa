"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingContactCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-8% 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href="/contact"
      className={`floating-cta ${visible ? "is-visible" : ""}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Contact Us
    </Link>
  );
}
