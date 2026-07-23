import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TalentGro Quest" },
      { name: "description", content: "Why we're building the STEM Talent OS for the next generation." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-tg py-24">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">About</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">About TalentGro</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We believe every student has a STEM strength worth discovering. TalentGro
          brings students, parents, schools and mentors onto one platform to make that
          discovery real.
        </p>
      </section>
      <Footer />
    </div>
  ),
});
