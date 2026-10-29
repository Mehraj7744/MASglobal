import React from 'react';
import Link from 'next/link';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiFramer,

  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiJsonwebtokens,
  SiGo,
  SiJavascript,
  SiFastapi,

  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiMysql,
  SiPrisma,
  SiFirebase,
  SiSqlite,

  
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiVercel,
  SiTerraform,
  SiLinux,
  SiNginx,

  SiTensorflow,
  SiChainlink,
  SiPython,
  SiHuggingface,
  SiPandas,
  SiNumpy,
  SiScikitlearn,

  SiFigma,
 
  SiSketch,
  SiStorybook,
  SiDribbble,
  SiMui,
  SiCss,
  SiGooglephotos,
  SiCloudera,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

const bentoStack = [
  {
    title: "Frontend Architecture",
    description:
      "Single-page apps, state engines, and hyper-fluid interface design.",
    items: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Redux", icon: SiRedux, color: "text-violet-400" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
      { name: "Zustand", icon: SiReact, color: "text-orange-300" },
    ],
  },

  {
    title: "Backend Engineering",
    description:
      "Robust architectures, microservices, and secure API lifecycles.",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-300" },
      { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "text-yellow-400" },
      { name: "Go", icon: SiGo, color: "text-cyan-400" },
      { name: "Java", icon: SiJavascript, color: "text-orange-400" },
      { name: "REST APIs", icon: SiFastapi, color: "text-emerald-400" },
    ],
  },

  {
    title: "Data Systems",
    description:
      "Deterministic, highly cached relational and document stores.",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "MySQL", icon: SiMysql, color: "text-sky-500" },
      { name: "Prisma", icon: SiPrisma, color: "text-emerald-300" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
      { name: "SQLite", icon: SiSqlite, color: "text-blue-300" },
    ],
  },

  {
    title: "Cloud & Infrastructure",
    description:
      "Automated continuous deployment setups and high-availability orchestration.",
    items: [
      { name: "AWS", icon: SiCloudera, color: "text-orange-400" },
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-indigo-400" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
      { name: "Linux", icon: SiLinux, color: "text-yellow-300" },
      { name: "Nginx", icon: SiNginx, color: "text-green-400" },
    ],
  },

  {
    title: "AI & Automation",
    description:
      "AI-powered workflows, LLM integrations, and intelligent automation systems.",
    items: [
      { name: "OpenAI", icon: RiOpenaiFill, color: "text-emerald-400" },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
      { name: "LangChain", icon: SiChainlink, color: "text-cyan-400" },
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "Hugging Face", icon: SiHuggingface, color: "text-yellow-300" },
      { name: "Pandas", icon: SiPandas, color: "text-indigo-300" },
      { name: "NumPy", icon: SiNumpy, color: "text-blue-300" },
      { name: "Scikit Learn", icon: SiScikitlearn, color: "text-orange-400" },
    ],
  },

  {
    title: "UI/UX & Product Design",
    description:
      "Human-centered interfaces, responsive systems, and scalable design workflows.",
    items: [
      { name: "Figma", icon: SiFigma, color: "text-pink-400" },
      { name: "Adobe XD", icon: SiGooglephotos, color: "text-violet-400" },
      { name: "Responsive Design", icon: SiCss, color: "text-blue-400" },
      { name: "Wireframing", icon: SiSketch, color: "text-yellow-400" },
      { name: "Design Systems", icon: SiStorybook, color: "text-pink-500" },
      { name: "Prototyping", icon: SiDribbble, color: "text-red-400" },
      { name: "Material UI", icon: SiMui, color: "text-sky-400" },
    ],
  },
];

