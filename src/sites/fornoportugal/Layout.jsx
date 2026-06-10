import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Flame } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-3 cursor-pointer" aria-label="Fornoportugal — início">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-md bg-gradient-to-br from-[#E5562A] to-[#E8A33D] shadow-[0_0_18px_-2px_rgba(229,86,42,0.7)]">
        <Flame className="h-5 w-5 text-[#17110D]" strokeWidth={2.4} />
      </span>
      <span className="leading-none">
        <span className="block font-oswald text-lg font-bold uppercase tracking-[0.16em] text-[#F3EAE2]">
          Forno<span className="text-[#E5562A]">portugal</span>
        </span>
        <span className="mt-1 block font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B59E90]">
          Refractários · Lda
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
      'relative font-oswald text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer',
      'after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-[#E5562A] after:transition-all after:duration-300',
      isActive
        ? 'text-[#F3EAE2] after:w-full'
        : 'text-[#B59E90] hover:text-[#F3EAE2] after:w-0 hover:after:w-full',
    )

  return (
    <div className="min-h-screen bg-[#17110D] font-sans text-[#F3EAE2]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-white/10 bg-[#17110D]/95 py-3 shadow-lg shadow-black/40 backdrop-blur-md'
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
              className="group inline-flex items-center gap-2 rounded-md bg-[#E5562A] px-5 py-2.5 font-oswald text-sm font-semibold uppercase tracking-[0.08em] text-[#17110D] transition-all duration-200 hover:bg-[#E8A33D] hover:shadow-[0_0_22px_-4px_rgba(232,163,61,0.8)] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Orçamento
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#F3EAE2] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-xl border border-white/10 bg-[#211814] p-4 shadow-2xl shadow-black/50 md:hidden">
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
                      isActive ? 'bg-[#E5562A]/15 text-[#E5562A]' : 'text-[#B59E90] hover:text-[#F3EAE2]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#E5562A] px-4 py-3 font-oswald text-base font-semibold uppercase tracking-[0.08em] text-[#17110D] cursor-pointer"
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
      <footer className="border-t border-white/10 bg-[#211814] text-[#B59E90]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-[#E5562A] to-[#E8A33D]">
                <Flame className="h-5 w-5 text-[#17110D]" strokeWidth={2.4} />
              </span>
              <span className="font-oswald text-lg font-bold uppercase tracking-[0.16em] text-[#F3EAE2]">
                Forno<span className="text-[#E5562A]">portugal</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{brand.tagline}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#6f5d52]">{brand.full}</p>
          </div>

          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-[0.16em] text-[#F3EAE2]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#E5562A] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-[0.16em] text-[#F3EAE2]">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {brand.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="transition-colors hover:text-[#E5562A] cursor-pointer">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={brand.emailHref} className="transition-colors hover:text-[#E5562A] cursor-pointer">
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-[0.16em] text-[#F3EAE2]">Sede</h4>
            <p className="mt-4 text-sm leading-relaxed">{brand.address}</p>
            <p className="mt-3 text-sm">{brand.hours}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded border border-white/10 px-2.5 py-1 font-oswald text-[11px] font-medium uppercase tracking-[0.12em] text-[#E8A33D]">
                ISO 9001
              </span>
              <span className="rounded border border-white/10 px-2.5 py-1 font-oswald text-[11px] font-medium uppercase tracking-[0.12em] text-[#E8A33D]">
                ISO 45001
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#6f5d52] sm:flex-row">
            <p>© {brand.since}–2025 {brand.full} · Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#B59E90]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
