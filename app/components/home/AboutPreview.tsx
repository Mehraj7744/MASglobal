import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 border-b border-border/40 font-sans">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Original Branded Vector Graphic */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card p-2 shadow-xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-950">
                <Image
                  src="/images/about/innovation-center.svg"
                  alt="MAS Global AI Technology Innovation Center and Engineering Framework"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6">
            {/* Clean Unboxed Text Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-3">
              <span>01. Engineering Heritage</span>
              <span aria-hidden="true">·</span>
              <span className="text-primary font-semibold">Hyderabad HQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              Engineering Intelligent Systems with Rigorous Standards
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                MAS Global AI is a technology consulting and digital engineering company based in Hyderabad, India. We partner with founders, enterprise technical leaders, and growth-oriented businesses worldwide to design and build resilient digital products.
              </p>
              <p>
                From autonomous AI workflow agents to fault-tolerant distributed cloud microservices, our multidisciplinary engineering team combines modern frameworks with scalable software principles to eliminate technical debt and accelerate delivery.
              </p>
            </div>

            {/* Core Capability Checklist */}
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {[
                "Production-tested architectures built on modern TypeScript, Next.js, and Java Spring",
                "Custom LLM fine-tuning, OCR document extraction, and autonomous agent pipelines",
                "Deterministic DevOps with automated CI/CD and multi-cloud container orchestration",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:opacity-85 transition-opacity"
              >
                <span>Read Full Company Profile &amp; Leadership</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}