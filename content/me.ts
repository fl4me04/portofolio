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

  email: "shem04josh@gmail.com",

  avatar: "/Profile.jpeg",
  avatarAlt: "Shem Josh Lowell",

  socials: {
    github: "https://github.com/fl4me04",
    linkedin: "https://id.linkedin.com/in/shemjl",
    instagram: "https://www.instagram.com/shemjl_/?hl=en",
  },

  /* --- Hero -------------------------------------------------------- */
  hook: "I build iOS applications, drawing on a background in full-stack web and desktop engineering.",

  hookSub:
    "Combining iOS development expertise with a full-stack engineering background to build scalable, intuitive, and impactful digital products.",

  /* --- About ------------------------------------------------------- */
  about: [
    "My journey into software began with building my first applications and seeing an idea turn into something that actually worked. What started with web and desktop development gradually grew into a broader interest in software engineering, eventually leading me to focus on building intuitive and meaningful experiences for iOS.",
    "I am currently an iOS Developer at the Apple Developer Academy @ BINUS in Tangerang, where I design and build applications for Apple platforms alongside a cohort of developers, designers and product thinkers.",
    "I’m currently focused on deepening my understanding of iOS architecture and writing software that remains clean, scalable, and maintainable as products grow.",
  ],

  // A dated list is the clearest signal that a site is maintained.
  now: {
    updated: "August 2026",
    items: [
      "Developing iOS applications in Swift, SwiftUI and UIKit at the Apple Developer Academy @ BINUS.",
      "Developing a game-based AR application to enhance learning about color sensors.",
      "Learning how to use artificial intelligence professionally to enhance workflows, solve problems, and build more effective solutions.",
    ],
  },

  /* --- Footer ------------------------------------------------------ */

  signOff:
    "Building considered software for Apple platforms.",
} as const;
