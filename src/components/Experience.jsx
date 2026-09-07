import React from "react";
import { Briefcase, GraduationCap, Trophy, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const Experience = () => {
  const experiences = [
    {
      company: "Sirhaana (Capsules AI)",
      role: "Technical Intern (AI Systems)",
      period: "Aug 2026 – Present",
      location: "Remote",
      type: "Internship",
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
      type: "Internship",
      highlights: [
        "Architected the core social activity feed using React.js custom hooks, optimistic UI updates, and memoization, cutting unnecessary component re-renders by 40% and reducing initial page load time.",
        "Engineered full-stack session registration and feedback workflows with Prisma ORM and PostgreSQL, enforcing strict schema validation and RBAC across REST API endpoints.",
        "Containerized multi-service architecture using Docker and built an automated GitHub Actions CI/CD pipeline for zero-downtime deployment to AWS Lightsail.",
        "Implemented a resilient API layer with Axios interceptors, exponential backoff, and retry handling, reducing user-facing error rates by 30%; integrated PostHog analytics for product telemetry.",
      ],
      technologies: ["React.js", "Prisma ORM", "PostgreSQL", "Docker", "AWS Lightsail", "GitHub Actions", "PostHog", "REST APIs"],
    },
  ];

  const education = [
    {
      institution: "Indian Institute of Information Technology (IIIT), Ranchi",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Aug 2023 – May 2027",
      grade: "CGPA: 8.34 / 10",
      location: "Ranchi, India",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "System Design",
      ],
    },
  ];

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

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="02"
          title="Journey"
          description={{
            heading: "Experience & Education",
            body: "My professional journey, academic background, and competitive programming milestones.",
          }}
        />

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
            >
              Work Experience
            </h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Reveal
                key={idx}
                delay={idx * 100}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 dark:border-slate-700/60 hover:border-blue-200 dark:hover:border-blue-900/60 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5 bg-gray-200/70 dark:bg-slate-700 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-200/70 dark:bg-slate-700 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-300">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-slate-700">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
              >
                Education
              </h3>
            </div>

            {education.map((edu, idx) => (
              <Reveal
                key={idx}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 dark:border-slate-700/60 h-full flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 font-semibold px-3 py-1 rounded-full">
                      {edu.grade}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>

                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                    Core Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-xs rounded-md bg-gray-200/70 dark:bg-slate-700 text-gray-700 dark:text-gray-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Achievements & Certifications */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-xl">
                <Trophy className="w-6 h-6" />
              </div>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
              >
                Achievements & Honors
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {achievements.map((ach, idx) => (
                <Reveal
                  key={idx}
                  delay={idx * 80}
                  className="bg-gray-50 dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-slate-700/60 hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {ach.title}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 flex-shrink-0">
                      {ach.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {ach.description}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h4>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4 border border-gray-100 dark:border-slate-700/60"
                >
                  <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {cert.name}
                  </h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

