import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | MAS Global AI",
  description:
    "Terms of service, engineering agreements, service levels, and professional engagement standards for MAS Global AI.",
  alternates: {
    canonical: "https://masglobalai.com/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 lg:py-24 px-6 lg:px-8 border-t border-border/40 font-sans">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="border-b border-border/60 pb-8 mb-12">
          <div className="flex items-center gap-3 text-primary mb-3">
            <Scale className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Legal Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective Date: January 1, 2026 · Last Updated: October 2026
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing the website of MAS Global AI (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) or engaging our professional software engineering, artificial intelligence consulting, or cloud development services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any provision herein, you must discontinue using our services immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Professional Services & Statements of Work</h2>
            <p>
              All technology delivery engagements—including AI model integration, custom software engineering, cloud architecture modernization, and IT consulting—are formally documented in an agreed Statement of Work (SOW) or Master Services Agreement (MSA). The SOW governs specific project milestones, technical deliverables, testing parameters, and service level objectives.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise explicitly stipulated in an executed MSA:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong className="text-foreground">Client Deliverables:</strong> Upon full payment of contractual fees, all bespoke code, algorithmic configurations, and digital assets developed exclusively for the client shall vest with the client as work-for-hire.
              </li>
              <li>
                <strong className="text-foreground">Company Pre-Existing IP:</strong> Pre-existing software libraries, architectural frameworks, developer tooling, and foundational code maintained by MAS Global AI remain the proprietary intellectual property of the Company, with client receiving a non-exclusive license for deployment.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Client Responsibilities</h2>
            <p>
              Clients agree to supply timely technical documentation, access credentials, and testing feedback required for successful project completion. Delays caused by lack of required specifications or dependency access shall adjust project timelines accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Warranties & Limitation of Liability</h2>
            <p>
              MAS Global AI provides engineering solutions adhering to high industry quality standards. Except as expressly warranted in a signed MSA, services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. In no event shall MAS Global AI be liable for indirect, incidental, or consequential damages resulting from third-party outages, API changes, or force majeure events.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and any dispute arising out of or related to our website or professional services shall be governed by and construed in accordance with the laws of Telangana, India, with exclusive jurisdiction in Hyderabad courts.
            </p>
          </section>

          <section className="pt-6 border-t border-border/60">
            <h2 className="text-xl font-bold text-foreground mb-3">7. Inquiries</h2>
            <div className="p-4 rounded-xl border border-border/60 bg-card/40 text-foreground space-y-1 font-mono text-xs">
              <p className="font-bold">MAS Global AI — Legal Operations</p>
              <p>Ameerpet, Hyderabad, Telangana, India</p>
              <p>Email: contact@masglobalai.com · Phone: +91 8862065378</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
