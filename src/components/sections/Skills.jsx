import { skillGroups } from '../../data/skills'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades técnicas" intro="Resumen de mi stack, agrupado por área.">
      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 90} className="panel ring-panel p-6">
            <h3 className="font-display text-lg font-semibold text-white">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
