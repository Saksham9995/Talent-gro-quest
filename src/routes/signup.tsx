import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, Users, School, Shield, UserCog, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { AppRole } from "@/hooks/use-auth";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account — TalentGro Quest" },
      { name: "description", content: "Join TalentGro Quest as a student, parent, teacher, mentor, or school." },
    ],
  }),
  component: SignupPage,
});

const roles: { id: AppRole; label: string; icon: typeof GraduationCap }[] = [
  { id: "student", label: "Student", icon: GraduationCap },
  { id: "parent", label: "Parent", icon: Users },
  { id: "teacher", label: "Teacher", icon: UserCog },
  { id: "mentor", label: "Mentor", icon: Sparkles },
  { id: "school_admin", label: "School", icon: School },
];

function SignupPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<AppRole>("student");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: {
          full_name: `${firstName} ${lastName}`.trim(),
          role,
        },
      },
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    if (data.session) {
      navigate({ to: "/onboarding", replace: true });
    } else {
      setSent(true);
    }
  };

  const google = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });
    if (error) return toast.error(error.message ?? "Google sign-in failed");
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Pick your role — we'll tailor the experience to you."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-brand hover:underline">Sign in</Link>
        </>
      }
    >
      {sent ? (
        <div className="rounded-lg border border-border bg-subtle/60 p-4 text-sm">
          Check your inbox — we sent a verification link to <span className="font-medium">{email}</span>.
          Click it to activate your account.
        </div>
      ) : (
        <>
          <Shield className="hidden" />
          <div className="mb-5 grid grid-cols-5 gap-1.5">
            {roles.map((r) => {
              const active = role === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id)}
                  className={[
                    "flex flex-col items-center gap-1 rounded-lg border px-1.5 py-2.5 text-[10px] transition-colors sm:text-xs",
                    active
                      ? "border-brand bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  <r.icon className="h-4 w-4" />
                  {r.label}
                </button>
              );
            })}
          </div>

          <form className="space-y-4" onSubmit={submit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@school.edu" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="At least 8 characters" minLength={8} required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="btn-brand w-full" disabled={loading}>
              {loading ? "Creating account…" : "Create account"}
            </Button>
            <div className="relative py-2 text-center text-xs text-muted-foreground">
              <span className="relative z-10 bg-background px-2">or</span>
              <span className="absolute left-0 top-1/2 h-px w-full bg-border" />
            </div>
            <Button type="button" variant="outline" className="w-full" onClick={google}>
              Continue with Google
            </Button>
            <p className="text-center text-[11px] text-muted-foreground">
              By continuing you agree to our Terms and Privacy Policy.
            </p>
          </form>
        </>
      )}
    </AuthLayout>
  );
}
