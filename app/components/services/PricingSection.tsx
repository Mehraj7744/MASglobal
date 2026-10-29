"use client";

import { engagementModels } from "./constants/values";
import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Engagement Models"
          title="Flexible Partnership Structures"
          description="Tailored delivery frameworks designed for enterprise CTOs, engineering directors, and product teams."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {engagementModels.map((model) => (
            <PricingCard key={model.title} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;