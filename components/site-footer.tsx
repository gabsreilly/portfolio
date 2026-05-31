import Link from "next/link";
import { about } from "@/content/about";

type SiteFooterProps = {
  /** Optional wayfinding link to the parent project, rendered above the main footer. */
  parent?: { label: string; href: string };
};

export function SiteFooter({ parent }: SiteFooterProps = {}) {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="on-dark mt-32 bg-blue text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        {parent && (
          <div className="mb-16 border-b border-cream/20 pb-8 md:mb-20">
            <span className="label" style={{ color: "var(--cream-2)" }}>
              Inside
            </span>
            <Link
              href={parent.href}
              className="mt-3 block font-display display-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1] tracking-[-0.02em] transition-colors duration-500 hover:text-paper"
            >
              {parent.label}{" "}
              <span className="italic" style={{ color: "var(--cream-2)" }}>
                ↗︎
              </span>
            </Link>
          </div>
        )}
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="label-paren">{about.footerKicker.toLowerCase()}</span>
            <p className="mt-6 font-display display-heavy text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-[-0.03em]">
              Say <span className="italic font-normal">hi</span>.
            </p>
            <div className="mt-8">
              <Link
                href={`mailto:${about.contact.email}`}
                className="link font-display text-2xl md:text-3xl"
              >
                {about.contact.email}
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-1 md:gap-8">
              <div>
                <span className="label">Elsewhere</span>
                <ul className="mt-4 space-y-2">
                  {about.contact.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link text-lg"
                      >
                        {s.label} ↗︎
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="label">Colophon</span>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: "var(--cream-2)" }}
                >
                  Set in Fraunces &amp; Geist. Built with Next.js,
                  hosted on Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-4">
          <span className="label">© {year} Gabriella O'Reilly</span>
          <span className="label italic">
            {about.place} ·{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </footer>
  );
}
