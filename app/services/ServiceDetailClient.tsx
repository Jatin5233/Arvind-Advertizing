"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft, ChevronRight, ArrowRight, CheckCircle, ArrowLeft,
} from "lucide-react";
import type { ServiceData } from "../components/service-data";
import { SERVICES } from "../components/service-data";
import { SERVICE_ICONS } from "../components/service-icons";
import AnimatedSection from "../components/AnimatedSection";
import MasonryGallery from "../components/MasonryGallery";

/* ── Slideshow ── */
function Slideshow({ images, title }: { images: string[]; title: string }) {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState<"l" | "r" | null>(null);

  const go = useCallback((d: "prev" | "next") => {
    if (dir) return;
    setDir(d === "next" ? "l" : "r");
    setTimeout(() => {
      setCur((c) => d === "next" ? (c + 1) % images.length : (c - 1 + images.length) % images.length);
      setDir(null);
    }, 300);
  }, [dir, images.length]);

  useEffect(() => {
    const t = setInterval(() => go("next"), 4000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl group select-none bg-brand-charcoal">
      <div className="relative h-72 sm:h-80 lg:h-[420px]">
        {images.map((src, i) => (
          <img key={src} src={src} alt={`${title} project ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-300
              ${i === cur
                ? dir === "l" ? "opacity-0 -translate-x-4"
                  : dir === "r" ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
                : "opacity-0 pointer-events-none"}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {images.length > 1 && (
        <>
          <button onClick={() => go("prev")} aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full
                       bg-white/85 backdrop-blur-sm flex items-center justify-center shadow
                       text-brand-charcoal hover:text-brand-orange hover:bg-white
                       opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          <button onClick={() => go("next")} aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full
                       bg-white/85 backdrop-blur-sm flex items-center justify-center shadow
                       text-brand-charcoal hover:text-brand-orange hover:bg-white
                       opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </>
      )}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300
              ${i === cur ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/80"}`} />
        ))}
      </div>

      <span className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full text-xs
                       font-semibold bg-black/40 backdrop-blur-sm text-white
                       opacity-0 group-hover:opacity-100 transition-opacity">
        {cur + 1} / {images.length}
      </span>
    </div>
  );
}

/* ── Main page ── */
export default function ServiceDetailClient({ service: svc }: { service: ServiceData }) {
  const Icon = SERVICE_ICONS[svc.slug];
  const others = SERVICES.filter((s) => s.slug !== svc.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/50 to-brand-charcoal/95" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
          <Link href="/services"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.accent} flex items-center justify-center shadow-lg`}>
              {Icon && <Icon size={26} className="text-white" />}
            </div>
            <span className="text-white/50 text-sm font-semibold uppercase tracking-widest">Our Services</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            {svc.title}
          </h1>
          <p className="text-white/60 text-lg max-w-xl">{svc.shortDesc}</p>
        </div>
      </section>

      {/* Slideshow + Text */}
      <section className="py-20 lg:py-28 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
            <AnimatedSection direction="left" className="w-full lg:w-[52%] lg:sticky lg:top-28">
              <Slideshow images={svc.images} title={svc.title} />
            </AnimatedSection>

            <AnimatedSection direction="right" className="w-full lg:w-[48%]">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${svc.accent} mb-5`}>
                {svc.title}
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-charcoal mb-5 leading-snug">
                What We Offer
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">{svc.fullDesc}</p>

              <h3 className="font-display text-lg font-bold text-brand-charcoal mb-4">Key Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-brand-orange shrink-0" />{f}
                  </li>
                ))}
              </ul>

              <Link href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange
                           hover:bg-brand-orange-hover text-white font-bold rounded-full
                           transition-all duration-200 hover:-translate-y-0.5
                           hover:shadow-lg hover:shadow-orange-500/30">
                Get a Quote <ArrowRight size={17} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Masonry Gallery ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <AnimatedSection className="mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              Our Work
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-charcoal">
              {svc.title} Projects
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Hover over any image to see the project name.
            </p>
          </AnimatedSection>

          <MasonryGallery items={svc.gallery} title={svc.title} />
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-charcoal">
              Explore Other Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((s, i) => {
              const OtherIcon = SERVICE_ICONS[s.slug];
              return (
                <AnimatedSection key={s.slug} delay={i * 70}>
                  <Link href={`/services/${s.slug}`}
                    className="group flex items-center gap-4 p-5 bg-white rounded-2xl
                               border border-transparent hover:border-brand-orange/20
                               shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shrink-0`}>
                      {OtherIcon && <OtherIcon size={20} className="text-white" />}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-charcoal group-hover:text-brand-orange transition-colors text-sm">{s.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{s.shortDesc}</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-dark" />
        <div className="relative z-10 max-w-xl mx-auto px-5">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/65 mb-8">Share your requirement and get a detailed quote within 24 hours.</p>
          <Link href="/#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-orange
                       hover:bg-brand-orange-hover text-white font-bold rounded-full
                       transition-all duration-200 hover:-translate-y-1
                       hover:shadow-2xl hover:shadow-orange-500/35">
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}