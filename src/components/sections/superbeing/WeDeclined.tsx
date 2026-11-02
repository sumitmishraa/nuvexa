"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { superbeing } from "@/content/superbeing";
import { EASE_OUT_EXPO } from "@/lib/cn";

/**
 * The white-label offer, struck through as it scrolls into view, then the answer.
 * `compact` is the home-page teaser; the full chapter lives on /superbeing.
 */
export function WeDeclined({ compact = false, index = "05" }: { compact?: boolean; index?: string }) {
  const reduce = useReducedMotion();
  const { title, setup, answer, after, commitment } = superbeing.declined;

  return (
    <section data-theme="dark" aria-labelledby="declined-heading" className="relative overflow-hidden bg-ink py-28 text-ivory md:py-40">
      <div className="container-x">
        <p className="eyebrow mb-10 text-ivory/78">
          <span className="text-brass">{index}</span> — {title}
        </p>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            {setup.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className={i === 0 ? "lede mb-5 text-ivory/85" : "body-copy text-ivory/78"}>{p}</p>
              </Reveal>
            ))}
          </div>

          {/* The offer, crossed out */}
          <div className="col-span-12 flex items-center lg:col-span-5 lg:col-start-8">
            <div className="relative w-full rounded-[1.25rem] border border-ivory/15 p-7">
              <p className="eyebrow mb-4 text-ivory/70">The easier route</p>
              <p className="relative inline-block font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-tight text-ivory/70">
                Their formula. Our label.
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 h-[3px] w-full origin-left bg-clay"
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                  transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT_EXPO }}
                />
              </p>
            </div>
          </div>
        </div>

        <SplitText
          as="h2"
          className="mt-16 font-serif text-[clamp(4rem,13vw,12rem)] font-semibold leading-[0.9] tracking-[-0.045em] md:mt-24"
          text={answer.replace("declined.", "*declined.*")}
        />
        <span id="declined-heading" className="sr-only">
          {title} {answer}
        </span>

        <div className="mt-14 grid grid-cols-12 gap-6 border-t border-ivory/12 pt-10">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="body-copy text-ivory/80">{after}</p>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="eyebrow mb-3 text-brass">Our commitment</p>
            <p className="display-md">{commitment}</p>
            {compact ? (
              <div className="mt-8">
                <ButtonLink href={superbeing.href} variant="outline-light">
                  Read the Superbeing story
                </ButtonLink>
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
