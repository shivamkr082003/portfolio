import React, { useState, useEffect, useContext } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState("#home");
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav item for whichever section is in the middle of the viewport
  useEffect(() => {
    const sections = ["#home", ...navItems.map((n) => n.href)]
      .map((id) => document.querySelector(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className="fixed left-0 top-0 h-px bg-gradient-to-r from-accent to-accent-2 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav
        className={`mx-auto max-w-5xl flex items-center justify-between rounded-full border pl-2 pr-2 py-2 transition-all duration-500 ${
          isScrolled
            ? "border-line bg-bg/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0_0_0/0.12)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-2.5 rounded-full pl-1 pr-3 py-1 group"
          aria-label="Back to top"
        >
          <span className="grid place-items-center w-8 h-8 rounded-full bg-fg text-bg text-xs font-semibold tracking-tight">
            SK
          </span>
          <span className="hidden sm:block text-sm font-medium text-fg">
            Shivam Kumar
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1 rounded-full">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`relative px-4 py-2 text-[15px] font-medium rounded-full transition-colors ${
                active === item.href
                  ? "text-fg bg-surface-2 font-semibold"
                  : "text-muted hover:text-fg"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid place-items-center w-9 h-9 rounded-full text-muted hover:text-fg hover:bg-surface-2 transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="btn-primary hidden md:inline-flex items-center gap-1 rounded-full pl-4 pr-3 py-2 text-sm font-semibold"
          >
            Let's talk
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden grid place-items-center w-9 h-9 rounded-full text-fg hover:bg-surface-2 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden mx-auto max-w-5xl mt-2 rounded-3xl border border-line bg-bg/90 backdrop-blur-xl p-2 animate-enter">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="flex w-full items-center justify-between px-4 py-3.5 rounded-2xl text-left text-fg hover:bg-surface-2 transition-colors"
            >
              {item.name}
              <ArrowUpRight className="w-4 h-4 text-subtle" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
