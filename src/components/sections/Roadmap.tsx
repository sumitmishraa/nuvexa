"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/content/company";
import { cn } from "@/lib/cn";

const phasePhotos = [
  { src: "/media/warehouse-aisle.webp", alt: "A long warehouse aisle with boxed stock on tall racks" },
  { src: "/media/daily-organiser.webp", alt: "A hand taking a capsule from a seven-day organiser" },
  { src: "/media/research-lab.webp", alt: "A researcher working at a long bench of laboratory apparatus" },
];

/** Three-phase roadmap: a brass spine draws itself, and the photograph changes as each phase comes into view. */
export function Roadmap({ index = "06", showLink = true }: { index?: string; showLink?: boolean }) {
  const ref = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(phasePhotos.length - 1, Math.floor(value * phasePhotos.length)));
  });

  return (
    <section data-theme="dark" aria-labelledby="roadmap-heading" className="bg-ink py-20 text-ivory md:py-28">
      <div className="container-x grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <SectionLabel index={index} className="mb-6 text-ivory/75">
              Strategic roadmap
            </SectionLabel>
            <h2 id="roadmap-heading" className="display-lg">
              Built in phases. <em className="italic text-brass-soft">Earned step by step.</em>
            </h2>
            <p className="mt-5 max-w-[46ch] text-ivory/78">
              Each phase is unlocked by the one before it — as our brands achieve product-market fit, repeat demand and sustainable scale.
            </p>
            <div className="relative mt-7 hidden aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-ink-soft lg:block">
              {phasePhotos.map((photo, i) => (
                <div key={photo.src} className={cn("absolute inset-0 transition-opacity duration-700", i === active ? "opacity-100" : "opacity-0")}>
                  <Photo src={photo.src} alt={i === active ? photo.alt : ""} sizes="(min-width: 1024px) 40vw, 1px" />
                </div>
              ))}
            </div>
            {showLink ? (
              <div className="mt-7">
                <ButtonLink href="/future-vision" variant="outline-light">
                  See the full journey
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
        <ol ref={ref} className="relative col-span-12 mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <div aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-ivory/10">
            <motion.div className="h-full w-full origin-top bg-brass" data-scroll-linked style={{ scaleY: scrollYProgress }} />
          </div>
          {company.roadmap.map((p, i) => (
            <li key={p.phase} className="relative pb-20 pl-10 last:pb-0 md:pl-16 lg:flex lg:min-h-[62svh] lg:flex-col lg:justify-center lg:pb-0">
              <span aria-hidden="true" className={cn("absolute -left-[5px] top-3 h-[11px] w-[11px] rounded-full border border-brass transition-colors duration-500 lg:top-1/2", i <= active ? "bg-brass" : "bg-ink")} />
              <Reveal>
                <p className="eyebrow mb-4 text-brass">{p.phase}</p>
                <h3 className="display-lg mb-5">{p.title}</h3>
                <p className="lede max-w-[44ch] text-ivory/80">{p.body}</p>
                <div className="relative mt-6 aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-ink-soft lg:hidden">
                  <Photo src={phasePhotos[i].src} alt="" sizes="(min-width: 1024px) 1px, 90vw" />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
