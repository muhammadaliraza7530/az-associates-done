import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2, Ruler, Hammer, Layers, HardHat, KeyRound,
  Check, ArrowRight, ClipboardList, PencilRuler, Wrench, Sparkles,
} from "lucide-react";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const heroImg = "/images/hero-mediterranean-hd.jpg";
const WHATSAPP = "https://wa.me/923000641786";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Construction, Architecture & Interiors | AZ Design Studio" },
      { name: "description", content: "Full-service construction, architectural design, renovation, interior design, project management and turnkey delivery across Narowal, Zafarwal and Lahore." },
      { property: "og:title", content: "Our Services — AZ Design Studio & Contractor" },
      { property: "og:description", content: "Six disciplines. One accountable studio. From blueprint to the keys in your hand." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://id-preview--af59db3d-fc94-4b44-8950-1aeda304cd49.lovable.app/images/hero-mediterranean-hd.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://id-preview--af59db3d-fc94-4b44-8950-1aeda304cd49.lovable.app/images/hero-mediterranean-hd.jpg" },
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

const services = [
  {
    Icon: Building2, title: "Construction",
    desc: "End-to-end residential and commercial construction — from grey structure to finished handover, engineered to modern standards.",
    points: ["RCC frame & grey structure", "Waterproofing & DPC systems", "MEP rough-in & finishing", "Quality-tested materials only"],
  },
  {
    Icon: Ruler, title: "Architectural Design",
    desc: "Bespoke architectural design led by a design-first workflow — 2D drawings, 3D visualization and approvals-ready documentation.",
    points: ["Site & concept planning", "Photorealistic 3D renders", "Structural coordination", "Municipal approval drawings"],
  },
  {
    Icon: Hammer, title: "Renovation & Upgrades",
    desc: "Bring an existing home up to modern standards — structural retrofits, layout changes and full interior refreshes without the drama.",
    points: ["Structural retrofits", "Kitchen & bath remodels", "Façade upgrades", "Electrical & plumbing rework"],
  },
  {
    Icon: Layers, title: "Interior Design",
    desc: "In-house interior design and 3D visualization — from furniture layouts to ceiling details, delivered by a single accountable team.",
    points: ["Space planning & mood boards", "Ceiling & lighting design", "Custom joinery & finishes", "Furniture & décor curation"],
  },
  {
    Icon: HardHat, title: "Project Management",
    desc: "Milestone-driven project management with weekly reports, transparent budgets and an owner-supervised quality gate at every stage.",
    points: ["Weekly progress reports", "Milestone-linked billing", "Vendor & material tracking", "On-site quality inspections"],
  },
  {
    Icon: KeyRound, title: "Turnkey Delivery",
    desc: "One contract, one accountable team, one handover date. We take responsibility from the first blueprint to your move-in day.",
    points: ["Single point of accountability", "Fixed-price turnkey option", "Interiors ready on handover", "12-month workmanship warranty"],
  },
];

const process = [
  { Icon: ClipboardList, step: "01", title: "Consultation", desc: "Share your plot, budget and lifestyle. We visit the site and prepare a feasibility brief within a week." },
  { Icon: PencilRuler, step: "02", title: "Design & Approvals", desc: "Concept, 3D renders and structural drawings — approved by you before a single brick is laid." },
  { Icon: Wrench, step: "03", title: "Construction", desc: "Milestone-linked execution with weekly reports, owner-supervised quality checks and honest timelines." },
  { Icon: Sparkles, step: "04", title: "Handover", desc: "Snag list, deep clean, keys handed over — followed by a 12-month workmanship warranty." },
];

function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-[88px] flex min-h-[70svh] items-center overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImg} alt="Modern residence exterior" loading="eager" fetchPriority="high" decoding="sync" className="absolute inset-0 h-full w-full object-cover" style={{ transform: "scale(1.05)" }} />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10" />
        <div className="relative mx-auto w-[min(1200px,calc(100%-2rem))] pt-40 pb-24 text-center sm:pt-48">
          <div className="flex justify-center"><Eyebrow>Our Services</Eyebrow></div>
          <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Everything from concept<span className="block text-accent sm:inline"> to handover.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-primary-foreground/85 sm:text-lg">
            Six disciplines. One accountable studio. From the first blueprint to the keys in your hand.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* Services grid */}
      <section className="mx-auto mt-20 w-[min(1200px,calc(100%-2rem))] sm:mt-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map(({ Icon, title, desc, points }) => (
            <article key={title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[0_15px_40px_-20px_rgba(4,30,51,0.35)] transition-all hover:-translate-y-1 hover:border-accent/60 sm:p-9">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/30">
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold sm:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/85">
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

      {/* Process */}
      <div className="surface-light mt-24 py-20 sm:mt-32 sm:py-28">
        <section className="mx-auto w-[min(1200px,calc(100%-2rem))]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center"><Eyebrow>How We Work</Eyebrow></div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A simple, transparent<span className="text-accent"> four-step process.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map(({ Icon, step, title, desc }) => (
              <div key={step} className="relative rounded-3xl border border-border bg-card p-7">
                <div className="absolute right-6 top-5 font-display text-3xl font-bold text-accent/25">{step}</div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/30">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>




      {/* CTA */}
      <section className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="shine-box relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:rounded-[2.5rem] sm:px-16 sm:py-20">
          <Eyebrow>Ready to Start?</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Book a free consultation with our team.
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">Clear answers, transparent pricing and a realistic timeline for your project.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/10">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
