"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, Package, Clock, MessageCircle, ChevronDown } from "lucide-react";

const BADGES = [
  { Icon: MapPin,   label: "PAN India Service" },
  { Icon: Package,  label: "Bulk & Wholesale Orders" },
  { Icon: Clock,    label: "Timely Delivery" },
];

const TICKER = ["Flex Printing","UV Printing","Digital Paper Printing","Sign Boards","Event Branding"];

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero – Bulk Printing and Branding Solutions Across India">
      {/* Parallax bg */}
      <div
        ref={bgRef}
        className="absolute inset-[-20%] will-change-transform"
        style={{
          backgroundImage:"url('/printing-branding-services-arvind-advertizing-delhi.webp')",
          backgroundSize:"cover", backgroundPosition:"center",
        }}
      />
      {/* Overlay */}
      
      <div className="absolute inset-0 bg-gradient-to-br
                from-brand-blue/95 via-brand-charcoal/92 to-brand-charcoal/98" />
      {/* dot grid */}
      <div className="absolute inset-0 opacity-[0.04]"
           style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.55) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
      {/* glow blobs */}
      <div className="absolute right-0 top-1/4 w-[480px] h-[480px] rounded-full bg-brand-blue/20 blur-[100px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[380px] h-[380px] rounded-full bg-brand-orange/10 blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-36 pb-24 w-full">
        {/* Ticker */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                        border border-brand-orange/30 bg-brand-orange/10
                        mb-8 backdrop-blur-sm"
             style={{ animation:"fadeUp 0.6s ease 0.1s both" }}>
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-brand-orange text-sm font-semibold tracking-wide">
            {TICKER.join(" · ")}
          </span>
        </div>

        {/* Headline */}
        <h1
  className="font-display font-extrabold text-white leading-[1.08]
             text-4xl sm:text-5xl lg:text-[4.5rem] mb-6 max-w-4xl"
  style={{
    letterSpacing: "-1.5px",
    animation: "fadeUp 0.7s ease 0.2s both",
    textShadow: "0 2px 24px rgba(0,0,0,0.55)",
  }}
>
          Bulk Printing &amp; Branding
          <br />
          <span className="text-gradient-orange">Solutions in Delhi &amp; Across India</span>
        </h1>

        <p
          className="text-white/85 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
          style={{ animation:"fadeUp 0.7s ease 0.35s both" }}
        >
          Helping businesses create impactful branding with high-quality printing
          and professional execution — PAN India.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14"
             style={{ animation:"fadeUp 0.7s ease 0.5s both" }}>
          <Link href="/#contact"
                className="px-9 py-4 bg-brand-orange hover:bg-brand-orange-hover
                           text-white font-bold rounded-full text-base
                           transition-all duration-200 hover:-translate-y-1
                           hover:shadow-2xl hover:shadow-orange-500/35">
            Get Free Quote
          </Link>
          <a href="https://wa.me/919810718141" target="_blank" rel="noopener"
             className="px-9 py-4 border-2 border-white/30 text-white font-bold
                        rounded-full text-base hover:bg-white hover:text-brand-charcoal
                        transition-all duration-200 hover:-translate-y-1
                        flex items-center gap-2">
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-6"
             style={{ animation:"fadeUp 0.7s ease 0.65s both" }}>
          {BADGES.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-white/65 text-sm font-medium">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                <Icon size={15} className="text-brand-orange" />
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#services"
         className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                    flex flex-col items-center text-white/35 hover:text-white/70
                    transition-colors duration-200">
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  );
}
