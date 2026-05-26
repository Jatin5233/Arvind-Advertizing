import HeroSection        from "./components/HeroSection";
import ServicesSection    from "./components/ServicesSection";
import WhyUsSection       from "./components/WhyUsSection";
import ProcessSection     from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection     from "./components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
