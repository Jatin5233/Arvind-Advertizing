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
  return {
    title: `${svc.title} in Delhi | Arvind Advertizing`,
    description: svc.shortDesc,
    alternates: { canonical: `https://arvindadvertizing.com/services/${svc.slug}` },
    openGraph: {
      title: `${svc.title} – Arvind Advertizing`,
      description: svc.shortDesc,
      url: `https://arvindadvertizing.com/services/${svc.slug}`,
      images: [{ url: svc.images[0], width: 1200, height: 630, alt: svc.title }],
    },
  };
}

/* ── Page ── */
export default function ServicePage({ params }: { params: { service: string } }) {
  const svc = getService(params.service);
  if (!svc) notFound();
  return <ServiceDetailClient service={svc} />;
}