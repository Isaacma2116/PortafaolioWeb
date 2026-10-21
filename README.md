# Portafolio — José Isaac Macías Delgado

Portafolio profesional con navegación mediante un sistema solar interactivo (React + Vite + Tailwind CSS).

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # compilación de producción en dist/
npm run preview   # servir dist/ localmente
npm run lint      # análisis estático (oxlint)
```

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Nombre, resumen, correo, LinkedIn, GitHub, ruta del CV | `src/data/profile.js` |
| Experiencia laboral | `src/data/experience.js` |
| Proyectos (detalle, capturas, enlaces) | `src/data/projects.js` |
| Habilidades | `src/data/skills.js` |
| Planetas ↔ secciones, órbitas y velocidades | `src/data/planets.js` |

## Archivos estáticos

- **CV:** `public/cv/CV_Jose_Isaac_Macias_Delgado.pdf`
- **Capturas de proyectos:** `public/projects/<id-del-proyecto>/` (p. ej. `public/projects/checkbus/01.webp`),
  y regístralas en `cover` / `screenshots` dentro de `src/data/projects.js` como `'/projects/checkbus/01.webp'`.
# PortafaolioWeb
