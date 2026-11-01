"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/content/company";

/** Three-phase roadmap with a brass spine that draws itself on scroll. */
export function Roadmap({ index = "06", showLink = true }: { index?: string; showLink?: boolean }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });

  return (
    <section data-theme="dark" aria-labelledby="roadmap-heading" className="bg-ink py-28 text-ivory md:py-40">
      <div className="container-x grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index={index} className="mb-8 text-ivory/75">
              Strategic roadmap
            </SectionLabel>
            <h2 id="roadmap-heading" className="display-xl max-w-[12ch]">
              Built in phases. <em className="italic text-brass-soft">Earned step by step.</em>
            </h2>
            <p className="lede mt-8 max-w-[42ch] text-ivory/78">
              Each phase is unlocked by the one before it — as our brands achieve product-market fit, repeat demand and sustainable scale.
            </p>
            {showLink ? (
              <div className="mt-10">
                <ButtonLink href="/future-vision" variant="outline-light">
                  See the full journey
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
        <ol ref={ref} className="relative col-span-12 mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <div aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-ivory/10">
            <motion.div className="h-full w-full origin-top bg-brass" style={reduce ? undefined : { scaleY: scrollYProgress }} />
          </div>
          {company.roadmap.map((p) => (
            <li key={p.phase} className="relative pb-20 pl-10 last:pb-0 md:pl-16">
              <span aria-hidden="true" className="absolute -left-[5px] top-3 h-[11px] w-[11px] rounded-full border border-brass bg-ink" />
              <Reveal>
                <p className="eyebrow mb-4 text-brass">{p.phase}</p>
                <h3 className="display-lg mb-5">{p.title}</h3>
                <p className="lede max-w-[44ch] text-ivory/80">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
