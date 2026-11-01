import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Mark } from "@/components/ui/Logo";

const cards = [
  {
    eyebrow: "Partners & investors",
    title: "Build with Nuvexa",
    body: "Development and manufacturing partners, distribution and retail, investors and institutions — let's talk about what we could build together.",
    href: "/contact",
    cta: "Start a conversation",
  },
  {
    eyebrow: "Careers",
    title: "Grow with Nuvexa",
    body: "An entrepreneurial, execution-focused team building trusted brands for the long term. Bring your ambition.",
    href: "/careers",
    cta: "Explore careers",
  },
];

/** Paired invitations — one for partners, one for talent. */
export function CtaPair() {
  return (
    <section data-theme="light" aria-label="Get involved" className="bg-ivory py-24 text-ink md:py-32">
      <div className="container-x grid gap-5 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.href} delay={i * 0.1}>
            <Link
              href={c.href}
              data-cursor="Open"
              className="group relative flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-ink/12 p-8 md:p-12"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-[var(--ease-in-out-quart)] group-hover:scale-y-100"
              />
              <div className="relative flex items-start justify-between transition-colors duration-500 group-hover:text-ivory">
                <p className="eyebrow">{c.eyebrow}</p>
                <Mark className="h-6 w-6 text-brass transition-transform duration-700 group-hover:rotate-90" strokeWidth={1.3} />
              </div>
              <div className="relative transition-colors duration-500 group-hover:text-ivory">
                <h3 className="display-lg mb-5">{c.title}</h3>
                <p className="max-w-[44ch] text-ink-muted transition-colors duration-500 group-hover:text-ivory/80">{c.body}</p>
                <p className="mt-8 inline-flex items-center gap-3 text-[0.85rem] font-medium tracking-[0.06em]">
                  {c.cta}
                  <span aria-hidden="true" className="h-px w-8 bg-brass transition-all duration-500 group-hover:w-14" />
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
