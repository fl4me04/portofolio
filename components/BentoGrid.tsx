"use client";

import { motion } from "framer-motion";
import {
  Code2,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Globe,
  Database,
  Layout,
  Smartphone,
  Server,
  Cloud,
  Coffee,
  Terminal,
  Cpu,
  FileType,
  Palette,
} from "lucide-react";
import Link from "next/link";

const BentoCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

const techStack = [
  { name: "React", icon: Code2, color: "text-blue-400" },
  { name: "Next.js", icon: Globe, color: "text-white" },
  { name: "TypeScript", icon: Code2, color: "text-blue-500" },
  { name: "MySQL", icon: Database, color: "text-blue-300" },
  { name: "Java", icon: Coffee, color: "text-red-500" },
  { name: "Python", icon: Terminal, color: "text-yellow-300" },
  { name: "Go", icon: Terminal, color: "text-cyan-400" },
  { name: "C++", icon: Cpu, color: "text-blue-600" },
  { name: "C", icon: Cpu, color: "text-gray-400" },
  { name: "JavaScript", icon: FileType, color: "text-yellow-400" },
  { name: "HTML5", icon: Layout, color: "text-orange-500" },
  { name: "CSS3", icon: Palette, color: "text-blue-400" },
];

const BentoGrid = () => {
  return (
    // FIX: Ditambahkan 'min-h-dvh flex flex-col justify-center'
    // Ini bikin section ini minimal setinggi layar dan kontennya di tengah vertikal (sama kayak Home)
    <section
      id="about"
      className="min-h-dvh flex flex-col justify-center py-12 md:py-20 px-4 max-w-6xl mx-auto scroll-mt-15 md:scroll-mt-0"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Bit About <span className="text-gray-500">Me.</span>
        </h2>
      </motion.div>

      {/* --- Profile Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 h-auto md:h-[400px]">
        {/* --- Summary Card (Kiri) --- */}
        <BentoCard className="md:col-span-2 h-full flex flex-col justify-center p-6 md:p-10">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Full Stack Engineer from Indonesia 🇮🇩
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-lg">
            I build comprehensive web applications from database to user
            interface. Specialized in the{" "}
            <span className="text-blue-400 font-medium">
              enterprise Java & modern Laravel
            </span>
            , focusing on robust backend logic and scalable system architecture.
            <br className="my-4" />
            My goal is to create software that is not only functional but also
            scalable and easy to maintain.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full text-xs md:text-sm text-gray-300 border border-white/5">
              Fullstack
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full text-xs md:text-sm text-gray-300 border border-white/5">
              System Design
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full text-xs md:text-sm text-gray-300 border border-white/5">
              MVC Pattern
            </span>
          </div>
        </BentoCard>

        {/* --- Right Column (Map & Socials) --- */}
        <div className="md:col-span-1 flex flex-col gap-4 md:gap-6 h-full">
          {/* Map Card */}
          <BentoCard className="min-h-[200px] md:min-h-0 flex-1 flex flex-col items-center justify-center relative overflow-hidden group p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                <MapPin className="text-blue-400" size={32} />
              </div>
              <h4 className="text-white font-medium text-lg">Jakarta, ID</h4>
              <p className="text-sm text-gray-500 mt-1">UTC+7</p>
            </div>
          </BentoCard>

          {/* Socials Card */}
          <BentoCard className="flex flex-col justify-center p-6 h-[140px] md:h-auto">
            <h4 className="text-gray-400 text-sm mb-4 uppercase tracking-wider font-medium text-center md:text-left">
              Connect
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://github.com/fl4me04"
                target="_blank"
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:text-white text-gray-400 transition-all hover:scale-110"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://id.linkedin.com/in/shemjl"
                target="_blank"
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:text-blue-400 text-gray-400 transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/shemjl_/?hl=en"
                target="_blank"
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:text-purple-500 text-gray-400 transition-all hover:scale-110"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* --- Tech Stack Marquee --- */}
      <BentoCard className="flex items-center overflow-hidden h-[60px] md:h-[80px] p-0 relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        <motion.div
          className="flex gap-8 md:gap-12 pr-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...techStack, ...techStack, ...techStack, ...techStack].map(
            (tech, i) => (
              <div key={i} className="flex items-center gap-2 group min-w-max">
                <tech.icon
                  size={20}
                  className={`${tech.color} group-hover:scale-110 transition-transform`}
                />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ),
          )}
        </motion.div>
      </BentoCard>
    </section>
  );
};

export default BentoGrid;
