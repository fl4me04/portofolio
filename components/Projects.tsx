"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
// import Image from "next/image"; // Aktifkan jika sudah pakai Image Next.js

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  image: string;
};

const projects: Project[] = [
  {
    title: "BeOkay Mental Health",
    description:
      "Be Okay is an online counseling platform that connects users with licensed psychologists for virtual therapy sessions. The platform promotes mental health awareness and provides accessible counseling services through a user-friendly web interface.",
    tags: ["Laravel", "Blade", "mySQL", "PHP", "TailwindCSS"],
    links: {
      demo: "https://www.beokay.my.id/",
      repo: "https://github.com/KUCINGOREN8/BeOkay",
    },
    image: "/BeOkay.png",
  },
  {
    title: "Xperimall",
    description:
      "A comprehensive digital directory app built to streamline the mall experience. Features include an interactive tenant guide, exclusive promo alerts, and a custom activity planner for seamless visit management.",
    tags: ["React Native", "TypeScript", "MySQL"],
    links: { demo: "#", repo: "https://github.com/fl4me04/xperimall" },
    image: "/Xperimall.jpg",
  },
  {
    title: "JoymarKet",
    description:
      "A desktop-based retail management system engineered with Java. Implements strict MVC architectural pattern for code modularity. Features include robust transactional logic, persistent data management via MySQL, and secure user session handling.",
    tags: ["Java", "MVC Pattern", "MySQL", "JDBC", "OOP"],
    links: { demo: "#", repo: "https://github.com/fl4me04/JoymarKet" },
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center mb-12 md:mb-24 last:mb-0"
    >
      {/* 1. GAMBAR PROJECT */}
      <div
        className={`md:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 ${
          !isEven ? "md:order-last" : ""
        }`}
      >
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="relative aspect-video w-full bg-neutral-900 group-hover:scale-105 transition-transform duration-700 ease-out">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* 2. DESKRIPSI PROJECT */}
      <div
        className={`md:col-span-5 flex flex-col items-start text-left ${
          isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"
        }`}
      >
        <p className="text-blue-400 text-sm font-medium tracking-wider mb-2">
          FEATURED PROJECT
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Deskripsi Box */}
        <div
          className={`bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-gray-400 text-sm md:text-base leading-relaxed mb-6 shadow-xl w-full ${
            isEven ? "md:-ml-12 z-20" : "md:-mr-12 z-20"
          }`}
        >
          {project.description}
        </div>

        {/* Tech Stack Tags */}
        <div
          className={`flex flex-wrap gap-2 mb-6 w-full justify-start ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-300 px-3 py-1 bg-white/5 rounded-full border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <Link
            href={project.links.repo}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={22} />
          </Link>
          <Link
            href={project.links.demo}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={22} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 md:py-32 px-4 max-w-7xl mx-auto scroll-mt-15 md:scroll-mt-0"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-12 md:mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Selected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          A showcase of high-performance web applications and robust system
          architectures I&apos;ve engineered.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12 md:mt-20">
        <Link
          href="https://github.com/fl4me04"
          className="group flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-blue-400 hover:text-blue-400 transition-all"
        >
          View Full Project Archive
          <ArrowUpRight
            size={16}
            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
