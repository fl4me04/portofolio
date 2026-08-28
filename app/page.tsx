import StarBackground from "@/components/StarBackground";
import TypewriterText from "@/components/TypewriterText";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SectionLink from "@/components/SectionLink";
import { ArrowDown } from "lucide-react";
import { me } from "@/content/me";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-bg">
      <div className="pointer-events-none fixed inset-0 z-0">
        <StarBackground />
      </div>

      {/* One continuous column. The sections used to be full-width panels
          with their own opaque backgrounds and a hard rule between them,
          which is what made each one land like a slide. Now they share a
          container, a background, and a vertical rhythm. */}
      <div className="relative z-10 w-full">
        {/* --- HERO ---
            Deliberately short of a full viewport: at exactly 100dvh the
            page reads as slide one of four. At 86vh the next section is
            visible underneath, which says 'keep scrolling'. */}
        <section
          id="home"
          className="mx-auto flex min-h-[82vh] w-full max-w-6xl scroll-mt-14 flex-col justify-center px-5 pt-20 pb-20 md:px-8"
        >
          <TypewriterText />

          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {me.name}
            <span className="text-warm">.</span>
          </h1>
          <p className="mt-4 text-sm tracking-wide text-ink-faint">
            {me.role} &middot; {me.location.city}, {me.location.country}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            {me.hook}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-faint">
            {me.hookSub}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <SectionLink
              id="projects"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              View selected work
              <ArrowDown
                size={15}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </SectionLink>

            <SectionLink
              id="contact"
              className="self-start border-b border-line pb-0.5 text-sm text-ink-muted transition-colors hover:border-accent hover:text-ink"
            >
              Get in touch
            </SectionLink>
          </div>
        </section>

        <BentoGrid />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
