import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BrainCircuit, Code2, Cloud, LayoutGrid } from "lucide-react";

const coreServices = [
  {
    index: "01",
    title: "AI & Machine Learning Solutions",
    description: "Custom autonomous agent workflows, enterprise LLM integrations, predictive modeling, and intelligent OCR data extraction systems.",
    image: "/images/services/ai-solutions.svg",
    icon: BrainCircuit,
    href: "/services",
  },
  {
    index: "02",
    title: "Custom Software Engineering",
    description: "High-performance full-stack web platforms, distributed microservice architectures, and secure RESTful/GraphQL API systems.",
    image: "/images/services/custom-software.svg",
    icon: Code2,
    href: "/services",
  },
  {
    index: "03",
    title: "Cloud Infrastructure & DevOps",
    description: "Multi-cloud architecture, container orchestration with Kubernetes, automated CI/CD deployment pipelines, and 99.99% uptime engineering.",
    image: "/images/services/cloud-solutions.svg",
    icon: Cloud,
    href: "/services",
  },
  {
    index: "04",
    title: "Enterprise Web Applications",
    description: "Ultra-fast Next.js and React digital applications engineered with accessible design systems and seamless client portals.",
    image: "/images/services/web-platforms.svg",
    icon: LayoutGrid,
    href: "/services",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 border-b border-border/40 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/60 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-3">
              <span>02. Core Capabilities</span>
              <span aria-hidden="true">·</span>
              <span className="text-primary font-semibold">Specialized Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              Enterprise Technical Services
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              We design and construct production-hardened technical solutions built for performance, security, and sustained operational scale.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:opacity-85 transition-opacity whitespace-nowrap self-start md:self-end"
          >
            <span>View All Engineering Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 2x2 Clean Bento Grid with Original Section Visuals */}
        <div className="grid gap-8 md:grid-cols-2">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 sm:p-8 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Metadata Line */}
                  <div className="flex items-center justify-between pb-6 border-b border-border/60">
                    <span className="font-mono text-xs font-bold text-primary">
                      {service.index}.
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-muted/50 text-foreground group-hover:text-primary transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Visual Mockup Container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/60 bg-slate-950 my-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      referrerPolicy="no-referrer"
                      className="object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:underline underline-offset-4"
                  >
                    <span>Capabilities Spec</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}