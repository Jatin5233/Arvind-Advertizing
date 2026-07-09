import React from "react";
import Link from "next/link";
import { CheckCircle, MapPin, Search, Sparkles } from "lucide-react";

/**
 * SEO Keyword & Local Service Hub Component
 * 
 * Dramatically enhances organic keyword density and local Delhi NCR visibility
 * across search engines (Google India, Semrush, Bing).
 */
export default function SeoKeywordHub() {
  const keywordClusters = [
    {
      title: "Flex & Vinyl Printing Delhi",
      slug: "/services/flex-printing",
      keywords: [
        "Outdoor Flex Hoarding Delhi",
        "Frontlit & Backlit Flex Banners",
        "Star & Taiwan Flex Printing Near Me",
        "Self-Adhesive Vinyl (SAV) Printing",
        "One-Way Vision Vinyl for Shops",
        "Retail Store Front Banner Printing",
      ],
    },
    {
      title: "UV Flatbed Printing Services",
      slug: "/services/uv-printing",
      keywords: [
        "UV Printing on Acrylic Board Delhi",
        "UV Printing on Wood & Glass",
        "DOCAN H1000 Flatbed UV Printing",
        "Cylindrical & Trophy UV Printing",
        "High Resolution 1440 DPI UV Print",
        "Scratch Resistant UV Varnish Print",
      ],
    },
    {
      title: "Sign Board Manufacturers",
      slug: "/services/sign-boards",
      keywords: [
        "LED Glow Sign Boards Delhi NCR",
        "ACP Composite Sign Board Shop Front",
        "3D Acrylic Letters Fabrication",
        "Stainless Steel (SS) Cutout Letters",
        "Neon-Flex Channel Letter Signs",
        "Turnkey Sign Board Installation",
      ],
    },
    {
      title: "Event & Corporate Branding",
      slug: "/services/event-branding",
      keywords: [
        "Corporate Event Stage Backdrops",
        "Trade Show Exhibition Stall Design",
        "Promotional Roll-up Standee Printing",
        "Retail Chain Store Rollout Branding",
        "Office Interior Wall Graphics & Murals",
        "Pan-India Franchise Branding Agency",
      ],
    },
  ];

  const delhiAreasServed = [
    "Bhajanpura", "Khajoori Khas", "Pushta Road", "Shahdara", "Laxmi Nagar", 
    "Connaught Place", "Karol Bagh", "Okhla Industrial Area", "Patparganj", 
    "Mayapuri", "Noida Sector 62", "Greater Noida", "Gurugram Cyber City", 
    "Ghaziabad", "Faridabad", "Sonipat"
  ];

  return (
    <section id="seo-keywords-hub" className="py-16 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold mb-4">
            <Search size={14} />
            <span>TOP ORGANIC SEARCH CATEGORIES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-charcoal tracking-tight mb-4">
            Leading Printing &amp; Branding Manufacturer Across Delhi &amp; India
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From our factory in Khajoori Pushta Road, Bhajanpura, <strong className="text-brand-charcoal font-semibold">ARVIND ADVERTISING</strong> delivers precision commercial printing, wide-format flex hoardings, custom LED sign boards, and complete corporate identity rollouts.
          </p>
        </div>

        {/* 4-Column Keyword Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keywordClusters.map((cluster, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand-orange/30 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-bold text-brand-charcoal text-lg mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <Sparkles size={16} className="text-brand-orange flex-shrink-0" />
                  <span>{cluster.title}</span>
                </h3>
                <ul className="space-y-2.5 mb-6">
                  {cluster.keywords.map((kw, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{kw}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href={cluster.slug} 
                className="text-xs font-bold text-brand-orange hover:text-brand-blue flex items-center gap-1 transition-colors pt-3 border-t border-gray-50"
              >
                Explore {cluster.title.split(" ")[0]} Services &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* Local Service Area Directory */}
        <div className="bg-brand-charcoal text-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-brand-orange font-bold text-xs tracking-wider uppercase mb-2">
                <MapPin size={16} />
                <span>Pan-Delhi &amp; NCR Delivery Network</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                Factory Direct Printing in Delhi NCR
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                We operate from <span className="text-white font-medium">First Floor, A-1/22, Khajoori, Pushta Road, Delhi, 110053</span> and provide rapid express delivery and turnkey sign board installation across all major commercial &amp; industrial hubs:
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-lg">
              {delhiAreasServed.map((area, aIdx) => (
                <span 
                  key={aIdx} 
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium text-white transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
