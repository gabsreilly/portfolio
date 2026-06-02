/**
 * Campaigns — sub-pages nested under a parent case study.
 *
 * Each campaign lives at /campaigns/[slug] and links back to its parent
 * project in content/projects.ts via `parentSlug`.
 *
 * The data model is editorial: sections, stats, pull quotes, gallery
 * placeholders. Drop in real photos/videos by setting `image` or
 * `video` on a gallery item; otherwise the tonal gradient renders.
 */

export type Campaign = {
  slug: string;
  /** Slug of the parent project (matches content/projects.ts). */
  parentSlug: string;
  title: string;
  year: string;
  client?: string;
  /** Italic line that sits under the title in the hero. */
  tagline?: string;
  /** One-sentence pitch shown under the tagline. */
  summary: string;
  /** Editorial sections — render in order, omit any field that isn't used. */
  sections?: CampaignSection[];
  /** Outcome metrics shown after the sections. */
  outcomes?: { label: string; value: string }[];
  /** Pieces Gabriella authored for / during the campaign. */
  writing?: WritingItem[];
  /** Hero placeholder gradient — overridden if `heroImage` or `heroVideo` set. */
  tones: [string, string];
  heroImage?: string;
  heroVideo?: string;
};

export type WritingItem = {
  title: string;
  url: string;
  publication?: string;
  date?: string;
  description?: string;
};

export type CampaignSection = {
  /** Small label above the title, e.g. "The setup". */
  kicker?: string;
  /** Section headline. */
  title?: string;
  /** Body paragraph. Keep to ~3-5 sentences. */
  body?: string;
  /** Optional stat callout row (e.g., "$27.6T", "Jun 2025"). */
  stats?: { label: string; value: string }[];
  /** Italic pull quote rendered with editorial weight. */
  pullQuote?: string;
  /** Embedded X / Twitter post by status id (renders one centered card). */
  tweetId?: string;
  /** Multiple X / Twitter posts rendered as a masonry tweet wall. */
  tweetIds?: string[];
  /** Image/video grid. Each item renders as a tile. */
  gallery?: GalleryItem[];
  /** Earned social proof — screenshots + engagement metrics. */
  reactions?: ReactionItem[];
  /** Optional in-context call to action (e.g., link to the blog post). */
  cta?: { label: string; href: string };
  /** Background band — defaults to "paper". */
  band?: "paper" | "paper-2" | "lime" | "blue" | "orange" | "stone";
};

export type GalleryItem = {
  title: string;
  caption?: string;
  /** Two-color gradient placeholder when no image/video is set. */
  tones?: [string, string];
  image?: string;
  video?: string;
  /** Tile aspect ratio (default "4/3"). */
  aspect?: string;
};

export type ReactionItem = {
  /** Screenshot of the post (tweet, IG comment, LinkedIn reaction, etc.). */
  image: string;
  /** Display name — e.g. "Latashá". */
  source: string;
  /** Handle — e.g. "@CallMeLatasha". */
  handle?: string;
  /** Platform + date — e.g. "X · Aug 2024". */
  platform?: string;
  /** Optional one-line editorial note about who this is or why it mattered. */
  context?: string;
  /** Engagement metrics shown as a label/value chip row. */
  metrics?: { label: string; value: string }[];
  /** Link to the original post, if public. */
  href?: string;
};

