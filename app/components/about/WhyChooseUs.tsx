import { Rocket, ShieldCheck, Users } from "lucide-react";

export default function WhyChooseUs() {
    return (<section className="border-y border-slate-800 bg-slate-950/40">

        <div className="mx-auto max-w-7xl px-6 py-28">

            <div className="mx-auto max-w-3xl text-center">

                <span className="text-xs uppercase tracking-[0.25em] text-indigo-400">
                    Why Choose Us
                </span>

                <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                    Practical Technology
                    <span className="block text-slate-400">
                        Designed For Real Business Growth
                    </span>
                </h2>

                <p className="mt-6 leading-relaxed text-slate-400">
                    We combine strategy, engineering, and modern technologies to help
                    businesses build scalable digital products and efficient systems.
                </p>

            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-3">

                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

                    <Rocket className="h-10 w-10 text-indigo-400" />

                    <h3 className="mt-6 text-xl font-semibold">
                        Growth Focused
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                        Solutions designed to support business scalability,
                        performance, and operational efficiency.
                    </p>

                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

                    <Users className="h-10 w-10 text-indigo-400" />

                    <h3 className="mt-6 text-xl font-semibold">
                        Collaborative Approach
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                        We work closely with clients to understand requirements,
                        business goals, and long-term vision.
                    </p>

                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

                    <ShieldCheck className="h-10 w-10 text-indigo-400" />

                    <h3 className="mt-6 text-xl font-semibold">
                        Reliable Delivery
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                        Focused on maintainable architecture, transparency,
                        and long-term technical reliability.
                    </p>

                </div>

            </div>

        </div>
    </section>
    )
};