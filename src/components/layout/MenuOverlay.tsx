"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "@/components/layout/SmoothScroll";
import { brandHref, brands } from "@/content/brands";
import { nav, site } from "@/content/site";
import { EASE_IN_OUT_QUART, EASE_OUT_EXPO, pad } from "@/lib/cn";

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const lenis = useLenis();
  const panelRef = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState(0);

  useEffect(() => {
    if (!open) return;
    const instance = lenis?.current;
    instance?.stop();
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>("a")?.focus(), 450);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      instance?.start();
      previouslyFocused?.focus?.();
    };
  }, [open, lenis, onClose]);

  const active = brands[preview];

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="site-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          data-theme="dark"
          data-lenis-prevent
          className="fixed inset-0 z-[65] overflow-y-auto bg-ink text-ivory"
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.9, ease: EASE_IN_OUT_QUART }}
        >
          <div className="container-x grid min-h-svh grid-cols-12 gap-6 pb-10 pt-28 md:pt-32">
            <nav aria-label="Menu" className="col-span-12 lg:col-span-7">
              <ul className="space-y-1">
                {[{ label: "Home", href: "/", note: "Start here" }, ...nav, { label: "Contact", href: "/contact", note: "Start a conversation" }].map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "105%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 1, delay: 0.25 + i * 0.05, ease: EASE_OUT_EXPO }}
                    >
                      <Link href={item.href} onClick={onClose} className="group flex items-baseline gap-5 py-1.5">
                        <span className="eyebrow w-8 shrink-0 text-brass">{pad(i)}</span>
                        <span className="text-[clamp(2.4rem,6vw,5.2rem)] font-serif leading-[1.02] transition-[transform,color] duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-3 group-hover:italic group-hover:text-brass-soft">
                          {item.label}
                        </span>
                        <span className="eyebrow hidden translate-y-1 text-ivory/0 transition-colors duration-500 group-hover:text-ivory/78 md:inline">
                          {item.note}
                        </span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.aside
              className="col-span-12 flex flex-col gap-8 border-t border-ivory/10 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: EASE_OUT_EXPO }}
            >
              <div>
                <p className="eyebrow mb-5 text-ivory/78">The portfolio</p>
                <div className="grid grid-cols-[1fr_auto] gap-6">
                  <ul className="space-y-2.5">
                    {brands.map((b, i) => (
                      <li key={b.slug}>
                        <Link
                          href={brandHref(b)}
                          onClick={onClose}
                          onMouseEnter={() => setPreview(i)}
                          onFocus={() => setPreview(i)}
                          className="flex items-center gap-3 text-[0.95rem] text-ivory/80 transition-colors hover:text-ivory"
                        >
                          <span className={i === preview ? "h-px w-5 bg-brass transition-all" : "h-px w-2 bg-ivory/30 transition-all"} />
                          {b.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="relative hidden h-32 w-32 overflow-hidden rounded-2xl sm:block">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={active.slug}
                        className="absolute inset-0"
                        style={{ background: active.logoBg }}
                        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                      >
                        <Image src={active.logo} alt="" fill sizes="128px" className={active.mode === "logo" ? "object-contain" : "object-cover"} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="mt-auto grid gap-6 text-sm text-ivory/75 sm:grid-cols-2">
                <div>
                  <p className="eyebrow mb-3 text-ivory/78">Write to us</p>
                  <a className="block py-1 hover:text-ivory" href={`mailto:${site.emails.general}`}>
                    {site.emails.general}
                  </a>
                  <a className="block py-1 hover:text-ivory" href={`mailto:${site.emails.careers}`}>
                    {site.emails.careers}
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-3 text-ivory/78">Headquarters</p>
                  <p>
                    {site.address.city}, {site.address.region}
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
