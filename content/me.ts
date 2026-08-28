/**
 * Everything the site says about you lives here.
 *
 * Rewrite these strings in your own voice and the whole page changes.
 * Anything marked TODO is a fact I could not invent for you — those
 * are the lines that do the most work, so they are worth your time.
 */

export const me = {
  name: "Shem", // TODO: full name as you want it shown
  handle: "Fl4me",
  role: "Full-stack developer",

  metaDescription:
    "Shem (Fl4me) — a full-stack developer in Jakarta who builds web and desktop apps, and writes about what breaks along the way.",

  location: {
    city: "Jakarta",
    country: "Indonesia",
    timeZone: "Asia/Jakarta",
  },

  email: "fl4mes04@gmail.com",

  socials: {
    github: "https://github.com/fl4me04",
    linkedin: "https://id.linkedin.com/in/shemjl",
    instagram: "https://www.instagram.com/shemjl_/?hl=en",
  },

  /* --- Hero -------------------------------------------------------- */

  // One sentence. What you make, in words you'd actually say out loud.
  // TODO: replace with the real thing.
  hook: "I build the unglamorous half of web apps — the schemas, the auth, the parts that have to still work at 2am.",

  // A second, quieter line. Somewhere to be specific or a little funny.
  // TODO
  hookSub: "Mostly in Java and Laravel. Occasionally against my better judgement.",

  /* --- About ------------------------------------------------------- */

  // TODO: 2–4 sentences, first person. What got you into this, what you
  // are doing right now, what you are still bad at. The last one matters.
  about: [
    "TODO: how you got into building things — the actual first thing you made, not 'I've been passionate about technology since childhood'.",
    "TODO: what you're doing now — studying? working? which year, where?",
    "TODO: one thing you're genuinely still figuring out.",
  ],

  // Dated on purpose: a 'now' line signals a living site.
  now: {
    updated: "TODO: e.g. August 2026",
    items: [
      "TODO: what you're building this month",
      "TODO: what you're learning",
      "TODO: something not code — a game, a book, a hobby",
    ],
  },

  /* --- Footer ------------------------------------------------------ */

  // TODO: a sign-off in your voice. Not 'building digital experiences'.
  signOff: "Made in Jakarta, mostly at night.",
} as const;
