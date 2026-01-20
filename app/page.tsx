import StarBackground from "@/components/StarBackground";
import TypewriterText from "@/components/TypewriterText";
import BentoGrid from "@/components/BentoGrid";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // Jangan lupa import Footer (kalau sudah buat)

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0 fixed">
        <StarBackground />
      </div>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-32 md:pt-40 pb-20 px-4 min-h-dvh justify-center"
      >
        <div className="mb-4">
          <TypewriterText />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Fl4me
          </span>
        </h2>

        <p className="text-gray-400 text-base md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto px-2">
          Full Stack Engineer specializing in scalable web applications.{" "}
          <br className="hidden md:block" />I focus on{" "}
          <span className="text-blue-400 font-medium">performance</span>,{" "}
          <span className="text-purple-400 font-medium">clean code</span>, and{" "}
          <span className="text-pink-400 font-medium">user experience</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="#projects"
            className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:scale-105 flex items-center justify-center gap-2 active:scale-95"
          >
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 font-medium transition-all duration-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 flex items-center justify-center gap-2"
          >
            Contact Me
            <Mail size={18} />
          </Link>
        </div>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <div className="z-10 w-full bg-gradient-to-b from-transparent via-black/80 to-black border-t border-white/10 backdrop-blur-sm">
        <BentoGrid />
      </div>

      {/* --- PROJECTS SECTION --- */}
      <div className="z-10 w-full bg-black border-t border-white/5">
        <Projects />
      </div>

      {/* --- CONTACT SECTION --- */}
      <div className="z-10 w-full bg-gradient-to-b from-black to-black/80 border-t border-white/5">
        <Contact />
      </div>
    </main>
  );
}
