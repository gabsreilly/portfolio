import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VideoEmbed } from "@/components/video-embed";
import { TweetEmbed, TweetWall } from "@/components/tweet-embed";
import { ReactionsRow } from "@/components/reactions-row";
import { campaigns, getCampaign } from "@/content/campaigns";
import { getProject } from "@/content/projects";
import type { GalleryItem, ReactionItem } from "@/content/campaigns";

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCampaign(slug);
  if (!c) return { title: "Not found" };
  return {
    title: `${c.title} — Gabriella O'Reilly`,
    description: c.summary,
  };
}

export default async function CampaignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) notFound();

  const parent = getProject(campaign.parentSlug);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Back link */}
        <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10 md:pt-14">
          <Reveal>
            <Link
              href={parent ? `/work/${parent.slug}` : "/"}
              className="label-paren link"
            >
              {parent ? `back to ${parent.title.toLowerCase()}` : "back to index"}
            </Link>
          </Reveal>
        </div>

        {/* Header */}
        <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-12 md:px-10 md:pt-14 md:pb-16">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <Reveal>
                <span className="label">
                  Campaign · {campaign.year}
                  {campaign.client ? ` · ${campaign.client}` : ""}
                </span>
              </Reveal>
            </div>
            <div className="md:col-span-9">
              <Reveal delay={120}>
                <h1 className="font-display display-bold text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-[-0.025em]">
                  {campaign.title}
                </h1>
              </Reveal>
              {campaign.tagline && (
                <Reveal delay={220}>
                  <p className="mt-4 font-display italic text-2xl leading-snug text-ink-2 md:text-3xl">
                    {campaign.tagline}
                  </p>
                </Reveal>
              )}
              <Reveal delay={340}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl md:leading-[1.55]">
                  {campaign.summary}
                </p>
              </Reveal>
              {campaign.outcomes && campaign.outcomes.length >= 3 && (
                <Reveal delay={440}>
                  <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3 md:mt-12 md:gap-8">
                    {campaign.outcomes.slice(0, 3).map((o) => (
                      <div key={o.label}>
                        <dd className="font-display display-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1] tracking-[-0.02em]">
                          {o.value}
                        </dd>
                        <dt className="label mt-2">{o.label}</dt>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* Hero asset */}
        <Reveal>
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            {campaign.heroVideo ? (
              <div className="mx-auto max-w-5xl">
                <VideoEmbed src={campaign.heroVideo} title={campaign.title} />
              </div>
            ) : campaign.heroTweetId ? (
              <TweetEmbed id={campaign.heroTweetId} className="w-full" />
            ) : campaign.heroImage ? (
              <div className="aspect-[16/9] w-full overflow-hidden rounded-sm ring-1 ring-line">
                <Image
                  src={campaign.heroImage}
                  alt={campaign.title}
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            ) : (
              <PlaceholderHero
                tones={campaign.tones}
                title={campaign.title}
              />
            )}
          </div>
        </Reveal>

        {/* Sections (setup, idea, activations, reception) */}
        {campaign.sections && campaign.sections.length > 0 && (
          <>
            {campaign.sections.map((s, i) => (
              <section
                key={i}
                className={`${bandClass(s.band)} ${i === 0 ? "pt-16 md:pt-24" : "pt-14 md:pt-20"} pb-14 md:pb-20`}
              >
                <div className="mx-auto max-w-[1400px] px-6 md:px-10">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-3">
                      {s.kicker && (
                        <Reveal>
                          <span
                            className="label"
                            style={{ color: bandLabelColor(s.band) }}
                          >
                            {s.kicker}
                          </span>
                        </Reveal>
                      )}
                    </div>
                    <div className="md:col-span-9">
                      <div className={s.tweetId ? "md:flex md:items-start md:gap-10" : undefined}>
                        <div className={s.tweetId ? "md:min-w-0 md:flex-1" : undefined}>
                          {s.title && (
                            <Reveal delay={120}>
                              <h2 className="font-display display-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em]">
                                {s.title}
                              </h2>
                            </Reveal>
                          )}
                          {s.body && (
                            <Reveal delay={220}>
                              <p className="mt-6 max-w-3xl text-lg leading-relaxed md:text-xl md:leading-[1.55]">
                                {s.body}
                              </p>
                            </Reveal>
                          )}
                          {s.stats && s.stats.length > 0 && (
                            <Reveal delay={340}>
                              <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-line pt-6 md:grid-cols-3">
                                {s.stats.map((stat) => (
                                  <div key={stat.label}>
                                    <dt
                                      className="label"
                                      style={{ color: bandLabelColor(s.band) }}
                                    >
                                      {stat.label}
                                    </dt>
                                    <dd className="mt-2 font-display text-2xl leading-tight tracking-[-0.01em] md:text-3xl">
                                      {stat.value}
                                    </dd>
                                  </div>
                                ))}
                              </dl>
                            </Reveal>
                          )}
                          {s.pullQuote && (
                            <Reveal delay={400}>
                              <blockquote className="mt-10 max-w-2xl border-l-2 border-orange pl-6 font-display italic text-2xl leading-snug text-orange md:text-3xl">
                                &ldquo;{s.pullQuote}&rdquo;
                              </blockquote>
                            </Reveal>
                          )}
                          {s.cta && (
                            <Reveal delay={440}>
                              <div className="mt-8">
                                <a
                                  href={s.cta.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="group inline-flex items-baseline gap-2 border-b-2 border-orange pb-1 font-display text-base leading-tight transition-colors hover:text-orange md:text-lg"
                                >
                                  {s.cta.label}
                                  <span className="italic text-orange">↗︎</span>
                                </a>
                              </div>
                            </Reveal>
                          )}
                        </div>
                        {s.tweetId && (
                          <div className="mt-8 w-full shrink-0 md:mt-1 md:w-[400px] lg:w-[460px]">
                            <Reveal delay={460}>
                              <TweetEmbed id={s.tweetId} className="w-full" />
                            </Reveal>
                          </div>
                        )}
                      </div>
                      {s.tweetIds && s.tweetIds.length > 0 && (
                        <Reveal delay={460}>
                          <TweetWall ids={s.tweetIds} />
                        </Reveal>
                      )}
                      {s.gallery && s.gallery.length > 0 && (
                        <Reveal delay={460}>
                          <Gallery items={s.gallery} />
                        </Reveal>
                      )}
                      {s.reactions && s.reactions.length > 0 && (
                        <Reveal delay={480}>
                          <ReactionsRow items={s.reactions} />
                        </Reveal>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </>
        )}

        {/* Writing — lime band, compact */}
        {campaign.writing && campaign.writing.length > 0 && (
          <section className="bg-lime pt-10 pb-10 md:pt-14 md:pb-14">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <Reveal>
                    <span className="label">Words</span>
                  </Reveal>
                </div>
                <div className="md:col-span-9">
                  <ul className="grid gap-6">
                    {campaign.writing.map((w) => (
                      <Reveal key={w.url}>
                        <li className="border-t border-ink/20 pt-4">
                          <a
                            href={w.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group block"
                          >
                            <span className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight tracking-[-0.01em] transition-colors duration-500 group-hover:text-ink-2">
                              {w.title}{" "}
                              <span className="italic text-ink-3">↗︎</span>
                            </span>
                            {(w.publication || w.date) && (
                              <div className="mt-2">
                                <span className="label-paren">
                                  {[w.publication, w.date]
                                    .filter(Boolean)
                                    .join(" · ")}
                                </span>
                              </div>
                            )}
                            {w.description && (
                              <p className="mt-2 text-sm leading-relaxed text-ink-2">
                                {w.description}
                              </p>
                            )}
                          </a>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Outcomes — deep blue band, paper text */}
        {campaign.outcomes && campaign.outcomes.length > 0 && (
          <section className="bg-blue pt-14 pb-14 text-paper md:pt-20 md:pb-20">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <Reveal>
                    <span className="label !text-paper/70">Outcomes</span>
                  </Reveal>
                </div>
                <div className="md:col-span-9">
                  <dl className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                    {campaign.outcomes.map((o) => (
                      <Reveal key={o.label}>
                        <div className="border-t border-paper/20 pt-4">
                          <dt className="label !text-paper/60">{o.label}</dt>
                          <dd className="mt-2 font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-tight tracking-[-0.01em] text-paper">
                            {o.value}
                          </dd>
                        </div>
                      </Reveal>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Appendix — extra material under the outcomes */}
        {campaign.appendix && (
          <section className="bg-paper-2 pt-14 pb-20 md:pt-20 md:pb-28">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <Reveal>
                    <span className="label">
                      {campaign.appendix.kicker ?? "More"}
                    </span>
                  </Reveal>
                </div>
                <div className="md:col-span-9">
                  {campaign.appendix.title && (
                    <Reveal delay={120}>
                      <h2 className="font-display display-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.05] tracking-[-0.02em]">
                        {campaign.appendix.title}
                      </h2>
                    </Reveal>
                  )}
                  {campaign.appendix.body && (
                    <Reveal delay={200}>
                      <p className="mt-5 max-w-3xl text-lg leading-relaxed md:text-xl md:leading-[1.55]">
                        {campaign.appendix.body}
                      </p>
                    </Reveal>
                  )}
                  <Reveal delay={300}>
                    <div className="mt-8 grid items-start gap-6 md:grid-cols-2 md:gap-8">
                      {campaign.appendix.tweetIds?.map((id) => (
                        <TweetEmbed key={id} id={id} className="w-full" />
                      ))}
                      {campaign.appendix.gallery &&
                        campaign.appendix.gallery.length > 0 && (
                          <div className="[&>div]:mt-0">
                            <Gallery items={campaign.appendix.gallery} />
                          </div>
                        )}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>
      <SiteFooter
        parent={
          parent
            ? { label: parent.title, href: `/work/${parent.slug}` }
            : undefined
        }
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   bandClass — maps a section's band field to bg/text classes.
   ───────────────────────────────────────────────────────────── */
function bandClass(band: string | undefined): string {
  switch (band) {
    case "paper-2":
      return "bg-paper-2";
    case "lime":
      return "bg-lime";
    case "blue":
      return "bg-blue text-paper on-dark";
    case "orange":
      return "bg-orange text-cream on-dark";
    case "stone":
      return "bg-stone";
    default:
      return ""; // "paper" — page default
  }
}

/* bandLabelColor — keeps the small uppercase labels legible on each band.
   .label is hardcoded to --ink-3, which goes muddy on lime and invisible on
   the dark bands, so we override per band. */
function bandLabelColor(band: string | undefined): string | undefined {
  if (band === "blue" || band === "orange") return "var(--cream-2)";
  if (band === "lime" || band === "stone") return "var(--ink)";
  return undefined; // paper / paper-2 keep the default ink-3
}

/* ─────────────────────────────────────────────────────────────
   PlaceholderHero — a tonal hero block when no image/video yet.
   ───────────────────────────────────────────────────────────── */
function PlaceholderHero({
  tones,
  title,
}: {
  tones: [string, string];
  title: string;
}) {
  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-sm ring-1 ring-line"
      style={{
        background: `linear-gradient(135deg, ${tones[0]} 0%, ${tones[1]} 100%)`,
      }}
    >
      <div className="flex h-full w-full items-end p-8 md:p-14">
        <span className="font-display text-5xl italic leading-none text-paper/95 mix-blend-screen md:text-8xl">
          {title}
        </span>
      </div>
      <div className="absolute right-4 top-4">
        <span
          className="label-paren"
          style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}
        >
          hero asset slot
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Gallery — grid of placeholder tiles (or real images / videos).
   ───────────────────────────────────────────────────────────── */
function Gallery({ items }: { items: GalleryItem[] }) {
  // A lone item fills the full width of its container instead of a dead column.
  const fullWidth = items.length === 1;
  return (
    <div
      className={`mt-10 grid gap-4 md:gap-6 ${fullWidth ? "" : "md:grid-cols-2"}`}
    >
      {items.map((item, i) => {
        const media = (
          <div
            className="relative w-full overflow-hidden rounded-sm ring-1 ring-line transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            style={{
              aspectRatio: item.aspect ?? "4 / 3",
              ...(!item.image && !item.video
                ? {
                    background: `linear-gradient(135deg, ${item.tones?.[0] ?? "#9aa097"} 0%, ${item.tones?.[1] ?? "#54584f"} 100%)`,
                  }
                : {}),
            }}
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            ) : item.video ? (
              <VideoEmbed
                src={item.video}
                title={item.title}
                ratio={item.aspect ?? "4/3"}
              />
            ) : (
              <div className="flex h-full w-full items-end p-4 md:p-6">
                <span className="font-display text-xl italic leading-tight text-paper/95 mix-blend-screen md:text-2xl">
                  {item.title}
                </span>
                <div className="absolute right-3 top-3">
                  <span
                    className="label-paren"
                    style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.65rem" }}
                  >
                    {item.href ? "visit ↗" : "asset slot"}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
        const caption = (
          <>
            <figcaption className="mt-3 flex items-baseline justify-between gap-3">
              <span className="font-display text-base leading-snug md:text-lg">
                {item.title}
                {item.href && (
                  <span className="ml-1 italic text-ink-3 transition-colors group-hover:text-orange">
                    ↗︎
                  </span>
                )}
              </span>
            </figcaption>
            {item.caption && (
              <p className="mt-1 text-sm leading-relaxed text-ink-2">
                {item.caption}
              </p>
            )}
          </>
        );
        return (
          <figure key={i}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                {media}
                {caption}
              </a>
            ) : (
              <>
                {media}
                {caption}
              </>
            )}
          </figure>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Reactions — earned social proof in a horizontal snap-scroll row.
   Each item is a screenshot + source + engagement metrics.
   ───────────────────────────────────────────────────────────── */
function Reactions({ items }: { items: ReactionItem[] }) {
  return (
    <div className="mt-10 -mr-6 md:-mr-10">
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pr-6 md:gap-6 md:pr-10"
        style={{ scrollbarWidth: "thin" }}
      >
        {items.map((item, i) => (
          <figure
            key={i}
            className="flex w-[280px] flex-none flex-col snap-start md:w-[320px]"
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm ring-1 ring-line bg-ink/[0.04]">
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
                {item.handle && (
                  <span className="label">{item.handle}</span>
                )}
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
