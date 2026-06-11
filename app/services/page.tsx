import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services – Flex, UV, Sign Boards, Event & Paper Printing",
  description: "Explore our complete range: flex printing, UV printing, sign boards, event branding across India.",
  alternates: { canonical: "https://arvindadvertizing.com/services" },
  openGraph: {
    title: "Printing & Branding Services – Arvind Advertizing",
    url: "https://arvindadvertizing.com/services",
    images: [{ url: "/og/services.jpg", width: 1200, height: 630, alt: "Printing Services by Arvind Advertizing" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is UV printing and what surfaces can it print on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UV printing is a high-resolution flatbed printing process that prints directly on 40+ surfaces including acrylic, wood, glass, metal, PVC, and leather. Arvind Advertizing offers UV printing in Delhi with 600 DPI resolution and scratch-resistant output."
      }
    },
    {
      "@type": "Question",
      "name": "How much does flex banner printing cost in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flex banner printing prices vary by size, material and quantity. Arvind Advertizing offers competitive rates for both indoor and outdoor flex printing across India. Contact us for a custom quote within 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide installation for sign boards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Arvind Advertizing provides complete installation for all sign boards including LED glow signs, ACP boards, acrylic letters, and neon-flex channel letters across Delhi and India."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle pan-India printing and branding projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we manage franchise rollouts, retail chain branding, and corporate campus signage across India with consistent quality and timely delivery."
      }
    }
  ]
};
// app/services/page.tsx — add alongside FAQ schema
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Printing and Branding",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Arvind Advertizing"
  },
  "areaServed": "India",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Printing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UV Printing", "description": "High-resolution UV flatbed printing on 40+ surfaces" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flex Printing", "description": "Indoor and outdoor flex and vinyl banners and hoardings" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sign Boards", "description": "LED glow signs, ACP boards, acrylic letters and neon-flex" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Branding", "description": "End-to-end branding for corporate events and exhibitions" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paper Printing", "description": "Offset and digital printing for stationery and marketing collateral" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Branding", "description": "Brand-space execution for retail chains and corporate campuses" }}
    ]
  }
};

export default function ServicesPage() {
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  return <ServicesClient />;
}