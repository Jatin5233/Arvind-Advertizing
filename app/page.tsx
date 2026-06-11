import HeroSection        from "./components/HeroSection";
import ServicesSection    from "./components/ServicesSection";
import WhyUsSection       from "./components/WhyUsSection";
import ProcessSection     from "./components/ProcessSection";
import TestimonialsSection from "./components/ClientsMarquee";
import ContactSection     from "./components/ContactSection";
import type { Metadata } from "next";
import ClientsMarquee from "./components/ClientsMarquee";

export const metadata: Metadata = {
  title: "Arvind Advertizing – Flex, UV & Sign Board Printing Delhi",
  description: "India's trusted printing partner for flex, UV, sign boards, event branding & corporate identity. Get a quote in 24 hours.",
  alternates: { canonical: "https://arvindadvertizing.com" },
  openGraph: {
    title: "Arvind Advertizing – Printing & Branding",
    description: "Trusted printing partner for businesses across India.",
    url: "https://arvindadvertizing.com",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "Arvind Advertizing Printing Services" }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ClientsMarquee />
      <ContactSection />
      
    </>
  );
}
