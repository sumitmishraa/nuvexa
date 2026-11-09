"use client";

import { motion } from "motion/react";
import { useSiteReady } from "@/components/layout/Preloader";
import { SplitText } from "@/components/motion/SplitText";
import { Photo as PhotoFrame } from "@/components/ui/Photo";
import { VideoLoop } from "@/components/ui/VideoLoop";
import { heroSizes } from "@/content/heroes";
import { EASE_IN_OUT_QUART, EASE_OUT_EXPO, cn } from "@/lib/cn";
import { renderInline } from "@/lib/renderInline";

type Photo = { src: string; alt: string; position?: string };

type Copy = {
  eyebrow: string;
  /** Lines separated by "\n"; wrap a phrase in *asterisks* for the brass italic accent. */
  title: string;
  lede: string;
};

type HeroProps = Copy & {
  variant: "split" | "mosaic" | "grow" | "trio" | "curtain" | "pan" | "overlap" | "rise";
  /** Most variants use one photograph; "trio" uses three and "overlap" two. */
  photos?: Photo[];
  /** Silent loop over the first photograph ("curtain" only). */
  video?: string;
  /** Custom visual for the "mosaic" variant. */
  visual?: React.ReactNode;
};

/** Plays once when the site is ready. Reduced motion lands straight on the final state. */
function useEntrance() {
  const ready = useSiteReady();
  return {
    enter: <T extends object>(from: T, to: T, duration = 1.4, delay = 0.1) => ({
      initial: from,
      animate: ready ? to : undefined,
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    }),
  };
}

function Eyebrow({ text, dark, delay = 0 }: { text: string; dark?: boolean; delay?: number }) {
  const { enter } = useEntrance();
  return (
    <motion.p className={cn("eyebrow mb-7 flex items-center gap-3", dark ? "text-ivory/80" : "text-ink-muted")} {...enter({ opacity: 0, y: 14 }, { opacity: 1, y: 0 }, 1, delay)}>
      <span className="h-px w-10 bg-brass" />
      {text}
    </motion.p>
  );
}

function Lede({ text, dark, delay = 0.6, className }: { text: string; dark?: boolean; delay?: number; className?: string }) {
  const { enter } = useEntrance();
  return (
    <motion.p className={cn("lede", dark ? "text-ivory/85" : "text-ink-muted", className)} {...enter({ opacity: 0, y: 18 }, { opacity: 1, y: 0 }, 1.2, delay)}>
      {text}
    </motion.p>
  );
}

function Fill({ photo, sizes }: { photo: Photo; sizes: string }) {
  return <PhotoFrame src={photo.src} alt={photo.alt} sizes={sizes} priority position={photo.position} />;
}

