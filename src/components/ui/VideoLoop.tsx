"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/ui/Photo";
import { cn } from "@/lib/cn";

type SlowConnection = { saveData?: boolean; effectiveType?: string };

/**
 * A silent loop over its matching still. The file loads only when the frame is near the view,
 * pauses off-screen, and stays a photo for reduced motion, Save-Data and slow connections.
 */
export function VideoLoop({
  src,
  poster,
  sizes,
  priority = false,
  position,
  play = true,
  className,
}: {
  src: string;
  poster: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  play?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || !play) return;
    const connection = (navigator as Navigator & { connection?: SlowConnection }).connection;
    const skip = window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData || /2g/.test(connection?.effectiveType ?? "");
    if (skip) return;
    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src")) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [src, play]);

  return (
    <div aria-hidden="true" className={cn("absolute inset-0 overflow-hidden", className)}>
      <Photo src={poster} alt="" sizes={sizes} priority={priority} position={position} />
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        onPlaying={() => setShowing(true)}
        className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-700", showing ? "opacity-100" : "opacity-0")}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
