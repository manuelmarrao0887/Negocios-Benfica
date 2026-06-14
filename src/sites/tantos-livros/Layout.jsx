import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Clock, Instagram, ArrowUpRight, Mail } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Wordmark({ className = '' }) {
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label={`${brand.full} — página inicial`}
      className={cn('group inline-flex items-center cursor-pointer', className)}
    >
      <img
        src="/logos/tantos-livros.png"
        alt="Tantos Livros, Livreiros"
        className="h-7 w-auto sm:h-8"
      />
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    cn(
      'relative font-sans text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer',
      'after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-[#A4471F] after:transition-all after:duration-300',
      isActive
        ? 'text-[#2A2018] after:w-full'
        : 'text-[#6B5D4F] hover:text-[#2A2018] after:w-0 hover:after:w-full',
    )

  return (
    <div className="min-h-screen bg-[#F6F1E8] font-sans text-[#2A2018] selection:bg-[#A4471F] selection:text-[#F6F1E8]">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#2A2018]/10 bg-[#F6F1E8]/90 py-3 backdrop-blur-md'
            : 'border-b border-transparent py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Wordmark />

          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={brand.phoneHref}
              className="group inline-flex items-center gap-2 rounded-full bg-[#A4471F] px-5 py-2.5 font-sans text-sm font-semibold text-[#FBF7F0] transition-colors duration-200 hover:bg-[#8E3D1A] cursor-pointer"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Falar connosco
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#2A2018] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#2A2018]/10 bg-[#FBF7F0] p-4 shadow-xl md:hidden">
            <nav className="flex flex-col" aria-label="Navegação">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 font-sans text-base font-semibold cursor-pointer',
                      isActive ? 'bg-[#A4471F]/10 text-[#A4471F]' : 'text-[#3C3328]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#A4471F] px-4 py-3 font-sans text-base font-bold text-[#FBF7F0] cursor-pointer"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> {brand.phoneDisplay}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="bg-[#241B14] text-[#C9B8A6]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="inline-flex rounded-2xl bg-[#FBF7F0] px-4 py-3 shadow-sm ring-1 ring-black/5">
              <img
                src="/logos/tantos-livros-footer.png"
                alt="Tantos Livros, Livreiros"
                className="h-20 w-auto"
              />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#9C8C7A]">
              {brand.tagline} {brand.parede}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Tantos Livros"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[#C9B8A6] transition-colors hover:border-[#D8B24A] hover:text-[#D8B24A] cursor-pointer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={brand.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook da Tantos Livros"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[#C9B8A6] transition-colors hover:border-[#D8B24A] hover:text-[#D8B24A] cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M14 9h3l.4-3H14V4.2c0-.8.3-1.3 1.5-1.3H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.2V6H7.5v3h2.8v9H14V9z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-fraunces text-base font-semibold text-[#FBF7F0]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="text-[#C9B8A6] transition-colors hover:text-[#D8B24A] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-fraunces text-base font-semibold text-[#FBF7F0]">Contactos</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={brand.phoneHref} className="inline-flex items-center gap-2 text-[#C9B8A6] transition-colors hover:text-[#D8B24A] cursor-pointer">
                  <Phone className="h-4 w-4 shrink-0 text-[#D8B24A]" aria-hidden="true" /> {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="inline-flex items-start gap-2 break-all text-[#C9B8A6] transition-colors hover:text-[#D8B24A] cursor-pointer">
                  <Mail className="h-4 w-4 shrink-0 translate-y-0.5 text-[#D8B24A]" aria-hidden="true" /> {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#9C8C7A]">
                <MapPin className="h-4 w-4 shrink-0 translate-y-0.5 text-[#D8B24A]" aria-hidden="true" /> {brand.address}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-fraunces text-base font-semibold text-[#FBF7F0]">Horário</h4>
            <p className="mt-4 flex items-start gap-2 text-sm text-[#C9B8A6]">
              <Clock className="h-4 w-4 shrink-0 translate-y-0.5 text-[#D8B24A]" aria-hidden="true" /> {brand.hours}
            </p>
            <p className="mt-1.5 pl-6 text-sm text-[#9C8C7A]">{brand.hoursClosed}</p>
            <Link
              to={siteLink(slug, 'contacto')}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#D8B24A]/40 px-4 py-2 text-sm font-semibold text-[#D8B24A] transition-colors hover:bg-[#D8B24A] hover:text-[#241B14] cursor-pointer"
            >
              Como chegar <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#7E6F5E] sm:flex-row lg:px-8">
            <p>© {brand.since}–2026 {brand.legal} · {brand.motto}.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#C9B8A6]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
