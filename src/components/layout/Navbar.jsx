import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { sections } from '../../data/planets'
import { profile } from '../../data/profile'
import PlanetBody from '../solar-system/PlanetBody'

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false)

  // Cerrar el menú móvil con Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    onNavigate(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#030712]/70 backdrop-blur-md">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={(e) => go(e, 'inicio')}
          className="flex items-center gap-2.5 rounded-md font-display text-sm font-semibold tracking-wide text-white"
        >
          <PlanetBody skin="sun" className="size-5" />
          <span>
            José Isaac <span className="text-slate-400">Macías</span>
          </span>
        </a>

        <nav aria-label="Menú principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => go(e, s.id)}
                  aria-current={active === s.id ? 'location' : undefined}
                  className={`nav-link ${active === s.id ? 'is-active' : ''}`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={profile.cvUrl} download={profile.cvFileName} className="btn btn-ghost hidden h-9 px-3 text-xs sm:inline-flex xl:hidden 2xl:inline-flex">
            Descargar CV
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Menú de secciones" className="mobile-menu border-t border-white/5 xl:hidden">
          <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-1 p-3 sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => go(e, s.id)}
                  aria-current={active === s.id ? 'location' : undefined}
                  className={`flex min-h-12 items-center gap-3 rounded-lg px-3 text-sm ${
                    active === s.id ? 'bg-sky-400/10 text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <PlanetBody skin={s.skin} className="size-4" />
                  <span className="font-medium">{s.label}</span>
                  <span className="ml-auto text-xs text-slate-500">{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
