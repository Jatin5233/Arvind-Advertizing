import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Arvind Advertizing – Bulk Printing & Branding Solutions Across India",
    template: "%s | Arvind Advertizing",
  },
  description:
    "Premium flex printing, UV printing, sign boards, event branding, paper printing, retail & corporate branding across India. Trusted B2B partner for 15+ years.",
  keywords: [
    "Flex Printing India","UV Printing","Sign Boards","Event Branding",
    "Paper Printing","Bulk Printing","Retail Branding","Corporate Branding",
    "Branding Solutions India","Arvind Advertizing","Printing Delhi",
  ],
  authors:   [{ name: "Arvind Advertizing" }],
  creator:   "Arvind Advertizing",
  publisher: "Arvind Advertizing",
  robots:    { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url:      "https://arvindadvertizing.com",
    siteName: "Arvind Advertizing",
    title:    "Arvind Advertizing – Bulk Printing & Branding Solutions Across India",
    description:
      "End-to-end commercial printing and branding for businesses, retail stores, exhibitions, and corporate events across India.",
  },
  twitter: {
    card:  "summary_large_image",
    title: "Arvind Advertizing – Bulk Printing & Branding",
    description: "Premium printing & branding solutions PAN India.",
  },
  alternates: { canonical: "https://arvindadvertizing.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
