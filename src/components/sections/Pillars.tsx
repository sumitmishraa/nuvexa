"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pillars } from "@/content/site";
import { EASE_OUT_EXPO, cn } from "@/lib/cn";

const photos: Record<string, { src: string; alt: string }> = {
  Science: { src: "/media/scientist-microscope.webp", alt: "A scientist in a white coat and blue gloves studying a sample through a microscope" },
  "Consumer insight": { src: "/media/consumer-conversation.webp", alt: "Two women in conversation on a pale sofa, one taking notes as the other talks" },
  "Technology & AI": { src: "/media/data-review.webp", alt: "Two colleagues in white coats reviewing data together on a pair of monitors" },
  "Disciplined execution": { src: "/media/filling-line.webp", alt: "White bottles moving along an automated filling line beneath a steel hopper" },
  "Brand building": { src: "/media/brand-strategy.webp", alt: "Two colleagues planning at a desk in front of a chalkboard covered in strategy notes" },
};

/** Five disciplines as a list: choosing one opens its text and brings its large photograph forward. */
export function Pillars({ index = "04" }: { index?: string }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <section data-theme="light" aria-labelledby="pillars-heading" className="bg-ivory py-20 text-ink md:py-28">
      <div className="container-x">
        <div className="grid grid-cols-12 items-end gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index={index} className="mb-8 text-ink-muted">
              How we build
            </SectionLabel>
            <h2 id="pillars-heading" className="display-xl">
              Five disciplines.
              <br />
              <em className="italic text-brass">One standard.</em>
            </h2>
          </div>
          <p className="lede col-span-12 text-ink-muted lg:col-span-5">
            Nuvexa combines science, consumer insight, technology and artificial intelligence, disciplined execution and brand building — to create trusted
            products for consumers and enduring value for partners and shareholders.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-12 items-start gap-6 md:mt-16">
          <ul className="col-span-12 border-t border-ink/12 lg:col-span-5">
            {pillars.map((p, i) => {
              const open = i === active;
              const panelId = `${baseId}-${i}`;
              return (
                <li key={p.title} className="border-b border-ink/12">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setActive(i)}
                      className="group flex w-full items-baseline gap-5 py-5 text-left md:py-6"
                    >
                      <span className={cn("eyebrow transition-colors duration-500", open ? "text-brass" : "text-ink-muted")}>{p.index}</span>
                      <span className={cn("display-md transition-all duration-500 group-hover:translate-x-1", !open && "text-ink/70 group-hover:text-ink")}>{p.title}</span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    inert={!open}
                    className={cn("grid transition-[grid-template-rows] duration-700 ease-[var(--ease-out-expo)]", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="body-copy max-w-[46ch] pb-6 pl-[2.6rem] text-ink-muted">{p.body}</p>
                      <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-ink lg:hidden">
                        <Photo src={photos[p.title].src} alt={photos[p.title].alt} sizes="100vw" />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="relative col-span-7 col-start-6 hidden aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ink lg:block">
            {pillars.map((p, i) => {
              const on = i === active;
              return (
                <motion.div
                  key={p.title}
                  aria-hidden={!on}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: on ? 1 : 0, scale: on || reduce ? 1 : 1.04 }}
                  transition={{ duration: reduce ? 0 : 0.9, ease: EASE_OUT_EXPO }}
                >
                  <Photo src={photos[p.title].src} alt={on ? photos[p.title].alt : ""} sizes="(min-width: 1024px) 56vw, 1px" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
