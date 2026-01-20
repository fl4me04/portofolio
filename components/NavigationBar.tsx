"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [activeSection, setActiveSection] = useState("Home");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    else if (latest < 10 && isScrolled) setIsScrolled(false);
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    const handleScrollSpy = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      if (isAtBottom) {
        setActiveSection(navLinks[navLinks.length - 1].name);
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      navLinks.forEach((link) => {
        const id = link.href.replace("/", "").replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          if (scrollPosition >= element.offsetTop) {
            setActiveSection(link.name);
          }
        }
      });

      if (window.scrollY < 100) {
        setActiveSection("Home");
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrollSpy);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  const isActive = isScrolled || isOpen;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        layout
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: isActive ? 0 : 0,
          opacity: 1,
          width: isOpen ? "100%" : isScrolled ? "auto" : "100%",
          maxWidth: isOpen ? "500px" : "100%",
          borderRadius: isOpen ? "24px" : isScrolled ? "50px" : "50px",
          backgroundColor: isActive
            ? "rgba(22, 22, 23, 0.85)"
            : "rgba(22, 22, 23, 0)",
          border: isActive
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(255, 255, 255, 0.06)",
          padding: isOpen ? "20px 24px" : isMobile ? "10px 20px" : "16px 24px",
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`backdrop-blur-sm md:backdrop-blur-md transform-gpu transition-shadow min-w-[85vw] md:min-w-fit overflow-hidden ${
          isActive ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4 md:gap-12 w-full whitespace-nowrap">
          {/* LOGO */}
          <motion.div layout className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-white tracking-tight"
            >
              Portofolio<span className="text-blue-500">.</span>
            </Link>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block flex-shrink-0">
            <div className="flex items-baseline space-x-1">
              {navLinks.map((link) => {
                const isLinkActive = activeSection === link.name;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.name)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isLinkActive
                        ? "bg-white/10 text-white border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-xl" // <--- INI STYLE GLASS NYA
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <motion.div layout className="flex md:hidden ml-auto flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden w-full flex flex-col items-center border-t border-white/10 mt-4 pt-4 pb-2"
            >
              {navLinks.map((link) => {
                const isLinkActive = activeSection === link.name;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(link.name);
                    }}
                    className={`w-full text-center py-3 rounded-xl text-base font-medium transition-colors ${
                      isLinkActive
                        ? "bg-white/10 text-white border border-white/5"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
