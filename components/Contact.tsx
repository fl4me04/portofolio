"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, CheckCircle } from "lucide-react";
import { me } from "@/content/me";
import LocalTime from "./LocalTime";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // ⚠️ TODO — THIS FORM DOES NOT SEND ANYTHING.
  // It waits two seconds and claims success. Anyone who writes to you
  // here believes they have reached you and has not. Wire it to
  // Formspree or a Next route handler before this goes live, or delete
  // the form and point people at the email card beside it.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(me.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative z-20 mx-auto max-w-7xl scroll-mt-15 px-4 py-20 md:scroll-mt-0 md:py-32"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-4xl text-ink md:text-5xl">
            Get in touch
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink-muted">
            I am open to roles, collaborations and project enquiries, and I
            reply to everything that reaches me. It is currently{" "}
            <span className="whitespace-nowrap">
              <LocalTime />
            </span>{" "}
            in {me.location.city}, so allow for the time difference.
          </p>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="group mt-8 flex w-full items-center gap-4 rounded-2xl border border-line bg-white/[0.03] p-5 text-left transition-colors hover:border-accent/40"
          >
            <span className="rounded-full border border-line p-3 text-accent">
              <Mail size={20} />
            </span>
            <span className="flex-1">
              <span className="block text-xs text-ink-faint">
                Email
              </span>
              <span className="mt-1 block break-all text-ink">{me.email}</span>
            </span>
            <span className="text-ink-faint transition-colors group-hover:text-ink">
              {copied ? (
                <CheckCircle size={18} className="text-warm" />
              ) : (
                <Copy size={18} />
              )}
            </span>
          </button>
          <p className="mt-3 text-xs text-ink-faint">
            {copied ? "Copied to clipboard." : "Click to copy."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-line bg-white/[0.03] p-6 backdrop-blur-xl md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-ink-muted">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-line bg-black/40 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-ink-muted">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-line bg-black/40 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-line bg-black/40 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
                placeholder="A little about the role, project or question."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className={`w-full rounded-xl border py-3.5 font-medium transition-colors ${
                isSent
                  ? "border-warm/40 text-warm"
                  : "border-line text-ink hover:border-accent hover:text-accent"
              }`}
            >
              {isSubmitting
                ? "Sending…"
                : isSent
                  ? "Message sent — thank you"
                  : "Send message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
