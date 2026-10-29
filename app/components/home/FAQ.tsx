"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  category: "all" | "engagement" | "architecture" | "security";
  question: string;
  answer: string;
  highlights?: string[];
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "engagement",
    question: "What engagement models does MAS Global AI support for enterprise clients?",
    answer:
      "We offer three structured engagement models tailored to organizational velocity: (1) Dedicated Engineering Pods—autonomous, cross-functional engineering teams (Tech Lead, Senior Full-Stack Engineers, DevOps, QA) integrated directly into your sprint cycle; (2) Milestone-Driven Fixed Scope—ideal for well-defined greenfield developments, system migrations, and MVPs with guaranteed timeline and deliverable covenants; and (3) Strategic Architecture Advisory—providing fractional CTO guidance, cloud infrastructure reviews, and technical due diligence.",
    highlights: ["Dedicated Engineering Pods", "Milestone-Driven Fixed Scope", "Architecture Advisory"],
  },
  {
    id: "faq-2",
    category: "security",
    question: "How is intellectual property (IP), source code, and repository ownership governed?",
    answer:
      "100% intellectual property ownership is assigned directly to the client. From sprint one, all code commits, Git repositories, Docker containers, Terraform infrastructure scripts, CI/CD pipelines, and architecture documentation are deployed to client-controlled cloud environments. We execute bilateral Non-Disclosure Agreements (NDAs) prior to architectural discovery sessions, and all deliverables are produced under strict work-for-hire covenants.",
    highlights: ["100% IP Assignment to Client", "Bilateral NDA Execution", "Client-Controlled Repos"],
  },
  {
    id: "faq-3",
    category: "security",
    question: "How do you protect sensitive enterprise data when deploying LLMs and AI workflows?",
    answer:
      "We enforce enterprise-grade data isolation. We implement zero-data-retention (ZDR) agreements with frontier model providers, preventing customer inputs from being stored or used for model retraining. For high-compliance sectors (FinTech, Healthcare), we deploy private VPC-hosted open-weights models (e.g., Llama 3, DeepSeek, Mistral) on dedicated, air-gapped GPU instances. All pipelines incorporate AES-256 encryption at rest, TLS 1.3 in transit, and granular Role-Based Access Control (RBAC).",
    highlights: ["Zero Data Retention (ZDR)", "Private VPC-Hosted Models", "AES-256 & TLS 1.3 Encryption"],
  },
  {
    id: "faq-4",
    category: "architecture",
    question: "What is your project governance, sprint cadence, and technical transparency model?",
    answer:
      "We operate on strict two-week agile sprints. Clients receive real-time access to Jira/Linear sprint boards, daily automated Slack/Teams notifications, weekly executive progress dashboards, and bi-weekly live staging environment demonstrations. Every architectural design decision is documented in formal Architecture Decision Records (ADRs) to ensure technical auditability for your internal stakeholders.",
    highlights: ["Two-Week Agile Sprints", "Live Staging Demos", "Architecture Decision Records (ADRs)"],
  },
  {
    id: "faq-5",
    category: "architecture",
    question: "How do you guarantee production uptime, cloud scalability, and disaster recovery?",
    answer:
      "Our infrastructure architectures are engineered for 99.99% availability SLAs. We architect multi-availability zone and multi-region failover topologies across AWS, Google Cloud, and Azure using Kubernetes (EKS/GKE), Infrastructure as Code (Terraform), and blue/green zero-downtime rollouts. Automated database read replicas, distributed Redis caching, and automated backup snapshots ensure strict Recovery Time Objective (RTO) and Recovery Point Objective (RPO) guarantees.",
    highlights: ["99.99% Availability SLA", "Multi-Region Failover", "Zero-Downtime Blue/Green Deployments"],
  },
  {
    id: "faq-6",
    category: "engagement",
    question: "What post-deployment support and 24/7 maintenance retainers are provided?",
    answer:
      "Following production commissioning, we provide structured Service Level Agreements (SLAs). Our maintenance retainers encompass 24/7 infrastructure observability via Datadog/Prometheus, guaranteed 15-minute response times for critical P1 incidents, automated OS and dependency security patch management, continuous query optimization, and quarterly cloud spend audits.",
    highlights: ["15-Minute P1 Response SLA", "24/7 Telemetry & Alerting", "Continuous Security Patching"],
  },
  {
    id: "faq-7",
    category: "architecture",
    question: "Can MAS Global AI modernize or integrate with our existing legacy systems?",
    answer:
      "Yes. We specialize in non-disruptive legacy modernization utilizing the Strangler Fig pattern. We decouple monolithic architectures into microservices (Spring Boot, Node.js, Go) or modern Next.js frontends while maintaining existing relational databases. We build robust API gateway facades and event-driven bridges (Apache Kafka, RabbitMQ) to ensure ongoing operations remain uninterrupted during phased migrations.",
    highlights: ["Strangler Fig Modernization", "Zero Operational Downtime", "Event-Driven Bridges"],
  },
  {
    id: "faq-8",
    category: "security",
    question: "What security compliance frameworks and vulnerability standards do you enforce?",
    answer:
      "All code developed at MAS Global AI adheres to the OWASP Top 10 security framework, SOC 2 Type II controls, and ISO 27001 best practices. We embed automated Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), dependency vulnerability scans, and Software Bill of Materials (SBOM) verification into every automated GitHub Actions/GitLab CI pipeline.",
    highlights: ["SOC 2 Type II Readiness", "OWASP Top 10 Hardened", "Automated SAST/DAST in CI/CD"],
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState<"all" | "engagement" | "architecture" | "security">("all");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section 
      id="faq" 
      className="relative overflow-hidden bg-background py-20 lg:py-28 border-b border-border/40 font-sans"
    >
      {/* Background Architectural Canvas & Subtle Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.04] dark:opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/60 pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-3">
              <span>05. Technical FAQ</span>
              <span aria-hidden="true">·</span>
              <span className="text-primary font-semibold">Architecture &amp; Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Concrete answers regarding our engagement structures, code ownership, security isolation, cloud SLAs, and delivery methodology.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:opacity-85 transition-opacity whitespace-nowrap self-start md:self-end"
          >
            <span>Have a Specific Technical Requirement?</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-border/40 pb-4">
          <span className="text-xs font-mono text-muted-foreground mr-2 uppercase tracking-wider hidden sm:inline">
            Category Filter:
          </span>
          {[
            { id: "all", label: "All Questions" },
            { id: "engagement", label: "Engagement Models" },
            { id: "architecture", label: "Project Architecture" },
            { id: "security", label: "Security & IP Governance" },
          ].map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 ${
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="mx-auto max-w-4xl space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? "border-primary/50 bg-card shadow-sm"
                    : "border-border/80 bg-card/60 hover:border-border hover:bg-card"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-xs font-bold text-primary mt-0.5 shrink-0">
                      0{index + 1}.
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-muted/60 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary border-primary/40 bg-primary/10" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-border/60 px-5 sm:px-6 pt-4 pb-6">
                        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>

                        {faq.highlights && faq.highlights.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-border/40 flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mr-1">
                              Key Standards:
                            </span>
                            {faq.highlights.map((item) => (
                              <span
                                key={item}
                                className="rounded-md border border-border/70 bg-muted/60 px-2.5 py-1 text-xs font-mono text-foreground font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quiet Bottom Support Bar */}
        <div className="mt-12 mx-auto max-w-4xl rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-foreground">
              Require a Custom Architecture or Security Questionnaire Review?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Our engineering leadership will review your technical specifications, RFCs, or compliance requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90 whitespace-nowrap shrink-0"
          >
            <span>Schedule Technical Call</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
