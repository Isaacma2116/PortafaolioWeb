// Habilidades técnicas según el CV. `evidence` indica dónde se aplicó (solo lo que dice el CV).
export const devSkills = [
  { name: 'HTML', icon: 'code', description: 'Estructura semántica de interfaces web.' },
  { name: 'CSS', icon: 'palette', description: 'Maquetación y estilos de interfaces.' },
  {
    name: 'JavaScript',
    icon: 'braces',
    description: 'Lógica de aplicaciones web.',
    evidence: 'Aplicación interna de control de equipos — Shonan México',
  },
  {
    name: 'Node.js',
    icon: 'server',
    description: 'Desarrollo del lado del servidor.',
    evidence: 'Aplicación interna de control de equipos — Shonan México',
  },
  {
    name: 'SQL',
    icon: 'database',
    description: 'Consultas y modelado de datos relacionales.',
    evidence: 'Aplicación interna de control de equipos — Shonan México',
  },
  { name: 'MySQL', icon: 'database', description: 'Gestor de bases de datos relacionales.' },
  { name: 'Git / GitHub', icon: 'git', description: 'Control de versiones y repositorios.' },
]

export const infraSkills = [
  {
    name: 'Soporte técnico de hardware y software',
    icon: 'wrench',
    evidence: 'Turística Sureña · Grupo Modelo · Shonan México',
  },
  {
    name: 'Mantenimiento preventivo y correctivo',
    icon: 'shield',
    evidence: 'Shonan México',
  },
  { name: 'Redes y cableado estructurado', icon: 'cable', evidence: 'Shonan México' },
  { name: 'Configuración de dispositivos de red', icon: 'router' },
  {
    name: 'Instalación y configuración de GPS y RFID',
    icon: 'satellite',
    evidence: 'Flota de transporte — Turística Sureña',
  },
  {
    name: 'Sistemas de videovigilancia',
    icon: 'cctv',
    evidence: 'Flota de transporte — Turística Sureña',
  },
  {
    name: 'Servidores y recursos informáticos',
    icon: 'harddrive',
    evidence: 'Servidor local — Shonan México',
  },
]

export const skillGroups = [
  {
    title: 'Desarrollo de software',
    items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'SQL', 'MySQL', 'Git / GitHub'],
  },
  {
    title: 'Infraestructura y soporte',
    items: [
      'Soporte técnico',
      'Mantenimiento preventivo y correctivo',
      'Redes y cableado estructurado',
      'Dispositivos de red',
      'GPS / RFID',
      'Videovigilancia',
    ],
  },
  {
    title: 'Herramientas y gestión',
    items: ['Paquetería Office', 'Gestión de tickets de soporte (SLA)', 'Automatización de tareas'],
  },
]
