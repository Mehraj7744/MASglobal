import React from 'react';
import { Lightbulb, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "Deep dive into your requirements, target audience, and business objectives.",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Design",
    description: "Creating high-fidelity UI/UX wireframes and interactive prototypes for review.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Development",
    description: "Building scalable, clean code using modern stacks like Next.js and Spring Boot.",
    icon: Code2,
  },
  {
    id: "04",
    title: "Deployment",
    description: "Rigorous testing followed by seamless deployment to production servers.",
    icon: Rocket,
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-slate-950 py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Local Heading Section */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 border border-indigo-500/20">
            Our Methodology
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            How We Bring Ideas <span className="text-indigo-500">To Life</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A structured, transparent workflow designed to deliver high-quality 
            enterprise solutions on time and within budget.
          </p>
        </div>

        {/* Process Grid */}
        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="group relative">
                {/* Visual Connector (Desktop only) */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[60%] top-12 hidden w-full border-t-2 border-dashed border-slate-800 lg:block transition-colors group-hover:border-indigo-500/50" />
                )}

                {/* Card Container */}
                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 group-hover:border-indigo-500 group-hover:bg-indigo-600">
                    <Icon className="h-8 w-8 text-indigo-400 group-hover:text-white" />
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-indigo-500/50 uppercase tracking-widest">
                        Phase {step.id}
                      </span>
                      <div className="h-px flex-1 bg-slate-800 lg:hidden" />
                    </div>
                    
                    <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium border border-slate-800 hover:border-indigo-500 transition-all">
            Start Your Project 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;