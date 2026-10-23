import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight, FileText, Sparkles, Zap, Radio } from "lucide-react";
import CountUp from "./CountUp";
import cineverseImg from "../assets/cineverse.jpg";
import drawImg from "../assets/draw.jpg";
import aromaImg from "../assets/aroma.jpg";

const RESUME_URL ="https://drive.google.com/file/d/1BXBjgyj5F9JJPg4ztkTGYF6bCU3o5xMl/view?usp=drivesdk" ;

const stack = [
  "Next.js", "TypeScript", "FastAPI", "Node.js", "LangGraph", "LangChain",
  "Redis", "PostgreSQL", "MongoDB", "Socket.io", "Docker", "Qdrant",
  "AWS", "GitHub Actions", "Python", "React", "Stripe", "k6",
];

const stats = [
  { value: 700, suffix: "+", label: "DSA problems solved" },
  { value: 1687, label: "Peak LeetCode rating" },
  { value: 8.34, decimals: 2, label: "CGPA · IIIT Ranchi" },
  { value: 7, label: "Projects shipped" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/shivamkr082003" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shivam-kumar-138924288/" },
  { icon: Mail, label: "Email", href: "mailto:shivam6132@gmail.com" },
];

const Window = ({ src, alt, className = "" }) => (
  <div className={`overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-[0_40px_100px_-30px_rgb(0_0_0/0.6)] ${className}`}>
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-surface-2/60">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
    </div>
    <img src={src} alt={alt} className="block w-full aspect-[16/10] object-cover object-top" />
  </div>
);

const Hero = () => {
  const stageRef = useRef(null);

  // Tilt the project showcase back in 3D and straighten it as the user scrolls
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame;
    const update = () => {
      const p = Math.min(Math.max(window.scrollY / 520, 0), 1);
      stage.style.transform = `rotateX(${22 * (1 - p)}deg) scale(${0.9 + 0.1 * p})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-36 md:pt-44 pb-10">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-25%] h-[720px] w-[1200px] -translate-x-1/2 rounded-full opacity-70 blur-[130px] animate-aurora bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_55%,transparent),transparent),radial-gradient(closest-side_at_75%_55%,color-mix(in_srgb,var(--accent-2)_40%,transparent),transparent),radial-gradient(closest-side_at_25%_65%,color-mix(in_srgb,var(--accent-3)_25%,transparent),transparent)]" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_25%,transparent_80%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 text-center">
        <div className="animate-enter inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/70 backdrop-blur-md pl-1.5 pr-4 py-1.5 shadow-sm">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-emerald-500/15 text-emerald-500 px-2.5 py-1 text-xs font-semibold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Open to work
          </span>
          <span className="whitespace-nowrap text-sm font-medium text-muted">
            SDE & AI <span className="hidden sm:inline">Engineering </span>roles · 2027
          </span>
        </div>

        <p
          className="animate-enter mt-10 text-lg md:text-xl font-medium text-muted"
          style={{ animationDelay: "60ms" }}
        >
          Hi, I'm <span className="text-fg font-semibold">Shivam Kumar</span> — Full-Stack & AI Engineer
        </p>

        <h1
          className="animate-enter mt-4 text-[2.75rem] leading-[1] sm:text-7xl md:text-8xl lg:text-[7.25rem] font-extrabold tracking-[-0.055em]"
          style={{ animationDelay: "120ms" }}
        >
          <span className="text-metal">I build AI systems</span>
          <br />
          <span className="text-gradient-animated pb-2 inline-block">that ship & scale.</span>
        </h1>

        <p
          className="animate-enter mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed"
          style={{ animationDelay: "200ms" }}
        >
          Real-time microservices, event-driven backends and stateful multi-agent
          GenAI pipelines — engineered with Next.js, FastAPI, LangGraph & Redis.
        </p>

        <div
          className="animate-enter mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "280ms" }}
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary group inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-4 text-base font-semibold"
          >
            <Sparkles className="w-4 h-4" />
            See my work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/70 backdrop-blur px-6 sm:px-7 py-4 text-base font-semibold text-fg hover:bg-surface-2 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Résumé
          </a>
        </div>

        <div
          className="animate-enter mt-6 flex items-center justify-center gap-2"
          style={{ animationDelay: "340ms" }}
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid place-items-center w-11 h-11 rounded-full border border-line text-muted hover:text-fg hover:border-line-strong hover:bg-surface-2 transition-all"
            >
              <Icon className="w-[18px] h-[18px]" />
            </a>
          ))}
        </div>

        {/* 3D project showcase */}
        <div
          className="animate-enter relative mt-20 [perspective:1600px]"
          style={{ animationDelay: "420ms" }}
        >
          <div className="absolute inset-x-[10%] top-[10%] bottom-0 rounded-full bg-gradient-to-r from-accent/40 via-accent-2/40 to-accent-3/30 blur-[90px]" />
          <div
            ref={stageRef}
            className="relative origin-top transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: "rotateX(22deg) scale(0.9)" }}
          >
            <div className="relative mx-auto max-w-4xl">
              <Window
                src={drawImg}
                alt="Draw — collaborative whiteboard"
                className="hidden md:block absolute -left-[22%] top-[12%] w-[58%] -rotate-[5deg] opacity-80"
              />
              <Window
                src={aromaImg}
                alt="Aroma — multi-agent AI platform"
                className="hidden md:block absolute -right-[22%] top-[12%] w-[58%] rotate-[5deg] opacity-80"
              />
              <Window src={cineverseImg} alt="Cineverse — movie ticket booking platform" className="relative" />

              {/* Floating chips */}
              <div className="animate-float absolute -left-3 sm:-left-8 bottom-[18%] flex items-center gap-2.5 rounded-2xl border border-line-strong bg-surface/90 backdrop-blur-xl px-4 py-3 text-left shadow-2xl">
                <div className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-fg leading-tight">8.5× faster</p>
                  <p className="text-xs text-subtle">p95 · Redis cache-aside</p>
                </div>
              </div>
              <div
                className="animate-float absolute -right-3 sm:-right-8 top-[22%] flex items-center gap-2.5 rounded-2xl border border-line-strong bg-surface/90 backdrop-blur-xl px-4 py-3 text-left shadow-2xl"
                style={{ animationDelay: "-3s" }}
              >
                <div className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-accent-2 to-accent-3 text-white">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-fg leading-tight">Real-time seats</p>
                  <p className="text-xs text-subtle">Socket.io + Redis locks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-20 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-line bg-surface/70 backdrop-blur p-6 md:p-7 text-left"
            >
              <div className="text-4xl md:text-5xl font-extrabold tracking-[-0.05em] text-gradient">
                <CountUp to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm md:text-base font-medium text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-16 overflow-hidden mask-fade-x border-y border-line py-5">
        <div className="flex w-max animate-marquee gap-12">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="flex items-center gap-12 text-lg font-semibold text-subtle whitespace-nowrap">
              {t}
              <span className="text-gradient">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
