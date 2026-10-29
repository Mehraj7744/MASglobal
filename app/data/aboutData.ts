// data/aboutData.ts
// Install:

// aboutData.ts

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFramer,

  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiJavascript,
  SiJsonwebtokens,

  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase,

  SiDocker,
  SiGithubactions,
  SiLinux,
  SiNginx,

  SiTensorflow,

  SiFigma,
  SiBlender,
  SiCanvas,
  SiVercel,
  SiKubernetes,
  SiRedis,
  SiPostman,
  SiGit,
  SiPython,
  SiGraphql,
  SiPrisma,
  SiCypress,
  SiJest,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import {
  BrainCircuit,
  Cloud,
  Code2,
  ShieldCheck,
} from "lucide-react";
import { IconType } from "react-icons";

export const stats = [
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "40+",
    label: "Projects Delivered",
  },
  {
    number: "15+",
    label: "Business Clients",
  },
  {
    number: "24/7",
    label: "Technical Support",
  },
];

export const values = [
  {
    icon: Code2,
    title: "Scalable Software Engineering",
    desc: "We develop scalable applications, SaaS platforms, and modern business systems built for long-term performance.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation Solutions",
    desc: "From workflow automation to AI-powered integrations, we help businesses improve operational efficiency.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Secure cloud-native deployment pipelines, DevOps workflows, and infrastructure optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Delivery",
    desc: "Focused on usability, maintainability, transparency, and measurable business outcomes.",
  },
];

export const team = [
  {
    name: "Mazhar Hashmi",
    role: "Founder & Business Director",
    initials: "MH",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    name: "Mehraj Pathan",
    role: "Technical Lead",
    initials: "MP",
    accent: "from-indigo-600 to-purple-600",
  },
  {
    name: "Ayaan Khan",
    role: "Frontend Engineer",
    initials: "AK",
    accent: "from-purple-600 to-pink-600",
  },
  {
    name: "Sara Ahmed",
    role: "Cloud & DevOps Engineer",
    initials: "SA",
    accent: "from-cyan-600 to-blue-600",
  },
];

// Add this inside data/aboutData.ts

export const visionMission = [
  {
    title: "Our Vision",
    desc: "The vision of MAS Global AI is to build trusted, scalable, and intelligent AI-powered solutions that help businesses, institutes, startups, and enterprises automate operations, improve efficiency, and accelerate digital transformation.",
  },
  {
    title: "Our Mission",
    desc: "To deliver reliable software engineering, AI-powered automation, and cloud-based solutions that help organizations improve efficiency, customer experience, and long-term growth.",
  },


   


];

// Add inside data/aboutData.ts

export const faqs = [
  {
    question: "What services does MAS Global AI provide?",
    answer:
      "We provide software development, AI automation solutions, cloud infrastructure, UI/UX engineering, and digital transformation services for startups and businesses.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, growing businesses, and organizations looking to build scalable digital products and modern software systems.",
  },
  {
    question: "Do you develop custom software solutions?",
    answer:
      "Yes. We build custom web applications, SaaS platforms, admin systems, dashboards, and automation tools tailored to business requirements.",
  },
  {
    question: "Do you provide AI integration services?",
    answer:
      "Yes. We help businesses integrate AI-powered workflows, automation systems, and intelligent solutions into existing platforms and processes.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "Our team works with modern technologies including React, Next.js, Node.js, Spring Boot, cloud platforms, databases, and DevOps infrastructure.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We provide technical support, maintenance, performance optimization, and long-term scalability support for deployed systems.",
  },
];

// Add inside data/aboutData.ts

export const founder = {
  name: "Mazhar Hashmi",
  role: "Founder & Business Director",
  image: "/founder.webp", // replace with your image
  linkedin: "https://www.linkedin.com/in/shaikhmajhar?",
  bio: "Mazhar Hashmi founded MAS Global AI with a vision to build scalable software systems, intelligent automation platforms, and modern digital solutions that help businesses grow through technology.",
};

export const companyMission = {
  title: "Our Mission",
  desc: "To help businesses adopt scalable technologies through modern software engineering, AI-powered automation, cloud infrastructure, and practical digital transformation solutions.",
};

export const engineeringExpertise = [
  "Enterprise Software Development",
  "AI & Workflow Automation",
  "Cloud Infrastructure & DevOps",
  "Modern UI/UX Engineering",
  "Scalable SaaS Platforms",
  "API & Backend Architecture",
  "Performance Optimization",
  "Automation & System Integration",
];

// Replace old technologies array in aboutData.ts

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

export const technologies: Record<string, TechItem[]> = {  frontend: [
    {
      name: "React",
      icon: SiReact,
      color: "text-cyan-400",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-400",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-sky-400",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "text-violet-400",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      color: "text-pink-400",
    },
  ],
testing: [
    {
      name: "Jest",
      icon: SiJest,
      color: "text-red-500",
    },
    {
      name: "Cypress",
      icon: SiCypress,
      color: "text-emerald-400",
    },
 
  ],

  backend: [
     {
      name: "Prisma",
      icon: SiPrisma,
      color: "text-slate-200",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      color: "text-pink-600",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "text-blue-500",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "text-green-500",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-slate-300",
    },
    {
      name: "Spring Boot",
      icon: SiSpringboot,
      color: "text-green-400",
    },
    {
      name: "Java",
      icon: SiJavascript,
      color: "text-orange-400",
    },
    {
      name: "JWT Auth",
      icon: SiJsonwebtokens,
      color: "text-yellow-400",
    },
  ],

  database: [
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "text-blue-400",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "text-sky-500",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "text-yellow-400",
    },
  ],
    tools: [
       {
      name: "Git",
      icon: SiGit,
      color: "text-orange-500",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "text-orange-500",
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      color: "text-blue-500",
    },
    {
      name: "Redis",
      icon: SiRedis,
      color: "text-red-600",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "text-white",
    },
  ],


  cloud: [
   
    {
      name: "Docker",
      icon: SiDocker,
      color: "text-blue-400",
    },
    {
      name: "GitHub Actions",
      icon: SiGithubactions,
      color: "text-indigo-400",
    },
    {
      name: "Linux",
      icon: SiLinux,
      color: "text-yellow-300",
    },
    {
      name: "Nginx",
      icon: SiNginx,
      color: "text-green-400",
    },
  ],

  ai: [
    {
      name: "OpenAI",
      icon: RiOpenaiFill,
      color: "text-emerald-400",
    },
    {
      name: "TensorFlow",
      icon: SiTensorflow,
      color: "text-orange-500",
    },
  ],

  design: [
    {
      name: "Figma",
      icon: SiFigma,
      color: "text-pink-400",
    },
    
      {
      name: "Blender",
      icon: SiBlender,
      color: "text-orange-400",
    },
    {
      name: "Canva",
      icon: SiCanvas,
      color: "text-blue-400",
    },
  ],
};