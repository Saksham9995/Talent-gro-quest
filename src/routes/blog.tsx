import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — TalentGro Quest" },
      { name: "description", content: "Insights on STEM education, careers and innovation." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-tg py-24">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">Blog</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Blog</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Ideas from the TalentGro team and community.</p>
      </section>
      <Footer />
    </div>
  ),
});
