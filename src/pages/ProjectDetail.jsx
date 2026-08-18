import { Link, useParams, Navigate } from "react-router-dom";
import { projects, profile } from "../data/content";
import BrowserFrame from "../components/BrowserFrame";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  if (!project) return <Navigate to="/" replace />;

  const index = projects.findIndex((p) => p.id === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="animate-fade-in">
      <div className="container-max pt-14">
        <Link to="/#work" className="link-underline text-sm font-medium text-muted">
          ← Kembali ke Proyek
        </Link>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.1em] text-accent">
          {project.category}
        </p>
        <h1 className="mt-3 max-w-2xl text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">
          {project.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {project.shortDesc}
        </p>
      </div>

      <div className="container-max mt-12">
        <BrowserFrame seed={project.seed} alt={`Tampilan ${project.name}`} />
      </div>

      <div className="container-max mt-20 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <section>
          <h2 className="text-sm font-medium uppercase tracking-[0.1em] text-muted">
            Tantangan
          </h2>
          <p className="mt-4 leading-relaxed text-ink">{project.challenge}</p>
        </section>
        <section>
          <h2 className="text-sm font-medium uppercase tracking-[0.1em] text-muted">
            Solusi
          </h2>
          <p className="mt-4 leading-relaxed text-ink">{project.solution}</p>
        </section>
      </div>

      <div className="container-max mt-16">
        <h2 className="text-sm font-medium uppercase tracking-[0.1em] text-muted">
          Fitur Utama
        </h2>
        <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
          {project.features.map((f) => (
            <li key={f} className="border-t border-line pt-3 leading-relaxed text-ink">
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-max mt-16 max-w-2xl">
        <h2 className="text-sm font-medium uppercase tracking-[0.1em] text-muted">
          Hasil
        </h2>
        <p className="mt-4 leading-relaxed text-ink">{project.result}</p>
      </div>

     <div className="container-max mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-line pt-6">
        <p className="text-xs text-muted">
          <span className="uppercase tracking-[0.1em]">Teknologi:</span>{" "}
          <span className="font-medium text-ink">{project.tech.join(", ")}</span>
        </p>
        
        {/* Render tombol HANYA jika properti demo ada di data */}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent transition-all hover:text-ink"
          >
            Lihat Live Demo
            {/* Ikon External Link */}
            <svg 
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        )}
      </div>

      <div className="container-max mt-24 border-t border-line py-20 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          Memiliki kebutuhan serupa?
        </h2>
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block rounded-sm bg-ink px-7 py-3.5 text-sm font-medium text-bg transition hover:opacity-85"
        >
          Diskusikan Proyek
        </a>

        <div className="mt-16 border-t border-line pt-8">
          <Link
            to={`/proyek/${next.id}`}
            className="text-xs uppercase tracking-[0.1em] text-muted"
          >
            Proyek berikutnya
          </Link>
          <p className="mt-2 text-lg font-semibold text-ink">{next.name}</p>
        </div>
      </div>
    </article>
  );
}
