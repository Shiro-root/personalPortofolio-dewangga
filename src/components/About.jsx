import { profile, stack } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line py-24 md:py-32">
      <div className="container-max grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHeading eyebrow="Tentang" title="Tentang saya" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
            {profile.aboutIntro}
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            {profile.aboutBody}
          </p>
        </div>

        <div className="md:col-span-5 md:pl-6">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Tech Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
            {stack.map((s, i) => (
              <span key={s}>
                {s}
                {i < stack.length - 1 && <span className="ml-4 text-line">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
