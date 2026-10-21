import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Copy, Download, ExternalLink, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const to = encodeURIComponent(profile.email)
  const mailOptions = [
    { label: 'Abrir en Gmail', href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`, external: true },
    { label: 'Abrir en Outlook', href: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}`, external: true },
    { label: 'App de correo predeterminada', href: `mailto:${profile.email}` },
  ]

  // Cierra el menú al hacer clic fuera o al presionar Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section
      id="contacto"
      title="Contacto"
      intro="¿Tienes un proyecto o una vacante en desarrollo o infraestructura TI? Escríbeme."
      className="min-h-[70vh]"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal className="panel panel-hover flex flex-col gap-4 p-6">
          <span className="icon-tile icon-tile--neptune">
            <Mail className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-slate-400">Correo electrónico</h3>
            <a href={`mailto:${profile.email}`} className="link mt-1 inline-block break-all text-lg">
              {profile.email}
            </a>
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            <div ref={menuRef} className="relative">
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                className="btn btn-primary h-11 px-4 text-sm"
              >
                Enviar correo
                <ChevronDown className={`size-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {menuOpen && (
                <ul
                  role="menu"
                  className="absolute left-0 top-full z-20 mt-2 w-56 overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 p-1 shadow-xl backdrop-blur"
                >
                  {mailOptions.map((opt) => (
                    <li key={opt.label} role="none">
                      <a
                        role="menuitem"
                        href={opt.href}
                        target={opt.external ? '_blank' : undefined}
                        rel={opt.external ? 'noreferrer' : undefined}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                      >
                        {opt.label}
                        {opt.external && <ExternalLink className="ml-auto size-3.5 text-slate-400" aria-hidden="true" />}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button type="button" onClick={copyEmail} className="btn btn-ghost h-11 px-4 text-sm">
              {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
              {copied ? 'Copiado' : 'Copiar'}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Correo copiado al portapapeles' : ''}
            </span>
          </div>
        </Reveal>

        <Reveal delay={90} className="panel panel-hover flex flex-col gap-4 p-6">
          <span className="icon-tile icon-tile--neptune">
            <LinkedinIcon className="size-5" />
          </span>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-slate-400">LinkedIn</h3>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link mt-1 inline-block break-all text-lg">
              {profile.linkedinLabel}
            </a>
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary h-11 px-4 text-sm">
              Ver perfil
            </a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost h-11 px-4 text-sm">
                <GithubIcon className="size-4" /> GitHub
              </a>
            )}
          </div>
        </Reveal>
      </div>

      <Reveal delay={150} className="panel mt-4 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">Currículum vitae</h3>
          <p className="text-sm text-slate-400">Versión completa en PDF.</p>
        </div>
        <a href={profile.cvUrl} download={profile.cvFileName} className="btn btn-primary">
          <Download className="size-4" aria-hidden="true" /> Descargar CV
        </a>
      </Reveal>
    </Section>
  )
}
