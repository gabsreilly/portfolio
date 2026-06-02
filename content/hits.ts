/**
 * My favorite hits — the spotlight grid on the home page.
 *
 * Small editorial cards (number + title + body), mirroring the
 * "What guides me" layout. Add as many as you like — the grid wraps
 * to new rows automatically (3 across on desktop).
 *
 * Optional `href` turns the whole card into a link (campaign page,
 * external post, anywhere). Set `linkLabel` to change the CTA text.
 *
 * These three are starters pulled from existing work — swap or extend.
 */

export type Hit = {
  /** Roman numeral or short index shown before the title. */
  number: string;
  title: string;
  body: string;
  /** Optional link target — internal route or external URL. */
  href?: string;
  /** CTA text shown when `href` is set (default "View"). */
  linkLabel?: string;
};

export const hits: Hit[] = [
  {
    number: "I",
    title: "Stable Summer",
    body: "A season-long campaign for Stellar's biggest position, built for institutional buyers and carried through Cannes, FWB Fest, and the right corners of crypto culture. 4M+ impressions.",
    href: "/campaigns/stable-summer",
    linkLabel: "View campaign",
  },
  {
    number: "II",
    title: "27× email lift",
    body: "Rebuilt enterprise segmentation for a $55B-a-year blockchain, speaking to the buying committees inside PayPal, Visa, and Franklin Templeton in the language they use about themselves.",
  },
  {
    number: "III",
    title: "900K social ecosystem",
    body: "Three years turning Stellar's social from a single-channel afterthought into a 900K-follower ecosystem, including an exclusive content partnership with Idris Elba.",
  },
];
