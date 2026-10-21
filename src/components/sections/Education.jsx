import { CalendarDays, GraduationCap } from 'lucide-react'
import { education } from '../../data/profile'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Education() {
  return (
    <Section id="formacion" title="Formación académica">
      <Reveal className="panel flex flex-col gap-6 p-6 sm:flex-row sm:items-center md:p-8">
        <span className="icon-tile icon-tile--uranus size-14">
          <GraduationCap className="size-7" aria-hidden="true" />
        </span>
        <div className="flex-1">
          <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{education.degree}</h3>
          <p className="mt-1 text-cyan-100/90">{education.school}</p>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-300">
          <CalendarDays className="size-4" aria-hidden="true" /> {education.period}
        </p>
      </Reveal>
    </Section>
  )
}
