"use client";

import Link from "next/link";
import {
  Linkedin,
  Mail,
  Briefcase,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const team = [
  {
    id: "ENG-01",
    name: "Mazhar Hashmi",
    role: "Founder & Director",
    initials: "MH",
    accent: "from-blue-600 to-indigo-700",
    bio: "Focuses on strategic technology consulting, enterprise systems architecture, and business transformation.",
    location: "Hyderabad, India",
    experience: "5+ Years Exp",
    expertise: ["Enterprise Strategy", "System Architecture", "Delivery Oversight"],
    linkedin: "https://linkedin.com/in/shaikhmajhar",
    email: "contact@masglobalai.com",
  },
  {
    id: "ENG-02",
    name: "Mehraj Pathan",
    role: "Technical Lead",
    initials: "MP",
    accent: "from-indigo-600 to-violet-700",
    bio: "Specializes in high-throughput backend systems, cloud microservices, Next.js architecture, and AI pipelines.",
    location: "Hyderabad, India",
    experience: "4+ Years Exp",
    expertise: ["Next.js", "Spring Boot", "Multi-Cloud Infra"],
    linkedin: "https://linkedin.com",
    email: "contact@masglobalai.com",
  },
  {
    id: "ENG-03",
    name: "Ayaan Khan",
    role: "Frontend Engineer",
    initials: "AK",
    accent: "from-violet-600 to-purple-700",
    bio: "Passionate about responsive design systems, accessibility (WCAG AA), state management, and interaction performance.",
    location: "Hyderabad, India",
    experience: "3+ Years Exp",
    expertise: ["React 19", "Tailwind CSS", "Design Systems"],
    linkedin: "https://linkedin.com",
    email: "contact@masglobalai.com",
  },
  {
    id: "ENG-04",
    name: "Sara Ahmed",
    role: "Cloud & DevOps Engineer",
    initials: "SA",
    accent: "from-sky-600 to-blue-700",
    bio: "Experienced in Kubernetes orchestration, automated CI/CD deployment pipelines, and zero-downtime infrastructure.",
    location: "Hyderabad, India",
    experience: "4+ Years Exp",
    expertise: ["Kubernetes", "Docker", "Terraform & CI/CD"],
    linkedin: "https://linkedin.com",
    email: "contact@masglobalai.com",
  },
];

export default function TeamSection() {
  return (
    <section className="relative text-slate-300 px-4 sm:px-8 lg:px-16 py-20 lg:py-28 antialiased overflow-hidden border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-slate-900 pb-8 mb-16 gap-6 relative z-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Engineering Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-4 font-sans leading-[1.15]">
            The Technical Minds Behind <span className="text-slate-400">MAS Global AI</span>
          </h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xl">
            A multidisciplinary team of engineers, architects, and DevOps specialists delivering high-availability digital solutions.
          </p>
        </div>
        <div className="text-xs font-mono text-slate-400 tracking-wider bg-slate-900/60 px-3.5 py-1.5 rounded-lg border border-slate-800 shrink-0">
          Hyderabad Engineering Center
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-900/80 flex flex-col overflow-hidden shadow-xl"
          >
            {/* AVATAR BANNER */}
            <div className={`relative w-full h-40 shrink-0 flex items-center justify-center bg-gradient-to-br ${member.accent} border-b border-slate-800`}>
              <div className="h-20 w-20 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black tracking-wider text-white">
                  {member.initials}
                </span>
              </div>
              <div className="absolute top-3 left-3 font-mono text-[10px] text-white/70 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                {member.id}
              </div>
            </div>

            {/* MEMBER INFO */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-indigo-400">
                  {member.name}
                </h3>
                <p className="text-xs font-mono tracking-wider text-indigo-400 uppercase mt-0.5">
                  {member.role}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded border border-slate-800 bg-slate-950/60 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                    <MapPin className="h-3 w-3 text-indigo-400 shrink-0" /> {member.location}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded border border-slate-800 bg-slate-950/60 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                    <Briefcase className="h-3 w-3 text-indigo-400 shrink-0" /> {member.experience}
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap gap-1 border-t border-slate-800/80 pt-3">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-slate-800 bg-slate-950/40 px-2 py-0.5 text-[10px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <div className="flex gap-1.5">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-400 transition-colors hover:text-white hover:border-slate-700"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-400 transition-colors hover:text-white hover:border-slate-700"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[10px] text-indigo-400 font-mono font-semibold transition hover:text-indigo-300 gap-0.5"
                  >
                    CONSULT <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}