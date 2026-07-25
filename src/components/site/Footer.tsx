import { MapPin, MessageCircle, Phone, Mail, Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";
const LOGO_URL = "/logo.jpg";

const WHATSAPP = "https://wa.me/923000641786";
const logo = LOGO_URL;

export function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-white/10 bg-[oklch(0.12_0.03_260)] text-white">
      <div className="mx-auto grid w-[min(1200px,calc(100%-2rem))] gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="AZ Design Studio logo" className="h-12 w-12 rounded-md bg-white object-contain p-1" />
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-tight text-white">AZ DESIGN STUDIO</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">&amp; Contractor</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            Architecture, engineering &amp; turnkey construction — building dream homes across Narowal,
            Zafarwal, Lahore &amp; the wider Punjab region with strength and trust.
          </p>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Explore</h3>
          <nav className="mt-5 flex flex-col gap-2.5 text-sm">
            <Link to="/" className="text-white/75 hover:text-white">Home</Link>
            <Link to="/about" className="text-white/75 hover:text-white">About</Link>
            <Link to="/services" className="text-white/75 hover:text-white">Services</Link>
            <Link to="/projects" className="text-white/75 hover:text-white">Projects</Link>
            <Link to="/contact" className="text-white/75 hover:text-white">Contact</Link>
          </nav>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Satellite Town, CM-1 Main Boulevard,<br /> Narowal, Punjab 51600
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+923000641786" className="hover:text-white">+92 300 0641786</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:azcontractor786@gmail.com" className="hover:text-white break-all">azcontractor786@gmail.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="h-4 w-4 shrink-0 text-accent" />
              <a href="https://www.azdesignstudioandcontractor.com" target="_blank" rel="noreferrer" className="hover:text-white break-all">
                azdesignstudioandcontractor.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp us anytime</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/70">
        <p>© {new Date().getFullYear()} AZ Design Studio &amp; Contractor · Narowal, Pakistan</p>
        <p className="mt-1.5 text-[11px] tracking-wide text-white/55">
          Designed &amp; Developed by <span className="font-semibold text-accent">Brand Up</span>
        </p>
      </div>
    </footer>
  );
}
