"use client";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 1600); return () => clearTimeout(t); }, []);

  return (
    <a
      href="https://wa.me/919810718141"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-7 right-7 z-50 w-14 h-14 bg-[#25D366]
                  rounded-full flex items-center justify-center text-white
                  shadow-xl shadow-green-500/35 animate-pulse-glow
                  transition-all duration-500 hover:scale-110
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.054 9.378L1.056 31.2l6.06-1.94a15.9 15.9 0 008.888 2.688C24.824 31.948 32 24.772 32 16.004S24.824 0 16.004 0zm9.332 22.612c-.396 1.116-2.312 2.076-3.216 2.196-.816.108-1.848.156-2.98-.188a27.174 27.174 0 01-2.7-1c-4.752-2.056-7.856-6.86-8.092-7.18-.228-.312-1.86-2.476-1.86-4.724 0-2.248 1.176-3.356 1.596-3.812.396-.432 1.068-.612 1.536-.612.192 0 .36.012.516.02.456.02.684.044.984.768.372.9 1.284 3.132 1.392 3.36.112.228.192.504.036.804-.144.312-.228.504-.456.78-.228.276-.48.612-.684.816-.228.24-.468.492-.2.96.264.468 1.176 1.94 2.524 3.14 1.736 1.548 3.2 2.028 3.652 2.256.456.228.72.192.984-.12.276-.312 1.164-1.356 1.476-1.824.312-.468.612-.384 1.032-.228.42.156 2.664 1.26 3.12 1.488.456.228.756.348.868.54.12.192.12 1.116-.276 2.232z"/>
      </svg>
    </a>
  );
}
