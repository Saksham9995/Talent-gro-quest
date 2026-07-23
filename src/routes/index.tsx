import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Trophy,
  Brain,
  Rocket,
  LineChart,
  Award,
  GraduationCap,
  Users,
  School,
  Shield,
  Check,
  Star,
  Clock,
  BookOpen,
  Cpu,
  FlaskConical,
  Code2,
  Bot,
  Atom,
  Dna,
  Calculator,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TalentGro Quest — STEM Talent Discovery Platform" },
      {
        name: "description",
        content:
          "TalentGro Quest helps students discover STEM talent through challenges, projects, assessments and AI-powered career guidance. For students, parents, schools and administrators.",
      },
      { property: "og:title", content: "TalentGro Quest — STEM Talent Discovery" },
      { property: "og:description", content: "Discover talent. Build projects. Grow careers." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Features />
      <Courses />
      <Mentors />
      <Roles />
      <HowItWorks />
      <Metrics />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}


function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="container-tg relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            AI-powered career guidance is live
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Discover STEM talent.
            <br />
            <span className="text-brand">Build the next generation.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            TalentGro Quest is the modern platform where students uncover skills, join
            innovation challenges, ship projects and get AI-driven career pathways —
            with real oversight from parents, schools and mentors.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/signup">
              <Button size="lg" className="btn-brand h-11 px-5 text-[15px]">
                Start free
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="h-11 px-5 text-[15px]">
                Explore programs
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand" /> Free for students</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand" /> School-safe</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand" /> COPPA aligned</span>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-border bg-card shadow-elevated">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="ml-3 text-xs text-muted-foreground">app.talentgro.quest — Student dashboard</div>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-3">
              <StatCard label="Skill score" value="847" delta="+12%" icon={LineChart} />
              <StatCard label="Projects shipped" value="14" delta="+3 this month" icon={Rocket} />
              <StatCard label="Certificates" value="6" delta="2 pending" icon={Award} />
              <div className="md:col-span-2 rounded-xl border border-border p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">AI Career Path</div>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-medium text-accent-foreground">
                    Updated today
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Based on your work in robotics + strong analytical reasoning, you're
                  trending toward <span className="text-foreground font-medium">Mechatronics Engineering</span>.
                  Next step: complete the "Sensor Fusion" challenge.
                </p>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[68%] rounded-full bg-brand" />
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                  <span>Explorer</span><span>Builder</span><span>Innovator</span>
                </div>
              </div>
              <div className="rounded-xl border border-border p-5">
                <div className="text-sm font-medium">Recommended</div>
                <ul className="mt-3 space-y-3 text-sm">
                  <li className="flex items-start gap-2"><Trophy className="mt-0.5 h-4 w-4 text-brand" /> AI Ethics Sprint</li>
                  <li className="flex items-start gap-2"><Brain className="mt-0.5 h-4 w-4 text-brand" /> Data Reasoning L2</li>
                  <li className="flex items-start gap-2"><Rocket className="mt-0.5 h-4 w-4 text-brand" /> Build an IoT sensor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  delta,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-xl border border-border p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <Icon className="h-4 w-4 text-brand" />
      </div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{delta}</div>
    </div>
  );
}

