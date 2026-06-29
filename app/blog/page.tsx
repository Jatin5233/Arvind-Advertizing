import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "./blog-data";
import AnimatedSection from "../components/AnimatedSection";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Printing & Sign Board Guides | Arvind Advertizing Delhi",
  description:
    "Delhi printing experts share guides on UV printing, flex boards, LED sign boards, event branding & corporate identity. From Arvind Advertizing, Bhajanpura.",
  alternates: { canonical: "https://www.arvindadvertizing.com/blog" },
  openGraph: {
    type: "website",
    title: "Printing & Branding Blog – Arvind Advertizing Delhi",
    description:
      "Delhi printing experts share guides on UV printing, flex boards, LED sign boards, event branding & corporate identity.",
    url: "https://www.arvindadvertizing.com/blog",
    images: [
      {
        url: "https://www.arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp",
        width: 1200,
        height: 630,
        alt: "Arvind Advertizing Blog – Printing & Branding Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing & Branding Blog – Arvind Advertizing Delhi",
    description:
      "Expert guides on UV printing, flex boards, LED sign boards & branding from Delhi's leading printing company.",
    images: ["https://www.arvindadvertizing.com/printing-branding-services-arvind-advertizing-delhi.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.arvindadvertizing.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.arvindadvertizing.com/blog",
    },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Arvind Advertizing Blog",
  description:
    "Expert guides on printing, branding, signage, and advertising from Arvind Advertizing Delhi.",
  url: "https://www.arvindadvertizing.com/blog",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.arvindadvertizing.com/#business",
    name: "Arvind Advertizing",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <section className="relative py-36 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/60 to-brand-charcoal/95" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <AnimatedSection>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Knowledge Hub
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold
                         text-white mb-5 leading-tight"
            >
              Printing &amp;{" "}
              <span className="text-gradient-orange">Branding Blog</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Expert guides, industry insights, and practical tips on printing,
              signage, and branding — from Delhi&apos;s leading printing company.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <AnimatedSection>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block"
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center
                           bg-[#F8F9FB] rounded-3xl overflow-hidden
                           border border-transparent hover:border-brand-orange/20
                           shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105
                               transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 bg-brand-orange
                               text-white text-xs font-bold rounded-full"
                  >
                    Featured
                  </span>
                </div>
                <div className="p-6 lg:p-10">
                  <span
                    className="inline-block px-3 py-1 rounded-full bg-brand-blue/10
                               text-brand-blue text-xs font-bold mb-4"
                  >
                    {featured.category}
                  </span>
                  <h2
                    className="font-display text-2xl lg:text-3xl font-bold
                               text-brand-charcoal mb-4 leading-snug
                               group-hover:text-brand-blue transition-colors"
                  >
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-5 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {formatDate(featured.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 lg:py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-charcoal">
              All Articles
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <article
                    className="bg-white rounded-2xl overflow-hidden shadow-sm
                               border border-transparent hover:border-brand-orange/20
                               hover:shadow-lg card-hover h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover
                                   group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <span
                        className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/90
                                   backdrop-blur text-xs font-bold text-brand-charcoal
                                   rounded-full"
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3
                        className="font-display text-lg font-bold text-brand-charcoal
                                   mb-3 leading-snug group-hover:text-brand-blue
                                   transition-colors line-clamp-2"
                      >
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} /> {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {post.readTime}
                          </span>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-gray-300 group-hover:text-brand-orange
                                     group-hover:translate-x-1 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal to-[#0d1420]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Need Help With Your Project?
          </h2>
          <p className="text-white/55 mb-8 text-lg">
            Our team of printing and branding experts is ready to help you
            choose the right solutions for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-orange
                       hover:bg-brand-orange-hover text-white font-bold rounded-full
                       text-lg transition-all duration-200 hover:-translate-y-1
                       hover:shadow-2xl hover:shadow-orange-500/35"
          >
            Get Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
