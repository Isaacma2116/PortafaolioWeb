// Proyectos del portafolio.
//
// Campos opcionales:
//   - cover:        imagen de portada, p. ej. '/projects/techcontrol/portada.jpg'
//   - video:        video de demostración (mp4 comprimido), p. ej. '/projects/techcontrol/demo.mp4'
//   - screenshots:  [{ src: '/projects/<id>/01.webp', caption: 'Pantalla de registro' }]
//   - evidence:     [{ label: 'Documentación', url: 'https://...' }]
//   - demoUrl / repoUrl: enlaces reales (los botones solo aparecen si existen)
//
// Los archivos van en public/projects/<id>/ y se referencian con '/projects/<id>/archivo'.

export const projects = [
  {
    id: 'techcontrol',
    title: 'TechControl',
    context: 'Gestión de activos de TI',
    icon: 'monitor',
    accent: 'from-emerald-500/25 to-sky-500/20',
    summary:
      'Sistema web para administrar el inventario de TI: equipos, accesorios, impresoras, celulares, software y licencias, con asignación a colaboradores y cartas responsivas en PDF.',
    objective:
      'Centralizar el control de los activos de TI de la empresa: saber qué existe, quién lo tiene, en qué estado está y cuándo le toca mantenimiento, con trazabilidad completa de cada cambio.',
    features: [
      'Inventario de equipos, accesorios, impresoras y celulares con folios propios (EQ-, ACC-, IMP-, CEL-).',
      'Asignación, liberación y transferencia de recursos a colaboradores, con historial de cada movimiento.',
      'Cartas responsivas generadas en PDF, con flujo de firma y versiones.',
      'Mantenimientos preventivos y correctivos con calendario, reprogramación y registro de componentes cambiados.',
      'Software y licencias: puestos utilizados y disponibles calculados, vigencias, renovaciones y proveedores.',
      'Redes y dispositivos de red, con contraseñas Wi-Fi cifradas (AES-256-GCM).',
      'Dashboard y reportes con indicadores en tiempo real y exportación.',
      'Login con JWT en cookie HttpOnly, roles y permisos, sesiones revocables y bitácora de auditoría.',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Docker'],
    cover: '/projects/techcontrol/portada.jpg',
    video: '/projects/techcontrol/demo.mp4',
    screenshots: [],
    evidence: [],
    demoUrl: null,
    repoUrl: 'https://github.com/Isaacma2116/techcontrol',
  },
  {
    id: 'ticketdesk',
    title: 'TicketDesk',
    context: 'Plataforma de gestión de tickets',
    icon: 'ticket',
    accent: 'from-violet-500/30 to-fuchsia-500/20',
    summary:
      'Plataforma multiempresa de mesa de ayuda para solicitudes internas por departamento (TI, RH, Compras, Mantenimiento), desde el alta del ticket hasta su cierre.',
    objective:
      'Ordenar la atención de solicitudes internas: que cada ticket llegue al departamento y al equipo correcto, se asigne según la estructura organizacional y tenga seguimiento hasta su resolución.',
    features: [
      'Multiempresa: cada empresa con sus departamentos, equipos de trabajo, responsables y jerarquía de supervisión.',
      'Catálogo de solicitudes con constructor de formularios dinámicos (18 tipos de campo) y versiones inmutables.',
      'Tickets con folio único, adjuntos privados, "Mis tickets" y bandeja por departamento.',
      'Asignación: tomar, asignar, reasignar y devolver tickets; vista de equipo con carga de trabajo y asignación en lote.',
      'Seguimiento con conversación, notas internas, esperas, registro de trabajo, resolución, cierre y reapertura.',
      'Proceso programado para SLA, notificaciones, correos y cierre automático.',
      'Seguridad: sesiones en servidor con cookie HttpOnly, RBAC por permisos, validación con Zod y bloqueo por fuerza bruta.',
      'Despliegue con Docker Compose (Nginx, Node.js y MySQL) y pruebas de integración.',
    ],
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'Zod', 'Docker'],
    cover: null,
    video: null,
    screenshots: [],
    evidence: [],
    demoUrl: null,
    repoUrl: 'https://github.com/Isaacma2116/TicketDesk',
  },
]
