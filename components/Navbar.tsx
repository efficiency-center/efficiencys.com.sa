"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [onHero, setOnHero] = useState(pathname === "/");
  const [activeId, setActiveId] = useState("home");
  const lastScrollY = useRef(0);

  const sectionHref = (href: string) => {
    if (href === "#home") return "/";
    return pathname === "/" ? href : `/${href}`;
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (pathname !== "/") {
      setOnHero(false);
      return;
    }

    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (y < 72) {
        setNavHidden(false);
      } else if (delta > 6) {
        setNavHidden(true);
        setMenuOpen(false);
      } else if (delta < -6) {
        setNavHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollPos = window.scrollY + 120;
      let current = "home";

      sections.forEach((section) => {
        if (scrollPos >= section.offsetTop) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${onHero ? "navbar--hero" : "navbar--page"}`}
      id="navbar"
    >
      <div className="container navbar__inner">
        <Link href="/" className="navbar__logo" aria-label="Efficiency Center — Home">
          <Logo variant="navbar" priority />
        </Link>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`navbar__nav ${navHidden ? "is-hidden" : ""} ${menuOpen ? "is-open" : ""}`}
          id="navMenu"
          aria-hidden={navHidden && !menuOpen}
        >
          <ul className={`navbar__links ${navHidden ? "is-hidden" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={sectionHref(link.href)}
                  className={
                    pathname === "/" && activeId === link.href.slice(1) ? "active" : ""
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
