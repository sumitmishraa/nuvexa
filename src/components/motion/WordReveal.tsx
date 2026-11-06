"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { cn } from "@/lib/cn";

/*
 * Adapted from the 21st.dev / Motion "Scroll word reveal" example:
 * the words ink in one by one as the statement passes through the view. The page keeps scrolling normally.
 */
const REST_OPACITY = 0.18;
const REVEAL_SPAN = 0.82;
const WORD_WINDOW = 0.16;

function range(index: number, count: number) {
  const start = count <= 1 ? 0 : (index / (count - 1)) * REVEAL_SPAN;
  return [start, Math.min(1, start + WORD_WINDOW)] as const;
}

function Word({ word, progress, index, count, accent }: { word: string; progress: MotionValue<number>; index: number; count: number; accent: boolean }) {
  const [start, end] = range(index, count);
  const opacity = useTransform(progress, [start, end], [REST_OPACITY, 1]);
  return (
    <motion.span aria-hidden="true" data-scroll-linked style={{ opacity }} className={cn(accent && "italic text-brass")}>
      {word}
    </motion.span>
  );
}

export function WordReveal({
  text,
  eyebrow,
  image,
  imageAlt,
  className,
}: {
  /** Wrap words in *asterisks* to set them as brass italics. */
  text: string;
  eyebrow?: string;
  image: string;
  imageAlt: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 50%"] });
  const tokens = text.split(" ");
  const plain = text.replace(/\*/g, "");

  return (
    <section data-theme="light" className={cn("bg-ivory py-20 text-ink md:py-28", className)}>
      <div className="container-x grid grid-cols-12 items-center gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-7">
          {eyebrow ? <p className="eyebrow mb-8 text-ink-muted">{eyebrow}</p> : null}
          <p ref={ref} className="display-lg max-w-[24ch]">
            <span className="sr-only">{plain}</span>
            {tokens.map((token, i) => {
              const accent = token.startsWith("*") || token.endsWith("*") || token.endsWith("*.") || token.endsWith("*,");
              const word = token.replace(/\*/g, "");
              return (
                <Fragment key={`${word}-${i}`}>
                  <Word word={word} progress={scrollYProgress} index={i} count={tokens.length} accent={accent} />
                  {i < tokens.length - 1 ? " " : null}
                </Fragment>
              );
            })}
          </p>
        </div>
        <div className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ink lg:col-span-5">
          <RevealPhoto src={image} alt={imageAlt} sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
