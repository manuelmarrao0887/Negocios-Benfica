import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-2.5 cursor-pointer" aria-label="Técnico Frio — página inicial">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-md shadow-[#0B6CC0]/15 ring-1 ring-[#0B2536]/5 transition-transform duration-300 group-hover:scale-105">
        <img src="/logos/tecnico-frio.png" alt="Técnico Frio logótipo" className="h-10 w-auto" />
      </span>
      <span className="font-outfit text-lg font-bold leading-none text-[#0B2536]">
        Técnico Frio
        <span className="mt-0.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B6CC0]">
          Frio & Ar Condicionado
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
      'relative font-sans text-sm font-semibold transition-colors duration-200 cursor-pointer',
      isActive ? 'text-[#0B6CC0]' : 'text-[#0B2536] hover:text-[#0B6CC0]',
    )

  return (
    <div className="min-h-screen bg-[#F1F8FC] font-sans text-[#0B2536]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'border-b border-[#0B2536]/10 bg-[#F1F8FC]/90 py-3 backdrop-blur-md' : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark />

          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {({ isActive }) => (
                  <span className="relative">
                    {n.label}
                    <span
                      className={cn(
                        'absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#16B5C9] transition-all duration-300',
                        isActive ? 'w-full' : 'w-0',
                      )}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B6CC0] to-[#16B5C9] px-5 py-2.5 font-sans text-sm font-bold text-white shadow-lg shadow-[#0B6CC0]/25 transition-all duration-200 hover:shadow-xl hover:brightness-105 cursor-pointer"
            >
              <Phone className="h-4 w-4" /> {brand.phoneDisplay}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-1 text-[#0B2536] transition-colors hover:text-[#0B6CC0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B6CC0] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#0B2536]/10 bg-white p-4 shadow-xl md:hidden">
            <nav className="flex flex-col" aria-label="Navegação móvel">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 font-sans text-base font-semibold transition-colors cursor-pointer',
                      isActive ? 'bg-[#0B6CC0]/10 text-[#0B6CC0]' : 'text-[#0B2536] hover:bg-[#0B2536]/5',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B6CC0] to-[#16B5C9] px-4 py-3 font-sans text-base font-bold text-white cursor-pointer"
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
      <footer className="bg-[#0B2536] text-[#b9cad6]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm">
                <img src="/logos/tecnico-frio.png" alt="Técnico Frio logótipo" className="h-10 w-auto" />
              </span>
              <span className="font-outfit text-lg font-bold text-white">Técnico Frio</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#7f96a6]">{brand.tagline}</p>
            <p className="mt-2 font-outfit text-sm font-semibold text-[#16B5C9]">{brand.claim}</p>
          </div>

          <div>
            <h4 className="font-outfit text-base font-semibold text-white">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#16B5C9] cursor-pointer"
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
                <a href={brand.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-[#16B5C9] cursor-pointer">
                  <Phone className="h-4 w-4 text-[#16B5C9]" /> {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.phone2Href} className="inline-flex items-center gap-2 transition-colors hover:text-[#16B5C9] cursor-pointer">
                  <Phone className="h-4 w-4 text-[#16B5C9]" /> {brand.phone2Display}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="inline-flex items-center gap-2 transition-colors hover:text-[#16B5C9] cursor-pointer">
                  <Mail className="h-4 w-4 text-[#16B5C9]" /> {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#7f96a6]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#16B5C9]" /> {brand.address}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-base font-semibold text-white">Atendimento</h4>
            <p className="mt-4 text-sm text-[#7f96a6]">{brand.hours}</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#16B5C9]/40 px-4 py-2 text-sm font-semibold text-[#16B5C9] transition-colors hover:bg-[#16B5C9] hover:text-[#0B2536] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#6b8395] sm:flex-row">
            <p>© 2025 Técnico Frio — Assistência Técnica. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#b9cad6]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
