import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { PageHero } from "@/components/sections/PageHero";
import { Marquee } from "@/components/motion/Marquee";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { SectionHead } from "@/components/ui/SectionHead";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careers } from "@/content/careers";
import { site, values } from "@/content/site";
import { pad } from "@/lib/cn";
import { slot } from "@/lib/slot";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join an entrepreneurial, execution-focused team building trusted consumer health brands for the long term.",
};

const principlePhotos = [slot("principle-outcome"), slot("principle-consumer"), slot("principle-discipline"), slot("principle-together")];

export default function CareersPage() {
  return (
    <>
      <PageHero
        variant="overlap"
        eyebrow="Careers"
        title={"Build the future\nof *healthcare* with us."}
        lede={careers.heroLede}
        photos={[
          slot("careers-team"),
          slot("careers-one"),
        ]}
      />

      {/* Culture */}
      <section data-theme="dark" aria-labelledby="culture-heading" className="bg-ink py-24 text-ivory md:py-36">
        <div className="container-x">
          <SectionHead index="01" label="Culture & work philosophy" labelClassName="text-ivory/75" className="mb-0 md:mb-0">
            <h2 id="culture-heading" className="sr-only">
              Culture and work philosophy
            </h2>
            <Reveal>
              <p className="statement max-w-[46ch]">{careers.culture}</p>
            </Reveal>
          </SectionHead>
        </div>
      </section>

      {/* Principles */}
      <section data-theme="light" aria-labelledby="principles-heading" className="bg-ivory py-24 text-ink md:py-36">
        <div className="container-x">
          <SectionHead index="02" label="How we work" labelClassName="text-ink-muted">
            <SplitText as="h2" id="principles-heading" className="display-lg max-w-[18ch]" text={"Entrepreneurial.\n*Execution-focused.*"} />
          </SectionHead>
          <div className="grid gap-5 md:grid-cols-2">
            {careers.principles.map((p, i) => (
              <Reveal key={p.title} y={0} delay={i * 0.15} className="group overflow-hidden rounded-[1.5rem] bg-ivory-deep">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Photo src={principlePhotos[i].src} alt="" sizes="(min-width: 768px) 46vw, 92vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105" />
                </div>
                <div className="p-8 md:p-10">
                  <p className="eyebrow mb-4 text-brass">{pad(i + 1)}</p>
                  <h3 className="display-md mb-4">{p.title}</h3>
                  <p className="text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-theme="light" aria-label="Our values" className="overflow-hidden border-y border-ink/10 bg-ivory-deep py-14 text-ink">
        <Marquee items={values.map((v) => v.title)} duration={58} />
      </section>

      {/* Who we look for + open application */}
      <section data-theme="light" aria-labelledby="join-heading" className="bg-ivory py-24 text-ink md:py-36">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel index="03" className="mb-7 text-ink-muted">
              Who we look for
            </SectionLabel>
            <ul className="border-t border-ink/12">
              {careers.lookingFor.map((l) => (
                <li key={l} className="border-b border-ink/12 py-5">
                  <Reveal>
                    <p className="statement">{l}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="rounded-[1.5rem] bg-ink p-8 text-ivory md:p-12 lg:sticky lg:top-32">
              <p className="eyebrow mb-8 text-brass">Join the team</p>
              <h2 id="join-heading" className="display-lg mb-6">
                Open applications, always.
              </h2>
              <p className="mb-10 text-ivory/80">
                We are always looking for passionate people who share our culture and philosophy. There are no listed roles right now, but if you see
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
