import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, ShieldCheck } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | MAS Global AI",
    };
  }

  return {
    title: `${post.title} | Engineering Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `https://masglobalai.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://masglobalai.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <article className="min-h-screen bg-slate-950 text-slate-200 px-4 sm:px-8 py-20 max-w-4xl mx-auto">
      {/* Back to Blog Navigation */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Engineering Insights
        </Link>
      </div>

      {/* Meta Header */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
        <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/60 px-2.5 py-1">
          <Calendar className="h-3.5 w-3.5 text-indigo-400" />
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/60 px-2.5 py-1">
          <Clock className="h-3.5 w-3.5 text-indigo-400" />
          5 min read
        </span>
        <span className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/60 px-2.5 py-1">
          <User className="h-3.5 w-3.5 text-indigo-400" />
          MAS Global AI Technical Team
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
        {post.title}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-slate-300 font-light">
        {post.excerpt}
      </p>

      {/* Hero Image */}
      <div className="relative h-72 sm:h-96 md:h-[420px] mt-10 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
        <Image
          src={post.image || "/images/blog/ai-systems.svg"}
          alt={post.title}
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="mt-12 space-y-6 text-base leading-relaxed text-slate-300">
        <p>
          At MAS Global AI, we engineer solutions designed to scale reliably across enterprise environments. Whether deploying high-throughput microservices or integrating autonomous AI workflows, maintaining rigorous architectural standards remains fundamental.
        </p>

        <h2 className="text-2xl font-bold text-white pt-6">
          Architectural Principles & Best Practices
        </h2>
        <p>
          Building for resilience requires decoupling critical subsystems, implementing robust fallback mechanisms, and ensuring strict observability. Modern engineering teams prioritize verifiable test suites, automated CI/CD deployments, and continuous performance telemetry over ad-hoc optimizations.
        </p>

        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 my-8">
          <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider font-mono flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" /> Engineering Best Practice
          </h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Every production feature should be backed by reproducible benchmark metrics, automated contract tests, and explicit rollback triggers.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white pt-6">
          Implementation at Scale
        </h2>
        <p>
          As organizations adopt modern cloud-native standards, the focus shifts toward minimizing latency overhead, optimizing resource allocation, and maintaining security compliance across distributed nodes.
        </p>
      </div>

      {/* Article Footer & Consultation CTA */}
      <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Have a technical question about this topic?
          </p>
          <p className="text-sm text-white font-medium mt-0.5">
            Discuss architecture implementation with our senior engineers.
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors shrink-0"
        >
          Contact Engineering
        </Link>
      </div>
    </article>
  );
}
