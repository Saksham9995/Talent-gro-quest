import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/site/Logo";

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="flex flex-col justify-between p-8 md:p-12">
        <Link to="/" className="flex items-center" aria-label="TalentGro home">
          <Logo className="h-10 w-auto" />
        </Link>

        <div className="mx-auto w-full max-w-sm py-16">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} TalentGro Quest
        </p>
      </div>

      <div className="relative hidden overflow-hidden bg-ink text-primary-foreground md:block">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <div className="text-xs uppercase tracking-widest text-primary-foreground/60">
            The STEM Talent OS
          </div>
          <div>
            <blockquote className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              "Our students found real career paths — not just grades. TalentGro made
              STEM feel like a quest, not a chore."
            </blockquote>
            <div className="mt-6 text-sm text-primary-foreground/70">
              Marcus Chen — Principal, Cambridge Academy
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sm">
            <div><div className="text-brand text-xl font-semibold">42k+</div><div className="text-primary-foreground/60">Students</div></div>
            <div><div className="text-brand text-xl font-semibold">180</div><div className="text-primary-foreground/60">Schools</div></div>
            <div><div className="text-brand text-xl font-semibold">94%</div><div className="text-primary-foreground/60">NPS</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
