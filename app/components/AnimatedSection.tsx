"use client";
/**
 * AnimatedSection
 * ───────────────
 * Wraps any children in a div that fades + slides into view
 * when it enters the viewport (IntersectionObserver).
 *
 * Props
 * ─────
 * direction  "up" | "left" | "right" | "none"  – slide direction  (default "up")
 * delay      number (ms)                         – stagger offset   (default 0)
 * threshold  number 0–1                          – visibility %     (default 0.12)
 * className  string                              – forwarded to div
 * children   ReactNode
 */

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface Props {
  children:  ReactNode;
  className?: string;
  delay?:     number;
  threshold?: number;
  direction?: Direction;
}

const INIT: Record<Direction, string> = {
  up:    "translateY(40px)",
  left:  "translateX(-40px)",
  right: "translateX(40px)",
  none:  "none",
};

export default function AnimatedSection({
  children,
  className = "",
  delay     = 0,
  threshold = 0.12,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* ── initial hidden state ── */
    el.style.opacity   = "0";
    el.style.transform = INIT[direction];
    el.style.transition = `opacity 0.68s cubic-bezier(.22,.68,0,1) ${delay}ms,
                            transform 0.68s cubic-bezier(.22,.68,0,1) ${delay}ms`;

    /* ── reveal on intersect ── */
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = "1";
          el.style.transform = "none";
          io.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
