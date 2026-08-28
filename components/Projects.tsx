"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/content/projects";
import { me } from "@/content/me";
import SectionHeading from "./SectionHeading";

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  archived: "Archived",
  "in progress": "In progress",
};

const ProjectMedia = ({ project }: { project: Project }) => {
  if (!project.image) {
    // No real screenshot yet. A typographic panel is more honest than
    // a stock photo, and it doesn't pretend to be the app.
    return (
      <div className="relative flex aspect-video w-full items-center justify-center bg-bg-raised">
        <span className="font-display text-3xl text-ink-faint md:text-5xl">
          {project.title}
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full bg-bg-raised">
      <Image
        src={project.image}
        alt={project.imageAlt ?? project.title}
        fill
        sizes="(max-width: 768px) 100vw, 58vw"
        className="object-cover opacity-85 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      // Each card gets its own timing. Identical easing on everything is
      // what makes a page feel automated.
      transition={{
        duration: 0.65 + index * 0.06,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative mb-24 grid grid-cols-1 items-center gap-8 last:mb-0 md:mb-32 md:grid-cols-12 md:gap-8"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-line md:col-span-6 ${
          !isEven ? "md:order-last" : ""
        }`}
      >
        <ProjectMedia project={project} />
      </div>

      <div
        className={`flex flex-col items-start text-left md:col-span-6 ${
          isEven ? "md:items-end md:text-right" : ""
        }`}
      >
        <div
          className={`mb-3 flex items-center gap-3 text-xs tracking-widest text-ink-faint uppercase ${
            isEven ? "md:flex-row-reverse" : ""
          }`}
        >
          <span>{project.year}</span>
          <span className="h-1 w-1 rounded-full bg-ink-faint" />
          <span>{statusLabel[project.status]}</span>
        </div>

        <h3 className="font-display text-xl leading-tight text-ink md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 mb-6 text-sm text-ink-muted">{project.role}</p>

        <div
          className={`w-full rounded-2xl border border-line bg-surface p-6 backdrop-blur-md ${
            isEven ? "md:-ml-8" : "md:-mr-8"
          } z-20 space-y-4`}
        >
          <p className="leading-relaxed text-ink-muted">{project.problem}</p>
          <p className="leading-relaxed text-ink-muted">{project.build}</p>

          <div className="border-t border-line pt-4">
            <p className="mb-2 text-xs tracking-widest text-warm uppercase">
              Challenge
            </p>
            <p className="leading-relaxed text-ink-muted">{project.hardPart}</p>
          </div>

          {project.wouldChange && (
            <div className="border-t border-line pt-4">
              <p className="mb-2 text-xs tracking-widest text-warm uppercase">
                In hindsight
              </p>
              <p className="leading-relaxed text-ink-muted">{project.wouldChange}</p>
            </div>
          )}
        </div>

        <div
          className={`mt-6 flex w-full flex-wrap gap-2 ${
            isEven ? "md:justify-end" : ""
          }`}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`mt-6 flex gap-6 ${isEven ? "md:ml-auto" : ""}`}>
          <Link
            href={project.links.repo}
            target="_blank"
            aria-label={`${project.title} source code on GitHub`}
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Github size={20} />
          </Link>
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              aria-label={`Visit ${project.title}`}
              className="text-ink-faint transition-colors hover:text-accent"
            >
              <ExternalLink size={20} />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <span id="projects" aria-hidden className="block scroll-mt-24" />
      <SectionHeading
        title="Selected work"
        intro="Three projects, described with the engineering problems they presented rather than a list of features."
      />

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-16 flex">
        <Link
          href={me.socials.github}
          target="_blank"
          className="group flex items-center gap-2 border-b border-line pb-1 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          View the full archive on GitHub
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
