"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/",          label: "Home" },
  { href: "/services",  label: "Services" },
  { href: "/machinery", label: "Machinery" },
  { href: "/about",     label: "About" },
  { href: "/#contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open,     setOpen]       = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 58);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark shadow-2xl py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5">
          <span className="font-display text-[1.45rem] font-extrabold text-white tracking-tight">
            Arvind
          </span>
          <span className="font-display text-[1.45rem] font-extrabold text-brand-orange tracking-tight">
            Advertizing
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href) && l.href !== "/";
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[0.88rem] font-semibold tracking-wide
                            transition-colors duration-200 group
                            ${active ? "text-brand-orange" : "text-white/75 hover:text-white"}`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-brand-orange
                               rounded-full transition-all duration-300
                               ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-brand-orange
                     hover:bg-brand-orange-hover text-white text-sm font-bold
                     rounded-full transition-all duration-200
                     hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
        >
          Get Quote
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-dark border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/75 hover:text-brand-orange font-medium
                         py-2 border-b border-white/8 last:border-0 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-1 text-center px-5 py-3 bg-brand-orange
                       text-white font-bold rounded-full"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
