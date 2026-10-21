// Mapa planeta → sección. `orbit` y `size` están en unidades cqw (porcentaje del ancho del sistema).
// `duration` en segundos por vuelta; `angle` es la posición inicial en grados.
export const sun = {
  id: 'inicio',
  name: 'Sol',
  skin: 'sun',
  label: 'Inicio',
}

export const planets = [
  { id: 'sobre-mi', name: 'Mercurio', skin: 'mercury', label: 'Sobre mí', orbit: 13, size: 1.8, duration: 20, angle: 210 },
  { id: 'experiencia', name: 'Venus', skin: 'venus', label: 'Experiencia', orbit: 17.5, size: 2.5, duration: 30, angle: 40 },
  { id: 'proyectos', name: 'Tierra', skin: 'earth', label: 'Proyectos', orbit: 22, size: 2.7, duration: 42, angle: 300 },
  { id: 'desarrollo', name: 'Marte', skin: 'mars', label: 'Desarrollo', orbit: 26.5, size: 2.1, duration: 56, angle: 130 },
  { id: 'infraestructura', name: 'Júpiter', skin: 'jupiter', label: 'Infraestructura', orbit: 32, size: 4.8, duration: 84, angle: 345 },
  { id: 'habilidades', name: 'Saturno', skin: 'saturn', label: 'Habilidades', orbit: 38, size: 4, duration: 112, angle: 175 },
  { id: 'formacion', name: 'Urano', skin: 'uranus', label: 'Formación', orbit: 43, size: 3.1, duration: 150, angle: 255 },
  { id: 'contacto', name: 'Neptuno', skin: 'neptune', label: 'Contacto', orbit: 47.5, size: 3, duration: 190, angle: 75 },
]

// Orden de navegación (menú, carril de planetas y detección de sección activa).
export const sections = [sun, ...planets]
