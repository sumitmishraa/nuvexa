import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mark } from "@/components/ui/Logo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Nuvexa for partnerships, investor relations, media, medical information or careers.",
};

export default function ContactPage() {
  return (
    <>
    <CinematicHero
      eyebrow="Contact"
      title={"Let's start a\n*conversation.*"}
      lede="For partnerships and business development, investor relations, media, medical information, careers or general questions — we would be glad to hear from you, here in Bengaluru."
      image="/media/contact.webp"
      imageAlt="A great rain tree spreading over green lawns in Cubbon Park, Bengaluru"
    />
    <section data-theme="light" className="bg-ivory pb-28 pt-20 text-ink md:pb-40 md:pt-28">
      <div className="container-x grid grid-cols-12 gap-x-6 gap-y-16">
        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-3 text-ink-muted">
              <span className="h-px w-10 bg-brass" />
              Get in touch
            </p>
          </Reveal>
          <SplitText as="h2" className="display-lg" text={"We'd be glad\nto *hear from you.*"} />
          <Reveal delay={0.2}>
            <p className="lede mt-8 max-w-[40ch] text-ink-muted">
              Choose the topic that fits best and we will route your message to the right person.
            </p>
          </Reveal>

          <Reveal delay={0.5} className="mt-16 space-y-10">
            <div>
              <p className="eyebrow mb-3 text-brass">Direct emails</p>
              <dl className="grid grid-cols-[8rem_1fr] gap-y-2 text-[0.95rem]">
                <dt className="text-ink-muted">General</dt>
                <dd>
                  <a href={`mailto:${site.emails.general}`} className="underline decoration-ink/20 underline-offset-4 hover:decoration-brass">
                    {site.emails.general}
                  </a>
                </dd>
                <dt className="text-ink-muted">Careers</dt>
                <dd>
                  <a href={`mailto:${site.emails.careers}`} className="underline decoration-ink/20 underline-offset-4 hover:decoration-brass">
                    {site.emails.careers}
                  </a>
                </dd>
              </dl>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-end gap-6 rounded-[1.5rem] bg-ink p-8 text-ivory">
              <div>
                <p className="eyebrow mb-4 text-brass">Headquarters</p>
                <address className="not-italic leading-relaxed text-ivory/80">
                  {site.legalName}
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city} – {site.address.postcode}
                  <br />
                  {site.address.region}
                </address>
              </div>
              <div aria-hidden="true" className="relative h-24 w-24">
                <span className="absolute inset-0 rounded-full border border-brass/40" />
                <span className="absolute inset-4 rounded-full border border-brass/60" style={{ animation: "drift 3s ease-in-out infinite" }} />
                <Mark className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-brass" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="rounded-[1.75rem] bg-paper p-8 shadow-[0_40px_80px_-60px_rgba(14,30,25,0.5)] md:p-12">
            <p className="eyebrow mb-3 text-brass">Send a message</p>
            <h2 className="display-md mb-12">Have a question or want to work together?</h2>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
    </>
  );
}
