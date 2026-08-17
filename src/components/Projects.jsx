import { projects } from "../data/content";
import { SectionHeading } from "./Services";

export default function Projects() {
  return (
    <section id="proyek" className="border-b border-deep py-24 md:py-32">
      <div className="container-max">
        <SectionHeading eyebrow="Proyek" title="Beberapa hal yang sudah dibangun" />

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, reverse }) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden rounded-md border border-deep bg-panel"
      >
        <div className="flex items-center gap-1.5 border-b border-deep px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-mist/30" />
          <span className="h-2 w-2 rounded-full bg-mist/30" />
          <span className="h-2 w-2 rounded-full bg-mist/30" />
        </div>
        <div className="overflow-hidden">
          <img
            src={`https://picsum.photos/seed/${project.seed}/900/600`}
            alt={`Tangkapan layar ${project.name}`}
            loading="lazy"
            className="aspect-[3/2] w-full object-cover grayscale transition duration-300 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        </div>
      </a>

      <div>
        <p className="text-xs text-mist/60">{project.year} &middot; {project.role}</p>
        <h3 className="mt-2 text-2xl font-bold text-paper">{project.name}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-mist">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li key={s} className="rounded-sm border border-deep px-3 py-1 text-xs text-mist/80">
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-6">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-cyan px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-90 active:-translate-y-px"
          >
            Lihat Demo
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm font-medium text-mist"
          >
            Lihat Kode
          </a>
        </div>
      </div>
    </div>
  );
}
