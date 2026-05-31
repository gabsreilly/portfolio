/**
 * Notes — short pieces of thinking about B2B content, voice, and strategy.
 *
 * Voice rules: no em-dashes, no "X but Y" inversions, no rule-of-three
 * rhetorical climaxes, complete sentences over fragments, cultural
 * context woven in where it earns its place.
 */

export type Essay = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  minutes?: number;
  body?: string[];
  href?: string;
};

export const essays: Essay[] = [
  {
    slug: "narrative-infrastructure",
    title: "Content as narrative infrastructure",
    date: "2026-04-12",
    summary:
      "B2B content isn't a campaign. It's the connective tissue between product, sales, and the people who have to say yes.",
    minutes: 3,
    body: [
      "We're not running campaigns anymore, and most days we're not really running posts either. We're building an engine. The enterprise audience isn't deciding to buy this week; they're working through six months of internal reviews, budget cycles, and risk committees, and your content has to still be there at the end of all of it, holding up under closer reading than the first draft ever got.",
      "Enterprise buyers move when their internal champion can answer the hardest question without having to guess: how does this sustain my bottom line over time? Not in the abstract, but in every quarterly review and every audit and every board meeting from here on. The content's job is to give them the answer in advance, written down somewhere they can cite when they need it.",
      "That is what I keep calling narrative infrastructure. The phrase sounds grand because nothing better describes it. It means the content has to function like an operating system for what the company is and how it works, rather than another layer of marketing pressed on top of the product page.",
      "My job is to make a complex product easy enough to choose that choosing it stops feeling like a risk. That happens to also be the only kind of content that survives the era we're in, when most B2B copy now sounds like it was produced by the same intern at the same agency using the same model. The market has gotten very loud and very same-sounding, and \"sounds like a person who has thought about this\" is now a real competitive advantage.",
    ],
  },
  {
    slug: "diagnostic-before-the-brief",
    title: "The diagnostic before the brief",
    date: "2026-02-08",
    summary:
      "How I start every new content engagement. Before a single post, a hard look at how the product is actually being talked about.",
    minutes: 3,
    body: [
      "Before I write a single word for a new product, I do an audit. Not the standard content inventory most teams mean by the word, where you list URLs and word counts and call it a day. A story audit. I read every blog post, every press release, every customer case study, and every sales deck the company has ever produced, and I pull out the words it uses to describe itself. Then I read the press the company has earned, and I write down the words the press chose instead. Then I sit with the BD team and the product team and listen to the words they use when they think no one in marketing is around.",
      "Almost every time I do this, three different companies show up in the three sets of pages: the polished one on the homepage that's trying too hard, the half-imagined one the press has decided to write about, and the one the team actually believes in (which is, invariably, the most interesting of the three and the least visible to the public). The brief that follows is supposed to be a decision about which of those three companies we want to be from here on. The brief is the easy part. The diagnostic is the work, and it's where most of the real strategy actually happens.",
    ],
  },
  {
    slug: "why-i-deprioritized-instagram",
    title: "Why I deprioritized Instagram",
    date: "2025-09-21",
    summary:
      "On reading audience data honestly, even when the data tells you to walk away from a platform everyone else is on.",
    minutes: 2,
    body: [
      "When I started at SDF in 2022, the social team was putting real hours into Instagram, partly because everyone else in crypto was on Instagram, and partly because the marketing-conference circuit was still pointing there. The audience data told a different story. The people SDF actually needed to reach (developers, fintech operators, policy people, the occasional CTO) lived on LinkedIn and X and almost never on Instagram. The Instagram audience we did have was mostly retail crypto, which meant thousands of follows that would never read a single Stellar blog post. I took the channel down to maintenance and reallocated the hours.",
      "The same logic has kept applying through every audience-data exercise I've run since. When you read the data honestly and take it seriously, you usually find yourself doing less than the prevailing marketing playbook tells you to do. It's uncomfortable in the moment, and most teams will resist it for at least a quarter, but it consistently works.",
    ],
  },
  {
    slug: "translating-tech-for-the-people-who-decide",
    title: "Translating tech for the people who decide",
    date: "2025-06-04",
    summary:
      "A decade of B2B content has taught me one thing. The buyer is almost never the user, and the words have to work for both.",
    minutes: 3,
    body: [
      "The buyer is almost never the user. In B2B, the person who has to live with the product day to day is not the person who has to approve buying it. The user wants speed and features, while the approver wants, more than anything else, not to get fired six months from now. Your content has to write for both of them inside the same piece, and that's harder than it sounds because the two audiences read very differently.",
      "For the user, the question is how the thing actually works, and the right answer involves something with code in it: the shape of the API, the time to first successful deployment, and how the SDK handles the edge cases an experienced developer is already imagining. For the approver, the question is what could go wrong, and the right answer involves uptime histories, regulatory posture, and a defensible comparison to whatever alternative they will eventually be cross-examined about in their own review meeting.",
      "Most B2B copy fails because it tries to do both with one voice on one page and ends up serving neither audience well. I write it as two layers in the same piece. The same body of content, but with two distinct reading paths through it. The user scrolls one way and reads the technical layer; the approver scrolls a different way and reads the risk layer. Both find what they came for, and they don't have to wade through the other person's questions to find it.",
    ],
  },
];

export function getEssay(slug: string) {
  return essays.find((e) => e.slug === slug);
}
