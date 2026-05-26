"use client";
/**
 * WhyUsSection
 * ────────────
 * Dark charcoal background with:
 *  • Animated stat counters (Counter component)
 *  • 6 feature cards with icon + hover effects
 *  • Radial glow blobs for depth
 */

import AnimatedSection from "./AnimatedSection";
import Counter         from "./Counter";
import { Award, Globe, Layers, Truck, Cpu, Headphones } from "lucide-react";

/* ── Data ───────────────────────────────────────── */
const STATS = [
  { value: 2500, label: "Projects Completed",  suffix: "+" },
  { value: 120,  label: "Cities Served",        suffix: "+" },
  { value: 800,  label: "Happy Clients",         suffix: "+" },
  { value: 15,   label: "Years of Experience",   suffix: "+" },
];

const POINTS = [
  {
    Icon:  Award,
    title: "High-Quality Production",
    desc:  "Advanced machinery and professional execution for premium print quality and durability.",
    glow:  "group-hover:bg-yellow-500/20",
    iconC: "text-yellow-400",
  },
  {
    Icon:  Globe,
    title: "PAN India Service",
    desc:  "Serving businesses, retailers, exhibitions, and corporate clients across India..",
    glow:  "group-hover:bg-blue-500/20",
    iconC: "text-blue-400",
  },
  {
    Icon:  Layers,
    title: "Bulk Order Capability",
    desc:  "Efficient handling of large-scale commercial printing and branding requirements.",
    glow:  "group-hover:bg-emerald-500/20",
    iconC: "text-emerald-400",
  },
  {
    Icon:  Truck,
    title: "Timely Delivery",
    desc:  "Fast turnaround and reliable project execution for time-sensitive campaigns and events..",
    glow:  "group-hover:bg-orange-500/20",
    iconC: "text-brand-orange",
  },
  {
    Icon:  Cpu,
    title: "Advanced Print Technology",
    desc:  "Latest UV, flex, and digital printing technology for superior, consistent results.",
    glow:  "group-hover:bg-purple-500/20",
    iconC: "text-purple-400",
  },
  {
    Icon:  Headphones,
    title: "Professional Support",
    desc:  "Dedicated experts guidandace from concept to installation customize according to business needs.",
    glow:  "group-hover:bg-teal-500/20",
    iconC: "text-teal-400",
  },
] as const;

/* ── Component ─────────────────────────────────── */
export default function WhyUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-charcoal relative overflow-hidden">

      {/* ── Decorative glows ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0
                        w-[580px] h-[580px] rounded-full
                        bg-brand-blue/15 blur-[110px]" />
        <div className="absolute bottom-0 -left-20
                        w-[420px] h-[420px] rounded-full
                        bg-brand-orange/8 blur-[90px]" />
        {/* subtle dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* ── Header ── */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-orange/15 text-brand-orange
                           text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold
                         text-white leading-tight mb-4">
            Trusted by Businesses{" "}
            <span className="text-gradient-orange">Across India</span>
          </h2>
          <p className="text-white/50 text-base lg:text-lg leading-relaxed">
            Delivering large-scale printing, branding, and signage solutions
            with uncompromising quality for over 15 years.
          </p>
        </AnimatedSection>

        {/* ── Stats ── */}
        <AnimatedSection
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="relative text-center py-8 px-4
                         bg-white/[0.04] border border-white/[0.06]
                         rounded-2xl overflow-hidden group
                         hover:bg-white/[0.07] hover:border-brand-orange/30
                         transition-all duration-350"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* corner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br
                              from-brand-orange/0 to-brand-orange/0
                              group-hover:from-brand-orange/5
                              transition-all duration-500 rounded-2xl" />

              <div className="relative font-display text-4xl lg:text-5xl
                              font-black text-white leading-none mb-2">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/55 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </AnimatedSection>

        {/* ── Feature grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS.map((pt, i) => {
            const { Icon } = pt;
            return (
              <AnimatedSection key={pt.title} delay={i * 80}>
                <div
                  className="group p-6 lg:p-7
                             bg-white/[0.03] border border-white/[0.06]
                             rounded-2xl hover:-translate-y-1.5
                             hover:border-brand-orange/25
                             transition-all duration-300 cursor-default"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center
                                 justify-center mb-4 bg-white/[0.06]
                                 transition-colors duration-300 ${pt.glow}`}
                  >
                    <Icon size={22} className={pt.iconC} />
                  </div>

                  <h4 className="font-display font-bold text-white text-base mb-2">
                    {pt.title}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">{pt.desc}</p>

                  {/* bottom accent line */}
                  <div className="mt-5 h-[2px] w-0 bg-brand-orange rounded-full
                                  group-hover:w-full transition-all duration-400" />
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
