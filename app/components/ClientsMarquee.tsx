"use client";

import AnimatedSection from "./AnimatedSection";

const ROW_1: { name: string; logo: string; size: "sm" | "md" | "lg" | "xl" }[] = [
  { name: "Usha",         logo: "/clients/Usha.png",         size: "lg" },
  { name: "Dabur",        logo: "/clients/Dabur.png",        size: "lg" },
  { name: "Cera",         logo: "/clients/Cera.png",         size: "lg" },
  { name: "Adani",        logo: "/clients/Adani.png",        size: "lg" },
  { name: "Idfc",         logo: "/clients/Idfc.png",         size: "lg" },
  { name: "Delhi Police", logo: "/clients/Delhi-police.jpg", size: "lg" },
  { name: "Sintex",       logo: "/clients/Sintex.png",       size: "lg" },
  { name: "Hero",         logo: "/clients/Hero.png",         size: "lg" },
];

const ROW_2: { name: string; logo: string; size: "sm" | "md" | "lg" | "xl" }[] = [
  { name: "Action",   logo: "/clients/Action.png",   size: "lg" },
  { name: "Livguard", logo: "/clients/Livguard.png", size: "lg" },
  { name: "Sbi",      logo: "/clients/Sbi.png",      size: "lg" },
  { name: "Campa",    logo: "/clients/Campa.png",    size: "lg" },
  { name: "Himalaya", logo: "/clients/Himalaya.png", size: "lg" },
  { name: "LnT",      logo: "/clients/Lnt.png",      size: "lg" },
  { name: "Airtel",   logo: "/clients/Airtel.png",   size: "lg" },
  { name: "Rolex",    logo: "/clients/Rolex.png",    size: "lg" },
];

// ← Add your third row logos here
const ROW_3: { name: string; logo: string; size: "sm" | "md" | "lg" | "xl" }[] = [
  { name: "Usha",         logo: "/clients/Usha.png",         size: "lg" },
  { name: "Action",       logo: "/clients/Action.png",       size: "lg" },
  { name: "Dabur",        logo: "/clients/Dabur.png",        size: "lg" },
  { name: "Sbi",          logo: "/clients/Sbi.png",          size: "lg" },
  { name: "Hero",         logo: "/clients/Hero.png",         size: "lg" },
  { name: "Adani",        logo: "/clients/Adani.png",        size: "lg" },
  { name: "Airtel",       logo: "/clients/Airtel.png",       size: "lg" },
  { name: "Himalaya",     logo: "/clients/Himalaya.png",     size: "lg" },
];

const SIZE_MAP = {
  sm: "h-14",
  md: "h-16",
  lg: "h-20",
  xl: "h-24",
};

function MarqueeRow({
  items,
  direction = "left",
  duration = "35s",
}: {
  items: { name: string; logo: string; size: "sm" | "md" | "lg" | "xl" }[];
  direction?: "left" | "right";
  duration?: string;
}) {
  const doubled = [...items, ...items, ...items];
  const animName = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none
                      bg-gradient-to-r from-brand-charcoal to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none
                      bg-gradient-to-l from-brand-charcoal to-transparent" />

      <div
        className="flex items-center gap-10 w-max py-4"
        style={{ animation: `${animName} ${duration} linear infinite` }}
      >
        {doubled.map((client, i) => (
          <img
            key={`${client.name}-${i}`}
            src={client.logo}
            alt={`${client.name} – client of Arvind Advertizing`}
            title={client.name}
            loading="lazy"
            className={`
              ${SIZE_MAP[client.size]} w-auto object-contain shrink-0
              opacity-70 hover:opacity-100
              transition-all duration-300 ease-out
              hover:scale-125 cursor-default
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <section id="clients" className="py-20 bg-brand-charcoal overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px,transparent 1px)", backgroundSize: "22px 22px" }} />

      <div className="relative z-10">
        <AnimatedSection className="text-center mb-12 px-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Trusted By
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
            Brands We've Worked With
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            From local businesses to national brands — trusted by 500+ clients across India.
          </p>
        </AnimatedSection>

        {/* Row 1 — left, fast */}
        <div className="mb-6">
          <MarqueeRow items={ROW_1} direction="left" duration="30s" />
        </div>

        {/* Row 2 — right, slow */}
        <div className="mb-6">
          <MarqueeRow items={ROW_2} direction="right" duration="45s" />
        </div>

        {/* Row 3 — left, medium */}
        <MarqueeRow items={ROW_3} direction="left" duration="38s" />
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}