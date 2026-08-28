/**
 * Projects, restructured as stories rather than feature lists.
 *
 * `problem` / `hardPart` / `wouldChange` are the fields visitors
 * actually remember — a feature list tells them what the app does,
 * these tell them how you think. TODOs are the ones I can't write.
 */

export type Project = {
  title: string;
  year: string;
  role: string;
  status: "live" | "archived" | "in progress";
  /** Why this exists at all. One sentence. */
  problem: string;
  /** What you actually built. */
  build: string;
  /** The part that fought back. This is the one people remember. */
  hardPart: string;
  /** Optional: what you'd do differently now. Honesty reads as skill. */
  wouldChange?: string;
  tags: string[];
  links: {
    demo?: string;
    repo: string;
  };
  /** Omit when you have no real screenshot yet — the card falls back to
   *  a typographic panel. A stock photo of someone else's shop is worse
   *  than no photo at all. */
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    title: "BeOkay",
    year: "TODO",
    role: "TODO: solo? team of how many? which parts were yours?",
    status: "live",
    problem:
      "TODO: why build a counseling platform — what did you notice that made this worth doing?",
    build:
      "An online counseling platform that connects people with licensed psychologists for virtual therapy sessions, built to make getting help feel ordinary rather than daunting.",
    hardPart:
      "TODO: the thing that took three evenings to get right. Scheduling? Session privacy? Getting Blade and Tailwind to behave?",
    tags: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind CSS"],
    links: {
      demo: "https://www.beokay.my.id/",
      repo: "https://github.com/KUCINGOREN8/BeOkay",
    },
    image: "/BeOkay.png",
    imageAlt:
      "The BeOkay counseling platform homepage, showing the psychologist booking flow.",
  },
  {
    title: "Xperimall",
    year: "TODO",
    role: "TODO",
    status: "archived",
    problem:
      "TODO: what's annoying about navigating a mall that made you want to fix it?",
    build:
      "A mobile directory for mall visitors: an interactive tenant guide, promo alerts, and a planner for mapping out a visit before you leave the house.",
    hardPart: "TODO",
    tags: ["React Native", "TypeScript", "MySQL"],
    links: { repo: "https://github.com/fl4me04/xperimall" },
    image: "/Xperimall.jpg",
    imageAlt: "The Xperimall app showing the interactive mall tenant directory.",
  },
  {
    title: "JoymarKet",
    year: "TODO",
    role: "TODO",
    status: "archived",
    problem:
      "TODO: a class assignment? a real shop that needed this? Say which — 'built for a course' is a perfectly good answer and reads as honest.",
    build:
      "A desktop retail management system in Java, built on a strict MVC split, with transactional logic, MySQL persistence via JDBC, and real session handling.",
    hardPart:
      "TODO: keeping transactions correct? The MVC discipline? Swing layouts?",
    wouldChange:
      "TODO: what you'd rebuild now that you know more. This field is optional but it's the most human line on the page.",
    tags: ["Java", "MVC", "MySQL", "JDBC", "OOP"],
    links: { repo: "https://github.com/fl4me04/JoymarKet" },
    // TODO: drop a real screenshot in /public and point `image` at it.
    // Until then this card renders a typographic panel — the old value
    // here was a stock Unsplash photo of someone else's shop.
  },
];
