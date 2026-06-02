import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { WorkIndex } from "@/components/work-index";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NowLine } from "@/components/now-line";
import { projects } from "@/content/projects";
import { about } from "@/content/about";
import { hits } from "@/content/hits";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Spotlight />
        <Work />
        <About />
        <Ethos />
        <MoreRooms />
      </main>
      <SiteFooter />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero — location + time, centered role line, portrait,
   italic for-line, huge name.
   ───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-6 pb-8 md:px-10 md:pt-8 md:pb-10">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <span className="label">Based in San Francisco</span>
          <NowLine place={about.place} timezone={about.timezone} />
        </div>
      </Reveal>

      <div className="mt-10 md:mt-14">
        <Reveal delay={120}>
          <p
            className="mx-auto max-w-3xl text-center uppercase"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)",
              letterSpacing: "0.13em",
              color: "var(--ink)",
              fontWeight: 500,
            }}
          >
            {about.roleLine}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-10 w-44 md:w-52">
            <PortraitSlot />
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-6 text-center font-display italic text-lg text-ink-2 md:text-xl">
            {about.forLine}
          </p>
        </Reveal>

        <Reveal delay={560}>
          <h1 className="mt-8 whitespace-nowrap text-center font-serif italic leading-[0.9] text-[clamp(2.5rem,8vw,8rem)] tracking-[-0.03em] md:mt-10">
            Gabriella O'Reilly
          </h1>
        </Reveal>
      </div>
    </section>
  );
}

function PortraitSlot() {
  return (
    <figure className="relative aspect-square w-full overflow-hidden rounded-sm ring-1 ring-line">
      <Image
        src="/portrait.jpg"
        alt="Gabriella O'Reilly"
        width={520}
        height={520}
        className="h-full w-full object-cover"
        priority
      />
    </figure>
  );
}

/* ─────────────────────────────────────────────────────────────
   Ethos — three boxes on a single line between Hero and Work.
   The page's thesis statement before any artifacts.
   ───────────────────────────────────────────────────────────── */
