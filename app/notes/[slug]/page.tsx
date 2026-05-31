import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { essays, getEssay } from "@/content/writing";

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = getEssay(slug);
  if (!e) return { title: "Not found" };
  return { title: `${e.title} — Gabriella`, description: e.summary };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) notFound();

  const date = new Date(essay.date + "T00:00:00").toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" },
  );

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-[760px] px-6 pt-14 pb-16 md:pt-20">
          <Reveal>
            <Link href="/notes" className="label-paren link">
              back to notes
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <header className="mt-10 md:mt-16">
              <span className="label">
                {date}
                {essay.minutes ? ` · ${essay.minutes} min read` : ""}
              </span>
              <h1 className="mt-4 font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em]">
                {essay.title}
              </h1>
              <p className="mt-6 font-display text-xl italic text-ink-2 md:text-2xl">
                {essay.summary}
              </p>
            </header>
          </Reveal>

          <div className="rule mt-12" />

          {essay.body ? (
            <div className="mt-12 space-y-7">
              {essay.body.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p className="font-display text-xl leading-[1.55] text-ink md:text-[1.375rem] md:leading-[1.55]">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <p className="mt-12 font-display text-xl italic text-ink-2">
                This piece is still in the drawer. Check back soon. Or
                write to me and I&apos;ll send it early.
              </p>
            </Reveal>
          )}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
