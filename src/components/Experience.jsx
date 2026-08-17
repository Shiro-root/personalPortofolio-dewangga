import { experience, testimonials } from "../data/content";
import { SectionHeading } from "./Services";

export default function Experience() {
  return (
    <section id="pengalaman" className="border-b border-deep py-24 md:py-32">
      <div className="container-max grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <SectionHeading eyebrow="Pengalaman" title="Rekam jejak" />
          <ol className="mt-10 space-y-10">
            {experience.map((e) => (
              <li key={e.title} className="border-l border-deep pl-6">
                <p className="text-xs text-cyan">{e.period}</p>
                <h3 className="mt-2 font-bold text-paper">{e.title}</h3>
                <p className="text-sm text-mist/70">{e.org}</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist">{e.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading eyebrow="Testimoni" title="Kata klien" />
          <div className="mt-10 space-y-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-md border border-deep bg-panel p-6"
              >
                <p className="leading-relaxed text-paper">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm text-mist/70">
                  {t.name} — {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
