"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/**
 * A single centred row of links.
 *
 * The previous bar carried a wordmark, a hamburger, a mobile dropdown,
 * and animated its own width, radius and padding on scroll. Four short
 * links fit on the narrowest phone without any of that, so all of it is
 * gone: the only thing that changes on scroll is the backdrop, which is
 * there to keep the links legible over content rather than to perform.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40 && !isScrolled) setIsScrolled(true);
    else if (latest < 12 && isScrolled) setIsScrolled(false);
  });

  useEffect(() => {
    const handleScrollSpy = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 60;

      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].name);
        return;
      }

      const marker = window.scrollY + window.innerHeight / 2.5;
      let current = navLinks[0].name;

      navLinks.forEach((link) => {
        const el = document.getElementById(link.href.replace("#", ""));
        if (el && marker >= el.offsetTop) current = link.name;
      });

      setActiveSection(window.scrollY < 100 ? "Home" : current);
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: isScrolled
            ? "rgba(18, 16, 15, 0.78)"
            : "rgba(18, 16, 15, 0)",
          borderColor: isScrolled
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-full border px-2 py-1.5 backdrop-blur-md"
      >
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.name;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  aria-current={isLinkActive ? "true" : undefined}
                  onClick={() => setActiveSection(link.name)}
                  className={`block rounded-full px-3 py-1.5 text-[13px] transition-colors sm:px-4 sm:text-sm ${
                    isLinkActive
                      ? "text-ink"
                      : "text-ink-faint hover:text-ink-muted"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </div>
  );
}
