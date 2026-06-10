import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Wind, MapPin, Mail, Clock } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav, badges } from './data.jsx'

function Brandmark({ solid }) {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-2.5 cursor-pointer">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[#2C7BE5] to-[#5BC8E8] text-white shadow-sm shadow-[#0A2E5C]/20">
        <Wind className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            'block font-archivo text-lg font-bold tracking-tight transition-colors duration-300',
            solid ? 'text-[#0A2E5C]' : 'text-[#EAF1FB]',
          )}
        >
          Nipolândia
        </span>
        <span
          className={cn(
            'mt-0.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300',
            solid ? 'text-[#5B7493]' : 'text-[#5BC8E8]',
          )}
        >
          Climatização · Ventilação
        </span>
      </span>
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    cn(
      'relative font-sans text-sm font-semibold transition-colors duration-200 cursor-pointer',
      isActive
        ? 'text-[#2C7BE5]'
        : scrolled
          ? 'text-[#5B7493] hover:text-[#0A2E5C]'
          : 'text-[#EAF1FB]/85 hover:text-white',
    )

  return (
    <div className="min-h-screen bg-[#F2F6FC] font-sans text-[#0A2E5C]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#0A2E5C]/10 bg-[#F2F6FC]/90 py-3 shadow-sm backdrop-blur-md'
            : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark solid={scrolled} />

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
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-sans text-sm font-bold transition-all duration-200 cursor-pointer',
                scrolled
                  ? 'bg-[#2C7BE5] text-white hover:bg-[#1f63c4]'
                  : 'bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-sm hover:bg-white/20',
              )}
            >
              <Phone className="h-4 w-4" /> {brand.phoneDisplay}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn('md:hidden cursor-pointer transition-colors', scrolled ? 'text-[#0A2E5C]' : 'text-[#EAF1FB]')}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#0A2E5C]/10 bg-white p-4 shadow-xl md:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 font-sans text-base font-semibold cursor-pointer',
                      isActive ? 'bg-[#2C7BE5]/10 text-[#2C7BE5]' : 'text-[#0A2E5C] hover:bg-[#F2F6FC]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2C7BE5] px-4 py-3 font-sans text-base font-bold text-white cursor-pointer"
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
      <footer className="bg-[#0A2E5C] text-[#c4d6ef]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[#2C7BE5] to-[#5BC8E8] text-white">
                <Wind className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-archivo text-lg font-bold text-[#EAF1FB]">Nipolândia</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8aa6cf]">
              {brand.full} Parceiro de confiança em climatização e ventilação desde 1977.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {badges.slice(0, 3).map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-[#9fbce6]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-archivo text-base font-bold text-[#EAF1FB]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#5BC8E8] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-archivo text-base font-bold text-[#EAF1FB]">Contactos</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={brand.phoneHref} className="flex items-center gap-2 transition-colors hover:text-[#5BC8E8] cursor-pointer">
                  <Phone className="h-4 w-4 text-[#5BC8E8]" /> {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="flex items-center gap-2 transition-colors hover:text-[#5BC8E8] cursor-pointer">
                  <Mail className="h-4 w-4 text-[#5BC8E8]" /> {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#8aa6cf]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#5BC8E8]" /> {brand.address}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-archivo text-base font-bold text-[#EAF1FB]">Horário</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#8aa6cf]">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#5BC8E8]" /> {brand.hours}
              </li>
              <li className="pl-6">{brand.hoursWeekend}</li>
              <li className="pl-6 text-[#5BC8E8]">{brand.coverage}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#7693bd] sm:flex-row">
            <p>© {brand.since}–2026 Nipolândia — Ar Condicionado, Ventilação, Lda. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#c4d6ef]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
