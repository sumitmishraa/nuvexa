import { OperatingLine } from "@/components/sections/OperatingLine";
import { StoryStepper } from "@/components/sections/StoryStepper";
import { SectionLabel } from "@/components/ui/SectionLabel";

/** How a Nuvexa product is built, insight to commerce: a photographed story on Approach, a drawn line elsewhere. */
export function OperatingModel({ index = "05", variant = "line" }: { index?: string; variant?: "story" | "line" }) {
  return (
    <section data-theme="light" aria-labelledby="model-heading" className="bg-ivory-deep py-20 text-ink md:py-28">
      <div className="container-x">
        <div className="mb-12 grid grid-cols-12 items-end gap-x-6 gap-y-8 md:mb-16">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index={index} className="mb-8 text-ink-muted">
              How we build
            </SectionLabel>
            <h2 id="model-heading" className="display-lg">
              From a real need to a trusted product.
              <br />
              <em className="italic text-brass">Science-led, end to end.</em>
            </h2>
          </div>
          <p className="lede col-span-12 text-ink-muted lg:col-span-5">
            Every product moves through the same disciplined path — insight, formulation, testing, manufacturing and commerce — with evidence, quality and
            responsible claims guiding each step, overseen by Nuvexa throughout.
          </p>
        </div>
        {variant === "story" ? <StoryStepper /> : <OperatingLine />}
      </div>
    </section>
  );
}
