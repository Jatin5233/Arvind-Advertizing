import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import Counter from "../components/Counter";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "About Arvind Advertizing – Printing Company Delhi | Arvind Advertising" },
  description: "Arvind Advertizing has 15+ years of printing & branding expertise, 2500+ projects completed, 800+ happy clients across 120+ cities in India. Learn about our journey, team & advanced production facility.",
  keywords: [
    "About Arvind Advertizing",
    "Arvind Advertising Delhi",
    "Best Printing Company Delhi",
    "Sign Board Manufacturers Bhajanpura Khajoori",
    "Flex Printing Factory Delhi NCR",
    "Mr Arvind Printing Director Delhi",
    "Industrial Printing Unit Delhi",
  ],
  alternates: { canonical: "https://www.arvindadvertizing.com/about" },
  openGraph: {
    title: "About Arvind Advertizing – India's Trusted Printing Partner",
    description: "15+ years of printing & branding excellence across India. 2500+ projects, 800+ clients.",
    url: "https://www.arvindadvertizing.com/about",
    images: [{ url: "https://www.arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp", width: 1200, height: 630, alt: "About Arvind Advertizing – Printing and Branding Company Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Arvind Advertizing – 15+ Years of Excellence",
    description: "India's trusted printing partner. 2500+ projects, 800+ clients across 120+ cities.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.arvindadvertizing.com/#organization",
  name: "ARVIND ADVERTISING",
  alternateName: ["Arvind Advertizing", "Arvind Advertising Delhi"],
  url: "https://www.arvindadvertizing.com",
  logo: "https://www.arvindadvertizing.com/icon.png",
  description: "Delhi's leading printing and branding manufacturing company with 15+ years of expertise.",
  foundingDate: "2011",
  founder: {
    "@type": "Person",
    name: "Mr. Arvind",
    jobTitle: "Founder & Director",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor, A-1/22, Khajoori, Pushta Road",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110053",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.702073,
    longitude: 77.256074,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9810718141",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.justdial.com/Delhi/Arvind-Advertizing-Near-Aggarwal-Sweets-Bhajan-Pura/011PXX11-XX11-150511170625-W8P4_BZDET",
    "https://www.google.com/maps/place/ARVIND+ADVERTIZING/@28.7020777,77.2534991,17z",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arvindadvertizing.com" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.arvindadvertizing.com/about" },
  ],
};

const STATS = [
  { value:2500, label:"Projects Completed", suffix:"+" },
  { value:120,  label:"Cities Served",       suffix:"+" },
  { value:800,  label:"Happy Clients",        suffix:"+" },
  { value:15,   label:"Years of Experience",  suffix:"+" },
];

const HIGHLIGHTS = [
  "ISO-Standard Production Facility",
  "In-House Design Team",
  "Fast Turn around and Timely Delivery",
  "Advanced UV, Flex & Digital Printing Technology",
   "PAN India Logistics Network",
];

const TEAM = [
  { name:"Arvind Kumar",    role:"Founder & CEO",         img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&face" },
  { name:"Ravi Sharma",     role:"Head of Production",    img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face" },
  { name:"Priya Singh",     role:"Creative Director",     img:"https://images.unsplash.com/photo-1494790108755-2616b612b0e5?w=400&h=400&fit=crop&face" },
  { name:"Vikram Mehta",    role:"Business Development",  img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="relative py-36 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/60 to-brand-charcoal/95" />
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold
                           text-white mb-5 leading-tight">
              About <span className="text-gradient-orange">Arvind Advertizing</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              15+ years of transforming brands through high-quality printing,
              innovative design, and reliable execution — PAN India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <AnimatedSection direction="left">
              <div className="relative">
                <img src="/company.webp"
                     alt="Arvind Advertizing Production Facility"
                     className="rounded-3xl shadow-2xl shadow-gray-200 w-full" />
               
                {/* Experience badge */}
                <div className="absolute -top-12 -left-12 w-28 h-28 bg-brand-orange rounded-full
                                flex flex-col items-center justify-center
                                shadow-xl shadow-orange-500/35">
                  <span className="font-display text-3xl font-black text-white leading-none">15+</span>
                  <span className="text-white/85 text-[10px] font-semibold text-center leading-tight">
                    Years of<br />Excellence
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right" className="lg:pt-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                               bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-5">
                Who We Are
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold
                             text-brand-charcoal mb-5 leading-tight">
                India&apos;s Trusted Printing &amp; Branding Partner
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                With over 15 years of expertise, Arvind Advertizing has established itself
                as one of India&apos;s leading printing and branding manufacturing companies.
                Our production setup is equipped with advanced printing
                technology, enabling us to handle projects of any scale with precision and
                consistency.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-7">
                From large-format Flex printing, UV printing & Digital printing to custom sign boards and
                complete event branding, we provide end-to-end solutions that help businesses
                build impactful brand presence. Our commitment to quality, reliability, and
                timely delivery has earned us long-term relationships with corporate clients,
                retail brands, and event organizers across India.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {HIGHLIGHTS.map(h => (
                  <div key={h} className="flex items-center gap-2.5">
                    <CheckCircle size={17} className="text-brand-orange shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{h}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4
                               bg-brand-orange hover:bg-brand-orange-hover text-white
                               font-bold rounded-full transition-all duration-200
                               hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30">
                Work With Us <ArrowRight size={17} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80} className="text-center">
                <div className="font-display text-5xl lg:text-6xl font-black text-white mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/60 text-sm font-medium">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
 <section className="py-24 lg:py-32 bg-[#F8F9FB]">
  <div className="max-w-6xl mx-auto px-5 lg:px-8">

    {/* Heading */}
    <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
      <span
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                   bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-5"
      >
        Leadership
      </span>

      <h2
        className="font-display text-3xl lg:text-5xl font-bold
                   text-brand-charcoal mb-5"
      >
        Meet Our Founder
      </h2>

      <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
        Driving creativity, quality, and innovation in every project
        delivered by Arvind Advertizing.
      </p>
    </AnimatedSection>

    {/* Owner Card */}
    <AnimatedSection>
      <div
        className="bg-white rounded-3xl shadow-xl shadow-gray-100
                   border border-gray-100 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Image */}
          <div className="relative h-full min-h-[350px]">
            <img
              src="/owner.webp"
              alt="Mr. Arvind - Founder and Director of Arvind Advertizing Delhi"
              className="w-full h-full object-cover"
            />

            <div
              className="absolute top-5 left-5 px-4 py-1.5 rounded-full
                         bg-white/90 backdrop-blur text-sm font-semibold
                         text-brand-charcoal shadow"
            >
              Founder & Director
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-14">

            <h3
              className="font-display text-3xl lg:text-4xl
                         font-bold text-brand-charcoal mb-3"
            >
              Mr. Arvind
            </h3>

            <p className="text-brand-orange font-semibold mb-6">
              Founder of Arvind Advertizing
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              With years of expertise in branding, printing, and visual
              advertising solutions, Mr. Arvind has built Arvind Advertizing
              into a trusted name for businesses across Delhi and beyond.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              His vision focuses on delivering premium quality, timely
              execution, and long-term client relationships through innovative
              advertising solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">

              <div className="bg-[#F8F9FB] rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-brand-orange mb-1">
                  15+
                </h4>
                <p className="text-sm text-gray-500">
                  Years Experience
                </p>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-brand-orange mb-1">
                  2500+
                </h4>
                <p className="text-sm text-gray-500">
                  Projects Delivered
                </p>
              </div>

              <div className="bg-[#F8F9FB] rounded-2xl p-5 text-center">
                <h4 className="text-2xl font-bold text-brand-orange mb-1">
                  100%
                </h4>
                <p className="text-sm text-gray-500">
                  Client Focused
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>

  </div>
</section>
    </>
  );
}
