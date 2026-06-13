import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-3 cursor-pointer">
      <img
        src="/logos/conta-100.png"
        alt="Conta 100% logótipo"
        className="h-9 w-auto transition-transform duration-200 group-hover:scale-105"
      />
      <span className="hidden font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B7C88] sm:block">
        Contabilidade
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
      isActive ? 'text-[#0B7C88]' : 'text-[#16363B] hover:text-[#0B7C88]',
    )

  return (
    <div className="min-h-screen bg-[#F4F8F6] font-sans text-[#16363B]">
      {/* Header — hero is LIGHT, so nav uses dark text and stays readable in both states */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#16363B]/10 bg-[#F4F8F6]/90 py-3 backdrop-blur-md'
            : 'py-5',
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
                        'absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#0B7C88] transition-all duration-300',
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
              className="inline-flex items-center gap-2 rounded-full bg-[#16363B] px-5 py-2.5 font-sans text-sm font-bold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#0B7C88] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Marcar reunião
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#16363B] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#16363B]/10 bg-[#FFFFFF] p-4 shadow-xl md:hidden">
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
                      isActive ? 'bg-[#0B7C88]/10 text-[#0B7C88]' : 'text-[#16363B] hover:bg-[#F4F8F6]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#16363B] px-4 py-3 font-sans text-base font-bold text-[#FFFFFF] cursor-pointer"
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
      <footer className="bg-[#16363B] text-[#c7d8d1]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <img
                src="/logos/conta-100-light.png"
                alt="Conta 100% logótipo"
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#90a89f]">
              Contabilidade, auditoria e consultoria fiscal para empresas e particulares. Desde {brand.since}.
            </p>
          </div>

          <div>
            <h4 className="font-jakarta text-base font-bold text-[#FFFFFF]">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#0B7C88] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-jakarta text-base font-bold text-[#FFFFFF]">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#0B7C88] cursor-pointer">
                  Tel. {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#0B7C88] cursor-pointer">
                  WhatsApp {brand.mobileDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="transition-colors hover:text-[#0B7C88] cursor-pointer">
                  {brand.email}
                </a>
              </li>
              <li className="text-[#90a89f]">{brand.addressShort}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-jakarta text-base font-bold text-[#FFFFFF]">Horário</h4>
            <p className="mt-4 text-sm text-[#90a89f]">{brand.hours}</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#0B7C88]/40 px-4 py-2 text-sm font-semibold text-[#0B7C88] transition-colors hover:bg-[#0B7C88] hover:text-[#FFFFFF] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> Falar connosco
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#90a89f] sm:flex-row">
            <p>© {brand.since}–2025 Conta 100% — Contabilidade, Lda. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#c7d8d1]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
