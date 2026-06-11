"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "./service-data";
import { SERVICE_ICONS } from "./service-icons";


export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold
                         text-brand-charcoal leading-tight mb-4">
            Our Printing &amp;{" "}
            <span className="text-gradient-orange">Branding Services</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            End-to-end commercial printing and branding for businesses, retail
            stores, exhibitions, corporate events, and marketing campaigns across India.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((svc, i) => {
           const Icon = SERVICE_ICONS[svc.slug];
<Icon size={26} className="text-white" />
            return (
              <AnimatedSection key={svc.slug} delay={i * 90}>
                <Link href={`/services/${svc.slug}`} className="block group">
                  <div className="relative bg-white rounded-2xl overflow-hidden
                                  border border-transparent hover:border-brand-orange/25
                                  card-hover shadow-[0_2px_16px_rgba(0,0,0,0.05)]
                                  transition-all duration-300">

                    {/* Animated top accent bar */}
                    <span className="absolute top-0 left-0 h-[3px] w-0 bg-brand-orange
                                     rounded-t-2xl transition-all duration-500
                                     group-hover:w-full z-20" />

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={svc.images[0]}
                        alt={`${svc.title} by Arvind Advertizing Delhi`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform
                                   duration-700 group-hover:scale-110"
                      />
                      {/* gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${svc.accent} opacity-20`} />

                      {/* Icon badge */}
                      <div className="absolute bottom-3 left-4 w-10 h-10 bg-white/90
                                      backdrop-blur-sm rounded-xl flex items-center
                                      justify-center shadow-lg transition-transform duration-300
                                      group-hover:-translate-y-1">
                        <Icon size={20} className="text-brand-blue" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <h3 className="font-display text-[1.1rem] font-bold text-brand-charcoal
                                     mb-2 group-hover:text-brand-blue transition-colors duration-200">
                        {svc.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {svc.shortDesc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-brand-blue
                                       text-sm font-semibold group-hover:text-brand-orange
                                       transition-colors duration-200">
                        Explore Service
                        <ArrowRight size={15}
                          className="transition-transform duration-200 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-14" delay={100}>
          <Link href="/services"
            className="inline-flex items-center gap-2 px-9 py-4 bg-brand-blue
                       hover:bg-brand-blue-dark text-white font-semibold rounded-full
                       transition-all duration-200 hover:-translate-y-1
                       hover:shadow-xl hover:shadow-brand-blue/30">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>

      </div>
    </section>
  );
}