function Ethos() {
  return (
    <section
      id="ethos"
      className="bg-lime px-6 py-6 md:px-10 md:py-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-3 flex items-center gap-3 md:mb-4">
          <span className="font-display italic text-lg text-ink md:text-xl">IV.</span>
          <span className="label" style={{ color: "var(--ink)" }}>
            What guides me
          </span>
        </div>

        <div className="grid gap-2 md:grid-cols-3 md:gap-3">
          {about.ethos.map((e, i) => (
            <Reveal key={e.number} delay={i * 90}>
              <div className="h-full border border-line bg-card p-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display italic text-sm text-ink-3">
                    {e.number}.
                  </span>
                  <h3 className="font-display italic leading-tight text-ink text-base md:text-lg">
                    {e.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-ink-2 md:text-sm">
                  {e.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Selected Work — cream card on a deep blue band.
   The band gives the section presence so the header doesn't have to.
   ───────────────────────────────────────────────────────────── */
function Work() {
  return (
    <section
      id="work"
      className="bg-blue px-4 py-10 md:px-8 md:py-14"
    >
      <Reveal>
        <div className="mx-auto max-w-[1300px] bg-card p-5 md:p-10">
          <div className="mb-5 flex flex-col gap-1 border-b border-line pb-4 md:mb-7 md:flex-row md:items-baseline md:justify-between md:gap-6 md:pb-5">
            <span className="label">II — Selected Work</span>
            <p className="font-display italic text-base text-ink-2 md:text-lg">
              Four chapters, same instinct.
            </p>
          </div>
          <WorkIndex projects={projects} />
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Spotlight — "My favorite hits". Small editorial cards mirroring
   the "What guides me" layout. Sits first so the juice comes quick.
   Cards link out when a `href` is set (campaign, post, anywhere).
   ───────────────────────────────────────────────────────────── */
function Spotlight() {
  if (hits.length === 0) return null;

  return (
    <section id="spotlight" className="bg-lime px-6 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-3 flex items-center gap-3 md:mb-4">
          <span className="font-display italic text-lg text-ink md:text-xl">I.</span>
          <span className="label" style={{ color: "var(--ink)" }}>
            The short list
          </span>
        </div>

        <div className="grid gap-2 md:grid-cols-3 md:gap-3">
          {hits.map((h, i) => {
            const card = (
              <div className="flex h-full flex-col overflow-hidden border border-line bg-card transition-colors group-hover:border-orange">
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden"
                  style={
                    !h.image && h.tones
                      ? {
                          background: `linear-gradient(135deg, ${h.tones[0]} 0%, ${h.tones[1]} 100%)`,
                        }
                      : undefined
                  }
                >
                  {h.image && (
                    <Image
                      src={h.image}
                      alt={h.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display italic text-sm text-ink-3">
                      {h.number}.
                    </span>
                    <h3 className="font-display italic leading-tight text-ink text-base md:text-lg">
                      {h.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink-2 md:text-sm">
                    {h.body}
                  </p>
                  {h.href && (
                    <span className="mt-3 inline-flex items-baseline gap-1 self-start font-display text-xs leading-tight text-ink-2 transition-colors group-hover:text-orange md:text-sm">
                      {h.linkLabel ?? "View"}
                      <span className="italic text-orange">↗︎</span>
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <Reveal key={h.number} delay={i * 90}>
                {h.href ? (
                  <Link href={h.href} className="group block h-full">
                    {card}
                  </Link>
                ) : (
                  <div className="group h-full">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   MoreRooms — small bar pointing to sub-pages.
   Two link cells, paper background, thin rules.
   ───────────────────────────────────────────────────────────── */
function MoreRooms() {
  const rooms = [
    { label: "Notes",                 tag: "essays + short pieces", href: "/notes" },
    { label: "The Exposure Project",  tag: "a small publication",   href: "/exposure" },
  ];
  return (
    <section className="bg-orange px-4 py-3 text-cream md:px-8 md:py-4">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid divide-y divide-cream/30 md:grid-cols-2 md:divide-x md:divide-y-0">
          {rooms.map((r) => (
            <Reveal key={r.href}>
              <Link
                href={r.href}
                className="group flex items-baseline justify-between gap-4 py-4 md:px-6 md:py-4"
              >
                <h3 className="font-display text-lg leading-tight text-cream md:text-xl">
                  {r.label}{" "}
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1" style={{ color: "var(--cream-2)" }}>
                    ↗︎
                  </span>
                </h3>
                <span className="label hidden md:inline" style={{ color: "var(--cream-2)" }}>
                  {r.tag}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   About — paper background, compressed bio + epigraph.
   ───────────────────────────────────────────────────────────── */
function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-24"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-3">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-display italic text-2xl text-ink-3">III.</span>
              <span className="label">About me</span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-9">
          <Reveal>
            <p className="mb-10 max-w-3xl border-l-2 border-line pl-6 font-display text-2xl italic leading-snug text-ink-2 md:mb-14 md:text-3xl">
              &ldquo;{about.tagline}&rdquo;
            </p>
          </Reveal>

          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className="mb-6 max-w-2xl text-lg leading-relaxed text-ink md:text-xl md:leading-[1.55]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SectionHead — Roman numeral + kicker + big serif title.
   ───────────────────────────────────────────────────────────── */
function SectionHead({
  number,
  kicker,
  title,
  note,
}: {
  number: string;
  kicker: string;
  title: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="grid gap-6 pb-12 md:grid-cols-12 md:gap-10 md:pb-16">
      <div className="md:col-span-3">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-display italic text-2xl text-ink-3">
              {number}.
            </span>
            <span className="label">{kicker}</span>
          </div>
        </Reveal>
      </div>
      <div className="md:col-span-9">
        <Reveal delay={120}>
          <h2 className="font-display display-bold leading-[1] text-[clamp(2.25rem,6vw,5rem)] tracking-[-0.025em]">
            {title}
          </h2>
        </Reveal>
        {note && (
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl text-base text-ink-2 md:text-lg">
              {note}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
