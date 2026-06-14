import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Instagram, MapPin, Clock, CalendarHeart, Star } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

// Real Art.Z wordmark (downloaded from artzhair.com — LOGO_ARTZ).
// Black ink on transparent → use on light surfaces. White variant → on the dark band.
function Wordmark({ onDark = false }) {
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label="Art.Z Hair & Experience — página inicial"
      className="group inline-flex items-center cursor-pointer"
    >
      <img
        src={onDark ? '/logos/artz-hair-light.png' : '/logos/artz-hair.png'}
        alt="Art.Z Hair & Experience"
        width="368"
        height="168"
        className="h-9 w-auto sm:h-10"
      />
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    cn(
      'relative font-jost text-sm font-medium uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer',
      'after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[#A8854E] after:transition-all after:duration-300',
      isActive
        ? 'text-[#A8854E] after:w-full'
        : 'text-[#4A413B] hover:text-[#A8854E] after:w-0 hover:after:w-full',
    )

  return (
    <div className="min-h-screen bg-[#F7F3EF] font-jost text-[#1A1614]">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#1A1614]/10 bg-[#F7F3EF]/90 py-3 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(26,22,20,0.4)]'
            : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Wordmark />

          <nav className="hidden items-center gap-10 md:flex">
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
              aria-label="Instagram da Art.Z Hair"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#1A1614]/15 text-[#1A1614] transition-colors duration-200 hover:border-[#A8854E] hover:text-[#A8854E] cursor-pointer"
            >
              <Instagram className="h-[18px] w-[18px]" />
            </a>
            <a
              href={brand.whatsappText}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1A1614] px-5 py-2.5 font-jost text-sm font-semibold tracking-wide text-[#F7F3EF] transition-colors duration-200 hover:bg-[#A8854E] cursor-pointer"
            >
              <CalendarHeart className="h-4 w-4" /> Marcar
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#1A1614] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#1A1614]/10 bg-[#F7F3EF] p-4 shadow-[0_24px_60px_-24px_rgba(26,22,20,0.4)] md:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 font-jost text-base font-medium uppercase tracking-wide cursor-pointer',
                      isActive ? 'bg-[#A8854E]/10 text-[#A8854E]' : 'text-[#2A231F] hover:bg-[#1A1614]/5',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.whatsappText}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A1614] px-4 py-3 font-jost text-base font-semibold text-[#F7F3EF] cursor-pointer"
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

      {/* ── Footer — the single dark editorial band ─────────────────── */}
      <footer className="border-t border-[#A8854E]/25 bg-[#1A1614] text-[#CDBFB3]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logos/artz-hair-light.png"
              alt="Art.Z Hair & Experience"
              width="368"
              height="168"
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#CDBFB3]">{brand.tagline}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#A8854E]/40 px-4 py-1.5 text-sm">
              <Star className="h-4 w-4 fill-[#A8854E] text-[#A8854E]" />
              <span className="font-semibold text-[#F2EBE2]">{brand.rating} ★</span>
              <span className="text-[#A89A8E]">· {brand.reviews} avaliações</span>
            </div>
          </div>

          <div>
            <h4 className="font-cormorant text-xl font-semibold text-[#F2EBE2]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#D8B57E] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cormorant text-xl font-semibold text-[#F2EBE2]">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#D8B57E] cursor-pointer">
                  {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="transition-colors hover:text-[#D8B57E] cursor-pointer">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D8B57E]" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-cormorant text-xl font-semibold text-[#F2EBE2]">Horário</h4>
            <p className="mt-4 flex items-start gap-2 text-sm">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#D8B57E]" />
              <span>{brand.hours}</span>
            </p>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D8B57E]/40 px-4 py-2 text-sm font-semibold text-[#D8B57E] transition-colors hover:bg-[#A8854E] hover:text-[#1A1614] hover:border-[#A8854E] cursor-pointer"
            >
              <Instagram className="h-4 w-4" /> {brand.instagramHandle}
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#A89A8E] sm:flex-row">
            <p>© {brand.since}–2026 Art.Z Hair & Experience · Lisboa. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#D8B57E]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
