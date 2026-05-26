import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import Counter from "../components/Counter";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – 15+ Years of Printing & Branding Excellence",
  description:
    "Learn about Arvind Advertizing — India's trusted printing and branding partner with 15+ years of experience, serving 800+ clients across 120+ cities.",
};

const STATS = [
  { value:2500, label:"Projects Completed", suffix:"+" },
  { value:120,  label:"Cities Served",       suffix:"+" },
  { value:800,  label:"Happy Clients",        suffix:"+" },
  { value:15,   label:"Years of Experience",  suffix:"+" },
];

const HIGHLIGHTS = [
  "ISO-Standard Production Facility",
  "In-House Design Team",
  "Dedicated Account Managers",
  "Advanced UV, Flex & Digital Printing Technology",
   "PAN India Logistics Network",
];

const TEAM = [
  { name:"Arvind Kumar",    role:"Founder & CEO",         img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&face" },
  { name:"Ravi Sharma",     role:"Head of Production",    img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face" },
  { name:"Priya Singh",     role:"Creative Director",     img:"https://images.unsplash.com/photo-1494790108755-2616b612b0e5?w=400&h=400&fit=crop&face" },
  { name:"Vikram Mehta",    role:"Business Development",  img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-36 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/60 to-brand-charcoal/95" />
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold
                           text-white mb-5 leading-tight">
              About <span className="text-gradient-orange">Arvind Advertizing</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              15+ years of transforming brands through high-quality printing,
              innovative design, and reliable execution — PAN India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <AnimatedSection direction="left">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&h=540&fit=crop"
                     alt="Arvind Advertizing Production Facility"
                     className="rounded-3xl shadow-2xl shadow-gray-200 w-full" />
                {/* Secondary image */}
                <div className="absolute -bottom-8 -right-8 w-[56%] rounded-2xl overflow-hidden
                                border-4 border-white shadow-2xl shadow-gray-200">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=320&fit=crop"
                       alt="Printing Machinery" className="w-full h-full object-cover" />
                </div>
                {/* Experience badge */}
                <div className="absolute -top-5 -left-5 w-28 h-28 bg-brand-orange rounded-full
                                flex flex-col items-center justify-center
                                shadow-xl shadow-orange-500/35">
                  <span className="font-display text-3xl font-black text-white leading-none">15+</span>
                  <span className="text-white/85 text-[10px] font-semibold text-center leading-tight">
                    Years of<br />Excellence
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right" className="lg:pt-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                               bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-5">
                Who We Are
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold
                             text-brand-charcoal mb-5 leading-tight">
                India&apos;s Trusted Printing &amp; Branding Partner
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                With over 15 years of expertise, Arvind Advertizing has established itself
                as one of India&apos;s leading printing and branding manufacturing companies.
                Our production setup is equipped with advanced printing
                technology, enabling us to handle projects of any scale with precision and
                consistency.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-7">
                From large-format Flex printing, UV printing & Digital printing to custom sign boards and
                complete event branding, we provide end-to-end solutions that help businesses
                build impactful brand presence. Our commitment to quality, reliability, and
                timely delivery has earned us long-term relationships with corporate clients,
                retail brands, and event organizers across India.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {HIGHLIGHTS.map(h => (
                  <div key={h} className="flex items-center gap-2.5">
                    <CheckCircle size={17} className="text-brand-orange shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{h}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4
                               bg-brand-orange hover:bg-brand-orange-hover text-white
                               font-bold rounded-full transition-all duration-200
                               hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30">
                Work With Us <ArrowRight size={17} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80} className="text-center">
                <div className="font-display text-5xl lg:text-6xl font-black text-white mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/60 text-sm font-medium">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-5">
              The Team
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">
              Meet the People Behind Our Work
            </h2>
            <p className="text-gray-500">
              Experienced professionals committed to delivering excellence across every project.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 90}>
                <div className="group text-center bg-white rounded-2xl p-6
                                shadow-sm border border-gray-100 hover:shadow-xl
                                hover:border-brand-orange/20 card-hover">
                  <div className="relative inline-block mb-4">
                    <img src={member.img} alt={member.name}
                         className="w-20 h-20 rounded-2xl object-cover mx-auto
                                    group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500
                                    rounded-full border-2 border-white" />
                  </div>
                  <h4 className="font-display font-bold text-brand-charcoal text-base mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
