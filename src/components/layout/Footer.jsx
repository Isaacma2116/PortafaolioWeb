import { profile } from '../../data/profile'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-sm text-slate-500">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p>Construido con React, Vite y Tailwind CSS.</p>
      </div>
    </footer>
  )
}
