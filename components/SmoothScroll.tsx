"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Atur kecepatan scroll (makin besar makin pelan/halus)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function bawaan
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // Komponen ini tidak merender apa-apa, cuma logic
};

export default SmoothScroll;
