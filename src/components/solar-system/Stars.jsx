import { useMediaQuery } from '../../hooks/useMediaQuery'

// Generador pseudoaleatorio con semilla: el cielo es idéntico en cada carga.
function mulberry32(seed) {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const rand = mulberry32(20260114)
const COLORS = ['#ffffff', '#dbeafe', '#e0e7ff', '#fef9c3']

// Cada capa es un único elemento con muchas box-shadow: miles de estrellas, un nodo DOM.
function makeLayer(count) {
  return Array.from({ length: count }, () => {
    const x = (rand() * 100).toFixed(2)
    const y = (rand() * 100).toFixed(2)
    const c = COLORS[Math.floor(rand() * COLORS.length)]
    return `${x}vw ${y}vh ${c}`
  })
}

const LAYERS = [
  { stars: makeLayer(220), size: 1, className: 'star-layer' },
  { stars: makeLayer(90), size: 1.5, className: 'star-layer star-layer--b' },
  { stars: makeLayer(35), size: 2, className: 'star-layer star-layer--c' },
]

// Estrellas brillantes con destello en cruz.
const GLINTS = Array.from({ length: 14 }, () => ({
  top: `${(rand() * 95).toFixed(1)}%`,
  left: `${(rand() * 95).toFixed(1)}%`,
  delay: `${(rand() * -8).toFixed(1)}s`,
  scale: (0.6 + rand() * 0.8).toFixed(2),
}))

export default function Stars() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const ratio = isMobile ? 0.4 : 1
  const glints = isMobile ? GLINTS.slice(0, 5) : GLINTS

  return (
    <>
      {LAYERS.map((layer) => (
        <span
          key={layer.className}
          className={layer.className}
          style={{
            width: `${layer.size}px`,
            height: `${layer.size}px`,
            boxShadow: layer.stars.slice(0, Math.ceil(layer.stars.length * ratio)).join(','),
          }}
        />
      ))}
      {glints.map((g, i) => (
        <span
          key={i}
          className="glint"
          style={{ top: g.top, left: g.left, animationDelay: g.delay, '--s': g.scale }}
        />
      ))}
    </>
  )
}
