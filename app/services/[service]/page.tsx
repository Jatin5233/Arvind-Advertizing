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

  const title = `${svc.title} Services Delhi NCR & India | Arvind Advertizing`;
  const description = `Get best prices for ${svc.title.toLowerCase()} in Delhi NCR. ${svc.shortDesc}`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${svc.title} Delhi`,
      `${svc.title} India`,
      `${svc.title} Near Me`,
      `${svc.title} Manufacturers Delhi`,
      `${svc.title} Price Delhi`,
      `${svc.title} Company in Khajoori Pushta Road Delhi`,
      ...svc.features,
      "Arvind Advertising Delhi",
    ],
    alternates: { canonical: `https://www.arvindadvertizing.com/services/${svc.slug}` },
    openGraph: {
      title: `${svc.title} – Arvind Advertizing Delhi`,
      description,
      url: `https://www.arvindadvertizing.com/services/${svc.slug}`,
      images: [{ url: `https://www.arvindadvertizing.com${svc.images[0]}`, width: 1200, height: 630, alt: `${svc.title} by Arvind Advertizing Delhi` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${svc.title} – Arvind Advertizing`,
      description: svc.shortDesc,
      images: [`https://www.arvindadvertizing.com${svc.images[0]}`],
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
    keywords: `${svc.title} Delhi, ${svc.title} India, ${svc.features.join(", ")}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.arvindadvertizing.com/#business",
      name: "ARVIND ADVERTISING",
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: svc.title,
    image: `https://www.arvindadvertizing.com${svc.images[0]}`,
    url: `https://www.arvindadvertizing.com/services/${svc.slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `https://www.arvindadvertizing.com/services/${svc.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 48,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arvindadvertizing.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.arvindadvertizing.com/services" },
      { "@type": "ListItem", position: 3, name: svc.title, item: `https://www.arvindadvertizing.com/services/${svc.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What makes Arvind Advertizing the best provider for ${svc.title.toLowerCase()} in Delhi?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Arvind Advertizing combines industrial-grade machinery, over 15 years of manufacturing expertise, and direct factory pricing in Khajoori Pushta Road, Delhi to deliver superior quality ${svc.title.toLowerCase()} for businesses across India.`,
        },
      },
      {
        "@type": "Question",
        name: `How quickly can I get a quote and delivery for ${svc.title.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We provide custom price estimates within 24 hours. Production and pan-India dispatch for ${svc.title.toLowerCase()} typically take 3 to 5 business days depending on volume and customization requirements.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceDetailClient service={svc} />
    </>
  );
}