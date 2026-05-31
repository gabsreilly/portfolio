import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VideoEmbed } from "@/components/video-embed";
import { projects, getProject } from "@/content/projects";
import { getCampaignsForProject } from "@/content/campaigns";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Not found" };
  return {
    title: `${p.title} — Gabriella`,
    description: p.summary,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const campaigns = getCampaignsForProject(slug);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Project header */}
        <section className="mx-auto max-w-[1400px] px-6 pt-14 pb-12 md:px-10 md:pt-20 md:pb-16">
          <Reveal>
            <Link href="/#work" className="label-paren link">
              back to index
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12">
            <div className="md:col-span-3">
              <Reveal>
                <span className="label">
                  {project.number} · {project.year}
                </span>
              </Reveal>
            </div>
            <div className="md:col-span-9">
              <Reveal delay={120}>
                <h1 className="font-display display-bold text-[clamp(2.75rem,9vw,8rem)] leading-[0.95] tracking-[-0.025em]">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-8 max-w-2xl font-display italic text-2xl leading-snug text-ink-2 md:text-3xl">
                  {project.summary}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Hero — video if available, else a tonal tile */}
        <Reveal>
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            {project.video ? (
              <VideoEmbed
                src={project.video}
                title={project.title}
                ratio={project.videoRatio}
              />
            ) : (
              <div
                className="aspect-[16/9] w-full overflow-hidden rounded-sm ring-1 ring-line"
                style={{
                  background: `linear-gradient(135deg, ${project.tones[0]} 0%, ${project.tones[1]} 100%)`,
                }}
              >
                <div className="flex h-full w-full items-end p-8 md:p-14">
                  <span className="font-display text-5xl italic leading-none text-paper/90 mix-blend-screen md:text-7xl">
                    {project.title}
                  </span>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Meta — Client / Role / Year */}
        <section className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10 md:pt-24">
          <div className="grid gap-10 border-y border-line py-8 md:grid-cols-3 md:py-10">
            <Meta label="Client" value={project.client ?? "Self-initiated"} />
            <Meta label="Role" value={project.role} />
            <Meta label="Year" value={project.year} />
          </div>
        </section>

        {/* Body — one short paragraph */}
        {project.body && project.body[0] && (
          <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10 md:pt-20">
            <div className="grid gap-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <Reveal>
                  <span className="label">In short</span>
                </Reveal>
              </div>
              <div className="md:col-span-8">
                <Reveal delay={120}>
                  <p className="max-w-3xl text-lg leading-relaxed text-ink md:text-xl md:leading-[1.6]">
                    {project.body[0]}
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
        )}

        {/* Featured work — links to nested campaign sub-pages */}
        {campaigns.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10 md:pt-28">
            <div className="grid gap-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <Reveal>
                  <span className="label">Featured work</span>
                </Reveal>
              </div>
              <div className="md:col-span-9">
                <ul className="border-t border-line">
                  {campaigns.map((c, i) => (
                    <Reveal key={c.slug} delay={i * 70}>
                      <li className="border-b border-line">
                        <Link
                          href={`/campaigns/${c.slug}`}
                          className="group grid grid-cols-12 items-baseline gap-4 py-5 transition-colors duration-500 hover:text-ink-2 md:py-6"
                        >
                          <span className="label col-span-2 md:col-span-1">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="col-span-7 font-display text-xl leading-tight md:col-span-7 md:text-2xl">
                            {c.title}
                            {c.tagline && (
                              <span className="ml-3 hidden font-display italic text-ink-3 md:inline md:text-xl">
                                {c.tagline}
                              </span>
                            )}
                          </span>
                          <span className="label col-span-2 hidden md:col-span-3 md:inline">
                            {c.client ?? ""}
                          </span>
                          <span className="label col-span-3 text-right md:col-span-1">
                            {c.year}
                          </span>
                        </Link>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Outcomes — only render if metrics exist */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10 md:pt-28">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-3">
                <Reveal>
                  <span className="label">Outcomes</span>
                </Reveal>
              </div>
              <div className="md:col-span-9">
                <dl className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                  {project.metrics.map((m) => (
                    <Reveal key={m.label}>
                      <div className="border-t border-line pt-4">
                        <dt className="label">{m.label}</dt>
                        <dd className="mt-2 font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.1] tracking-[-0.01em]">
                          {m.value}
                        </dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        )}

        {/* Next project */}
        <section className="mx-auto max-w-[1400px] px-6 pt-28 pb-24 md:px-10 md:pt-40 md:pb-32">
          <div className="border-t border-line pt-8">
            <span className="label">Next</span>
            <Link
              href={`/work/${next.slug}`}
              className="mt-3 block font-display display-bold text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.02em] transition-colors duration-500 hover:text-ink-2"
            >
              {next.title} <span className="italic text-ink-3">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="label">{label}</span>
      <p className="mt-2 font-display text-xl leading-snug">{value}</p>
    </div>
  );
}
