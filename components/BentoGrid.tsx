"use client";

import { motion } from "framer-motion";
import { me } from "@/content/me";
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

const stack = {
  "Currently working in": ["Swift", "SwiftUI", "UIKit", "Xcode"],
  "Core experience": ["Java", "Laravel / PHP", "TypeScript", "MySQL"],
  Proficient: ["React", "Next.js", "Tailwind CSS", "Python"],
  Familiar: ["Go", "C / C++", "React Native", "Firebase"],
};

const BentoGrid = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10 md:py-32 md:text-left">
      <span id="about" aria-hidden className="block scroll-mt-24" />

      <SectionHeading title="About" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2"
        >
          <Card className="flex h-full flex-col justify-center p-6 sm:p-8 md:p-10">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="flex h-full flex-col p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-baseline justify-center gap-3 md:justify-start">
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
                  className="flex justify-center gap-3 leading-relaxed text-ink-muted md:justify-start"
                >
                  {/* The bullet is dropped on a phone: a marker in front of a
                      centred, wrapping line reads as a misalignment. */}
                  <span className="mt-2.5 hidden h-1 w-1 shrink-0 rounded-full bg-warm md:block" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-6 lg:grid-cols-4"
      >
        {Object.entries(stack).map(([label, items]) => (
          <Card key={label} className="p-6 md:p-8">
            <p className="mb-4 text-xs tracking-widest text-ink-faint uppercase">
              {label}
            </p>
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
