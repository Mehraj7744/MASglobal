"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function FounderSection() {
  const expertise = [
    "Generative AI & RAG Systems",
    "AI Chatbots & Automation",
    "OCR & Intelligent Document Processing",
    "Machine Learning & Deep Learning",
    "Python Development",
    "Cloud Deployment (AWS & Azure)",
    "Modern Website & Web Applications",
    "Business Automation Solutions",
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-28">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

            <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
              <div className="relative h-[600px] w-full overflow-hidden">
                <Image
                  src="/founder.webp"
                  alt="Shaikh Majhar"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 rounded-2xl border border-border bg-card/80 px-5 py-4 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        Founder & AI/ML Engineer
                      </p>

                      <h4 className="font-semibold text-foreground">
                        MAS Global AI
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Founder Profile
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Shaikh Majhar

              <span className="mt-2 block text-muted-foreground">
                Founder & AI/ML Engineer
              </span>
            </h2>

            {/* Description */}
            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                Shaikh Majhar is an AI/ML Engineer and technology
                professional with over 3 years of industry experience
                in Artificial Intelligence, Machine Learning,
                Automation, and Modern Web Solutions.
              </p>

              <p>
                He has worked on enterprise-level AI projects
                including Generative AI applications,
                Retrieval-Augmented Generation (RAG) systems,
                OCR automation, customer analytics, and
                intelligent workflow platforms.
              </p>

              <p>
                Previously associated with Infosys, he gained
                hands-on experience in enterprise technologies,
                automation workflows, cloud infrastructure,
                and scalable business solutions.
              </p>
            </div>

            {/* Founder Card */}
            <div className="mt-10 flex items-center justify-between rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/founder.webp"
                    alt="Shaikh Majhar"
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Shaikh Majhar
                  </h3>

                  <p className="mt-1 text-sm text-primary">
                    Founder & AI/ML Engineer
                  </p>
                </div>
              </div>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-muted transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </Link>
            </div>

            {/* Expertise */}
            <div className="mt-10 rounded-3xl border border-border bg-card p-8">
              <h3 className="text-2xl font-semibold text-foreground">
                Core Expertise
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-muted/40 px-4 py-4 transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />

                    <span className="text-sm text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="mt-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-card p-8">
              <h3 className="text-2xl font-semibold text-foreground">
                Vision For MAS Global AI
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">
                The vision of MAS Global AI is to build trusted,
                scalable, and intelligent AI-powered solutions
                that help businesses, institutes, startups,
                and enterprises automate operations, improve
                efficiency, and accelerate digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}