import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  Braces,
  Brain,
  Cpu,
  Database,
  Download,
  GraduationCap,
  Github,
  Hammer,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Send,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { ParticleField, Reveal, TypingText } from "./effects";
import { certifications, education, profile, skillGroups, stats } from "@/lib/portfolio-data";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="font-display text-xs tracking-[0.4em] text-accent">
        {eyebrow.toUpperCase()}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <ParticleField />
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles size={13} className="text-accent" /> Open to internships & learning
            opportunities
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-7 font-display text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 font-display text-lg tracking-[0.25em] text-muted-foreground sm:text-xl">
            {profile.role.toUpperCase()}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-3 text-xl text-foreground sm:text-2xl">{profile.tagline}</p>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-6 text-base sm:text-lg">
            <TypingText words={profile.rotatingRoles} />
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#skills"
              className="neon-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Skills <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:border-ring hover:text-accent"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
            >
              Contact Me
            </a>
          </div>
        </Reveal>

        <div className="pointer-events-none mt-16 flex justify-center gap-8 text-primary/50">
          {[Terminal, Braces, Database, Cpu].map((Icon, i) => (
            <Icon
              key={i}
              size={26}
              className="animate-float"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="About Me" title="Turning ideas into digital products" />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="glass card-3d h-full rounded-2xl p-8">
            <p className="text-base leading-relaxed text-muted-foreground">{profile.about}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Degree", value: "B.Tech CSE (AI)" },
                { label: "Location", value: "Visakhapatnam" },
                { label: "Focus", value: "Full Stack" },
              ].map((b) => (
                <div key={b.label} className="rounded-xl border border-border p-4">
                  <p className="text-xs tracking-widest text-muted-foreground">
                    {b.label.toUpperCase()}
                  </p>
                  <p className="mt-1 font-display text-sm text-accent">{b.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="glass neon-glow h-full rounded-2xl p-8">
            <div className="flex items-center gap-4">
              <div className="animate-pulse-ring grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                {profile.name.charAt(0)}
              </div>
              <div>
                <p className="font-display text-lg">{profile.name}</p>
                <p className="text-sm text-muted-foreground">Aspiring Full Stack Developer</p>
              </div>
            </div>
            <ul className="mt-7 space-y-3">
              {stats.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-lg border border-border px-4 py-2.5 text-sm transition-colors hover:border-ring hover:text-accent"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Skills" title="Technologies I'm learning & using" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 80}>
            <div className="glass card-3d h-full rounded-2xl p-6">
              <h3 className="font-display text-sm tracking-[0.25em] text-accent">
                {group.title.toUpperCase()}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-sm transition-colors hover:border-ring hover:text-accent"
                  >
                    {item.name}
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] tracking-wider text-accent">
                      {item.level.toUpperCase()}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { projects } from "@/lib/portfolio-data";

export function Projects() {
  const placeholders = [
    { icon: Rocket, label: "Future Project", note: "Ideas in the works" },
    { icon: Hammer, label: "Currently Learning", note: "Building core skills" },
    { icon: Sparkles, label: "Coming Soon", note: "Watch this space" },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Projects & Learning" title="What I'm building toward" />
      <Reveal>
        <div className="glass neon-glow mx-auto max-w-3xl rounded-2xl p-8 text-center">
          <Hammer size={24} className="mx-auto text-accent" />
          <h3 className="mt-4 font-display text-xl">Projects Coming Soon</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Currently strengthening my development skills and working toward building
            real-world applications. This section will be updated with projects as I build
            and deploy them.
          </p>
        </div>
      </Reveal>

      {projects.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="glass card-3d rounded-2xl p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15">
                    <Rocket size={20} className="text-accent" />
                  </div>
                  <span className="rounded-full border border-accent/30 px-2.5 py-0.5 text-[10px] tracking-wider text-accent">
                    {p.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {placeholders.map((p, i) => (
          <Reveal key={p.label} delay={i * 90}>
            <div className="glass card-3d rounded-2xl p-6 text-center">
              <p.icon size={20} className="mx-auto text-primary/70" />
              <p className="mt-3 font-display text-sm tracking-widest text-accent">
                {p.label.toUpperCase()}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="Education" title="Academic timeline" />
      <div className="relative pl-8">
        <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        {education.map((t, i) => (
          <Reveal key={t.degree} delay={i * 120}>
            <div className="relative mb-8">
              <span className="absolute -left-[1.6rem] top-6 h-3 w-3 rounded-full bg-accent neon-glow" />
              <div
                className={`glass card-3d rounded-2xl p-6 ${t.primary ? "neon-glow border-ring" : ""}`}
              >
                <GraduationCap size={20} className="text-accent" />
                <h3 className="mt-3 font-display text-base">{t.degree}</h3>
                <p className="mt-1 text-sm text-foreground/90">{t.detail}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.school}</p>
                <p className="mt-3 text-xs tracking-widest text-accent">
                  {t.meta.toUpperCase()}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-5 py-24">
      <SectionHeading eyebrow="Certifications" title="Credentials & learning milestones" />
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div className="glass card-3d relative h-full overflow-hidden rounded-2xl p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15">
                  <Award size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
                  <p className="mt-3 text-xs tracking-widest text-accent">
                    {c.date.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Goals() {
  const steps = [
    { icon: Lightbulb, label: "LEARN" },
    { icon: Hammer, label: "BUILD" },
    { icon: Users, label: "CONTRIBUTE" },
    { icon: TrendingUp, label: "GROW" },
  ];

  return (
    <section id="goals" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="Career Goals" title="Where I'm headed" />
      <Reveal>
        <div className="glass neon-glow rounded-2xl p-10 text-center">
          <Target size={26} className="mx-auto text-accent" />
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed">
            {profile.careerGoal}
          </p>
        </div>
      </Reveal>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="glass card-3d rounded-2xl p-5 text-center">
              <s.icon size={20} className="mx-auto text-accent" />
              <p className="mt-3 font-display text-xs tracking-[0.25em]">{s.label}</p>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={14}
                  className="mx-auto mt-2 hidden text-primary/50 sm:block"
                />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.info("Message form is in preview mode", {
        description: `Please reach out directly at ${profile.email}`,
      });
    }, 700);
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-ring focus:shadow-[0_0_0_3px_var(--neon-soft)]";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Contact" title="Let's Build Something Together" />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="glass h-full rounded-2xl p-8">
            <div className="space-y-3">
              {[
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
                { icon: Github, label: "GitHub", href: profile.github },
                { icon: MapPin, label: profile.location, href: undefined },
              ].map((c) =>
                c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-ring hover:text-accent"
                  >
                    <c.icon size={16} className="shrink-0 text-accent" />
                    <span className="break-all">{c.label}</span>
                  </a>
                ) : (
                  <p
                    key={c.label}
                    className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm"
                  >
                    <c.icon size={16} className="shrink-0 text-accent" />
                    {c.label}
                  </p>
                ),
              )}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Open to internships, learning opportunities and collaborations.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="glass rounded-2xl p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Your name" className={inputClass} />
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                className={inputClass}
              />
            </div>
            <input
              required
              name="subject"
              placeholder="Subject"
              className={`${inputClass} mt-4`}
            />
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about the opportunity..."
              className={`${inputClass} mt-4 resize-none`}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={sending}
                className="neon-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-60"
              >
                <Send size={15} /> {sending ? "Sending..." : "Send Message"}
              </button>
              <a
                href={`mailto:${profile.email}?subject=Opportunity%20for%20Sidagam%20Leela%20Chandana`}
                className="neon-glow inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:scale-105 hover:border-ring hover:text-accent"
              >
                Hire Me
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center">
      <p className="font-display text-xs tracking-[0.3em] text-gradient">
        {profile.name.toUpperCase()}
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="text-muted-foreground transition-colors hover:text-accent"
        >
          <Github size={18} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="text-muted-foreground transition-colors hover:text-accent"
        >
          <Linkedin size={18} />
        </a>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        © 2028 {profile.name}. Built with passion and code.
      </p>
    </footer>
  );
}
