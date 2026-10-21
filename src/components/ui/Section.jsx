import { sections } from '../../data/planets'
import PlanetBody from '../solar-system/PlanetBody'
import Reveal from './Reveal'

// Contenedor de sección: encabezado con el planeta asociado + contenido.
export default function Section({ id, title, intro, children, className = '' }) {
  const index = sections.findIndex((s) => s.id === id)
  const meta = sections[index]

  return (
    <section
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}-title`}
      className={`section scroll-mt-20 py-20 outline-none md:py-28 ${className}`}
    >
      <Reveal as="header" className="mb-10 flex items-center gap-5 md:mb-12">
        <PlanetBody skin={meta.skin} className="section-planet shrink-0" />
        <div>
          <p className="eyebrow">
            {String(index).padStart(2, '0')} · {meta.name}
          </p>
          <h2 id={`${id}-title`} className="font-display text-3xl font-semibold text-white md:text-4xl">
            {title}
          </h2>
        </div>
      </Reveal>
      {intro && (
        <Reveal as="p" delay={80} className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          {intro}
        </Reveal>
      )}
      {children}
    </section>
  )
}