function LogoStrip() {
  const names = ["Northwood STEM", "Cambridge Academy", "Innovate Labs", "FutureMinds", "Bright Future Schools", "STEM Foundry"];
  return (
    <section className="border-y border-border bg-subtle/40">
      <div className="container-tg py-8">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          Trusted by forward-thinking schools & programs
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {names.map((n) => (
            <div key={n} className="text-center text-sm font-medium text-muted-foreground">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    {
      icon: Brain,
      title: "AI Talent Discovery",
      desc: "Adaptive assessments and behavior signals surface each student's strongest STEM aptitudes.",
    },
    {
      icon: Rocket,
      title: "Real projects, real feedback",
      desc: "Ship robotics builds, apps and research write-ups. Get mentor + AI code review.",
    },
    {
      icon: Trophy,
      title: "Innovation challenges",
      desc: "Monthly sprints designed with industry partners. Winners get scholarships & interviews.",
    },
    {
      icon: LineChart,
      title: "Growth analytics",
      desc: "Track skill velocity, project depth and challenge performance over time.",
    },
    {
      icon: Award,
      title: "Verifiable certificates",
      desc: "Every milestone becomes a shareable, tamper-proof credential.",
    },
    {
      icon: Shield,
      title: "School-grade privacy",
      desc: "Role-based access, audit logs, COPPA & FERPA aligned data handling.",
    },
  ];
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-tg">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand">Product</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            An operating system for STEM potential
          </h2>
          <p className="mt-3 text-muted-foreground">
            Purpose-built for the four sides of student growth — learners, parents,
            schools and administrators — all connected through one intelligent platform.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {feats.map((f) => (
            <div key={f.title} className="group bg-background p-7 transition-colors hover:bg-subtle/60">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roles() {
  const roles = [
    { icon: GraduationCap, title: "Students", desc: "Discover strengths, build a portfolio, and unlock a career path." },
    { icon: Users, title: "Parents", desc: "Follow real progress, achievements and personalized guidance." },
    { icon: School, title: "Schools", desc: "Manage cohorts, analytics and program outcomes in one place." },
    { icon: Shield, title: "Admins", desc: "Control users, programs, events and platform-wide reporting." },
  ];
  return (
    <section className="border-t border-border bg-subtle/40 py-24">
      <div className="container-tg">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand">Built for everyone involved</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">One platform, four perspectives</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {roles.map((r) => (
            <div key={r.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <r.icon className="h-5 w-5 text-brand" />
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Take the diagnostic", desc: "A 12-minute adaptive assessment maps strengths across math, systems, creativity and reasoning." },
    { n: "02", title: "Join challenges & projects", desc: "Enroll in sprints designed with universities and industry partners." },
    { n: "03", title: "Get an AI career path", desc: "Personalized recommendations, skill gaps and next actions — updated weekly." },
  ];
  return (
    <section className="py-24">
      <div className="container-tg grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-brand">How it works</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            From diagnostic to destination — in weeks, not years
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine rigorous assessments with real project work and AI to give every
            student a clear, motivating path forward.
          </p>
        </div>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 rounded-xl border border-border bg-card p-6">
              <div className="text-sm font-mono text-brand">{s.n}</div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const items = [
    { k: "42k+", v: "Students onboarded" },
    { k: "180", v: "Partner schools" },
    { k: "3.2M", v: "Skill checkpoints" },
    { k: "94%", v: "Recommend to a peer" },
  ];
  return (
    <section className="border-y border-border bg-ink text-primary-foreground">
      <div className="container-tg grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.v}>
            <div className="text-3xl font-semibold tracking-tight md:text-4xl">
              <span className="text-brand">{i.k}</span>
            </div>
            <div className="mt-1 text-sm text-primary-foreground/70">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24">
      <div className="container-tg">
        <div className="mx-auto max-w-3xl text-center">
          <Sparkles className="mx-auto h-6 w-6 text-brand" />
          <blockquote className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">
            "TalentGro replaced three fragmented tools for us. Our students actually enjoy
            the challenges, and the analytics finally tell a coherent story to parents."
          </blockquote>
          <div className="mt-6 text-sm text-muted-foreground">
            Dr. Anika Rao — Head of Innovation, Northwood STEM Academy
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="pb-24">
      <div className="container-tg">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-10 text-primary-foreground md:p-16">
          <div className="absolute inset-0 bg-dot opacity-20" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to find the talent hiding in your classroom?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/70">
                Set up a school in under 10 minutes. Free for the first 50 students.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/signup">
                <Button size="lg" className="btn-brand h-11 px-5">Start free</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="h-11 border-white/20 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white">
                  Talk to us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  const courses = [
    {
      icon: Bot,
      tag: "Robotics",
      title: "Robotics & Mechatronics",
      desc: "Design, wire and program autonomous robots. From line-followers to sensor fusion.",
      level: "Beginner → Advanced",
      weeks: "10 weeks",
      lessons: 42,
      rating: 4.9,
    },
    {
      icon: Brain,
      tag: "AI / ML",
      title: "Applied Artificial Intelligence",
      desc: "Build real models with Python — vision, language and reinforcement learning basics.",
      level: "Intermediate",
      weeks: "8 weeks",
      lessons: 36,
      rating: 4.9,
    },
    {
      icon: Code2,
      tag: "Software",
      title: "Full-Stack Coding Studio",
      desc: "Ship a live web app: React, APIs, databases and deployment — mentor reviewed.",
      level: "Beginner → Intermediate",
      weeks: "12 weeks",
      lessons: 54,
      rating: 4.8,
    },
    {
      icon: FlaskConical,
      tag: "Biotech",
      title: "Biotech & Genetics Lab",
      desc: "CRISPR fundamentals, lab notebooks and a capstone research write-up.",
      level: "Advanced",
      weeks: "9 weeks",
      lessons: 30,
      rating: 4.8,
    },
    {
      icon: Atom,
      tag: "Physics",
      title: "Quantum & Modern Physics",
      desc: "Intuition-first physics with simulations, from relativity to quantum computing.",
      level: "Advanced",
      weeks: "10 weeks",
      lessons: 38,
      rating: 4.9,
    },
    {
      icon: Cpu,
      tag: "Hardware",
      title: "IoT & Embedded Systems",
      desc: "ESP32, sensors and cloud dashboards — build a working smart-device product.",
      level: "Intermediate",
      weeks: "8 weeks",
      lessons: 32,
      rating: 4.7,
    },
    {
      icon: Dna,
      tag: "Data",
      title: "Data Science for Teens",
      desc: "Pandas, statistics and storytelling with data. Kaggle-style capstone included.",
      level: "Beginner → Intermediate",
      weeks: "8 weeks",
      lessons: 28,
      rating: 4.8,
    },
    {
      icon: Calculator,
      tag: "Math",
      title: "Advanced Problem Solving",
      desc: "Olympiad-grade reasoning across algebra, number theory, combinatorics.",
      level: "Advanced",
      weeks: "12 weeks",
      lessons: 48,
      rating: 4.9,
    },
  ];
  return (
    <section id="courses" className="border-t border-border py-24 md:py-28">
      <div className="container-tg">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand">Courses</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Classes engineered for real STEM skill
            </h2>
            <p className="mt-3 text-muted-foreground">
              Mentor-led cohorts across eight tracks. Every course ends with a shipped
              project and a verifiable credential.
            </p>
          </div>
          <Link to="/programs">
            <Button variant="outline" className="h-10">
              Browse all classes <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {c.tag}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex items-center justify-between text-[12px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {c.weeks}</span>
                <span className="inline-flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /> {c.lessons} lessons</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.level}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-foreground">
                  <Star className="h-3.5 w-3.5 fill-brand text-brand" /> {c.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mentors() {
  const mentors = [
    {
      name: "Dr. Aarav Mehta",
      role: "AI Researcher",
      org: "Ex-DeepMind · IIT Bombay",
      focus: "Machine Learning",
      years: "12 yrs",
      rating: 4.9,
      students: "1.2k",
      initials: "AM",
      accent: "from-[oklch(0.42_0.14_278)] to-[oklch(0.28_0.10_278)]",
    },
    {
      name: "Priya Nair",
      role: "Robotics Lead",
      org: "Boston Dynamics alum",
      focus: "Robotics & Control",
      years: "9 yrs",
      rating: 4.9,
      students: "860",
      initials: "PN",
      accent: "from-[oklch(0.55_0.14_45)] to-[oklch(0.38_0.12_40)]",
    },
    {
      name: "Rohan Kapoor",
      role: "Senior SWE",
      org: "Stripe · Google",
      focus: "Full-Stack & Systems",
      years: "10 yrs",
      rating: 4.8,
      students: "1.5k",
      initials: "RK",
      accent: "from-[oklch(0.50_0.14_260)] to-[oklch(0.30_0.10_275)]",
    },
    {
      name: "Dr. Meera Iyer",
      role: "Biotech Scientist",
      org: "Broad Institute",
      focus: "Genetics & CRISPR",
      years: "14 yrs",
      rating: 5.0,
      students: "540",
      initials: "MI",
      accent: "from-[oklch(0.48_0.14_155)] to-[oklch(0.30_0.10_160)]",
    },
    {
      name: "Vikram Shah",
      role: "Physicist",
      org: "CERN collaborator",
      focus: "Quantum & Modern Physics",
      years: "15 yrs",
      rating: 4.9,
      students: "720",
      initials: "VS",
      accent: "from-[oklch(0.42_0.16_300)] to-[oklch(0.28_0.12_290)]",
    },
    {
      name: "Ananya Bose",
      role: "Data Scientist",
      org: "Airbnb · Kaggle GM",
      focus: "Data Science",
      years: "8 yrs",
      rating: 4.9,
      students: "1.1k",
      initials: "AB",
      accent: "from-[oklch(0.55_0.15_25)] to-[oklch(0.35_0.12_20)]",
    },
    {
      name: "Kabir Sinha",
      role: "Hardware Engineer",
      org: "Tesla · Nvidia",
      focus: "IoT & Embedded",
      years: "11 yrs",
      rating: 4.8,
      students: "640",
      initials: "KS",
      accent: "from-[oklch(0.45_0.12_220)] to-[oklch(0.28_0.10_230)]",
    },
    {
      name: "Dr. Sneha Rao",
      role: "Mathematician",
      org: "IMO Coach · Cambridge",
      focus: "Olympiad Mathematics",
      years: "13 yrs",
      rating: 5.0,
      students: "980",
      initials: "SR",
      accent: "from-[oklch(0.42_0.14_82)] to-[oklch(0.30_0.10_78)]",
    },
  ];
  return (
    <section id="mentors" className="border-t border-border bg-subtle/40 py-24 md:py-28">
      <div className="container-tg">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand">Mentors</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Learn from a hand-picked circle of experts
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every mentor on TalentGro comes from a top research lab, university or
              product team — vetted, trained and matched to your goals.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <div><div className="text-2xl font-semibold text-foreground">240+</div>Active mentors</div>
            <div><div className="text-2xl font-semibold text-foreground">32</div>Countries</div>
            <div><div className="text-2xl font-semibold text-foreground">4.9<span className="text-brand">★</span></div>Avg rating</div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((m) => (
            <div
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${m.accent} text-base font-semibold text-white ring-2 ring-background`}
                >
                  {m.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.role}</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">{m.org}</div>
              <div className="mt-3 inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground">
                {m.focus}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-[12px] text-muted-foreground">
                <span>{m.years} experience</span>
                <span className="inline-flex items-center gap-1 text-foreground">
                  <Star className="h-3.5 w-3.5 fill-brand text-brand" /> {m.rating}
                </span>
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">{m.students} students mentored</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

