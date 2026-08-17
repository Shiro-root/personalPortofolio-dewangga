import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="border-b border-line py-28 md:py-40">
      <div className="container-max animate-fade-up">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-ink">
            {profile.heroHeading}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            {profile.heroSubheading}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-bg transition hover:opacity-85"
            >
              Lihat Proyek
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-ink/30"
            >
              Diskusi Proyek
            </a>
          </div>

          <p className="mt-12 text-xs tracking-wide text-muted">
            {profile.credibility}
          </p>
        </div>
      </div>
    </section>
  );
}
