import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import { Zap, Maximize, Settings, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Industrial Printing Machinery Delhi | Arvind Advertizing" },
  description: "Advanced industrial printing equipment at Arvind Advertizing Delhi: UV flatbed printers, StarFire solvent printers, HP Latex, Konica Minolta digital press, eco-solvent, CNC plotter & thermal lamination machines.",
  alternates: { canonical: "https://www.arvindadvertizing.com/machinery" },
  openGraph: {
    title: "Industrial Printing Machinery – Arvind Advertizing Delhi",
    description: "State-of-the-art UV flatbed, solvent, latex and digital printing machinery for premium output.",
    url: "https://www.arvindadvertizing.com/machinery",
    images: [{ url: "https://www.arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp", width: 1200, height: 630, alt: "Industrial Printing Machinery at Arvind Advertizing Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing Machinery – Arvind Advertizing",
    description: "UV flatbed, StarFire solvent, HP Latex, digital press & more.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arvindadvertizing.com" },
    { "@type": "ListItem", position: 2, name: "Machinery", item: "https://www.arvindadvertizing.com/machinery" },
  ],
};

const MACHINES = [
  {
  name: "UV Flatbed Printer",
  brand: "DOCAN H1000",
  category: "UV Printing",
  specs: [
    "Work area: 2500×1250 mm (8×4 ft)",
    "Resolution: Up to 1440 DPI",
    "40+ Compatible materials",
    "Printing speed: Up to 60㎡/h",
    "UV flatbed direct printing"
  ],
  img: "printing-branding-services-arvind-advertizing-delhi.webp",
  badge: ""
},
 {
  name: "UV Roll to Roll Printer",
  brand: "Wit-Color",
  category: "UV Printing",
  specs: [
    "Printing width: 3200 mm (10 ft)",
    "Resolution: Up to 1440 DPI",
    "6-color pigment Ink",
    "Printing speed: 85 sqm/hr",
    "Compatible materials: Vinyl, flex, backlit film, transparent film"
  ],
  img: "uv-roll-to-roll-printer-vinyl-sav-printing-delhi.webp",
  badge: ""
},
  {
  name: "Flex Printing Machine",
  brand: "StarFire Gongzheng H Series",
  category: "Flex & Banner Printing",
  specs: [
    "Printing width: 3200 mm (10 ft)",
    "Resolution: upto 600×800 DPI",
    "Compatible materials: Flex, vinyl, star flex, backlit film",
    "Printing speed: Up to 234㎡/h",
    "Color accuracy: ±0.1 mm",
, 
  ],
  img: "starfire-solvent-printer-flex-banner-printing.webp",
  badge: ""
},
  {
  name: "Flex Printing Machine",
  brand: "StarFire Gongzheng C Series",
  category: "Flex & Banner Printing",
  specs: [
    "Printing width: 3200 mm (10 ft)",
    "Resolution: Up to 1440 DPI",
    "Solvent & Eco-Solvent Ink",
    "Compatible materials: Flex, vinyl, backlit, star flex, film",
    "Printing speed: Up to 234㎡/h",
  ],
  img: "starfire-c-series-printer-arvind-advertizing.webp",
  badge: ""
},
  {
    name: "Latex Printer",
    brand: "HP Latex 570",
    category: "Vinyl & Flex Printing",
    specs: [
      "Print width: 64 inch/5 ft",
      "Resolution: Up to 1200×1200 DPI",
      "7-color pigment Ink", 
      "Printing speed: Up to 91 sqm/hr",
      "Suitable for Vinyl, flex, canvas, wallpaper, fabric"
    ],
    img: "hp-latex-printer-flex-printing-machine-arvind.webp",
    badge: ""
},
 
  
  {
  name: "Eco Solvent Printer",
  brand: "MUTOH Eco-solvent",
  category: "Vinyl & Flex Printing",
  specs: [
    "Printing width: 1625 mm (5 ft)",
    "Resolution: Up to 1440 DPI",
    "8-color pigment ink",
    "Print speed: Up to 41 sqm/hr",
    "Suitable for Vinyl, flex, one way vision, photo paper"
  ],
  img: "mutoh-eco-solvent-printer-vinyl-printing-delhi.webp",
  badge: ""
},
{
  name: "Digital Printing Machine",
  brand: "Konica Minolta PRESS C6100",
  category: "Digital Paper Printing",
  specs: [
    "Sizes: 12×51 inch & 13×51 inch",
    "Resolution: 1200×1200 DPI",
    "4-color toner system",
    "Speed: Up to 100 pages/min",
    "Suitable for Photo, stickers, brochures, packaging & catalogs"
  ],
  img: "offset-press-machine-commercial-printing-india.webp",
  badge: ""
},
  {
  name: "Plotter Machine",
  brand: " ",
  category: "Finishing",
  specs: [
    "Cutting width: Up to 5 ft",
    "Resolution: Up to 0.025 mm accuracy",
    "Automatic contour detection for printed graphics",
    "Suitable for paper, vinyl, stickers, labels & packaging"
  ],
  img: "vinyl-cutting-plotter-machine-sign-making-delhi.webp",
  badge: ""
},
  {
  name: "Thermal Lamination Machine",
  brand: " ",
  category: "Finishing",
  specs: [
    "Lamination width: Up to 5 ft",
    "Single-side & double-side lamination support",
    "Adjustable temperature, speed control & water resistance",
    "Suitable for Paper, photo paper, vinyl, posters, menus, photo prints & packaging"
  ],
  img: "thermal-lamination-machine-paper-finishing-delhi.webp",
  badge: ""
}
 
] as const;

const ADVANTAGES = [
  { Icon: Zap,      title: "Speed",      desc: "High-throughput machines ensure bulk orders are met on schedule." },
  { Icon: Maximize, title: "Scale",       desc: "Production capacity for orders of any size — from 10 to 10,000 pieces." },
  { Icon: Settings, title: "Precision",   desc: "CNC-controlled processes deliver ±0.01 mm accuracy consistently." },
  { Icon: Award,    title: "Quality",     desc: "OEM-grade inks and materials certified for outdoor & indoor use." },
] as const;

export default function MachineryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="relative py-36 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/60 to-brand-charcoal/95" />
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        {/* Animated gear decorations */}
        <div className="absolute right-10 top-20 w-64 h-64 opacity-5 pointer-events-none">
          <Settings size={256} className="text-white animate-spin-slow" strokeWidth={0.5} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Our Production Facility
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold
                           text-white mb-5 leading-tight">
              Advanced Printing <span className="text-gradient-orange">Machinery</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              State-of-the-art production equipment that enables us to deliver
              unmatched quality, precision, and speed — at any scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv, i) => {
              const { Icon } = adv;
              return (
                <AnimatedSection key={adv.title} delay={i * 80}
                                 className="text-center p-6 rounded-2xl bg-[#F8F9FB]
                                            hover:bg-brand-blue/5 transition-colors duration-200 group">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center
                                  justify-center mx-auto mb-3 group-hover:bg-brand-blue/20
                                  transition-colors duration-200">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <h4 className="font-display font-bold text-brand-charcoal mb-1">{adv.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Machine List */}
      <section className="py-24 lg:py-32 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-5">
              Equipment Fleet
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-charcoal mb-4">
              Our Printing Equipment
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              We invest in the finest global printing technology to ensure
              every job leaves our facility at the highest standard.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {MACHINES.map((machine, i) => (
              <AnimatedSection key={machine.name} delay={(i % 2) * 100}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm
                                border border-gray-100 hover:shadow-2xl hover:shadow-gray-200
                                hover:border-brand-orange/20 card-hover">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img src={machine.img} alt={machine.name} loading="lazy"
                         className="w-full h-full object-cover
                                    group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t
                                    from-brand-charcoal/70 via-transparent to-transparent" />
                    {/* Category badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-brand-blue/90
                                     text-white text-xs font-bold rounded-full backdrop-blur-sm">
                      {machine.category}
                    </span>
                    {/* Special badge */}
                    {machine.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-brand-orange
                                       text-white text-xs font-bold rounded-full shadow-md">
                        {machine.badge}
                      </span>
                    )}
                    {/* Machine name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/60 text-xs font-medium mb-0.5">{machine.brand}</p>
                      <h3 className="font-display font-bold text-white text-lg leading-tight">
                        {machine.name}
                      </h3>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="p-6">
                    <ul className="grid grid-cols-1 gap-2">
                      {machine.specs.map((spec) => (
                        <li key={spec}
                            className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal to-[#0d1420]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Industrial-Scale Production, <br />
            <span className="text-gradient-orange">Delivered on Time</span>
          </h2>
          <p className="text-white/55 mb-8 text-lg">
            Our machinery enables us to take on bulk orders with precision and consistency.
            Get in touch to discuss your project.
          </p>
          <Link href="/#contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-brand-orange
                           hover:bg-brand-orange-hover text-white font-bold rounded-full
                           text-lg transition-all duration-200 hover:-translate-y-1
                           hover:shadow-2xl hover:shadow-orange-500/35">
            Start a Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
