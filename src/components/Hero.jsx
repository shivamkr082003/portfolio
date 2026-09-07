import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  DownloadCloud,
} from "lucide-react";

const RESUME_URL = "https://drive.google.com/file/d/19ny5mWHnDgJdUXM0kY9wgr8PXt7pRrvu/view?usp=drivesdk";
const NAME = "Shivam Kumar";
const TYPING_SPEED = 120;
const ERASING_SPEED = 60;
const DELAY_AFTER_TYPING = 1200;
const DELAY_AFTER_ERASING = 500;

const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (displayed.length < NAME.length) {
        timeout = setTimeout(
          () => setDisplayed(NAME.slice(0, displayed.length + 1)),
          TYPING_SPEED
        );
      } else {
        timeout = setTimeout(() => setIsTyping(false), DELAY_AFTER_TYPING);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(NAME.slice(0, displayed.length - 1)),
          ERASING_SPEED
        );
      } else {
        timeout = setTimeout(() => setIsTyping(true), DELAY_AFTER_ERASING);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isTyping]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40 dark:opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-40 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-gray-200 dark:border-slate-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Actively seeking Software Engineering roles
              </span>
            </div>
            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent min-w-[1ch]">
                {displayed}
                {displayed.length > 0 ? (
                  <span
                    className="inline-block align-bottom border-r-2 border-blue-600 ml-1 animate-pulse"
                    style={{ height: "0em", width: "0" }}
                  />
                ) : null}
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Full-Stack Engineer | Generative AI & Distributed Systems
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building distributed real-time microservices, event-driven architectures, and stateful multi-agent GenAI pipelines using Next.js, FastAPI, Node.js, LangGraph, and Redis.
            </p>
          </div>

          {/* Button section with Download Resume */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-300">
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-lg font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <DownloadCloud className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-y-0.5 transition-transform duration-200" />
              Resume
            </a>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              Contact Me →
            </button>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-16 animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com/shivamkr082003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-kumar-138924288/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:shivam6132@gmail.com"
              aria-label="Email Shivam"
              className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-fade-in-up animation-delay-900"
          >
            <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

