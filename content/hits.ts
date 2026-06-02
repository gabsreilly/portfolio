/**
 * My favorite hits — the spotlight grid on the home page.
 *
 * Small editorial cards (visual + number + title + body), mirroring the
 * "What guides me" layout. Add as many as you like — the grid wraps to
 * new rows automatically (3 across on desktop).
 *
 * Each card shows a visual: an `image` if set, otherwise a `tones`
 * gradient placeholder. Optional `href` turns the whole card into a link.
 */

export type Hit = {
  /** Roman numeral or short index shown before the title. */
  number: string;
  title: string;
  body: string;
  /** Card visual — image path under /public. */
  image?: string;
  /** Gradient placeholder [from, to] when no image is set. */
  tones?: [string, string];
  /** Optional link target — internal route or external URL. */
  href?: string;
  /** CTA text shown when `href` is set (default "View"). */
  linkLabel?: string;
};

export const hits: Hit[] = [
  {
    number: "I",
    title: "Build Better",
    body: "The organic launch of Soroban smart contracts. Real builders, real-world use, and a community that carried the message.",
    image: "/campaigns/build-better/build-better-key-art.png",
    href: "/campaigns/build-better",
    linkLabel: "View campaign",
  },
  {
    number: "II",
    title: "Stable Summer",
    body: "A season-long campaign for Stellar's biggest position, carried through Cannes, FWB Fest, and the right corners of crypto culture.",
    image: "/campaigns/stable-summer/fwbfest-stage-takeover.png",
    href: "/campaigns/stable-summer",
    linkLabel: "View campaign",
  },
  {
    number: "III",
    title: "Block by Block Podcast",
    body: "Stellar's podcast rebuilt from a Zoom call with two mics into a real in-house studio for video and editorial.",
    image: "/work/sdf-studio-podcast/block-by-block.png",
    tones: ["#2a2722", "#5b5448"],
    href: "/work/sdf-studio-podcast",
    linkLabel: "View project",
  },
];
