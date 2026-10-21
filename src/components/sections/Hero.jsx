import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../../data/profile'
import Reveal from '../ui/Reveal'

const highlights = ['Aplicaciones internas', 'Soporte técnico', 'Infraestructura y redes', 'GPS y RFID', 'Automatización']

// `solar` se muestra debajo del texto cuando el sistema solar no está fijado a un lado (pantallas < xl).
export default function Hero({ onNavigate, solar }) {
  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="inicio-title"
      className="section flex min-h-[100svh] scroll-mt-20 flex-col justify-center pb-16 pt-28 outline-none"
    >
      <Reveal>
        <p className="eyebrow mb-5">
          <span className="mr-2 inline-block size-1.5 rounded-full bg-amber-300 align-middle shadow-[0_0_10px_2px_rgba(252,211,77,.6)]" />
          Portafolio profesional
        </p>
        <h1 id="inicio-title" className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl 2xl:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 font-display text-lg font-medium text-sky-200 sm:text-xl">{profile.role}</p>
      </Reveal>

      <Reveal delay={100}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{profile.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Áreas principales">
          {highlights.map((h) => (
            <li key={h} className="chip">
              {h}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={180} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href="#proyectos"
          onClick={(e) => {
            e.preventDefault()
            onNavigate('proyectos')
          }}
          className="btn btn-primary"
        >
          Explorar proyectos <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <a href={profile.cvUrl} download={profile.cvFileName} className="btn btn-ghost">
          <Download className="size-4" aria-hidden="true" /> Descargar CV
        </a>
        <span className="flex items-center gap-1.5 text-sm text-slate-400 sm:ml-3">
          <MapPin className="size-4" aria-hidden="true" /> {profile.location}
        </span>
      </Reveal>

      {solar && (
        <Reveal delay={240} className="mt-14">
          {solar}
        </Reveal>
      )}
    </section>
  )
}
