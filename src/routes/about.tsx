import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Gem, Check, ArrowRight, Award, Users, HardHat, ShieldCheck } from "lucide-react";
import { CountOnView } from "@/components/site/CountUpStat";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const ceoPortrait = "/images/ceo.jpg";
const heroImg = "/images/hero-luxury-dusk.jpg";
const WHATSAPP = "https://wa.me/923000641786";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About AZ Design Studio & Contractor — Our Story & Team" },
      { name: "description", content: "A decade of trusted architecture, engineering and turnkey construction across Narowal, Zafarwal and Lahore. Meet the studio built on craftsmanship and integrity." },
      { property: "og:title", content: "About AZ Design Studio & Contractor" },
      { property: "og:description", content: "Our story, mission and the people behind AZ Design Studio & Contractor." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://id-preview--af59db3d-fc94-4b44-8950-1aeda304cd49.lovable.app/images/hero-luxury-dusk.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://id-preview--af59db3d-fc94-4b44-8950-1aeda304cd49.lovable.app/images/hero-luxury-dusk.jpg" },
    ],
  }),
});

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{children}</span>
    </div>
  );
}

const foundation = [
  { Icon: Target, tag: "Mission", title: "Deliver homes that outlast trends.",
    desc: "Engineer contemporary residences and commercial spaces that pair uncompromising build quality with timeless design — on time, on budget.",
    points: ["Premium-grade materials only", "Transparent milestone pricing", "Owner-supervised site quality"] },
  { Icon: Eye, tag: "Vision", title: "Set a new standard for Narowal construction.",
    desc: "Be the most trusted name in modern architecture across Punjab — where clients approve every façade, interior and finish long before ground is broken.",
    points: ["Design-first workflow", "Regional delivery network", "Turnkey accountability"] },
  { Icon: Gem, tag: "Values", title: "Standards built into every wall.",
    desc: "Integrity in our costing. Craftsmanship in our finish. Respect for every family whose home we are entrusted with.",
    points: ["Integrity in every estimate", "Craftsmanship over speed", "Client-first communication"] },
];

const journey = [
  { year: "2015", title: "Studio founded in Narowal", desc: "AZ Design Studio & Contractor opens its first office on CM-1 Main Boulevard." },
  { year: "2017", title: "First luxury villa handover", desc: "Delivered our first turnkey Spanish-style villa — the blueprint for our signature portfolio." },
  { year: "2020", title: "Expanded across Punjab", desc: "Active project delivery in Zafarwal, Sialkot and Lahore with a growing engineering team." },
  { year: "2023", title: "Interior & design division", desc: "Launched in-house interior design and 3D visualization for end-to-end delivery." },
  { year: "2025", title: "160+ projects delivered", desc: "A decade of trusted architecture, engineering and turnkey construction across the region." },
];

const strengths = [
  { Icon: Award, title: "10 Years of Experience", desc: "A decade of continuous learning, refined process and a growing portfolio of premium homes." },
  { Icon: Users, title: "In-house Multi-disciplinary Team", desc: "Architects, structural engineers, MEP experts and interior designers — all under one roof." },
  { Icon: HardHat, title: "Owner-supervised Sites", desc: "The founder personally reviews site quality at every milestone — no compromise, ever." },
  { Icon: ShieldCheck, title: "Transparent Contracts", desc: "Milestone-linked payments, itemized BOQs and honest timelines you can plan your life around." },
];

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-[88px] flex min-h-[70svh] items-center overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImg} alt="AZ Design Studio project" loading="eager" fetchPriority="high" decoding="sync" className="absolute inset-0 h-full w-full object-cover" style={{ transform: "scale(1.05)" }} />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10" />
        <div className="relative mx-auto w-[min(1200px,calc(100%-2rem))] pt-40 pb-24 text-center sm:pt-48">
          <div className="flex justify-center"><Eyebrow>About the Studio</Eyebrow></div>
          <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Ten years of building<span className="block text-accent sm:inline"> homes people love.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-primary-foreground/85 sm:text-lg">
            AZ Design Studio & Contractor is a full-service architecture, engineering and turnkey construction firm serving Narowal, Zafarwal, Sialkot and Lahore.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "About" }]} />

      {/* Stats */}
      <section className="relative z-10 mx-auto -mt-14 w-[min(1200px,calc(100%-2rem))] sm:-mt-20">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-5">
          {[["160+", "Projects Delivered"], ["10", "Years Experience"], ["45+", "Team Members"]].map(([n, l]) => (
            <div key={l} className="shine-box relative overflow-hidden rounded-3xl border border-border bg-card px-3 py-4 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)] sm:px-7 sm:py-8">
              <div className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                <CountOnView value={n} threshold={0.25} />
              </div>
              <div className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:mt-2 sm:text-xs sm:tracking-[0.18em]">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto mt-24 grid w-[min(1200px,calc(100%-2rem))] gap-10 sm:mt-32 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
        <div className="glass-frame relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] lg:mx-0">
          <img src={ceoPortrait} alt="Founder — AZ Design Studio" loading="lazy" decoding="async" className="block h-auto w-full object-cover" />
        </div>
        <div>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Built on trust,<span className="text-accent"> proven on site.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            AZ Design Studio began in Narowal in 2015 with a simple belief — that a home is the most important investment a family will ever make, and it deserves an accountable, design-led builder.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A decade later, we've delivered more than 160 residential and commercial projects across Punjab. Every one of them shares a common thread: transparent pricing, owner-supervised quality control and finishes that stand the test of time.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From your first sketch to move-in day, the same team stays with you — architects, engineers, interior designers and site managers, all working under one accountable studio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90">
              See Our Work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-accent hover:text-accent">
              Talk to the Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <div className="surface-light mt-24 py-20 sm:mt-32 sm:py-28">
        <section className="mx-auto w-[min(1200px,calc(100%-2rem))]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center"><Eyebrow>Our Foundation</Eyebrow></div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The principles that<span className="text-accent"> build every project.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {foundation.map(({ Icon, tag, title, desc, points }) => (
              <article key={tag} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[0_15px_40px_-20px_rgba(4,30,51,0.35)] transition-all hover:-translate-y-1 sm:p-9">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/30">
                    <Icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{tag}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold leading-snug sm:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/80">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/40">
                        <Check className="h-2.5 w-2.5 text-accent" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Timeline */}
      <section className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center"><Eyebrow>Our Journey</Eyebrow></div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            A decade of<span className="text-accent"> steady growth.</span>
          </h2>
        </div>
        <ol className="relative mx-auto mt-14 max-w-3xl border-l border-border pl-8">
          {journey.map((j) => (
            <li key={j.year} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground ring-4 ring-background">•</span>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{j.year}</div>
                <h3 className="mt-2 font-display text-lg font-bold sm:text-xl">{j.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Strengths */}
      <section className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Why Families Choose AZ</Eyebrow>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Four things we<span className="text-accent"> never compromise on.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {strengths.map(({ Icon, title, desc }) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/30">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold sm:text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="shine-box relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:rounded-[2.5rem] sm:px-16 sm:py-20">
          <Eyebrow>Let's Build Together</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to trust your project to a proven team?
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/10">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
