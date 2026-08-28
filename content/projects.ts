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
      "TODO: the problem this addresses — what gap in access to mental health support made it worth building?",
    build:
      "An online counseling platform connecting users with licensed psychologists for virtual therapy sessions, with booking, session management and a public-facing awareness component.",
    hardPart:
      "TODO: the engineering problem that took the longest to solve — session scheduling, data privacy for counseling records, or something else.",
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
      "TODO: the problem this addresses — what makes navigating a large mall difficult enough to warrant an app?",
    build:
      "A mobile directory for mall visitors, comprising an interactive tenant guide, promotional alerts and an itinerary planner for structuring a visit in advance.",
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
      "TODO: the context this was built for — coursework, a real retailer, or your own initiative. Stating it plainly is better than leaving it ambiguous.",
    build:
      "A desktop retail management system in Java, built on a strict MVC split, with transactional logic, MySQL persistence via JDBC, and real session handling.",
    hardPart:
      "TODO: the hardest part to get right — transactional integrity, enforcing the MVC boundaries, or the desktop UI layer.",
    wouldChange:
      "TODO: what you would architect differently with what you know now. Optional, but it demonstrates judgement better than any feature list.",
    tags: ["Java", "MVC", "MySQL", "JDBC", "OOP"],
    links: { repo: "https://github.com/fl4me04/JoymarKet" },
    // TODO: drop a real screenshot in /public and point `image` at it.
    // Until then this card renders a typographic panel — the old value
    // here was a stock Unsplash photo of someone else's shop.
  },
];
