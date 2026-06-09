/**
 * About / Approach — bio, content philosophy, lists, contact.
 *
 * Voice rules (per Harry Dry + AI-tells + Gabriella's additions):
 *   - No em-dashes. Use periods, commas, parens, colons.
 *   - No "it's not X, it's Y" structures.
 *   - No rule-of-three rhetorical climaxes ("X. Y. Z.").
 *   - Complete sentences. Flowing prose, not staccato fragments.
 *   - Cultural narrative woven in. Situate the work in what's happening outside it.
 *   - Concrete > abstract. Visual > vague. Falsifiable > positional.
 *   - First-person, direct, anecdotal.
 *   - Cut every word that isn't working.
 */

export const about = {
  name: "Gabriella O'Reilly",
  tagline:
    "You can't keep an audience you never understood.",

  // Hero positioning — broader than her current B2B job title.
  roleLine: "Marketing & Creative Communications",
  forLine:  "Making brands harder to forget.",

  shortBio:
    "I lead enterprise content at Stellar, the open blockchain moving about $55B a year for institutions like PayPal, Visa, MoneyGram, and Franklin Templeton.",

  paragraphs: [
    "I'm Gabriella. I lead enterprise content at Stellar, the payments network moving about $55B a year for PayPal, Visa, MoneyGram, and Franklin Templeton.",
    "I started out photographing and managing a brand account at Nordstrom, and my work since has spanned most of marketing, from social and PR to paid, across B2C and B2B. The throughline is brand, and I sweat the small details most people scroll past.",
    "What I bring to a team is a full-funnel mindset and a cultural read. I'm chronically online across X, TikTok, and Instagram, so I catch trends while they're still small. The rest happens offline, in person at events and in the relationships I build with partners inside the company and out.",
    "Over the last six months, a couple of favorites: I rebuilt our company podcast from a Zoom setup into a real in-house studio, and its top episode just passed 1.4 million views. A segmentation overhaul lifted our email open rates 27x. I read the data as closely as I read the culture.",
    "On the side I run The Exposure Project, a mental wellness blog. I write some of it and readers send in the rest. One post pulled over 219k views and 58k likes, and it's where I really learned to create for an audience.",
    "San Francisco. Member of Latinas in Tech, finishing a Masters in Marketing Technology at Santa Clara.",
  ],

  practising: [
    "Enterprise content (B2B, financial infrastructure)",
    "Executive social: Denelle Dixon, José Fernández da Ponte",
    "Thought leadership programs",
    "Case studies through the buying-committee lens",
    "Podcast and editorial production",
    "Social ecosystems",
  ],

  toolkit: [
    "Sanity CMS and Asana for the editorial pipeline",
    "Briefs and SOPs that other people will actually use",
    "LinkedIn and X (the rest is paid attention)",
    "Claude for diagnostics and first drafts",
    "Descript for the SDF podcast cuts",
    "Notion and Figma",
    "Harry Dry's \"cut every word that isn't working\"",
  ],

  // Operating principles. Each one is testable behaviour, not a slogan.
  // No triplet rhythm; six lines of varying length.
  principles: [
    "Audit before you write.",
    "A buyer doesn't move until they can defend the choice internally.",
    "Every piece of content is also a system.",
    "If a sentence can be shorter, it isn't done.",
    "Voice matters more in the AI era, not less.",
    "The brief is never the work.",
  ],

  contact: {
    email: "Pellagattigaby@gmail.com",
    socials: [
      { label: "LinkedIn",         href: "https://www.linkedin.com/in/gpellagtti" },
      { label: "Exposure Project", href: "https://www.exposureprojectsf.com" },
      { label: "Instagram",        href: "https://instagram.com/exposureprojectsf" },
    ],
  },

  footerKicker: "work, words, a few side projects.",

  // Three toplines on how she approaches work and life — sits between
  // the hero and Selected Work as the page's thesis statement.
  ethos: [
    {
      number: "I",
      title: "See it before it's obvious.",
      body: "Everyone starts from the same brief and the same data. I catch the angle earlier, and I'd rather move on it early than wait until it's safe.",
    },
    {
      number: "II",
      title: "The machine doesn't supply the judgment.",
      body: "It can draft, speed things up, give me ten versions. Which one's good is still my call.",
    },
    {
      number: "III",
      title: "Comfortable isn't the bar.",
      body: "The best work happens past the point where it's comfortable. I aim high — and I push the people around me to aim there too.",
    },
  ],

  place: "San Francisco, CA",
  timezone: "America/Los_Angeles",
};
