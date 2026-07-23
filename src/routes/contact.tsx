import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TalentGro Quest" },
      { name: "description", content: "Talk to the TalentGro team about bringing STEM talent discovery to your school." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-tg grid gap-16 py-24 md:grid-cols-2">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-brand">Contact</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Let's talk</h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Whether you're a school leader, teacher or partner — we'd love to hear from you.
          </p>
        </div>
        <form className="space-y-4 rounded-2xl border border-border bg-card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="org">Organization</Label>
              <Input id="org" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="msg">How can we help?</Label>
            <Textarea id="msg" rows={5} required />
          </div>
          <Button type="submit" className="btn-brand w-full">Send message</Button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
