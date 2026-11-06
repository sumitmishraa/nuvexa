"use client";

import { getImageProps } from "next/image";
import { useEffect } from "react";
import { routeHeroes } from "@/content/heroes";

type SlowConnection = { saveData?: boolean; effectiveType?: string };

const warmed = new Set<string>();

function warm(route: string) {
  const images = routeHeroes[route];
  if (!images || warmed.has(route)) return;
  warmed.add(route);
  for (const { src, sizes } of images) {
    const { props } = getImageProps({ src, alt: "", fill: true, sizes });
    const image = new Image();
    if (props.sizes) image.sizes = props.sizes;
    if (props.srcSet) image.srcset = props.srcSet;
    image.src = props.src;
  }
}

/** Loads each page's first images ahead of time: on link hover or focus, then quietly at idle. */
export function PreloadPages() {
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: SlowConnection }).connection;
    if (connection?.saveData || /2g/.test(connection?.effectiveType ?? "")) return;

    const onIntent = (event: Event) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href");
      if (href) warm(href);
    };
    document.addEventListener("pointerover", onIntent, { passive: true });
    document.addEventListener("focusin", onIntent);

    const queue = Object.keys(routeHeroes);
    let timer = 0;
    const next = () => {
      const route = queue.shift();
      if (!route) return;
      warm(route);
      timer = window.setTimeout(next, 500);
    };
    timer = window.setTimeout(next, 2500);

    return () => {
      document.removeEventListener("pointerover", onIntent);
      document.removeEventListener("focusin", onIntent);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
