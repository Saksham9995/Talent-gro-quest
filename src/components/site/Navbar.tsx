import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";

const nav = [
  { to: "/programs", label: "Programs" },
  { to: "/challenges", label: "Challenges" },
  { to: "/projects", label: "Projects" },
  { to: "/events", label: "Events" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <AnnouncementBar />
      <div className="container-tg flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="TalentGro home">
          <Logo className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/login">
            <Button variant="ghost" size="sm">Sign in</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="btn-brand">Get started</Button>
          </Link>
        </div>

        <button
          className="md:hidden rounded-md p-2 hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container-tg flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-border pt-3">
              <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">Sign in</Button>
              </Link>
              <Link to="/signup" className="flex-1" onClick={() => setOpen(false)}>
                <Button size="sm" className="btn-brand w-full">Get started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
