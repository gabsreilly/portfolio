import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { WorkIndex } from "@/components/work-index";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NowLine } from "@/components/now-line";
import { projects } from "@/content/projects";
import { campaigns } from "@/content/campaigns";
import { about } from "@/content/about";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Ethos />
        <Work />
        <Spotlight />
        <MoreRooms />
        <About />
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
    <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-10 md:px-10 md:pt-14 md:pb-14">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <span className="label">Based in San Francisco</span>
          <NowLine place={about.place} timezone={about.timezone} />
        </div>
      </Reveal>

      <div className="mt-20 md:mt-28">
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
          <h1 className="mt-10 whitespace-nowrap text-center font-serif italic leading-[0.9] text-[clamp(2.5rem,8vw,8rem)] tracking-[-0.03em] md:mt-14">
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
          <span className="font-display italic text-lg text-ink md:text-xl">I.</span>
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
   Spotlight — visual tiles linking to campaign sub-pages.
   Counters the text-heavy index above with image-led blocks.
   ───────────────────────────────────────────────────────────── */
function Spotlight() {
  if (campaigns.length === 0) return null;
  const isSingle = campaigns.length === 1;

  return (
    <section
      id="spotlight"
      className="mx-auto max-w-[1400px] px-6 pt-14 md:px-10 md:pt-20"
    >
      <div className="mb-4 flex flex-col gap-1 md:mb-5 md:flex-row md:items-baseline md:justify-between md:gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display italic text-xl text-ink-3 md:text-2xl">
            III.
          </span>
          <span className="label">Spotlight</span>
        </div>
        <p className="font-display italic text-base text-ink-2 md:text-lg">
          The work I'd point to first.
        </p>
      </div>

      {isSingle ? (
        /* Single campaign — editorial side-by-side feature */
        <Reveal>
          <Link
            href={`/campaigns/${campaigns[0].slug}`}
            className="group block"
          >
            <div className="grid gap-6 md:grid-cols-12 md:gap-10">
              {/* Image column */}
              <div className="md:col-span-7">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-sm ring-1 ring-line transition-transform duration-500 ease-out group-hover:scale-[1.005]">
                  {campaigns[0].heroImage ? (
                    <Image
                      src={campaigns[0].heroImage}
                      alt={campaigns[0].title}
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        background: `linear-gradient(135deg, ${campaigns[0].tones[0]} 0%, ${campaigns[0].tones[1]} 100%)`,
                      }}
                    />
                  )}
                </div>
              </div>
              {/* Text column */}
              <div className="flex flex-col justify-center md:col-span-5">
                <span className="label">
                  {campaigns[0].year}
                  {campaigns[0].client ? ` · ${campaigns[0].client}` : ""}
                </span>
                <h3 className="mt-3 font-display display-bold text-[clamp(2rem,4.5vw,3rem)] leading-[1] tracking-[-0.02em]">
                  {campaigns[0].title}
                </h3>
                {campaigns[0].tagline && (
                  <p className="mt-3 font-display italic text-xl leading-snug text-ink-2 md:text-2xl">
                    {campaigns[0].tagline}
                  </p>
                )}
                <p className="mt-5 text-base leading-relaxed text-ink-2 md:text-lg md:leading-relaxed">
                  {campaigns[0].summary}
                </p>
                <span className="mt-8 inline-flex items-baseline gap-2 border-b-2 border-orange pb-1 self-start font-display text-base leading-tight transition-colors group-hover:text-orange md:text-lg">
                  View campaign
                  <span className="italic text-orange">↗</span>
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      ) : (
        /* Multiple campaigns — 2-col grid of image-led tiles */
        <div className="grid gap-3 md:grid-cols-2 md:gap-4">
          {campaigns.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <Link
                href={`/campaigns/${c.slug}`}
                className="group block overflow-hidden rounded-sm ring-1 ring-line"
              >
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  style={
                    c.heroImage
                      ? undefined
                      : {
                          background: `linear-gradient(135deg, ${c.tones[0]} 0%, ${c.tones[1]} 100%)`,
                        }
                  }
                >
                  {c.heroImage ? (
                    <Image
                      src={c.heroImage}
                      alt={c.title}
                      width={1600}
                      height={1000}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
                    <span
                      className="label"
                      style={{ color: "rgba(255,255,255,0.78)" }}
                    >
                      {c.year}
                      {c.client ? ` · ${c.client}` : ""}
                    </span>
                    <h3 className="mt-1 font-display italic leading-tight text-white text-2xl md:text-3xl">
                      {c.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
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
    <section className="bg-orange px-4 py-3 md:px-8 md:py-4">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid divide-y divide-ink/15 md:grid-cols-2 md:divide-x md:divide-y-0">
          {rooms.map((r) => (
            <Reveal key={r.href}>
              <Link
                href={r.href}
                className="group flex items-baseline justify-between gap-4 py-4 md:px-6 md:py-4"
              >
                <h3 className="font-display text-lg leading-tight text-ink md:text-xl">
                  {r.label}{" "}
                  <span className="ml-1 inline-block text-ink-2 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </h3>
                <span className="label hidden md:inline" style={{ color: "var(--ink-2)" }}>
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
              <span className="font-display italic text-2xl text-ink-3">IV.</span>
              <span className="label">About</span>
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
