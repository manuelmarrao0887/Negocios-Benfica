import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { Menu, X, Instagram, CalendarHeart } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

// Wordmark — bilingual editorial mark. "Double" in terracotta, "Space" in dark/light.
function Wordmark({ onLight }) {
  return (
    <NavLink
      to={siteLink(slug)}
      className="group flex items-center gap-3 cursor-pointer"
      aria-label="DoubleSpace — página inicial"
    >
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#C06A52] font-bricolage text-base font-bold text-[#F6F1EC] shadow-sm"
      >
        D
        <span className="absolute -right-1 -bottom-1 grid h-4 w-4 place-items-center rounded-full bg-[#A98DA0] font-bricolage text-[9px] font-bold text-[#1B1714] ring-2 ring-[#F6F1EC]">
          S
        </span>
      </span>
      <span className="leading-none">
        <span className={cn('block font-bricolage text-lg font-bold tracking-tight', onLight ? 'text-[#1B1714]' : 'text-[#F6F1EC]')}>
          Double<span className="text-[#C06A52]">Space</span>
        </span>
        <span className={cn('mt-0.5 block font-sans text-[9px] font-semibold uppercase tracking-[0.22em]', onLight ? 'text-[#6B625B]' : 'text-[#F6F1EC]/70')}>
          Nails · Cosmetology · Barber
        </span>
      </span>
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)
  // Over the dark hero we use light nav text; once scrolled the bar turns to warm
  // white so we switch to dark text. The mobile sheet is always on warm white.
  const onLight = scrolled

  const linkClass = ({ isActive }) =>
    cn(
      'relative font-sans text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer',
      isActive
        ? 'text-[#C06A52]'
        : onLight
          ? 'text-[#1B1714] hover:text-[#C06A52]'
          : 'text-[#F6F1EC] hover:text-white',
    )

  return (
    <div className="min-h-screen bg-[#F6F1EC] font-sans text-[#1B1714]">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#1B1714]/10 bg-[#F6F1EC]/90 py-3 backdrop-blur-md'
            : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Wordmark onLight={onLight} />

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da DoubleSpace"
              className={cn(
                'grid h-10 w-10 place-items-center rounded-full border transition-colors duration-200 cursor-pointer',
                onLight
                  ? 'border-[#1B1714]/15 text-[#1B1714] hover:border-[#C06A52] hover:text-[#C06A52]'
                  : 'border-white/30 text-[#F6F1EC] hover:border-white hover:bg-white/10',
              )}
            >
              <Instagram className="h-[18px] w-[18px]" />
            </a>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C06A52] px-5 py-2.5 font-sans text-sm font-bold text-[#F6F1EC] shadow-sm transition-colors duration-200 hover:bg-[#a85842] cursor-pointer"
            >
              <CalendarHeart className="h-4 w-4" /> Marcar
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'transition-colors md:hidden cursor-pointer',
              onLight ? 'text-[#1B1714]' : 'text-[#F6F1EC]',
            )}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#1B1714]/10 bg-[#F6F1EC] p-4 shadow-2xl md:hidden">
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
                      isActive ? 'bg-[#C06A52]/10 text-[#C06A52]' : 'text-[#1B1714] hover:bg-[#1B1714]/5',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#C06A52] px-4 py-3 font-sans text-base font-bold text-[#F6F1EC] cursor-pointer"
              >
                <CalendarHeart className="h-4 w-4" /> Marcar via WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="bg-[#1B1714] text-[#F6F1EC]/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="relative grid h-9 w-9 place-items-center rounded-full bg-[#C06A52] font-bricolage text-base font-bold text-[#F6F1EC]"
              >
                D
                <span className="absolute -right-1 -bottom-1 grid h-4 w-4 place-items-center rounded-full bg-[#A98DA0] font-bricolage text-[9px] font-bold text-[#1B1714] ring-2 ring-[#1B1714]">
                  S
                </span>
              </span>
              <span className="font-bricolage text-lg font-bold text-[#F6F1EC]">
                Double<span className="text-[#C06A52]">Space</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#F6F1EC]/60">{brand.tagline}</p>
          </div>

          <div>
            <h4 className="font-bricolage text-base font-bold text-[#F6F1EC]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#C06A52] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bricolage text-base font-bold text-[#F6F1EC]">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#C06A52] cursor-pointer">
                  {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#C06A52] cursor-pointer">
                  WhatsApp
                </a>
              </li>
              <li className="text-[#F6F1EC]/55">{brand.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bricolage text-base font-bold text-[#F6F1EC]">Segue-nos</h4>
            <p className="mt-4 text-sm text-[#F6F1EC]/55">{brand.hours}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#C06A52]/40 px-4 py-2 text-sm font-semibold text-[#C06A52] transition-colors hover:bg-[#C06A52] hover:text-[#F6F1EC] cursor-pointer"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
            <p className="mt-3 text-xs text-[#F6F1EC]/40">
              {brand.instagramHandle} · {brand.followers} seguidores
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#F6F1EC]/45 sm:flex-row">
            <p>© 2026 DoubleSpace — Nails · Cosmetology · Barber. Benfica, Lisboa.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#F6F1EC]/80">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
