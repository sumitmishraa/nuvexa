import { StoryStepper } from "@/components/sections/StoryStepper";
import { SectionLabel } from "@/components/ui/SectionLabel";

/** The partner-led operating model, told as five steps that play through by themselves. */
export function OperatingModel({ index = "05" }: { index?: string }) {
  return (
    <section data-theme="light" aria-labelledby="model-heading" className="bg-ivory-deep py-20 text-ink md:py-28">
      <div className="container-x">
        <div className="mb-12 grid grid-cols-12 items-end gap-x-6 gap-y-8 md:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index={index} className="mb-8 text-ink-muted">
              How Nuvexa works today
            </SectionLabel>
            <h2 id="model-heading" className="display-lg">
              Focused on what we do best.
              <br />
              <em className="italic text-brass">Partnered for the rest.</em>
            </h2>
          </div>
          <p className="lede col-span-12 text-ink-muted lg:col-span-5">
            Nuvexa does not currently operate in-house R&amp;D or manufacturing. We concentrate on insight, brand and commerce, and work with specialised,
            qualified partners for development, testing and manufacturing — managed closely, end to end.
          </p>
        </div>
        <StoryStepper />
      </div>
    </section>
  );
}
