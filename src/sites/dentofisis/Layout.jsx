import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Star, MessageCircle } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav } from './data.jsx'

function Brandmark() {
  return (
    <NavLink
      to={siteLink(slug)}
      aria-label="DentoFisis — Clínica Dentária"
      className="group inline-flex items-center gap-3 cursor-pointer"
    >
      <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-[#0F2A2A]/10 transition-shadow duration-200 group-hover:shadow-md">
        <img src="/logos/dentofisis.png" alt="DentoFisis logótipo" className="h-7 w-7" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-manrope text-lg font-extrabold tracking-tight text-[#0F2A2A]">
          Dento<span className="text-[#157E72]">Fisis</span>
        </span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5C7470]">
          Clínica Dentária
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
      isActive ? 'text-[#157E72]' : 'text-[#314B47] hover:text-[#157E72]',
    )

  return (
    <div className="min-h-screen bg-[#F1F7F5] font-sans text-[#0F2A2A]">
      {/* Header — light hero, so nav uses dark text and stays readable in both states */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[#0F2A2A]/10 bg-[#F1F7F5]/90 py-3 backdrop-blur-md'
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
                        'absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#1F9E8E] transition-all duration-300',
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
              className="inline-flex items-center gap-2 rounded-full bg-[#0F2A2A] px-5 py-2.5 font-sans text-sm font-bold text-white transition-colors duration-200 hover:bg-[#157E72] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Marcar consulta
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#0F2A2A] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#0F2A2A]/10 bg-white p-4 shadow-xl md:hidden">
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
                      isActive ? 'bg-[#1F9E8E]/10 text-[#157E72]' : 'text-[#0F2A2A] hover:bg-[#F1F7F5]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2A2A] px-4 py-3 font-sans text-base font-bold text-white cursor-pointer"
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
      <footer className="bg-[#0F2A2A] text-[#bcd4cf]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/15">
                <img src="/logos/dentofisis-light.png" alt="DentoFisis logótipo" className="h-7 w-7" />
              </span>
              <span className="font-manrope text-xl font-extrabold tracking-tight text-white">
                Dento<span className="text-[#5BB6C9]">Fisis</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8fb0aa]">
              Clínica médica dentária em Entrecampos, Lisboa. Prevenção e reabilitação oral com
              tecnologia avançada e atendimento humanizado.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              <Star className="h-4 w-4 fill-[#5BB6C9] text-[#5BB6C9]" />
              <span className="text-sm font-bold text-white">{brand.rating}</span>
              <span className="text-xs text-[#8fb0aa]">· {brand.reviews} avaliações Google</span>
            </div>
          </div>

          <div>
            <h4 className="font-manrope text-base font-bold text-white">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={siteLink(slug, n.to)}
                    end={n.to === ''}
                    className="transition-colors hover:text-[#5BB6C9] cursor-pointer"
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
                <a href={brand.phoneHref} className="transition-colors hover:text-[#5BB6C9] cursor-pointer">
                  Fixo {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#5BB6C9] cursor-pointer">
                  WhatsApp {brand.mobileDisplay}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="transition-colors hover:text-[#5BB6C9] cursor-pointer">
                  {brand.email}
                </a>
              </li>
              <li className="text-[#8fb0aa]">{brand.addressShort}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-manrope text-base font-bold text-white">Horário</h4>
            <p className="mt-4 text-sm text-[#8fb0aa]">{brand.hours}</p>
            <p className="mt-1 text-xs text-[#6f928c]">{brand.transport}</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#1F9E8E]/50 px-4 py-2 text-sm font-semibold text-[#5BB6C9] transition-colors hover:bg-[#1F9E8E] hover:text-white cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> Falar connosco
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-5 text-center text-[11px] leading-relaxed text-[#6f928c]">
            Entidade Reguladora da Saúde · N.º de Registo ERS {brand.ers} · Licença de Funcionamento
            N.º {brand.licenca} · Estabelecimento fixo registado sob o n.º {brand.estabelecimento}.
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#6f928c] sm:flex-row">
            <p>© 2026 Clínica Dentária DentoFisis. Todos os direitos reservados.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#bcd4cf]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
