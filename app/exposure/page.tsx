import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { exposure } from "@/content/exposure";

export const metadata: Metadata = {
  title: "The Exposure Project — Gabriella O'Reilly",
  description: exposure.subtitle,
};

export default function ExposurePage() {
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
                <span className="label">A personal practice</span>
              </Reveal>
            </div>
            <div className="md:col-span-9">
              <Reveal delay={120}>
                <h1 className="font-display display-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1] tracking-[-0.025em]">
                  The <span className="italic">Exposure</span> Project.
                </h1>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-6 max-w-2xl font-display text-xl italic text-ink-2 md:text-2xl">
                  {exposure.subtitle}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-6">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Reveal>
                <a
                  href={exposure.site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm ring-1 ring-line bg-ink/[0.04]">
                    <Image
                      src="/exposure/journal-entries.png"
                      alt="Journal Entries on The Exposure Project"
                      width={812}
                      height={1202}
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-3 inline-flex items-baseline gap-2 font-display text-sm text-ink-2 transition-colors group-hover:text-orange md:text-base">
                    Journal Entries on The Exposure Project
                    <span className="italic text-orange">↗︎</span>
                  </figcaption>
                </a>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-ink md:text-xl md:leading-[1.55]">
                  {exposure.blurb}
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 font-display text-xl italic leading-snug text-ink-2 md:text-2xl">
                  {exposure.why}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3">
                  <a
                    href={exposure.site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link font-display text-2xl"
                  >
                    {exposure.site.label} ↗︎
                  </a>
                  <a
                    href={exposure.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-paren link"
                  >
                    {exposure.instagram.label}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={360}>
                <div className="mt-10 border-t border-line pt-6">
                  <span className="label">Featured</span>
                  <ul className="mt-4 space-y-4">
                    {exposure.featured.map((f) => (
                      <li key={f.title}>
                        <div className="font-display text-lg leading-snug">
                          {f.title}
                        </div>
                        <div className="label-paren mt-1">
                          {f.kind.toLowerCase()} · {f.year.toLowerCase()}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 pb-24">
          <div className="border-t border-line pt-6 flex flex-wrap items-baseline justify-between gap-4">
            <span className="label">Read the full publication at</span>
            <a
              href={exposure.site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link font-display text-xl md:text-2xl"
            >
              {exposure.site.label} ↗︎
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
