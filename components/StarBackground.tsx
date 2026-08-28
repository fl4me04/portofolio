"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  alpha: number;
  r: number;
  g: number;
  b: number;
};

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersCalm = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.scale(dpr, dpr);

      initStars(window.innerWidth, window.innerHeight);

      // With motion reduced there is no rAF loop to repaint the cleared
      // canvas, so the still field has to be redrawn here.
      if (prefersCalm()) drawStars();
    };

    const initStars = (width: number, height: number) => {
      // Was 1000 bright white points drifting at speed, which read as a
      // screensaver. Fewer, dimmer, warmer and slower turns it back into
      // atmosphere you stop noticing after a second.
      const numStars = 320;

      const newStars: Star[] = [];

      for (let i = 0; i < numStars; i++) {
        // Warm off-white rather than clinical white, to sit with the
        // page's warm near-black background.
        const r = Math.floor(Math.random() * 25 + 225);
        const g = Math.floor(Math.random() * 25 + 214);
        const b = Math.floor(Math.random() * 25 + 198);

        newStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.6 + 0.15,
          dx: (Math.random() - 0.5) * 0.025,
          dy: (Math.random() - 0.5) * 0.025,
          alpha: Math.random() * 0.35 + 0.06,
          r,
          g,
          b,
        });
      }
      starsRef.current = newStars;
    };

    const drawStars = (advance = false) => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${star.r}, ${star.g}, ${star.b}, ${star.alpha})`;
        ctx.fill();

        if (!advance) return;

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0) star.x = window.innerWidth;
        if (star.x > window.innerWidth) star.x = 0;
        if (star.y < 0) star.y = window.innerHeight;
        if (star.y > window.innerHeight) star.y = 0;
      });
    };

    const draw = () => {
      drawStars(true);
      animationFrameId.current = requestAnimationFrame(draw);
    };

    resizeCanvas();

    // Someone who asked their OS for less motion gets a still field.
    if (prefersCalm()) {
      drawStars();
    } else {
      draw();
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 bg-bg"
    />
  );
};

export default StarBackground;
