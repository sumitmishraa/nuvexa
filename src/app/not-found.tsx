import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section data-theme="dark" className="relative flex min-h-svh items-center overflow-hidden bg-ink text-ivory">
      <div aria-hidden="true" className="absolute inset-0">
        <Image src="/media/hero-leaf.webp" alt="" fill sizes="100vw" className="object-cover object-[70%_center] opacity-70" />
        <div className="absolute inset-0 bg-ink/45" />
      </div>
      <div className="container-x relative py-40">
        <p className="eyebrow mb-8 text-brass">Error 404</p>
        <h1 className="display-hero max-w-[12ch]">
          This page has <em className="italic text-brass-soft">wandered off.</em>
        </h1>
        <p className="lede mt-10 max-w-[44ch] text-ivory/85">The page you were looking for doesn&rsquo;t exist, or has moved. Let&rsquo;s get you somewhere useful.</p>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="ivory">
            Back to home
          </ButtonLink>
          <ButtonLink href="/brands" variant="outline-light">
            Explore our brands
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
