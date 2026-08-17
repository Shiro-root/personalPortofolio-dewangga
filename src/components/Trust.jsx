import { trust } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Trust() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div className="container-max">
        <SectionHeading
          align="center"
          title="Dibangun dengan fokus pada kebutuhan pengguna."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title} className="text-center">
              <h3 className="text-lg font-semibold text-ink">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
