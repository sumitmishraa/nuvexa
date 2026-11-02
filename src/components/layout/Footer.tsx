import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Mark } from "@/components/ui/Logo";
import { brandHref, brands } from "@/content/brands";
import { site } from "@/content/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Nuvexa", href: "/company" },
      { label: "Leadership", href: "/company#leadership" },
      { label: "Our approach", href: "/approach" },
      { label: "Future vision", href: "/future-vision" },
    ],
  },
  { title: "Our brands", links: brands.map((b) => ({ label: b.name, href: brandHref(b) })) },
  {
    title: "Connect",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Terms of service", href: "/legal/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer data-theme="dark" className="relative overflow-hidden bg-ink text-ivory">
      <div className="container-x pt-24 md:pt-32">
        <div className="grid grid-cols-12 gap-y-12 border-b border-ivory/10 pb-20">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow mb-6 text-brass">Start a conversation</p>
            <h2 className="display-lg max-w-[14ch]">
              Let&rsquo;s build what everyday health <em className="italic text-brass-soft">needs next.</em>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="ivory">
                Partner with us
              </ButtonLink>
              <ButtonLink href="/careers" variant="outline-light">
                Join the team
              </ButtonLink>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="eyebrow mb-5 text-ivory/78">{col.title}</p>
                <ul className="space-y-2.5 text-[0.92rem] text-ivory/80">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="transition-colors hover:text-ivory">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-8 py-12 text-[0.88rem] text-ivory/55">
          <address className="col-span-12 not-italic md:col-span-5">
            {site.legalName}
            <br />
            {site.address.line1}, {site.address.line2}
            <br />
            {site.address.city} – {site.address.postcode}, {site.address.region}
          </address>
          <div className="col-span-12 md:col-span-4">
            <a href={`mailto:${site.emails.general}`} className="block py-1 hover:text-ivory">
              {site.emails.general}
            </a>
            <a href={`mailto:${site.emails.careers}`} className="block py-1 hover:text-ivory">
              {site.emails.careers}
            </a>
          </div>
          <p className="col-span-12 md:col-span-3 md:text-right">
            © {site.year} {site.legalName}
            <br />
            All rights reserved.
          </p>
        </div>
      </div>

      <div aria-hidden="true" className="container-x select-none pb-6">
        <div className="flex items-end justify-between gap-4 text-ivory/[0.06]">
          <svg viewBox="0 0 1000 300" className="w-[78%]">
            <text x="0" y="272" fill="currentColor" fontSize="360" letterSpacing="-14" style={{ fontFamily: "var(--font-serif)" }}>
              Nuvexa
            </text>
          </svg>
          <Mark className="mb-[3vw] h-[11vw] w-[11vw] shrink-0 text-brass/40" strokeWidth={0.8} />
        </div>
      </div>
    </footer>
  );
}
