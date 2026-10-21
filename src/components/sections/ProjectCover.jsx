import { icons } from '../ui/icons'

// Portada: usa la imagen real si existe; si no, una ilustración generada con el icono del proyecto.
export default function ProjectCover({ project, className = '' }) {
  if (project.cover) {
    return (
      <img
        src={project.cover}
        alt={`Captura de ${project.title}`}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }
  const Icon = icons[project.icon]
  return (
    <div className={`project-illustration bg-gradient-to-br ${project.accent} ${className}`} aria-hidden="true">
      <span className="project-orbit" />
      <span className="project-orbit project-orbit--2" />
      <span className="project-core">{Icon && <Icon className="size-7" strokeWidth={1.6} />}</span>
    </div>
  )
}
