import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Tv, MessageCircle, Mail, MapPin } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-3 cursor-pointer" aria-label={`${brand.name} — início`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-[#131C2E] ring-1 ring-[#2E7DF6]/40 shadow-[0_0_18px_-4px_#2E7DF6]">
        <Tv className="h-5 w-5 text-[#2E7DF6]" strokeWidth={2} />
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#18C29C] ring-2 ring-[#0B1220]" />
      </span>
      <span className="leading-none">
        <span className="block font-space text-[15px] font-bold tracking-tight text-[#E8EEF7]">
          Reparação TV <span className="text-[#2E7DF6]">Lisboa</span>
        </span>
        <span className="mt-1 block font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#93A4BC]">
          Assistência Técnica
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
      'after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[#2E7DF6] after:transition-all after:duration-200',
      isActive ? 'text-[#E8EEF7] after:w-full' : 'text-[#93A4BC] hover:text-[#E8EEF7] after:w-0 hover:after:w-full',
    )

  return (
    <div className="min-h-screen bg-[#0B1220] font-sans text-[#E8EEF7]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-white/[0.06] bg-[#0B1220]/85 py-3 shadow-lg shadow-black/30 backdrop-blur-md'
            : 'py-5',
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
              className="group inline-flex items-center gap-2 rounded-lg bg-[#2E7DF6] px-5 py-2.5 font-sans text-sm font-bold text-white shadow-[0_0_22px_-6px_#2E7DF6] transition-all duration-200 hover:bg-[#1f6fe8] hover:shadow-[0_0_28px_-4px_#2E7DF6] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> {brand.phoneDisplay}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-1 text-[#E8EEF7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7DF6] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#131C2E] p-4 shadow-2xl shadow-black/50 md:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 font-sans text-base font-semibold transition-colors cursor-pointer',
                      isActive ? 'bg-[#2E7DF6]/15 text-[#2E7DF6]' : 'text-[#93A4BC] hover:text-[#E8EEF7]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2E7DF6] px-4 py-3 font-sans text-base font-bold text-white cursor-pointer"
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
      <footer className="border-t border-white/[0.06] bg-[#0B1220] text-[#93A4BC]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#131C2E] ring-1 ring-[#2E7DF6]/40">
                <Tv className="h-5 w-5 text-[#2E7DF6]" strokeWidth={2} />
              </span>
              <span className="font-space text-[15px] font-bold text-[#E8EEF7]">
                Reparação TV <span className="text-[#2E7DF6]">Lisboa</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{brand.tagline}</p>
            <p className="mt-3 text-xs leading-relaxed text-[#6c7d96]">
              Assistência técnica especializada exclusivamente na reparação de televisores.
            </p>
          </div>

          <div>
            <h4 className="font-space text-sm font-bold uppercase tracking-wider text-[#E8EEF7]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#2E7DF6] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-space text-sm font-bold uppercase tracking-wider text-[#E8EEF7]">Contactos</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={brand.phoneHref} className="flex items-center gap-2 transition-colors hover:text-[#2E7DF6] cursor-pointer">
                  <Phone className="h-4 w-4 text-[#2E7DF6]" /> {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-[#18C29C] cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 text-[#18C29C]" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="flex items-center gap-2 break-all transition-colors hover:text-[#2E7DF6] cursor-pointer">
                  <Mail className="h-4 w-4 text-[#2E7DF6]" /> {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#93A4BC]" /> {brand.address}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-space text-sm font-bold uppercase tracking-wider text-[#E8EEF7]">Horário</h4>
            <p className="mt-4 text-sm">{brand.hours}</p>
            <p className="mt-1 text-sm text-[#6c7d96]">{brand.hoursWeekend}</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#18C29C]/40 px-4 py-2 text-sm font-semibold text-[#18C29C] transition-colors hover:bg-[#18C29C] hover:text-[#0B1220] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> Enviar mensagem
            </a>
          </div>
        </div>
        <div className="border-t border-white/[0.06]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#6c7d96] sm:flex-row">
            <p>© {brand.since}–2025 Reparação TV Lisboa. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#93A4BC]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
