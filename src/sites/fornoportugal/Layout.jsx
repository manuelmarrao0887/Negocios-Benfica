import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark({ tone = 'light' }) {
  // `tone` selects label colours for light surfaces vs the dark furnace header (top of hero).
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-3 cursor-pointer" aria-label="Fornoportugal — início">
      <img
        src="/logos/fornoportugal.png"
        alt="Fornoportugal logótipo"
        width="301"
        height="400"
        className="h-11 w-auto shrink-0"
      />
      <span
        className={cn(
          'hidden font-oswald text-[10px] font-semibold uppercase tracking-[0.28em] sm:block',
          tone === 'light' ? 'text-[#5A6175]' : 'text-[#9AA3BD]',
        )}
      >
        Refractários
        <br className="hidden lg:block" /> · Lda
      </span>
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  // Header is transparent over the dark hero at the top, then becomes a light bar once scrolled.
  const linkClass = ({ isActive }) =>
    cn(
      'relative font-oswald text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer',
      'after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-[#D11F2A] after:transition-all after:duration-300',
      scrolled
        ? isActive
          ? 'text-[#1B2540] after:w-full'
          : 'text-[#5A6175] hover:text-[#1B2540] after:w-0 hover:after:w-full'
        : isActive
          ? 'text-white after:w-full'
          : 'text-[#C7CDDD] hover:text-white after:w-0 hover:after:w-full',
    )

  return (
    <div className="min-h-screen bg-[#F7F5F1] font-sans text-[#1B2540]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#1F2D5E]/12 bg-[#F7F5F1]/95 py-3 shadow-lg shadow-[#1F2D5E]/10 backdrop-blur-md'
            : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark tone={scrolled ? 'light' : 'dark'} />

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
              className="group inline-flex items-center gap-2 rounded-md bg-[#D11F2A] px-5 py-2.5 font-oswald text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-[#1F2D5E] hover:shadow-[0_8px_22px_-8px_rgba(31,45,94,0.7)] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Orçamento
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn('cursor-pointer md:hidden', scrolled ? 'text-[#1B2540]' : 'text-white')}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-xl border border-[#1F2D5E]/12 bg-white p-4 shadow-2xl shadow-[#1F2D5E]/15 md:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-4 py-3 font-oswald text-base font-medium uppercase tracking-[0.12em] cursor-pointer',
                      isActive ? 'bg-[#D11F2A]/10 text-[#D11F2A]' : 'text-[#5A6175] hover:text-[#1B2540]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#D11F2A] px-4 py-3 font-oswald text-base font-semibold uppercase tracking-[0.08em] text-white cursor-pointer"
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

      {/* Footer — dark navy "furnace" anchor (the one retained dark surface besides the hero) */}
      <footer className="border-t border-[#1F2D5E]/40 bg-[#141B2E] text-[#9AA3BD]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center rounded-lg bg-white p-2 shadow-sm">
                <img
                  src="/logos/fornoportugal.png"
                  alt="Fornoportugal logótipo"
                  width="301"
                  height="400"
                  className="h-12 w-auto"
                />
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{brand.tagline}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#717a96]">{brand.full}</p>
          </div>

          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-[0.16em] text-white">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-white cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-[0.16em] text-white">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {brand.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="transition-colors hover:text-white cursor-pointer">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={brand.emailHref} className="transition-colors hover:text-white cursor-pointer">
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-[0.16em] text-white">Sede</h4>
            <p className="mt-4 text-sm leading-relaxed">{brand.address}</p>
            <p className="mt-3 text-sm">{brand.hours}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded border border-white/15 px-2.5 py-1 font-oswald text-[11px] font-medium uppercase tracking-[0.12em] text-[#C7CDDD]">
                ISO 9001
              </span>
              <span className="rounded border border-white/15 px-2.5 py-1 font-oswald text-[11px] font-medium uppercase tracking-[0.12em] text-[#C7CDDD]">
                ISO 45001
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#717a96] sm:flex-row">
            <p>© {brand.since}–2025 {brand.full} · Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#C7CDDD]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
