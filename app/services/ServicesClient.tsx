"use client";


import Link from "next/link";
import { useState, useCallback } from "react";
import AnimatedSection from "../components/AnimatedSection";
import {
  Printer, Sun, Square, Calendar, FileText,
  Building2, ArrowRight, CheckCircle, ChevronLeft, ChevronRight,
} from "lucide-react";



const SERVICES = [
  {
    icon: Sun,
    title: "UV Printing",
    desc: "High-resolution UV flatbed printing directly on acrylic, wood, glass, metal, PVC, leather, and more. UV roll-to-roll printing on SAV, OWV-Vinyls, PU & PVC. Perfect for premium interior branding, corporate gifts, and architectural signage.",
    features: ["Print on 40+ surfaces", "600 DPI resolution", "White ink & varnish effects", "No minimum order", "Scratch-resistant output"],
    images: [
      "/uv-printing/uv-flatbed-printing-retail-shelf-branding-delhi.jpg",
      "/uv-printing/uv-printed-packaging-box-food-brand-india.jpg",
      "/uv-printing/uv-printing-cylindrical-object-customized-gift-delhi.jpg",
      "/uv-printing/uv-printing-menu-card-acrylic-arvind-advertizing.jpg",
      "/uv-printing/uv-printing-outdoor-directional-signage-delhi.jpg",
    ],
  },
  {
    icon: Square,
    title: "Sign Boards",
    desc: "Custom-fabricated sign boards for every commercial need — LED glow signs, Sun boards, ACP boards, MDF boards, acrylic letters, Flange, digital prints, SS cut-outs, neon-flex, and backlit displays.",
    features: ["LED & non-lit glow signs", "3D acrylic & SS letters", "ACP composite panels", "Neon-flex channel letters", "Installation included"],
    images: [
  "/sign-board/outdoor-directional-sign-board-tourism-delhi.jpg",
  "/sign-board/led-glow-sign-board-usha-brand-retail-shop.jpg",
  "/sign-board/backlit-sign-board-retail-store-branding-delhi.jpg",
  "/sign-board/acp-sign-board-shop-front-interior-branding.jpg",
  "/sign-board/indoor-sign-board-corporate-office-wayfinding.jpg",
],
  },
  {
    icon: Printer,
    title: "Flex Printing",
    desc: "Indoor and outdoor flex & vinyl banners, hoardings and print solutions. We use starfire-solvent, eco-solvent and latex inks on premium quality flex and vinyl to deliver vibrant colors and weather resistant outputs.",
    features: ["Single-side & double-side flex/vinyl", "Backlit & frontlit options", "Star & Taiwan flex material", "Self-adhesive, One way vision Vinyl", "UV-resistant inks"],
    images: [
  "/flex-printing/outdoor-flex-banner-hoarding-market-delhi.jpg",
  "/flex-printing/cera-flex-banner-retail-store-branding-india.jpg",
  "/flex-printing/flex-standee-anmol-brand-promotional-printing.jpg",
  "/flex-printing/outdoor-flex-banner-brand-promotion-delhi.jpg",
  "/flex-printing/flex-printing-promotional-standee-product-launch.jpg",
],
  },
  {
    icon: FileText,
    title: "Paper Printing",
    desc: "Premium offset and digital printing for all corporate stationery and marketing collateral — with 50+ paper stocks and finishes available.",
    features: ["Business cards & letterheads", "Brochures & catalogues", "Booklets, Calendars & diaries", "Packaging & boxes", "Danglers & TentCards", "UV / aqueous coating"],
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
    ],
  },
  {
    icon: Calendar,
    title: "Event Branding",
    desc: "End-to-end branding for corporate events, trade shows, product launches, conferences, and exhibitions — from concept to on-site installation and dismantling.",
    features: ["Stage backdrops & sets", "Standees, roll-ups & gates", "Exhibition stall design", "Canopy, Table Tops & Racks", "Directional signage", "Promo Tables & Display Shoppe"],
    images: [
  "/event-branding/event-branding-outdoor-canopy-stall-setup-delhi.jpg",
  "/event-branding/exhibition-stall-branding-green-display-india.jpg",
  "/event-branding/trade-show-exhibition-stall-led-display-branding.jpg",
  "/event-branding/exhibition-booth-branding-retail-product-display.jpg",
  "/event-branding/corporate-event-branding-store-front-signage.jpg",
  "/event-branding/adani-brand-event-backdrop-display-branding.jpg",
],
  },
  {
    icon: Building2,
    title: "Retail & Corporate Branding",
    desc: "Comprehensive brand-space execution for retail chains, showrooms, corporate campuses, and franchise outlets — ensuring consistent identity across every touchpoint.",
    features: ["Store front & interiors", "Wall graphics & murals", "Wayfinding systems", "Franchise rollout management", "Pan-India execution"],
    images: [
  "/corporate-branding/mascot-branding-corporate-character-display-delhi.jpg",
  "/corporate-branding/corporate-branding-product-display-standee-india.jpg",
  "/corporate-branding/retail-store-branding-wall-graphics-signage-delhi.jpg",
  "/corporate-branding/led-wall-corporate-event-branding-interior-delhi.jpg",
  "/corporate-branding/digital-display-kiosk-corporate-branding-india.jpg",
  "/corporate-branding/office-interior-branding-wall-texture-corporate.webp",
],
  },
] as const;

