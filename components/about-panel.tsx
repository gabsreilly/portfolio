"use client";

/**
 * AboutPanel — compact, expandable "About me" block.
 *
 * Sits near the top of the home page on a soft paper-2 band. Centered,
 * with a thin label over an epigraph and the opening paragraph so it
 * stays small. "Read more" reveals the rest with a CSS grid-rows height
 * transition (no JS measuring).
 */

import { useState } from "react";
import { Reveal } from "@/components/reveal";

export function AboutPanel({
  paragraphs,
}: {
  paragraphs: string[];
}) {
  const [open, setOpen] = useState(false);
  const [first, ...rest] = paragraphs;

  return (
    <section id="about" className="bg-lime px-6 py-5 md:px-10 md:py-6">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="mx-auto max-w-2xl text-sm italic leading-relaxed text-ink md:text-base md:leading-[1.7]">
            {first}
          </p>
        </Reveal>

        {/* Expandable remainder — grid-rows 0fr→1fr animates height cleanly */}
        <div
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          aria-hidden={!open}
        >
          <div className="overflow-hidden">
            <div className="pt-5">
              {rest.map((p, i) => (
                <p
                  key={i}
                  className="mx-auto mb-5 max-w-2xl text-sm italic leading-relaxed text-ink last:mb-0 md:text-base md:leading-[1.7]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group mt-5 inline-flex items-baseline gap-2 border-b-2 border-orange pb-1 font-display text-sm leading-tight transition-colors hover:text-orange md:text-base"
        >
          {open ? "Show less" : "Read more"}
          <span className="italic text-orange transition-transform duration-300 group-hover:translate-y-0.5">
            {open ? "↑" : "↓"}
          </span>
        </button>
      </div>
    </section>
  );
}
