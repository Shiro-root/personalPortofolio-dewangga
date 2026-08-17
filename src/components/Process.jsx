import { process } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div className="container-max">
        <SectionHeading eyebrow="Proses" title="Dari ide menjadi solusi." />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="border-t border-line pt-6">
              <span className="text-sm font-medium text-accent">{p.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
