import React from "react";
import { GraduationCap, Trophy, Award, Calendar, MapPin, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

const experiences = [
  {
    company: "Sirhaana (Capsules AI)",
    role: "Technical Intern (AI Systems)",
    period: "Aug 2026 – Present",
    location: "Remote",
    current: true,
    highlights: [
      "Architected an end-to-end Multimodal RAG pipeline matching room photos with pre-embedded inventory items via vector similarity search, enabling sub-second retrieval.",
      "Implemented incremental vector upserts in the vector database for dynamic catalog updates, eliminating full re-indexing overhead and supporting scale.",
      "Engineered a stateful conversational GenAI chatbot using LangGraph to orchestrate multi-step LLM reasoning over retrieved visual contexts and item metadata.",
    ],
    technologies: ["LangGraph", "RAG", "Vector Search", "Python", "FastAPI", "Multimodal AI"],
  },
  {
    company: "Orion Eduverse",
    role: "Full Stack Developer Intern",
    period: "Feb 2026 – Apr 2026",
    location: "Remote",
    highlights: [
      "Architected the core social activity feed using React.js custom hooks, optimistic UI updates, and memoization, cutting unnecessary component re-renders by 40% and reducing initial page load time.",
      "Engineered full-stack session registration and feedback workflows with Prisma ORM and PostgreSQL, enforcing strict schema validation and RBAC across REST API endpoints.",
      "Containerized multi-service architecture using Docker and built an automated GitHub Actions CI/CD pipeline for zero-downtime deployment to AWS Lightsail.",
      "Implemented a resilient API layer with Axios interceptors, exponential backoff, and retry handling, reducing user-facing error rates by 30%; integrated PostHog analytics for product telemetry.",
    ],
    technologies: ["React.js", "Prisma ORM", "PostgreSQL", "Docker", "AWS Lightsail", "GitHub Actions", "PostHog", "REST APIs"],
  },
];

const education = {
  institution: "Indian Institute of Information Technology (IIIT), Ranchi",
  degree: "B.Tech in Computer Science and Engineering",
  period: "Aug 2023 – May 2027",
  grade: "8.34",
  location: "Ranchi, India",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "System Design",
  ],
};

const achievements = [
  {
    title: "700+ Algorithmic Problems Solved",
    description: "Solved across LeetCode, CodeChef, and GeeksforGeeks with a peak LeetCode rating of 1687.",
    tag: "Competitive Programming",
  },
  {
    title: "Global Rank 1406 / 34,424 in LeetCode Biweekly 180",
    description: "Secured top 4% standing globally in competitive programming contest.",
    tag: "Top 4% Global",
  },
  {
    title: "Google India's The Big Code Qualifier",
    description: "Shortlisted for prestigious national-level technical hiring challenges.",
    tag: "National Qualifier",
  },
];

const certifications = [
  {
    name: "Full-Stack Web Development",
    issuer: "Comprehensive certification covering React.js, Node.js, REST API architecture, and microservices workflows.",
  },
  {
    name: "Full-Stack Web Developer Intern",
    issuer: "Orion Eduverse (Feb 2026 – Apr 2026)",
  },
  {
    name: "Technical Intern (AI Systems)",
    issuer: "Sirhaana (Capsules AI) (Aug 2026 – Present)",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="02"
          title="Experience"
          heading="Where I've"
          accent="made an impact."
          body="My professional journey, academic background, and competitive programming milestones."
        />

        {/* Work timeline */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-[11px] md:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent" />
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <Reveal key={exp.company} delay={idx * 100} className="relative">
                <span
                  className={`absolute -left-8 md:-left-12 top-9 grid place-items-center w-6 h-6 md:w-10 md:h-10 rounded-full border-4 border-bg ${
                    exp.current
                      ? "bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_24px_var(--accent)]"
                      : "bg-surface-2"
                  }`}
                />
                <Spotlight className="p-7 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-fg">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full bg-emerald-500/15 text-emerald-500 px-3 py-1 text-xs font-bold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-lg md:text-xl font-semibold text-gradient inline-block">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm font-medium text-muted">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3.5 py-1.5">
                        <Calendar className="w-4 h-4" /> {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3.5 py-1.5">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex gap-3.5 text-base md:text-[17px] text-muted leading-relaxed">
                        <span className="mt-1 grid place-items-center w-5 h-5 shrink-0 rounded-full bg-accent/15 text-accent">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-line flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-semibold px-3 py-1.5 rounded-lg bg-surface-2 border border-line text-fg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education + achievements bento */}
        <div className="mt-24 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Spotlight className="h-full p-8 md:p-9 overflow-hidden">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-fg">
                  <GraduationCap className="w-5 h-5 text-accent" /> Education
                </div>
                <span className="text-sm font-medium text-subtle">{education.period}</span>
              </div>

              <div className="mt-10 flex items-end gap-3">
                <span className="text-8xl font-extrabold tracking-[-0.06em] text-gradient leading-none">
                  {education.grade}
                </span>
                <span className="mb-2 text-base font-semibold text-muted">/ 10 CGPA</span>
              </div>

              <h4 className="mt-8 text-xl font-bold tracking-[-0.02em] text-fg">
                {education.degree}
              </h4>
              <p className="mt-1 text-base text-muted">{education.institution}</p>

              <div className="mt-8 pt-6 border-t border-line">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-subtle mb-4">
                  Core coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-sm font-medium px-3 py-1.5 rounded-lg bg-surface-2 border border-line text-muted"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Spotlight>
          </Reveal>

          <div className="lg:col-span-7 grid gap-4">
            <Reveal delay={100}>
              <Spotlight className="p-8 md:p-9">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-fg mb-7">
                  <Trophy className="w-5 h-5 text-accent-3" /> Achievements & honors
                </div>
                <div className="space-y-6">
                  {achievements.map((ach) => (
                    <div key={ach.title} className="grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-fg leading-snug">{ach.title}</h4>
                        <p className="mt-1 text-base text-muted">{ach.description}</p>
                      </div>
                      <span className="self-start text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-accent/15 to-accent-2/15 text-accent border border-accent/20 whitespace-nowrap">
                        {ach.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </Spotlight>
            </Reveal>

            <Reveal delay={200}>
              <Spotlight className="p-8 md:p-9">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-fg mb-7">
                  <Award className="w-5 h-5 text-accent-2" /> Certifications
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  {certifications.map((cert) => (
                    <div key={cert.name}>
                      <h5 className="text-base font-bold text-fg">{cert.name}</h5>
                      <p className="mt-1.5 text-sm text-muted leading-relaxed">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