export const campaigns: Campaign[] = [
  {
    slug: "stable-summer",
    parentSlug: "stellar-enterprise-content",
    title: "Stable Summer",
    year: "2025",
    client: "Stellar",
    tagline: "It's stable summer.",
    summary:
      "A season-long campaign for Stellar's biggest position: crypto you can trust.",
    tones: ["#b8a8e8", "#f8d63e"], // Stable Summer brand: lavender → yellow
    heroVideo: "https://vimeo.com/1196776535",
    heroImage: "/campaigns/stable-summer/fwbfest-stage-takeover.png",
    sections: [
      {
        kicker: "The setup",
        title: "Mid-2025 was the window.",
        body: "Stablecoins broke through: federal legislation passed, Circle went public, and 12-month transaction volume crossed $27 trillion. The category had a window. Stellar had a position to claim.",
        stats: [
          { label: "Stablecoin transfer volume (12 mo)", value: "$27.6T" },
          { label: "First federal stablecoin law (GENIUS Act)", value: "Jun 2025" },
          { label: "Circle IPO valuation", value: "$6.9B" },
        ],
      },
      {
        kicker: "The idea",
        title: "Crypto you can trust.",
        body: "That isn't a claim Stellar makes — it's how the network is built. Regulated stablecoins, transparent reserves, partners who meet the highest standards, and onchain payments that move across borders in seconds. Stable Summer was the season to make that visible, in places people would actually see.",
        pullQuote: "Show, don't tell.",
        cta: {
          label: "Read \"Stable Is Hot\" on the Stellar blog",
          href: "https://stellar.org/blog/foundation-news/stable-is-hot",
        },
        band: "blue",
      },
      {
        kicker: "The activations",
        title: "Captured the culture. Prioritized the content.",
        body: "The activations were seeds we planted months in advance. Stable Summer ran across IRL, OOH, social, and developer surfaces. Every touchpoint reinforced the same core message in a different register, and each one earned its own piece of the season's momentum.",
        gallery: [
          {
            title: "What 'Stable' stood for.",
            caption: "Stellar's Jul 14 tweet — six pillars in one acronym.",
            image: "/campaigns/stable-summer/stable-acronym-tweet.png",
            tones: ["#1a1714", "#b8a8e8"],
          },
          {
            title: "FWB Fest, main stage",
            caption: "Main-stage takeover — \"Stable Summer Starts Here.\"",
            image: "/campaigns/stable-summer/fwbfest-stage-takeover.png",
            tones: ["#f8d63e", "#1a1714"],
          },
          {
            title: "Out-of-home",
            caption: "Installations across major European travel hubs.",
            video: "https://vimeo.com/1196778227",
            tones: ["#9088c8", "#f8d63e"],
          },
          {
            title: "Day one in Cannes",
            caption: "Stable Summer kicked off at Stable Summit during EthCC week.",
            image: "/campaigns/stable-summer/cannes-happy-hour.png",
            tones: ["#b8a8e8", "#f8d63e"],
          },
          {
            title: "Owning every stop",
            caption: "Denelle Dixon on stage at Stable Summit with Société Générale-FORGE.",
            image: "/campaigns/stable-summer/stable-summit-denelle-panel.png",
            tones: ["#1a1714", "#b8a8e8"],
          },
          {
            title: "Girls Gone Stable",
            caption: "Custom merch in the right Cannes scenes — picked up and reshared across the season (see the reception below).",
            image: "/campaigns/stable-summer/girls-gone-stable-cannes.png",
            tones: ["#b8a8e8", "#f8d63e"],
          },
        ],
      },
      {
        kicker: "The reception",
        title: "When the right people noticed.",
        body: "Stable Summer was built to land outside the usual industry circles. The strongest signal it worked was who picked it up on their own — musicians, builders, partners, voices we didn't pay for. The kind of reach that doesn't show up in a media plan.",
        band: "paper-2",
        reactions: [
          // Takes first — text-driven commentary and brand voices.
          {
            image: "/campaigns/stable-summer/reactions/freedom-pay-wallet-tweet.png",
            source: "Freedom Pay Wallet",
            handle: "@FreedomPayWallet",
            platform: "X · Jun 2025",
          },
          {
            image: "/campaigns/stable-summer/reactions/ermster-tweet.png",
            source: "ermsterr",
            handle: "@ermsterr",
            platform: "X · Aug 2025",
            metrics: [
              { label: "Views", value: "153" },
              { label: "Likes", value: "10" },
            ],
          },
          {
            image: "/campaigns/stable-summer/reactions/betts-tweet.png",
            source: "betts",
            handle: "@bettysrofl",
            platform: "X · Aug 2025",
            metrics: [
              { label: "Views", value: "194" },
            ],
          },
          // Photo-led reactions — selfies and merch in the wild.
          {
            image: "/campaigns/stable-summer/reactions/debbie-soon-tweet.png",
            source: "Debbie Soon",
            handle: "@debsoon",
            platform: "X · Jul 2025",
            metrics: [
              { label: "Views", value: "6.2K" },
              { label: "Likes", value: "116" },
              { label: "Reposts", value: "3" },
            ],
          },
          {
            image: "/campaigns/stable-summer/reactions/sofia-tweet.png",
            source: "Sofia",
            handle: "@sonkisol",
            platform: "X · Jun 2025",
            metrics: [
              { label: "Views", value: "1.2K" },
              { label: "Likes", value: "28" },
              { label: "Reposts", value: "7" },
            ],
          },
          {
            image: "/campaigns/stable-summer/reactions/nicole-tweet.png",
            source: "Nicole",
            handle: "@Nicolacpzin",
            platform: "X · Jul 2025",
            metrics: [
              { label: "Views", value: "767" },
              { label: "Likes", value: "9" },
            ],
          },
          {
            image: "/campaigns/stable-summer/reactions/marsboy-tweet.png",
            source: "MARSBOY",
            handle: "@real_marsboy",
            platform: "X · Jun 2025",
            metrics: [
              { label: "Views", value: "265" },
              { label: "Likes", value: "5" },
              { label: "Reposts", value: "1" },
            ],
          },
          {
            image: "/campaigns/stable-summer/reactions/brittany-seales-tweet.png",
            source: "Brittany Seales",
            handle: "@brittanyseales",
            platform: "X · Jul 2025",
            metrics: [
              { label: "Views", value: "108" },
              { label: "Likes", value: "3" },
            ],
          },
        ],
      },
    ],
    outcomes: [
      { label: "Total impressions",  value: "4M+" },
      { label: "Earned impressions", value: "900K+" },
      { label: "Engagements",        value: "178K" },
      { label: "Channels",           value: "OOH · IRL · Social · Developer" },
      { label: "Tagline",            value: "Build Something Stable" },
      { label: "Partners",           value: "PayPal · Etherfuse · FWB" },
    ],
    writing: [
      {
        title: "Stable Is Hot",
        url: "https://stellar.org/blog/foundation-news/stable-is-hot",
        publication: "Stellar Blog",
        date: "2025",
      },
    ],
  },
  {
    slug: "build-better",
    parentSlug: "stellar-enterprise-content",
    title: "Build Better",
    year: "2024",
    client: "Stellar",
    tagline: "Built better, so you can build better.",
    summary:
      "The go-to-market campaign that launched Soroban, Stellar's smart contracts platform, to developers who were already building somewhere else.",
    tones: ["#0f1a14", "#5ef2a0"], // terminal dark → built-better green
    sections: [
      {
        kicker: "The setup",
        title: "A new platform, and an audience that wasn't waiting for it.",
        body: "Soroban was Stellar's move into smart contracts, the capability the network had never had. The hard part was never the technology. The developers we wanted were already deep in Ethereum and Solana, with their tooling and their habits set, and most of them had filed Stellar under payments years ago. Build Better existed to change that filing.",
        stats: [
          { label: "Platform", value: "Soroban smart contracts" },
          { label: "Audience", value: "Devs already building on other chains" },
          { label: "Launch", value: "Jul 2024" },
        ],
      },
      {
        kicker: "The idea",
        title: "Built better, so you can build better.",
        body: "Every chain recites the same vocabulary: decentralized, scalable, interoperable, fast. So the campaign stopped competing on the spec sheet and claimed the underdog seat out loud. Stellar smart contracts were built different, with real-world use cases, Rust and WASM underneath, and an ecosystem that answered when a builder got stuck. The wordplay across build, built, and better gave developers a line they would actually repeat.",
        pullQuote: "Built different, so you can build better.",
        band: "blue",
      },
      {
        kicker: "The proof",
        title: "Show the work, skip the pitch.",
        body: "A launch video and a press release would have bounced off this audience. Build Better ran instead as a stream of evidence a developer could check: short films on performance, security, and sustainability, founder testimonials from projects already live on mainnet, and a $50K Dev.to hackathon that turned curiosity into commits. The boldest swing was the Build This Better Booth, where non-technical storytellers pitched what they wanted built better and a panel that included Idris Elba sent the strongest ideas to developer teams, closing at Meridian.",
        tweetId: "1897748002480984218",
        gallery: [
          {
            title: "Design principles",
            caption: "Short films on performance, security, and sustainability.",
            tones: ["#0f1a14", "#5ef2a0"],
          },
          {
            title: "Founder testimonials",
            caption: "Builders already shipping on Soroban mainnet.",
            tones: ["#13233a", "#5ef2a0"],
          },
          {
            title: "Dev.to hackathon",
            caption: "$50K in awards. 97 submissions by close.",
            tones: ["#1a1714", "#7c9cff"],
          },
          {
            title: "Build This Better Booth",
            caption: "Idris Elba on the judging panel, winners demoed at Meridian.",
            tones: ["#0f1a14", "#f8d63e"],
          },
        ],
      },
      {
        kicker: "The reception",
        title: "Developers showed up, and kept building.",
        body: "The campaign moved the metrics that matter for a developer launch. The Dev.to hackathon closed with 97 submissions and two winners demoing at Meridian, awareness videos cleared a million views on their own merit, and organic search climbed week over week. #BetterOnStellar carried the message across the season, from the CTO making the security case to the Build Better workshop in Prague, and over time the tag shifted from mostly official accounts to mostly developers using it themselves.",
        band: "paper-2",
        tweetIds: [
          "1869830936315183244", // Build Better Workshop, Prague (Dec 2024)
          "1823791683412353243", // SDF CTO Nicolas Barry on security (Aug 2024)
          "1859294165118431292", // Decaf real-world impact, Juliana (Nov 2024)
          "1900188926419099767", // "no one does it better than Stellar" (Mar 2025)
        ],
      },
    ],
    outcomes: [
      { label: "Hackathon submissions",           value: "97" },
      { label: "Hackathon prize pool",            value: "$50K+" },
      { label: "Awareness video views",           value: "1M+" },
      { label: "New Discord members (Q3)",        value: "+1,438" },
      { label: "New CRM contacts (Q3)",           value: "+987" },
      { label: "Avg tutorial watch time",         value: "3:06" },
      { label: "In-stream ad CTR (peak)",         value: "50.4%" },
      { label: "#BetterOnStellar (non-official)", value: "70% → 88%" },
    ],
  },
];

export function getCampaign(slug: string) {
  return campaigns.find((c) => c.slug === slug);
}

export function getCampaignsForProject(projectSlug: string) {
  return campaigns.filter((c) => c.parentSlug === projectSlug);
}
