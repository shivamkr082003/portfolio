import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import cineverseImg from "../assets/cineverse.jpg";
import drawImg from "../assets/draw.jpg";
import aromaImg from "../assets/aroma.jpg";
import brainlyImg from "../assets/brainly.jpg";
import studynotionImg from "../assets/studynotion.jpg";
import aivideoImg from "../assets/aivideo.jpg";
import callanalyticsImg from "../assets/callanalytics.jpg";

const projects = [
  {
    title: "Cineverse",
    subtitle: "Production-grade movie ticket booking platform",
    description:
      "BookMyShow-style platform with real-time seat selection over Socket.io backed by Redis TTL locks, atomic MongoDB booking transactions, Stripe payments, OTP email verification, QR tickets and a role-based admin ecosystem with revenue analytics.",
    image: cineverseImg,
    tags: ["React 18", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "Socket.io", "Stripe", "Docker", "Vitest", "k6"],
    metrics: [
      { value: "8.5×", label: "faster p95 with Redis cache-aside" },
      { value: "592→70ms", label: "p95 latency under mixed load" },
      { value: "0", label: "failed requests across k6 load tests" },
    ],
    github: "https://github.com/shivamkr082003/Ticket-Booking",
    live: "https://cineverse-eight-theta.vercel.app",
  },
  {
    title: "Draw",
    subtitle: "Real-time collaborative whiteboard",
    description:
      "Collaborative whiteboard canvas in a Turborepo monorepo with dedicated WebSocket microservices, Redis Pub/Sub cross-server sync, and Redis cache-aside metadata queries with PostgreSQL and Prisma.",
    image: drawImg,
    tags: ["Next.js 15", "TypeScript", "Express.js", "WebSocket", "Redis", "PostgreSQL", "Prisma", "Docker", "Turborepo"],
    github: "https://github.com/shivamkr082003/draw-app",
    live: "https://drawapp-b3b3.onrender.com",
  },
  {
    title: "Aroma",
    subtitle: "Multi-agent AI platform",
    description:
      "Production-ready multi-agent AI platform built with FastAPI and Next.js, featuring conversational AI, document RAG pipelines, Qdrant semantic vector search, Deepgram voice processing, and Redis caching.",
    image: aromaImg,
    tags: ["FastAPI", "Next.js", "Python", "TypeScript", "LangChain", "Qdrant", "Redis", "Deepgram", "Docker"],
    github: "https://github.com/shivamkr082003/aroma-multiagent-platform",
  },
  {
    title: "Brainly",
    subtitle: "Second brain & knowledge hub",
    description:
      "Full-stack knowledge management application enabling users to collect, organize, and share content from Twitter, YouTube, and web documents with JWT authentication and responsive React UI.",
    image: brainlyImg,
    tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/shivamkr082003/Brainly",
    live: "https://brainly-liart.vercel.app/",
  },
  {
    title: "StudyNotion",
    subtitle: "Ed-tech platform",
    description:
      "Full-stack MERN online education platform enabling instructors to create and manage courses and students to consume and rate interactive educational content with JWT authentication.",
    image: studynotionImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "JWT"],
    github: "https://github.com/shivamkr082003/Study-Notion",
    live: "https://study-notion-2ivz.vercel.app/",
  },
  {
    title: "AI Video Assistant",
    subtitle: "Meeting RAG pipeline",
    description:
      "Intelligent video intelligence pipeline for local videos and YouTube URLs featuring automated transcription (English & Hinglish), structured meeting summarization, and interactive RAG Q&A via a Streamlit interface.",
    image: aivideoImg,
    tags: ["Python", "Streamlit", "LangChain", "RAG Pipeline", "Whisper", "OpenAI API"],
    github: "https://github.com/shivamkr082003/AI-Video-Intelligence-Assistant",
  },
  {
    title: "Call Intelligence",
    subtitle: "AI call analytics engine",
    description:
      "Call intelligence and analytics engine with a FastAPI backend, ChromaDB persistent vector retrieval for historical call search, GPT-4o sentiment classification, and a React trends dashboard.",
    image: callanalyticsImg,
    tags: ["FastAPI", "Python", "React", "LangChain", "ChromaDB", "OpenAI API", "Docker Compose"],
    github: "https://github.com/shivamkr082003/Omni-Agentic-Call-Intelligence",
  },
];

