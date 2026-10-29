import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Enterprise Software & AI Engineering | MAS Global AI",
  description:
    "Discover MAS Global AI, led by Shaikh Majhar. We specialize in custom software engineering, AI/ML systems, cloud infrastructure, and enterprise automation based in Hyderabad, India.",
  alternates: {
    canonical: "https://masglobalai.com/about",
  },
  openGraph: {
    title: "About Us | Enterprise Software & AI Engineering | MAS Global AI",
    description:
      "Enterprise engineering leadership, scalable technology architecture, and intelligent automation systems from MAS Global AI.",
    url: "https://masglobalai.com/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
