"use client";
/**
 * Counter
 * ───────
 * Animates a number from target → target (visually from 0 → target).
 * Renders the FINAL number in the initial HTML for SEO (Google sees the real value).
 * The animation is purely visual — starts when scrolled into view.
 */

import { useEffect, useRef, useState } from "react";

interface Props {
  target:    number;
  suffix?:   string;
  duration?: number;
  className?: string;
}

export default function Counter({
  target,
  suffix   = "+",
  duration = 2000,
  className = "",
}: Props) {
  /* Start with the actual target value (SSR-safe — Google indexes this) */
  const [display, setDisplay]   = useState(target);
  const [started, setStarted]   = useState(false);
  const [visible, setVisible]   = useState(false);
  const [mounted, setMounted]   = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  /* Mark as client-mounted, then reset to 0 for animation */
  useEffect(() => {
    setMounted(true);
    setDisplay(0);
  }, []);

  /* ── trigger on viewport entry ── */
  useEffect(() => {
    if (!mounted) return;
    const el = spanRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  /* ── count-up animation ── */
  useEffect(() => {
    if (!visible || started) return;
    setStarted(true);

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* ease-out cubic: fast start, slow finish */
      const eased    = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(target);
    };

    requestAnimationFrame(tick);
  }, [visible, started, target, duration]);

  return (
    <span
      ref={spanRef}
      className={`tabular-nums ${className}`}
      aria-label={`${target}${suffix}`}
    >
      {display}
      <span className="text-brand-orange">{suffix}</span>
    </span>
  );
}
