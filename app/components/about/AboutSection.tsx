import Link from "next/link";
import { values } from "@/app/data/aboutData";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
    <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}
            <div>

                <span className="text-xs uppercase tracking-[0.25em] text-indigo-400">
                    Who We Are
                </span>

                <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                    Technology Partner
                    <span className="block text-slate-400">
                        For Modern Businesses
                    </span>
                </h2>

                <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-400">

                    <p>
                        We work with startups, growing businesses, and organizations
                        to develop reliable software systems, automation solutions,
                        and modern web platforms.
                    </p>

                    <p>
                        Our focus is on building practical technology that improves
                        business operations, customer experience, and digital growth.
                    </p>

                    <p>
                        From custom applications to cloud infrastructure and AI-powered
                        workflows, we create solutions designed for scalability,
                        security, and real-world usability.
                    </p>

                </div>

                <div className="mt-10">
                  <Link
                    href="/services"
                    className="inline-flex items-center rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500 shadow-md shadow-indigo-600/20"
                  >
                    Explore Capabilities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

            </div>

            {/* RIGHT */}
            <div className="grid gap-6 sm:grid-cols-2">

                {values.map((value) => {
                    const Icon = value.icon;

                    return (
                        <div
                            key={value.title}
                            className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40"
                        >

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
                                <Icon className="h-6 w-6 text-indigo-400" />
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-white">
                                {value.title}
                            </h3>

                            <p className="mt-4 text-sm leading-relaxed text-slate-400">
                                {value.desc}
                            </p>

                        </div>
                    );
                })}

            </div>

        </div>
    </section>
    )
};