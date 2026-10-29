export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "seo-guide-2026",
    title: "The Ultimate Enterprise Technical SEO Guide For 2026",
    excerpt: "Modern search engine architecture, Core Web Vitals optimization, JSON-LD structured schema, and crawl-budget management.",
    content: "Technical SEO for enterprise software platforms requires programmatic optimization...",
    image: "/images/blog/web-performance.svg",
    date: "2026-01-01",
  },
  {
    id: 2,
    slug: "content-marketing-growth",
    title: "Architecting B2B Content Systems For Sustained Authority",
    excerpt: "Engineering high-intent technical documentation and developer advocacy funnels that build long-term digital authority.",
    content: "Enterprise technology buyers demand verifiable architectural depth...",
    image: "/images/blog/enterprise-software.svg",
    date: "2026-01-03",
  },
  {
    id: 3,
    slug: "google-ads-success",
    title: "Performance Marketing Instrumentation & Data Attribution",
    excerpt: "Server-side tracking, conversion API integrations, and event streaming pipelines to eliminate attribution blind spots.",
    content: "Modern digital acquisition relies on deterministic server-side event tracking...",
    image: "/images/blog/data-engineering.svg",
    date: "2026-01-05",
  },
  {
    id: 4,
    slug: "social-media-branding",
    title: "Enterprise Brand Governance & Executive Thought Leadership",
    excerpt: "Establishing executive technology credibility across developer communities and enterprise procurement networks.",
    content: "Building corporate trust in high-stakes IT consulting starts with transparent engineering standards...",
    image: "/images/blog/security-governance.svg",
    date: "2026-01-07",
  },
  {
    id: 5,
    slug: "email-marketing-guide",
    title: "Automated Lifecycle Messaging & Transactional Event Workflows",
    excerpt: "Building high-deliverability transactional notification systems with automated DKIM, SPF, and DMARC verification.",
    content: "Reliable transactional email is an essential subsystem of modern SaaS platforms...",
    image: "/images/blog/cloud-architecture.svg",
    date: "2026-01-09",
  },
  {
    id: 6,
    slug: "ai-in-digital-marketing",
    title: "Autonomous Agent Architectures in Enterprise Operations",
    excerpt: "Deploying multi-agent reasoning loops, deterministic guardrails, and RAG pipelines for mission-critical enterprise workflows.",
    content: "Enterprise AI implementations have shifted from simple prompt wrappers to distributed autonomous pipelines...",
    image: "/images/blog/ai-systems.svg",
    date: "2026-01-11",
  },
  {
    id: 7,
    slug: "local-seo-guide",
    title: "Distributed Geolocation & Multi-Region Discovery Systems",
    excerpt: "Optimizing regional visibility and latency routing for multi-branch enterprise engineering providers.",
    content: "Multi-region architecture ensures client requests resolve to local availability zones...",
    image: "/images/blog/cloud-architecture.svg",
    date: "2026-01-13",
  },
  {
    id: 8,
    slug: "website-speed-optimization",
    title: "Sub-Second Latency: Advanced Next.js & Edge Caching",
    excerpt: "Static generation, partial prerendering, critical CSS extraction, and CDN cache warming techniques.",
    content: "Latency directly impacts user conversion and algorithmic search ranking...",
    image: "/images/blog/web-performance.svg",
    date: "2026-01-15",
  },
  {
    id: 9,
    slug: "youtube-marketing-guide",
    title: "Technical Video Demonstrations & Developer Architecture Walkthroughs",
    excerpt: "Structuring engaging technical demos, architectural post-mortems, and code reviews for enterprise clients.",
    content: "Showing real production code and architectural topology accelerates technical procurement cycles...",
    image: "/images/blog/enterprise-software.svg",
    date: "2026-01-17",
  },
  {
    id: 10,
    slug: "instagram-growth-strategy",
    title: "Visual Brand Systems & Design Consistency For Tech Companies",
    excerpt: "Creating unified design tokens, typography rules, and vector asset libraries across digital channels.",
    content: "Consistent brand aesthetics signal rigorous quality control across all product touchpoints...",
    image: "/images/blog/web-performance.svg",
    date: "2026-01-19",
  },
  {
    id: 11,
    slug: "linkedin-marketing-guide",
    title: "B2B Technology Sales Engineering: The Technical Playbook",
    excerpt: "Navigating enterprise procurement, security review questionnaires, and RFP technical proposals.",
    content: "Enterprise contracts are won on architectural compliance, security maturity, and verified track records...",
    image: "/images/blog/security-governance.svg",
    date: "2026-01-21",
  },
  {
    id: 12,
    slug: "technical-seo-checklist",
    title: "The 2026 Enterprise Technical Architecture & SEO Audit Checklist",
    excerpt: "Comprehensive 50-point inspection covering schema validation, status codes, open-graph cards, and rendering budgets.",
    content: "Automated CI/CD linters should catch metadata regressions before deployment to production...",
    image: "/images/blog/web-performance.svg",
    date: "2026-01-23",
  },
  {
    id: 13,
    slug: "mobile-first-design",
    title: "Adaptive Mobile Responsive Engineering With Zero Layout Shifts",
    excerpt: "Eliminating Cumulative Layout Shift (CLS) on dynamic touch devices with rigid aspect ratio containers.",
    content: "Responsive engineering requires rigorous math: container outer padding, nested radius subtraction, and touch target minimums...",
    image: "/images/blog/web-performance.svg",
    date: "2026-01-25",
  },
  {
    id: 14,
    slug: "branding-for-startups",
    title: "Engineering-First Branding: From Seed Stage to Series A",
    excerpt: "How technical founders build memorable product identities that resonate with venture capital and engineering hires.",
    content: "Design clarity reflects code clarity...",
    image: "/images/blog/enterprise-software.svg",
    date: "2026-01-27",
  },
  {
    id: 15,
    slug: "ecommerce-marketing-guide",
    title: "High-Throughput E-Commerce Microservices & Cart Settlement",
    excerpt: "Designing resilient checkout funnels capable of handling peak traffic surges with Redis queue rate limiting.",
    content: "Flash sales and high-volume e-commerce platforms collapse when database connection pools are exhausted...",
    image: "/images/blog/data-engineering.svg",
    date: "2026-01-29",
  },
  {
    id: 16,
    slug: "conversion-rate-optimization",
    title: "Data-Driven CRO: Scientific A/B Testing on Next.js Edge Middleware",
    excerpt: "Zero-flicker feature flagging and bucket attribution powered by lightweight edge compute.",
    content: "Client-side testing scripts cause devastating CLS layout flicker. Modern teams evaluate variations at the edge...",
    image: "/images/blog/web-performance.svg",
    date: "2026-02-01",
  },
  {
    id: 17,
    slug: "facebook-ads-guide",
    title: "Audience Segmentation with Distributed Data Warehouses",
    excerpt: "Connecting Snowflake and BigQuery data models to downstream advertising APIs with differential privacy.",
    content: "Warehouse-native marketing synchronization prevents duplicate audiences and complies with strict GDPR guidelines...",
    image: "/images/blog/data-engineering.svg",
    date: "2026-02-03",
  },
  {
    id: 18,
    slug: "marketing-analytics-basics",
    title: "ClickHouse & DuckDB For Real-Time Product Telemetry",
    excerpt: "Processing billions of user interaction events in sub-second queries without astronomical cloud costs.",
    content: "Columnar databases have revolutionized internal telemetry dashboards...",
    image: "/images/blog/data-engineering.svg",
    date: "2026-02-05",
  },
  {
    id: 19,
    slug: "startup-growth-hacks",
    title: "Product-Led Growth (PLG) Architecture: Virality & Frictionless Onboarding",
    excerpt: "Removing sign-up barriers, optimizing instant workspace provisioning, and building seamless collaborative mechanics.",
    content: "The fastest-growing SaaS platforms minimize time-to-value by provisioning tenant resources asynchronously...",
    image: "/images/blog/enterprise-software.svg",
    date: "2026-02-07",
  },
  {
    id: 20,
    slug: "future-of-web-design",
    title: "The Death of AI Slop: The Rise of Bespoke Corporate Interfaces",
    excerpt: "Why enterprise clients are rejecting cookie-cutter templates in favor of tailored visual languages and high typographic precision.",
    content: "Generic purple-gradient cards and floating stat badges have become visual noise. Modern enterprise design demands intentionality...",
    image: "/images/blog/web-performance.svg",
    date: "2026-02-09",
  },
  {
    id: 21,
    slug: "voice-search-optimization",
    title: "Multimodal Voice & Audio Agent Pipelines With Low Latency",
    excerpt: "Integrating WebRTC audio streams with real-time speech-to-text and low-latency LLM inference engines.",
    content: "Voice assistants in enterprise operations require end-to-end latency below 300 milliseconds...",
    image: "/images/blog/ai-systems.svg",
    date: "2026-02-11",
  },
  {
    id: 22,
    slug: "digital-brand-storytelling",
    title: "Communicating Technical Differentiation to Non-Technical Stakeholders",
    excerpt: "Translating architectural resilience, security posture, and cloud cost efficiency into executive business value.",
    content: "The best enterprise engineers articulate business impact alongside technical benchmarks...",
    image: "/images/blog/security-governance.svg",
    date: "2026-02-13",
  },
  {
    id: 23,
    slug: "best-ui-ux-practices",
    title: "Accessible Enterprise Design Systems: WCAG AA & Strict Keyboard Traversal",
    excerpt: "Building component libraries that support screen readers, high-contrast modes, and visible focus management.",
    content: "Accessibility is an essential non-negotiable requirement in enterprise software engineering...",
    image: "/images/blog/web-performance.svg",
    date: "2026-02-15",
  },
  {
    id: 24,
    slug: "react-performance-guide",
    title: "React 19 & Next.js 15: Optimizing Server Components and Hydration",
    excerpt: "Eliminating waterfalls, minimizing client bundle footprint, and mastering async Server Actions.",
    content: "Pushing client logic strictly to the leaf nodes of the component tree yields dramatic bundle reductions...",
    image: "/images/blog/enterprise-software.svg",
    date: "2026-02-17",
  },
  {
    id: 25,
    slug: "nextjs-seo-techniques",
    title: "Dynamic OpenGraph Image Generation & Edge Rendering in Next.js",
    excerpt: "Generating branded social cards on the fly using @vercel/og and SVG canvas primitives.",
    content: "Dynamic OpenGraph generation ensures every shared article features custom titles and author metadata...",
    image: "/images/blog/web-performance.svg",
    date: "2026-02-19",
  },
  {
    id: 50,
    slug: "future-of-ai-marketing",
    title: "The Future of Autonomous Enterprise AI Agents",
    excerpt: "How self-healing workflows, automated validation, and reasoning models will redefine enterprise productivity in 2026.",
    content: "Autonomous agents will manage routine operational tasks while human architects focus on high-level system strategy...",
    image: "/images/blog/ai-systems.svg",
    date: "2026-04-10",
  },
];

export function getPostImage(post: { image?: string; slug?: string; id?: number }): string {
  if (post.image && post.image.startsWith("/images/")) {
    return post.image;
  }
  const fallbackImages = [
    "/images/blog/ai-systems.svg",
    "/images/blog/cloud-architecture.svg",
    "/images/blog/enterprise-software.svg",
    "/images/blog/security-governance.svg",
    "/images/blog/data-engineering.svg",
    "/images/blog/web-performance.svg",
  ];
  const index = Math.abs((post.id || 1) - 1) % fallbackImages.length;
  return fallbackImages[index];
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.map((p) => ({
    ...p,
    image: getPostImage(p),
  }));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return undefined;
  return {
    ...post,
    image: getPostImage(post),
  };
}