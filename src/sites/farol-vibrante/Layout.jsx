import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight, MapPin } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

// Structural "F" beacon mark — an I-beam glyph with an amber light on top.
function BeaconMark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <rect x="6" y="9" width="20" height="3" rx="0.5" fill="currentColor" />
      <rect x="6" y="20" width="20" height="3" rx="0.5" fill="currentColor" />
      <rect x="14" y="9" width="4" height="14" fill="currentColor" />
      <circle cx="16" cy="4.5" r="2.5" fill="#F2A33C" />
      <path d="M16 4.5 L9 1 M16 4.5 L23 1" stroke="#F2A33C" strokeWidth="1.1" strokeLinecap="round" opacity="0.8" />
    </svg>
  )
}

function Brandmark({ onDark }) {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-2.5 cursor-pointer">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#F2A33C] ring-1 ring-[#F2A33C]/40 transition-transform duration-200 group-hover:scale-[1.04]">
        <BeaconMark className="h-6 w-6 text-[#14181D]" />
      </span>
      <span className="leading-none">
        <span className={cn('block font-sora text-lg font-bold tracking-tight', onDark ? 'text-[#ECEFF2]' : 'text-[#14181D]')}>
          Farol Vibrante
        </span>
        <span className={cn('mt-0.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.22em]', onDark ? 'text-[#7C8B9C]' : 'text-[#7C8B9C]')}>
          Construções LSF
        </span>
      </span>
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)
  // Header sits over a DARK hero. At top: light nav text. On scroll: solid surface, still light text.
  const onDark = true

  const linkClass = ({ isActive }) =>
    cn(
      'relative font-sans text-sm font-semibold transition-colors duration-200 cursor-pointer',
      isActive ? 'text-[#F2A33C]' : 'text-[#C7D0DA] hover:text-[#ECEFF2]',
    )

  return (
    <div className="min-h-screen bg-[#14181D] font-sans text-[#ECEFF2]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-white/10 bg-[#14181D]/92 py-3 shadow-lg shadow-black/30 backdrop-blur-md'
            : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark onDark={onDark} />

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {({ isActive }) => (
                  <span className="relative inline-block py-1">
                    {n.label}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-0.5 bg-[#F2A33C] transition-all duration-300',
                        isActive ? 'w-full' : 'w-0',
                      )}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to={siteLink(slug, 'contacto')}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#F2A33C] px-5 py-2.5 font-sans text-sm font-bold text-[#14181D] transition-colors duration-200 hover:bg-[#ffb651] cursor-pointer"
            >
              Pedir orçamento
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#ECEFF2] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#1C2128] p-4 shadow-2xl shadow-black/40 md:hidden">
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
                      isActive ? 'bg-[#F2A33C]/10 text-[#F2A33C]' : 'text-[#C7D0DA] hover:bg-white/5',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to={siteLink(slug, 'contacto')}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F2A33C] px-4 py-3 font-sans text-base font-bold text-[#14181D] cursor-pointer"
              >
                Pedir orçamento <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0F1318] text-[#9AA7B4]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#F2A33C]">
                <BeaconMark className="h-6 w-6 text-[#14181D]" />
              </span>
              <span className="font-sora text-lg font-bold text-[#ECEFF2]">Farol Vibrante</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#7C8B9C]">{brand.intro}</p>
          </div>

          <div>
            <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-[#ECEFF2]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink to={siteLink(slug, n.to)} end={n.to === ''} className="transition-colors hover:text-[#F2A33C] cursor-pointer">
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-[#ECEFF2]">Onde estamos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-start gap-2 text-[#7C8B9C]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F2A33C]" /> {brand.address}
              </li>
              <li className="text-[#7C8B9C]">{brand.domain}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-[#ECEFF2]">Orçamentos</h4>
            <p className="mt-4 text-sm leading-relaxed text-[#7C8B9C]">
              Conte-nos o seu projeto e damos-lhe orientação técnica em Light Steel Framing.
            </p>
            <Link
              to={siteLink(slug, 'contacto')}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#F2A33C]/40 px-4 py-2 text-sm font-bold text-[#F2A33C] transition-colors hover:bg-[#F2A33C] hover:text-[#14181D] cursor-pointer"
            >
              Pedir orçamento <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#5e6b78] sm:flex-row">
            <p>© 2025 Farol Vibrante — Construções LSF. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#9AA7B4]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
