import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, ImagePlus, Linkedin, MapPin, Menu, Moon, Sun, X } from "lucide-react";
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

const services = [
  {
    number: "01",
    title: "Web Development",
    desc: "Build responsive and modern web applications using React, Next.js, JavaScript, HTML and CSS.",
    tech: "React · Next.js · JavaScript · HTML5 · CSS3",
  },
  {
    number: "02",
    title: "Mobile App Development",
    desc: "Build cross-platform mobile applications using Flutter with practical backend and authentication integration.",
    tech: "Flutter · Backend Integration · Authentication",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    desc: "Develop complete applications across frontend, backend, APIs, databases and authentication using technologies such as React, Django, PostgreSQL, Firebase and REST APIs.",
    tech: "React · Django · PostgreSQL · Firebase · REST APIs",
  },
  {
    number: "04",
    title: "UI/UX & Frontend Design",
    desc: "Create clean, responsive and user-focused interfaces with attention to layout, usability, typography and visual consistency.",
    tech: "Layout · Typography · Responsive Design",
  },
];

const experiences = [
  {
    role: "Flutter & Django Developer Intern",
    company: "PEL (Pak Elektron Limited)",
    location: "Lahore, Pakistan",
    dates: "Jul 2026 – Aug 2026",
    responsibilities: [
      "Took responsibility for building an expense tracker application with a mobile front end and backend system.",
      "Organized income, expense, and category records.",
      "Calculated financial summaries and automated spending alerts.",
      "Implemented secure login using JWT authentication.",
    ],
    tech: "Flutter · Django · JWT Authentication",
  },
  {
    role: "Software Development Intern",
    company: "KICS, UET Lahore",
    location: "Lahore, Pakistan",
    dates: "May 2024 – Jul 2024",
    responsibilities: [
      "Developed iRock mobile application using Flutter frontend and Django backend",
      "Managed PostgreSQL database via pgAdmin and implemented RESTful API integration",
      "Collaborated with the development team to deliver a complete full-stack mobile solution"
    ],
    tech: "Mobile Development · PostgreSQL · Team Collaboration",
  },
];

