import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { useAuth, primaryRole } from "@/hooks/use-auth";
import { ROLE_LABEL, ROLE_NAV } from "@/lib/roles";
import { Sparkles, Rocket } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — TalentGro Quest" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const { profile, roles, loading } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");

  useEffect(() => {
    if (!loading && profile && !profile.onboarding_completed) {
      navigate({ to: "/onboarding", replace: true });
    }
  }, [profile, loading, navigate]);

  if (loading || !profile) {
    return (
      <div className="grid min-h-screen place-items-center bg-subtle/40 text-sm text-muted-foreground">
        Loading your dashboard…
      </div>
    );
  }

  const role = primaryRole(roles);
  const items = ROLE_NAV[role];
  const activeItem = items.find((i) => i.id === active) ?? items[0];

  return (
    <DashboardShell active={active} onSelect={setActive}>
      {active === "overview" ? (
        <Overview name={profile.full_name ?? "there"} role={ROLE_LABEL[role]} />
      ) : (
        <SectionPlaceholder title={activeItem.label} />
      )}
    </DashboardShell>
  );
}

function Overview({ name, role }: { name: string; role: string }) {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-background to-accent/40 p-6 shadow-soft md:p-8">
        <div className="flex items-center gap-2 text-xs font-medium text-brand">
          <Sparkles className="h-4 w-4" /> {role} workspace
        </div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          Welcome back, {name}
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          This is your home base on TalentGro Quest. Use the sidebar to explore your programmes,
          challenges and projects. New modules unlock as we roll them out.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Get started", "Explore challenges", "Complete profile"].map((t) => (
          <div key={t} className="rounded-xl border border-border bg-background p-5 shadow-soft">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-brand">
              <Rocket className="h-4 w-4" />
            </div>
            <div className="mt-3 font-medium">{t}</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Actions and content will appear here as your journey unfolds.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionPlaceholder({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-dashed border-border bg-background p-10 text-center shadow-soft">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-accent text-brand">
          <Sparkles className="h-5 w-5" />
        </div>
        <h2 className="mt-4 text-xl font-semibold tracking-tight">{title}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          This section is on the roadmap. We're keeping the dashboard clean until real data is
          ready — coming in the next phase.
        </p>
      </div>
    </div>
  );
}
