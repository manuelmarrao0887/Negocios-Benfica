import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Calculator, Mail } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

// No genuine logo exists for this business (no live website / no logo asset found
// online), so we use a clean, professional text wordmark on a contrasting chip.
function Wordmark({ light = false }) {
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label={`${brand.full} — página inicial`}
      className="group inline-flex items-center gap-2.5 cursor-pointer"
    >
      <span
        className={cn(
          'grid h-9 w-9 place-items-center rounded-lg transition-transform duration-200 group-hover:scale-105',
          light ? 'bg-[#2563B0] text-white' : 'bg-[#14233B] text-white',
        )}
      >
        <Calculator className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-jakarta text-lg font-extrabold tracking-tight',
            light ? 'text-white' : 'text-[#14233B]',
          )}
        >
          Factiva
        </span>
        <span
          className={cn(
            'mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]',
            light ? 'text-[#9DC0E6]' : 'text-[#2563B0]',
          )}
        >
          Contabilidade &amp; Gestão
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
      isActive ? 'text-[#2563B0]' : 'text-[#3A4A63] hover:text-[#2563B0]',
    )

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-sans text-[#14233B]">
      {/* Header — hero is LIGHT, so nav stays dark and readable in both states */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#14233B]/10 bg-[#F4F7FB]/90 py-3 shadow-sm backdrop-blur-md'
            : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Wordmark />

          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {({ isActive }) => (
                  <span className="relative">
                    {n.label}
                    <span
                      className={cn(
                        'absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#2563B0] transition-all duration-300',
                        isActive ? 'w-full' : 'w-0',
                      )}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#2563B0] px-5 py-2.5 font-sans text-sm font-bold text-white transition-colors duration-200 hover:bg-[#1d4f8f] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F7FB]"
            >
              <Phone className="h-4 w-4" /> {brand.phoneDisplay}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md text-[#14233B] md:hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563B0]"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#14233B]/10 bg-white p-4 shadow-xl md:hidden">
            <nav className="flex flex-col" aria-label="Navegação principal">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 font-sans text-base font-semibold cursor-pointer',
                      isActive ? 'bg-[#2563B0]/10 text-[#2563B0]' : 'text-[#14233B] hover:bg-[#F4F7FB]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563B0] px-4 py-3 font-sans text-base font-bold text-white cursor-pointer"
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

      {/* Footer — the single dark band */}
      <footer className="bg-[#14233B] text-[#C6D3E6]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Wordmark light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#90A2BF]">
              Gabinete de contabilidade e gestão nas Avenidas Novas, em Lisboa. Ao serviço de empresas
              e particulares desde {brand.since}.
            </p>
          </div>

          <div>
            <h4 className="font-jakarta text-base font-bold text-white">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#3AA0E6] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-jakarta text-base font-bold text-white">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-[#3AA0E6] cursor-pointer">
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="inline-flex items-center gap-2 transition-colors hover:text-[#3AA0E6] cursor-pointer">
                  <Mail className="h-4 w-4" /> {brand.email}
                </a>
              </li>
              <li className="text-[#90A2BF]">{brand.addressShort}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-jakarta text-base font-bold text-white">Horário</h4>
            <p className="mt-4 text-sm text-[#90A2BF]">{brand.hours}</p>
            <p className="mt-1.5 text-sm text-[#90A2BF]">{brand.hoursNote}</p>
            <a
              href={brand.phoneHref}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#2563B0]/50 px-4 py-2 text-sm font-semibold text-[#9DC0E6] transition-colors hover:bg-[#2563B0] hover:text-white cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Falar connosco
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#7E91B0] sm:flex-row">
            <p>© {brand.since}–2025 {brand.full} · NIF {brand.nif}</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#C6D3E6]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
