import { processSteps } from "./constants/values";
import SectionHeading from "./SectionHeading";

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Methodology"
          title="Our Structured Workflow"
          description="A systematic, outcome-driven process built to turn complex requirements into clean enterprise solutions."
          centered
        />

        {/* Process Step Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70"
              >
                {/* Visual Connector Line (Only between consecutive blocks on top row screens) */}
                {index < processSteps.length - 1 && (
                  <div className="absolute top-12 left-full hidden h-[2px] w-8 bg-gradient-to-r from-indigo-500/30 to-transparent xl:block" />
                )}

                <div>
                  {/* Step Header Element */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-widest text-indigo-500/40 uppercase group-hover:text-indigo-400/60 transition-colors duration-200">
                      Phase {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/50 text-indigo-400 border border-slate-700/50 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Step Body Copy */}
                  <h3 className="mt-8 text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-8 h-1 w-12 rounded-full bg-slate-800 transition-all duration-300 group-hover:w-full group-hover:bg-indigo-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;