"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { me } from "@/content/me";
import SectionLink from "./SectionLink";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/**
 * A docked toolbar: full-bleed, flush to the top edge, sticky rather than
 * floating in from the margins. Centred section links, with direct
 * contact links on the right.
 *
 * Height is fixed at 3.5rem; each section's anchor marker carries a
 * matching scroll margin so a jump clears the bar.
 */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");

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
        if (!el) return;

        // getBoundingClientRect, not offsetTop: offsetTop is measured
        // against the nearest positioned ancestor, and the contact
        // section is `relative`, so its marker reported 80 instead of
        // its real 6655 and won this comparison from the top of the page.
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (marker >= top) current = link.name;
      });

      setActiveSection(window.scrollY < 100 ? "Home" : current);
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center gap-4 px-6 sm:justify-end md:px-10">
        <nav
          aria-label="Primary"
          className="sm:absolute sm:left-1/2 sm:-translate-x-1/2"
        >
          <ul className="flex items-center gap-0.5 sm:gap-1">
            {navLinks.map((link) => {
              const isLinkActive = activeSection === link.name;

              return (
                <li key={link.name}>
                  <SectionLink
                    id={link.href.replace("#", "")}
                    aria-current={isLinkActive ? "true" : undefined}
                    onNavigate={() => setActiveSection(link.name)}
                    className={`block rounded-full px-2 py-1.5 text-sm transition-colors sm:px-3 ${
                      isLinkActive
                        ? "text-ink"
                        : "text-ink-faint hover:text-ink-muted"
                    }`}
                  >
                    {link.name}
                  </SectionLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-1 sm:flex">
          <Link
            href={me.socials.github}
            target="_blank"
            aria-label="GitHub"
            className="rounded-full p-2 text-ink-faint transition-colors hover:text-ink"
          >
            <Github size={16} />
          </Link>
          <Link
            href={me.socials.linkedin}
            target="_blank"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-ink-faint transition-colors hover:text-ink"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href={`mailto:${me.email}`}
            aria-label={`Email ${me.name}`}
            className="rounded-full p-2 text-ink-faint transition-colors hover:text-ink"
          >
            <Mail size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
