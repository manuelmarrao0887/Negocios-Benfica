import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-3 cursor-pointer">
      <span className="relative grid h-10 w-10 place-items-center rounded-md bg-[#10161D] font-plexmono text-base font-semibold text-[#F4F6F9] ring-1 ring-[#10161D]/10">
        RD
        <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-sm bg-[#1A56DB] transition-colors duration-200 group-hover:bg-[#2FA39B]" />
      </span>
      <span className="leading-none">
        <span className="block font-plex text-base font-bold tracking-tight text-[#10161D]">
          Rui Dinis
        </span>
        <span className="mt-0.5 block font-plexmono text-[10px] font-medium uppercase tracking-[0.2em] text-[#4C5A68]">
          Eletrónica Industrial
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
      'relative font-plex text-sm font-semibold transition-colors duration-200 cursor-pointer',
      isActive ? 'text-[#1A56DB]' : 'text-[#3A4756] hover:text-[#10161D]',
    )

  return (
    <div className="min-h-screen bg-[#F4F6F9] font-plex text-[#10161D]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#10161D]/10 bg-[#F4F6F9]/90 py-3 backdrop-blur-md'
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
                        'absolute -bottom-1.5 left-0 h-0.5 bg-[#1A56DB] transition-all duration-200',
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
              className="inline-flex items-center gap-2 rounded-md bg-[#10161D] px-5 py-2.5 font-plex text-sm font-bold text-[#F4F6F9] transition-colors duration-200 hover:bg-[#1A56DB] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Pedir assistência
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#10161D] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-lg border border-[#10161D]/10 bg-white p-4 shadow-xl md:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-md px-4 py-3 font-plex text-base font-semibold cursor-pointer',
                      isActive ? 'bg-[#1A56DB]/10 text-[#1A56DB]' : 'text-[#3A4756]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#10161D] px-4 py-3 font-plex text-base font-bold text-[#F4F6F9] cursor-pointer"
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
      <footer className="bg-[#10161D] text-[#9DAAB8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-[#1A56DB] font-plexmono text-base font-semibold text-white">
                RD
              </span>
              <span className="font-plex text-base font-bold text-white">Rui Dinis, Lda.</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#7E8C9B]">{brand.tagline}</p>
            <p className="mt-3 font-plexmono text-[11px] uppercase tracking-[0.18em] text-[#5C6A79]">
              EST. {brand.since} · Lisboa
            </p>
          </div>

          <div>
            <h4 className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#2FA39B] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Contactos
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#2FA39B] cursor-pointer">
                  Tel. {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="transition-colors hover:text-[#2FA39B] cursor-pointer">
                  {brand.email}
                </a>
              </li>
              <li className="text-[#7E8C9B]">{brand.addressShort}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Horário
            </h4>
            <p className="mt-4 text-sm text-[#7E8C9B]">{brand.hours}</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#2FA39B]/40 px-4 py-2 text-sm font-semibold text-[#2FA39B] transition-colors hover:bg-[#2FA39B] hover:text-[#10161D] cursor-pointer"
            >
              WhatsApp {brand.mobileDisplay}
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#5C6A79] sm:flex-row">
            <p>© {brand.since}–2025 {brand.full}. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#9DAAB8]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
