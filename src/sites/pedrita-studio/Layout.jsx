import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { Menu, X, Instagram, ArrowUpRight } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { GraoStrip } from './components.jsx'
import { slug, brand, nav } from './data.jsx'

// A tiny 2×2 azulejo mark — a miniature of the "Grão" motif.
function Mark({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={cn('grid h-7 w-7 shrink-0 grid-cols-2 grid-rows-2 gap-[2px]', className)}
    >
      <span className="bg-[#2B5BD7]" />
      <span className="bg-[#E0B23B]" />
      <span className="bg-[#15181D]" />
      <span className="bg-[#2B5BD7]" />
    </span>
  )
}

function Wordmark() {
  return (
    <NavLink
      to={siteLink(slug)}
      className="group flex items-center gap-3 cursor-pointer"
      aria-label="Pedrita — página inicial"
    >
      <Mark className="transition-transform duration-500 group-hover:rotate-90" />
      <span className="font-syne text-xl font-bold uppercase leading-none tracking-[0.12em] text-[#15181D]">
        Pedrita
      </span>
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    cn(
      'relative font-syne text-[13px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 cursor-pointer',
      'after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-[#2B5BD7] after:transition-all after:duration-300',
      isActive ? 'text-[#15181D] after:w-full' : 'text-[#5B6068] hover:text-[#15181D] after:w-0 hover:after:w-full',
    )

  return (
    <div className="min-h-screen bg-[#F1EEE6] font-sans text-[#15181D] selection:bg-[#2B5BD7] selection:text-[#F1EEE6]">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#15181D]/10 bg-[#F1EEE6]/85 py-3.5 backdrop-blur-md'
            : 'border-b border-transparent py-5',
        )}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 lg:px-10">
          <Wordmark />

          <nav className="hidden items-center gap-10 md:flex" aria-label="Navegação principal">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border border-[#15181D] px-4 py-2 font-syne text-[12px] font-bold uppercase tracking-[0.16em] text-[#15181D] transition-colors duration-200 hover:bg-[#15181D] hover:text-[#F1EEE6] cursor-pointer"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#15181D] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-[#15181D]/10 bg-[#F1EEE6] md:hidden">
            <nav className="mx-auto flex max-w-[88rem] flex-col px-6 py-3" aria-label="Navegação">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'border-b border-[#15181D]/10 py-3.5 font-syne text-base font-bold uppercase tracking-[0.14em] last:border-0 cursor-pointer',
                      isActive ? 'text-[#2B5BD7]' : 'text-[#15181D]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-[#15181D] px-4 py-3.5 font-syne text-sm font-bold uppercase tracking-[0.14em] text-[#F1EEE6] cursor-pointer"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" /> {brand.instagramHandle}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="bg-[#15181D] text-[#F1EEE6]">
        <GraoStrip count={64} className="w-full justify-center overflow-hidden py-0 [&>span]:h-2 [&>span]:w-2 sm:[&>span]:h-2.5 sm:[&>span]:w-2.5" />
        <div className="mx-auto max-w-[88rem] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <Mark />
                <span className="font-syne text-2xl font-bold uppercase tracking-[0.12em]">Pedrita</span>
              </div>
              <p className="mt-6 max-w-sm text-pretty text-[15px] leading-relaxed text-[#9aa0a8]">
                {brand.tagline} Reinventamos técnicas e materiais portugueses — sobretudo o azulejo
                industrial descontinuado.
              </p>
            </div>

            <div>
              <h4 className="font-syne text-xs font-bold uppercase tracking-[0.2em] text-[#9aa0a8]">
                Navegação
              </h4>
              <ul className="mt-5 space-y-3 text-[15px]">
                {nav.map((n) => (
                  <li key={n.to}>
                    <NavLink
                      to={siteLink(slug, n.to)}
                      end={n.to === ''}
                      className="text-[#cfd2d6] transition-colors hover:text-[#E0B23B] cursor-pointer"
                    >
                      {n.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-syne text-xs font-bold uppercase tracking-[0.2em] text-[#9aa0a8]">
                Estúdio
              </h4>
              <address className="mt-5 space-y-3 text-[15px] not-italic text-[#cfd2d6]">
                <p className="leading-relaxed">{brand.address}</p>
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-1.5 text-[#E0B23B] transition-colors hover:text-[#F1EEE6] cursor-pointer"
                >
                  Ver no mapa <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#cfd2d6] transition-colors hover:text-[#E0B23B] cursor-pointer"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" /> {brand.instagramHandle}
                </a>
              </address>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 text-xs text-[#7d828a] sm:flex-row sm:items-center">
            <p>© {brand.since}–2025 Pedrita · {brand.domain}</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#cfd2d6]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
