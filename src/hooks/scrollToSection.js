// Desplaza suavemente hasta una sección y mueve el foco a ella (accesibilidad de teclado).
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  el.focus({ preventScroll: true })
  history.replaceState(null, '', `#${id}`)
}
