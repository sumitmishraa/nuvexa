import { Marquee } from "@/components/motion/Marquee";
import { Photo } from "@/components/ui/Photo";

const defaultRows = [
  ["/media/lab-glassware.webp", "/media/capsules.webp", "/media/team-office.webp", "/media/filling-line.webp", "/media/powder-morning.webp", "/media/microscope-closeup.webp"],
  ["/media/pipette-work.webp", "/media/brand-strategy.webp", "/media/tablet-coating.webp", "/media/consumer-conversation.webp", "/media/beaker.webp", "/media/warehouse-aisle.webp"],
];

function Row({ photos, reverse, duration }: { photos: string[]; reverse?: boolean; duration: number }) {
  return (
    <div aria-hidden="true" className="group flex overflow-hidden">
      <div className="flex w-max group-hover:[animation-play-state:paused]" style={{ animation: `marquee ${duration}s linear infinite`, animationDirection: reverse ? "reverse" : undefined }}>
        {[...photos, ...photos].map((src, i) => (
          <div key={`${src}-${i}`} className="shrink-0 pr-3 md:pr-4">
            <div className="relative aspect-[3/2] w-56 overflow-hidden rounded-[1rem] bg-ivory-deep md:w-80">
              <Photo src={src} alt="" sizes="(min-width: 768px) 320px, 224px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Two rows of photographs gliding in opposite directions, with a ribbon of words between them. */
export function PhotoRibbon({ words, rows = defaultRows, duration = 64 }: { words: readonly string[]; rows?: string[][]; duration?: number }) {
  return (
    <div className="space-y-6 md:space-y-8">
      <Row photos={rows[0]} duration={duration} />
      <Marquee items={words} duration={duration - 8} />
      <Row photos={rows[1]} reverse duration={duration + 8} />
    </div>
  );
}
