import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "High-Volume FinTech Settlement Platform",
    domain: "Financial Technology",
    stack: "Next.js · Spring Boot · PostgreSQL · Kafka",
    metrics: "12.4M Transactions / Day · 4.2ms Latency",
    description: "Architected a distributed ledger settlement engine with real-time fraud mitigation and strict ACID compliance for multi-currency processing.",
    image: "/images/portfolio/fintech-platform.svg",
  },
  {
    title: "Clinical AI Document Ingestion & OCR System",
    domain: "Healthcare Technology",
    stack: "Python · PyTorch · FastEmbed · Docker · Cloud Run",
    metrics: "450K Records Ingested · 99.4% Extraction Precision",
    description: "Engineered an automated multi-modal extraction pipeline to parse unstructured medical lab documentation into structured clinical FHIR records.",
    image: "/images/portfolio/healthcare-ai.svg",
  },
  {
    title: "Global Logistics Fleet Telemetry Pipeline",
    domain: "Supply Chain & IoT",
    stack: "React · Node.js · Redis · Kubernetes · AWS",
    metrics: "1.8M Events / Sec · -38% Route Turnaround",
    description: "Designed a low-latency geo-routing telemetry streaming engine processing continuous sensor data across distributed fleet hubs.",
    image: "/images/portfolio/logistics-cloud.svg",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 border-b border-border/40 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/60 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-3">
              <span>03. Proven Engineering</span>
              <span aria-hidden="true">·</span>
              <span className="text-primary font-semibold">Architecture Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              Representative Systems
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Concrete architectural implementations showcasing how we solve performance bottlenecks, security constraints, and operational scaling.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:opacity-85 transition-opacity whitespace-nowrap self-start md:self-end"
          >
            <span>Request Technical Architecture Review</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3-Column Architectural Project Matrix */}
        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 flex flex-col justify-between"
            >
              <div>
                {/* Visual Representation */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-slate-950 mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                {/* Unboxed Metadata */}
                <div className="flex items-center gap-2 text-[11px] font-mono text-primary font-semibold tracking-wide uppercase">
                  <span>{project.domain}</span>
                </div>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Key Metric Strip */}
                <div className="mt-5 p-3 rounded-xl border border-border/60 bg-muted/30">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Verified Outcome
                  </span>
                  <span className="text-xs font-mono font-bold text-foreground mt-0.5 block">
                    {project.metrics}
                  </span>
                </div>
              </div>

              {/* Technology Stack Footer */}
              <div className="mt-6 pt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                <span className="text-foreground font-semibold">Stack: </span>
                <span>{project.stack}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}