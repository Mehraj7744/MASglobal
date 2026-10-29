import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-border/40 font-sans">
      {/* Background Architectural Grid & Subtle Aura */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.06] dark:opacity-[0.12] pointer-events-none" />
      <div className="absolute -top-24 left-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main 2-Column Desktop Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7">
            {/* Clean Unboxed Kicker Metadata */}
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-4">
              <span>Enterprise IT Consulting</span>
              <span aria-hidden="true">·</span>
              <span className="text-primary font-semibold">AI Solutions</span>
              <span aria-hidden="true">·</span>
              <span>Global Delivery</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.12]">
              Architecting Scalable Software &amp;{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Enterprise AI Systems
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              MAS Global AI engineers production-grade digital platforms, automated machine learning pipelines, and cloud-native architectures that transform enterprise operations and drive measurable business outcomes.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-muted hover:border-border/80 active:scale-[0.98] whitespace-nowrap"
              >
                Explore Services &amp; Architecture
              </Link>
            </div>

            {/* Verified Engineering Differentiators */}
            <div className="mt-10 pt-8 border-t border-border/60 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground font-medium">99.99% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Cpu className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground font-medium">Cloud-Native Core</span>
              </div>
            </div>

          </div>

          {/* Right Column: Original Branded Visual Asset */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-2 shadow-2xl transition-all duration-300 hover:border-primary/40">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-950">
                <Image
                  src="/images/hero/mas-global-ai-hero.svg"
                  alt="MAS Global AI Enterprise Architecture and Machine Learning Infrastructure"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-700 group-hover:scale-102"
                />
              </div>

              {/* Quiet Bottom Caption Bar */}
              <div className="px-3 pt-3 pb-1 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span>DISTRIBUTED AI ENGINE</span>
                <span className="text-primary font-semibold">PRODUCTION VERIFIED</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
