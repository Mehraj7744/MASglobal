"use client";

import LogoLoop from "./LogoLoop";
import React, { useMemo } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiSpringboot,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiTensorflow,
  SiPytorch,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

const techLogos = [
  { node: <SiReact className="w-8 h-8 text-sky-400" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="w-8 h-8 text-foreground" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiAngular className="w-8 h-8 text-red-600" />, title: "Angular", href: "https://angular.io" },
  { node: <SiTypescript className="w-8 h-8 text-blue-500" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="w-8 h-8 text-sky-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript className="w-8 h-8 text-yellow-400" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiNodedotjs className="w-8 h-8 text-green-500" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiSpringboot className="w-8 h-8 text-green-600" />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { node: <SiPython className="w-8 h-8 text-blue-400" />, title: "Python", href: "https://www.python.org" },
  { node: <SiMysql className="w-8 h-8 text-blue-500" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql className="w-8 h-8 text-sky-600" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb className="w-8 h-8 text-green-500" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiDocker className="w-8 h-8 text-sky-500" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiKubernetes className="w-8 h-8 text-blue-600" />, title: "Kubernetes", href: "https://kubernetes.io" },
  { node: <SiGit className="w-8 h-8 text-orange-500" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub className="w-8 h-8 text-foreground" />, title: "GitHub", href: "https://github.com" },
  { node: <SiGooglecloud className="w-8 h-8 text-blue-400" />, title: "Google Cloud", href: "https://cloud.google.com" },
  { node: <SiTensorflow className="w-8 h-8 text-orange-400" />, title: "TensorFlow", href: "https://www.tensorflow.org" },
  { node: <SiPytorch className="w-8 h-8 text-orange-600" />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <RiOpenaiFill className="w-8 h-8 text-teal-500" />, title: "OpenAI", href: "https://openai.com" },
];

const TechLogoMarquee = () => {
  const { firstRow, secondRow } = useMemo(() => {
    const half = Math.ceil(techLogos.length / 2);
    return {
      firstRow: techLogos.slice(0, half),
      secondRow: techLogos.slice(half),
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-20 md:py-28 font-sans">
      {/* Background Micro Grid Layer + Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.08] bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Heading Block Layout */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-3">
            <span>Technology Stack</span>
            <span aria-hidden="true">·</span>
            <span className="text-primary font-semibold">Core Frameworks</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Enterprise Technology Ecosystem
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            We leverage production-proven frameworks, AI model interfaces, cloud platforms, 
            and modern development stacks to engineer robust, high-performance digital systems.
          </p>
        </div>
      </div>

      {/* Full width marquee container */}
      <div className="relative mt-14 w-screen max-w-full overflow-hidden border-y border-border/80 bg-card/60 py-8 shadow-sm flex flex-col gap-6 md:gap-8 backdrop-blur-sm">
        
        {/* ROW 1: Running Left */}
        <div className="relative h-12 mx-5 flex items-center w-full touch-pan-x select-none">
          <LogoLoop
            logos={firstRow}
            speed={35}
            direction="left"
            logoHeight={32}
            gap={48}
            pauseOnHover={true}
            scaleOnHover={true}
          />
        </div>

        {/* ROW 2: Running Right */}
        <div className="relative h-12 mx-5 flex items-center w-full touch-pan-x select-none">
          <LogoLoop
            logos={secondRow}
            speed={35}
            direction="right"
            logoHeight={32}
            gap={48}
            pauseOnHover={true}
            scaleOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default TechLogoMarquee;