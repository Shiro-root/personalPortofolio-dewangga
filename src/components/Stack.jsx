import { stack, profile } from "../data/content";
import { SectionHeading } from "./Services";

export default function Stack() {
  return (
    <section id="tentang" className="border-b border-deep py-24 md:py-32">
      <div className="container-max grid grid-cols-1 gap-14 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Tentang" title="Cara saya kerja" />
          <p className="mt-6 max-w-md leading-relaxed text-mist">
            {profile.bio}
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-mist">
            Setiap proyek dimulai dari satu pertanyaan: masalah operasional apa
            yang mau diselesaikan? Dari situ baru turun ke desain, lalu kode.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist/60">
            Tech Stack
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-sm border border-deep bg-panel px-4 py-2 text-sm text-paper transition hover:border-cyan/50"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
