import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | MAS Global AI",
  description:
    "Privacy policy and data governance practices at MAS Global AI, covering data security, client confidentiality, and compliance.",
  alternates: {
    canonical: "https://masglobalai.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
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
            <Shield className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Data Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective Date: January 1, 2026 · Last Updated: October 2026
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Executive Overview</h2>
            <p>
              MAS Global AI (&ldquo;MAS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy, confidentiality, and integrity of your corporate and personal information. This Privacy Policy details our protocols regarding the collection, processing, and safeguarding of data transmitted via our website, client communications, and enterprise engineering engagements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Information Collection</h2>
            <p>We collect information strictly necessary to provide and refine our technical solutions:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong className="text-foreground">Inquiry & Consultation Data:</strong> Name, business email, organization name, required services, and architectural requirements submitted through our contact and consultation forms.
              </li>
              <li>
                <strong className="text-foreground">Technical Usage Metrics:</strong> IP addresses, browser specifications, operating system details, referring URLs, and session interaction metrics to guarantee platform security and service reliability.
              </li>
              <li>
                <strong className="text-foreground">Contractual Engagement Data:</strong> Non-disclosure agreements, project specifications, and deployment criteria governed by signed master services agreements (MSAs).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Purpose and Legal Basis of Processing</h2>
            <p>We process your data strictly under valid commercial and legal frameworks to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Evaluate project technical feasibility and deliver proposal documentation.</li>
              <li>Engineer, deploy, and maintain custom software, cloud architectures, and AI systems.</li>
              <li>Ensure cybersecurity compliance, prevent unauthorized system access, and mitigate fraud.</li>
              <li>Comply with applicable legal, financial, and regulatory governance standards.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Client Confidentiality & Intellectual Property</h2>
            <p>
              All proprietary source code, algorithmic architectures, datasets, and enterprise logic developed for or shared by our clients remain strictly confidential. MAS Global AI does not sell, lease, or monetize client data under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Data Retention & Security Architecture</h2>
            <p>
              We implement industry-standard encryption (TLS 1.3 in transit, AES-256 at rest), access control matrices, and role-based operational permissions. Data is retained only for the duration required to satisfy operational, audit, or legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction (including GDPR, CCPA, and Indian IT Act provisions), you possess the right to access, rectify, restrict, or request erasure of your personal data.
            </p>
          </section>

          <section className="pt-6 border-t border-border/60">
            <h2 className="text-xl font-bold text-foreground mb-3">7. Privacy Officer Contact</h2>
            <p>
              For privacy inquiries, audit requests, or data deletion directives, contact our Data Governance Officer at:
            </p>
            <div className="mt-4 p-4 rounded-xl border border-border/60 bg-card/40 text-foreground space-y-1 font-mono text-xs">
              <p className="font-bold">MAS Global AI — Legal & Compliance Office</p>
              <p>Ameerpet, Hyderabad, Telangana, India</p>
              <p>Email: contact@masglobalai.com · Phone: +91 8862065378</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
