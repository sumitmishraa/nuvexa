import { RevealPhoto } from "@/components/motion/RevealPhoto";
import { VideoLoop } from "@/components/ui/VideoLoop";
import { cn } from "@/lib/cn";

/** A large framed photo or video aligned to the page grid, with an optional line of text over it. */
export function PhotoBand({
  src,
  alt = "",
  video,
  position,
  label,
  children,
  className,
}: {
  src: string;
  alt?: string;
  video?: string;
  position?: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const sizes = "(min-width: 768px) 92vw, 100vw";
  return (
    <section data-theme="light" aria-label={label} aria-hidden={label ? undefined : true} className={cn("bg-ivory py-10 md:py-14", className)}>
      <div className="container-x">
        <div data-theme="dark" className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-ink md:aspect-[16/9]">
          {video ? <VideoLoop src={video} poster={src} sizes={sizes} position={position} /> : <RevealPhoto src={src} alt={alt} sizes={sizes} position={position} />}
          {children ? (
            <div className="absolute inset-0 flex items-end bg-[linear-gradient(to_top,rgba(14,30,25,0.86),rgba(14,30,25,0.08)_60%)] p-6 md:p-12">
              <div className="display-lg text-ivory">{children}</div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
