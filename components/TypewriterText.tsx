"use client";

import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Hello!",
  "Bonjour!",
  "Halo!",
  "Hola!",
  "Guten Tag!",
  "Ciao!",
  "Olá!",
  "你好!",
  "こんにちは!",
  "안녕하세요!",
  "مرحبا!",
  "नमस्ते!",
];

const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [cursorVariant, setCursorVariant] = useState("blinking");

  useEffect(() => {
    const currentWord = words[index % words.length];

    const typeSpeed = 50 + Math.random() * 50;
    const deleteSpeed = 30;
    const pauseTime = 1500;

    let timer: NodeJS.Timeout;

    const handleType = () => {
      // 1. FASE MENGHAPUS
      if (isDeleting) {
        setCursorVariant("typing");
        setText((prev) => prev.slice(0, -1));

        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
      // 2. FASE MENGETIK
      else {
        setCursorVariant("typing");
        setText((prev) => currentWord.slice(0, prev.length + 1));

        if (text === currentWord) {
          setCursorVariant("blinking");
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    timer = setTimeout(handleType, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  const cursorVariants: Variants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
    typing: {
      opacity: 1,
      transition: { duration: 0 },
    },
  };

  return (
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight flex items-center justify-center min-h-[80px] md:min-h-[100px]">
      {/* Teks Utama */}
      <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        {text}
      </span>

      {/* Kursor */}
      <motion.span
        variants={cursorVariants}
        animate={cursorVariant}
        className="inline-block w-[3px] md:w-[5px] h-[1em] ml-1 md:ml-2 bg-blue-500 rounded-full"
      />
    </h1>
  );
};

export default TypewriterText;
