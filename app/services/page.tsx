import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: { absolute: "Printing & Branding Services Delhi | Arvind Advertizing" },
  description: "Explore Arvind Advertizing's complete printing & branding services: flex printing, UV printing, sign board fabrication, event branding, digital paper printing & corporate branding across India.",
  alternates: { canonical: "https://www.arvindadvertizing.com/services" },
  openGraph: {
    title: "Printing & Branding Services – Arvind Advertizing Delhi",
    description: "Industrial-scale printing: flex, UV, sign boards, event branding & paper printing for businesses across India.",
    url: "https://www.arvindadvertizing.com/services",
    images: [{ url: "https://www.arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp", width: 1200, height: 630, alt: "Printing Services by Arvind Advertizing Delhi" }],
  },
};

/* ── FAQ schema (renders rich snippets in Google) ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is UV printing and what surfaces can it print on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UV printing is a high-resolution flatbed printing process that prints directly on 40+ surfaces including acrylic, wood, glass, metal, PVC, and leather. Arvind Advertizing offers UV printing in Delhi with up to 1440 DPI resolution and scratch-resistant output.",
      },
    },
    {
      "@type": "Question",
      name: "How much does flex banner printing cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flex banner printing prices vary by size, material and quantity. Arvind Advertizing offers competitive rates for both indoor and outdoor flex printing across India. Contact us for a custom quote within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide installation for sign boards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Arvind Advertizing provides complete turnkey installation for all sign boards including LED glow signs, ACP boards, acrylic letters, and neon-flex channel letters across Delhi and India.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle pan-India printing and branding projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we manage franchise rollouts, retail chain branding, and corporate campus signage across India with consistent quality and timely delivery. We have served 120+ cities.",
      },
    },
    {
      "@type": "Question",
      name: "What types of printing services does Arvind Advertizing offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arvind Advertizing offers UV printing, flex & vinyl printing, sign board fabrication, event branding, digital paper printing (offset & digital), and complete corporate & retail branding solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the turnaround time for printing orders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard turnaround is 3-5 business days depending on the order size and complexity. Express delivery is available for urgent projects. We provide a detailed production timeline with every quote.",
      },
    },
  ],
};

/* ── Services OfferCatalog schema ── */
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Printing and Branding",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.arvindadvertizing.com/#business",
    name: "Arvind Advertizing",
  },
  areaServed: "India",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Printing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UV Printing", description: "High-resolution UV flatbed printing on 40+ surfaces" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flex Printing", description: "Indoor and outdoor flex and vinyl banners and hoardings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sign Boards", description: "LED glow signs, ACP boards, acrylic letters and neon-flex" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Branding", description: "End-to-end branding for corporate events and exhibitions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Paper Printing", description: "Offset and digital printing for stationery and marketing collateral" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Branding", description: "Brand-space execution for retail chains and corporate campuses" } },
    ],
  },
};

/* ── Breadcrumb schema ── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arvindadvertizing.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.arvindadvertizing.com/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesClient />
    </>
  );
}