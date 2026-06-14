import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label="Clínica das Avenidas — Dr. Rui Delfim, página inicial"
      className="group inline-flex items-center rounded-2xl bg-white px-3.5 py-2 shadow-sm ring-1 ring-[#102438]/10 transition-shadow duration-200 hover:shadow-md cursor-pointer"
    >
      <img
        src="/logos/clinica-das-avenidas.png"
        alt="Clínica das Avenidas — Dr. Rui Delfim"
        className="h-8 w-auto sm:h-9"
      />
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    cn(
      'relative font-sans text-sm font-semibold transition-colors duration-200 cursor-pointer',
      isActive ? 'text-[#11707A]' : 'text-[#33485B] hover:text-[#11707A]',
    )

  return (
    <div className="min-h-screen bg-[#F2F6FC] font-sans text-[#102438]">
      {/* Header — hero is LIGHT, so nav uses dark text and stays readable in both states */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#102438]/10 bg-[#F2F6FC]/90 py-3 backdrop-blur-md'
            : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark />

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {({ isActive }) => (
                  <span className="relative">
                    {n.label}
                    <span
                      className={cn(
                        'absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#1F9A9E] transition-all duration-300',
                        isActive ? 'w-full' : 'w-0',
                      )}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 font-sans text-sm font-bold text-[#11707A] transition-colors hover:text-[#0E2A33] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> {brand.phoneDisplay}
            </a>
            <NavLink
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#11707A] px-5 py-2.5 font-sans text-sm font-bold text-white shadow-sm shadow-[#11707A]/20 transition-colors duration-200 hover:bg-[#0E5A62] cursor-pointer"
            >
              Marcar consulta
            </NavLink>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#102438] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#102438]/10 bg-white p-4 shadow-xl md:hidden">
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
                      isActive ? 'bg-[#1F9A9E]/10 text-[#11707A]' : 'text-[#33485B] hover:bg-[#F2F6FC]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#11707A] px-4 py-3 font-sans text-base font-bold text-white cursor-pointer"
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
      <footer className="bg-[#0E2A33] text-[#b9cdd6]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="inline-flex items-center rounded-2xl bg-white px-3.5 py-2 shadow-sm ring-1 ring-white/15">
              <img
                src="/logos/clinica-das-avenidas.png"
                alt="Clínica das Avenidas — Dr. Rui Delfim"
                className="h-9 w-auto"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8aa6b1]">
              {brand.tagline} Todas as especialidades de medicina dentária, no centro de Lisboa.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#6f8c98]">
              {brand.omd}
            </p>
          </div>

          <div>
            <h4 className="font-outfit text-base font-semibold text-white">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#36B0A6] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-base font-semibold text-white">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-[#36B0A6] cursor-pointer">
                  <Phone className="h-4 w-4 shrink-0 text-[#36B0A6]" /> {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#36B0A6] cursor-pointer">
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#36B0A6]" /> {brand.mobileDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="inline-flex items-center gap-2 break-all transition-colors hover:text-[#36B0A6] cursor-pointer">
                  <Mail className="h-4 w-4 shrink-0 text-[#36B0A6]" /> {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#8aa6b1]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#36B0A6]" /> {brand.addressShort}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-base font-semibold text-white">Horário</h4>
            <p className="mt-4 flex items-start gap-2 text-sm text-[#8aa6b1]">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#36B0A6]" /> {brand.hours}
            </p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#36B0A6]/40 px-4 py-2 text-sm font-semibold text-[#36B0A6] transition-colors hover:bg-[#36B0A6] hover:text-[#0E2A33] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> Falar connosco
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#6f8c98] sm:flex-row">
            <p>© {new Date().getFullYear()} Clínica das Avenidas — Dr. Rui Delfim. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#b9cdd6]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
