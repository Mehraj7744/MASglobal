import Image from "next/image";
import { stats } from "@/app/data/aboutData";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/aboutHeroBackground.webp"
          alt="Background"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/10 " />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-rl from-background/10 via-background/10 to-background" />

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* Content */}
        <div className="max-w-4xl">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-primary backdrop-blur-xl">
            About MAS Global AI
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Building Scalable Software

            <span className="mt-2 block text-muted-foreground">
              & Intelligent Digital Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            MAS Global AI helps businesses build scalable software
            platforms, automation systems, and modern digital
            products focused on performance, usability,
            and long-term digital growth.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl border border-border bg-card/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/80"
            >
              {/* Number */}
              <h3 className="text-4xl font-bold text-primary">
                {item.number}
              </h3>

              {/* Label */}
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.label}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}