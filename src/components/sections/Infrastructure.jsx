import { infraSkills } from '../../data/skills'
import { icons } from '../ui/icons'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Infrastructure() {
  return (
    <Section
      id="infraestructura"
      title="Infraestructura y soporte TI"
      intro="Experiencia en campo y en Service Desk instalando, configurando y manteniendo en operación equipos, redes y sistemas."
    >
      <ul className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
        {infraSkills.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <Reveal as="li" key={s.name} delay={(i % 3) * 70} className="panel panel-hover flex items-start gap-4 p-5">
              <span className="icon-tile icon-tile--jupiter">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-medium leading-snug text-white">{s.name}</h3>
                {s.evidence && <p className="mt-1.5 text-xs text-amber-100/70">{s.evidence}</p>}
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
