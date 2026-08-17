import { profile } from "../data/content";

export default function ContactCTA() {
  return (
    <section id="kontak" className="py-24 md:py-32">
      <div className="container-max text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Kontak</p>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-bold tracking-tight text-paper md:text-4xl">
          Punya proses yang masih ribet? Mari ngobrol.
        </h2>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-mist">
          Ceritakan proses bisnis atau ide website Anda — saya bantu petakan
          jadi solusi yang jelas, tanpa jargon teknis.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-cyan px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-90 active:-translate-y-px"
          >
            Chat via WhatsApp
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm border-[1.5px] border-deep px-6 py-3 text-sm font-semibold text-paper transition hover:bg-panel"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
