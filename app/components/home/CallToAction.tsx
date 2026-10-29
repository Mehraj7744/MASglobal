import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 font-sans">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Enterprise Callout Plate */}
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/90 to-background p-8 sm:p-12 lg:p-16 text-center shadow-xl">
          
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-4">
              <span>Next Steps</span>
              <span aria-hidden="true">·</span>
              <span className="text-primary font-semibold">Strategic Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              Ready to Build Intelligent, High-Performance Software?
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Partner with MAS Global AI to architect production-ready software systems, automate enterprise workflows, and deploy resilient cloud platforms.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="mailto:contact@masglobalai.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-muted active:scale-[0.98] whitespace-nowrap"
              >
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>contact@masglobalai.com</span>
              </a>
            </div>

            {/* Direct Contact Coordinates */}
            <div className="mt-10 pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <a href="tel:+918862065378" className="hover:text-foreground font-mono">
                  +91 8862065378
                </a>
              </div>
              <span aria-hidden="true">·</span>
              <span>Ameerpet, Hyderabad, Telangana, India</span>
              <span aria-hidden="true">·</span>
              <span>Mon – Sat, 9:00 AM – 6:30 PM IST</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}