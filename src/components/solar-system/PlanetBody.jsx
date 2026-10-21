// Esfera visual reutilizable (sistema solar, encabezados de sección, menú).
export default function PlanetBody({ skin, className = '' }) {
  return (
    <span className={`planet-body skin-${skin} ${className}`} aria-hidden="true">
      {skin === 'saturn' && <span className="saturn-ring" />}
    </span>
  )
}
