import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { essays } from "@/content/writing";

export const metadata: Metadata = {
  title: "Notes — Gabriella O'Reilly",
  description:
    "Essays and short pieces on B2B content, voice, and strategy.",
};

export default function NotesIndex() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
          <Reveal>
            <Link href="/" className="label-paren link">
              back to index
            </Link>
          </Reveal>

          <div className="mt-12 md:mt-20 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <Reveal>
                <span className="label">Notes</span>
              </Reveal>
            </div>
            <div className="md:col-span-9">
              <Reveal delay={120}>
                <h1 className="font-display display-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1] tracking-[-0.025em]">
                  On content, <span className="italic">unpolished</span>.
                </h1>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-6 max-w-2xl font-display text-xl italic text-ink-2 md:text-2xl">
                  Short pieces on B2B content, voice, and strategy. Written as they show up.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-6 pb-24">
          <ul className="border-t border-line">
            {essays.map((e, i) => {
              const isExternal = !!e.href;
              const href = e.href ?? `/notes/${e.slug}`;
              const LinkEl = isExternal ? "a" : Link;
              const extraProps = isExternal
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              return (
                <Reveal key={e.slug} delay={i * 70}>
                  <li className="border-b border-line">
                    <LinkEl
                      href={href}
                      {...extraProps}
                      className="group grid grid-cols-12 items-baseline gap-4 py-6 md:py-8"
                    >
                      <span className="label col-span-3 md:col-span-2">
                        {formatDate(e.date)}
                      </span>
                      <div className="col-span-9 md:col-span-7">
                        <h3 className="font-display text-2xl leading-tight md:text-3xl">
                          {e.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-2">
                          {e.summary}
                        </p>
                      </div>
                      <span className="label-paren col-span-12 hidden md:col-span-3 md:inline md:text-right">
                        {isExternal
                          ? "read elsewhere"
                          : e.minutes
                          ? `${e.minutes} min read`
                          : "read"}
                      </span>
                    </LinkEl>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  })
    .format(d)
    .toUpperCase();
}
