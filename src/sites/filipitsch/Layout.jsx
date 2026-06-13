import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label="Filipitsch — Terapia Activa"
      className="group inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-sm ring-1 ring-[#0E3B34]/10 transition-shadow duration-200 hover:shadow-md cursor-pointer"
    >
      <img src="/logos/filipitsch.jpg" alt="Filipitsch logótipo" className="h-9 w-auto" />
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    cn(
      'relative font-nunito text-sm font-semibold transition-colors duration-200 cursor-pointer',
      isActive ? 'text-[#CBA35C]' : 'text-[#33453f] hover:text-[#0E3B34]',
    )

  return (
    <div className="min-h-screen bg-[#FBF9F2] font-nunito text-[#1A2B27]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'border-b border-[#0E3B34]/10 bg-[#FBF9F2]/90 py-3 backdrop-blur-md' : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark />

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E3B34] px-5 py-2.5 font-nunito text-sm font-bold text-[#F4F0E4] transition-colors duration-200 hover:bg-[#0a2c27] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Marcar consulta
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#0E3B34] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#0E3B34]/10 bg-[#FBF9F2] p-4 shadow-xl md:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 font-nunito text-base font-semibold cursor-pointer',
                      isActive ? 'bg-[#0E3B34]/5 text-[#CBA35C]' : 'text-[#33453f]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E3B34] px-4 py-3 font-nunito text-base font-bold text-[#F4F0E4] cursor-pointer"
              >
                <Phone className="h-4 w-4" /> {brand.phoneDisplay}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0E3B34] text-[#cfe0d8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="inline-flex items-center rounded-xl bg-white px-3.5 py-2 shadow-sm ring-1 ring-white/15">
              <img src="/logos/filipitsch.jpg" alt="Filipitsch logótipo" className="h-10 w-auto" />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9fb8ac]">{brand.tagline}</p>
          </div>

          <div>
            <h4 className="font-fraunces text-base font-semibold text-[#F4F0E4]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink to={siteLink(slug, n.to)} end={n.to === ''} className="transition-colors hover:text-[#CBA35C] cursor-pointer">
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-fraunces text-base font-semibold text-[#F4F0E4]">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#CBA35C] cursor-pointer">
                  {brand.phoneDisplay}
                </a>
              </li>
              <li className="text-[#9fb8ac]">{brand.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-fraunces text-base font-semibold text-[#F4F0E4]">Horário</h4>
            <p className="mt-4 text-sm text-[#9fb8ac]">{brand.hours}</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#CBA35C]/40 px-4 py-2 text-sm font-semibold text-[#CBA35C] transition-colors hover:bg-[#CBA35C] hover:text-[#0E3B34] cursor-pointer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#7f988c] sm:flex-row">
            <p>© {brand.since}–2025 Filipitsch — Terapia Activa. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#cfe0d8]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
