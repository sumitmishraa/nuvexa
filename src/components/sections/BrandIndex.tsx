"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { BrandStage, useBrandReveal } from "@/components/ui/BrandStage";
import { Mark } from "@/components/ui/Logo";
import { brandHref, brands, type Brand } from "@/content/brands";
import { EASE_OUT_EXPO, cn, pad } from "@/lib/cn";

const filters = [
  { id: "all", label: "All", count: brands.length },
  { id: "brand", label: "Consumer brands", count: brands.filter((b) => b.kind === "brand").length },
  { id: "vertical", label: "Emerging verticals", count: brands.filter((b) => b.kind === "vertical").length },
] as const;

type FilterId = (typeof filters)[number]["id"];

function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  const href = brandHref(brand);
  const { revealing, onClick } = useBrandReveal(href);
  return (
    <Link href={href} onClick={onClick} data-cursor="Open" className="group flex h-full flex-col">
      <BrandStage brand={brand} revealing={revealing} className="aspect-square w-full rounded-[1.25rem]" sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw" />
      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow text-brass">{pad(index + 1)}</p>
          <span className="rounded-full border border-ink/15 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">{brand.status}</span>
        </div>
        <h2 className="display-md mt-4 transition-colors duration-500 group-hover:text-brass">{brand.name}</h2>
        <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">{brand.lifeStage}</p>
        <p className="mt-4 line-clamp-3 text-[0.98rem] leading-relaxed text-ink-muted">{brand.summary}</p>
        <p className="mt-auto inline-flex items-center gap-3 pt-6 text-[0.86rem] font-semibold tracking-[0.03em]">
          Discover {brand.name}
          <span aria-hidden="true" className="h-px w-8 bg-brass transition-all duration-500 group-hover:w-14" />
        </p>
      </div>
    </Link>
  );
}

function InviteCard() {
  return (
    <Link
      href="/contact"
      data-cursor="Open"
      className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-[1.25rem] bg-ink p-7 text-ivory"
    >
      <Mark className="h-8 w-8 text-brass transition-transform duration-700 group-hover:rotate-90" strokeWidth={1.2} />
      <div>
        <p className="eyebrow mb-4 text-ivory/80">Build with us</p>
        <p className="display-md">
          Partner on what <em className="italic text-brass-soft">comes next.</em>
        </p>
        <p className="mt-6 inline-flex items-center gap-3 text-[0.86rem] font-semibold">
          Start a conversation
          <span aria-hidden="true" className="h-px w-8 bg-brass transition-all duration-500 group-hover:w-14" />
        </p>
      </div>
    </Link>
  );
}

/** The full portfolio on one aligned grid: consumer brands on the first row, emerging verticals on the second. */
export function BrandIndex() {
  const [filter, setFilter] = useState<FilterId>("all");
  const visible = brands.filter((b) => filter === "all" || b.kind === filter);

  return (
    <section data-theme="light" aria-label="Brand portfolio" className="bg-ivory pb-20 pt-20 text-ink md:pb-28 md:pt-28">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-8">
          <div>
            <p className="eyebrow mb-4 text-ink-muted">
              <span className="text-brass">01</span> — The portfolio
            </p>
            <h2 className="display-lg max-w-[18ch]">
              Seven ways we serve <em className="italic text-brass">everyday health.</em>
            </h2>
          </div>
          <LayoutGroup>
            <div role="group" aria-label="Filter the portfolio" className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={cn("relative rounded-full px-5 py-2.5 text-[0.86rem] font-semibold transition-colors", filter === f.id ? "text-ivory" : "text-ink hover:text-ink-muted")}
                >
                  {filter === f.id ? (
                    <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  ) : (
                    <span className="absolute inset-0 rounded-full border border-ink/15" />
                  )}
                  <span className="relative">
                    {f.label} <span className={filter === f.id ? "text-ivory/80" : "text-ink-muted"}>{pad(f.count)}</span>
                  </span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>

        <motion.ul layout className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((brand, i) => (
              <motion.li
                key={brand.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: (i % 4) * 0.06 }}
              >
                <BrandCard brand={brand} index={brands.indexOf(brand)} />
              </motion.li>
            ))}
            {filter !== "brand" ? (
              <motion.li key="invite" layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}>
                <InviteCard />
              </motion.li>
            ) : null}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
