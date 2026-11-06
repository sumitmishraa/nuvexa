"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { BrandStage, useBrandReveal } from "@/components/ui/BrandStage";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandHref, brands, type Brand } from "@/content/brands";
import { EASE_OUT_EXPO, cn, pad } from "@/lib/cn";

function PortfolioCard({ brand, index }: { brand: Brand; index: number }) {
  const href = brandHref(brand);
  const { revealing, onClick } = useBrandReveal(href);
  return (
    <motion.div
      className="w-[78vw] shrink-0 snap-start sm:w-[52vw] md:w-[34vw] lg:w-[26vw]"
      initial={{ opacity: 0, x: 56 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, delay: Math.min(index, 3) * 0.09, ease: EASE_OUT_EXPO }}
    >
      <Link href={href} onClick={onClick} data-cursor="Open" className="group relative flex flex-col">
        <BrandStage brand={brand} revealing={revealing} className="aspect-square w-full rounded-[1.25rem]" sizes="(min-width: 1024px) 26vw, (min-width: 768px) 34vw, 78vw" />
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
    </motion.div>
  );
}

function RailButton({ label, direction, disabled, onClick }: { label: string; direction: 1 | -1; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors duration-300 hover:border-ivory disabled:cursor-default disabled:opacity-35 disabled:hover:border-ivory/30"
    >
      <svg viewBox="0 0 16 16" aria-hidden="true" className={cn("h-4 w-4", direction === -1 && "rotate-180")}>
        <path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </button>
  );
}

/** The portfolio as a horizontal rail: swipe, trackpad or arrows. The page itself keeps scrolling normally. */
export function PortfolioScroll() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [edge, setEdge] = useState({ start: true, end: false });
  const { scrollXProgress } = useScroll({ container: railRef });

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
  };

  const step = (direction: 1 | -1) => {
    const el = railRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: direction * (card.offsetWidth + 20), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section data-theme="dark" aria-labelledby="portfolio-heading" className="bg-ink py-20 text-ivory md:py-28">
      <div className="container-x mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12">
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

      <div
        ref={railRef}
        role="region"
        aria-label="Nuvexa brands"
        tabIndex={0}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-5 overflow-x-auto px-[var(--gutter)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {brands.map((brand, i) => (
          <PortfolioCard key={brand.slug} brand={brand} index={i} />
        ))}
      </div>

      <div className="container-x mt-10 flex items-center gap-6">
        <div aria-hidden="true" className="h-px flex-1 bg-ivory/15">
          <motion.div className="h-px origin-left bg-brass" style={{ scaleX: scrollXProgress }} />
        </div>
        <div className="flex gap-2">
          <RailButton label="Previous brands" direction={-1} disabled={edge.start} onClick={() => step(-1)} />
          <RailButton label="More brands" direction={1} disabled={edge.end} onClick={() => step(1)} />
        </div>
      </div>
    </section>
  );
}
