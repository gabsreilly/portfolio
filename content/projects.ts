/**
 * Selected work — four case studies.
 *
 * Each case study now carries ONE short paragraph in `body[0]` and
 * surfaces nested campaigns through `campaigns: string[]` (slugs that
 * match content/campaigns.ts).
 */

export type Project = {
  slug: string;
  number: string;
  title: string;
  year: string;
  role: string;
  client?: string;
  summary: string;
  body?: string[];
  image?: string;
  /** Optional video URL — YouTube, Vimeo, or a direct file path under /public. */
  video?: string;
  /** Optional CSS aspect-ratio for the video (defaults to 16/9). */
  videoRatio?: string;
  /** Optional X/Twitter post id used as the hero (renders the tweet card). */
  heroTweetId?: string;
  /** Optional X/Twitter post ids rendered as a tweet wall in the body. */
  tweetIds?: string[];
  tones: [string, string];
  metrics?: { label: string; value: string }[];
  link?: { label: string; href: string };
  /** Slugs of nested campaigns (see content/campaigns.ts). */
  campaigns?: string[];
};

export const projects: Project[] = [
  {
    slug: "sdf-studio-podcast",
    number: "01",
    title: "Audio + Video",
    year: "2025-present",
    role: "Producer + Content Lead",
    client: "Stellar",
    summary:
      "Taking the SDF podcast from a Zoom call with two microphones into a real in-house studio for video and editorial content.",
    body: [
      "I built the SDF podcast into an in-house studio: cameras, lighting, audio treatment, edit pipeline, the works. We now record video and audio in the same session, which means every episode produces multiple reusable assets across blog, social, and email instead of one buried audio file. The deeper bet underneath the whole thing is that production value is the new credibility signal in a feed where most B2B podcasts sound like LLMs interviewing LLMs.",
    ],
    metrics: [
      { label: "Top episode (X)",                      value: "1.4M views" },
      { label: "Spotify listens (latest)",             value: "26K · +309%" },
      { label: "Earned impressions (full-cycle plan)", value: "3M+ across channels" },
      { label: "Format",                               value: "Video + audio, in-house studio" },
    ],
    tones: ["#2a2722", "#5b5448"],
    heroTweetId: "2011533350344016078",
    tweetIds: ["2001032073940009162"],
  },
  {
    slug: "stellar-enterprise-content",
    number: "02",
    title: "Content Engine",
    year: "2024-present",
    role: "Enterprise Content Lead",
    client: "Stellar",
    summary:
      "Building the content engine for Stellar's enterprise side, where the audience is the people who hold veto power inside a financial institution.",
    body: [
      "Building the content engine for Stellar's enterprise side, where the audience is people who hold veto power inside a financial institution. The job is making a $55B-a-year open blockchain defensible in the language those institutions actually use about themselves. The engine spans long-form, executive social, podcast, and email. Each piece is built to multiply across the funnel, and each one has to hold up under a closer reading than the first draft ever got.",
    ],
    metrics: [
      { label: "Email open rate (segmentation rebuild)", value: "27× lift" },
      { label: "Channels owned",                          value: "Long-form · Exec social · Podcast · Email" },
      { label: "Audience",                                value: "Enterprise buying committees" },
      { label: "Partners during tenure",                  value: "PayPal · Visa · MoneyGram · Franklin Templeton · U.S. Bank" },
    ],
    tones: ["#494c2d", "#1f2014"],
    campaigns: ["stable-summer", "build-better"],
  },
  {
    slug: "stellar-social-ecosystem",
    number: "03",
    title: "Social Strategy",
    year: "2022-2024",
    role: "Social Media Strategist",
    client: "Stellar",
    summary:
      "Three years rebuilding Stellar's social presence from a single-channel afterthought into a 900K-follower ecosystem.",
    body: [
      "Three years rebuilding Stellar's social presence from a single-channel afterthought into a 900K-follower ecosystem. The throughline was the same one I bring to every channel now: read the audience honestly before you write a word. The Instagram-first playbook was wrong for our actual readers (developers, fintech operators, policy people), so I deprioritized it and rebuilt around LinkedIn and X, where the people who matter actually pay attention.",
    ],
    metrics: [
      { label: "Audience built",          value: "900K+ followers" },
      { label: "Engagement rate",         value: "2.5% → 6.9%" },
      { label: "Organic social growth",   value: "+216%" },
      { label: "Notable",                 value: "Idris Elba exclusive content partnership" },
    ],
    tones: ["#9aa097", "#54584f"],
  },
  {
    slug: "early-b2b-work",
    number: "04",
    title: "PR + Social",
    year: "2017-2022",
    role: "PR + Social Manager",
    client: "Exabeam, Imperva",
    summary:
      "Five years learning B2B content the hard way at two cybersecurity companies of very different sizes.",
    body: [
      "Five years learning B2B content the hard way at two cybersecurity companies. At Exabeam I ran PR and social as a single program on a single calendar, growing LinkedIn 220% and building Social Dose, a weekly employee advocacy newsletter that worked because it asked almost nothing of the reader. Before Exabeam I ran Imperva's global social-selling program, sourcing 1,200 marketing-qualified leads from social and supporting the company's public rebrand.",
    ],
    metrics: [
      { label: "LinkedIn growth (Exabeam, organic)", value: "+220%" },
      { label: "MQLs sourced from social (Imperva)", value: "1,200" },
      { label: "Marketing budget run",                value: "$500K" },
      { label: "Recognition",                         value: "MVP Award, \"Delivering the Exceptional\"" },
    ],
    tones: ["#9c8b6b", "#3a3327"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
