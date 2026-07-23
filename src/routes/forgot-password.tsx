import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset password — TalentGro Quest" },
      { name: "description", content: "Reset your TalentGro Quest password." },
    ],
  }),
  component: ForgotPage,
});

function ForgotPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    setSent(true);
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="We'll email you a secure link to set a new password."
      footer={
        <>
          Remembered it?{" "}
          <Link to="/login" className="font-medium text-brand hover:underline">Back to sign in</Link>
        </>
      }
    >
      {sent ? (
        <div className="rounded-lg border border-border bg-subtle/60 p-4 text-sm">
          If an account exists for <span className="font-medium">{email}</span>, a reset link is on its way.
        </div>
      ) : (
        <form className="space-y-4" onSubmit={submit}>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@school.edu" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <Button type="submit" className="btn-brand w-full" disabled={loading}>
            {loading ? "Sending…" : "Send reset link"}
          </Button>
        </form>
      )}
    </AuthLayout>
  );
}
