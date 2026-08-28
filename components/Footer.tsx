"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { me } from "@/content/me";

const socialLinks = [
  { icon: Github, href: me.socials.github, label: "GitHub" },
  { icon: Linkedin, href: me.socials.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: me.socials.instagram, label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full border-t border-line bg-bg pt-20 pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-2xl text-ink">
            {me.name}
            <span className="text-warm">.</span>
          </p>
          <p className="mt-1 text-sm text-ink-faint">{me.role}</p>
          <p className="mt-3 max-w-xs leading-relaxed text-ink-muted">
            {me.signOff}
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="text-ink-faint transition-colors hover:text-ink"
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-3 border-t border-line pt-8 text-xs text-ink-faint md:flex-row md:justify-between">
          <p>
            © {currentYear} {me.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
