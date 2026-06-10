"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useRef, useState, type PointerEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "@/content/projects";

/**
 * The signature interaction.
 *
 * A numbered, editorial index of projects. Hovering a row reveals a
 * small preview tile that softly tracks the cursor. The tile is a
 * single element re-keyed by row; it never re-mounts the whole list.
 *
 * Touch / coarse pointers see the bare list without the preview —
 * which is what they want.
 */
export function WorkIndex({ projects }: { projects: Project[] }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const host = wrapRef.current;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const current = active !== null ? projects[active] : null;

  return (
    <div
      ref={wrapRef}
      onPointerMove={onMove}
      onPointerLeave={() => setActive(null)}
      className="relative"
    >
      <ol className="border-t border-line">
        {projects.map((p, i) => (
          <li key={p.slug} className="border-b border-line">
            <Link
              href={`/work/${p.slug}`}
              onPointerEnter={(e) => {
                if (e.pointerType !== "mouse") return;
                setActive(i);
              }}
              className="group grid grid-cols-12 items-baseline gap-4 py-4 transition-colors duration-500 hover:text-ink-2 md:py-5"
            >
              <span className="label col-span-2 md:col-span-1">{p.number}</span>

              <span className="col-span-10 md:col-span-8">
                <span className="font-display text-lg leading-tight md:text-xl">
                  {p.title}
                </span>
              </span>

              <span className="label col-span-2 hidden text-right md:col-span-3 md:inline">
                {p.client}
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {/* The hover preview. Hidden on coarse pointers via media query. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <AnimatePresence>
          {current && (
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 4 }}
              transition={{ duration: 0.35, ease: [0.22, 0.7, 0.2, 1] }}
              style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                translate: "-50% -110%",
              }}
              className="drift"
            >
              <div
                className="h-44 w-64 overflow-hidden rounded-sm shadow-[0_24px_60px_-20px_rgba(26,23,20,0.35)] ring-1 ring-line"
                style={{
                  background: `linear-gradient(135deg, ${current.tones[0]} 0%, ${current.tones[1]} 100%)`,
                }}
              >
                {current.image ? (
                  <Image
                    src={current.image}
                    alt=""
                    width={512}
                    height={352}
                    className="h-full w-full object-cover"
                    priority={false}
                  />
                ) : (
                  <PreviewPlaceholder title={current.title} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/** A composed placeholder so previews feel intentional, not empty. */
function PreviewPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 flex items-end p-4">
        <span
          className="font-display text-2xl italic leading-none text-paper/90 mix-blend-screen"
          style={{ textShadow: "0 1px 0 rgba(0,0,0,0.15)" }}
        >
          {title.split(" ")[0]}
        </span>
      </div>
      <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-paper/70" />
    </div>
  );
}
