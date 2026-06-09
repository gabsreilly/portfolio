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
  /** X/Twitter post used as the hero (its video plays in the card). */
  heroTweetId?: string;
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
  /** Makes the whole tile a link (opens in a new tab). */
  href?: string;
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
    heroTweetId: "1940120775429632373", // Cannes — Denelle & Tomer, "stability over volatility"
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
        tweetId: "1945935418580414502", // GENIUS Act passed — Stellar, Jul 17 2025
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
        tweetIds: [
          "1951344255781539977", // FWB Fest takeover (errnsterr, Aug 1)
          "1938624727800541667", // OOH — "touch down on solid ground" (Stellar, Jun 27)
        ],
      },
      {
        kicker: "Media outreach",
        title: "The press carried it too.",
        body: "The story traveled past our own channels. CoinDesk sat down with Denelle Dixon to walk through how stablecoins, cross-border payments, and remittances had gotten to this point, which put Stellar's read on the moment in front of the industry's core audience.",
        tweetId: "1932883868719239293", // CoinDesk — Denelle interview, Jun 11
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
      "The campaign that launched Soroban, Stellar's smart contracts platform, to developers who were already building on other chains.",
    tones: ["#0f1a14", "#5ef2a0"], // terminal dark → built-better green
    heroImage: "/campaigns/build-better/build-better-key-art.png", // "Build Better on Stellar" key art
    sections: [
      {
        kicker: "The setup",
        title: "The audience had heard every pitch.",
        body: "Soroban was Stellar's first move into smart contracts, and the technology held up. The real challenge was the audience, since the developers we wanted were already building on Ethereum and Solana, with their tools and habits set, and most of them thought of Stellar as a payments network and nothing more. Build Better had to change how they saw it.",
        stats: [
          { label: "Platform", value: "Soroban smart contracts" },
          { label: "Audience", value: "Devs already building on other chains" },
          { label: "Launch", value: "Jul 2024" },
        ],
      },
      {
        kicker: "The strategy",
        title: "We led with content developers could use.",
        body: "Every chain says the same things: fast, scalable, secure, decentralized. Developers had heard all of it, so one more tagline was not going to win them over. They trust proof and they trust each other, so we built the campaign around both. We showed real projects using Soroban, explained the technology in the open, and gave people something worth sharing, so the message could travel without a media budget. The film below laid out the idea, and the rest of the campaign backed it up.",
        pullQuote: "Built better, so you can build better.",
        tweetId: "1897748002480984218",
        band: "blue",
      },
      {
        kicker: "The proof",
        title: "Decaf showed Soroban working in the real world.",
        body: "Decaf is a payments app built on Stellar that lets people across Latin America spend crypto at everyday shops. In the case study, Juliana explains why it matters: the world is changing, and people cannot be left behind. A real merchant solving a real problem was more convincing than any benchmark, so the case study led the season. The rest of the work supported it: a blog series on sustainability, performance, and security, Soroban 101 explainers, live Twitter Spaces and dev takeovers with a Solana co-founder, and an interactive map of Stellar's payment rails across more than 180 countries.",
        tweetId: "1859294165118431292",
        gallery: [
          {
            title: "The blog series",
            caption: "Deep dives on sustainability, performance, and security.",
            tones: ["#0f1a14", "#5ef2a0"],
          },
          {
            title: "Build Better Challenge",
            caption: "An open call for builders to ship real projects on Soroban.",
            href: "https://stellar.org/community/build-better-challenge",
            tones: ["#13233a", "#5ef2a0"],
          },
          {
            title: "Live with the builders",
            caption: "Twitter Spaces and dev takeovers, including a Solana co-founder.",
            tones: ["#1a1714", "#7c9cff"],
          },
          {
            title: "Interactive ramps map",
            caption: "Stellar's on and off ramps mapped across 180+ countries.",
            tones: ["#0f1a14", "#f8d63e"],
          },
        ],
      },
      {
        kicker: "Building in public",
        title: "One explainer pulled in a Solana co-founder.",
        body: "Garand Tyson made a short video explaining how Stellar handles state bloat, using State Archival to clear on-chain spam and unused data. It reached exactly the people who would push back on it. Anatoly Yakovenko, co-founder of Solana, weighed in, and two weeks later he was on a live X Space with Garand and Tomer Weller, working through how to solve state bloat in the open. That debate came straight from the content we published.",
        band: "lime",
        tweetIds: [
          "1813633045280469471", // Garand Tyson State Archival explainer (Jul 17 2024)
          "1817972133852840170", // Industry Perspectives live X Space w/ Anatoly (Jul 29 2024)
        ],
      },
      {
        kicker: "The community",
        title: "Developers carried it from there.",
        body: "The results came from the content itself. The awareness film passed a million views, organic search grew 34% from where it started, and #BetterOnStellar moved from mostly official accounts to developers and projects using it themselves, climbing from 70% to 88% non-official over the season. By the end, the people building on Stellar were the ones spreading the message, from a Build Better workshop in Prague to builders recommending the chain in their own words.",
        band: "paper-2",
        tweetIds: [
          "1869830936315183244", // Build Better Workshop, Prague (Dec 2024)
          "1900188926419099767", // "no one does it better than Stellar" (Mar 2025)
        ],
      },
    ],
    outcomes: [
      { label: "Organic awareness views",          value: "1M+" },
      { label: "Organic search clicks",            value: "+34%" },
      { label: "#BetterOnStellar (non-official)",  value: "70% → 88%" },
      { label: "New Discord members",              value: "+1,438" },
      { label: "Content formats",                  value: "Films · Blog series · Case studies · Spaces" },
      { label: "Channels",                         value: "Video · Blog · Social · Developer" },
    ],
  },
];

export function getCampaign(slug: string) {
  return campaigns.find((c) => c.slug === slug);
}

export function getCampaignsForProject(projectSlug: string) {
  return campaigns.filter((c) => c.parentSlug === projectSlug);
}
