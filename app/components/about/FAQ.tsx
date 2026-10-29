"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What services does MAS Global AI provide?",
    answer:
      "We provide scalable software development, AI integrations, cloud infrastructure engineering, automation systems, UI/UX solutions, and digital transformation services.",
  },
  {
    question: "Do you build custom software solutions?",
    answer:
      "Yes. We develop custom SaaS platforms, dashboards, enterprise systems, admin panels, CRM solutions, and modern web applications tailored to business needs.",
  },
  {
    question: "Do you offer AI and automation services?",
    answer:
      "Absolutely. We build AI-powered workflows, automation systems, LLM integrations, intelligent business solutions, and AI-enhanced digital platforms.",
  },
  {
    question: "Which technologies does your team work with?",
    answer:
      "Our team works with React, Next.js, Node.js, Spring Boot, cloud platforms, DevOps pipelines, databases, and modern frontend/backend technologies.",
  },
  {
    question: "Do you work with startups and growing businesses?",
    answer:
      "Yes. We collaborate with startups, SMEs, and organizations looking to build scalable products and modern digital infrastructure.",
  },
  {
    question: "How do you manage software projects?",
    answer:
      "We follow a structured development process including requirement analysis, architecture planning, agile development, testing, deployment, and long-term support.",
  },
  {
    question: "Do you provide cloud and DevOps solutions?",
    answer:
      "Yes. We help businesses implement cloud-native infrastructure, CI/CD pipelines, deployment automation, and scalable hosting environments.",
  },
  {
    question: "Can you modernize existing systems?",
    answer:
      "Yes. We help businesses upgrade legacy systems, improve UI/UX, optimize performance, and migrate platforms to modern technologies.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer:
      "Absolutely. We provide maintenance, optimization, monitoring, security updates, and scalability support for deployed applications.",
  },
  {
    question: "How can we start working with MAS Global AI?",
    answer:
      "You can contact us through our website or schedule a consultation call. Our team will discuss your requirements and recommend the best approach for your project.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden border-t border-slate-800 bg-slate-950/40">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-indigo-400">
            <HelpCircle className="mr-2 h-4 w-4" />
            FAQs
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Frequently Asked
            <span className="block text-slate-400">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
            Answers to common questions about our services,
            software development process, AI solutions,
            infrastructure, and business collaboration.
          </p>

        </div>

        {/* FAQ GRID */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group overflow-hidden rounded-3xl border bg-slate-900/60 backdrop-blur transition-all duration-300 ${
                  isOpen
                    ? "border-indigo-500/40"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >

                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-2 text-left"
                >

                  <h3 className="pr-6 text-base font-semibold leading-relaxed text-white md:text-lg">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-indigo-500/30 bg-indigo-500/10"
                        : "border-slate-700 bg-slate-800/50"
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 text-indigo-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-7 pb-7">

                      <div className="h-px w-full bg-slate-800" />

                      <p className="pt-6 text-sm leading-relaxed text-slate-400 md:text-base">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}