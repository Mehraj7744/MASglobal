"use client";

import FaqSection from "../components/about/FAQ";
import TechnologiesGrid from "../components/about/technologies";
import TeamSection from "../components/about/Team";
import AboutHero from "../components/about/Hero";
import VisionAndMission from "../components/about/VisionAndMission";
import FounderSection from "../components/about/Founder";
import AboutSection from "../components/about/AboutSection";
import WhyChooseUs from "../components/about/WhyChooseUs";

const AboutPageClient = () => {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <AboutHero />
      <FounderSection />

      {/* VISION & MISSION */}
      <VisionAndMission />

      {/* ABOUT */}
      <AboutSection />
      {/* WHY CHOOSE US */}
      <WhyChooseUs />
      {/* FOUNDER SECTION */}
      <TechnologiesGrid />
      {/* TEAM SECTION */}
      <TeamSection />
      {/* FAQ SECTION */}
      <FaqSection />
    </main>
  );
};

export default AboutPageClient;