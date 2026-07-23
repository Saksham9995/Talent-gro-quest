import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/site/Logo";

const cols = [
  {
    title: "Platform",
    links: [
      { to: "/programs", label: "STEM Programs" },
      { to: "/challenges", label: "Innovation Challenges" },
      { to: "/projects", label: "Student Projects" },
      { to: "/events", label: "Events" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "For",
    links: [
      { to: "/signup", label: "Students" },
      { to: "/signup", label: "Parents" },
      { to: "/signup", label: "Schools" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tg py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center" aria-label="TalentGro home">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The STEM talent discovery platform helping the next generation of scientists,
              engineers and builders find their path.
            </p>
            <div className="mt-6 flex gap-3 text-muted-foreground">
              <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-foreground/80 hover:text-brand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} TalentGro Quest. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
