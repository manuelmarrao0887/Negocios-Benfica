import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Star, MessageCircle } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label={`${brand.full} — ${brand.signature}`}
      className="group flex items-center gap-3 cursor-pointer"
    >
      <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sm ring-1 ring-[#7A2E3B]/15 transition-shadow duration-200 group-hover:shadow-md">
        <img
          src="/logos/suelen-cunha.webp"
          alt="Suelen Cunha — Advocacia Internacional, logótipo"
          className="h-11 w-11 object-contain"
          width={44}
          height={44}
        />
      </span>
      <span className="leading-none">
        <span className="block font-playfair text-lg font-semibold tracking-tight text-[#1E1B2E]">
          Suelen Cunha
        </span>
        <span className="mt-1 block font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7A2E3B]">
          {brand.signature}
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
      'relative font-sans text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer',
      'after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[#7A2E3B] after:transition-all after:duration-300',
      isActive
        ? 'text-[#1E1B2E] after:w-full'
        : 'text-[#564F5C] hover:text-[#1E1B2E] after:w-0 hover:after:w-full',
    )

  return (
    <div className="min-h-screen bg-[#F8F5F0] font-sans text-[#1E1B2E]">
      {/* Top utility bar */}
      <div className="hidden border-b border-[#1E1B2E]/10 bg-[#1E1B2E] text-[#E9E2EC] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="flex items-center gap-2 text-[#CFC6D6]">
            <MapPin className="h-3.5 w-3.5 text-[#B0913F]" /> {brand.addressShort}
          </span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-semibold text-[#E9E2EC]">
              <Star className="h-3.5 w-3.5 fill-[#B0913F] text-[#B0913F]" />
              {brand.rating} · {brand.reviews} avaliações
            </span>
            <a
              href={brand.phoneHref}
              className="flex items-center gap-2 font-semibold text-[#E9E2EC] transition-colors hover:text-[#B0913F] cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5 text-[#B0913F]" /> {brand.phoneDisplay}
            </a>
          </span>
        </div>
      </div>

      {/* Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#1E1B2E]/10 bg-[#F8F5F0]/95 py-3 shadow-sm backdrop-blur-md'
            : 'bg-[#F8F5F0]/80 py-4 backdrop-blur-sm',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark />

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <NavLink
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#7A2E3B] px-5 py-2.5 font-sans text-sm font-bold text-[#F8F5F0] shadow-sm transition-all duration-200 hover:bg-[#67262F] hover:shadow-md cursor-pointer"
            >
              Marcar consulta
            </NavLink>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#1E1B2E] lg:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#1E1B2E]/10 bg-white p-4 shadow-xl lg:hidden">
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
                      isActive ? 'bg-[#7A2E3B]/8 text-[#7A2E3B]' : 'text-[#1E1B2E]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7A2E3B] px-4 py-3 font-sans text-base font-bold text-[#F8F5F0] cursor-pointer"
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
      <footer className="bg-[#1E1B2E] text-[#CFC6D6]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm ring-1 ring-white/10">
                <img
                  src="/logos/suelen-cunha.webp"
                  alt="Suelen Cunha — Advocacia Internacional, logótipo"
                  className="h-12 w-12 object-contain"
                  width={48}
                  height={48}
                />
              </span>
              <span className="leading-none">
                <span className="block font-playfair text-xl font-semibold text-[#F8F5F0]">
                  Suelen Cunha
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B0913F]">
                  {brand.signature}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#A99FB2]">{brand.tagline}</p>
            <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#E9E2EC]">
              <Star className="h-4 w-4 fill-[#B0913F] text-[#B0913F]" />
              {brand.rating} · {brand.reviews} avaliações no Google
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-base font-semibold text-[#F8F5F0]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#B0913F] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-base font-semibold text-[#F8F5F0]">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#B0913F] cursor-pointer">
                  {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.landlineHref} className="transition-colors hover:text-[#B0913F] cursor-pointer">
                  {brand.landlineDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="break-all transition-colors hover:text-[#B0913F] cursor-pointer">
                  {brand.email}
                </a>
              </li>
              <li className="text-[#A99FB2]">{brand.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-base font-semibold text-[#F8F5F0]">Atendimento</h4>
            <p className="mt-4 text-sm text-[#A99FB2]">{brand.hoursNote}</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#B0913F]/50 px-4 py-2 text-sm font-semibold text-[#B0913F] transition-colors hover:bg-[#B0913F] hover:text-[#1E1B2E] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#8A8194] sm:flex-row">
            <p>© {brand.since}–2025 Advogada Suelen Cunha · Advocacia Internacional. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#CFC6D6]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
