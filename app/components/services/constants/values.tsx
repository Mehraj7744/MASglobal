import {
  BrainCircuit,
  Code2,
  Cloud,
  LayoutGrid,
  FileSearch,
  Cpu,
  Lightbulb,
  Target,
  Rocket,
  ShieldCheck,
  Users,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  tags: string[];
}

export const services: ServiceItem[] = [
  {
    id: "ai-solutions",
    title: "AI & Machine Learning Solutions",
    desc: "Autonomous workflow agents, custom LLM fine-tuning, retrieval-augmented generation (RAG), and predictive algorithmic pipelines.",
    icon: BrainCircuit,
    tags: ["LLM Integration", "RAG Pipelines", "Autonomous Agents", "PyTorch"],
  },
  {
    id: "custom-software",
    title: "Custom Software Engineering",
    desc: "High-throughput microservices, distributed enterprise backends, secure API gateways, and scalable relational/document data stores.",
    icon: Code2,
    tags: ["Spring Boot", "TypeScript", "PostgreSQL", "Kafka"],
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    desc: "Multi-cloud architecture on AWS and GCP, Kubernetes container orchestration, automated CI/CD pipelines, and 99.99% availability engineering.",
    icon: Cloud,
    tags: ["Kubernetes", "Docker", "Terraform", "CI/CD"],
  },
  {
    id: "web-platforms",
    title: "Enterprise Web Applications",
    desc: "Modern responsive web applications built with Next.js and React, featuring accessible design systems and real-time state synchronization.",
    icon: LayoutGrid,
    tags: ["Next.js", "React 19", "Tailwind CSS", "WCAG AA"],
  },
  {
    id: "ocr-automation",
    title: "Intelligent Document & OCR Systems",
    desc: "High-precision document ingestion, automated invoice/receipt parsing, clinical text extraction, and enterprise validation pipelines.",
    icon: FileSearch,
    tags: ["Multi-Modal OCR", "Data Extraction", "Validation Rules"],
  },
  {
    id: "it-consulting",
    title: "Technical Architecture & IT Consulting",
    desc: "Architecture modernization audits, database query optimization, security vulnerability reviews, and digital transformation roadmapping.",
    icon: Cpu,
    tags: ["System Audits", "Tech Debt Eradication", "Security Hardening"],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Technical Discovery & Architecture Audit",
    description: "In-depth review of existing system constraints, data models, API dependencies, and scalability bottlenecks.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "System Blueprint & Security Specifications",
    description: "Designing database schemas, microservice contracts, cloud topology diagrams, and compliance milestones.",
    icon: Target,
  },
  {
    number: "03",
    title: "Agile Production & Quality Assurance",
    description: "Fortnightly sprint releases with strict automated linting, unit test coverage, and end-to-end integration tests.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Deployment & Ongoing SLA Support",
    description: "Zero-downtime canary deployments, telemetry monitoring, performance optimization, and guaranteed uptime SLAs.",
    icon: Rocket,
  },
];

export interface EngagementModel {
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  features: string[];
  ctaText: string;
  featured?: boolean;
}

export const engagementModels: EngagementModel[] = [
  {
    title: "Dedicated Engineering Pod",
    description: "Turnkey squad of principal architects, full-stack engineers, and AI developers seamlessly integrated into your team.",
    badge: "Flexible Scalability",
    icon: Users,
    features: [
      "Direct technical architect oversight",
      "Full sprint agility & daily asynchronous standups",
      "Flexible scaling of pod capacity as scope grows",
      "Complete IP transfer on all commits",
      "Hyderabad-based senior engineering talent",
    ],
    ctaText: "Inquire for Engineering Pod",
  },
  {
    title: "Milestone-Driven Fixed Scope",
    description: "Turnkey end-to-end delivery for well-scoped systems with guaranteed delivery timelines and transparent milestone budgets.",
    badge: "Most Popular for New Builds",
    icon: ShieldCheck,
    features: [
      "Fixed statement of work (SOW) & delivery schedule",
      "Comprehensive architecture blueprint included",
      "Dedicated Project Lead & QA Engineer",
      "30-day post-launch warranty & stabilization",
      "Continuous CI/CD staging environments",
    ],
    featured: true,
    ctaText: "Request Scope Estimate",
  },
  {
    title: "Architecture & Advisory Consulting",
    description: "Specialized consulting for enterprise technical leaders facing performance, security, or AI migration hurdles.",
    badge: "Strategic Advisory",
    icon: CheckCircle2,
    features: [
      "Deep-dive technical debt & security audit",
      "Cloud infrastructure cost & sizing review",
      "AI model selection & feasibility benchmark",
      "Database schema & indexing optimization",
      "Written executive architectural deliverable",
    ],
    ctaText: "Book Architecture Review",
  },
];