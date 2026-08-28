"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { me } from "@/content/me";
import LocalTime from "./LocalTime";
import SectionHeading from "./SectionHeading";

const Row = ({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center gap-2 border-b border-line py-5 text-center first:pt-0 last:border-0 last:pb-0 md:flex-row md:items-start md:gap-4 md:text-left">
    <span className="text-ink-faint md:mt-0.5">
      <Icon size={16} />
    </span>
    <div className="w-full min-w-0 md:flex-1">
      <p className="mb-1 text-xs tracking-widest text-ink-faint uppercase">
        {label}
      </p>
      {children}
    </div>
  </div>
);

const socials = [
  { icon: Github, href: me.socials.github, label: "GitHub" },
  { icon: Linkedin, href: me.socials.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: me.socials.instagram, label: "Instagram" },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(me.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be refused; the address is selectable text
      // and the mailto link beside it still works.
    }
  };

  return (
    <section className="relative z-20 mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
      <span id="contact" aria-hidden className="block scroll-mt-24" />

      <SectionHeading title="Get in touch" />

      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center md:text-left"
        >
          <h3 className="font-display text-xl leading-tight text-ink md:text-2xl">
            Open to new opportunities
          </h3>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-muted md:mx-0">
            I am open to roles, collaborations and project enquiries. Email is
            the surest way to reach me, and I reply to everything that arrives.
          </p>

          <Link
            href={`mailto:${me.email}`}
            className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line px-6 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Send me an email
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-line bg-surface p-6 md:p-8"
        >
          <Row label="Email" icon={Mail}>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <Link
                href={`mailto:${me.email}`}
                className="truncate text-ink transition-colors hover:text-accent"
              >
                {me.email}
              </Link>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="-my-3 flex h-11 w-11 shrink-0 items-center justify-center text-ink-faint transition-colors hover:text-ink md:-mr-3"
              >
                {copied ? (
                  <Check size={16} className="text-warm" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
            <p className="mt-1 h-4 text-xs text-ink-faint">
              {copied ? "Copied to clipboard." : ""}
            </p>
          </Row>

          <Row label="Based in" icon={MapPin}>
            <p className="text-ink">
              {me.location.city}, {me.location.country}
            </p>
            <p className="mt-1 text-sm">
              <LocalTime />
            </p>
          </Row>

          <Row label="Elsewhere" icon={ArrowUpRight}>
            <ul className="flex flex-col items-center gap-2 md:items-start">
              {socials.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    className="group inline-flex items-center gap-2 py-1 text-ink transition-colors hover:text-accent"
                  >
                    <Icon size={16} className="text-ink-faint" />
                    {label}
                    <ArrowUpRight
                      size={16}
                      className="text-ink-faint opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
