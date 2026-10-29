import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative bg-slate-950 pb-32 pt-12 overflow-hidden text-white">
      <div className="absolute top-12 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-10 text-center shadow-2xl backdrop-blur-md md:p-16">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Technical Consultation
          </div>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ready to Engineer an Enterprise Solution?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Consult with our principal architects to scope your AI integration, custom software architecture, or cloud modernization initiative.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-500 active:scale-[0.98] w-full sm:w-auto"
            >
              Start Technical Scoping
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact?intent=consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-8 py-4 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white hover:border-slate-700 active:scale-[0.98] w-full sm:w-auto"
            >
              <Calendar className="h-4 w-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              Schedule Architecture Review
            </Link>
          </div>

          <div className="mt-12 border-t border-slate-800/60 pt-6">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Enterprise Grade • Confidential NDA Protection • Direct Principal Architect Access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;