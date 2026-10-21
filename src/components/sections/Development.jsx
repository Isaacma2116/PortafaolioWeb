import { devSkills } from '../../data/skills'
import { icons } from '../ui/icons'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Development() {
  return (
    <Section
      id="desarrollo"
      title="Desarrollo de software"
      intro="Tecnologías con las que construyo aplicaciones web e internas, desde la interfaz hasta la base de datos."
    >
      <ul className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
        {devSkills.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <Reveal as="li" key={s.name} delay={(i % 3) * 70} className="panel panel-hover flex gap-4 p-5">
              <span className="icon-tile icon-tile--mars">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{s.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{s.description}</p>
                {s.evidence && <p className="mt-2 text-xs text-orange-200/80">Aplicado en: {s.evidence}</p>}
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
