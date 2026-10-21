import { Briefcase } from 'lucide-react'
import { experience } from '../../data/experience'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiencia profesional">
      <ol className="timeline">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.id} delay={i * 80} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true">
              <Briefcase className="size-3.5" />
            </span>
            <article className="panel p-6 md:p-7">
              <header className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                  <p className="text-sky-200">{job.company}</p>
                </div>
                <p className="shrink-0 text-sm text-slate-400 md:pt-1">{job.period}</p>
              </header>
              <ul className="mt-5 space-y-2.5">
                {job.activities.map((a) => (
                  <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sky-300/70" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Áreas">
                {job.tags.map((t) => (
                  <li key={t} className="chip chip-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
