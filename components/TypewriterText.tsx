"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Kept, but demoted. This used to be the biggest thing on the page at
// 7xl; a rotating greeting is a nice touch, not a headline.
const greetings = [
  "Hello",
  "Halo",
  "Hai",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
  "안녕하세요",
];

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 2200;

const TypewriterText = () => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const word = greetings[index % greetings.length];

    if (!isDeleting && text === word) {
      const hold = setTimeout(() => setIsDeleting(true), HOLD_MS);
      return () => clearTimeout(hold);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const step = setTimeout(
      () => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1),
        );
      },
      // A touch of jitter so it types like a person, not a metronome.
      isDeleting ? DELETE_MS : TYPE_MS + Math.random() * 45,
    );

    return () => clearTimeout(step);
  }, [text, isDeleting, index, reduceMotion]);

  if (reduceMotion) {
    return <p className="text-lg text-ink-muted md:text-xl">Hello</p>;
  }

  return (
    <p
      className="flex items-center text-lg text-ink-muted md:text-xl"
      aria-label="Hello"
    >
      <span aria-hidden>{text}</span>
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="ml-1 inline-block h-[1.1em] w-[2px] bg-warm"
      />
    </p>
  );
};

export default TypewriterText;
