"use client";

/**
 * ReactionsRow — earned social proof in a horizontal snap-scroll row.
 *
 * Adds an explicit scroll affordance (a hint + prev/next arrows) so it's
 * obvious there are more cards off-screen. Arrows and hint inherit the
 * current text color, so they stay legible on any band.
 */

import Image from "next/image";
import { useRef } from "react";
import type { ReactionItem } from "@/content/campaigns";

export function ReactionsRow({ items }: { items: ReactionItem[] }) {
  const scroller = useRef<HTMLDivElement | null>(null);
  const nudge = (dir: number) =>
    scroller.current?.scrollBy({ left: dir * 336, behavior: "smooth" });

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            opacity: 0.75,
          }}
        >
          Scroll through the reactions →
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Previous reactions"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-current/40 text-base opacity-70 transition-opacity hover:opacity-100"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="More reactions"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-current/40 text-base opacity-70 transition-opacity hover:opacity-100"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pr-6 md:-mr-10 md:gap-6 md:pr-10"
        style={{ scrollbarWidth: "thin" }}
      >
        {items.map((item, i) => (
          <figure
            key={i}
            className="flex w-[280px] flex-none flex-col snap-start md:w-[320px]"
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-ink/[0.04] ring-1 ring-line">
              <Image
                src={item.image}
                alt={`${item.source} on ${item.platform ?? "social"}`}
                width={800}
                height={1000}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="font-display text-base leading-tight">
                  {item.source}
                </span>
                {item.handle && <span className="label">{item.handle}</span>}
              </div>
              {item.platform && (
                <div className="mt-0.5">
                  <span className="label-paren">{item.platform}</span>
                </div>
              )}
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label-paren link mt-2 inline-block"
                >
                  view original ↗︎
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