const processSteps = [
  { id: "01", name: "Discover", desc: "Deep diving into product market fit, architecture constraints, and data strategy vectors." },
  { id: "02", name: "Define", desc: "Setting system entities, interface typography frameworks, and secure routing matrices." },
  { id: "03", name: "Design", desc: "Crafting highly aesthetic interactive prototypes and high-fidelity production wireframes." },
  { id: "04", name: "Build", desc: "Writing optimized Next.js engines, spring data structures, and continuous action runs." },
  { id: "05", name: "Launch", desc: "Executing infrastructure test sweeps, automated docker builds, and seamless production edge caching." },
];

export default function CaseStudyShowcase() {
  return (
    <section className="relative min-h-screen text-slate-300 px-4 sm:px-8 lg:px-16 py-12 lg:py-24 antialiased overflow-hidden">
      
      {/* GLOWING ORB DECORATION */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none" />

      {/* MAIN TWO-COLUMN SPLIT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24">
        
        {/* LEFT COLUMN: HERO HEADLINE & PROCESS TIMELINE */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-indigo-400 font-mono text-xs tracking-wider uppercase">
              Engineering Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mt-4 font-sans leading-[1.15]">
              From concept <br />
              to <span className="text-slate-400">production ecosystem.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm text-slate-400 leading-relaxed max-w-md">
              We leverage an enterprise-tested stack to design, construct, and scale reliable cloud architectures and intelligent applications.
            </p>

            {/* PROCESS TIMELINE */}
            <div className="mt-12 sm:mt-16 relative border-l border-slate-900 ml-3 space-y-8 sm:space-y-10">
              {processSteps.map((step) => (
                <div key={step.id} className="relative pl-6 sm:pl-8 group">
                  {/* TIMELINE POINT */}
                  <div className="absolute -left-[13px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-slate-800 bg-[#050508] text-[10px] font-mono font-medium text-slate-400 transition-colors group-hover:border-blue-500 group-hover:text-white">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white transition-colors group-hover:text-blue-400">
                      {step.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-16 pt-6 border-t border-slate-900 text-[10px] font-mono tracking-wider text-slate-600 uppercase">
            &mdash; ARCHITECTED FOR RESILIENCE. TESTED AT SCALE.
          </div>
        </div>

        {/* RIGHT COLUMN: BENTO INTERACTIVE SYSTEM DASHBOARD */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-4 block">
            Approved Technology Stacks:
          </div>

          {/* RESPONSIVE BENTO GRID CONTAINER */}
          <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-4">
            {bentoStack.map((block, i) => (
              <div 
                key={i}
                className="group rounded-2xl border border-slate-900 bg-slate-950/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/10 flex flex-col justify-between"
              >
                <div>
                  {/* METADATA MODULE SPEC */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-7 w-7 rounded-lg border border-slate-900 bg-slate-900/50 flex items-center justify-center text-xs text-blue-400 shadow-inner group-hover:border-slate-800 transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-wide text-white">
                        {block.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-6">
                    {block.description}
                  </p>
                </div>

                {/* TECH MODULE MINI PILLS LIST */}
                <div className="grid grid-cols-2 gap-2 border-t border-slate-900/60 pt-4">
                  {block.items.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div 
                        key={tech.name}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-slate-900/30 bg-slate-950/20 text-slate-400 group-hover:bg-slate-950/60 transition-colors min-w-0"
                      >
                        <Icon className={`text-xs shrink-0 ${tech.color}`} />
                        <span className="text-[10px] font-medium tracking-wide truncate text-slate-400 group-hover:text-slate-200">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* SYSTEM OVERALL TECH ACCENT BOTTOM PANEL */}
          <div className="w-full rounded-2xl border border-slate-900 bg-gradient-to-r from-slate-950 via-slate-900/30 to-slate-950 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
            <span className="text-xs font-mono text-slate-400">
              Custom stacks designed for high concurrency and strict data compliance.
            </span>
            <Link
              href="/contact"
              className="text-xs font-mono text-indigo-400 font-semibold hover:text-indigo-300 transition-colors flex items-center gap-1 self-end sm:self-auto"
            >
              CONSULT AN ARCHITECT <span className="text-[10px]">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}