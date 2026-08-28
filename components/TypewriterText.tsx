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

    const step = setTimeout(
      () => {
        // Advancing to the next word happens here rather than in the
        // effect body, so no state is set synchronously during render.
        if (isDeleting && text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
          return;
        }

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
    return <p className="flex h-7 items-center text-lg text-ink-muted md:text-xl">Hello</p>;
  }

  return (
    // h-7 (1.75rem) is the line-height of both text-lg and text-xl. Without
    // it the paragraph's height came from whichever child was tallest: the
    // text's line box while typing, but the shorter cursor once the text
    // emptied, so the whole page shifted up on every delete cycle.
    <p
      className="flex h-7 items-center text-lg text-ink-muted md:text-xl"
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
