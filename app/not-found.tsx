import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-[1400px] flex-1 flex-col justify-center px-6 py-32 md:px-10">
        <span className="label">404 — Off the page</span>
        <h1 className="mt-6 font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-[-0.025em]">
          Lost <span className="italic text-ink-2">in the margin</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
          The page you were after isn&apos;t here. It might have been moved,
          or it might never have been written down.
        </p>
        <Link href="/" className="label link mt-10 inline-block">
          ← Back to Index
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
