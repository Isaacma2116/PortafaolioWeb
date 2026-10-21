import { sections } from '../../data/planets'
import PlanetBody from '../solar-system/PlanetBody'

// Navegación compacta por planetas (tablet), fija a la derecha.
export default function PlanetRail({ active, onNavigate }) {
  return (
    <nav aria-label="Navegación rápida por planetas" className="planet-rail fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 md:block xl:hidden">
      <ul className="flex flex-col items-center gap-1 rounded-full border border-white/10 bg-[#050b1d]/70 p-1.5 backdrop-blur">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => onNavigate(s.id)}
              aria-label={`${s.name}: ${s.label}`}
              aria-current={active === s.id ? 'location' : undefined}
              className={`rail-btn ${active === s.id ? 'is-active' : ''}`}
            >
              <PlanetBody skin={s.skin} className="rail-dot" />
              <span className="rail-tip" aria-hidden="true">
                {s.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
