import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Menu, Moon, Sun, X } from "lucide-react";
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
          <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1200px] grid-cols-1 content-center gap-10 px-5 py-20 sm:px-8 md:min-h-[680px] lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-10">
              <p className="mb-6 font-mono text-xs font-medium uppercase text-primary">Full-stack developer / Portfolio</p>
              <h1 className="max-w-5xl text-[clamp(3rem,8vw,7.5rem)] font-extrabold leading-[0.95] tracking-normal">Laraib<br />Amjad<span className="text-primary">.</span></h1>
              <div className="mt-10 grid gap-8 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-12">
                <p className="max-w-xl text-base leading-7 text-muted-foreground sm:col-span-1 lg:col-span-6">Building considered digital products across the front end and back end.</p>
                <div className="flex items-end sm:justify-end lg:col-span-6">
                  <a href="#about" className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase text-foreground transition-colors hover:text-primary">Explore portfolio <ArrowDown className="size-4" /></a>
                </div>
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
