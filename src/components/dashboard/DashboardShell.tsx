import { useState, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Sparkles, LogOut, Menu, X } from "lucide-react";
import { useAuth, primaryRole } from "@/hooks/use-auth";
import { ROLE_NAV, ROLE_LABEL } from "@/lib/roles";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  active: string;
  onSelect: (id: string) => void;
  children: ReactNode;
}

export function DashboardShell({ active, onSelect, children }: Props) {
  const { profile, roles, signOut } = useAuth();
  const navigate = useNavigate();
  const role = primaryRole(roles);
  const items = ROLE_NAV[role];
  const [open, setOpen] = useState(false);

  const initials =
    (profile?.full_name ?? profile?.email ?? "U")
      .split(" ")
      .map((s) => s[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/login", replace: true });
  };

  const activeLabel = items.find((i) => i.id === active)?.label ?? "Dashboard";

  const NavList = ({ onNav }: { onNav?: () => void }) => (
    <nav className="flex flex-col gap-0.5 p-3">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              onSelect(item.id);
              onNav?.();
            }}
            className={[
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:bg-subtle hover:text-foreground",
            ].join(" ")}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="truncate">{item.label}</span>
          </button>
        );
      })}
      <button
        onClick={handleSignOut}
        className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </button>
    </nav>
  );

  return (
    <div className="flex min-h-screen bg-subtle/40">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-background md:flex md:flex-col">
        <Link to="/" className="flex items-center gap-2 border-b border-border px-5 py-4">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight">
            TalentGro <span className="text-brand">Quest</span>
          </span>
        </Link>
        <div className="flex-1 overflow-y-auto"><NavList /></div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <aside
            className="absolute left-0 top-0 flex h-full w-72 flex-col bg-background shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-5 py-4">
              <Link to="/" className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="font-semibold tracking-tight">TalentGro</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto"><NavList onNav={() => setOpen(false)} /></div>
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="truncate text-sm font-semibold md:text-base">{activeLabel}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground sm:inline">
              {ROLE_LABEL[role]}
            </span>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-ink text-primary-foreground text-xs">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
