import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/challenges")({
  head: () => ({
    meta: [
      { title: "Innovation Challenges — TalentGro Quest" },
      { name: "description", content: "Monthly innovation challenges designed with universities and industry partners." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-tg py-24">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">Challenges</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Innovation Challenges</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Sprint-style competitions with scholarships and internship offers on the line.</p>
      </section>
      <Footer />
    </div>
  ),
});
