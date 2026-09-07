import React from "react";
import { Code2, Database, Bot, Cloud, Terminal, Cpu, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const About = () => {
  const skillCategories = [
    {
      icon: <Bot className="w-7 h-7" />,
      title: "AI & Generative Systems",
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
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Backend & Systems",
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
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Frontend Engineering",
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
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: "Cloud, DevOps & Tools",
      skills: [
        "Docker & Docker Compose",
        "AWS Lightsail",
        "GitHub Actions CI/CD",
        "Vercel & Render",
        "Git & GitHub",
        "Postman & Linux",
        "Turborepo Monorepos",
      ],
      color: "from-orange-500 to-rose-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="01"
          title="About"
          description={{
            heading: "About Me",
            body: "Full-Stack & AI Engineer pursuing B.Tech in Computer Science and Engineering at IIIT Ranchi, passionate about building distributed real-time microservices, event-driven architectures, and stateful multi-agent GenAI systems.",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <Reveal>
            <div className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-2xl p-1 shadow-xl">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8">
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  My Engineering Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I specialize in architecting end-to-end full-stack applications with high-throughput backend services and modern AI workflows. From orchestrating multi-agent DAGs with persistent memory using LangGraph and FastAPI to engineering real-time collaborative canvases with Redis Pub/Sub deduplication and WebSockets, I love solving complex engineering challenges.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  With a solid foundation in Data Structures & Algorithms (700+ problems solved across LeetCode, CodeChef, and GeeksforGeeks, and peak LeetCode 1687) and production internship experience at Sirhaana (Capsules AI) and Orion Eduverse, I prioritize writing clean, scalable, and type-safe code with automated CI/CD and containerization.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="space-y-6">
            {[
              {
                color: "bg-blue-500",
                title: "Distributed & Real-Time Systems",
                body: "Microservices, WebSockets, Redis Pub/Sub brokers with deduplication, and cache-aside patterns.",
              },
              {
                color: "bg-purple-500",
                title: "Stateful GenAI & Agentic Workflows",
                body: "Multi-agent orchestration DAGs, hybrid RAG pipelines, sub-second STT/TTS voice streams, and vector search.",
              },
              {
                color: "bg-emerald-500",
                title: "Production Engineering & DevOps",
                body: "Docker containerization, automated GitHub Actions CI/CD pipelines, AWS Lightsail deployment, and telemetry.",
              },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100}>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900/60 hover:-translate-y-0.5 transition-all duration-300">
                  <div
                    className={`w-4 h-4 mt-1 ${item.color} rounded-full flex-shrink-0`}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Technical Skills Categorized */}
        <Reveal className="mb-8 text-center">
          <h3
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3"
          >
            Technical Arsenal
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Languages: Python, TypeScript, JavaScript (ES6+), C, C++, SQL
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full">
                <div>
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${cat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs rounded-md bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;