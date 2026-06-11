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
      className={`navbar ${onHero ? "navbar--hero" : "navbar--page"} ${menuOpen ? "navbar--menu-open" : ""} ${navHidden && !menuOpen ? "navbar--hidden" : ""}`}
      id="navbar"
    >
      <div className="container navbar__inner">
        <Link href="/" className="navbar__logo" aria-label="Efficiency Center — Home">
          <Logo variant="navbar" priority />
        </Link>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`navbar__nav ${menuOpen ? "is-open" : ""}`}
        id="navMenu"
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__links">
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
        <a
          href="https://wa.me/966581115550?text=Hello%20Efficiency%20Center%2C%20I%20would%20like%20to%20know%20more%20about%20your%20workspaces.%0A%0A%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%85%D8%B1%D9%83%D8%B2%20%D8%A7%D9%84%D9%83%D9%81%D8%A7%D8%A1%D8%A9%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%B2%D9%8A%D8%AF%20%D8%B9%D9%86%20%D9%85%D8%B3%D8%A7%D8%AD%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D9%84%D8%AF%D9%8A%D9%83%D9%85."
          className="navbar__cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
