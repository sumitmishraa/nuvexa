"use client";

import { Fragment, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/cn";

/*
 * Adapted from the 21st.dev / Motion "Scroll word reveal" example:
 * a sticky stage whose words ink in one by one as the page scrolls past.
 */
const REST_OPACITY = 0.14;
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
    <motion.span aria-hidden="true" style={{ opacity }} className={cn(accent && "italic text-brass")}>
      {word}
    </motion.span>
  );
}

export function WordReveal({
  text,
  eyebrow,
  className,
  theme = "light",
}: {
  /** Wrap words in *asterisks* to set them as brass italics. */
  text: string;
  eyebrow?: string;
  className?: string;
  theme?: "light" | "dark";
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const tokens = text.split(" ");
  const plain = text.replace(/\*/g, "");

  return (
    <section
      ref={ref}
      data-theme={theme}
      className={cn("relative", reduce ? "h-auto" : "h-[220vh]", theme === "dark" ? "bg-ink text-ivory" : "bg-ivory text-ink", className)}
    >
      <div className={cn("flex items-center", reduce ? "py-32" : "sticky top-0 h-svh")}>
        <div className="container-x grid grid-cols-12 gap-6">
          <div className="col-span-12 flex items-start gap-6 md:col-span-1" aria-hidden="true">
            <div className="hidden h-40 w-px overflow-hidden bg-current/15 md:block">
              <motion.span className="block h-full w-full origin-top bg-brass" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            {eyebrow ? <p className={cn("eyebrow mb-10", theme === "dark" ? "text-ivory/80" : "text-ink-muted")}>{eyebrow}</p> : null}
            <p className="display-lg max-w-[22ch] md:max-w-[26ch]">
              <span className="sr-only">{plain}</span>
              {tokens.map((token, i) => {
                const accent = token.startsWith("*") || token.endsWith("*") || token.endsWith("*.") || token.endsWith("*,");
                const word = token.replace(/\*/g, "");
                return (
                  <Fragment key={`${word}-${i}`}>
                    {reduce ? (
                      <span aria-hidden="true" className={cn(accent && "italic text-brass")}>
                        {word}
                      </span>
                    ) : (
                      <Word word={word} progress={scrollYProgress} index={i} count={tokens.length} accent={accent} />
                    )}
                    {i < tokens.length - 1 ? " " : null}
                  </Fragment>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
