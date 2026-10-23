import React from "react";
import { ArrowUp } from "lucide-react";

const links = [
  { name: "GitHub", url: "https://github.com/shivamkr082003" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shivam-kumar-138924288/" },
  { name: "LeetCode", url: "https://leetcode.com/u/66T5Eko6U6/" },
  { name: "Email", url: "mailto:shivam6132@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-line overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.url}
                target={l.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-base font-medium text-muted hover:text-fg transition-colors"
              >
                {l.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 self-start rounded-full border border-line-strong px-4 py-2 text-sm text-fg hover:bg-surface-2 transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div
          aria-hidden="true"
          className="mt-16 select-none text-center font-semibold tracking-[-0.06em] leading-[0.8] text-[19vw] md:text-[14rem] font-extrabold bg-gradient-to-b from-accent/40 via-accent-2/15 to-transparent bg-clip-text text-transparent"
        >
          Shivam
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-2 text-sm text-subtle">
          <span>© {new Date().getFullYear()} Shivam Kumar</span>
          <span>Designed & engineered in Ranchi, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
