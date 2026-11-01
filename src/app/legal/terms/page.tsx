import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Terms of Service", robots: { index: false } };

// TODO legal review: placeholder structure only. Replace with counsel-approved terms before launch.
const sections = [
  { h: "About these terms", p: `These terms govern your use of the ${site.legalName} website. By using the site you agree to them.` },
  { h: "Information on this site", p: "Content on this website is provided for general information about Nuvexa and its brands. It is not medical advice. Always consult a qualified professional about your health." },
  { h: "Intellectual property", p: "The Nuvexa name, brand names, logos and site content belong to Nuvexa or its licensors and may not be used without permission." },
  { h: "Liability", p: "We work to keep information accurate and current, but the site is provided “as is” without warranties of any kind, to the extent permitted by law." },
  { h: "Governing law", p: `These terms will be governed by the laws of India, with courts in ${site.address.city} having jurisdiction.` },
];

export default function TermsPage() {
  return (
    <section data-theme="light" className="bg-ivory pb-28 pt-40 text-ink md:pt-48">
      <div className="container-x grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-6 text-brass">Legal</p>
          <h1 className="display-lg">Terms of Service</h1>
          <p className="mt-6 rounded-full border border-clay/40 px-4 py-2 text-[0.75rem] text-clay md:inline-block">Draft — pending legal review</p>
        </div>
        <div className="col-span-12 space-y-12 md:col-span-7 md:col-start-6">
          {sections.map((s, i) => (
            <div key={s.h} className="border-t border-ink/12 pt-8">
              <h2 className="display-md mb-4">
                <span className="mr-4 text-brass">{String(i + 1).padStart(2, "0")}</span>
                {s.h}
              </h2>
              <p className="body-copy text-ink-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
