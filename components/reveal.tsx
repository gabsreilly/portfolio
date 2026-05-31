"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Reveal — adds an `is-visible` class the first time the element
 * enters the viewport. Pairs with the `.reveal` CSS in globals.css
 * for a single, restrained entrance animation.
 *
 *   <Reveal>...</Reveal>
 *   <Reveal delay={120} className="md:col-span-4">...</Reveal>
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
