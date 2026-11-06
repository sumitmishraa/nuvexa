import Image from "next/image";
import { photoManifest } from "@/content/photo-manifest";
import { cn } from "@/lib/cn";

/** A photo that fills its frame. A tiny blurred version shows at once, so a frame is never blank. */
export function Photo({
  src,
  alt,
  sizes,
  priority = false,
  position,
  contain = false,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  /** Show the whole image without cropping (brand logos). */
  contain?: boolean;
  className?: string;
}) {
  const blur = contain ? undefined : photoManifest[src]?.blur;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder={blur ? "blur" : "empty"}
      blurDataURL={blur}
      className={cn(contain ? "object-contain" : "object-cover", className)}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
