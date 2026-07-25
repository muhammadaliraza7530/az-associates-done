import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Building2, HardHat, Ruler, Hammer, Layers, KeyRound,
  MapPin, Phone, Target, Eye, Gem, Check,
  ShieldCheck, Clock, Handshake, Users, Sparkles, Home as HomeIcon,
} from "lucide-react";


const ceoPortrait = "/images/ceo.jpg";
const heroSpanish = "/images/hero-spanish-hd.jpg";
const heroLuxuryDusk = "/images/hero-luxury-dusk.jpg";
const heroMediterranean = "/images/hero-mediterranean-hd.jpg";
const villaDha = "/images/villa-dha.jpg";
const villaSpanish = "/images/villa-spanish.jpg";
const villaDusk = "/images/hero-villa-dusk.jpg";
const villaInterior = "/images/villa-interior.jpg";
const projConstruction = "/images/project-construction.jpg";
const projModern = "/images/project-modern.jpg";
const projBungalow = "/images/project-bungalow.jpg";
const projAerial = "/images/project-aerial.jpg";
const projArch = "/images/project-arch.jpg";
const interiorBedroom = "/images/interior-bedroom.jpg";

import { CountOnView } from "@/components/site/CountUpStat";
import { MovingGallery } from "@/components/site/MovingGallery";
import { WhyChooseCarousel } from "@/components/site/WhyChooseCarousel";
import { Reveal } from "@/components/site/Reveal";

const WHATSAPP = "https://wa.me/923000641786";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AZ Design Studio & Contractor — Build Your Dream Home in Narowal" },
      { name: "description", content: "AZ Design Studio & Contractor — architecture, engineering & turnkey construction across Narowal, Zafarwal & Lahore. We build your dreams with strength and trust." },
      { property: "og:title", content: "AZ Design Studio & Contractor" },
      { property: "og:description", content: "Architecture, engineering and turnkey construction across Punjab, Pakistan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: "/images/hero-spanish-hd.jpg", fetchpriority: "high" },
    ],
  }),
});

const heroSlides = [
  { img: heroSpanish, eyebrow: "AZ Design Studio & Contractor", titleLead: "Welcome to", titleAccent: "AZ Design Studio.",
    desc: "A full-service architecture, engineering & turnkey construction firm — building across Narowal, Zafarwal & Lahore." },
  { img: heroLuxuryDusk, eyebrow: "Design · Build · Deliver", titleLead: "Crafting", titleAccent: "timeless homes.",
    desc: "Premium residential and commercial delivery — from luxury bungalows to modern estates." },
  { img: heroMediterranean, eyebrow: "Turnkey Delivery", titleLead: "From blueprint", titleAccent: "to the keys in your hand.",
    desc: "Architecture, grey structure, finishing and interiors — one accountable team from concept to handover." },
  { img: villaDha, eyebrow: "Luxury Villas", titleLead: "Modern villas,", titleAccent: "timeless craftsmanship.",
    desc: "Premium residential estates — Spanish, Mediterranean and contemporary architecture built to last generations." },
];


const services = [
  { Icon: Building2, title: "Construction", gradient: "linear-gradient(135deg,#f97316,#dc2626)" },
  { Icon: Ruler, title: "Architectural Design", gradient: "linear-gradient(135deg,#38bdf8,#2563eb)" },
  { Icon: Hammer, title: "Renovation & Upgrades", gradient: "linear-gradient(135deg,#fbbf24,#ea580c)" },
  { Icon: Layers, title: "Interior Design", gradient: "linear-gradient(135deg,#a78bfa,#7c3aed)" },
  { Icon: HardHat, title: "Project Management", gradient: "linear-gradient(135deg,#34d399,#059669)" },
  { Icon: KeyRound, title: "Turnkey Delivery", gradient: "linear-gradient(135deg,#f472b6,#db2777)" },
];

const whyUs = [
  { Icon: ShieldCheck, gradient: "linear-gradient(135deg,#38bdf8,#2563eb)", title: "Quality You Can Trust", desc: "Top-grade materials and modern engineering standards on every site." },
  { Icon: Clock, gradient: "linear-gradient(135deg,#f97316,#dc2626)", title: "On-Time Completion", desc: "Milestone-driven project management — no missed deadlines." },
  { Icon: Handshake, gradient: "linear-gradient(135deg,#34d399,#059669)", title: "Transparent Dealing", desc: "Clear costing, clear timelines, clear communication at every step." },
  { Icon: Users, gradient: "linear-gradient(135deg,#a78bfa,#7c3aed)", title: "Experienced Professionals", desc: "Certified engineers, architects and site managers with proven records." },
  { Icon: Sparkles, gradient: "linear-gradient(135deg,#fbbf24,#ea580c)", title: "Customized Solutions", desc: "Every home tailored to your family, plot and lifestyle." },
  { Icon: HomeIcon, gradient: "linear-gradient(135deg,#f472b6,#db2777)", title: "Dream Spaces Built For You", desc: "From your first sketch to move-in day — we make the vision real." },
];

