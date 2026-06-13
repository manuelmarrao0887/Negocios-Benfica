import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, MessageCircle, MapPin, Clock, Instagram } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark({ onDark = false }) {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-3 cursor-pointer">
      <span
        className={cn(
          'grid h-11 w-11 place-items-center rounded-full p-1 shadow-[0_4px_18px_-6px_rgba(204,12,120,0.45)] ring-1',
          onDark ? 'bg-white/95 ring-white/40' : 'bg-white ring-[#CC0C78]/15',
        )}
      >
        <img
          src="/logos/linda-mulher.png"
          alt="Linda Mulher Studio logótipo"
          className="h-full w-auto rounded-full"
          width={44}
          height={44}
        />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            'block font-cormorant text-xl font-semibold tracking-wide',
            onDark ? 'text-[#FBF4F7]' : 'text-[#2A1620]',
          )}
        >
          Linda Mulher
        </span>
        <span className="mt-0.5 block font-jost text-[10px] font-medium uppercase tracking-[0.32em] text-[#CC0C78]">
          Studio · Lisboa
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
      'relative font-jost text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer',
      'after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[#CC0C78] after:transition-all after:duration-300',
      isActive
        ? 'text-[#CC0C78] after:w-full'
        : 'text-[#5A4350] hover:text-[#CC0C78] after:w-0 hover:after:w-full',
    )

  return (
    <div className="min-h-screen bg-[#FBF4F7] font-jost text-[#2A1620]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#CC0C78]/12 bg-[#FBF4F7]/90 py-3 backdrop-blur-md shadow-[0_8px_30px_-16px_rgba(42,22,32,0.35)]'
            : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark />

          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={brand.whatsappText}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#CC0C78] to-[#A50A60] px-5 py-2.5 font-jost text-sm font-semibold text-white shadow-[0_8px_22px_-10px_rgba(204,12,120,0.65)] transition-all duration-200 hover:shadow-[0_10px_28px_-8px_rgba(204,12,120,0.8)] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> Marcar consultoria
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#CC0C78] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#CC0C78]/15 bg-white p-4 shadow-[0_24px_60px_-24px_rgba(42,22,32,0.35)] md:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 font-jost text-base font-medium tracking-wide cursor-pointer',
                      isActive ? 'bg-[#CC0C78]/10 text-[#CC0C78]' : 'text-[#3A2230]',
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
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#CC0C78] to-[#A50A60] px-4 py-3 font-jost text-base font-semibold text-white cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" /> Marcar consultoria
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer — the single dark elegant band */}
      <footer className="border-t border-[#CC0C78]/20 bg-[#2A1620] text-[#D9C3CE]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/95 p-1 ring-1 ring-white/40">
                <img
                  src="/logos/linda-mulher.png"
                  alt="Linda Mulher Studio logótipo"
                  className="h-full w-auto rounded-full"
                  width={44}
                  height={44}
                />
              </span>
              <span className="font-cormorant text-xl font-semibold text-[#FBF4F7]">Linda Mulher Studio</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#D9C3CE]">{brand.subtagline}</p>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#F0B7D2] transition-colors hover:text-white cursor-pointer"
            >
              <Instagram className="h-4 w-4" /> {brand.instagramHandle}
            </a>
          </div>

          <div>
            <h4 className="font-cormorant text-lg font-semibold text-[#FBF4F7]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#F0B7D2] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cormorant text-lg font-semibold text-[#FBF4F7]">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#F0B7D2] cursor-pointer">
                  {brand.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F0B7D2]" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-cormorant text-lg font-semibold text-[#FBF4F7]">Horário</h4>
            <p className="mt-4 flex items-start gap-2 text-sm">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#F0B7D2]" />
              <span>{brand.hours}</span>
            </p>
            <p className="mt-2 text-xs text-[#D9C3CE]/80">{brand.hoursNote}</p>
            <a
              href={brand.whatsappText}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#F0B7D2]/40 px-4 py-2 text-sm font-semibold text-[#F0B7D2] transition-colors hover:bg-[#CC0C78] hover:text-white hover:border-[#CC0C78] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#D9C3CE]/70 sm:flex-row">
            <p>© 2025 Linda Mulher Studio. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#F0B7D2]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
