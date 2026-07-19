import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Star, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const SERVICES = [
  { label: "Flex Printing", href: "/services/flex-printing" },
  { label: "UV Printing", href: "/services/uv-printing" },
  { label: "Sign Boards", href: "/services/sign-boards" },
  { label: "Event Branding", href: "/services/event-branding" },
  { label: "Paper Printing", href: "/services/digital-paper-printing" },
  { label: "Retail Branding", href: "/services/corporate-branding" },
];
const LINKS = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About Us" },
  { href: "/services",  label: "Services" },
  { href: "/machinery", label: "Machinery" },
  { href: "/blog",      label: "Blog" },
  { href: "/#clients",  label: "Our Clients" },
  { href: "/#contact",  label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal relative overflow-hidden" aria-label="Site footer">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]
                      bg-brand-blue/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-4">
              <span className="font-display text-2xl font-extrabold text-white">Arvind</span>
              <span className="font-display text-2xl font-extrabold text-brand-orange">Advertizing</span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              India's Leading Printing & Branding manufacturing company specializing in Flex Printing, Digital Paper printing, UV Printing, Sign Boards, Event Branding, and Commercial Branding Across India.
            </p>
            <div className="flex gap-3">
  {[
    {
      Icon: MessageCircle,
      href: "https://wa.me/919810718141",
      label: "Chat with Arvind Advertizing on WhatsApp",
    },
    {
      Icon: Phone,
      href: "tel:+919810718141",
      label: "Call Arvind Advertizing",
    },
    {
      Icon: Star,
      href: "https://www.justdial.com/Delhi/Arvind-Advertizing-Near-Aggarwal-Sweets-Bhajan-Pura/011PXX11-XX11-150511170625-W8P4_BZDET",
      label: "Arvind Advertizing on JustDial",
    },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/arvindadvertizing",
      label: "Arvind Advertizing on Facebook",
    },
    {
      Icon: Twitter,
      href: "https://x.com/arvindadv",
      label: "Arvind Advertizing on X",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/arvindadvertizingindia/",
      label: "Arvind Advertizing on Instagram",
    },
    {
      Icon: Youtube,
      href: "https://www.youtube.com/@Arvind-Advertizing",
      label: "Arvind Advertizing on YouTube",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/arvind-advertizing",
      label: "Arvind Advertizing on LinkedIn",
    },
  ].map(({ Icon, href, label }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 border border-white/12 rounded-lg flex items-center
                 justify-center text-white/45 hover:bg-brand-orange
                 hover:border-brand-orange hover:text-white transition-all duration-200"
    >
      <Icon size={15} />
    </a>
  ))}
</div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-[0.95rem]">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}
                        className="text-white/45 text-sm hover:text-brand-orange
                                   transition-colors duration-200 hover:pl-1 inline-block">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-[0.95rem]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                        className="text-white/45 text-sm hover:text-brand-orange
                                   transition-colors duration-200 hover:pl-1 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-[0.95rem]">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+919810718141"
                     className="text-white/50 text-sm hover:text-brand-orange block">
                    +91 9810718141
                  </a>
                  
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-brand-orange mt-0.5 shrink-0" />
                <a href="mailto:arvind.advertizing@gmail.com"
                   className="text-white/50 text-sm hover:text-brand-orange">
                  arvind.advertizing@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-orange mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  First Floor, A-1/22, Khajoori, Pushta Road, Delhi - 110053
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Arvind Advertizing. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Crafted with ❤️ for India&apos;s businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
