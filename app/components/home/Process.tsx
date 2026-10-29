export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Technical Feasibility",
      description:
        "Comprehensive audit of your domain architecture, data schemas, API contracts, and business goals to determine an uncompromised technical roadmap.",
    },
    {
      number: "02",
      title: "System Architecture & Security Design",
      description:
        "Drafting modular microservice topologies, database indexing strategies, AI inference pipelines, and role-based access security specifications.",
    },
    {
      number: "03",
      title: "Agile Engineering & Rigorous QA",
      description:
        "Iterative sprint cycles using modern TypeScript, Next.js, and backend frameworks backed by end-to-end integration and automated regression suites.",
    },
    {
      number: "04",
      title: "Production Deployment & Ongoing SLA",
      description:
        "Zero-downtime deployment pipelines, distributed cloud telemetry monitoring, edge caching optimization, and dedicated architectural maintenance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 border-b border-border/40 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-3">
            <span>04. Methodology</span>
            <span aria-hidden="true">·</span>
            <span className="text-primary font-semibold">Delivery Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
            Structured Engineering Execution
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Our disciplined four-phase delivery framework guarantees predictable milestones, rigorous code quality, and verifiable operational performance.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <div>
                <span className="font-mono text-2xl font-black text-primary">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                STAGE {step.number} VERIFIED
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}