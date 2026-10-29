import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import ContactForm from "../components/contact/contactForm";

export const metadata: Metadata = {
  title: "Contact Our Engineering Team | MAS Global AI",
  description:
    "Consult with MAS Global AI for enterprise software development, AI solutions, and cloud architecture. Office in Ameerpet, Hyderabad. Phone: +91 8862065378.",
  alternates: {
    canonical: "https://masglobalai.com/contact",
  },
  openGraph: {
    title: "Contact Our Engineering Team | MAS Global AI",
    description:
      "Direct consultation with principal software architects and AI engineers in Hyderabad, India.",
    url: "https://masglobalai.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white px-4 sm:px-8 lg:px-16 py-16 lg:py-24 antialiased overflow-hidden border-t border-slate-900 font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_40%)]" />

      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-slate-900 pb-8 mb-16 gap-6 relative z-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Technical Inquiries & Scoping
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
            Let&apos;s Architect Your <br />
            <span className="text-slate-400">Next Technology Initiative</span>
          </h1>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xl">
            Connect directly with MAS Global AI technical leadership to discuss software engineering, AI workflow integration, cloud architecture, or dedicated development pods.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 tracking-wider bg-slate-900/60 px-3.5 py-1.5 rounded-lg border border-slate-800 shrink-0">
          Response SLA: &lt; 24 Business Hours
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3 relative z-10">
        {/* Left Column: Office Coordinates */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-indigo-400 uppercase block mb-1">
                  Registered Engineering Office
                </span>
                <h3 className="text-base font-bold text-white">
                  Hyderabad Office
                </h3>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-indigo-500/10 text-indigo-400">
                <MapPin className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Ameerpet, Hyderabad,<br />
              Telangana 500016, India
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-indigo-400 uppercase block mb-1">
                  Direct Line
                </span>
                <h3 className="text-base font-bold text-white">
                  Telephone Contact
                </h3>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-indigo-500/10 text-indigo-400">
                <Phone className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              <a href="tel:+918862065378" className="hover:text-indigo-400 transition-colors">
                +91 8862065378
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-indigo-400 uppercase block mb-1">
                  Electronic Mail
                </span>
                <h3 className="text-base font-bold text-white">
                  Official Inquiries
                </h3>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-indigo-500/10 text-indigo-400">
                <Mail className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              <a href="mailto:contact@masglobalai.com" className="hover:text-indigo-400 transition-colors">
                contact@masglobalai.com
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-indigo-400 uppercase block mb-1">
                  Operating Hours
                </span>
                <h3 className="text-base font-bold text-white">
                  Engineering Pod Schedule
                </h3>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-indigo-500/10 text-indigo-400">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Monday &ndash; Friday: 9:00 AM &ndash; 7:00 PM IST<br />
              <span className="text-xs text-slate-400">Emergency client SLA support: 24/7 on-call</span>
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-indigo-400 shrink-0" />
              <p className="text-xs text-slate-300">
                Mutual Non-Disclosure Agreement (NDA) executed before all technical scoping meetings.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-md shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
              Submit Project Specifications
            </h2>
            <p className="text-sm text-slate-400 mb-8">
              Provide your details below to receive a scoping consultation and preliminary technical architecture review.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>

      {/* Geolocation Map */}
      <div className="relative z-10 mx-auto mt-10 h-72 max-w-7xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8730.661938900425!2d78.44791241103499!3d17.439059797769872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c55bb43183%3A0x1abc135b23ee2703!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1779531607158!5m2!1sen!2sin"
          className="h-full w-full grayscale contrast-[1.1] dark:invert dark:contrast-100 transition-all duration-500 group-hover:grayscale-0 group-hover:dark:invert-0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="MAS Global AI Hyderabad Office Location"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
}