import { Compass, GraduationCap, Sparkles } from 'lucide-react'
import { education, interests, profile } from '../../data/profile'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="panel p-6 md:p-8 lg:col-span-3">
          <p className="text-lg leading-relaxed text-slate-200">
            Soy <strong className="text-white">Ingeniero en Desarrollo y Gestión de Software</strong> y combino dos
            perfiles: el desarrollo de aplicaciones internas con JavaScript, Node.js y SQL, y la infraestructura TI en
            campo y en Service Desk.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            He automatizado procesos operativos, administrado sistemas de GPS, RFID y videovigilancia para una flota de
            transporte y resuelto incidencias técnicas bajo SLA. Me enfoco en la eficiencia mediante la automatización y
            en adaptarme con rapidez a nuevos entornos.
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <Compass className="size-4" aria-hidden="true" /> Con base en {profile.location}
          </p>
        </Reveal>

        <div className="grid gap-6 lg:col-span-2">
          <Reveal delay={80} className="panel p-6">
            <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-sky-200">
              <GraduationCap className="size-4" aria-hidden="true" /> Formación
            </h3>
            <p className="mt-3 font-medium text-white">{education.degree}</p>
            <p className="text-sm text-slate-400">
              {education.school} · {education.period}
            </p>
          </Reveal>
          <Reveal delay={140} className="panel p-6">
            <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-sky-200">
              <Sparkles className="size-4" aria-hidden="true" /> Intereses
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {interests.map((i) => (
                <li key={i} className="chip">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
