import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Mail, Clock } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav, badges } from './data.jsx'

function Brandmark() {
  // Real Nipolândia logo (dark wordmark + orange brandmark on white). Placed on a
  // white chip so it reads on both the light header and the deep-blue hero.
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-2.5 cursor-pointer">
      <span className="inline-flex rounded-lg bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-[#0A2E5C]/10">
        <img
          src="/logos/nipolandia.jpg"
          alt="Nipolândia logótipo"
          width="390"
          height="78"
          className="h-7 w-auto sm:h-8"
        />
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
      isActive ? 'text-[#2C7BE5]' : 'text-[#5B7493] hover:text-[#0A2E5C]',
    )

  return (
    <div className="min-h-screen bg-[#F2F6FC] font-sans text-[#0A2E5C]">
      {/* Header — light surface in both states; dark-on-light nav for AA contrast */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-300',
          scrolled
            ? 'border-[#0A2E5C]/10 bg-[#F2F6FC]/95 py-3 shadow-sm'
            : 'border-transparent bg-[#F2F6FC]/80 py-4',
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
              className="inline-flex items-center gap-2 rounded-lg bg-[#2C7BE5] px-5 py-2.5 font-sans text-sm font-bold text-white transition-all duration-200 hover:bg-[#1f63c4] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> {brand.phoneDisplay}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#0A2E5C] transition-colors md:hidden cursor-pointer"
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
            <div className="inline-flex rounded-lg bg-white px-3 py-2 shadow-sm">
              <img
                src="/logos/nipolandia.jpg"
                alt="Nipolândia logótipo"
                width="390"
                height="78"
                className="h-8 w-auto"
              />
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
                    className="transition-colors hover:text-[#FF9A3C] cursor-pointer"
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
                <a href={brand.phoneHref} className="flex items-center gap-2 transition-colors hover:text-[#FF9A3C] cursor-pointer">
                  <Phone className="h-4 w-4 text-[#FF9A3C]" /> {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="flex items-center gap-2 transition-colors hover:text-[#FF9A3C] cursor-pointer">
                  <Mail className="h-4 w-4 text-[#FF9A3C]" /> {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#8aa6cf]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF9A3C]" /> {brand.address}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-archivo text-base font-bold text-[#EAF1FB]">Horário</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#8aa6cf]">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#FF9A3C]" /> {brand.hours}
              </li>
              <li className="pl-6">{brand.hoursWeekend}</li>
              <li className="pl-6 text-[#FF9A3C]">{brand.coverage}</li>
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
