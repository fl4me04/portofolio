export type Project = {
  title: string;
  year: string;
  role: string;
  status: "live" | "archived" | "in progress";
  problem: string;
  build: string;
  hardPart: string;
  wouldChange?: string;
  tags: string[];
  links: {
    demo?: string;
    repo: string;
  };
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    title: "Martian",
    year: "2026",
    role: "Team of 6 - Working on AR Robot Placed & Assembly Part Features",
    status: "live",
    problem:
      "Students need more interactive ways to learn beyond reading textbooks or watching videos. At the same time, color sensors are relatively unfamiliar despite being used in many technologies people encounter every day, such as automatic sorting systems, manufacturing machines, and robotics.",
    build:
      "Martian is an AR-based learning application that uses a game-based approach to help children explore and understand color sensors, from their individual components to how they work in real-world applications.",
    hardPart:
      "Understanding how augmented reality could be meaningfully implemented in a real-world learning experience and translating those concepts into an interactive AR application.",
    tags: ["Swift", "SwiftUI", "UIKit"],
    links: { repo: "https://github.com/fl4me04/Martian" },
    image: "/Martian.png",
    imageAlt: "The Martian's keynote.",
  },
  {
    title: "Scouters",
    year: "2026",
    role: "Team of 6 - Working on Live Location Tracking",
    status: "archived",
    problem:
      "Parents want to give their children the freedom to explore and become independent, but that freedom often comes with uncertainty about their safety and well-being. Scouters addresses this gap by helping parents stay informed and connected without taking away their child’s independence.",
    build:
      "Scouters is a child safety and location awareness app that helps parents stay connected with their children through location tracking, meeting points, quick check-ins with Nudge, geofencing, and contextual safety insights. It is designed to provide greater peace of mind for parents while giving children the freedom to explore independently.",
    hardPart:
      "Understanding how location tracking works within Apple’s ecosystem and synchronizing real-time location data reliably across multiple devices.",
    tags: ["Swift", "SwiftUI", "UIKit", "Firebase"],
    links: { repo: "https://github.com/storyofhis/challenge-4" },
    image: "/Scouters.png",
    imageAlt:
      "The Scouters app showing live location track from the child, to parents.",
  },
  {
    title: "BeOkay",
    year: "2025",
    role: "Team of 5 - Working on Landing Page, Role-based Dashboard & Localization",
    status: "archived",
    problem:
      "BeOkay was built to address the gap between people who need mental health support and their ability to access it, providing a more approachable and accessible space to begin seeking help.",
    build:
      "An online counseling platform connecting users with licensed psychologists for virtual therapy sessions, with booking, session management and a public-facing awareness component.",
    hardPart:
      "Designing a reliable session scheduling system that could handle availability, appointments, and scheduling conflicts while keeping the experience simple for both users and counselors.",
    tags: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind CSS"],
    links: {
      demo: "https://www.beokay.my.id/",
      repo: "https://github.com/KUCINGOREN8/BeOkay",
    },
    image: "/BeOkay.png",
    imageAlt:
      "The BeOkay counseling platform homepage, showing the psychologist booking flow.",
  },
];
