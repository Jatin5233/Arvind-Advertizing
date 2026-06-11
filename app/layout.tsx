import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./globals.css";
import { servicesSchema } from "./services/page";

export const metadata: Metadata = {
  metadataBase: new URL("https://arvindadvertizing.com"), // Change after deployment
  title: {
    default: "Arvind Advertizing – Printing & Branding Services India",
    template: "%s | Arvind Advertizing",
  },
  description:
    "Industrial-scale flex, UV, sign board & event branding across India.",
  openGraph: {
    siteName: "Arvind Advertizing",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": "28.702073;77.256074",
    "ICBM": "28.702073, 77.256074",
  }
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Arvind Advertizing",
  url: "https://arvindadvertizing.com",
  telephone: "+91-9810718141",
  image: "https://arvindadvertizing.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
};
const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arvind Advertizing",
  "image": "https://arvindadvertizing.com/images/logo.png",
  "url": "https://arvindadvertizing.com",
  "telephone": "+91-9810718141",
  "email": "info@arvindadvertizing.com",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, A-1/22, Pushta Rd, near Khajoori, Bhajanpura, Chowk, Delhi, 110053, India",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110053",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.702073",    // your exact lat
    "longitude": "77.256074"   // your exact lng
  },
  "hasMap": "https://www.google.com/maps/place/ARVIND+ADVERTIZING/@28.7020777,77.2534991,17z/data=!3m2!4b1!5s0x390cfc3bdcfad8e7:0xf79926f234e1122!4m6!3m5!1s0x390cfc3c2a1dc4df:0x3892f24b5f16630b!8m2!3d28.702073!4d77.256074!16s%2Fg%2F11c59vm8h4?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Gurugram" },
    { "@type": "State", "name": "India" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "28.702073",
      "longitude": "77.256074"
    },
    "geoRadius": "50000"
  },
  "sameAs": [
    "https://www.google.com/maps/place/ARVIND+ADVERTIZING/@28.7020777,77.2534991,17z/data=!3m2!4b1!5s0x390cfc3bdcfad8e7:0xf79926f234e1122!4m6!3m5!1s0x390cfc3c2a1dc4df:0x3892f24b5f16630b!8m2!3d28.702073!4d77.256074!16s%2Fg%2F11c59vm8h4?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
    "https://www.instagram.com/arvindadvertizingindia/",
    "https://www.linkedin.com/company/arvind-advertizing",
    "https://www.justdial.com/Delhi/Arvind-Advertizing-Near-Aggarwal-Sweets-Bhajan-Pura/011PXX11-XX11-150511170625-W8P4_BZDET",
    
  ]
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
            __html: JSON.stringify(businessSchema),
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
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