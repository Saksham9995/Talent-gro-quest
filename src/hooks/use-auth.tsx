import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export type AppRole =
  | "student"
  | "parent"
  | "teacher"
  | "school_admin"
  | "mentor"
  | "super_admin";

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  class_grade: string | null;
  school_name: string | null;
  age: number | null;
  city: string | null;
  interests: string[] | null;
  onboarding_completed: boolean;
}

interface AuthCtx {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  roles: AppRole[];
  loading: boolean;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
}

const Ctx = createContext<AuthCtx | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  const loadExtras = async (userId: string) => {
    const [{ data: p }, { data: r }] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
      supabase.from("user_roles").select("role").eq("user_id", userId),
    ]);
    setProfile((p as Profile) ?? null);
    setRoles(((r ?? []) as { role: AppRole }[]).map((x) => x.role));
  };

  const bootstrap = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
    if (data.session?.user) await loadExtras(data.session.user.id);
    setLoading(false);
  };

  useEffect(() => {
    bootstrap();
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      if (s?.user) {
        // defer to avoid deadlock
        setTimeout(() => loadExtras(s.user.id), 0);
      } else {
        setProfile(null);
        setRoles([]);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const value: AuthCtx = {
    user: session?.user ?? null,
    session,
    profile,
    roles,
    loading,
    refresh: async () => {
      if (session?.user) await loadExtras(session.user.id);
    },
    signOut: async () => {
      await supabase.auth.signOut();
    },
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used within AuthProvider");
  return v;
}

export function primaryRole(roles: AppRole[]): AppRole {
  const order: AppRole[] = [
    "super_admin",
    "school_admin",
    "teacher",
    "mentor",
    "parent",
    "student",
  ];
  for (const r of order) if (roles.includes(r)) return r;
  return "student";
}
