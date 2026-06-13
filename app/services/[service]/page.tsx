import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES, getService } from "../../components/service-data";
import ServiceDetailClient from "../ServiceDetailClient";

/* ── Static params for build-time generation ── */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

/* ── Per-page metadata ── */
export async function generateMetadata(
  { params }: { params: { service: string } }
): Promise<Metadata> {
  const svc = getService(params.service);
  if (!svc) return {};

  const title = `${svc.title} in Delhi – Best ${svc.title} Services | Arvind Advertizing`;
  const description = `${svc.shortDesc} Trusted by 800+ clients across India. Get a free quote for ${svc.title.toLowerCase()} from Arvind Advertizing Delhi.`;

  return {
    title,
    description,
    alternates: { canonical: `https://arvindadvertizing.com/services/${svc.slug}` },
    openGraph: {
      title: `${svc.title} – Arvind Advertizing Delhi`,
      description,
      url: `https://arvindadvertizing.com/services/${svc.slug}`,
      images: [{ url: `https://arvindadvertizing.com${svc.images[0]}`, width: 1200, height: 630, alt: `${svc.title} by Arvind Advertizing Delhi` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${svc.title} – Arvind Advertizing`,
      description: svc.shortDesc,
      images: [`https://arvindadvertizing.com${svc.images[0]}`],
    },
  };
}

/* ── Page ── */
export default function ServicePage({ params }: { params: { service: string } }) {
  const svc = getService(params.service);
  if (!svc) notFound();

  /* ── Per-service JSON-LD ── */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.fullDesc,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://arvindadvertizing.com/#business",
      name: "Arvind Advertizing",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: svc.title,
    image: `https://arvindadvertizing.com${svc.images[0]}`,
    url: `https://arvindadvertizing.com/services/${svc.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      eligibleRegion: { "@type": "Country", name: "India" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://arvindadvertizing.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://arvindadvertizing.com/services" },
      { "@type": "ListItem", position: 3, name: svc.title, item: `https://arvindadvertizing.com/services/${svc.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceDetailClient service={svc} />
    </>
  );
}