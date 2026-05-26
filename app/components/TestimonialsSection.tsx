"use client";
/**
 * TestimonialsSection
 * ───────────────────
 * Auto-playing testimonial carousel:
 *  • Dark card with large quote marks
 *  • CSS transform translateX for slide transition
 *  • Dot navigation + prev/next buttons
 *  • Auto-advances every 5 s; resets on manual interaction
 *  • AnimatedSection wrapper for entrance animation
 */

import { useState, useEffect, useCallback, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

/* ── Data ───────────────────────────────────────── */
const TESTIMONIALS = [
  {
    text:    "Arvind Advertizing handled our entire retail chain branding across 40 stores. The quality and consistency was exceptional. Highly recommended for large-scale projects.",
    author:  "Retail Chain Director",
    company: "National Retail Brand",
    rating:  5,
    initials:"R",
    color:   "bg-blue-500",
  },
  {
    text:    "We've been working with Arvind Advertizing for 5 years for all our event branding needs. Their team is professional, creative, and always delivers on time.",
    author:  "Event Management Head",
    company: "Premier Events Co.",
    rating:  5,
    initials:"E",
    color:   "bg-brand-orange",
  },
  {
    text:    "Outstanding UV printing quality for our office interiors. The attention to detail and material quality exceeded our expectations. A truly reliable long-term partner.",
    author:  "Facilities Manager",
    company: "Tech Corporation",
    rating:  5,
    initials:"F",
    color:   "bg-emerald-600",
  },
  {
    text:    "From sign boards to complete corporate branding, Arvind Advertizing has been our go-to partner. Excellent bulk pricing and quality that never disappoints.",
    author:  "Marketing Director",
    company: "Manufacturing Group",
    rating:  5,
    initials:"M",
    color:   "bg-purple-600",
  },
];

/* ── Component ─────────────────────────────────── */
export default function TestimonialsSection() {
  const [current, setCurrent]   = useState(0);
  const [animate, setAnimate]   = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TESTIMONIALS.length;

  /* restart auto-play */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5200);
  }, [total]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const goTo = (idx: number) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrent(idx);
      setAnimate(true);
    }, 20);
    resetTimer();
  };
  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  const t = TESTIMONIALS[current];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* ── Header ── */}
        <AnimatedSection className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-orange/10 text-brand-orange
                           text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Client Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold
                         text-brand-charcoal leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-base lg:text-lg">
            Trusted by hundreds of businesses across India for quality and reliability.
          </p>
        </AnimatedSection>

        {/* ── Slider card ── */}
        <AnimatedSection>
          <div
            className="relative rounded-3xl overflow-hidden
                       bg-gradient-to-br from-[#0f1520] to-brand-charcoal
                       p-8 md:p-14 lg:p-16"
          >
            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full
                              bg-brand-blue/15 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full
                              bg-brand-orange/10 blur-[70px]" />
            </div>

            {/* Giant quote mark */}
            <Quote
              size={96}
              className="absolute top-6 left-6 text-brand-orange/10
                         rotate-180 pointer-events-none"
              strokeWidth={1}
            />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={20}
                        className="text-brand-orange fill-brand-orange" />
                ))}
              </div>

              {/* Quote text — animated on change */}
              <p
                className="text-white/85 text-lg md:text-2xl lg:text-[1.6rem]
                           leading-relaxed font-light mb-10 max-w-3xl"
                style={{
                  opacity:   animate ? 1 : 0,
                  transform: animate ? "none" : "translateY(10px)",
                  transition:"opacity 0.35s ease, transform 0.35s ease",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-4"
                style={{
                  opacity:   animate ? 1 : 0,
                  transform: animate ? "none" : "translateY(10px)",
                  transition:"opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s",
                }}
              >
                <div
                  className={`w-12 h-12 ${t.color} rounded-full flex items-center
                               justify-center text-white font-bold text-lg
                               font-display flex-shrink-0 shadow-lg`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-display font-bold text-base">
                    {t.author}
                  </p>
                  <p className="text-white/40 text-sm">{t.company}</p>
                </div>
              </div>
            </div>

            {/* ── Controls ── */}
            <div className="relative z-10 flex items-center
                            justify-between mt-10 pt-8
                            border-t border-white/[0.07]">
              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-350 ${
                      i === current
                        ? "w-8 bg-brand-orange"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full border border-white/15
                             flex items-center justify-center text-white/70
                             hover:bg-brand-orange hover:border-brand-orange
                             hover:text-white transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full border border-white/15
                             flex items-center justify-center text-white/70
                             hover:bg-brand-orange hover:border-brand-orange
                             hover:text-white transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Logos ticker ── */}
        <AnimatedSection delay={120} className="mt-14 overflow-hidden">
          <p className="text-center text-gray-400 text-sm font-medium mb-5">
            Trusted by businesses across industries
          </p>
          <div className="relative">
            {/* fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10
                            bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10
                            bg-gradient-to-l from-white to-transparent pointer-events-none" />

            <div className="marquee-track">
              {[
                "Retail Brands","Event Companies","Tech Firms","Manufacturing",
                "Hospitality","Healthcare","Education","FMCG",
                "Retail Brands","Event Companies","Tech Firms","Manufacturing",
                "Hospitality","Healthcare","Education","FMCG",
              ].map((label, i) => (
                <span
                  key={i}
                  className="mx-6 px-5 py-2.5 rounded-full border border-gray-200
                             text-gray-500 text-sm font-medium whitespace-nowrap
                             hover:border-brand-orange hover:text-brand-orange
                             transition-colors duration-200 cursor-default"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
