"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { me } from "@/content/me";
import LocalTime from "./LocalTime";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/**
 * A docked toolbar: full-bleed, flush to the top edge, sticky rather than
 * floating in from the margins. Three zones — status on the left, section
 * links in the middle, direct contact on the right.
 *
 * Height is fixed at 3.5rem so `scroll-mt-20` on each section clears it
 * on an anchor jump.
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
        if (el && marker >= el.offsetTop) current = link.name;
      });

      setActiveSection(window.scrollY < 100 ? "Home" : current);
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-center gap-4 px-4 sm:justify-between md:px-8">
        {/* Availability. The most useful thing a visiting recruiter can
            learn in the first second, so it goes first. */}
        <div className="hidden items-center gap-2.5 md:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warm opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-warm" />
          </span>
          <span className="text-xs text-ink-muted">
            Open to opportunities
          </span>
          <span className="text-xs text-ink-faint">·</span>
          <span className="text-xs">
            <LocalTime />
          </span>
        </div>

        <nav aria-label="Primary" className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <ul className="flex items-center gap-0.5 sm:gap-1">
            {navLinks.map((link) => {
              const isLinkActive = activeSection === link.name;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    aria-current={isLinkActive ? "true" : undefined}
                    onClick={() => setActiveSection(link.name)}
                    className={`block rounded-full px-2 py-1.5 text-[13px] transition-colors sm:px-3 sm:text-sm ${
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
