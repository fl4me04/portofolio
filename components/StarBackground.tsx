"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  /** Baseline opacity the twinkle oscillates around. */
  alpha: number;
  /** Radians. Offset so the field doesn't pulse in unison. */
  phase: number;
  /** Radians per frame. */
  twinkleSpeed: number;
  r: number;
  g: number;
  b: number;
};

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  length: number;
};

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const animationFrameId = useRef<number>(0);
  const nextMeteorRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersCalm = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mobile browsers fire resize whenever the URL bar collapses or
    // reappears, which is a height-only change. Reseeding the field there
    // would visibly reshuffle the whole sky mid-scroll, so the stars are
    // only rebuilt when the width actually changes.
    let lastWidth = -1;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (window.innerWidth !== lastWidth || starsRef.current.length === 0) {
        lastWidth = window.innerWidth;
        initStars(window.innerWidth, window.innerHeight);
      }

      // With motion reduced there is no rAF loop to repaint the cleared
      // canvas, so the still field has to be redrawn here.
      if (prefersCalm()) drawFrame(false);
    };

    const initStars = (width: number, height: number) => {
      // Density per square pixel rather than a flat count: 420 stars spread
      // over a desktop reads as sky, but crammed into a phone it reads as
      // noise — and it is 420 arcs a frame on the weakest hardware.
      const numStars = Math.round(Math.min(420, (width * height) / 3000));
      const newStars: Star[] = [];

      for (let i = 0; i < numStars; i++) {
        // Warm off-white, to sit with the page's warm near-black.
        const r = Math.floor(Math.random() * 25 + 225);
        const g = Math.floor(Math.random() * 25 + 214);
        const b = Math.floor(Math.random() * 25 + 198);

        newStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.9 + 0.3,
          // ~8-20px per second at 60fps: visible drift, still calm.
          dx: (Math.random() - 0.5) * 0.34,
          dy: (Math.random() - 0.5) * 0.34,
          alpha: Math.random() * 0.5 + 0.28,
          phase: Math.random() * Math.PI * 2,
          // 0.024-0.062 rad/frame is a 1.7-4.4 second twinkle cycle at
          // 60fps — slow enough to feel like sky, fast enough to notice.
          twinkleSpeed: 0.024 + Math.random() * 0.038,
          r,
          g,
          b,
        });
      }
      starsRef.current = newStars;
    };

    const spawnMeteor = (width: number, height: number) => {
      // Enters from the upper band, travels down-right across the field.
      const angle = Math.PI / 5 + (Math.random() - 0.5) * 0.35;
      const speed = 5.5 + Math.random() * 3;

      meteorsRef.current.push({
        x: Math.random() * width * 0.7 - width * 0.05,
        y: Math.random() * height * 0.35,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 90 + Math.random() * 40,
        length: 90 + Math.random() * 70,
      });
    };

    const drawFrame = (advance: boolean) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star) => {
        // Twinkle: a sine on each star's own phase and speed, so the
        // field visibly breathes instead of sitting there.
        const twinkle = advance ? 0.5 + 0.5 * Math.sin(star.phase) : 1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${star.r}, ${star.g}, ${star.b}, ${
          star.alpha * twinkle
        })`;
        ctx.fill();

        if (!advance) return;

        star.phase += star.twinkleSpeed;
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      });

      if (!advance) return;

      // Meteors: rare, brief, and the clearest possible signal that the
      // background is alive rather than a static image.
      const now = performance.now();
      if (now > nextMeteorRef.current) {
        spawnMeteor(width, height);
        nextMeteorRef.current = now + 3000 + Math.random() * 4000;
      }

      meteorsRef.current = meteorsRef.current.filter((m) => {
        m.life += 1;
        m.x += m.vx;
        m.y += m.vy;

        // Fade in over the first fifth of its life, then out.
        const progress = m.life / m.maxLife;
        const fade =
          progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;

        const tailX = m.x - m.vx * (m.length / 8);
        const tailY = m.y - m.vy * (m.length / 8);

        const gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 246, 232, ${0.85 * fade})`);
        gradient.addColorStop(1, "rgba(255, 246, 232, 0)");

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        return (
          m.life < m.maxLife &&
          m.x < width + m.length &&
          m.y < height + m.length
        );
      });
    };

    const draw = () => {
      drawFrame(true);
      animationFrameId.current = requestAnimationFrame(draw);
    };

    resizeCanvas();

    // Someone who asked their OS for less motion gets a still field.
    if (prefersCalm()) {
      drawFrame(false);
    } else {
      nextMeteorRef.current = performance.now() + 1200;
      draw();
    }

    window.addEventListener("resize", resizeCanvas);

    // Covers the case where the canvas is laid out at zero size on mount
    // and only gains real dimensions later; a window resize event never
    // arrives for that, and the field would stay blank forever.
    const observer = new ResizeObserver(() => {
      if (canvas.width === 0 || canvas.height === 0) resizeCanvas();
    });
    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-bg"
    />
  );
};

export default StarBackground;
