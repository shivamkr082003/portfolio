import React from "react";
import { Code2, Database, Bot, Cloud, Radio, Network, Rocket, MapPin, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

const skillCategories = [
  {
    icon: Bot,
    title: "AI & Generative Systems",
    gradient: "from-violet-500 to-fuchsia-500",
    skills: [
      "LangGraph",
      "LangChain",
      "RAG Pipelines",
      "Multi-Agent DAGs",
      "MCP",
      "Qdrant / ChromaDB / Pinecone",
      "Deepgram Nova-2 (STT/TTS)",
      "OpenAI API",
    ],
  },
  {
    icon: Database,
    title: "Backend & Systems",
    gradient: "from-fuchsia-500 to-pink-500",
    skills: [
      "Node.js",
      "FastAPI",
      "Express.js",
      "WebSockets",
      "Redis Pub/Sub & Caching",
      "PostgreSQL & Prisma ORM",
      "RESTful APIs",
      "JWT & RBAC",
    ],
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    gradient: "from-pink-500 to-orange-500",
    skills: [
      "Next.js 14/15",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn UI",
      "HTML5 / Modern CSS",
      "Responsive UI/UX",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud, DevOps & Tools",
    gradient: "from-orange-500 to-amber-500",
    skills: [
      "Docker & Docker Compose",
      "AWS Lightsail",
      "GitHub Actions CI/CD",
      "Vercel & Render",
      "Git & GitHub",
      "Postman & Linux",
      "Turborepo Monorepos",
    ],
  },
];

const focusAreas = [
  {
    icon: Radio,
    title: "Distributed & Real-Time Systems",
    body: "Microservices, WebSockets, Redis Pub/Sub brokers with deduplication, and cache-aside patterns.",
  },
  {
    icon: Network,
    title: "Stateful GenAI & Agentic Workflows",
    body: "Multi-agent orchestration DAGs, hybrid RAG pipelines, sub-second STT/TTS voice streams, and vector search.",
  },
  {
    icon: Rocket,
    title: "Production Engineering & DevOps",
    body: "Docker containerization, automated GitHub Actions CI/CD pipelines, AWS Lightsail deployment, and telemetry.",
  },
];

const languages = ["Python", "TypeScript", "JavaScript (ES6+)", "C", "C++", "SQL"];

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="01"
          title="About me"
          heading="Engineering that"
          accent="ships & scales."
          body="Full-Stack & AI Engineer pursuing B.Tech in Computer Science at IIIT Ranchi — passionate about distributed real-time microservices, event-driven architectures, and stateful multi-agent GenAI systems."
        />

        {/* Bento */}
        <div className="grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <Spotlight className="h-full p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gradient mb-6 inline-block">
                My journey
              </p>
              <p className="text-2xl md:text-[1.75rem] font-semibold leading-[1.35] tracking-[-0.02em] text-fg">
                I architect end-to-end products with high-throughput backends and
                modern AI workflows — from{" "}
                <span className="text-gradient">multi-agent DAGs with persistent memory</span>{" "}
                to{" "}
                <span className="text-gradient">real-time collaborative systems</span>{" "}
                built on Redis and WebSockets.
              </p>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                A strong DSA foundation (700+ problems, peak LeetCode 1687) and
                production internships at Sirhaana (Capsules AI) and Orion Eduverse
                taught me to write clean, scalable, type-safe code — shipped with
                CI/CD and containers.
              </p>
            </Spotlight>
          </Reveal>

          <Reveal delay={100} className="md:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl p-8 text-white bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 shadow-[0_30px_80px_-30px_rgb(192_38_211/0.6)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgb(255_255_255/0.35),transparent_55%)]" />
              <div className="absolute inset-0 bg-dots opacity-30 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
              <div className="relative flex h-full flex-col justify-between gap-12">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  Currently · Since Aug 2026
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-[-0.03em] leading-tight">
                    Technical Intern, AI Systems
                  </p>
                  <p className="mt-2 text-lg font-medium text-white/85">@ Sirhaana (Capsules AI)</p>
                </div>
              </div>
            </div>
          </Reveal>

          {focusAreas.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 100} className="md:col-span-2">
              <Spotlight className="h-full p-7">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 border border-line text-accent mb-6">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold tracking-[-0.02em] text-fg">{item.title}</h4>
                <p className="mt-3 text-base text-muted leading-relaxed">{item.body}</p>
              </Spotlight>
            </Reveal>
          ))}

          <Reveal className="md:col-span-3">
            <Spotlight className="h-full p-7 flex items-center gap-5">
              <div className="grid place-items-center w-12 h-12 shrink-0 rounded-2xl bg-surface-2 border border-line text-fg">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-fg">IIIT Ranchi · CSE</p>
                <p className="text-base text-muted">B.Tech 2023 – 2027 · CGPA 8.34</p>
              </div>
            </Spotlight>
          </Reveal>
          <Reveal delay={100} className="md:col-span-3">
            <Spotlight className="h-full p-7 flex items-center gap-5">
              <div className="grid place-items-center w-12 h-12 shrink-0 rounded-2xl bg-surface-2 border border-line text-fg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-fg">Ranchi, Jharkhand</p>
                <p className="text-base text-muted">India · Working remotely today</p>
              </div>
            </Spotlight>
          </Reveal>
        </div>

        {/* Technical arsenal */}
        <Reveal className="mt-28 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h3 className="text-4xl md:text-5xl font-bold tracking-[-0.045em] text-fg">
            Technical <span className="text-gradient">arsenal</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="text-sm font-semibold px-3.5 py-1.5 rounded-full border border-line-strong bg-surface text-fg"
              >
                {lang}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, index) => (
            <Reveal key={cat.title} delay={index * 100}>
              <Spotlight className="h-full p-7">
                <div className={`grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.gradient} text-white shadow-lg mb-6`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-fg mb-5">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-medium px-3 py-1.5 rounded-lg bg-surface-2 text-muted border border-line"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
