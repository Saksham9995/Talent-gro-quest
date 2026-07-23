import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  FlaskConical,
  Atom,
  Cpu,
  Dna,
  Calculator,
  Clock,
  BookOpen,
  Star,
  Users,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "STEM Programs & Courses — TalentGro Quest" },
      {
        name: "description",
        content:
          "Explore mentor-led STEM courses: Robotics, AI, Full-Stack, Biotech, Physics, IoT, Data Science and Olympiad Math.",
      },
      { property: "og:title", content: "STEM Programs & Courses — TalentGro Quest" },
      { property: "og:description", content: "Mentor-led STEM cohorts with real projects and verified credentials." },
    ],
  }),
  component: Page,
});

const courses = [
  {
    slug: "robotics",
    icon: Bot,
    tag: "Robotics",
    title: "Robotics & Mechatronics",
    desc: "Design, wire and program autonomous robots. From line-followers to sensor fusion.",
    level: "Beginner → Advanced",
    weeks: "10 weeks",
    lessons: 42,
    rating: 4.9,
    seats: 12,
    price: "₹8,999",
    mentor: "Priya Nair",
    outcomes: ["Build an autonomous rover", "PID & sensor fusion", "Capstone showcase"],
  },
  {
    slug: "ai",
    icon: Brain,
    tag: "AI / ML",
    title: "Applied Artificial Intelligence",
    desc: "Build real models with Python — vision, language and reinforcement learning basics.",
    level: "Intermediate",
    weeks: "8 weeks",
    lessons: 36,
    rating: 4.9,
    seats: 8,
    price: "₹9,499",
    mentor: "Dr. Aarav Mehta",
    outcomes: ["Train an image classifier", "Fine-tune an LLM", "Deploy a demo"],
  },
  {
    slug: "fullstack",
    icon: Code2,
    tag: "Software",
    title: "Full-Stack Coding Studio",
    desc: "Ship a live web app: React, APIs, databases and deployment — mentor reviewed.",
    level: "Beginner → Intermediate",
    weeks: "12 weeks",
    lessons: 54,
    rating: 4.8,
    seats: 15,
    price: "₹7,999",
    mentor: "Rohan Kapoor",
    outcomes: ["Launch a live web app", "Auth & databases", "Portfolio project"],
  },
  {
    slug: "biotech",
    icon: FlaskConical,
    tag: "Biotech",
    title: "Biotech & Genetics Lab",
    desc: "CRISPR fundamentals, lab notebooks and a capstone research write-up.",
    level: "Advanced",
    weeks: "9 weeks",
    lessons: 30,
    rating: 4.8,
    seats: 6,
    price: "₹10,999",
    mentor: "Dr. Meera Iyer",
    outcomes: ["Read scientific papers", "Design an experiment", "Publish a write-up"],
  },
  {
    slug: "physics",
    icon: Atom,
    tag: "Physics",
    title: "Quantum & Modern Physics",
    desc: "Intuition-first physics with simulations, from relativity to quantum computing.",
    level: "Advanced",
    weeks: "10 weeks",
    lessons: 38,
    rating: 4.9,
    seats: 10,
    price: "₹9,999",
    mentor: "Vikram Shah",
    outcomes: ["Simulate quantum gates", "Special relativity", "Research capstone"],
  },
  {
    slug: "iot",
    icon: Cpu,
    tag: "Hardware",
    title: "IoT & Embedded Systems",
    desc: "ESP32, sensors and cloud dashboards — build a working smart-device product.",
    level: "Intermediate",
    weeks: "8 weeks",
    lessons: 32,
    rating: 4.7,
    seats: 12,
    price: "₹8,499",
    mentor: "Kabir Sinha",
    outcomes: ["Build an IoT device", "Cloud dashboards", "Ship a demo"],
  },
  {
    slug: "data",
    icon: Dna,
    tag: "Data",
    title: "Data Science for Teens",
    desc: "Pandas, statistics and storytelling with data. Kaggle-style capstone included.",
    level: "Beginner → Intermediate",
    weeks: "8 weeks",
    lessons: 28,
    rating: 4.8,
    seats: 20,
    price: "₹6,999",
    mentor: "Ananya Bose",
    outcomes: ["Analyse real datasets", "Compete on Kaggle", "Data story capstone"],
  },
  {
    slug: "math",
    icon: Calculator,
    tag: "Math",
    title: "Advanced Problem Solving",
    desc: "Olympiad-grade reasoning across algebra, number theory, combinatorics.",
    level: "Advanced",
    weeks: "12 weeks",
    lessons: 48,
    rating: 4.9,
    seats: 14,
    price: "₹7,499",
    mentor: "Dr. Sneha Rao",
    outcomes: ["Olympiad techniques", "Proof writing", "Mock contests"],
  },
];

function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="border-b border-border bg-subtle/40">
        <div className="container-tg py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand">Programs</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              STEM Courses & Live Classes
            </h1>
            <p className="mt-4 text-muted-foreground">
              Mentor-led cohorts. Real projects. Verifiable credentials.
              Enroll in the next cohort and start shipping in week one.
            </p>
          </div>
        </div>
      </section>

      <section className="container-tg py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article
              key={c.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {c.tag}
                </span>
              </div>

              <h2 className="mt-5 text-lg font-semibold leading-snug">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>

              <ul className="mt-4 space-y-1.5 text-sm">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 text-brand" /> {o}
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-[12px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {c.weeks}</span>
                <span className="inline-flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /> {c.lessons} lessons</span>
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {c.seats} seats left</span>
                <span className="inline-flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-brand text-brand" /> {c.rating}</span>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Mentor</div>
                  <div className="text-sm font-medium">{c.mentor}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">From</div>
                  <div className="text-sm font-semibold">{c.price}</div>
                </div>
              </div>

              <Link to="/signup" className="mt-5">
                <Button className="btn-brand w-full">
                  Enroll now <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-subtle/40">
        <div className="container-tg py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Not sure which course fits?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Take our free 12-minute diagnostic and get an AI-recommended track based
            on your strengths.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/signup">
              <Button size="lg" className="btn-brand h-11 px-5">Start free diagnostic</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-11 px-5">Talk to an advisor</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