const signatureWork = [
  { src: heroSpanish, alt: "Spanish luxury villa at golden hour" },
  { src: villaDha, alt: "Modern DHA-style luxury villa" },
  { src: heroLuxuryDusk, alt: "Contemporary villa at dusk" },
  { src: projModern, alt: "Contemporary three-story home" },
  { src: heroMediterranean, alt: "Grand Mediterranean residence" },
  { src: projAerial, alt: "Aerial view of luxury residence" },
  { src: villaDusk, alt: "Modern villa at dusk" },
  { src: projArch, alt: "Grand arched entryway residence" },
];

const movingImages = [
  { src: villaDha, alt: "DHA-style villa" },
  { src: projModern, alt: "Contemporary facade" },
  { src: heroSpanish, alt: "Spanish villa" },
  { src: projConstruction, alt: "Site progress" },
  { src: villaInterior, alt: "Luxury interior" },
  { src: projBungalow, alt: "Modern bungalow" },
  { src: projAerial, alt: "Aerial view" },
  { src: projArch, alt: "Arched residence" },
  { src: interiorBedroom, alt: "Master bedroom" },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{children}</span>
    </div>
  );
}

function Index() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="shine-box relative -mt-[88px] flex min-h-[100svh] items-center overflow-hidden bg-primary text-primary-foreground">
        {heroSlides.map((s, i) => (
          <img
            key={s.img}
            src={s.img}
            alt={s.eyebrow}
            loading={i === 0 ? "eager" : "lazy"}
            {...(i === 0 ? { fetchPriority: "high" as const } : {})}
            decoding={i === 0 ? "sync" : "async"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: "scale(1.06)" }}
          />
        ))}
        <div className="absolute inset-0 bg-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-primary/10" />


        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-accent" : "w-4 bg-primary-foreground/40"}`}
            />
          ))}
        </div>

        <div className="relative mx-auto w-[min(1200px,calc(100%-2rem))] pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          {heroSlides.map((s, i) => (
            <div
              key={s.img}
              aria-hidden={i !== slide}
              className={`transition-opacity duration-[2000ms] ease-in-out ${
                i === slide ? "relative opacity-100" : "pointer-events-none absolute inset-x-0 opacity-0"
              }`}
            >
              <div className="flex justify-center"><Eyebrow>{s.eyebrow}</Eyebrow></div>
              <h1 className="mx-auto mt-5 max-w-4xl text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {s.titleLead}
                <span className="rise-mask sm:inline">
                  {i === slide ? (
                    <span key={slide} className="animate-rise-up block text-accent sm:inline"> {s.titleAccent}</span>
                  ) : (
                    <span className="block text-accent sm:inline"> {s.titleAccent}</span>
                  )}
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-primary-foreground/85 sm:text-lg">{s.desc}</p>
            </div>
          ))}

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="/projects"
               className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-lg shadow-black/30 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-black/40">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur hover:bg-primary-foreground/10">
              Request Consultation
            </a>
          </div>
        </div>
      </section>


      {/* Stats */}
      <section className="relative z-10 mx-auto -mt-14 w-[min(1200px,calc(100%-2rem))] sm:-mt-20">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-5">
          {[["160+", "Projects Delivered"], ["10", "Years Experience"], ["5", "K+ Followers"]].map(([n, l]) => (
            <div key={l} className="shine-box group relative overflow-hidden rounded-3xl border border-border bg-card px-3 py-4 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)] transition-all hover:-translate-y-0.5 hover:border-accent/60 sm:px-7 sm:py-8">
              <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/20 blur-2xl opacity-60 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="relative font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                <CountOnView value={n} threshold={0.25} />
              </div>
              <div className="relative mt-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:mt-2 sm:text-xs sm:tracking-[0.18em]">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Message */}
      <section id="about" className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center"><Eyebrow>From the Desk of the Founder</Eyebrow></div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            A message from<span className="text-accent"> our founder.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
          <div className="group relative mx-auto w-full max-w-md lg:mx-0">
            <span aria-hidden className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--color-steel)_55%,transparent),transparent_70%)] blur-3xl opacity-90" />
            <span aria-hidden className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,#7dd3fc_40%,transparent),transparent_75%)] blur-2xl" />
            <div className="glass-frame relative block w-full overflow-hidden rounded-[2rem]">
              <img src={ceoPortrait} alt="AZ Contractor — Founder" loading="lazy" decoding="async" className="relative z-[1] block h-auto w-full object-cover" />
            </div>
            <div className="relative z-[4] mx-auto mt-6 w-fit rounded-full border border-accent/40 bg-card/70 px-5 py-2 text-center backdrop-blur">
              <p className="text-sm font-semibold tracking-wide text-accent sm:text-base">Founder &amp; Lead Engineer</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">AZ Design Studio &amp; Contractor</p>
            </div>
          </div>

          <article className="shine-box relative overflow-hidden rounded-3xl border border-border bg-card p-7 sm:p-9 lg:p-10">
            <span aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <div className="text-6xl font-serif leading-none text-accent/60">&ldquo;</div>
              <p className="mt-2 text-base leading-relaxed text-foreground/90 sm:text-lg">
                At AZ Design Studio, we stand for one thing — trust. Every wall we raise
                and every finish we approve is a promise kept to a family who entrusted us with their
                life&rsquo;s biggest investment.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/90 sm:text-lg">
                Our engineers, architects and craftsmen share one belief: quality is not a feature,
                it is the foundation. From the first blueprint to handover day, you will always know
                exactly where your project stands.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/90 sm:text-lg">
                Thank you for considering AZ Design Studio. It would be a privilege to build with you.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-10 bg-accent/60" />
                <p className="text-sm font-semibold">
                  <span className="text-accent">Founder</span>
                  <span className="text-muted-foreground"> — AZ Design Studio &amp; Contractor</span>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Recent Work — moving gallery */}
      <div id="projects" className="mt-20 sm:mt-28">
        <MovingGallery images={movingImages} />
      </div>

      {/* Studio Highlights — social posts, premium bento */}
      <section className="relative mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center"><Eyebrow>From Our Studio</Eyebrow></div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Featured on our<span className="text-accent"> socials.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A closer look at the promise, the process and the people behind every AZ home.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-7 lg:grid-cols-12">
          {/* Featured big card — Dream Home */}
          <a
            href="https://www.facebook.com/azdesignstudioandcontractor"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_25px_70px_-25px_rgba(4,30,51,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_35px_90px_-25px_rgba(4,30,51,0.65)] lg:col-span-7"
          >
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-accent/30" />
            <span aria-hidden className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative aspect-square w-full overflow-hidden bg-primary">
              <img
                src="/images/posts/dream-home.jpg"
                alt="Build Your Dream Home — AZ Design Studio & Contractor"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">Build Your</p>
                <p className="font-display text-xl font-bold leading-tight sm:text-2xl">Dream Home</p>
              </div>
            </div>
          </a>

          {/* Side stack — Process + Why Choose */}
          <div className="grid gap-5 sm:gap-7 lg:col-span-5">
            {[
              { src: "/images/posts/process.jpg", eyebrow: "Our Process", title: "Building Construction Phases", alt: "Process of building construction phases — AZ Design Studio" },
              { src: "/images/posts/why-choose.jpg", eyebrow: "Why Choose", title: "AZ Constructions", alt: "Why Choose AZ Constructions — quality, on-time, transparent" },
            ].map((p) => (
              <a
                key={p.src}
                href="https://www.facebook.com/azdesignstudioandcontractor"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_20px_50px_-25px_rgba(4,30,51,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_70px_-25px_rgba(4,30,51,0.65)]"
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-accent/25" />
                <div className="relative aspect-square w-full overflow-hidden bg-primary lg:aspect-[16/11]">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">{p.eyebrow}</p>
                    <p className="font-display text-base font-bold leading-tight sm:text-lg">{p.title}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.facebook.com/share/191cKgabze/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#1877F2] px-6 py-3 pl-3 text-sm font-semibold tracking-wide text-white shadow-[0_12px_35px_-15px_rgba(24,119,242,0.75)] transition-all hover:-translate-y-0.5 hover:bg-[#166FE0] hover:shadow-[0_20px_45px_-15px_rgba(24,119,242,0.9)]"
          >
            <img
              src="/facebook-3d-icon.png"
              alt=""
              aria-hidden
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="h-9 w-9 drop-shadow-[0_4px_8px_rgba(11,42,102,0.35)] transition-transform group-hover:scale-110"
            />
            <span>Follow us on Facebook</span>
          </a>
        </div>
      </section>

      {/* Light band: Foundation + Services */}
      <div className="surface-light mt-24 py-20 sm:mt-32 sm:py-28">
        {/* Mission / Vision / Values */}
        <section className="mx-auto w-[min(1200px,calc(100%-2rem))]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center"><Eyebrow>Our Foundation</Eyebrow></div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The principles that<span className="text-accent"> build every project.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              More than concrete and steel — AZ Design Studio is built on a clear promise to every family we work with.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[
              { Icon: Target, tag: "Mission", title: "Deliver homes that outlast trends.",
                desc: "Engineer contemporary residences and commercial spaces that pair uncompromising build quality with timeless design — on time, on budget.",
                points: ["Premium-grade materials only", "Transparent milestone pricing", "Owner-supervised site quality"] },
              { Icon: Eye, tag: "Vision", title: "Set a new standard for Narowal construction.",
                desc: "Be the most trusted name in modern architecture across Punjab — where clients approve every façade, interior and finish long before ground is broken.",
                points: ["Design-first workflow", "Regional delivery network", "Turnkey accountability"] },
              { Icon: Gem, tag: "Values", title: "Standards built into every wall.",
                desc: "Integrity in our costing. Craftsmanship in our finish. Respect for every family whose home we are entrusted with.",
                points: ["Integrity in every estimate", "Craftsmanship over speed", "Client-first communication"] },
            ].map(({ Icon, tag, title, desc, points }, idx) => (
              <Reveal key={tag} delay={idx * 140}>
              <article tabIndex={0}
                       className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[0_15px_40px_-20px_rgba(4,30,51,0.35)] transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:shadow-[0_25px_60px_-20px_rgba(4,30,51,0.55)] focus:-translate-y-1 focus:border-primary focus:bg-primary focus:outline-none active:-translate-y-1 active:border-primary active:bg-primary sm:p-9">
                <div className="relative flex items-center justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/30 transition-colors group-hover:bg-white/15 group-hover:ring-white/40 group-focus:bg-white/15 group-focus:ring-white/40 group-active:bg-white/15 group-active:ring-white/40">
                    <Icon className="h-7 w-7 text-accent transition-colors group-hover:text-white group-focus:text-white group-active:text-white" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors group-hover:text-white/80 group-focus:text-white/80 group-active:text-white/80">{tag}</span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-bold leading-snug transition-colors group-hover:text-white group-focus:text-white group-active:text-white sm:text-2xl">{title}</h3>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/90 group-focus:text-white/90 group-active:text-white/90">{desc}</p>

                <ul className="relative mt-6 space-y-2.5 border-t border-border pt-5 transition-colors group-hover:border-white/25 group-focus:border-white/25 group-active:border-white/25">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/80 transition-colors group-hover:text-white/95 group-focus:text-white/95 group-active:text-white/95">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/40 transition-colors group-hover:bg-white/20 group-hover:ring-white/50 group-focus:bg-white/20 group-focus:ring-white/50 group-active:bg-white/20 group-active:ring-white/50">
                        <Check className="h-2.5 w-2.5 text-accent transition-colors group-hover:text-white group-focus:text-white group-active:text-white" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services — clean icon grid */}
        <section id="services" className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Everything from concept<span className="text-accent"> to handover.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Six disciplines. One accountable studio.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 md:grid-cols-3">
            {services.map(({ Icon, title, gradient }, idx) => (
              <Reveal key={title} as="article" delay={idx * 110}
                className="group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-border bg-card p-6 text-center shadow-[0_10px_30px_-18px_rgba(4,30,51,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(4,30,51,0.45)] sm:p-8"
              >
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_-10px_rgba(37,99,235,0.55)] ring-1 ring-white/25 transition-transform group-hover:-translate-y-1 group-hover:rotate-3 sm:h-20 sm:w-20"
                  style={{ backgroundImage: gradient }}
                >
                  <span aria-hidden className="pointer-events-none absolute inset-x-2 top-1 h-1/2 rounded-t-xl bg-gradient-to-b from-white/45 to-transparent" />
                  <Icon className="relative h-9 w-9 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] sm:h-10 sm:w-10" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-sm font-semibold leading-tight tracking-tight text-foreground sm:text-base md:text-lg">
                  {title}
                </h3>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              Book a Call <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>
      </div>


      {/* Why us carousel */}
      <section className="shine-box mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] rounded-3xl border border-border bg-card/40 p-6 backdrop-blur sm:mt-32 sm:rounded-[2rem] sm:p-10">
        <Eyebrow>Why Choose AZ</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          We build your dreams with strength &amp; trust.
        </h2>
        <WhyChooseCarousel items={whyUs} />
      </section>

      {/* Signature Work — auto carousel */}
      <div id="portfolio" className="mt-24 sm:mt-32">
        <MovingGallery images={signatureWork} eyebrow="Signature Work" title="Modern homes, luxury interiors & more" />
      </div>

      {/* CTA */}
      <section className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="shine-box relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:rounded-[2.5rem] sm:px-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow>Start Your Project</Eyebrow>
              <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to build your dream home?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Book a free consultation with our team. Get clear answers, transparent pricing and a realistic timeline for your project.
              </p>
            </div>
            <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-primary-foreground/15">
              <ul className="space-y-4 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Satellite Town, CM-1 Main Boulevard, Narowal, Pakistan
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  +92 300 0641786 · Open Now
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-lg shadow-black/30 hover:bg-accent/90">
                  WhatsApp Now
                </a>
                <a href="tel:+923000641786"
                   className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/10">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
