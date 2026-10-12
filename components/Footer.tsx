"use client";

import { me } from "@/content/me";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full border-t border-line bg-bg py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-xs text-ink-faint md:flex-row md:items-start md:justify-between md:px-10 md:text-left">
        <p>
          © {currentYear} {me.name}. All rights reserved.
        </p>
        <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
