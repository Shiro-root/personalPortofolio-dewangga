import { Layout, Database, Building2, Sparkles } from "lucide-react";
import { services, profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const ICONS = {
  "website-bisnis": Layout,
  "sistem-manajemen": Database,
  "sistem-internal": Building2,
  "custom-website": Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 border-b border-line py-24 md:py-32">
      <div className="container-max">
        <SectionHeading eyebrow="Layanan" title="Apa yang bisa saya bantu?" />

        <div className="mt-14 divide-y divide-line border-t border-line">
          {services.map((s) => {
            const Icon = ICONS[s.id];
            return (
              <div
                key={s.id}
                className="group flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1.5 max-w-md leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </div>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline shrink-0 text-sm font-medium text-ink md:pl-6"
                >
                  Diskusi Proyek →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
