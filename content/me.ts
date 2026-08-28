/**
 * Everything the site says about you lives here.
 *
 * Rewrite these strings and the whole page changes. Anything marked
 * TODO is a fact I could not write for you — those lines carry the most
 * weight with a reader, so they are worth your time.
 */

export const me = {
  name: "Shem Josh Lowell",
  role: "iOS Developer",

  metaDescription:
    "Shem Josh Lowell — iOS Developer at the Apple Developer Academy @ BINUS, with a background in full-stack web and desktop engineering.",

  location: {
    city: "Tangerang",
    country: "Indonesia",
    timeZone: "Asia/Jakarta",
  },

  email: "fl4mes04@gmail.com",

  avatar: "/Profile.jpeg",
  avatarAlt: "Shem Josh Lowell",

  socials: {
    github: "https://github.com/fl4me04",
    linkedin: "https://id.linkedin.com/in/shemjl",
    instagram: "https://www.instagram.com/shemjl_/?hl=en",
  },

  /* --- Hero -------------------------------------------------------- */

  // The opening claim. Specific enough to be worth reading twice.
  hook: "I build iOS applications at the Apple Developer Academy @ BINUS, drawing on a background in full-stack web and desktop engineering.",

  // A second line for the detail the first sentence had no room for.
  hookSub:
    "Swift and SwiftUI today; Java, Laravel and TypeScript before that. The through-line is systems that hold up once real people use them.",

  /* --- About ------------------------------------------------------- */

  // First person, measured. Three short paragraphs is the right length:
  // long enough to say something, short enough to be read.
  about: [
    "TODO: how you came to software — the first thing you built that actually worked. Concrete beats sweeping; skip 'passionate about technology since childhood'.",
    "I am currently an iOS Developer at the Apple Developer Academy @ BINUS in Tangerang, where I design and build applications for Apple platforms alongside a cohort of developers, designers and product thinkers.",
    "TODO: what you are deliberately getting better at right now. Naming a genuine gap reads as confidence, not weakness — it is the most credible sentence on most portfolios.",
  ],

  // A dated list is the clearest signal that a site is maintained.
  now: {
    updated: "August 2026",
    items: [
      "Developing iOS applications in Swift and SwiftUI at the Apple Developer Academy @ BINUS.",
      "TODO: the specific project or skill you are focused on this month.",
      "TODO: one interest outside of engineering. One line is enough, and it keeps the section from reading like a résumé.",
    ],
  },

  /* --- Footer ------------------------------------------------------ */

  signOff:
    "Building considered software for Apple platforms and the web.",
} as const;