/* ── Slideshow component ── */
function ServiceSlideshow({ images, title }: { images: readonly string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState<"left" | "right" | null>(null);

  const go = useCallback(
    (dir: "prev" | "next") => {
      if (animating) return;
      const direction = dir === "next" ? "left" : "right";
      setAnimating(direction);
      setTimeout(() => {
        setCurrent((c) =>
          dir === "next" ? (c + 1) % images.length : (c - 1 + images.length) % images.length
        );
        setAnimating(null);
      }, 320);
    },
    [animating, images.length]
  );

  return (
    <div className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 group select-none">
      {/* Images */}
      <div className="relative h-72 lg:h-96 bg-gray-100">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${title} – photo ${idx + 1}`}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-300 ease-in-out
              ${idx === current
                ? animating === "left"
                  ? "opacity-0 -translate-x-6"
                  : animating === "right"
                  ? "opacity-0 translate-x-6"
                  : "opacity-100 translate-x-0"
                : "opacity-0 translate-x-0 pointer-events-none"
              }
            `}
          />
        ))}
      </div>

      {/* Arrow buttons – always visible on mobile, hover-reveal on desktop */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => go("prev")}
            aria-label="Previous image"
            className="
              absolute left-3 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full flex items-center justify-center
              bg-white/80 backdrop-blur-sm shadow-md
              text-brand-charcoal hover:bg-white hover:text-brand-orange
              transition-all duration-200
              opacity-100 lg:opacity-0 lg:group-hover:opacity-100
              hover:scale-110
            "
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => go("next")}
            aria-label="Next image"
            className="
              absolute right-3 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full flex items-center justify-center
              bg-white/80 backdrop-blur-sm shadow-md
              text-brand-charcoal hover:bg-white hover:text-brand-orange
              transition-all duration-200
              opacity-100 lg:opacity-0 lg:group-hover:opacity-100
              hover:scale-110
            "
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!animating && idx !== current) {
                  setAnimating(idx > current ? "left" : "right");
                  setTimeout(() => { setCurrent(idx); setAnimating(null); }, 320);
                }
              }}
              aria-label={`Go to image ${idx + 1}`}
              className={`
                rounded-full transition-all duration-300
                ${idx === current
                  ? "w-5 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }
              `}
            />
          ))}
        </div>
      )}

      {/* Image counter badge */}
      <span className="
        absolute top-3 right-3 z-10
        px-2.5 py-0.5 rounded-full text-xs font-semibold
        bg-black/40 backdrop-blur-sm text-white
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
      ">
        {current + 1} / {images.length}
      </span>
    </div>
  );
}

/* ── Page ── */
export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-36 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/60 to-brand-charcoal/95" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              What We Offer
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Our Printing &amp; <span className="text-gradient-orange">Branding Services</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Industrial-scale printing and branding solutions for businesses across India —
              from small businesses and startups to large commercial firms, retail chains, events and corporate brands.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 lg:py-32 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-20">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection key={svc.title} direction={isEven ? "left" : "right"}>
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-16 items-center`}
                >
                  {/* Slideshow */}
                  <ServiceSlideshow images={svc.images} title={svc.title} />

                  {/* Text */}
                  <div className="w-full lg:w-1/2">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5">
                      <Icon size={26} className="text-brand-blue" />
                    </div>
                    <h2 className="font-display text-2xl lg:text-4xl font-bold text-brand-charcoal mb-4">
                      {svc.title}
                    </h2>
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-7">
                      {svc.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-brand-orange shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
                    >
                      Get a Quote <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-dark" />
        <div className="relative z-10 max-w-2xl mx-auto px-5">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/65 mb-8 text-lg">
            Share your requirement and receive a detailed quote within 24 hours.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-full text-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/35"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}