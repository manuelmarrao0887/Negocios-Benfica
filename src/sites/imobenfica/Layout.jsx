import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark({ compact }) {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-3 cursor-pointer">
      <span className="grid h-10 w-10 place-items-center rounded-md border border-[#B7892E] bg-[#14233B] font-playfair text-lg font-semibold text-[#B7892E]">
        IB
      </span>
      <span className="leading-none">
        <span className="font-playfair text-xl font-semibold tracking-tight text-[#14233B]">
          ImoBenfica
        </span>
        <span className="mt-1 block font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B7892E]">
          {compact ? brand.ami : brand.signature}
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
      'relative font-sans text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer',
      'after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[#B7892E] after:transition-all after:duration-300',
      isActive
        ? 'text-[#14233B] after:w-full'
        : 'text-[#5A6577] hover:text-[#14233B] after:w-0 hover:after:w-full',
    )

  return (
    <div className="min-h-screen bg-[#F6F3EC] font-sans text-[#14233B]">
      {/* Top utility bar */}
      <div className="hidden border-b border-[#14233B]/10 bg-[#14233B] text-[#E8E2D4] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="flex items-center gap-2 text-[#cdd4df]">
            <MapPin className="h-3.5 w-3.5 text-[#B7892E]" /> {brand.address}
          </span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2 text-[#cdd4df]">
              <Clock className="h-3.5 w-3.5 text-[#B7892E]" /> {brand.hours}
            </span>
            <a href={brand.phoneHref} className="flex items-center gap-2 font-semibold text-[#E8E2D4] transition-colors hover:text-[#B7892E] cursor-pointer">
              <Phone className="h-3.5 w-3.5 text-[#B7892E]" /> {brand.phoneDisplay}
            </a>
          </span>
        </div>
      </div>

      {/* Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#14233B]/10 bg-[#F6F3EC]/95 py-3 shadow-sm backdrop-blur-md'
            : 'bg-[#F6F3EC]/80 py-4 backdrop-blur-sm',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark />

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <NavLink
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-md bg-[#B7892E] px-5 py-2.5 font-sans text-sm font-bold text-[#14233B] shadow-sm transition-all duration-200 hover:bg-[#a2792a] hover:shadow-md cursor-pointer"
            >
              Pedir avaliação
            </NavLink>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#14233B] lg:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-xl border border-[#14233B]/10 bg-[#FFFFFF] p-4 shadow-xl lg:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-4 py-3 font-sans text-base font-semibold cursor-pointer',
                      isActive ? 'bg-[#14233B]/5 text-[#B7892E]' : 'text-[#14233B]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#B7892E] px-4 py-3 font-sans text-base font-bold text-[#14233B] cursor-pointer"
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
      <footer className="bg-[#14233B] text-[#cdd4df]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-[#B7892E] font-playfair text-lg font-semibold text-[#B7892E]">
                IB
              </span>
              <span className="font-playfair text-xl font-semibold text-[#F6F3EC]">
                ImoBenfica
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B7892E]">
                  {brand.signature}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#9aa6b6]">{brand.tagline}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B7892E]">
              {brand.ami}
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-base font-semibold text-[#F6F3EC]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#B7892E] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-base font-semibold text-[#F6F3EC]">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#B7892E] cursor-pointer">
                  {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.landlineHref} className="transition-colors hover:text-[#B7892E] cursor-pointer">
                  {brand.landlineDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="transition-colors hover:text-[#B7892E] cursor-pointer">
                  {brand.email}
                </a>
              </li>
              <li className="text-[#9aa6b6]">{brand.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-base font-semibold text-[#F6F3EC]">Horário</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#9aa6b6]">
              {brand.hoursLines.map((h) => (
                <li key={h.day} className="flex flex-col">
                  <span className="font-semibold text-[#cdd4df]">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-[#B7892E]/50 px-4 py-2 text-sm font-semibold text-[#B7892E] transition-colors hover:bg-[#B7892E] hover:text-[#14233B] cursor-pointer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#7c889a] sm:flex-row">
            <p>© {brand.since}–2025 ImoBenfica by Marta Pereira. Todos os direitos reservados · {brand.ami}.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#cdd4df]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
