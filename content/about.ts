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
  forLine:  "Making brands impossible to forget.",

  shortBio:
    "I lead editorial content at Stellar, the open blockchain moving about $55B a year for institutions like PayPal, Visa, MoneyGram, and Franklin Templeton.",

  paragraphs: [
    "I'm Gabriella. I lead editorial content at Stellar, the payments network powering roughly $55B in annual transaction volume for companies like PayPal, Visa, MoneyGram, and Franklin Templeton.",
    "My career started behind the camera at Nordstrom, managing social, and has since spanned nearly every corner of marketing, from PR and paid media to content and brand strategy, across both B2C and B2B. The constant has always been brand, and I care deeply about the details most people scroll past.",
    "I bring a full-funnel perspective and a sharp cultural read to everything I do. I'm immersed in the conversations happening across X, TikTok, and Instagram, which helps me spot shifts and opportunities early. The rest happens offline, in person at events and in the relationships I build with partners inside the company and out.",
    "Recently, I rebuilt Stellar's podcast from a Zoom recording setup into a dedicated in-house studio, with its top episode surpassing 1.4 million views. I also led a segmentation overhaul that increased email open rates by 27x. I read the data as closely as I read the culture.",
    "Outside of work, I run The Exposure Project, a mental wellness publication centered on honest, human stories. Readers contribute their own experiences alongside my writing, creating a space that's as much community as it is content. Our most-read post reached more than 219K views and 58K likes, but the bigger takeaway was understanding what earns attention and what earns trust. It's where I learned that the strongest content doesn't just capture an audience; it creates connection.",
    "I'm based in San Francisco, a member of Latinas in Tech, and currently completing a Master's in Marketing Technology at Santa Clara University.",
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
      body: "The biggest opportunities exist before they're undeniable. I trust the signal, make the call, and move early.",
    },
    {
      number: "II",
      title: "AI doesn't supply the judgment.",
      body: "It can draft, speed things up, give me ten versions. Which one's good is still my call.",
    },
    {
      number: "III",
      title: "Comfortable isn't the bar.",
      body: "The best work happens past the point where it's comfortable. I aim high, and I push the people around me to aim there too.",
    },
  ],

  place: "San Francisco, CA",
  timezone: "America/Los_Angeles",
};
