import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8F9FB]">
      <div className="text-center px-6 max-w-lg">
        {/* 404 number */}
        <h1
          className="font-display text-[8rem] sm:text-[10rem] font-black leading-none
                     text-transparent bg-clip-text
                     bg-gradient-to-br from-brand-blue via-brand-orange to-brand-blue"
        >
          404
        </h1>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 text-base mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5
                       bg-brand-orange hover:bg-brand-orange-hover text-white
                       font-bold rounded-full transition-all duration-200
                       hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
          >
            <Home size={17} /> Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5
                       border-2 border-brand-blue text-brand-blue font-bold
                       rounded-full hover:bg-brand-blue hover:text-white
                       transition-all duration-200 hover:-translate-y-0.5"
          >
            View Services <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
