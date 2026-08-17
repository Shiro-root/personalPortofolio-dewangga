import { profile } from "../data/content";

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 md:py-32">
      <div className="container-max text-center">
        <h2 className="mx-auto max-w-xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink">
          Punya ide atau kebutuhan digital?
        </h2>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
          Diskusikan kebutuhan website atau sistem Anda. Saya akan membantu
          menentukan solusi yang paling sesuai.
        </p>

        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-block rounded-sm bg-ink px-7 py-3.5 text-sm font-medium text-bg transition hover:opacity-85"
        >
          Diskusi Proyek via WhatsApp
        </a>
      </div>
    </section>
  );
}
