import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — TalentGro Quest" },
      { name: "description", content: "Live workshops, competitions and mentor sessions." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="container-tg py-24">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">Events</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Events</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Workshops, hackathons and mentor sessions — coming soon.</p>
      </section>
      <Footer />
    </div>
  ),
});
