"use client";
/**
 * Counter
 * ───────
 * Animates a number from 0 → target using an ease-out cubic curve.
 * Starts only when the element scrolls into view.
 *
 * Props
 * ─────
 * target    number   – end value
 * suffix    string   – appended after number, e.g. "+"  (default "+")
 * duration  number   – animation length in ms            (default 2000)
 * className string   – forwarded to the wrapping <span>
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
  const [display, setDisplay]   = useState(0);
  const [started, setStarted]   = useState(false);
  const [visible, setVisible]   = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  /* ── trigger on viewport entry ── */
  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
