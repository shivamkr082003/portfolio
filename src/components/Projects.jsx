import React from "react";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import drawImg from "../assets/draw.jpg";
import aromaImg from "../assets/aroma.jpg";
import brainlyImg from "../assets/brainly.jpg";
import studynotionImg from "../assets/studynotion.jpg";
import aivideoImg from "../assets/aivideo.jpg";
import callanalyticsImg from "../assets/callanalytics.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Draw – Real-Time Collaborative Whiteboard",
      description:
        "Collaborative whiteboard canvas in a Turborepo monorepo with dedicated WebSocket microservices, Redis Pub/Sub cross-server sync, and Redis cache-aside metadata queries with PostgreSQL and Prisma.",
      image: drawImg,
      tags: [
        "Next.js 15",
        "TypeScript",
        "Express.js",
        "WebSocket",
        "Redis",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "Turborepo",
      ],
      github: "https://github.com/shivamkr082003/draw-app",
      live: "https://drawapp-b3b3.onrender.com",
    },
    {
      title: "Aroma – Multi-Agent AI Platform",
      description:
        "Production-ready multi-agent AI platform built with FastAPI and Next.js, featuring conversational AI, document RAG pipelines, Qdrant semantic vector search, Deepgram voice processing, and Redis caching.",
      image: aromaImg,
      tags: [
        "FastAPI",
        "Next.js",
        "Python",
        "TypeScript",
        "LangChain",
        "Qdrant",
        "Redis",
        "Deepgram",
        "Docker",
      ],
      github: "https://github.com/shivamkr082003/aroma-multiagent-platform",
    },
    {
      title: "Brainly – Second Brain & Knowledge Hub",
      description:
        "Full-stack knowledge management application enabling users to collect, organize, and share content from Twitter, YouTube, and web documents with JWT authentication and responsive React UI.",
      image: brainlyImg,
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      github: "https://github.com/shivamkr082003/Brainly",
      live: "https://brainly-liart.vercel.app/",
    },
    {
      title: "StudyNotion – Ed-Tech Platform",
      description:
        "Full-stack MERN online education platform enabling instructors to create and manage courses and students to consume and rate interactive educational content with JWT authentication.",
      image: studynotionImg,
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs",
        "JWT",
      ],
      github: "https://github.com/shivamkr082003/Study-Notion",
      live: "https://study-notion-2ivz.vercel.app/",
    },
    {
      title: "AI Video Assistant & Meeting RAG Pipeline",
      description:
        "Intelligent video intelligence pipeline for local videos and YouTube URLs featuring automated transcription (English & Hinglish), structured meeting summarization, and interactive RAG Q&A via a Streamlit interface.",
      image: aivideoImg,
      tags: [
        "Python",
        "Streamlit",
        "LangChain",
        "RAG Pipeline",
        "Whisper",
        "OpenAI API",
      ],
      github: "https://github.com/shivamkr082003/AI-Video-Intelligence-Assistant",
    },
    {
      title: "AI Call Analytics & Intelligence Engine",
      description:
        "Call intelligence and analytics engine with a FastAPI backend, ChromaDB persistent vector retrieval for historical call search, GPT-4o sentiment classification, and a React trends dashboard.",
      image: callanalyticsImg,
      tags: [
        "FastAPI",
        "Python",
        "React",
        "LangChain",
        "ChromaDB",
        "OpenAI API",
        "Docker Compose",
      ],
      github: "https://github.com/shivamkr082003/Omni-Agentic-Call-Intelligence",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <SectionHeading
          index="03"
          title="Work"
          description={{
            heading: "Featured Projects",
            body: "A showcase of distributed systems, real-time microservices, and multi-agent GenAI architectures I've engineered.",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={index}
              delay={(index % 3) * 100}
              className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between border border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900/60"
            >
              <div>
                <div className="relative overflow-hidden h-48 bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                      className="p-2 bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md rounded-lg text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Project"
                        className="p-2 bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md rounded-lg text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <a
            href="https://github.com/shivamkr082003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;


