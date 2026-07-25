import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Ruler, Calendar, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const heroImg = "/images/project-aerial.jpg";
const WHATSAPP = "https://wa.me/923000641786";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — AZ Design Studio & Contractor" },
      { name: "description", content: "Explore our signature villas, modern homes and commercial builds across Narowal, Zafarwal, Sialkot and Lahore. 160+ delivered projects." },
      { property: "og:title", content: "Our Projects — AZ Design Studio & Contractor" },
      { property: "og:description", content: "Signature villas, modern homes and turnkey commercial builds delivered across Punjab." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://id-preview--af59db3d-fc94-4b44-8950-1aeda304cd49.lovable.app/images/project-aerial.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://id-preview--af59db3d-fc94-4b44-8950-1aeda304cd49.lovable.app/images/project-aerial.jpg" },
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

type Category = "Villas" | "Modern Homes" | "Interiors" | "Commercial" | "Infrastructure";
type Project = {
  img: string; title: string; category: Category;
  location: string; size: string; year: string; desc: string;
};

const NEW = "/images/projects-new";

const projects: Project[] = [
  { img: `${NEW}/IMG-20260726-WA0041.jpg`, title: "River Embankment Stone Pitching", category: "Infrastructure", location: "Punjab", year: "2025", size: "1.2 km",
    desc: "Heavy stone pitching along a river embankment — flood-protection works executed with excavator-laid rip-rap and hand-set boulder facing." },
  { img: `${NEW}/IMG-20260726-WA0042.jpg`, title: "Flood Protection Bund", category: "Infrastructure", location: "Punjab", year: "2025", size: "Riverfront",
    desc: "Engineered protective bund with layered rock armour — a durable barrier designed to withstand seasonal flow surges." },
  { img: `${NEW}/IMG-20260726-WA0045.jpg`, title: "Bridge Abutment Protection", category: "Infrastructure", location: "Punjab", year: "2025", size: "Bridge span",
    desc: "Gabion-clad abutment and pier protection works under an active road bridge — scour prevention with dressed stone masonry." },
  { img: `${NEW}/IMG-20260726-WA0046.jpg`, title: "Pier Scour Protection", category: "Infrastructure", location: "Punjab", year: "2024", size: "Multi-pier",
    desc: "Completed gabion aprons around bridge piers — engineered stone protection safeguarding the sub-structure long-term." },
  { img: `${NEW}/IMG-20260726-WA0055.jpg`, title: "Residential Housing Scheme", category: "Commercial", location: "Narowal", year: "2025", size: "40+ units",
    desc: "Aerial view of an ongoing housing scheme delivery — structural shells raised in a coordinated multi-block roll-out." },
  { img: `${NEW}/IMG-20260726-WA0050.jpg`, title: "Community Masjid Construction", category: "Commercial", location: "Punjab", year: "2025", size: "8,000 sqft",
    desc: "Roof-slab casting day on a community masjid — arched façade and full slab lifting operations underway." },
  { img: `${NEW}/IMG-20260726-WA0052.jpg`, title: "Masjid Handover — First Prayer", category: "Commercial", location: "Punjab", year: "2025", size: "Completed",
    desc: "First congregational prayer at a newly delivered masjid — white façade, arched openings and a slender minaret." },
  { img: `${NEW}/IMG-20260726-WA0059.jpg`, title: "Foundation Reinforcement", category: "Modern Homes", location: "Punjab", year: "2025", size: "Foundation phase",
    desc: "Tied rebar mats laid out for column footings — engineered foundation with strict cover and lap-length control." },
  { img: `${NEW}/IMG-20260726-WA0060.jpg`, title: "Column Casting & Brickwork", category: "Modern Homes", location: "Punjab", year: "2025", size: "Superstructure",
    desc: "Column cages erected and load-bearing brickwork rising — first-floor superstructure phase in progress." },
  { img: `${NEW}/IMG-20260726-WA0063.jpg`, title: "AZ Contractor — Live Site", category: "Commercial", location: "Punjab", year: "2025", size: "Multi-block",
    desc: "AZ Contractor branded live site — foundations complete, first-lift brickwork and column cages ready for the next pour." },

  { img: "/images/hero-spanish-hd.jpg", title: "Spanish Villa Estate", category: "Villas", location: "Narowal", size: "1 Kanal", year: "2024",
    desc: "A Spanish-style luxury villa featuring terracotta roofing, arched façades and a landscaped courtyard." },
  { img: "/images/villa-dha.jpg", title: "DHA Modern Residence", category: "Modern Homes", location: "Lahore", size: "10 Marla", year: "2024",
    desc: "Clean-line contemporary home with a double-height entry, curtain-wall glazing and warm stone accents." },
  { img: "/images/hero-luxury-dusk.jpg", title: "Luxury Dusk Villa", category: "Villas", location: "Sialkot", size: "1 Kanal", year: "2023",
    desc: "A dusk-lit signature villa with sculpted façade lighting and an open plan-family wing." },
  { img: "/images/project-modern.jpg", title: "Three-Story Contemporary", category: "Modern Homes", location: "Zafarwal", size: "12 Marla", year: "2023",
    desc: "A crisp three-story home with cantilevered balconies and travertine-clad columns." },
  { img: "/images/hero-mediterranean-hd.jpg", title: "Mediterranean Grand", category: "Villas", location: "Narowal", size: "2 Kanal", year: "2023",
    desc: "A grand Mediterranean residence with hand-laid stone, arched loggias and a formal front garden." },
  { img: "/images/project-aerial.jpg", title: "Aerial Estate", category: "Villas", location: "Narowal", size: "1.5 Kanal", year: "2022",
    desc: "Aerial-view luxury estate with courtyard swimming pool and terraced landscaping." },
  { img: "/images/hero-villa-dusk.jpg", title: "Villa at Dusk", category: "Villas", location: "Lahore", size: "1 Kanal", year: "2022",
    desc: "Modern villa with soft façade uplighting, floating stairs and a bronze feature wall." },
  { img: "/images/project-arch.jpg", title: "Grand Arched Residence", category: "Modern Homes", location: "Narowal", size: "14 Marla", year: "2022",
    desc: "Signature arched entryway with warm sandstone cladding and a walnut door detail." },
  { img: "/images/project-bungalow.jpg", title: "Modern Bungalow", category: "Modern Homes", location: "Sialkot", size: "10 Marla", year: "2022",
    desc: "Single-story bungalow with a wraparound veranda, timber ceilings and a monolithic roof." },
  { img: "/images/villa-interior.jpg", title: "Luxury Interior Fit-Out", category: "Interiors", location: "Lahore", size: "6,500 sqft", year: "2023",
    desc: "Full interior delivery — double-height lobby, custom joinery, curated lighting and stone finishes." },
  { img: "/images/interior-bedroom.jpg", title: "Master Suite Interior", category: "Interiors", location: "Narowal", size: "820 sqft", year: "2024",
    desc: "A calm master suite with walnut paneling, custom bed wall and integrated linear lighting." },
  { img: "/images/project-construction.jpg", title: "Turnkey Site Delivery", category: "Commercial", location: "Zafarwal", size: "20,000 sqft", year: "2023",
    desc: "Mixed-use commercial site delivered on a milestone-linked timeline with owner-supervised QA." },
];

const categories = ["All", "Villas", "Modern Homes", "Interiors", "Commercial", "Infrastructure"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-[88px] flex min-h-[70svh] items-center overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImg} alt="AZ Design Studio project portfolio" loading="eager" fetchPriority="high" decoding="sync" className="absolute inset-0 h-full w-full object-cover" style={{ transform: "scale(1.05)" }} />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10" />
        <div className="relative mx-auto w-[min(1200px,calc(100%-2rem))] pt-40 pb-24 text-center sm:pt-48">
          <div className="flex justify-center"><Eyebrow>Our Portfolio</Eyebrow></div>
          <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Signature homes,<span className="block text-accent sm:inline"> delivered.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-primary-foreground/85 sm:text-lg">
            A curated selection of 160+ completed residential, interior and commercial projects across Punjab.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Projects" }]} />

      {/* Filters */}
      <section className="mx-auto mt-16 w-[min(1200px,calc(100%-2rem))] sm:mt-20">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all sm:px-5 sm:py-2.5 ${
                active === c
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filtered.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[0_15px_40px_-20px_rgba(4,30,51,0.35)] transition-all hover:-translate-y-1 hover:border-accent/60">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                  {p.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold leading-snug sm:text-xl">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-accent" /> {p.location}</div>
                  <div className="flex items-center gap-1.5"><Ruler className="h-3.5 w-3.5 text-accent" /> {p.size}</div>
                  <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-accent" /> {p.year}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted-foreground">No projects in this category yet.</p>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] sm:mt-32">
        <div className="shine-box relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:rounded-[2.5rem] sm:px-16 sm:py-20">
          <Eyebrow>Your Project Next</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Your home deserves the same standard.
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Book a free consultation. We'll visit your plot, understand your brief and share a feasibility outline within a week.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90">
              Start Your Project <ArrowRight className="h-4 w-4" />
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