const ProjectLinks = ({ project }) => (
  <div className="flex flex-wrap items-center gap-2.5">
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} live demo`}
        className="btn-primary group/link inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold"
      >
        Live demo
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </a>
    )}
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} source code`}
      className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold text-fg hover:bg-surface-2 transition-colors"
    >
      <Github className="w-4 h-4" /> Source
    </a>
  </div>
);

const Tags = ({ tags, max = tags.length }) => (
  <div className="flex flex-wrap gap-2">
    {tags.slice(0, max).map((tag) => (
      <span key={tag} className="text-sm font-medium px-3 py-1 rounded-lg bg-surface-2 border border-line text-muted">
        {tag}
      </span>
    ))}
    {tags.length > max && (
      <span className="text-sm font-semibold px-2 py-1 text-subtle">+{tags.length - max}</span>
    )}
  </div>
);

const Preview = ({ project, className = "" }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-line bg-surface-2 ${className}`}>
    <img
      src={project.image}
      alt={`${project.title} — ${project.subtitle}`}
      loading="lazy"
      className="h-full w-full aspect-[16/10] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

const Projects = () => {
  const [hero, ...rest] = projects;
  const featured = rest.slice(0, 2);
  const others = rest.slice(2);

  return (
    <section id="projects" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full opacity-30 blur-[120px] bg-accent-2" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="03"
          title="Selected work"
          heading="Things I've"
          accent="built & shipped."
          body="Distributed systems, real-time microservices and multi-agent GenAI architectures — each one deployed, tested and documented."
        />

        {/* Flagship project */}
        <Reveal>
          <Spotlight className="group p-4 md:p-6">
            <Preview project={hero} />
            <div className="grid lg:grid-cols-12 gap-8 p-3 md:p-5 pt-8">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 text-xs font-bold text-white">
                    ★ Flagship
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">
                    CI · Vitest · k6 load-tested
                  </span>
                </div>
                <h3 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] text-fg">
                  {hero.title}
                </h3>
                <p className="mt-2 text-xl md:text-2xl font-semibold text-gradient inline-block">
                  {hero.subtitle}
                </p>
                <p className="mt-5 text-lg text-muted leading-relaxed">{hero.description}</p>
                <div className="mt-6">
                  <Tags tags={hero.tags} />
                </div>
                <div className="mt-8">
                  <ProjectLinks project={hero} />
                </div>
              </div>
              <div className="lg:col-span-5 grid gap-3 content-start">
                {hero.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-line bg-surface-2/70 p-5">
                    <div className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] text-gradient">
                      {m.value}
                    </div>
                    <div className="mt-1 text-base font-medium text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Spotlight>
        </Reveal>

        {/* Featured pair */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {featured.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 100}>
              <Spotlight className="group h-full p-4 md:p-5 flex flex-col">
                <Preview project={project} />
                <div className="flex flex-1 flex-col p-3 pt-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-[-0.045em] text-fg">
                      {project.title}
                    </h3>
                    <span className="text-sm font-bold text-subtle">0{idx + 2}</span>
                  </div>
                  <p className="mt-1 text-lg font-semibold text-gradient inline-block self-start">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-base md:text-[17px] text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <Tags tags={project.tags} max={6} />
                  </div>
                  <div className="mt-auto pt-8">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        {/* More projects */}
        <Reveal className="mt-20 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] text-fg">
            More <span className="text-gradient">projects</span>
          </h3>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((project, idx) => (
            <Reveal key={project.title} delay={(idx % 4) * 80}>
              <Spotlight className="group h-full p-3 flex flex-col">
                <Preview project={project} />
                <div className="flex flex-1 flex-col p-3 pt-5">
                  <h3 className="text-xl font-bold tracking-[-0.03em] text-fg">{project.title}</h3>
                  <p className="text-sm font-semibold text-accent">{project.subtitle}</p>
                  <p className="mt-3 text-[15px] text-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-5 flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3.5 py-2 text-sm font-semibold text-fg hover:bg-surface-2 transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="inline-flex items-center gap-1 rounded-full bg-fg text-bg px-3.5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        Live <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href="https://github.com/shivamkr082003"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-7 py-4 text-base font-semibold text-fg hover:bg-surface-2 transition-colors"
          >
            <Github className="w-5 h-5" />
            Explore everything on GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
