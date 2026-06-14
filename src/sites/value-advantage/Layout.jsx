import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle, Star } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

// Clean typographic wordmark. The genuine valueadvantage.pt header image is a wide
// grey "gears/teamwork" banner illustration (no compact text mark), so a crisp
// wordmark reads better at header sizes while keeping the green/gold brand identity.
function Wordmark({ tone = 'dark' }) {
  const isDark = tone === 'dark'
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label="Value Advantage — Contabilidade e Gestão"
      className="group inline-flex items-center gap-2.5 cursor-pointer"
    >
      <span
        className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-[#2E7D6A] shadow-sm transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-[#256655]" />
        <span className="relative font-manrope text-base font-extrabold leading-none text-white">V</span>
        <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#B68A2E]" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-manrope text-[17px] font-extrabold tracking-tight',
            isDark ? 'text-[#102A23]' : 'text-white',
          )}
        >
          Value<span className="text-[#2E7D6A]">{isDark ? '' : ''}</span> Advantage
        </span>
        <span
          className={cn(
            'mt-1 text-[9px] font-bold uppercase tracking-[0.22em]',
            isDark ? 'text-[#5E7269]' : 'text-[#9DBDB1]',
          )}
        >
          Contabilidade & Gestão
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
      isActive ? 'text-[#2E7D6A]' : 'text-[#33473F] hover:text-[#2E7D6A]',
    )

  return (
    <div className="min-h-screen bg-[#F5F8F6] font-sans text-[#102A23]">
      {/* Header — light theme, dark text readable in both states */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#102A23]/10 bg-[#F5F8F6]/90 py-3 backdrop-blur-md'
            : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Wordmark tone="dark" />

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {({ isActive }) => (
                  <span className="relative">
                    {n.label}
                    <span
                      className={cn(
                        'absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#B68A2E] transition-all duration-300',
                        isActive ? 'w-full' : 'w-0',
                      )}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#102A23]/10 bg-white px-3 py-1.5 text-xs font-bold text-[#102A23]">
              <Star className="h-3.5 w-3.5 fill-[#B68A2E] text-[#B68A2E]" /> {brand.rating}
            </span>
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#2E7D6A] px-5 py-2.5 font-sans text-sm font-bold text-white transition-colors duration-200 hover:bg-[#256655] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Falar connosco
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#102A23] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#102A23]/10 bg-white p-4 shadow-xl md:hidden">
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
                      isActive ? 'bg-[#2E7D6A]/10 text-[#2E7D6A]' : 'text-[#102A23] hover:bg-[#F5F8F6]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2E7D6A] px-4 py-3 font-sans text-base font-bold text-white cursor-pointer"
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
      <footer className="bg-[#102A23] text-[#BFD3CA]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Wordmark tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#8FA89D]">
              Contabilidade, consultoria e apoio à gestão nas Avenidas Novas, em Lisboa. Acrescentamos
              valor ao seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-manrope text-base font-bold text-white">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#B68A2E] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-manrope text-base font-bold text-white">Contactos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-[#B68A2E] cursor-pointer">
                  Tel. {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="transition-colors hover:text-[#B68A2E] cursor-pointer">
                  {brand.email}
                </a>
              </li>
              <li className="text-[#8FA89D]">{brand.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-manrope text-base font-bold text-white">Horário</h4>
            <p className="mt-4 text-sm text-[#8FA89D]">{brand.hours}</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#B68A2E]/40 px-4 py-2 text-sm font-semibold text-[#D8B45E] transition-colors hover:bg-[#B68A2E] hover:text-[#102A23] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#8FA89D] sm:flex-row">
            <p>© {brand.since}–2025 Value Advantage — Contabilidade e Gestão, Lda. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#BFD3CA]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
