import type { Metadata } from "next";
import CTASection from "../components/services/CTASection";
import PricingSection from "../components/services/PricingSection";
import ProcessSection from "../components/services/ProcessSection";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesHero from "../components/services/ServicesHero";
import WhyChooseUs from "../components/services/WhyChooseUs";

export const metadata: Metadata = {
  title: "Services & Capabilities | MAS Global AI",
  description:
    "Explore our enterprise technology services: AI & Machine Learning solutions, custom software engineering, cloud architecture, and intelligent document automation.",
  alternates: {
    canonical: "https://masglobalai.com/services",
  },
  openGraph: {
    title: "Services & Capabilities | MAS Global AI",
    description:
      "Enterprise AI development, custom software engineering, cloud infrastructure, and technical consulting.",
    url: "https://masglobalai.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_45%)]" />

      <div className="relative z-10">
        <ServicesHero />
        <ServicesGrid />
        <WhyChooseUs />
        <ProcessSection />
        <PricingSection />
        <CTASection />
      </div>
    </main>
  );
}