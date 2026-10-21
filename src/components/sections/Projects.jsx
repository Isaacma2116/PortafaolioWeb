import { useState } from 'react'
import { ArrowUpRight, ExternalLink, PlayCircle } from 'lucide-react'
import { projects } from '../../data/projects'
import { GithubIcon } from '../ui/BrandIcons'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import ProjectCover from './ProjectCover'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <Section
      id="proyectos"
      title="Proyectos realizados"
      intro="Sistemas web completos, del frontend a la base de datos y el despliegue. Abre cada tarjeta para ver el detalle."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={(i % 2) * 90}>
            <article className="project-card panel group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/8] overflow-hidden border-b border-white/5">
                <ProjectCover project={p} className="transition-transform duration-500 group-hover:scale-[1.03]" />
                {p.video && (
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    <PlayCircle className="size-3.5" aria-hidden="true" /> Video demo
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{p.context}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-300">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
                  {p.technologies.length ? (
                    p.technologies.map((t) => (
                      <li key={t} className="chip chip-sm">
                        {t}
                      </li>
                    ))
                  ) : (
                    <li className="chip chip-sm chip-pending">Tecnologías por confirmar</li>
                  )}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="btn btn-primary h-11 px-4 text-sm"
                    aria-label={`Ver detalle de ${p.title}`}
                  >
                    Ver detalle <ArrowUpRight className="size-4" aria-hidden="true" />
                  </button>
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost h-11 px-4 text-sm">
                      Demo <ExternalLink className="size-4" aria-hidden="true" />
                    </a>
                  )}
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost h-11 px-4 text-sm">
                      <GithubIcon className="size-4" /> Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
