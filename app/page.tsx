import Hero from "./components/home/Hero";
import CorporateTrustMetrics from "./components/home/TrustedLogos";
import ServicesPreview from "./components/home/ServicesPreview";
import Process from "./components/home/Process";
import AboutPreview from "./components/home/AboutPreview";
import ProjectsPreview from "./components/home/ProjectsPreview";
import TechLogoMarquee from "./components/TechLogoMarquee";
import FAQ from "./components/home/FAQ";
import CallToAction from "./components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CorporateTrustMetrics />
      <ServicesPreview />
      <Process />
      <AboutPreview />
      <ProjectsPreview />
      <TechLogoMarquee />
      <FAQ />
      <CallToAction />
    </>
  );
}