/** Company — a framed photograph wipes in from the right, beside the text. */
function Split({ eyebrow, title, lede, photo }: Copy & { photo: Photo }) {
  const { enter } = useEntrance();
  return (
    <section data-theme="light" className="bg-ivory text-ink">
      <div className="container-x grid grid-cols-12 items-end gap-x-6 gap-y-10 pb-12 pt-32 md:pb-16 md:pt-36">
        <div className="col-span-12 md:col-span-6">
          <Eyebrow text={eyebrow} />
          <SplitText as="h1" trigger="load" delay={0.15} text={title} className="display-xl" />
          <Lede text={lede} className="mt-8 max-w-[52ch]" />
        </div>
        <motion.div
          className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ivory-deep md:col-span-6"
          {...enter({ clipPath: "inset(0% 0% 0% 100% round 24px)" }, { clipPath: "inset(0% 0% 0% 0% round 24px)" }, 1.7, 0.2)}
        >
          <motion.div className="absolute inset-0" {...enter({ scale: 1.06 }, { scale: 1 }, 2.2, 0.2)}>
            <Fill photo={photo} sizes={heroSizes.split} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/** Our Brands — the headline lands on deep green and the brand tiles arrive one by one. */
function Mosaic({ eyebrow, title, lede, visual }: Copy & { visual?: React.ReactNode }) {
  return (
    <section data-theme="dark" className="bg-ink pb-12 text-ivory md:pb-16">
      <div className="container-x grid grid-cols-12 items-end gap-6 pb-10 pt-32 md:pb-12 md:pt-36">
        <div className="col-span-12 lg:col-span-7">
          <Eyebrow text={eyebrow} dark />
          <SplitText as="h1" trigger="load" delay={0.1} text={title} className="display-xl" />
        </div>
        <Lede text={lede} dark delay={0.5} className="col-span-12 lg:col-span-5" />
      </div>
      <div className="container-x">{visual}</div>
    </section>
  );
}

/** Superbeing — an inset photograph grows out to the full width of the page grid. */
function Grow({ eyebrow, title, lede, photo }: Copy & { photo: Photo }) {
  const { enter } = useEntrance();
  return (
    <section data-theme="light" className="bg-ivory text-ink">
      <div className="container-x grid grid-cols-12 items-end gap-6 pb-10 pt-32 md:pb-12 md:pt-36">
        <div className="col-span-12 lg:col-span-8">
          <Eyebrow text={eyebrow} />
          <SplitText as="h1" trigger="load" delay={0.1} text={title} className="display-xl" />
        </div>
        <Lede text={lede} delay={0.5} className="col-span-12 lg:col-span-4" />
      </div>
      <div className="container-x">
        <motion.div
          className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-ivory-deep"
          {...enter({ clipPath: "inset(10% 14% 0% 14% round 24px)" }, { clipPath: "inset(0% 0% 0% 0% round 24px)" }, 1.9, 0.35)}
        >
          <Fill photo={photo} sizes={heroSizes.grow} />
        </motion.div>
      </div>
    </section>
  );
}

/** Approach — one large and two smaller photographs slide up from below, each at its own speed. */
function Trio({ eyebrow, title, lede, photos }: Copy & { photos: Photo[] }) {
  const { enter } = useEntrance();
  const motionFor = [
    { frame: "col-span-2", sizes: heroSizes.trioLarge, duration: 1.5, delay: 0.1 },
    { frame: "", sizes: heroSizes.trioSmall, duration: 2.1, delay: 0.25 },
    { frame: "", sizes: heroSizes.trioSmall, duration: 1.8, delay: 0.4 },
  ];
  return (
    <section data-theme="light" className="bg-ivory-deep text-ink">
      <div className="container-x grid grid-cols-12 items-center gap-x-6 gap-y-10 pb-14 pt-32 md:min-h-svh md:pb-16">
        <div className="col-span-12 md:col-span-5">
          <Eyebrow text={eyebrow} />
          <SplitText as="h1" trigger="load" delay={0.15} text={title} className="display-xl" />
          <Lede text={lede} className="mt-8" />
        </div>
        <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-7 md:gap-4">
          {photos.map((photo, i) => (
            <div key={photo.src} className={cn("relative aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-ink/10", motionFor[i].frame)}>
              <motion.div className="absolute inset-0" {...enter({ y: "100%" }, { y: "0%" }, motionFor[i].duration, motionFor[i].delay)}>
                <Fill photo={photo} sizes={motionFor[i].sizes} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Future Vision — a deep-green curtain draws left to right and uncovers the moving picture. */
function Curtain({ eyebrow, title, lede, photo, video }: Copy & { photo: Photo; video?: string }) {
  const { enter } = useEntrance();
  const ready = useSiteReady();
  return (
    <section data-theme="dark" className="relative overflow-hidden bg-ink text-ivory md:flex md:h-svh md:min-h-[640px] md:items-end">
      <div className="relative aspect-[16/9] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
        {video ? <VideoLoop src={video} poster={photo.src} sizes={heroSizes.full} priority position={photo.position} /> : <Fill photo={photo} sizes={heroSizes.full} />}
        <div aria-hidden="true" className="absolute inset-0 hidden bg-[linear-gradient(to_top,rgba(14,30,25,0.92)_8%,rgba(14,30,25,0.55)_48%,rgba(14,30,25,0.18)_100%)] md:block" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(14,30,25,0.72),rgba(14,30,25,0))]" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 origin-right bg-ink"
          initial={{ scaleX: 1 }}
          animate={ready ? { scaleX: 0 } : undefined}
          transition={{ duration: 1.6, delay: 0.15, ease: EASE_IN_OUT_QUART }}
        />
      </div>
      <div className="container-x relative grid grid-cols-12 items-end gap-6 pb-12 pt-10 md:pb-16 md:pt-36">
        <div className="col-span-12 lg:col-span-7">
          <Eyebrow text={eyebrow} dark delay={0.7} />
          <SplitText as="h1" trigger="load" delay={0.8} text={title} className="display-hero" />
        </div>
        <motion.div className="col-span-12 lg:col-span-5" {...enter({ opacity: 0, y: 18 }, { opacity: 1, y: 0 }, 1.2, 1.15)}>
          <p className="lede text-ivory/88">{lede}</p>
        </motion.div>
      </div>
    </section>
  );
}

/** Investors — the calmest opening: a fade, a slow pan across the room, and a solid text panel. */
function Pan({ eyebrow, title, lede, photo }: Copy & { photo: Photo }) {
  const { enter } = useEntrance();
  return (
    <section data-theme="dark" className="relative overflow-hidden bg-ink text-ivory md:flex md:h-svh md:min-h-[640px] md:items-end">
      <motion.div className="relative aspect-[16/9] overflow-hidden md:absolute md:inset-0 md:aspect-auto" {...enter({ opacity: 0 }, { opacity: 1 }, 2.2, 0)}>
        <div className="absolute inset-y-0 -inset-x-[6%]" style={{ animation: "hero-pan 32s ease-in-out infinite alternate" }}>
          <Fill photo={photo} sizes={heroSizes.pan} />
        </div>
      </motion.div>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(14,30,25,0.72),rgba(14,30,25,0))]" />
      <div className="container-x relative pb-10 pt-8 md:pb-14 md:pt-40">
        <motion.div className="max-w-[46rem] bg-ink md:rounded-[1.5rem] md:p-11" {...enter({ opacity: 0 }, { opacity: 1 }, 1.8, 0.5)}>
          <p className="eyebrow mb-6 flex items-center gap-3 text-ivory/80">
            <span className="h-px w-10 bg-brass" />
            {eyebrow}
          </p>
          <h1 className="display-lg">
            {title.split("\n").map((line) => (
              <span key={line} className="block">
                {renderInline(line)}
              </span>
            ))}
          </h1>
          <p className="lede mt-6 text-ivory/85">{lede}</p>
        </motion.div>
      </div>
    </section>
  );
}

/** Careers — two overlapping photographs at their true shape settle into place from opposite directions. */
function Overlap({ eyebrow, title, lede, photos }: Copy & { photos: Photo[] }) {
  const { enter } = useEntrance();
  const [back, front] = photos;
  return (
    <section data-theme="light" className="bg-ivory text-ink">
      <div className="container-x grid grid-cols-12 items-center gap-x-6 gap-y-10 pb-14 pt-32 md:pb-16 md:pt-36">
        <div className="col-span-12 lg:col-span-6">
          <Eyebrow text={eyebrow} />
          <SplitText as="h1" trigger="load" delay={0.15} text={title} className="display-xl" />
          <Lede text={lede} className="mt-8 max-w-[48ch]" />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <motion.div className="relative aspect-[16/9] w-[86%] overflow-hidden rounded-[1.25rem] bg-ivory-deep" {...enter({ x: -56, opacity: 0 }, { x: 0, opacity: 1 }, 1.8, 0.2)}>
            <Fill photo={back} sizes={heroSizes.overlapBack} />
          </motion.div>
          <motion.div
            className="relative z-10 -mt-[14%] ml-auto aspect-[16/9] w-[58%] overflow-hidden rounded-[1.25rem] bg-ivory-deep ring-8 ring-ivory"
            {...enter({ x: 40, y: 48, opacity: 0 }, { x: 0, y: 0, opacity: 1 }, 1.8, 0.45)}
          >
            <Fill photo={front} sizes={heroSizes.overlapFront} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Contact — one photograph rises from below, then the page stays quiet. */
function Rise({ eyebrow, title, lede, photo }: Copy & { photo: Photo }) {
  const { enter } = useEntrance();
  return (
    <section data-theme="light" className="bg-ivory text-ink">
      <div className="container-x grid grid-cols-12 items-center gap-x-6 gap-y-10 pt-32 md:pt-36">
        <div className="col-span-12 lg:col-span-6">
          <Eyebrow text={eyebrow} />
          <SplitText as="h1" trigger="load" delay={0.15} text={title} className="display-xl" />
          <Lede text={lede} className="mt-8 max-w-[48ch]" />
        </div>
        <div className="relative col-span-12 aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ivory-deep lg:col-span-6">
          <motion.div className="absolute inset-0" {...enter({ y: "101%" }, { y: "0%" }, 1.8, 0.2)}>
            <Fill photo={photo} sizes={heroSizes.rise} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Opening for inner pages. Every variant plays once on load and never holds the scroll. */
export function PageHero({ variant, photos = [], video, visual, ...copy }: HeroProps) {
  const [photo] = photos;
  switch (variant) {
    case "split":
      return <Split {...copy} photo={photo} />;
    case "mosaic":
      return <Mosaic {...copy} visual={visual} />;
    case "grow":
      return <Grow {...copy} photo={photo} />;
    case "trio":
      return <Trio {...copy} photos={photos} />;
    case "curtain":
      return <Curtain {...copy} photo={photo} video={video} />;
    case "pan":
      return <Pan {...copy} photo={photo} />;
    case "overlap":
      return <Overlap {...copy} photos={photos} />;
    case "rise":
      return <Rise {...copy} photo={photo} />;
  }
}
