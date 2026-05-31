import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services – Flex, UV, Sign Boards, Event & Paper Printing",
  description: "Explore our complete range: flex printing, UV printing, sign boards, event branding across India.",
  alternates: { canonical: "https://yourdomain.com/services" },
  openGraph: {
    title: "Printing & Branding Services – Arvind Advertizing",
    url: "https://yourdomain.com/services",
    images: [{ url: "/og/services.jpg", width: 1200, height: 630, alt: "Printing Services by Arvind Advertizing" }],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}