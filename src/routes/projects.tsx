import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Student Projects — TalentGro Quest" },
      { name: "description", content: "Explore projects built by students on TalentGro Quest." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-tg py-24">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">Projects</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Student Projects</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Robotics, apps, research write-ups and more — shipped by students.</p>
      </section>
      <Footer />
    </div>
  ),
});
