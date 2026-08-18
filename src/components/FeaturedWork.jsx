import { Link } from "react-router-dom";
import { projects } from "../data/content";
import BrowserFrame from "./BrowserFrame";
import SectionHeading from "./SectionHeading";

export default function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-16 border-b border-line py-24 md:py-32">
      <div className="container-max">
        <SectionHeading
          eyebrow="Proyek"
          title="Proyek yang saya kerjakan"
          subtitle="Beberapa website dan sistem yang saya bangun untuk menyelesaikan kebutuhan nyata."
        />

        <div className="mt-16 flex flex-col gap-24 md:gap-32">
          {projects.map((p) =>
            p.layout === "split" ? (
              <SplitWork key={p.id} project={p} />
            ) : (
              <FullWork key={p.id} project={p} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function FullWork({ project }) {
  return (
    <article>
      <Link to={`/proyek/${project.id}`} className="group block">
        <BrowserFrame
          seed={project.seed}
          image={project.image}
          alt={`Tangkapan layar ${project.name}`}
        />
      </Link>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-accent">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-ink">{project.name}</h3>
          <p className="mt-2 max-w-lg leading-relaxed text-muted">{project.shortDesc}</p>
        </div>
        <Link
          to={`/proyek/${project.id}`}
          className="link-underline shrink-0 text-sm font-medium text-ink"
        >
          Lihat Detail →
        </Link>
      </div>
    </article>
  );
}

function SplitWork({ project }) {
  return (
    <article className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
      <Link to={`/proyek/${project.id}`} className="group block md:col-span-7">
        <BrowserFrame
          seed={project.seed}
          image={project.image}
          alt={`Tangkapan layar ${project.name}`}
        />
      </Link>

      <div className="md:col-span-5">
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-accent">
          {project.category}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-ink">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.shortDesc}</p>
        <Link
          to={`/proyek/${project.id}`}
          className="link-underline mt-6 inline-block text-sm font-medium text-ink"
        >
          Lihat Detail →
        </Link>
      </div>
    </article>
  );
}