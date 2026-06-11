"use client";

/**
 * MasonryGallery
 * ─────────────
 * Pinterest-style masonry collage using CSS columns.
 * Items have varying heights (tall / normal / short) for a
 * natural editorial look. Hover reveals the project name.
 */

import AnimatedSection from "./AnimatedSection";

type GalleryItem = { src: string; name: string };

/* Assign a height class in a repeating pattern so the grid feels organic */
const HEIGHT_CYCLE = [
  "h-64",   // normal
  "h-80",   // tall
  "h-48",   // short
  "h-72",   // medium-tall
  "h-56",   // medium
  "h-88",   // extra tall  (custom via style below)
  "h-60",   // medium
  "h-44",   // short
];

export default function MasonryGallery({
  items,
  title,
}: {
  items: GalleryItem[];
  title: string;
}) {
  return (
    <div
      className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
      style={{ columnFill: "balance" }}
    >
      {items.map((item, i) => {
        const heightClass = HEIGHT_CYCLE[i % HEIGHT_CYCLE.length];
        const isExtraTall = i % HEIGHT_CYCLE.length === 5;

        return (
          <AnimatedSection
            key={item.src}
            delay={i * 50}
            className="break-inside-avoid"
          >
            <div
              className={`group relative w-full overflow-hidden rounded-xl
                          shadow-md hover:shadow-xl transition-shadow duration-300
                          bg-gray-100 ${!isExtraTall ? heightClass : ""}`}
              style={isExtraTall ? { height: "22rem" } : undefined}
            >
              <img
                src={item.src}
                alt={`${title} – ${item.name}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover
                           transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark gradient on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-t
                           from-black/75 via-black/20 to-transparent
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-300"
              />

              {/* Name label */}
              <span
                className="absolute bottom-0 left-0 right-0 px-3 py-3
                           text-white text-xs font-semibold leading-snug
                           translate-y-2 opacity-0
                           group-hover:translate-y-0 group-hover:opacity-100
                           transition-all duration-300"
              >
                {item.name}
              </span>

              {/* Subtle top-left accent dot */}
              <span
                className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full
                           bg-brand-orange opacity-0 group-hover:opacity-100
                           transition-opacity duration-200"
              />
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}