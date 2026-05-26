"use client";
/**
 * ProcessSection
 * ──────────────
 * 4-step horizontal timeline:
 *  • Connecting gradient line (desktop)
 *  • Vertical line on mobile
 *  • Each step box lifts + glows on hover
 *  • Stagger-animated with AnimatedSection
 */

import AnimatedSection from "./AnimatedSection";
import { MessageSquare, PenTool, ShieldCheck, Truck } from "lucide-react";

const STEPS = [
  {
    num:  "01",
    Icon: MessageSquare,
    title:"Requirement Discussion",
    desc: "Understanding your branding goals, specifications, quantities, delivery locations, and project timeline in full detail.",
    color:"bg-blue-600",
    glow: "shadow-blue-500/30",
  },
  {
    num:  "02",
    Icon: PenTool,
    title:"Design & Production",
    desc: "Our in-house designers create artwork; production begins immediately on advanced UV, flex, and digital printing machinery.",
    color:"bg-brand-orange",
    glow: "shadow-brand-orange/30",
  },
  {
    num:  "03",
    Icon: ShieldCheck,
    title:"Quality Check",
    desc: "Every output undergoes rigorous inspection colour accuracy, material finish, dimension check before it leaves our facility.",
    color:"bg-emerald-600",
    glow: "shadow-emerald-500/30",
  },
  {
    num:  "04",
    Icon: Truck,
    title:"Delivery & Installation",
    desc: "Safe packaging, PAN-India logistics, and professional on-site installation by our trained execution teams.",
    color:"bg-purple-600",
    glow: "shadow-purple-500/30",
  },
] as const;

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* ── Header ── */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold
                         text-brand-charcoal leading-tight mb-4">
            How We Work
          </h2>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            A streamlined, transparent process designed for efficiency, quality,
            and complete client satisfaction every single time.
          </p>
        </AnimatedSection>

        {/* ── Steps ── */}
        <div className="relative">

          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px]
                       bg-gradient-to-r from-blue-600 via-brand-orange to-purple-600 z-0"
            aria-hidden
          />

          {/* Mobile vertical line */}
          <div
            className="lg:hidden absolute top-0 bottom-0 left-[26px]
                       w-[2px] bg-gradient-to-b
                       from-blue-600 via-brand-orange to-purple-600 z-0"
            aria-hidden
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {STEPS.map((step, i) => {
              const { Icon } = step;
              return (
                <AnimatedSection key={step.num} delay={i * 130}>
                  {/* Mobile layout: horizontal */}
                  <div className="flex lg:flex-col items-start lg:items-center
                                  gap-5 lg:gap-0 lg:text-center">

                    {/* Icon circle */}
                    <div
                      className={`relative flex-shrink-0 w-[52px] h-[52px] lg:w-16 lg:h-16
                                  ${step.color} rounded-2xl flex items-center justify-center
                                  text-white shadow-xl ${step.glow}
                                  transition-transform duration-300
                                  hover:-translate-y-2 lg:mb-6 z-10`}
                    >
                      <Icon size={24} />
                      {/* Step badge */}
                      <span
                        className="absolute -top-2 -right-2 w-6 h-6
                                   bg-white border-2 border-gray-100
                                   text-brand-charcoal text-[10px] font-black
                                   rounded-full flex items-center justify-center
                                   shadow-sm"
                      >
                        {parseInt(step.num)}
                      </span>
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-brand-orange text-[11px] font-bold
                                    tracking-widest uppercase mb-1.5">
                        Step {step.num}
                      </p>
                      <h4 className="font-display font-bold text-brand-charcoal
                                     text-base lg:text-lg mb-2 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <AnimatedSection delay={200} className="mt-20">
          <div
            className="relative overflow-hidden rounded-3xl
                       bg-gradient-to-br from-brand-blue to-brand-blue-dark
                       p-8 lg:p-12 text-center"
          >
            {/* decorative blob */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full
                            bg-white/5 blur-2xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full
                            bg-brand-orange/15 blur-3xl pointer-events-none" />

            <h3 className="font-display text-2xl lg:text-3xl font-bold
                           text-white mb-3 relative z-10">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/65 text-base mb-7 max-w-xl mx-auto relative z-10">
              Share your requirements and our team will connect within 24 hours
              with a detailed quote and production plan.
            </p>
            <a
              href="#contact"
              className="relative z-10 inline-flex items-center gap-2
                         px-9 py-4 bg-brand-orange hover:bg-brand-orange-hover
                         text-white font-semibold rounded-full
                         transition-all duration-200
                         hover:-translate-y-1
                         hover:shadow-xl hover:shadow-brand-orange/35"
            >
              Get Free Quote
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
