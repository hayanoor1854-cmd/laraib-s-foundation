import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ImagePlus, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laraib Amjad — Full-Stack Developer" },
      { name: "description", content: "The professional portfolio of full-stack developer Laraib Amjad." },
      { property: "og:title", content: "Laraib Amjad — Full-Stack Developer" },
      { property: "og:description", content: "The professional portfolio of full-stack developer Laraib Amjad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const sections = [
  { id: "experience", number: "04", title: "Experience", note: "Professional roles, contributions, and outcomes will be documented here." },
  { id: "education", number: "05", title: "Education", note: "Academic background and relevant learning will be added here." },
  { id: "services", number: "06", title: "Services", note: "Development services and areas of collaboration will be outlined here." },
];

const projects = [
  {
    number: "01",
    title: "Admin-Student Management System",
    type: "Mobile Application",
    desc: "A role-based educational management mobile application with separate admin and student experiences, authentication, course management, mood tracking, daily tasks, and profile settings.",
    tech: "Flutter · Firebase · Authentication APIs · Real-time Database",
    github: "https://github.com/itx-LaraibAmjad/studentportalapp",
    mockup: "mobile" as const,
  },
  {
    number: "02",
    title: "iPhone Website Replica",
    type: "Web Development",
    desc: "A responsive recreation of Apple's iPhone website focused on accurate layouts, product presentation, interactive elements, and modern frontend interactions.",
    tech: "React · CSS3 · JavaScript",
    github: "https://github.com/itx-LaraibAmjad/iphonewebproject",
    mockup: "browser" as const,
  },
  {
    number: "03",
    title: "Smart Knowledge Base",
    type: "AI-Powered Full-Stack Application",
    desc: "An AI-powered knowledge management application where users can upload text snippets, automatically classify them into Technical, Urgent, or General categories, and manage their content through search, filtering, editing, and deletion.",
    features: [
      "AI-powered automatic tagging",
      "Technical, Urgent, and General categories",
      "Smart full-text search",
      "Real-time filtering",
      "Edit and automatic re-tagging",
      "Delete with confirmation",
      "Input validation",
      "Responsive interface",
    ],
    tech: "React · Django · Django REST Framework · Python · HuggingFace · PostgreSQL/SQLite",
    github: "https://github.com/itx-LaraibAmjad/smart-knowledge-base",
    mockup: "dashboard" as const,
  },
  {
    number: "04",
    title: "UOL University Website",
    type: "Web Development",
    desc: "A university website featuring course registration, login functionality, department information, degree programs, and achievement showcases.",
    tech: "HTML5 · CSS3 · JavaScript",
    github: "https://github.com/itx-LaraibAmjad/uolwebsite",
    mockup: "browser" as const,
  },
  {
    number: "05",
    title: "Winter Fashion Website",
    type: "Frontend / UI Design",
    desc: "A winter fashion website designed around winter clothing and seasonal product presentation. This project was created to practice frontend layout, visual design, typography, spacing, and responsive styling using HTML and CSS.",
    tech: "HTML5 · CSS3",
    github: "https://github.com/itx-LaraibAmjad/winterfashion",
    mockup: "browser" as const,
  },
];

const skillsGroups = [
  { number: "01", label: "Languages", items: ["C++", "JavaScript", "Dart", "HTML5", "CSS3"] },
  { number: "02", label: "Frameworks", items: ["React", "Next.js", "Flutter", "Django"] },
  { number: "03", label: "Databases", items: ["MySQL", "PostgreSQL", "Firebase"] },
  { number: "04", label: "Tools & Development", items: ["VS Code", "Postman", "Git"] },
  { number: "05", label: "Systems & Networking", items: ["Linux", "Computer Networking"] },
  { number: "06", label: "Core", items: ["Data Structures & Algorithms"] },
];

const aboutMeta = [
  { label: "Currently", value: "Information Engineering Technology — University of the Lahore" },
  { label: "Focus", value: "Full-Stack Development · Web Development · Mobile Development" },
  { label: "Exploring", value: "UI/UX · Modern Web Technologies" },
];

