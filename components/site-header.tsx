import Link from "next/link";

const navLeft = [
  { label: "work",  href: "/#work"  },
  { label: "about", href: "/#about" },
];
const navRight = [
  { label: "notes",    href: "/notes"    },
  { label: "exposure", href: "/exposure" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md">
      <div className="absolute inset-0 -z-10 bg-paper/85" />

      {/* Mobile — wordmark + contact */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 md:hidden">
        <Link
          href="/"
          className="font-display display-bold text-xl leading-none tracking-tight"
        >
          Gabriella Pellagatti
        </Link>
        <Link href="/#contact" className="label-paren link">
          contact
        </Link>
      </div>

      {/* Desktop — split paren nav with centered wordmark */}
      <div className="mx-auto hidden max-w-[1400px] grid-cols-3 items-center gap-6 px-10 py-6 md:grid">
        <nav className="flex gap-6">
          {navLeft.map((n) => (
            <Link key={n.href} href={n.href} className="label-paren link">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="justify-self-center whitespace-nowrap font-display display-bold text-2xl leading-none tracking-tight"
        >
          Gabriella Pellagatti
        </Link>

        <nav className="flex justify-end gap-6">
          {navRight.map((n) => (
            <Link key={n.href} href={n.href} className="label-paren link">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="rule mx-6 md:mx-10" />
    </header>
  );
}
