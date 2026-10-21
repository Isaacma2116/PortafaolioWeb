import { planets, sun, sections } from '../../data/planets'
import Orbit from './Orbit'
import Planet from './Planet'
import PlanetBody from './PlanetBody'

/**
 * Sistema solar interactivo: cada cuerpo es un botón que navega a su sección.
 * - `staticMode`: detiene las órbitas (móvil / reduced motion) dejando los planetas repartidos.
 * - `showLegend`: muestra una lista de accesos directos debajo (útil en pantallas táctiles).
 */
export default function SolarSystem({ active, onSelect, staticMode = false, showLegend = false, tilt = 0.45 }) {
  const current = sections.find((s) => s.id === active) ?? sun

  return (
    <nav aria-label="Sistema solar: navegación por secciones" className="w-full">
      <div
        className="solar"
        data-static={staticMode || undefined}
        style={{ '--tilt': tilt }}
      >
        <div className="solar-plane">
          {planets.map((p) => (
            <Orbit key={p.id} radius={p.orbit} active={p.id === active} />
          ))}
          {planets.map((p) => (
            <Planet key={p.id} planet={p} active={p.id === active} onSelect={onSelect} />
          ))}
        </div>

        <button
          type="button"
          className={`sun-btn ${active === sun.id ? 'is-active' : ''}`}
          aria-label={`${sun.name}: ${sun.label}`}
          aria-current={active === sun.id ? 'location' : undefined}
          onClick={() => onSelect(sun.id)}
        >
          <span className="sun-corona" aria-hidden="true" />
          <PlanetBody skin="sun" />
        </button>
      </div>

      <p className="mt-2 text-center text-xs text-slate-400" aria-live="polite">
        <span className="text-slate-500">Órbita actual: </span>
        <span className="font-medium text-sky-200">{current.name}</span>
        <span className="text-slate-500"> · </span>
        {current.label}
      </p>

      {showLegend && (
        <ul className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onSelect(s.id)}
                aria-current={s.id === active ? 'location' : undefined}
                className={`legend-chip ${s.id === active ? 'is-active' : ''}`}
              >
                <PlanetBody skin={s.skin} className="legend-dot" />
                <span className="truncate">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
