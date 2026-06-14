import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Clock, Linkedin } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

// Genuine firm mark: white "PMM&A" serif monogram on the firm's teal field.
// Self-contained artwork → placed on a navy chip so it reads on light + dark.
function Brandmark({ size = 'h-10' }) {
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label={brand.full}
      className="group inline-flex items-center gap-3 cursor-pointer"
    >
      <span className="inline-flex overflow-hidden rounded-lg bg-[#16203A] p-1 shadow-sm ring-1 ring-[#16203A]/10 transition-shadow duration-200 group-hover:shadow-md">
        <img
          src="/logos/pmm-advogados.png"
          alt="Pereira Mouta Mendes & Associados — logótipo"
          width="180"
          height="180"
          className={cn('w-auto rounded-md', size)}
        />
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-archivo text-[15px] font-bold tracking-tight text-[#16203A]">
          Pereira Mouta Mendes
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A6802E]">
          & Associados
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
      'relative font-archivo text-sm font-semibold transition-colors duration-200 cursor-pointer',
      isActive ? 'text-[#1E3A5F]' : 'text-[#4A546B] hover:text-[#16203A]',
    )

  return (
    <div className="min-h-screen bg-[#F5F6F8] font-sans text-[#16203A]">
      {/* Header — light surface in both states for AA contrast */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-300',
          scrolled
            ? 'border-[#16203A]/10 bg-[#F5F6F8]/95 py-2.5 shadow-sm'
            : 'border-transparent bg-[#F5F6F8]/85 py-4',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark size={scrolled ? 'h-9' : 'h-10'} />

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {({ isActive }) => (
                  <span className="relative inline-block py-1">
                    {n.label}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#A6802E] transition-all duration-300',
                        isActive ? 'w-full' : 'w-0',
                      )}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-[#1E3A5F] px-5 py-2.5 font-archivo text-sm font-bold text-white transition-colors duration-200 hover:bg-[#16203A] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> {brand.phoneDisplay}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#16203A] transition-colors lg:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-xl border border-[#16203A]/10 bg-white p-4 shadow-xl lg:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={siteLink(slug, n.to)}
                  end={n.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-4 py-3 font-archivo text-base font-semibold cursor-pointer',
                      isActive
                        ? 'bg-[#1E3A5F]/10 text-[#1E3A5F]'
                        : 'text-[#16203A] hover:bg-[#F5F6F8]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E3A5F] px-4 py-3 font-archivo text-base font-bold text-white cursor-pointer"
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
      <footer className="bg-[#16203A] text-[#C3CCDE]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="inline-flex overflow-hidden rounded-lg bg-white/5 p-1.5 ring-1 ring-white/10">
              <img
                src="/logos/pmm-advogados.png"
                alt="Pereira Mouta Mendes & Associados — logótipo"
                width="180"
                height="180"
                className="h-12 w-auto rounded-md"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8C97AE]">{brand.full}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Excelência', 'Rigor', 'Ética'].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-[#A6802E]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-archivo text-base font-bold text-white">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#C9A227] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-archivo text-base font-bold text-white">Contactos</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={brand.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-[#C9A227] cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-[#A6802E]" /> {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={brand.emailHref}
                  className="flex items-center gap-2 transition-colors hover:text-[#C9A227] cursor-pointer"
                >
                  <Mail className="h-4 w-4 text-[#A6802E]" /> {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#8C97AE]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#A6802E]" /> {brand.address}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-archivo text-base font-bold text-white">Horário</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#8C97AE]">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#A6802E]" /> {brand.hours}
              </li>
              <li className="pl-6">{brand.hoursNote}</li>
            </ul>
            <a
              href={brand.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-[#A6802E]/40 px-4 py-2 text-sm font-semibold text-[#C9A227] transition-colors hover:bg-[#A6802E] hover:text-[#16203A] cursor-pointer"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#71809A] sm:flex-row">
            <p>
              © {brand.since}–2026 Pereira Mouta Mendes & Associados, Sociedade de Advogados, SP, RL.
              Todos os direitos reservados.
            </p>
            <p>
              Redesenhado por <span className="font-semibold text-[#C3CCDE]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
