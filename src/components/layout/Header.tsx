"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { useSiteReady } from "@/components/layout/Preloader";
import { Wordmark } from "@/components/ui/Logo";
import { nav } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Transparent over the hero, then a quiet solid bar. It hides on the way down,
 * returns on the way up, and reads the `data-theme` of whatever section sits beneath it.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(true);
  const lastY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const ready = useSiteReady();

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 240 && y > lastY.current);
      lastY.current = y;
      const probeY = (headerRef.current?.offsetHeight ?? 80) / 2;
      const stack = document.elementsFromPoint(window.innerWidth / 2, probeY);
      const section = stack.find((el) => !headerRef.current?.contains(el))?.closest<HTMLElement>("[data-theme]");
      setDark(section?.dataset.theme === "dark");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
    // Re-probe once the intro curtain has lifted, and on every route change.
  }, [pathname, ready]);

  // Close the menu whenever the route changes (adjusting state during render, not in an effect).
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  const onDark = dark && !open;
  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-[transform,background-color,color,border-color] duration-500 ease-[var(--ease-out-expo)]",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          open ? "text-ivory" : onDark ? "text-ivory" : "text-ink",
          scrolled && !open ? (onDark ? "border-b border-ivory/10 bg-ink/92" : "border-b border-ink/10 bg-ivory/92") : "border-b border-transparent",
        )}
      >
        <div className="container-x flex h-18 items-center justify-between md:h-20">
          <Link href="/" aria-label="Nuvexa — home" className="text-[0.95rem]">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9 text-[0.82rem] tracking-[0.04em]">
              {nav.slice(0, 5).map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? "page" : undefined} className="group relative py-2">
                      {item.label}
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-brass transition-transform duration-500 ease-[var(--ease-out-expo)]",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden h-10 items-center rounded-full border px-5 text-[0.78rem] tracking-[0.06em] transition-colors duration-300 sm:inline-flex",
                onDark || open ? "border-ivory/30 hover:bg-ivory hover:text-ink" : "border-ink/25 hover:bg-ink hover:text-ivory",
              )}
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="group flex h-10 items-center gap-3 pl-2 text-[0.78rem] tracking-[0.06em]"
            >
              <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
              <span className="relative block h-3 w-7" aria-hidden="true">
                <span className={cn("absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-[var(--ease-out-expo)]", open ? "top-1.5 rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 h-px bg-current transition-all duration-500 ease-[var(--ease-out-expo)]", open ? "top-1.5 w-full -rotate-45" : "top-3 w-4 group-hover:w-full")} />
              </span>
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
