import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-[min(1200px,calc(100%-2rem))] pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-accent">
            <Home className="h-3 w-3" /> Home
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="hover:text-accent">{c.label}</Link>
            ) : (
              <span className="text-accent">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
