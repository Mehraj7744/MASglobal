import { engineeringExpertise, visionMission } from "@/app/data/aboutData";
import { ArrowRight, Rocket, ShieldCheck } from "lucide-react";

export default function VisionAndMission() {
    return(
        <section className="border-y border-slate-800 bg-slate-950/30">

  <div className="mx-auto max-w-7xl px-6 py-28">

    <div className="mx-auto max-w-3xl text-center">

      <span className="text-xs uppercase tracking-[0.25em] text-indigo-400">
        Vision & Mission
      </span>

      <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
        Building Technology
        <span className="block text-slate-400">
          That Creates Real Impact
        </span>
      </h2>

      <p className="mt-6 leading-relaxed text-slate-400">
        Our mission is to help businesses adopt modern technologies
        through scalable software, intelligent automation, and
        practical digital solutions.
      </p>

    </div>

    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {visionMission.map((item, index) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10"
        >

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">

            {index === 0 ? (
              <Rocket className="h-6 w-6 text-indigo-400" />
            ) : (
              <ShieldCheck className="h-6 w-6 text-indigo-400" />
            )}

          </div>

          <h3 className="mt-8 text-2xl font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-5 leading-relaxed text-slate-400">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
       {/* ENGINEERING EXPERTISE */}
            <div className="mt-28">

                <div className="max-w-3xl">

                    <span className="text-xs uppercase tracking-[0.25em] text-indigo-400">
                        Engineering Expertise
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
                        Modern Engineering
                        <span className="block text-slate-400">
                            Built For Scalability
                        </span>
                    </h2>

                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                    {engineeringExpertise.map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-indigo-500/40"
                        >

                            <div className="flex items-start justify-between">

                                <p className="text-sm font-medium leading-relaxed text-white">
                                    {item}
                                </p>

                                <ArrowRight className="h-4 w-4 text-indigo-400" />

                            </div>

                        </div>
                    ))}

                </div>

            </div>
</section>
    )};
