import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, getBlogPost } from "../blog-data";
import AnimatedSection from "../../components/AnimatedSection";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";

/* ── Static params ── */
export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

/* ── Per-post metadata ── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: { absolute: post.title },
    description: post.excerpt,
    alternates: {
      canonical: `https://www.arvindadvertizing.com/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://www.arvindadvertizing.com/blog/${post.slug}`,
      images: [
        {
          url: `https://www.arvindadvertizing.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://www.arvindadvertizing.com${post.image}`],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ── Simple Markdown-like rendering (h2, h3, lists, tables, bold, links) ── */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: JSX.Element[] = [];
  let i = 0;
  let listBuffer: string[] = [];
  let tableBuffer: string[] = [];
  let keyIdx = 0;

  function flushList() {
    if (listBuffer.length === 0) return;
    const isChecklist = listBuffer[0].startsWith("- [");
    if (isChecklist) {
      elements.push(
        <ul key={keyIdx++} className="space-y-2 mb-6">
          {listBuffer.map((item, j) => {
            const checked = item.startsWith("- [x]");
            const text = item.replace(/^- \[.\]\s*/, "");
            return (
              <li key={j} className="flex items-start gap-2 text-gray-600 text-[0.95rem]">
                <span className={`mt-1 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center text-xs ${checked ? 'bg-brand-orange border-brand-orange text-white' : 'border-gray-300'}`}>
                  {checked ? '✓' : ''}
                </span>
                {text}
              </li>
            );
          })}
        </ul>
      );
    } else {
      elements.push(
        <ul key={keyIdx++} className="space-y-2 mb-6 ml-1">
          {listBuffer.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-gray-600 text-[0.95rem] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/^-\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-charcoal font-semibold">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
    }
    listBuffer = [];
  }

  function flushTable() {
    if (tableBuffer.length < 2) { tableBuffer = []; return; }
    const headers = tableBuffer[0].split("|").filter(Boolean).map(s => s.trim());
    const rows = tableBuffer.slice(2).map(row => row.split("|").filter(Boolean).map(s => s.trim()));
    elements.push(
      <div key={keyIdx++} className="overflow-x-auto mb-6 rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-blue/5">
              {headers.map((h, j) => (
                <th key={j} className="px-4 py-3 text-left font-bold text-brand-charcoal border-b border-gray-100"
                    dangerouslySetInnerHTML={{ __html: h.replace(/\*\*(.*?)\*\*/g, '$1') }} />
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, j) => (
              <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                {row.map((cell, k) => (
                  <td key={k} className="px-4 py-3 text-gray-600 border-b border-gray-50"
                      dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-charcoal">$1</strong>') }} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableBuffer = [];
  }

  while (i < lines.length) {
    const line = lines[i].trim();

    // Table rows
    if (line.startsWith("|")) {
      flushList();
      tableBuffer.push(line);
      i++;
      continue;
    } else {
      flushTable();
    }

    // List items
    if (line.startsWith("- ")) {
      listBuffer.push(line);
      i++;
      continue;
    } else {
      flushList();
    }

    // Headers
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={keyIdx++} className="font-display text-xl font-bold text-brand-charcoal mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={keyIdx++} className="font-display text-2xl font-bold text-brand-charcoal mt-10 mb-4 pb-2 border-b border-gray-100">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line === "") {
      // skip empty
    } else {
      // Paragraph
      elements.push(
        <p key={keyIdx++} className="text-gray-600 text-[0.95rem] leading-relaxed mb-4"
           dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-charcoal font-semibold">$1</strong>') }} />
      );
    }
    i++;
  }
  flushList();
  flushTable();

  return elements;
}

/* ── Page ── */
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  /* ── Article schema ── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.arvindadvertizing.com${post.image}`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.arvindadvertizing.com",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.arvindadvertizing.com/#business",
      name: "Arvind Advertizing",
      logo: {
        "@type": "ImageObject",
        url: "https://www.arvindadvertizing.com/icon.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.arvindadvertizing.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    articleBody: post.content,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arvindadvertizing.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.arvindadvertizing.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.arvindadvertizing.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative py-28 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/50 to-brand-charcoal/95" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,.6) 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold mb-5">
            {post.category}
          </span>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="font-medium text-white/70">{post.author}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <AnimatedSection>
            {/* Hero image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <article className="prose-custom">
              {renderContent(post.content)}
            </article>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <Tag size={14} className="text-gray-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl text-center">
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Need Help With Your Printing Project?
              </h3>
              <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                Get expert advice and a free quote from our team — we respond within 24 hours.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange
                           hover:bg-brand-orange-hover text-white font-bold rounded-full
                           transition-all duration-200 hover:-translate-y-0.5
                           hover:shadow-lg hover:shadow-orange-500/30"
              >
                Get Free Quote <ArrowRight size={17} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-charcoal">
              More Articles
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 70}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm
                             border border-transparent hover:border-brand-orange/20
                             hover:shadow-md transition-all duration-200"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105
                                 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-brand-charcoal text-sm leading-snug
                                   mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-xs text-gray-400">{formatDate(p.date)}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
