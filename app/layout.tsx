import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arvindadvertizing.com"),
  title: {
    default: "Arvind Advertizing – Printing & Branding Services in Delhi, India",
    template: "%s | Arvind Advertizing",
  },
  description:
    "Arvind Advertizing is Delhi's leading printing & branding company. Industrial-scale flex printing, UV printing, sign boards, event branding & corporate identity solutions across India. Get a free quote today.",
  openGraph: {
    siteName: "Arvind Advertizing",
    locale: "en_IN",
    type: "website",
    url: "https://www.arvindadvertizing.com",
    title: "Arvind Advertizing – Printing & Branding Services in Delhi, India",
    description:
      "Delhi's leading printing & branding manufacturer — flex banners, UV printing, LED sign boards, event branding & corporate identity. 2500+ projects, 800+ clients across India.",
    images: [
      {
        url: "https://www.arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp",
        width: 1200,
        height: 630,
        alt: "Arvind Advertizing – Printing & Branding Services Delhi India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvind Advertizing – Printing & Branding Services Delhi",
    description:
      "Industrial-scale flex, UV, sign board & event branding across India. Get a free quote in 24 hours.",
    images: ["https://www.arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.arvindadvertizing.com",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_WEBMASTER_TOOLS_VERIFICATION_CODE",
    },
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": "28.702073;77.256074",
    ICBM: "28.702073, 77.256074",
  },
};

/* ── Single consolidated LocalBusiness + Service JSON-LD ── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.arvindadvertizing.com/#business",
  name: "Arvind Advertizing",
  alternateName: "Arvind Advertising",
  url: "https://www.arvindadvertizing.com",
  telephone: "+91-9810718141",
  email: "arvind.advertizing@gmail.com",
  image: "https://www.arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp",
  logo: "https://www.arvindadvertizing.com/icon.webp",
  description:
    "Delhi's leading printing and branding manufacturing company specializing in flex printing, UV printing, digital paper printing, sign boards, event branding, and corporate branding solutions across India.",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  foundingDate: "2011",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "First Floor, A-1/22, Pushta Rd, near Khajoori, Bhajanpura, Chowk",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110053",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.702073",
    longitude: "77.256074",
  },
  hasMap:
    "https://www.google.com/maps/place/ARVIND+ADVERTIZING/@28.7020777,77.2534991,17z",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "Country", name: "India" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "28.702073",
      longitude: "77.256074",
    },
    geoRadius: "50000",
  },
  sameAs: [
    "https://www.instagram.com/arvindadvertizingindia/",
    "https://www.linkedin.com/company/arvind-advertizing",
    "https://www.justdial.com/Delhi/Arvind-Advertizing-Near-Aggarwal-Sweets-Bhajan-Pura/011PXX11-XX11-150511170625-W8P4_BZDET",
    "https://www.google.com/maps/place/ARVIND+ADVERTIZING/@28.7020777,77.2534991,17z",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Printing & Branding Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UV Printing",
          description:
            "High-resolution UV flatbed printing on 40+ surfaces including acrylic, wood, glass, metal, PVC, and leather.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flex Printing",
          description:
            "Indoor and outdoor flex and vinyl banners, hoardings — vivid, weather-resistant, large-format.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sign Boards",
          description:
            "LED glow signs, ACP boards, acrylic letters, neon-flex channel letters, SS cut-outs — fabricated and installed.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Event Branding",
          description:
            "End-to-end branding for corporate events, trade shows, and exhibitions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Paper Printing",
          description:
            "Offset and digital printing for stationery, brochures, catalogues, and marketing collateral.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Branding",
          description:
            "Complete brand-space execution for retail chains, offices, and franchise outlets across India.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}