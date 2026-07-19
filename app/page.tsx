import HeroSection        from "./components/HeroSection";
import ServicesSection    from "./components/ServicesSection";
import WhyUsSection       from "./components/WhyUsSection";
import ProcessSection     from "./components/ProcessSection";
import ContactSection     from "./components/ContactSection";
import SeoKeywordHub      from "./components/SeoKeywordHub";
import type { Metadata } from "next";
import ClientsMarquee from "./components/ClientsMarquee";

export const metadata: Metadata = {
  title: { absolute: "Arvind Advertizing – Flex, UV & Sign Board Printing Delhi" },
  description: "Delhi's trusted printing manufacturer for flex banners, UV printing, LED sign boards & event branding. 2500+ projects. Get a free quote in 24 hours.",
  alternates: { canonical: "https://www.arvindadvertizing.com" },
  openGraph: {
    type: "website",
    title: "Arvind Advertizing – Printing & Branding Company in Delhi",
    description: "Delhi's leading printing & branding manufacturer. Flex banners, UV printing, LED sign boards, event branding & corporate identity. 2500+ projects, 800+ clients. Free quote in 24 hrs.",
    url: "https://www.arvindadvertizing.com",
    images: [{ url: "https://www.arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp", width: 1200, height: 630, alt: "Arvind Advertizing Printing Services Delhi India" }],
  },
};

/* ── WebSite schema for sitelinks search box ── */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.arvindadvertizing.com/#website",
  name: "Arvind Advertizing",
  url: "https://www.arvindadvertizing.com",
  description: "Delhi's leading printing & branding manufacturing company.",
  publisher: {
    "@id": "https://www.arvindadvertizing.com/#business",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.arvindadvertizing.com/services?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ClientsMarquee />
      <SeoKeywordHub />
      <ContactSection />
    </>
  );
}
