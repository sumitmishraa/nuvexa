import type { Metadata } from "next";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careers } from "@/content/careers";
import { site, values } from "@/content/site";
import { pad } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join an entrepreneurial, execution-focused team building trusted consumer health brands for the long term.",
};

export default function CareersPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Careers"
        title={"Build brands that\n*matter* — with us."}
        lede={careers.heroLede}
        image="/media/careers.webp"
        imageAlt="A sunlit studio table with botanical sketches, sage colour swatches, notebooks and a laptop"
      />

      {/* Culture */}
      <section data-theme="dark" aria-labelledby="culture-heading" className="bg-ink py-28 text-ivory md:py-40">
        <div className="container-x grid grid-cols-12 gap-6">
          <SectionLabel index="01" className="col-span-12 mb-6 text-ivory/75 md:col-span-4">
            Culture &amp; work philosophy
          </SectionLabel>
          <div className="col-span-12 md:col-span-8">
            <h2 id="culture-heading" className="sr-only">
              Culture and work philosophy
            </h2>
            <Reveal>
              <p className="display-md max-w-[34ch]">{careers.culture}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section data-theme="light" aria-labelledby="principles-heading" className="bg-ivory py-28 text-ink md:py-40">
        <div className="container-x">
          <div className="mb-16 grid grid-cols-12 gap-6">
            <SectionLabel index="02" className="col-span-12 text-ink-muted md:col-span-4">
              How we work
            </SectionLabel>
            <SplitText as="h2" className="display-xl col-span-12 max-w-[16ch] md:col-span-8" text={"Entrepreneurial.\n*Execution-focused.*"} />
          </div>
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {careers.principles.map((p, i) => (
              <RevealItem key={p.title} className="rounded-[1.5rem] bg-ivory-deep p-8 md:p-12">
                <p className="eyebrow mb-12 text-brass">{pad(i + 1)}</p>
                <h3 className="display-md mb-4">{p.title}</h3>
                <p className="text-ink-muted">{p.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section data-theme="light" aria-label="Our values" className="overflow-hidden border-y border-ink/10 bg-ivory-deep py-14 text-ink">
        <Marquee items={values.map((v) => v.title)} duration={56} />
      </section>

      {/* Who we look for + open application */}
      <section data-theme="light" aria-labelledby="join-heading" className="bg-ivory py-28 text-ink md:py-40">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel index="03" className="mb-8 text-ink-muted">
              Who we look for
            </SectionLabel>
            <ul className="border-t border-ink/12">
              {careers.lookingFor.map((l) => (
                <li key={l} className="border-b border-ink/12 py-6">
                  <Reveal>
                    <p className="display-md">{l}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="rounded-[1.5rem] bg-ink p-8 text-ivory md:p-12 lg:sticky lg:top-32">
              <p className="eyebrow mb-8 text-brass">Join the team</p>
              <h2 id="join-heading" className="display-lg mb-6">
                Open applications, <em className="italic text-brass-soft">always.</em>
              </h2>
              <p className="mb-10 text-ivory/80">
                We are always looking for passionate people who share our culture and philosophy. There are no listed roles right now — but if you see
                yourself here, tell us what you would build with us.
              </p>
              <ButtonLink href={`mailto:${site.emails.careers}?subject=Open%20application`} variant="ivory">
                Email hr@nuvexabio.com
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
