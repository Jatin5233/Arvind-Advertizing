import HeroSection        from "./components/HeroSection";
import ServicesSection    from "./components/ServicesSection";
import WhyUsSection       from "./components/WhyUsSection";
import ProcessSection     from "./components/ProcessSection";
import ContactSection     from "./components/ContactSection";
import type { Metadata } from "next";
import ClientsMarquee from "./components/ClientsMarquee";

export const metadata: Metadata = {
  title: "Arvind Advertizing – #1 Flex, UV & Sign Board Printing in Delhi",
  description: "India's trusted printing partner for flex banners, UV printing, LED sign boards, event branding & corporate identity. 2500+ projects delivered. Get a free quote in 24 hours.",
  alternates: { canonical: "https://arvindadvertizing.com" },
  openGraph: {
    type: "website",
    title: "Arvind Advertizing – #1 Printing & Branding Company in Delhi",
    description: "Delhi's leading printing & branding manufacturer. Flex banners, UV printing, LED sign boards, event branding & corporate identity. 2500+ projects, 800+ clients. Free quote in 24 hrs.",
    url: "https://arvindadvertizing.com",
    images: [{ url: "https://arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp", width: 1200, height: 630, alt: "Arvind Advertizing Printing Services Delhi India" }],
  },
};

/* ── WebSite schema for sitelinks search box ── */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://arvindadvertizing.com/#website",
  name: "Arvind Advertizing",
  url: "https://arvindadvertizing.com",
  description: "Delhi's leading printing & branding manufacturing company.",
  publisher: {
    "@id": "https://arvindadvertizing.com/#business",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://arvindadvertizing.com/services?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/* ── Homepage breadcrumb (just Home) ── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://arvindadvertizing.com",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ClientsMarquee />
      <ContactSection />
    </>
  );
}
