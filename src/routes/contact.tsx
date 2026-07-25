import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const WHATSAPP_NUMBER = "923000641786";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact AZ Design Studio — Narowal Architects & Contractors" },
      { name: "description", content: "Get in touch with AZ Design Studio & Contractor. Free consultation for construction, architecture, renovation & turnkey projects across Narowal, Zafarwal & Lahore." },
      { property: "og:title", content: "Contact AZ Design Studio & Contractor" },
      { property: "og:description", content: "Free consultation across Narowal, Zafarwal & Lahore. WhatsApp us for a tailored quote." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", service: "Construction", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "*New enquiry from AZ Design Studio website*",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Service: ${form.service}`,
      "",
      `Message:`,
      form.message || "(no message)",
    ];
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const bind = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value })),
  });

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <div className="pt-8 sm:pt-12" />
      {/* Header */}
      <section className="mx-auto w-[min(1200px,calc(100%-2rem))] text-center">
        <div className="mx-auto inline-flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Contact Us</span>
          <span className="h-px w-8 bg-accent" />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Let's build your<span className="text-accent"> dream home.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Share a few details below and we'll continue the conversation on WhatsApp — usually within an hour.
        </p>
      </section>

      {/* Form + Info */}
      <section className="mx-auto mt-14 grid w-[min(1200px,calc(100%-2rem))] gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        {/* Form (white surface) */}
        <div className="rounded-3xl bg-white p-6 text-[oklch(0.14_0.05_240)] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.5)] sm:p-10">
          <h2 className="text-xl font-bold text-[oklch(0.14_0.05_240)] sm:text-2xl">Send us a message</h2>
          <p className="mt-2 text-sm text-neutral-600">All fields help our team prepare a tailored quote before we reply.</p>

          <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm sm:col-span-1">
              <span className="mb-1.5 block font-medium text-neutral-800">Your name *</span>
              <input required {...bind("name")} placeholder="Full name"
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[oklch(0.14_0.05_240)] focus:ring-2 focus:ring-[oklch(0.14_0.05_240)]/20" />
            </label>
            <label className="text-sm sm:col-span-1">
              <span className="mb-1.5 block font-medium text-neutral-800">Phone / WhatsApp *</span>
              <input required {...bind("phone")} type="tel" placeholder="+92 3xx xxxxxxx"
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[oklch(0.14_0.05_240)] focus:ring-2 focus:ring-[oklch(0.14_0.05_240)]/20" />
            </label>
            <label className="text-sm sm:col-span-1">
              <span className="mb-1.5 block font-medium text-neutral-800">City</span>
              <input {...bind("city")} placeholder="Narowal, Lahore, Sialkot…"
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[oklch(0.14_0.05_240)] focus:ring-2 focus:ring-[oklch(0.14_0.05_240)]/20" />
            </label>
            <label className="text-sm sm:col-span-1">
              <span className="mb-1.5 block font-medium text-neutral-800">Service interested in</span>
              <select {...bind("service")}
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-[oklch(0.14_0.05_240)] focus:ring-2 focus:ring-[oklch(0.14_0.05_240)]/20">
                {["Construction","Architectural Design","Renovation & Upgrades","Interior Design","Project Management","Turnkey Delivery","Other / Not sure"].map(s => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="mb-1.5 block font-medium text-neutral-800">Tell us about your project</span>
              <textarea {...bind("message")} rows={5} placeholder="Plot size, location, budget range, timeline…"
                className="w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[oklch(0.14_0.05_240)] focus:ring-2 focus:ring-[oklch(0.14_0.05_240)]/20" />
            </label>

            <div className="sm:col-span-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-neutral-500">
                Submitting opens WhatsApp with your enquiry pre-filled — just tap Send.
              </p>
              <button type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-[1.02] active:scale-95">
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>
            </div>
            {sent && (
              <p className="sm:col-span-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
                ✓ WhatsApp opened in a new tab. If nothing happened, tap the WhatsApp button on the right.
              </p>
            )}
          </form>
        </div>

        {/* Info column */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold sm:text-xl">Reach us directly</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground/85">
                  Satellite Town, CM-1 Main Boulevard,<br /> Narowal, Punjab 51600, Pakistan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a href="tel:+923000641786" className="text-foreground/85 hover:text-accent">+92 300 0641786</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a href="mailto:azcontractor786@gmail.com" className="break-all text-foreground/85 hover:text-accent">azcontractor786@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground/85">Mon – Sat · 9:00 AM – 8:00 PM</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
                 className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:brightness-110">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a href="tel:+923000641786"
                 className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-accent/50 px-5 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto mt-14 w-[min(1200px,calc(100%-2rem))]">
        <div className="overflow-hidden rounded-3xl border border-border shadow-[0_25px_60px_-25px_rgba(0,0,0,0.6)]">
          <iframe
            title="AZ Design Studio location — Narowal"
            src="https://www.google.com/maps?q=Satellite+Town+CM-1+Main+Boulevard+Narowal+Pakistan&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full sm:h-[460px]"
          />
        </div>
      </section>
    </div>
  );
}
