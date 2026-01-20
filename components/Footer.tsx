"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/fl4me04" },
    { icon: Linkedin, href: "https://id.linkedin.com/in/shemjl" },
    { icon: Instagram, href: "https://www.instagram.com/shemjl_/?hl=en" },
  ];

  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8 relative z-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-blue-500/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">
            Fl4me<span className="text-blue-500">.</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Building digital experiences with code and creativity. Focused on
            scalability and user-centric design.
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <social.icon size={20} />
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 mb-8">
        <div className="w-full h-px bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
        <p>
          © {currentYear}{" "}
          <span className="text-gray-400 font-medium">Fl4me</span>. All rights
          reserved.
        </p>
        <p className="flex items-center gap-2">
          Built with
          <span className="text-gray-400">Next.js</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span className="text-gray-400">Tailwind</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span className="text-gray-400">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
