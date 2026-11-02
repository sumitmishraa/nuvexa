export const site = {
  name: "Nuvexa",
  legalName: "Nuvexa Biotech Pvt. Ltd.",
  tagline: "Building trusted brands. Solving everyday health needs.",
  description:
    "Nuvexa is a digital-first consumer health and personal care company building trusted brands across nutrition, grooming, intimate wellbeing, modern Ayurveda and pet care, with a long-term ambition in pharmaceuticals and life sciences.",
  url: "https://www.nuvexabio.com",
  year: "2026",
  emails: {
    general: "ceo@nuvexabio.com",
    careers: "hr@nuvexabio.com",
  },
  address: {
    line1: "Amar Complex, Above Bank of Baroda",
    line2: "Sarjapur Road, Indlabele, Attibele",
    city: "Bengaluru",
    postcode: "562107",
    region: "Karnataka, India",
  },
} as const;

/** Primary navigation, in the order the client specified. Contact lives in the header button, menu and footer. */
export const nav = [
  { label: "Company", href: "/company", note: "Who we are" },
  { label: "Our Brands", href: "/brands", note: "The portfolio" },
  { label: "Superbeing Nutrition", href: "/superbeing", note: "The founder's story" },
  { label: "Approach", href: "/approach", note: "How we build" },
  { label: "Future Vision", href: "/future-vision", note: "Where we are going" },
  { label: "Investors", href: "/investors", note: "Building enduring value" },
  { label: "Careers", href: "/careers", note: "Build with us" },
] as const;

export const enquiryTypes = [
  "Superbeing feedback & ideas",
  "Partnering & business development",
  "Investor relations",
  "Media enquiry",
  "Medical information",
  "Careers",
  "Other",
] as const;

/** True, countable facts only — never invented metrics. */
export const facts = [
  { value: 4, label: "Consumer brands in the portfolio", note: "Superbeing Nutrition, Super Titans, RUGD Men and Super Envi Intima." },
  { value: 7, label: "Brands & verticals in development", note: "Including Modern Ayurveda, Pet Care and Pharmaceuticals." },
  { value: 15, label: "Months developing Superbeing", note: "One year and three months of formulation work with a pharmaceutical-background professional." },
  { value: 3, label: "Phases in our long-term roadmap", note: "From digital-first commerce to advanced healthcare." },
] as const;

export const values = [
  {
    title: "Consumer focus",
    body: "Every decision starts with a real person and a real, recurring need — not with a category we want to enter. We listen first, and we design around routines people actually live.",
  },
  {
    title: "Trust and quality",
    body: "Trust is earned slowly and lost quickly. We hold our partners, our formulations and our communication to the highest standard we can, and we say only what we can stand behind.",
  },
  {
    title: "Disciplined execution",
    body: "Ideas are cheap; execution compounds. We move with clear priorities, honest measurement and the patience to do the unglamorous work properly.",
  },
  {
    title: "Responsible innovation",
    body: "We innovate for the long term — evidence-led, claim-conscious and respectful of the people who use what we make. Novelty is never a substitute for usefulness.",
  },
  {
    title: "Agility",
    body: "Consumer needs evolve quickly, especially online. We stay close to the signal, adapt fast and are never too attached to yesterday's answer.",
  },
  {
    title: "Long-term value creation",
    body: "We are building enduring brands and a durable company — value for consumers first, and through that, for our partners and shareholders.",
  },
] as const;

export const pillars = [
  {
    index: "01",
    title: "Science",
    body: "Evidence-led formulation, standardised ingredients and responsible claims. Science is how we turn good intentions into products people can rely on.",
  },
  {
    index: "02",
    title: "Consumer insight",
    body: "We study the everyday — routines, life stages, frustrations and unmet needs — and let real problems decide what deserves to exist.",
  },
  {
    index: "03",
    title: "Technology & AI",
    body: "Market intelligence, data and artificial intelligence help us read demand early, personalise communication and make faster, better-informed decisions.",
  },
  {
    index: "04",
    title: "Disciplined execution",
    body: "Clear priorities, measured launches and relentless iteration. We scale what earns repeat demand and we stop what does not.",
  },
  {
    index: "05",
    title: "Brand building",
    body: "Clear, honest, modern communication that earns trust over time. A brand is a promise kept, repeatedly, at every touchpoint.",
  },
] as const;

export const operatingModel = [
  { step: "Insight", body: "Identify a real, recurring need through consumer research, market intelligence and data." },
  { step: "Formulation", body: "Develop the proposition with specialised product development partners, guided by evidence and responsible claims." },
  { step: "Testing", body: "Product testing and quality checks are managed through qualified external partners." },
  { step: "Manufacturing", body: "Production through trusted, qualified manufacturing partners — managed and overseen by Nuvexa." },
  { step: "Commerce", body: "Launch and grow through e-commerce and digital-first channels in India, then scale what earns repeat demand." },
] as const;
