"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BrandStage, useBrandReveal } from "@/components/ui/BrandStage";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandHref, brands, type Brand } from "@/content/brands";
import { pad } from "@/lib/cn";

function PortfolioCard({ brand, index }: { brand: Brand; index: number }) {
  const href = brandHref(brand);
  const { revealing, onClick } = useBrandReveal(href);
  return (
    <Link
      href={href}
      onClick={onClick}
      data-cursor="Open"
      className="group relative flex w-[78vw] shrink-0 snap-start flex-col sm:w-[52vw] md:w-[34vw] lg:w-[26vw]"
    >
      <BrandStage
        brand={brand}
        revealing={revealing}
        className="aspect-[4/5] w-full rounded-[1.25rem] md:aspect-auto md:h-[46svh]"
        sizes="(min-width: 1024px) 26vw, (min-width: 768px) 34vw, 78vw"
      />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow mb-2 text-ivory/78">
            {pad(index + 1)} — {brand.lifeStage}
          </p>
          <h3 className="display-md transition-colors duration-500 group-hover:text-brass-soft">{brand.name}</h3>
          <p className="mt-2 max-w-[34ch] text-[0.95rem] italic text-ivory/78">&ldquo;{brand.quote}&rdquo;</p>
        </div>
        <span className="mt-1 shrink-0 rounded-full border border-ivory/25 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ivory/85">
          {brand.status}
        </span>
      </div>
    </Link>
  );
}

/*
 * Adapted from the 21st.dev / Motion "Scroll Horizontal Gallery": a sticky stage
 * whose track translates sideways as the page scrolls down. Below 768px, or with
 * reduced motion, it falls back to a native swipeable row.
 */
export function PortfolioScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const measure = () => {
      setPinned(mq.matches && !reduce);
      if (trackRef.current) setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    mq.addEventListener("change", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
    };
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      aria-labelledby="portfolio-heading"
      className="relative bg-ink text-ivory"
      style={pinned ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-svh flex-col justify-center overflow-hidden" : "py-24"}>
        <div className="container-x mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-10">
          <div>
            <SectionLabel index="03" className="mb-5 text-ivory/75">
              The portfolio
            </SectionLabel>
            <h2 id="portfolio-heading" className="display-lg">
              Brands for <em className="italic text-brass-soft">every life stage.</em>
            </h2>
          </div>
          <p className="max-w-[38ch] text-ivory/78">
            Four consumer brands and three emerging verticals — each built around a real, recurring need, from the growing years to the pets we love.
          </p>
        </div>

        <motion.div
          ref={trackRef}
          className={
            pinned
              ? "flex w-max gap-5 px-[var(--gutter)] will-change-transform"
              : "flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-4 [scrollbar-width:none]"
          }
          style={pinned ? { x } : undefined}
        >
          {brands.map((brand, i) => (
            <PortfolioCard key={brand.slug} brand={brand} index={i} />
          ))}
        </motion.div>

        {pinned ? (
          <div className="container-x mt-10" aria-hidden="true">
            <div className="h-px w-full bg-ivory/10">
              <motion.div className="h-px origin-left bg-brass" style={{ scaleX: scrollYProgress }} />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
