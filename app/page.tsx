import StarBackground from "@/components/StarBackground";
import TypewriterText from "@/components/TypewriterText";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { me } from "@/content/me";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-bg">
      <div className="pointer-events-none fixed inset-0 z-0">
        <StarBackground />
      </div>

      {/* --- HERO ---
          Left-aligned on purpose. Everything centered is the house style
          of every generated landing page; text that starts at a margin
          reads like something a person laid out. */}
      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-dvh w-full max-w-5xl flex-col justify-center px-5 pt-32 pb-24 md:px-8"
      >
        <TypewriterText />

        <h1 className="mt-5 font-display text-6xl leading-[1.05] text-ink md:text-8xl">
          I&apos;m {me.name}
          <span className="text-warm">.</span>
        </h1>
        <p className="mt-3 text-sm tracking-wide text-ink-faint">
          Most places online, {me.handle}.
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-2xl">
          {me.hook}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-faint">
          {me.hookSub}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-line px-6 py-3 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            See what I&apos;ve built
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </Link>

          <Link
            href="#contact"
            className="self-start border-b border-line pb-0.5 text-ink-muted transition-colors hover:border-accent hover:text-ink"
          >
            or just say hello
          </Link>
        </div>
      </section>

      <div className="relative z-10 w-full border-t border-line bg-bg/85 backdrop-blur-sm">
        <BentoGrid />
      </div>

      <div className="relative z-10 w-full border-t border-line bg-bg">
        <Projects />
      </div>

      <div className="relative z-10 w-full border-t border-line bg-bg">
        <Contact />
      </div>
    </main>
  );
}
