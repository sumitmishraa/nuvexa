import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false } };

// TODO legal review: placeholder structure only. Replace with counsel-approved policy text before launch.
const sections = [
  { h: "Who we are", p: `${site.legalName} ("Nuvexa", "we") is a company registered in India, with offices in ${site.address.city}, ${site.address.region}.` },
  { h: "Information we collect", p: "Information you choose to share with us — for example your name, email address, organisation and message when you contact us — and limited technical information needed to operate this website." },
  { h: "How we use it", p: "To respond to your enquiry, to manage our relationship with you and to improve this website. We do not sell personal data." },
  { h: "Your choices", p: `You may ask us to access, correct or delete your personal data at any time by writing to ${site.emails.general}.` },
  { h: "Updates", p: "This policy will be finalised and may be updated from time to time. The current version will always be published on this page." },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={sections} />;
}

function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <section data-theme="light" className="bg-ivory pb-28 pt-40 text-ink md:pt-48">
      <div className="container-x grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-6 text-brass">Legal</p>
          <h1 className="display-lg">{title}</h1>
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
