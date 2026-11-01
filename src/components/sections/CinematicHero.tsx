"use client";

import Image from "next/image";
import { useRef, useSyncExternalStore } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useSiteReady } from "@/components/layout/Preloader";
import { SplitText } from "@/components/motion/SplitText";
import { EASE_OUT_EXPO, cn } from "@/lib/cn";

const QUERY = "(min-width: 768px)";
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(QUERY);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

/**
 * Opening chapter for inner pages. The headline lands over ivory with the image waiting
 * as an inset card beneath it; scrolling opens the image to full bleed, hands the stage
 * from headline to lede and invites the next scroll. Static on small screens / reduced motion.
 */
export function CinematicHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt = "",
  visual,
  imagePosition = "center",
}: {
  eyebrow: string;
  /** Lines separated by "\n"; wrap a phrase in *asterisks* for the brass italic accent. */
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  /** Custom visual (e.g. a mosaic) in place of a single image. */
  visual?: React.ReactNode;
  imagePosition?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const ready = useSiteReady();
  const desktop = useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => true);
  const pinned = desktop && !reduce;

  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const clip = useTransform(p, [0, 0.62], ["inset(52% 5% 5% 5% round 28px)", "inset(0% 0% 0% 0% round 0px)"]);
  const imageScale = useTransform(p, [0, 0.7], [1.18, 1]);
  const headY = useTransform(p, [0, 0.5], ["0%", "-35%"]);
  const headOpacity = useTransform(p, [0.12, 0.42], [1, 0]);
  const scrim = useTransform(p, [0.35, 0.75], [0, 0.35]);
  const ledeOpacity = useTransform(p, [0.55, 0.8], [0, 1]);
  const ledeY = useTransform(p, [0.55, 0.85], [40, 0]);
  const cueOpacity = useTransform(p, [0, 0.12], [1, 0]);

  const media = visual ?? (image ? <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} /> : null);
  const plainTitle = title.replace(/\*/g, "").replace(/\n/g, " ");

  if (!pinned) {
    return (
      <section data-theme="light" className="bg-ivory pb-14 pt-32 text-ink">
        <div className="container-x">
          <p className="eyebrow mb-8 flex items-center gap-3 text-ink-muted">
            <span className="h-px w-10 bg-brass" />
            {eyebrow}
          </p>
          <SplitText as="h1" trigger="load" delay={0.1} text={title} className="display-xl" />
          <p className="lede mt-8 text-ink-muted">{lede}</p>
        </div>
        <div className="container-x mt-10">
          <div data-theme="dark" className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-ink sm:aspect-[16/10]">
            {media}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} data-theme="light" className="relative h-[200svh] bg-ivory text-ink">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Headline chapter */}
        <motion.div className="container-x relative z-10 pt-[clamp(6.5rem,13vh,8.5rem)]" style={{ y: headY, opacity: headOpacity }}>
          <motion.p
            className="eyebrow mb-7 flex items-center gap-3 text-ink-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease: EASE_OUT_EXPO }}
          >
            <span className="h-px w-10 bg-brass" />
            {eyebrow}
          </motion.p>
          <SplitText as="h1" trigger="load" delay={0.15} text={title} className="display-xl max-w-[24ch]" />
        </motion.div>

        {/* Image that opens to full bleed */}
        <motion.div data-theme="dark" className="absolute inset-0 overflow-hidden bg-ink" style={{ clipPath: clip }}>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ duration: 1.4, delay: 0.35, ease: EASE_OUT_EXPO }}
          >
            <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
              {media}
            </motion.div>
          </motion.div>
          <motion.div aria-hidden="true" className="absolute inset-0 bg-ink" style={{ opacity: scrim }} />

          {/* Second chapter: the lede over the image */}
          <motion.div className="absolute inset-x-0 bottom-0 pb-[clamp(2.5rem,8vh,5rem)] text-ivory" style={{ opacity: ledeOpacity, y: ledeY }}>
            <div className="container-x">
              <div className="max-w-[46rem] rounded-[1.5rem] bg-ink/88 p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] ring-1 ring-ivory/10 backdrop-blur-md md:p-11">
                <p className="eyebrow mb-5 flex items-center gap-3 text-brass">
                  <span className="h-px w-8 bg-brass" />
                  {eyebrow}
                </p>
                <p className="sr-only">{plainTitle}</p>
                <p className="text-[clamp(1.15rem,1.55vw,1.5rem)] font-medium leading-[1.55] text-ivory/92">{lede}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          aria-hidden="true"
          className={cn("absolute bottom-[calc(5%+1.5rem)] right-[calc(5%+1.5rem)] z-20 flex items-center gap-3 rounded-full bg-ivory/90 px-5 py-3 text-ink")}
          style={{ opacity: cueOpacity }}
        >
          <span className="eyebrow">Scroll to explore</span>
          <span className="relative block h-6 w-px overflow-hidden bg-ink/20">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-brass" style={{ animation: "drift 1.8s ease-in-out infinite" }} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
