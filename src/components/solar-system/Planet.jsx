import PlanetBody from './PlanetBody'

// Planeta en órbita: el brazo rota, el contenedor interno contrarrota para mantenerlo
// derecho y sin deformar dentro del plano inclinado. Solo se anima `transform`.
export default function Planet({ planet, active, onSelect }) {
  const style = {
    '--orbit': `${planet.orbit}cqw`,
    '--size': `${planet.size}cqw`,
    '--dur': `${planet.duration}s`,
    '--delay': `${-(planet.angle / 360) * planet.duration}s`,
  }

  return (
    <div className="orbit-arm" style={style}>
      <div className="orbit-carrier">
        <div className="orbit-counter">
          <button
            type="button"
            className={`planet-btn ${active ? 'is-active' : ''}`}
            aria-label={`${planet.name}: ${planet.label}`}
            aria-current={active ? 'location' : undefined}
            onClick={() => onSelect(planet.id)}
          >
            <span className="planet-visual">
              <PlanetBody skin={planet.skin} />
              <span className="planet-shade" aria-hidden="true" />
            </span>
            <span className="planet-label" aria-hidden="true">
              <strong>{planet.name}</strong> · {planet.label}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
