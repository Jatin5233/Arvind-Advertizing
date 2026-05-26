import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import {
  Printer, Sun, Square, Calendar, FileText,
  Building2, ArrowRight, CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services – Flex, UV, Sign Boards, Event & Paper Printing",
  description:
    "Explore Arvind Advertizing's complete range: flex printing, UV printing, sign boards, event branding, paper printing, retail & corporate branding across India.",
};

const SERVICES = [
  {
    icon:  Sun,
    title: "UV Printing",
    desc:  "High-resolution UV flatbed printing directly on acrylic, wood, glass, metal, PVC, leather, and more. UV roll-to-roll printing on SAV, OWV-Vinyls, PU & PVC. Perfect for premium interior branding, corporate gifts, and architectural signage.",
    features:["Print on 40+ surfaces","600 DPI resolution","White ink & varnish effects","No minimum order","Scratch-resistant output"],
    img:   "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
  },
   {
    icon:  Square,
    title: "Sign Boards",
    desc:  "Custom-fabricated sign boards for every commercial need — LED glow signs, Sun boards, ACP boards, MDF boards, acrylic letters, Flange,  digital prints, SS cut-outs, neon-flex, and backlit displays.",
    features:["LED & non-lit glow signs","3D acrylic & SS letters","ACP composite panels","Neon-flex channel letters","Installation included"],
    img:   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
  },
  {
    icon:  Printer,
    title: "Flex Printing",
    desc:  "Indoor and outdoor flex & vinyl banners, hoardings and print solutions. We use starfire-solvent, eco-solvent and latex inks on premium quality flex and vinyl to deliver vibrant colors and weather resistant outputs.",
    features: ["Single-side & double-side flex/vinyl","Backlit & frontlit options","Star & Taiwan flex material","Self-adhesive, One way vision Vinyl","UV-resistant inks"],
    img:   "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop",
  },
  {
    icon:  FileText,
    title: "Paper Printing",
    desc:  "Premium offset and digital printing for all corporate stationery and marketing collateral — with 50+ paper stocks and finishes available.",
    features:["Business cards & letterheads","Brochures & catalogues","Booklets, Calendars & diaries","Packaging & boxes","Danglers & TentCards","UV / aqueous coating"],
    img:   "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=500&fit=crop",
  },
  {
    icon:  Calendar,
    title: "Event Branding",
    desc:  "End-to-end branding for corporate events, trade shows, product launches, conferences, and exhibitions — from concept to on-site installation and dismantling.",
    features:["Stage backdrops & sets","Standees, roll-ups & gates","Exhibition stall design","Canopy, Table Tops & Racks","Directional signage","Promo Tables & Display Shoppe"],
    img:   "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
  },
  {
    icon:  Building2,
    title: "Retail & Corporate Branding",
    desc:  "Comprehensive brand-space execution for retail chains, showrooms, corporate campuses, and franchise outlets — ensuring consistent identity across every touchpoint.",
    features:["Store front & interiors","Wall graphics & murals","Wayfinding systems","Franchise rollout management","Pan-India execution"],
    img:   "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=500&fit=crop",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-36 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/60 to-brand-charcoal/95" />
        <div className="absolute inset-0 opacity-[0.035]"
             style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              What We Offer
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold
                           text-white mb-5 leading-tight">
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
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                                 gap-12 lg:gap-16 items-center`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
                    <img src={svc.img} alt={svc.title} loading="lazy"
                         className="w-full h-72 lg:h-96 object-cover hover:scale-105
                                    transition-transform duration-700" />
                  </div>
                  {/* Text */}
                  <div className="w-full lg:w-1/2">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center
                                    justify-center mb-5">
                      <Icon size={26} className="text-brand-blue" />
                    </div>
                    <h2 className="font-display text-2xl lg:text-4xl font-bold
                                   text-brand-charcoal mb-4">{svc.title}</h2>
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-7">
                      {svc.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {svc.features.map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-brand-orange shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/#contact"
                          className="inline-flex items-center gap-2 px-8 py-3.5
                                     bg-brand-orange hover:bg-brand-orange-hover
                                     text-white font-bold rounded-full
                                     transition-all duration-200 hover:-translate-y-0.5
                                     hover:shadow-lg hover:shadow-orange-500/30">
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
          <Link href="/#contact"
                className="inline-flex items-center gap-2 px-10 py-4
                           bg-brand-orange hover:bg-brand-orange-hover text-white
                           font-bold rounded-full text-lg transition-all duration-200
                           hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/35">
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
