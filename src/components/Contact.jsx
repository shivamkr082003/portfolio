import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  CheckCircle,
  Loader2,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

const EMAIL = "shivam6132@gmail.com";

const contactMethods = [
  { icon: Phone, title: "Phone", value: "+91-7061106132", link: "tel:+917061106132" },
  { icon: MapPin, title: "Location", value: "Ranchi, Jharkhand, India" },
];

const socialLinks = [
  { icon: Github, name: "GitHub", url: "https://github.com/shivamkr082003" },
  { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/shivam-kumar-138924288/" },
  { icon: Code2, name: "LeetCode", url: "https://leetcode.com/u/66T5Eko6U6/" },
];

const inputClass =
  "w-full rounded-xl border border-line bg-surface-2/60 px-4 py-3.5 text-fg placeholder:text-subtle outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent/15";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const mailtoFallback = () => {
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback to mailto link if external service has an issue
        mailtoFallback();
      }
      setIsSubmitted(true);
    } catch {
      // Direct mailto fallback on network error
      mailtoFallback();
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 border-t border-line overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 bottom-[-30%] h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[120px] bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_50%,transparent),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          title="Contact"
          heading="Let's build"
          accent="something great."
          body="Actively seeking Software Engineering, Full-Stack, and AI Engineering roles. Feel free to reach out to discuss opportunities or collaborate on innovative projects."
        />

        <div className="grid gap-4 lg:grid-cols-12">
          {/* Contact info */}
          <Reveal className="lg:col-span-5 grid gap-4 content-start">
            <Spotlight className="p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-subtle">
                Email me directly
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-4 block text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-fg hover:text-accent transition-colors break-all"
              >
                {EMAIL}
              </a>
              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-xs font-medium text-fg hover:bg-surface-2 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-fg text-bg px-4 py-2 text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-3.5 h-3.5" /> Compose
                </a>
              </div>
            </Spotlight>

            <Spotlight className="p-2">
              {contactMethods.map((m) => {
                const Tag = m.link ? "a" : "div";
                return (
                  <Tag
                    key={m.title}
                    href={m.link}
                    className="flex items-center gap-4 rounded-xl p-4 hover:bg-surface-2 transition-colors"
                  >
                    <div className="grid place-items-center w-10 h-10 rounded-xl border border-line bg-surface-2 text-accent">
                      <m.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-subtle">{m.title}</p>
                      <p className="text-sm text-fg">{m.value}</p>
                    </div>
                  </Tag>
                );
              })}
            </Spotlight>

            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((s) => (
                <Spotlight
                  as="a"
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="group flex flex-col items-start gap-6 p-5"
                >
                  <div className="flex w-full items-center justify-between">
                    <s.icon className="w-5 h-5 text-fg" />
                    <ArrowUpRight className="w-4 h-4 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                  <span className="text-sm text-muted">{s.name}</span>
                </Spotlight>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={150} className="lg:col-span-7">
            <Spotlight className="h-full p-8 md:p-10">
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="grid place-items-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="text-2xl font-semibold tracking-[-0.03em] text-fg">
                    Message sent.
                  </h4>
                  <p className="mt-3 max-w-sm text-muted">
                    Thanks for reaching out — I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg hover:bg-surface-2 transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm text-muted mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-muted mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-muted mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      className={`${inputClass} resize-none`}
                      placeholder="Hi Shivam, we're hiring for…"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary group w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
