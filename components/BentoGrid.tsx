"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { me } from "@/content/me";
import LocalTime from "./LocalTime";
import SectionHeading from "./SectionHeading";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
  >
    {children}
  </div>
);

// Written out rather than icon-matched: the old list paired Go, Python
// and C with whatever lucide icon was closest, which fooled nobody.
// TODO: confirm the Swift/SwiftUI line and move anything that no longer
// belongs — I inferred those from the Apple Developer Academy role.
const stack = {
  "Currently working in": ["Swift", "SwiftUI", "Xcode"],
  "Core experience": ["Java", "Laravel / PHP", "TypeScript", "MySQL"],
  Proficient: ["React", "Next.js", "Tailwind CSS", "Python"],
  Familiar: ["Go", "C / C++", "React Native"],
};

const socials = [
  { icon: Github, href: me.socials.github, label: "GitHub" },
  { icon: Linkedin, href: me.socials.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: me.socials.instagram, label: "Instagram" },
];

const BentoGrid = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <span id="about" aria-hidden className="block scroll-mt-24" />
      <SectionHeading title="About" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {/* Prose. Deliberately the largest thing on the screen. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2"
        >
          <Card className="flex h-full flex-col justify-center p-8 md:p-10">
            <div className="space-y-4">
              {me.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-ink-muted md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Place, with a clock that actually runs. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 md:gap-6"
        >
          <Card className="flex flex-1 flex-col justify-center p-6 md:p-8">
            <p className="mb-2 text-xs tracking-widest text-ink-faint uppercase">
              Based in
            </p>
            <p className="font-display text-xl text-ink">
              {me.location.city}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {me.location.country}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-warm" />
              <LocalTime />
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <p className="mb-4 text-xs tracking-widest text-ink-faint uppercase">
              Elsewhere
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="rounded-xl border border-line p-3 text-ink-faint transition-colors hover:text-ink"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Now. A dated list is the clearest signal a site is tended to. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 md:mt-6"
      >
        <Card className="p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-baseline gap-3">
            <h3 className="font-display text-xl leading-tight text-ink md:text-2xl">
              Currently
            </h3>
            <span className="text-xs text-ink-faint">
              updated {me.now.updated}
            </span>
          </div>
          <ul className="space-y-3">
            {me.now.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 leading-relaxed text-ink-muted"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-warm" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>

      {/* Stack, grouped by honesty rather than rendered as a logo wall. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-6 lg:grid-cols-4"
      >
        {Object.entries(stack).map(([label, items]) => (
          <Card key={label} className="p-6 md:p-8">
            <p className="mb-4 text-xs tracking-widest text-ink-faint uppercase">{label}</p>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-sm text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};

export default BentoGrid;
