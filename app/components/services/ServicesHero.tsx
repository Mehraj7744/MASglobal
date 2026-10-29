import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-background pt-24 pb-20 lg:pt-32 lg:pb-24 font-sans">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.06] dark:opacity-[0.12] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Unboxed Metadata Kicker */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-4">
            <span>Capabilities Portfolio</span>
            <span aria-hidden="true">·</span>
            <span className="text-primary font-semibold">Production-Grade Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.12]">
            Scalable Software &amp; AI Systems Built for Modern Enterprises
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            From distributed microservices to autonomous AI pipelines, we deliver robust technology solutions designed to eliminate operational friction and accelerate organizational growth.
          </p>

          {/* Action Targets */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#services-grid"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-muted active:scale-[0.98] whitespace-nowrap"
            >
              Explore Capabilities Grid
            </Link>
          </div>

          {/* Verified Technical Standards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { label: "Engineering SLA", value: "99.99%", sub: "High-Availability Standard" },
              { label: "Core Frameworks", value: "Next.js & Spring", sub: "Enterprise Full-Stack" },
              { label: "AI Integration", value: "LLMs & OCR", sub: "Autonomous Workflows" },
              { label: "Delivery Model", value: "Agile Sprints", sub: "Hyderabad Engineering HQ" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                  {stat.label}
                </span>
                <span className="text-xl font-bold font-mono tracking-tight text-foreground mt-1 block">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground mt-1 block">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}