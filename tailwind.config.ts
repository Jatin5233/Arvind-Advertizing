import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:        "#0F3D91",
          "blue-dark": "#0A2D6E",
          "blue-light":"#1A52B8",
          orange:      "#F47C20",
          "orange-hover":"#E06A10",
          charcoal:    "#1B1B1B",
          "charcoal-light":"#2A2A2A",
        },
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(36px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%":   { opacity: "0", transform: "translateX(-36px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%":   { opacity: "0", transform: "translateX(36px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulsGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(244,124,32,0.45)" },
          "70%":     { boxShadow: "0 0 0 14px rgba(244,124,32,0)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up":   "fadeUp 0.65s ease both",
        "fade-left": "fadeLeft 0.65s ease both",
        "fade-right":"fadeRight 0.65s ease both",
        "pulse-glow":"pulsGlow 2.2s infinite",
        float:       "floatY 3.2s ease-in-out infinite",
        marquee:     "marquee 32s linear infinite",
        "spin-slow": "spinSlow 9s linear infinite",
        shimmer:     "shimmer 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
