import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle, Star, MapPin, Clock } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label={`${brand.full} — página inicial`}
      className="group inline-flex items-center cursor-pointer"
    >
      <img
        src="/logos/nova-dentismed-dark.png"
        alt="Nova Dentismed — Clínica Médico-Dentária"
        className="h-11 w-auto transition-transform duration-200 group-hover:scale-[1.03] sm:h-12"
      />
    </NavLink>
  )
}

export default function Layout() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    cn(
      'relative font-sans text-sm font-semibold transition-colors duration-200 cursor-pointer',
      isActive ? 'text-[#0E8E9E]' : 'text-[#284C56] hover:text-[#0E8E9E]',
    )

  return (
    <div className="min-h-screen bg-[#F0F8F9] font-sans text-[#0E2A33]">
      {/* Header — page is LIGHT, so nav uses dark text for ≥4.5:1 contrast */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#0E2A33]/10 bg-[#F0F8F9]/90 py-2.5 backdrop-blur-md'
            : 'py-4',
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
                        'absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#0E8E9E] transition-all duration-300',
                        isActive ? 'w-full' : 'w-0',
                      )}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0E2A33]/10 bg-white px-3 py-1.5 text-xs font-bold text-[#0E2A33]">
              <Star className="h-3.5 w-3.5 fill-[#F2B705] text-[#F2B705]" />
              {brand.rating}
              <span className="font-medium text-[#5A7780]">· Google</span>
            </span>
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E8E9E] px-5 py-2.5 font-sans text-sm font-bold text-white shadow-sm shadow-[#0E8E9E]/25 transition-colors duration-200 hover:bg-[#0B7886] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Marcar consulta
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#0E2A33] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#0E2A33]/10 bg-white p-4 shadow-xl md:hidden">
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
                      isActive ? 'bg-[#0E8E9E]/10 text-[#0E8E9E]' : 'text-[#0E2A33] hover:bg-[#F0F8F9]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E8E9E] px-4 py-3 font-sans text-base font-bold text-white cursor-pointer"
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

      {/* Footer — dark accent background, so the white logo variant fits */}
      <footer className="bg-[#0E2A33] text-[#BBD3D9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logos/nova-dentismed.png"
              alt="Nova Dentismed — Clínica Médico-Dentária"
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#86A6AE]">
              {brand.tagline} Clínica médico-dentária no Campo Pequeno, em Lisboa, {brand.since}.
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-[#DCEAEC]">
              <Star className="h-3.5 w-3.5 fill-[#F2B705] text-[#F2B705]" />
              {brand.rating} · {brand.reviews} avaliações Google
            </div>
          </div>

          <div>
            <h4 className="font-outfit text-base font-semibold text-white">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#3FB6A0] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-base font-semibold text-white">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#3FB6A0] cursor-pointer">
                  Tel. {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#3FB6A0] cursor-pointer">
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp {brand.mobileDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="transition-colors hover:text-[#3FB6A0] cursor-pointer break-all">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-1.5 text-[#86A6AE]">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {brand.addressShort}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-base font-semibold text-white">Horário</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#86A6AE]">
              <li className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-[#3FB6A0]" /> {brand.hoursWeek}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-[#3FB6A0]" /> {brand.hoursSat}
              </li>
            </ul>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#3FB6A0]/40 px-4 py-2 text-sm font-semibold text-[#3FB6A0] transition-colors hover:bg-[#3FB6A0] hover:text-[#0E2A33] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> Marcar pelo WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#6E8E96] sm:flex-row">
            <p>© 2025 Nova Dentismed — Clínica Médico-Dentária. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#BBD3D9]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