const projects = [
  {
    number: "01",
    title: "Admin-Student Management System",
    type: "Mobile Application",
    desc: "A role-based educational management mobile application with separate admin and student experiences, authentication, course management, mood tracking, daily tasks, and profile settings.",
    tech: "Flutter · Firebase · Authentication APIs · Real-time Database",
    github: "https://github.com/itx-LaraibAmjad/studentportalapp",
    image: "/images/admin-student.png",
  },
  {
    number: "02",
    title: "iPhone Website Replica",
    type: "Web Development",
    desc: "A responsive recreation of Apple's iPhone website focused on accurate layouts, product presentation, interactive elements, and modern frontend interactions.",
    tech: "React · CSS3 · JavaScript",
    github: "https://github.com/itx-LaraibAmjad/iphonewebproject",
    image: "/images/iphone.png",
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
    image: "/images/smart-knowledge.png",
  },
  {
    number: "04",
    title: "UOL University Website",
    type: "Web Development",
    desc: "A university website featuring course registration, login functionality, department information, degree programs, and achievement showcases.",
    tech: "HTML5 · CSS3 · JavaScript",
    github: "https://github.com/itx-LaraibAmjad/uolwebsite",
    image: "/images/uol.png",
  },
  {
    number: "05",
    title: "Winter Fashion Website",
    type: "Frontend / UI Design",
    desc: "A winter fashion website designed around winter clothing and seasonal product presentation. This project was created to practice frontend layout, visual design, typography, spacing, and responsive styling using HTML and CSS.",
    tech: "HTML5 · CSS3",
    github: "https://github.com/itx-LaraibAmjad/winterfashion",
    image: "/images/winter-fashion.png",
  },
  {
    number: "06",
    title: "Sweet Charm — Bakery Website",
    type: "Frontend Web Application",
    desc: "A modern and responsive bakery website built with React, designed to showcase desserts and bakery products through a clean, playful, and user-friendly interface.",
    tech: "React · JavaScript · HTML · CSS",
    github: "https://github.com/itx-LaraibAmjad/bakerywebsite",
    image: "/images/sweet-bakery.png",
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

function ProjectMockup({ image, title }: { image: string; title: string }) {
  return (
    <div className="group/mock overflow-hidden rounded-lg border border-border bg-muted transition-colors duration-300 group-hover:border-primary/50">
      <img 
        src={image} 
        alt={title} 
        className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover/mock:scale-105" 
      />
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

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
                <img 
                  src="/images/photo.png" 
                  alt="Laraib Amjad" 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-1 md:pt-1">
                <p className="font-mono text-xs font-medium text-primary">/02</p>
              </div>
              <div className="md:col-span-11">
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-1 md:pt-1">
                <p className="font-mono text-xs font-medium text-primary">/03</p>
              </div>
              <div className="md:col-span-11">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Selected Projects
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Things I’ve Built
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                  Selected projects across mobile development, web development, AI-powered applications, and frontend design.
                </p>
              </div>
            </div>

            {/* Featured projects */}
            {projects.slice(0, 2).map((p, index) => (
              <div key={p.number} className={`group ${index === 0 ? 'mt-12' : 'mt-16'} grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-12 md:gap-10`}>
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
                  <div className="mt-6">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      View Project
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <ProjectMockup image={p.image} title={p.title} />
                </div>
              </div>
            ))}

            {/* Other projects - conditional rendering */}
            {showMoreProjects && (
              <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                {projects.slice(2).map((p) => (
                  <div key={p.number} className="group border-t border-border pt-6 animate-in fade-in slide-in-from-top-4 duration-500">
                    <ProjectMockup image={p.image} title={p.title} />
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
                      {"features" in p && p.features ? (
                        <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs leading-5 text-muted-foreground">
                              <span className="size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <p className="mt-4 font-mono text-xs font-medium uppercase tracking-wider text-foreground">
                        {p.tech}
                      </p>
                      <div className="mt-4">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                          View Project
                          <ArrowRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Show More/Less Button */}
            <div className="mt-12 flex justify-center border-t border-border pt-10">
              <Button 
                variant="outline" 
                onClick={() => setShowMoreProjects(!showMoreProjects)}
                className="font-mono text-xs uppercase tracking-wider h-11 px-8 rounded-full border-border hover:bg-muted"
              >
                {showMoreProjects ? "Show Less ↑" : "More Projects ↓"}
              </Button>
            </div>
           
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-1 md:pt-1">
                <p className="font-mono text-xs font-medium text-primary">/04</p>
              </div>
              <div className="md:col-span-11">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Experience
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Where I’ve Worked
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                  Internships and hands-on roles where I contributed to real products and development teams.
                </p>
              </div>
            </div>

            {/* Experience Blocks */}
            <div className="mt-12 flex flex-col gap-8 border-t border-border pt-10 md:mt-16">
              {experiences.map((exp) => (
                <div
                  key={exp.role}
                  className="group relative rounded-lg border border-border border-l-[3px] border-l-primary bg-background p-6 transition-colors hover:border-primary/50 sm:p-8"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {exp.role}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2">
                        <p className="text-sm font-medium text-primary sm:text-base">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="inline-flex shrink-0 items-center justify-center rounded border border-border px-3 py-1.5">
                      <span className="font-mono text-[11px] font-medium tracking-wider text-muted-foreground sm:text-xs">
                        {exp.dates}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {exp.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:leading-7">
                        <span className="text-muted-foreground/60">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="technical-grid border-b border-border">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
            {/* Header */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-1 md:pt-1">
                <p className="font-mono text-xs font-medium text-primary">/05</p>
              </div>
              <div className="md:col-span-11">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Services
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  What I Can Help With
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                  Practical development support across web, mobile, and full-stack projects.
                </p>
              </div>
            </div>

            {/* Service items */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 border-t border-border pt-10">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/50 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-medium text-primary">{service.number}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground sm:leading-7">
                    {service.desc}
                  </p>
                  <div className="mt-8 border-t border-border pt-5 sm:pt-6">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground">
                      {service.tech}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
            <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-12 md:mb-12 md:gap-8">
              <div className="md:col-span-1 md:pt-1">
                <p className="font-mono text-xs font-medium text-primary">/06</p>
              </div>
              <div className="md:col-span-11">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Contact
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 sm:p-12 lg:p-16">
              {/* subtle technical grid inside */}
              <div className="technical-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
              
              <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
                {/* Left Area */}
                <div className="flex flex-col justify-center lg:col-span-7">
                  <h2 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                    Let's build something useful.
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
                    Open to internships, freelance opportunities, and collaboration.
                  </p>
                  <div className="mt-10 lg:mt-12">
                    <a
                      href="mailto:laraibamjad.it@gmail.com"
                      className="group inline-flex items-center gap-4 border-b-2 border-primary pb-2 text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary sm:text-2xl lg:text-3xl"
                    >
                      laraibamjad.it@gmail.com
                      <ArrowRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-2 sm:size-6" />
                    </a>
                  </div>
                </div>
                
                {/* Right Area */}
                <div className="flex flex-col justify-center gap-8 border-t border-border pt-8 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <div>
                    <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      Social Profiles
                    </p>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <a
                          href="https://github.com/itx-LaraibAmjad"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                        >
                          <Github className="size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com/in/laraibamjad"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                        >
                          <Linkedin className="size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-border/50 pt-8">
                    <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      Location
                    </p>
                    <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                      <MapPin className="size-4 text-muted-foreground" aria-hidden="true" />
                      Lahore, Pakistan
                    </div>
                  </div>
                </div>
              </div>
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