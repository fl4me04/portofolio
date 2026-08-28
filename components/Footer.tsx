"use client";

import { me } from "@/content/me";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full border-t border-line bg-bg pt-20 pb-12">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10 md:text-left">
        <p className="font-display text-xl text-ink">
          {me.name}
          <span className="text-warm">.</span>
        </p>
        <p className="mt-1 text-sm text-ink-faint">{me.role}</p>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-ink-muted md:mx-0">
          {me.signOff}
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-3 border-t border-line pt-8 text-center text-xs text-ink-faint md:flex-row md:items-start md:justify-between md:text-left">
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