function BrowserMockup({ url, type, big = false }: { url: string; type: string; big?: boolean }) {
  return (
    <div className="group/mock overflow-hidden rounded-lg border border-border bg-background transition-colors duration-300 group-hover:border-primary/50">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-3 py-2">
        <span className="size-2 rounded-full bg-muted-foreground/40" aria-hidden="true" />
        <span className="size-2 rounded-full bg-muted-foreground/40" aria-hidden="true" />
        <span className="size-2 rounded-full bg-muted-foreground/40" aria-hidden="true" />
        <div className="ml-2 flex-1 truncate rounded border border-border bg-background px-2 py-1 font-mono text-[10px] font-medium text-muted-foreground">
          {url}
        </div>
      </div>
      {/* abstract preview */}
      <div className={`${big ? "aspect-[16/9]" : "aspect-[16/10]"} bg-muted/20`}>
        <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-1/4 rounded bg-border/80" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">{type}</span>
          </div>
          <div className="h-2 w-2/3 rounded bg-border/50" />
          <div className="mt-1 grid flex-1 grid-cols-3 gap-3">
            <div className="rounded bg-border/40" />
            <div className="rounded bg-border/40" />
            <div className="rounded bg-border/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("laraib-theme");
    const shouldUseDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("laraib-theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="text-xl font-extrabold tracking-normal text-foreground transition-colors hover:text-primary" aria-label="Laraib Amjad home">LA<span className="text-primary">.</span></a>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="font-mono text-[11px] font-medium uppercase text-muted-foreground transition-colors hover:text-primary">{item}</a>
              ))}
            </nav>
            <div className="mx-2 hidden h-5 w-px bg-border md:block" />
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} title={`Switch to ${dark ? "light" : "dark"} mode`}>
              {dark ? <Sun /> : <Moon />}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-nav" className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-[1200px]">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 font-mono text-xs font-medium uppercase text-muted-foreground transition-colors last:border-0 hover:text-primary">{item}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="technical-grid border-b border-border">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[55fr_45fr] lg:gap-14 lg:px-10 lg:py-24">
            {/* Left: hero text + CTA */}
            <div className="hero-fade order-1">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Full-stack <span className="text-muted-foreground" aria-hidden="true">•</span> Web <span className="text-muted-foreground" aria-hidden="true">•</span> Mobile
              </p>

              <h1 className="mt-6 text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight text-foreground">
                Laraib Amjad
              </h1>

              <p className="mt-5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Full-Stack & Mobile Developer
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Building modern web applications, mobile experiences, and scalable digital solutions.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  View My Work
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40 hover:bg-muted sm:w-auto"
                >
                  Get In Touch
                </a>
              </div>

              {/* Technology strip */}
              <ul className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {["React", "Flutter", "Django", "PostgreSQL"].map((tech, i) => (
                  <li key={tech} className="flex items-center gap-x-5">
                    {i > 0 && <span className="size-1 rounded-full bg-border" aria-hidden="true" />}
                    <span className="transition-colors hover:text-foreground">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: profile image placeholder */}
            <div className="hero-fade order-2 lg:pl-6" style={{ animationDelay: "0.12s" }}>
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-muted/40 sm:aspect-[5/4] lg:aspect-[4/5]">
                {/* placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-colors group-hover:text-foreground">
                    <ImagePlus className="size-6" />
                  </div>
                  <p className="px-6 font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    Profile photo
                  </p>
                  <p className="px-6 text-xs text-muted-foreground/80">
                    Upload your professional photograph
                  </p>
                </div>
                {/* subtle corner accents */}
                <span className="pointer-events-none absolute left-3 top-3 size-5 border-l-2 border-t-2 border-foreground/20" aria-hidden="true" />
                <span className="pointer-events-none absolute bottom-3 right-3 size-5 border-b-2 border-r-2 border-foreground/20" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="technical-grid border-b border-border">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-16 sm:px-8 md:grid-cols-12 md:gap-12 md:py-20 lg:px-10 lg:py-24">
            {/* Left: label + heading */}
            <div className="hero-fade md:col-span-5">
              <p className="font-mono text-xs font-medium text-primary">/01</p>
              <p className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                About <span className="text-muted-foreground/50" aria-hidden="true">/</span> Profile
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
                Building with code, curiosity, and purpose.
              </h2>
            </div>

            {/* Right: intro + supporting + meta */}
            <div className="hero-fade md:col-span-7 md:pt-1" style={{ animationDelay: "0.08s" }}>
              <p className="text-lg leading-7 text-foreground">
                I’m Laraib Amjad, a Full-Stack & Mobile Developer focused on building modern web applications, mobile experiences, and practical digital solutions.
              </p>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Currently pursuing Information Engineering Technology at University of the Lahore, I enjoy turning ideas into functional and user-focused products. My development journey spans frontend interfaces, backend systems, databases, authentication, and mobile application development.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                I’m particularly interested in full-stack development, UI/UX, emerging technologies, and continuously improving how digital products are designed and built.
              </p>

              {/* Technical info area */}
              <dl className="mt-9 divide-y divide-border border-t border-border">
                {aboutMeta.map((item) => (
                  <div key={item.label} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                    <dt className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                      <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
                      {item.label}
                    </dt>
                    <dd className="text-sm leading-6 text-foreground">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="technical-grid border-b border-border">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
            {/* Header */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="font-mono text-xs font-medium text-primary">/02</p>
              </div>
              <div className="md:col-span-9">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Skills
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Technologies I Build With
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                  A practical development stack covering frontend, backend, mobile, databases, and development tools.
                </p>
              </div>
            </div>

            {/* Groups */}
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
              {skillsGroups.map((group) => (
                <div key={group.label} className="border-t border-border pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] font-medium text-primary">{group.number}</span>
                    <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-foreground">
                      {group.label}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Current stack footer */}
            <div className="mt-12 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                Current Stack
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                React · Flutter · Django · PostgreSQL · Firebase
              </span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
            {/* Header */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="font-mono text-xs font-medium text-primary">/03</p>
              </div>
              <div className="md:col-span-9">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Selected Projects
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Things I’ve Built
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                  Selected projects across web development, mobile applications, full-stack systems, and real-world development work.
                </p>
              </div>
            </div>

            {/* Featured project */}
            {(() => {
              const p = projects[0]!;
              return (
                <div className="group mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-7">
                    <BrowserMockup url={p.url} type={p.type} big />
                  </div>
                  <div className="md:col-span-5 md:pt-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-medium text-primary">{p.number}</span>
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">{p.type}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                      {p.desc}
                    </p>
                    <p className="mt-5 font-mono text-xs font-medium uppercase tracking-wider text-foreground">
                      {p.tech}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-5">
                      <a href="#projects" className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                        View Project
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                      </a>
                      <a href="#projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                        View Code
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Other projects */}
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
              {projects.slice(1).map((p) => (
                <div key={p.number} className="group border-t border-border pt-6">
                  <BrowserMockup url={p.url} type={p.type} />
                  <div className="mt-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-medium text-primary">{p.number}</span>
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">{p.type}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {p.desc}
                    </p>
                    <p className="mt-4 font-mono text-xs font-medium uppercase tracking-wider text-foreground">
                      {p.tech}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-5">
                      <a href="#projects" className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                        View Project
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                      </a>
                      {p.hasCode && (
                        <a href="#projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                          View Code
                          <ArrowRight className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <p className="mt-12 border-t border-border pt-6 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
              More projects and experiments coming soon.
            </p>
          </div>
        </section>

        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className={`${index === 2 ? "technical-grid " : ""}border-b border-border`}>
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20 lg:px-10">
              <div className="md:col-span-3">
                <p className="font-mono text-xs font-medium text-primary">/{section.number}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-3xl font-bold tracking-normal sm:text-4xl">{section.title}</h2>
                <div className="mt-10 min-h-28 border-t border-border pt-5 md:min-h-36">
                  <p className="max-w-lg text-sm leading-6 text-muted-foreground">{section.note}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section id="contact" className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20 lg:px-10">
            <div className="md:col-span-3"><p className="font-mono text-xs font-medium text-primary">/07</p></div>
            <div className="md:col-span-9">
              <p className="font-mono text-xs font-medium uppercase text-muted-foreground">Contact</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl">Let’s build something considered.</h2>
              <p className="mt-8 max-w-lg text-sm leading-6 text-muted-foreground">Contact details and preferred channels will be added here.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-sm font-semibold">Laraib Amjad<span className="text-primary">.</span></p>
          <p className="font-mono text-[11px] uppercase text-muted-foreground">Full-stack developer</p>
        </div>
      </footer>
    </div>
  );
}
