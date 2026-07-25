import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
const LOGO_URL = "/logo.jpg";

const WHATSAPP = "https://wa.me/923000641786";
const logo = LOGO_URL;

const navLinks: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];


export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 w-[min(1200px,calc(100%-2rem))] py-4 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="AZ Design Studio logo" className="h-11 w-11 shrink-0 rounded-md bg-white object-contain p-1" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold tracking-tight text-foreground">AZ DESIGN STUDIO</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">&amp; Contractor</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l, i) => (
            <Link key={i} to={l.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-accent" }}>
              {l.label}
            </Link>
          ))}
        </nav>


        <div className="hidden items-center gap-3 lg:flex">
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90">
            <Phone className="h-4 w-4" /> Free Quote
          </a>
        </div>

        <button
          className="rounded-sm border border-border p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex w-[min(1200px,calc(100%-2rem))] flex-col gap-1 py-4">
            {navLinks.map((l, i) => (
              <Link key={i} to={l.to} onClick={() => setOpen(false)}
                 className="px-2 py-3 text-sm font-medium text-muted-foreground hover:text-accent">
                {l.label}
              </Link>
            ))}

            <a href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
               className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              <Phone className="h-4 w-4" /> Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
