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
  { id: "about", number: "01", title: "About", note: "A concise introduction and professional perspective will live here." },
  { id: "skills", number: "02", title: "Skills", note: "Core technologies and engineering capabilities will be organized here." },
  { id: "projects", number: "03", title: "Projects", note: "Selected full-stack work and case studies will be presented here." },
  { id: "experience", number: "04", title: "Experience", note: "Professional roles, contributions, and outcomes will be documented here." },
  { id: "education", number: "05", title: "Education", note: "Academic background and relevant learning will be added here." },
  { id: "services", number: "06", title: "Services", note: "Development services and areas of collaboration will be outlined here." },
];

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

        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className={`${index === 2 || index === 5 ? "technical-grid " : ""}border-b border-border`}>
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
