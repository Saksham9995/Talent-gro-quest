import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/onboarding")({
  head: () => ({ meta: [{ title: "Welcome — TalentGro Quest" }] }),
  component: OnboardingPage,
});

const INTEREST_OPTIONS = [
  "Coding", "Robotics", "Science", "Mathematics", "AI",
  "Design", "Engineering", "Data", "Space", "Biology",
];

function OnboardingPage() {
  const { user, profile, refresh, loading } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [classGrade, setClassGrade] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && profile?.onboarding_completed) {
      navigate({ to: "/dashboard", replace: true });
    }
    if (profile) {
      setFullName(profile.full_name ?? "");
      setClassGrade(profile.class_grade ?? "");
      setSchoolName(profile.school_name ?? "");
      setAge(profile.age ? String(profile.age) : "");
      setCity(profile.city ?? "");
      setInterests(profile.interests ?? []);
    }
  }, [profile, loading, navigate]);

  const toggle = (i: string) =>
    setInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase.from("profiles").update({
      full_name: fullName,
      class_grade: classGrade || null,
      school_name: schoolName || null,
      age: age ? parseInt(age, 10) : null,
      city: city || null,
      interests,
      onboarding_completed: true,
    }).eq("id", user.id);
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Welcome to TalentGro Quest!");
    await refresh();
    navigate({ to: "/dashboard", replace: true });
  };

  return (
    <div className="min-h-screen bg-subtle/40 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight">
            TalentGro <span className="text-brand">Quest</span>
          </span>
        </div>
        <div className="rounded-2xl border border-border bg-background p-6 shadow-soft md:p-8">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Let's set up your profile</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Just a few quick details so we can personalize your STEM journey.
          </p>
          <form onSubmit={submit} className="mt-6 space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="classGrade">Class / Grade</Label>
                <Input id="classGrade" placeholder="e.g. Grade 9" value={classGrade} onChange={(e) => setClassGrade(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" min={5} max={100} value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="school">School name</Label>
              <Input id="school" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="city">City</Label>
              <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
              <Label>Interests</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map((i) => {
                  const active = interests.includes(i);
                  return (
                    <button
                      type="button"
                      key={i}
                      onClick={() => toggle(i)}
                      className={[
                        "rounded-full border px-3 py-1.5 text-xs transition-colors",
                        active
                          ? "border-brand bg-accent text-accent-foreground"
                          : "border-border text-muted-foreground hover:text-foreground",
                      ].join(" ")}
                    >
                      {i}
                    </button>
                  );
                })}
              </div>
            </div>
            <Button type="submit" className="btn-brand w-full" disabled={saving}>
              {saving ? "Saving…" : "Continue to dashboard"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
