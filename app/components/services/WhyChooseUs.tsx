import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  "Enterprise Architecture",
  "Scalable Infrastructure",
  "High Performance Delivery",
  "Modern Technology Stack",
];

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10">
          <h3 className="text-3xl font-bold text-white">
            Delivering Enterprise-Level Solutions
          </h3>

          <p className="mt-6 text-slate-400 leading-7">
            We combine design, strategy, and engineering to create scalable
            systems built for long-term business success.
          </p>
        </div>

        <div>
          <SectionHeading
            badge="Why Choose Us"
            title="Built For Performance & Scalability"
            description="We focus on modern architecture, optimized experiences, and business growth."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <Check className="h-5 w-5 text-indigo-400" />

                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;