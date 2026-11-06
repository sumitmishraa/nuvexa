import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoRibbon } from "@/components/sections/PhotoRibbon";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careers } from "@/content/careers";
import { site, values } from "@/content/site";
import { pad } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join an entrepreneurial, execution-focused team building trusted consumer health brands for the long term.",
};

const principlePhotos = ["/media/team-office.webp", "/media/consumer-conversation.webp", "/media/filling-line.webp", "/media/office-conversation.webp"];
const lookingForPhotos = ["/media/brand-strategy.webp", "/media/consumer-conversation.webp", "/media/team-review.webp", "/media/data-review.webp"];

export default function CareersPage() {
  return (
    <>
      <PageHero
        variant="overlap"
        eyebrow="Careers"
        title={"Build brands that\n*matter* — with us."}
        lede={careers.heroLede}
        photos={[
          { src: "/media/team-office.webp", alt: "A small team talking through ideas at a pinboard in a sunlit office" },
          { src: "/media/team-review.webp", alt: "Two colleagues reviewing charts together on a laptop" },
        ]}
      />

      {/* Culture */}
      <section data-theme="dark" aria-labelledby="culture-heading" className="bg-ink py-20 text-ivory md:py-28">
        <div className="container-x grid grid-cols-12 gap-6">
          <SectionLabel index="01" className="col-span-12 mb-6 text-ivory/75 md:col-span-4">
            Culture &amp; work philosophy
          </SectionLabel>
          <div className="col-span-12 md:col-span-8">
            <h2 id="culture-heading" className="sr-only">
              Culture and work philosophy
            </h2>
            <Reveal>
              <p className="display-md max-w-[50ch]">{careers.culture}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section data-theme="light" aria-labelledby="principles-heading" className="bg-ivory py-20 text-ink md:py-28">
        <div className="container-x">
          <div className="mb-16 grid grid-cols-12 gap-6">
            <SectionLabel index="02" className="col-span-12 text-ink-muted md:col-span-4">
              How we work
            </SectionLabel>
            <SplitText as="h2" className="display-xl col-span-12 max-w-[16ch] md:col-span-8" text={"Entrepreneurial.\n*Execution-focused.*"} />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {careers.principles.map((p, i) => (
              <Reveal key={p.title} y={0} delay={i * 0.15} className="group overflow-hidden rounded-[1.5rem] bg-ivory-deep">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Photo src={principlePhotos[i]} alt="" sizes="(min-width: 768px) 46vw, 92vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105" />
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
        <PhotoRibbon words={values.map((v) => v.title)} duration={58} />
      </section>

      {/* Who we look for + open application */}
      <section data-theme="light" aria-labelledby="join-heading" className="bg-ivory py-20 text-ink md:py-28">
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel index="03" className="mb-8 text-ink-muted">
              Who we look for
            </SectionLabel>
            <ul className="border-t border-ink/12">
              {careers.lookingFor.map((l, i) => (
                <li key={l} className="group border-b border-ink/12 py-6">
                  <Reveal className="flex items-center justify-between gap-5">
                    <p className="display-md">{l}</p>
                    <span aria-hidden="true" className="relative block aspect-[3/2] w-0 shrink-0 overflow-hidden rounded-xl transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:w-28">
                      <Photo src={lookingForPhotos[i]} alt="" sizes="112px" />
                    </span>
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
