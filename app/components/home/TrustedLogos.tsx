import React from "react";
import { Code2, Cpu, Globe2, Layers } from "lucide-react";

const companyMetrics = [
  {
    label: "Systems Shipped",
    value: "40+",
    description: "Production platforms live",
    icon: Code2,
  },
  {
    label: "Core Engineering",
    value: "15+",
    description: "Full-stack architects & devs",
    icon: Cpu,
  },
  {
    label: "Framework Stacks",
    value: "Next-Gen",
    description: "React, Next.js, Spring Boot",
    icon: Layers,
  },
  {
    label: "SLA Availability",
    value: "99.99%",
    description: "Enterprise-grade uptime",
    icon: Globe2,
  },
];

const CorporateTrustMetrics = () => {
  return (
    <section className="bg-background py-16 text-foreground border-y border-border/40 overflow-hidden font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Contextual Subtitle mapping perfectly to an Elite IT Brand */}
        <p className="text-center text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
          Engineering High-Performance Enterprise Solutions Globally
        </p>

        {/* Core Grid Matrix */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          {companyMetrics.map((metric) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={metric.label}
                className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-ring/40 hover:bg-card text-center"
              >
                {/* Dynamic Floating Ambient Aura on Hover */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Metric Icon Component Container */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Main Metric Value Block */}
                <h3 className="mt-4 text-2xl font-black tracking-tight text-foreground md:text-3xl">
                  {metric.value}
                </h3>

                {/* Metric Descriptor Details */}
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {metric.label}
                </p>
                <span className="mt-1.5 text-[11px] text-muted-foreground/80 block line-clamp-1">
                  {metric.description}
                </span>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default CorporateTrustMetrics;