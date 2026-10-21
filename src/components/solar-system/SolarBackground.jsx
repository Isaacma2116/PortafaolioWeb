import Stars from './Stars'

// Fondo fijo decorativo. pointer-events: none → nunca bloquea clics ni scroll.
export default function SolarBackground() {
  return (
    <div className="space-bg" aria-hidden="true">
      <div className="nebula nebula--blue" />
      <div className="nebula nebula--violet" />
      <div className="nebula nebula--teal" />
      <Stars />
      <span className="shooting-star" />
      <div className="space-vignette" />
    </div>
  )
}
