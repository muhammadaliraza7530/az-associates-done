import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
const LOGO_URL = "/logo.jpg";

const logo = LOGO_URL;

export type GalleryImage = { src: string; alt: string };

const AUTO_SPEED = 160;

export function MovingGallery({
  images,
  eyebrow = "Recent Work",
  title = "On-site & delivered",
}: {
  images: GalleryImage[];
  eyebrow?: string;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const drag = useRef({ startX: 0, startScroll: 0, moved: 0 });
  const draggingRef = useRef(false);
  const paused = useRef(false);
  const track = [...images, ...images];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(now - last, 32);
      last = now;
      if (!paused.current) {
        el.scrollLeft += (AUTO_SPEED * dt) / 1000;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    setDragging(true); draggingRef.current = true; paused.current = true;
    drag.current = { startX: e.clientX, startScroll: el.scrollLeft, moved: 0 };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || !ref.current) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    const half = ref.current.scrollWidth / 2;
    let next = drag.current.startScroll - dx * 1.6;
    if (half) { while (next < 0) next += half; while (next >= half) next -= half; }
    ref.current.scrollLeft = next;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false); draggingRef.current = false; paused.current = false;
    ref.current?.releasePointerCapture(e.pointerId);
  };

  const openImage = (i: number) => {
    if (drag.current.moved > 6) return;
    setLightbox(i % images.length);
  };
  const nav = (dir: number) =>
    setLightbox((p) => (p === null ? p : (p + dir + images.length) % images.length));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") nav(1);
      if (e.key === "ArrowLeft") nav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section className="relative mx-auto mt-24 w-[min(1400px,calc(100%-2rem))]">
      <span aria-hidden className="pointer-events-none absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,#7dd3fc_35%,transparent),transparent_70%)] blur-3xl" />
      <span aria-hidden className="pointer-events-none absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-steel)_40%,transparent),transparent_70%)] blur-3xl" />
      <div className="relative mb-8 flex items-end justify-between gap-6 px-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        </div>
        <p className="hidden max-w-xs text-xs text-muted-foreground sm:block">
          Auto-playing reel — hover to pause, drag or tap to explore.
        </p>
      </div>
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => { if (!dragging) paused.current = false; }}
        className={`flex gap-4 overflow-x-auto py-7 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-y", overscrollBehaviorX: "contain" }}
      >
        {track.map((img, i) => (
          <button
            type="button"
            key={i}
            onClick={() => openImage(i)}
            className="glass-frame group relative shrink-0 overflow-hidden rounded-[2rem] transition-transform duration-500 hover:scale-[1.03]"
            style={{ width: "min(70vw, 340px)", aspectRatio: "4 / 3" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              draggable={false}
              loading="lazy"
              className="h-full w-full rounded-[2rem] object-cover"
            />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <div className="pointer-events-none absolute left-3 top-3 z-[5] flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 shadow-md backdrop-blur-sm">
              <img src={logo} alt="" aria-hidden className="h-4 w-4 rounded-sm bg-white object-contain p-0.5" />
              <span className="text-[9px] font-black uppercase tracking-widest text-accent">AZ Design Studio</span>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)}
             className="fixed inset-0 z-[95] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-magic-aperture">
          <button aria-label="Close" onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
                  className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/50 p-2 text-white hover:border-accent hover:text-accent">
            <X className="h-5 w-5" />
          </button>
          <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); nav(-1); }}
                  className="absolute left-2 sm:left-6 rounded-full border border-white/30 bg-black/50 p-2 text-white hover:border-accent hover:text-accent">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button aria-label="Next" onClick={(e) => { e.stopPropagation(); nav(1); }}
                  className="absolute right-2 sm:right-6 rounded-full border border-white/30 bg-black/50 p-2 text-white hover:border-accent hover:text-accent">
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="relative max-h-[85vh] w-[min(1100px,95vw)]" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightbox].src} alt={images[lightbox].alt}
                 className="mx-auto max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl animate-magic-pop" />
            <p className="mt-3 text-center text-sm text-white/80">{images[lightbox].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
