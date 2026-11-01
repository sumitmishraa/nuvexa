export type BrandTone = "sage" | "brass" | "ink" | "clay" | "ivory";
export type ArtMotif = "leaf" | "orbit" | "drop" | "mortar" | "paw" | "flask" | "blocks" | "grain";

export type Brand = {
  slug: string;
  name: string;
  kind: "brand" | "vertical";
  status: string;
  category: string;
  lifeStage: string;
  quote: string;
  summary: string;
  intro: string[];
  need: { title: string; body: string[] };
  philosophy: string;
  standsFor: string[];
  audience: string;
  approach: { title: string; body: string }[];
  formula?: string[];
  focusAreas?: string[];
  closing: string;
  /** Square brand tile (logo for consumer brands; illustrative photo for verticals). */
  logo: string;
  /** The tile's own background colour, so the logo can sit full-bleed on a card. */
  logoBg: string;
  /** "logo" cards show the brand mark; "photo" cards show the tile as a full photograph. */
  mode: "logo" | "photo";
  image?: string;
  imageAlt?: string;
  tone: BrandTone;
  motif: ArtMotif;
};

export const brands: Brand[] = [
  {
    slug: "super-being",
    name: "Super Being",
    kind: "brand",
    status: "Launching soon",
    category: "Nutraceuticals · Modern everyday wellness",
    lifeStage: "Adults",
    quote: "Modern nutrition for modern everyday wellbeing.",
    summary:
      "A nutraceutical brand for adults who want a practical, modern way to support everyday wellbeing — without the noise.",
    intro: [
      "Super Being is Nuvexa's nutraceutical brand for adults who want to look after their everyday wellbeing in a way that fits real life. It brings together thoughtful nutrition, convenient formats and clear communication, so that a structured approach to wellness feels understandable rather than overwhelming.",
      "The brand is designed for the way people actually live today: busy mornings, unpredictable schedules and an endless stream of conflicting advice. Super Being's role is to cut through that — to make good choices simpler to understand, easier to adopt and easier to keep.",
    ],
    need: {
      title: "Wellness has become confusing.",
      body: [
        "Most adults want to take better care of themselves, but the category often makes it harder than it should be. Labels are dense, claims are loud and routines are difficult to sustain beyond the first few weeks.",
        "Super Being starts from that frustration. Instead of adding complexity, it aims to remove it — with formats that slot into existing routines and communication that explains, plainly, what a product is for and how to use it.",
      ],
    },
    philosophy:
      "Wellness should feel simple, practical and relevant to modern life. Rather than making nutrition unnecessarily complicated, Super Being aims to create an accessible experience in which people can better understand their everyday needs and make informed choices.",
    standsFor: [
      "Modern nutrition",
      "Everyday wellbeing",
      "Convenient wellness formats",
      "Clear communication",
      "Consumer-friendly experiences",
      "Responsible product development",
      "Contemporary lifestyle relevance",
    ],
    audience:
      "Working professionals, active adults and anyone building a more structured wellness routine who values clarity over hype and convenience over complication.",
    approach: [
      { title: "Thoughtful formulation", body: "Developed with specialised partners, guided by evidence and a disciplined approach to ingredients and claims." },
      { title: "Formats that fit", body: "Convenient formats designed around real routines, so consistency feels natural rather than effortful." },
      { title: "Honest communication", body: "Plain-language guidance on what each product is for and how to use it — no exaggerated promises." },
    ],
    closing:
      "Super Being brings practical, modern nutrition into everyday life — a more structured, more understandable approach to wellness for contemporary consumers.",
    logo: "/brands/super-being.webp",
    logoBg: "#ffffff",
    mode: "logo",
    image: "/media/super-being.webp",
    imageAlt: "A ceramic bowl of oats and seeds beside a glass of water and a halved citrus on a green stone table in morning light.",
    tone: "sage",
    motif: "grain",
  },
  {
    slug: "super-titans",
    name: "Super Titans",
    kind: "brand",
    status: "Launching soon",
    category: "Kids' nutrition · The growing years",
    lifeStage: "Children & families",
    quote: "Thoughtful nutrition for growing generations.",
    summary:
      "A kids' nutrition brand built around the evolving needs of growing children — and the confidence today's parents are looking for.",
    intro: [
      "Super Titans is Nuvexa's kids' nutrition brand, created around the evolving nutritional needs of growing children and the expectations of today's parents. It combines responsible nutrition, child-friendly experiences and straightforward communication.",
      "Parents are more informed, and more discerning, than ever. They read labels, compare options and expect brands to be transparent. Super Titans is designed to meet that standard — and to make the experience genuinely enjoyable for children.",
    ],
    need: {
      title: "Parents want confidence. Children want something they enjoy.",
      body: [
        "Children's nutrition sits at a delicate intersection. A product has to earn a parent's trust and a child's acceptance at the same time — and it has to do both every single day.",
        "Super Titans is built around that balance: responsible formulation that parents can understand, and experiences designed to feel approachable and fun for children.",
      ],
    },
    philosophy:
      "Children's nutrition requires a careful balance between responsible formulation, parental confidence and an experience that feels approachable for children. Super Titans is designed around that balance, from the first idea to the final detail.",
    standsFor: [
      "Children's nutrition",
      "Growing-years wellness",
      "Responsible nutrition",
      "Parent confidence",
      "Child-friendly experiences",
      "Straightforward communication",
      "Modern family needs",
    ],
    audience:
      "Modern parents and caregivers looking for responsible, transparent nutrition options for children through the growing years.",
    approach: [
      { title: "Responsible by design", body: "Formulation decisions made with care for growing children, developed with qualified specialist partners." },
      { title: "Made to be enjoyed", body: "Child-friendly experiences that make healthy routines easier for families to keep." },
      { title: "Clear for parents", body: "Straightforward information that helps families make informed, confident choices." },
    ],
    closing:
      "Super Titans focuses on responsible, approachable nutrition for growing children, supported by communication that helps modern families choose with confidence.",
    logo: "/brands/super-titans.webp",
    logoBg: "#fefefd",
    mode: "logo",
    image: "/media/super-titans.webp",
    imageAlt: "A glass of milk and a plate of banana and berries among wooden toy blocks on soft linen.",
    tone: "brass",
    motif: "blocks",
  },
  {
    slug: "rugd-men",
    name: "RUGD Men",
    kind: "brand",
    status: "Launching soon",
    category: "Men's grooming · Personal care",
    lifeStage: "Men",
    quote: "Simple. Focused. Confident.",
    summary:
      "A contemporary grooming and personal care brand for men who value simplicity, performance and confidence.",
    intro: [
      "RUGD Men is Nuvexa's contemporary men's grooming and personal care brand. It is designed for men who value simplicity, performance and confidence, bringing focused routines and modern personal-care experiences into everyday life.",
      "Many men want to take better care of themselves but find the category either intimidating or irrelevant. RUGD Men speaks plainly, keeps routines short and focuses on products that earn their place on the shelf.",
    ],
    need: {
      title: "Self-care shouldn't feel complicated.",
      body: [
        "Men's grooming is often either over-engineered or under-considered — ten-step regimens on one side, an afterthought on the other.",
        "RUGD Men takes the middle path: a small number of focused, relevant products and a direct, uncomplicated voice that makes looking after yourself feel natural.",
      ],
    },
    philosophy:
      "Men's grooming doesn't need to be complicated. RUGD Men is built around focused routines, relevant products and an uncomplicated approach to self-care — performance without the pretence.",
    standsFor: [
      "Men's grooming",
      "Personal care",
      "Simplicity",
      "Performance",
      "Confidence",
      "Modern self-care",
      "Focused routines",
      "Contemporary lifestyle",
    ],
    audience:
      "Men who want effective, no-nonsense personal care that fits a busy, contemporary lifestyle.",
    approach: [
      { title: "Fewer, better products", body: "A focused range built around everyday routines rather than an ever-expanding shelf." },
      { title: "Performance first", body: "Products developed with specialist partners to do their job well, day after day." },
      { title: "A direct voice", body: "Uncomplicated communication that respects a man's time and intelligence." },
    ],
    closing:
      "RUGD Men brings a contemporary approach to grooming — focused routines, modern sensibility and performance-oriented personal care for today's man.",
    logo: "/brands/rugd-men.webp",
    logoBg: "#000000",
    mode: "logo",
    tone: "ink",
    motif: "orbit",
  },
  {
    slug: "super-envi-intima",
    name: "Super Envi Intima",
    kind: "brand",
    status: "Launching soon",
    category: "Intimate hygiene · Intimacy · Personal wellbeing",
    lifeStage: "Personal wellbeing",
    quote: "Comfort. Confidence. Intimate wellbeing.",
    summary:
      "An intimate hygiene and wellbeing brand built on comfort, confidence, discretion and respect.",
    intro: [
      "Super Envi Intima is Nuvexa's intimate hygiene, intimacy and personal wellbeing brand. It is built around comfort, confidence, discretion and respect, with an ambition to bring responsible, modern communication to a category that has historically been surrounded by discomfort and stigma.",
      "Intimate wellbeing is part of overall wellbeing — and it deserves the same care, quality and openness as any other part of a person's routine.",
    ],
    need: {
      title: "A category that deserves openness.",
      body: [
        "For too long, intimate hygiene and intimacy have been discussed in whispers, if at all. That silence makes it harder for people to find information, ask questions or choose products confidently.",
        "Super Envi Intima aims to change the tone of the conversation — respectful, discreet and modern, without embarrassment and without sensationalism.",
      ],
    },
    philosophy:
      "Intimate wellbeing is an important part of personal wellbeing. Super Envi Intima aims to create a more open, respectful, responsible and contemporary conversation around intimate hygiene and intimacy.",
    standsFor: [
      "Intimate hygiene",
      "Intimacy",
      "Personal wellbeing",
      "Comfort",
      "Confidence",
      "Discretion",
      "Respect",
      "Responsible communication",
      "Freedom from stigma",
    ],
    audience:
      "Adults who want comfortable, trustworthy intimate care — and a brand that speaks to them with respect and discretion.",
    approach: [
      { title: "Comfort and care", body: "Products developed with qualified partners, with comfort and gentleness as non-negotiables." },
      { title: "Discretion by default", body: "Thoughtful experiences from discovery to delivery, designed to respect privacy." },
      { title: "Responsible conversation", body: "Modern, stigma-free communication that informs rather than sensationalises." },
    ],
    closing:
      "Super Envi Intima is focused on responsible innovation and modern communication around intimate hygiene, intimacy, comfort and personal confidence.",
    logo: "/brands/super-envi-intima.webp",
    logoBg: "#474de9",
    mode: "logo",
    tone: "clay",
    motif: "drop",
  },
  {
    slug: "modern-ayurveda",
    name: "Modern Ayurveda",
    kind: "vertical",
    status: "Future vertical",
    category: "Traditional wisdom · Modern science",
    lifeStage: "Holistic wellbeing",
    quote: "Traditional wisdom, translated through modern science.",
    summary:
      "Authentic Ayurvedic principles, reinterpreted for contemporary lifestyles through evidence-led formulation and modern formats.",
    intro: [
      "Nuvexa's Modern Ayurveda vertical will reinterpret authentic Ayurvedic principles for contemporary lifestyles. It brings centuries of traditional knowledge together with the disciplines of modern product development.",
      "The objective is an Ayurveda proposition that is credible, relevant and easier for today's consumers to adopt — respectful of its roots and rigorous in its execution.",
    ],
    need: {
      title: "Ayurveda deserves rigour and relevance.",
      body: [
        "Interest in Ayurveda is strong, but many consumers find it hard to know what is authentic, what is standardised and how traditional practices fit into a modern day.",
        "Modern Ayurveda is designed to bridge that gap: honouring traditional principles while applying evidence-led formulation, standardised ingredients and responsible claims.",
      ],
    },
    philosophy:
      "Tradition and science are not opposites. The Modern Ayurveda vertical treats traditional knowledge as a starting point and applies modern standards of evidence, consistency and communication to make it credible and easy to adopt.",
    formula: [
      "Traditional knowledge",
      "Evidence-led formulation",
      "Standardised ingredients",
      "Responsible claims",
      "Modern formats",
    ],
    standsFor: [
      "Authentic Ayurvedic principles",
      "Contemporary lifestyles",
      "Evidence-led formulation",
      "Standardised ingredients",
      "Responsible claims",
      "Modern product formats",
      "Consumer relevance",
      "Science-informed development",
    ],
    audience:
      "Consumers who value Ayurveda's heritage but expect the consistency, transparency and convenience of modern products.",
    approach: [
      { title: "Rooted in tradition", body: "Authentic Ayurvedic principles as the foundation of every proposition." },
      { title: "Standardised and consistent", body: "Standardised ingredients and evidence-led formulation for reliability." },
      { title: "Made for modern life", body: "Contemporary formats and clear communication that make Ayurveda easier to adopt." },
    ],
    closing:
      "Modern Ayurveda will bring traditional Ayurvedic principles into contemporary wellness through evidence-led formulation, standardised ingredients, responsible claims and modern formats.",
    logo: "/brands/modern-ayurveda.webp",
    logoBg: "#5d7a3a",
    mode: "photo",
    tone: "brass",
    motif: "mortar",
  },
  {
    slug: "pet-care",
    name: "Pet Care",
    kind: "vertical",
    status: "Future vertical",
    category: "Thoughtful innovation for pets & pet parents",
    lifeStage: "Companion animals",
    quote: "Thoughtful innovation for pets and modern pet parents.",
    summary:
      "Responsibly developed solutions for companion animals and the people who care for them.",
    intro: [
      "Nuvexa's Pet Care vertical will focus on unique, relevant and responsibly developed solutions for the evolving needs of companion animals and their caregivers.",
      "Pets are family. Modern pet parents expect the same quality, transparency and convenience for their companions that they expect for themselves — and this vertical is designed around that expectation.",
    ],
    need: {
      title: "Pets are family. Their care should reflect that.",
      body: [
        "As more households welcome companion animals, pet parents are looking for products they can trust — thoughtfully developed, clearly explained and easy to use.",
        "The Pet Care vertical will bring practical innovation, quality and clear communication to everyday pet care.",
      ],
    },
    philosophy:
      "Thoughtful innovation for the animals we love. The aim is a trusted, modern pet-care proposition that combines practical innovation, quality, convenience and clear communication.",
    formula: ["Innovation", "Quality", "Convenience", "Clear communication"],
    standsFor: [
      "Companion animal wellbeing",
      "Modern pet-parent needs",
      "Responsible development",
      "Practical innovation",
      "Quality",
      "Convenience",
      "Clear communication",
      "Trust",
    ],
    audience: "Modern pet parents who want responsible, convenient and trustworthy care for their companion animals.",
    approach: [
      { title: "Responsibly developed", body: "Solutions built with care for companion animals and developed with qualified partners." },
      { title: "Practical innovation", body: "Ideas that make everyday pet care simpler and more effective." },
      { title: "Trust through clarity", body: "Clear, honest communication pet parents can rely on." },
    ],
    closing:
      "Pet Care will develop thoughtful, responsibly created solutions for companion animals and the people who care for them.",
    logo: "/brands/pet-care.webp",
    logoBg: "#c9b79a",
    mode: "photo",
    tone: "sage",
    motif: "paw",
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    kind: "vertical",
    status: "Long-term ambition",
    category: "New-age · Innovative · Science-led healthcare",
    lifeStage: "Patients & healthcare",
    quote: "New-age, innovative and science-led healthcare.",
    summary:
      "A future-focused, science-led healthcare business built around quality, innovation and meaningful patient needs.",
    intro: [
      "Nuvexa's Pharmaceuticals vertical is envisioned as a science-led healthcare business focused on quality, innovation and meaningful patient needs.",
      "Initially, Nuvexa intends to work through qualified development and manufacturing partners. Over time, the company intends to build its own capabilities in pharmaceutical R&D and manufacturing, with an ambition to serve regulated and rest-of-world markets.",
    ],
    need: {
      title: "Meaningful patient needs, met with quality.",
      body: [
        "Access to high-quality medicines remains one of the most important challenges in healthcare, in India and around the world.",
        "The Pharmaceuticals vertical is Nuvexa's long-term commitment to that challenge — built step by step, with quality and responsibility at its core.",
      ],
    },
    philosophy:
      "Pharmaceuticals demand patience, rigour and an uncompromising commitment to quality. Nuvexa intends to build this vertical deliberately: first through qualified partners, then through its own R&D and manufacturing capabilities as the company grows.",
    focusAreas: ["Complex generics", "Biologics", "Biosimilars", "Biotechnology"],
    standsFor: [
      "Quality",
      "Innovation",
      "Meaningful patient needs",
      "Science-led development",
      "Regulated & rest-of-world markets",
      "Long-term capability building",
    ],
    audience: "Patients, healthcare professionals and partners in regulated and rest-of-world markets.",
    approach: [
      { title: "Partner-led beginnings", body: "Working first with qualified development and manufacturing partners." },
      { title: "Building capability", body: "Developing in-house pharmaceutical R&D and manufacturing over time." },
      { title: "Global ambition", body: "Serving regulated and rest-of-world markets across advanced therapeutic areas." },
    ],
    closing:
      "The Pharmaceuticals vertical is being developed as a future-focused healthcare business with a long-term ambition in complex generics, biologics, biosimilars and biotechnology.",
    logo: "/brands/pharmaceuticals.webp",
    logoBg: "#3e6a9c",
    mode: "photo",
    tone: "ink",
    motif: "flask",
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);

export const toneStyles: Record<BrandTone, { bg: string; fg: string; accent: string; muted: string }> = {
  sage: { bg: "#5f6f59", fg: "#f2ede3", accent: "#e7dfd0", muted: "#d5dbcc" },
  brass: { bg: "#e7dfd0", fg: "#0e1e19", accent: "#b08a55", muted: "#4a5a53" },
  ink: { bg: "#0e1e19", fg: "#f2ede3", accent: "#b08a55", muted: "#a9b3a4" },
  clay: { bg: "#c4673f", fg: "#f8f5ef", accent: "#0e1e19", muted: "#f1d8cb" },
  ivory: { bg: "#f8f5ef", fg: "#0e1e19", accent: "#b08a55", muted: "#4a5a53" },
};
