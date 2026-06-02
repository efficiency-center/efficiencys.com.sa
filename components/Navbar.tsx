"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const sectionHref = (href: string) => {
    if (href === "#home") return "/";
    return pathname === "/" ? href : `/${href}`;
  };

  useEffect(() => {
    if (pathname !== "/") return;

    const onScroll = () => {
      setScrolled(window.scrollY > 40);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const showNavbarCta = pathname !== "/" || activeId !== "home";

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} id="navbar">
      <div className="container navbar__inner">
        <Link href="/" className="navbar__logo" onClick={closeMenu} aria-label="Efficiency Center — Home">
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
        <nav className={`navbar__nav ${menuOpen ? "is-open" : ""}`} id="navMenu">
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
          <Link
            href="/contact"
            className={`btn btn--accent navbar__cta ${showNavbarCta ? "" : "navbar__cta--hidden"}`}
            onClick={closeMenu}
            aria-hidden={!showNavbarCta}
            tabIndex={showNavbarCta ? 0 : -1}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
