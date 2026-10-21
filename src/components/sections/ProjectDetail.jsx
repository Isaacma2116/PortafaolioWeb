import { useEffect, useRef } from 'react'
import { ExternalLink, FileCheck2, ImagePlus, Layers, ListChecks, Target, X } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import ProjectCover from './ProjectCover'

function Pending({ children }) {
  return <p className="pending">{children}</p>
}

function Block({ icon: Icon, title, children }) {
  return (
    <section className="mt-7">
      <h4 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-sky-200">
        <Icon className="size-4" aria-hidden="true" /> {title}
      </h4>
      {children}
    </section>
  )
}

// Vista de detalle con <dialog> nativo: foco atrapado, Esc para cerrar y fondo inerte.
export default function ProjectDetail({ project, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
    >
      {project && (
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">{project.context}</p>
              <h3 id="project-dialog-title" className="mt-1 font-display text-2xl font-semibold text-white">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => ref.current.close()}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:bg-white/5"
              aria-label="Cerrar detalle del proyecto"
            >
              <X className="size-5" />
            </button>
          </div>

          {project.video ? (
            <video
              key={project.video}
              src={project.video}
              poster={project.cover ?? undefined}
              controls
              muted
              playsInline
              preload="metadata"
              className="mt-6 w-full rounded-xl border border-white/10 bg-black"
              aria-label={`Video de demostración de ${project.title}`}
            />
          ) : (
            <div className="mt-6 aspect-[16/7] overflow-hidden rounded-xl border border-white/10">
              <ProjectCover project={project} />
            </div>
          )}

          <p className="mt-6 leading-relaxed text-slate-300">{project.summary}</p>

          <Block icon={Target} title="Objetivo">
            {project.objective ? (
              <p className="text-slate-300">{project.objective}</p>
            ) : (
              <Pending>Pendiente: describe el objetivo del proyecto en src/data/projects.js (campo objective).</Pending>
            )}
          </Block>

          <Block icon={ListChecks} title="Funcionalidades">
            {project.features.length ? (
              <ul className="list-disc space-y-1.5 pl-5 text-slate-300">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            ) : (
              <Pending>Pendiente: añade las funcionalidades principales (campo features).</Pending>
            )}
          </Block>

          <Block icon={Layers} title="Tecnologías">
            {project.technologies.length ? (
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li key={t} className="chip chip-sm">
                    {t}
                  </li>
                ))}
              </ul>
            ) : (
              <Pending>Pendiente: indica las tecnologías utilizadas (campo technologies).</Pending>
            )}
          </Block>

          {project.screenshots.length > 0 && (
            <Block icon={ImagePlus} title="Capturas de pantalla">
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((s) => (
                  <li key={s.src}>
                    <figure>
                      <img src={s.src} alt={s.caption} loading="lazy" className="rounded-lg border border-white/10" />
                      <figcaption className="mt-1.5 text-xs text-slate-400">{s.caption}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {project.evidence.length > 0 && (
            <Block icon={FileCheck2} title="Evidencias de funcionamiento">
              <ul className="space-y-2">
                {project.evidence.map((ev) => (
                  <li key={ev.url}>
                    <a href={ev.url} target="_blank" rel="noreferrer" className="link">
                      {ev.label} <ExternalLink className="inline size-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {(project.demoUrl || project.repoUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Ver proyecto <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <GithubIcon className="size-4" /> Repositorio
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </dialog>
  )
}
