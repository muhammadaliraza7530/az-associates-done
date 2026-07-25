import { useEffect, useMemo, useRef, useState } from "react";

function parseCountValue(value: string) {
  const match = value.match(/(\d+)/);
  if (!match) return { target: 0, template: value, hasNumber: false };
  return {
    target: Number.parseInt(match[1], 10),
    template: value.slice(0, match.index) + "__N__" + value.slice((match.index ?? 0) + match[1].length),
    hasNumber: true,
  };
}

function useInViewOnce<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!("IntersectionObserver" in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [inView, threshold]);
  return { ref, inView };
}

export function CountOnView({ value, className, threshold }: { value: string; className?: string; threshold?: number }) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>(threshold);
  const { target, template, hasNumber } = useMemo(() => parseCountValue(value), [value]);
  const [display, setDisplay] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!hasNumber || !inView || done.current) return;
    done.current = true;
    const start = performance.now();
    const dur = 1300;
    let raf = 0;
    const anim = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(anim);
    };
    raf = requestAnimationFrame(anim);
    return () => cancelAnimationFrame(raf);
  }, [hasNumber, inView, target]);

  return (
    <span ref={ref} className={className}>
      {hasNumber ? template.replace("__N__", String(display)) : value}
    </span>
  );
}
