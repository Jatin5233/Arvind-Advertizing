"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "./service-data";
import { SERVICE_ICONS } from "./service-icons";

const NAV = [
  { href: "/",          label: "Home" },
  { href: "/services",  label: "Services", hasDropdown: true },
  { href: "/machinery", label: "Machinery" },
  { href: "/about",     label: "About" },
  { href: "/blog",      label: "Blog" },
   { href: "/#clients",  label: "Our Clients" }, 
  { href: "/#contact",  label: "Contact" },
  
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [open,      setOpen]      = useState(false);      // mobile drawer
  const [dropdown,  setDropdown]  = useState(false);      // services panel
  const [mobileServices, setMobileServices] = useState(false);
  const pathname  = usePathname();
  const panelRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 58);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close on route change */
  useEffect(() => { setOpen(false); setDropdown(false); }, [pathname]);

  /* close panel on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-dark shadow-2xl py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5">
          <span className="font-display text-[1.45rem] font-extrabold text-white tracking-tight">Arvind</span>
          <span className="font-display text-[1.45rem] font-extrabold text-brand-orange tracking-tight">Advertizing</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" ref={panelRef} aria-label="Main navigation">
          {NAV.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href) && l.href !== "/";

            if (l.hasDropdown) {
              return (
                <div key={l.href} className="relative">
                  <button
                    onClick={() => setDropdown((d) => !d)}
                    className={`relative flex items-center gap-1 text-[0.88rem] font-semibold
                                tracking-wide transition-colors duration-200 group
                                ${active || dropdown ? "text-brand-orange" : "text-white/75 hover:text-white"}`}
                  >
                    {l.label}
                    <ChevronDown size={14}
                      className={`transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`} />
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand-orange rounded-full
                                      transition-all duration-300
                                      ${active || dropdown ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </button>

                  {/* ── Dropdown panel ── */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[580px]
                                   bg-white rounded-2xl shadow-2xl border border-gray-100
                                   transition-all duration-200 origin-top
                                   ${dropdown ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                    {/* header row */}
                    <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Our Services
                      </span>
                      <Link href="/services" onClick={() => setDropdown(false)}
                        className="text-xs font-semibold text-brand-orange hover:underline">
                        View All →
                      </Link>
                    </div>

                    {/* service grid */}
                    <div className="grid grid-cols-2 gap-1 p-3">
                      {SERVICES.map((svc) => {
                        const Icon = SERVICE_ICONS[svc.slug];
                        const isActive = pathname === `/services/${svc.slug}`;
                        return (
                          <Link key={svc.slug} href={`/services/${svc.slug}`}
                            onClick={() => setDropdown(false)}
                            className={`group flex items-center gap-3 px-3 py-3 rounded-xl
                                        transition-all duration-150
                                        ${isActive
                                          ? "bg-brand-orange/10 text-brand-orange"
                                          : "hover:bg-gray-50 text-gray-700 hover:text-brand-charcoal"}`}>
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${svc.accent}
                                             flex items-center justify-center shrink-0 shadow-sm`}>
                              <Icon size={17} className="text-white" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[0.82rem] font-bold leading-tight truncate">
                                {svc.title}
                              </p>
                              <p className="text-[0.72rem] text-gray-400 mt-0.5 line-clamp-1 leading-tight">
                                {svc.shortDesc.split("—")[0].trim()}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* footer CTA */}
                    <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                      <Link href="/#contact" onClick={() => setDropdown(false)}
                        className="text-xs font-semibold text-brand-charcoal hover:text-brand-orange transition-colors">
                        💬 Need a custom solution? Get a free quote →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={l.href} href={l.href}
                className={`relative text-[0.88rem] font-semibold tracking-wide
                            transition-colors duration-200 group
                            ${active ? "text-brand-orange" : "text-white/75 hover:text-white"}`}>
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand-orange rounded-full
                                  transition-all duration-300
                                  ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link href="/#contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover
                     text-white text-sm font-bold rounded-full transition-all duration-200
                     hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30">
          Get Quote
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${
        open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="glass-dark border-t border-white/10 px-6 py-5 flex flex-col gap-1">
          {NAV.map((l) => {
            if (l.hasDropdown) {
              return (
                <div key={l.href}>
                  <button
                    onClick={() => setMobileServices((s) => !s)}
                    className="w-full flex items-center justify-between text-white/75
                               hover:text-brand-orange font-medium py-3
                               border-b border-white/8 transition-colors">
                    Services
                    <ChevronDown size={15}
                      className={`transition-transform duration-200 ${mobileServices ? "rotate-180" : ""}`} />
                  </button>
                  {/* mobile sub-menu */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    mobileServices ? "max-h-[500px]" : "max-h-0"
                  }`}>
                    <div className="py-2 pl-3 flex flex-col gap-1">
                      {SERVICES.map((svc) => {
                        const Icon = SERVICE_ICONS[svc.slug];
                        return (
                          <Link key={svc.slug} href={`/services/${svc.slug}`}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl
                                       hover:bg-white/10 transition-colors group">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${svc.accent}
                                             flex items-center justify-center shrink-0`}>
                              <Icon size={15} className="text-white" />
                            </div>
                            <span className="text-sm text-white/80 group-hover:text-white font-medium">
                              {svc.title}
                            </span>
                          </Link>
                        );
                      })}
                      <Link href="/services"
                        className="text-xs text-brand-orange font-semibold px-3 py-2 hover:underline">
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link key={l.href} href={l.href}
                className="text-white/75 hover:text-brand-orange font-medium
                           py-3 border-b border-white/8 last:border-0 transition-colors">
                {l.label}
              </Link>
            );
          })}
          <Link href="/#contact"
            className="mt-2 text-center px-5 py-3 bg-brand-orange text-white font-bold rounded-full">
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}