import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react'
import { siteLink, cn } from '../../shared/utils'
import { useScrolled } from '../../shared/hooks'
import { slug, brand, nav, partners } from './data.jsx'

function Brandmark() {
  return (
    <NavLink to={siteLink(slug)} className="group flex items-center gap-3 cursor-pointer">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#1C6DD0] font-manrope text-base font-extrabold tracking-tight text-white shadow-sm shadow-[#1C6DD0]/30 transition-colors duration-200 group-hover:bg-[#1559a8]">
        IRI
      </span>
      <span className="leading-none">
        <span className="block font-manrope text-lg font-bold tracking-tight text-[#14202B]">IRI</span>
        <span className="mt-0.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#51616E]">
          Isolamentos · Revest. · Imperm.
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
      isActive ? 'text-[#1C6DD0]' : 'text-[#33424E] hover:text-[#14202B]',
    )

  return (
    <div className="min-h-screen bg-[#F4F6F8] font-sans text-[#14202B]">
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'border-b border-[#14202B]/10 bg-[#F4F6F8]/90 py-3 backdrop-blur-md' : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Brandmark />

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={siteLink(slug, n.to)} end={n.to === ''} className={linkClass}>
                {({ isActive }) => (
                  <span className="inline-flex flex-col items-center">
                    {n.label}
                    <span
                      className={cn(
                        'mt-1 h-0.5 w-full origin-center rounded-full bg-[#1C6DD0] transition-transform duration-200',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      )}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={brand.phoneStoreHref}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1C6DD0] px-5 py-2.5 font-sans text-sm font-bold text-white shadow-sm shadow-[#1C6DD0]/30 transition-colors duration-200 hover:bg-[#1559a8] cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Pedir orçamento
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[#14202B] md:hidden cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mx-4 mt-3 rounded-2xl border border-[#14202B]/10 bg-white p-4 shadow-xl md:hidden">
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
                      isActive ? 'bg-[#1C6DD0]/10 text-[#1C6DD0]' : 'text-[#33424E]',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={brand.phoneStoreHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C6DD0] px-4 py-3 font-sans text-base font-bold text-white cursor-pointer"
              >
                <Phone className="h-4 w-4" /> {brand.phoneStoreDisplay}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#14202B] text-[#AEBDC8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#1C6DD0] font-manrope text-base font-extrabold text-white">
                IRI
              </span>
              <span className="font-manrope text-lg font-bold text-white">IRI, Lda.</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8497A6]">
              {brand.sigla}. {brand.claim}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {partners.slice(0, 4).map((p) => (
                <span
                  key={p}
                  className="rounded-md border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#AEBDC8]"
                >
                  {p}
                </span>
              ))}
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
                    className="transition-colors hover:text-[#F0A93B] cursor-pointer"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-manrope text-base font-bold text-white">Contactos</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={brand.phoneStoreHref} className="flex items-center gap-2 transition-colors hover:text-[#F0A93B] cursor-pointer">
                  <Phone className="h-4 w-4 text-[#1C6DD0]" /> {brand.phoneStoreDisplay}
                  <span className="text-xs text-[#6f8190]">· Loja</span>
                </a>
              </li>
              <li>
                <a href={brand.phoneWorksHref} className="flex items-center gap-2 transition-colors hover:text-[#F0A93B] cursor-pointer">
                  <Phone className="h-4 w-4 text-[#1C6DD0]" /> {brand.phoneWorksDisplay}
                  <span className="text-xs text-[#6f8190]">· Obras</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.emailComercial}`} className="flex items-center gap-2 transition-colors hover:text-[#F0A93B] cursor-pointer">
                  <Mail className="h-4 w-4 text-[#1C6DD0]" /> {brand.emailComercial}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-manrope text-base font-bold text-white">Loja</h4>
            <p className="mt-4 flex items-start gap-2 text-sm text-[#8497A6]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1C6DD0]" /> {brand.address}
            </p>
            <p className="mt-3 text-sm text-[#8497A6]">{brand.hours}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#6f8190] sm:flex-row">
            <p>© {brand.since}–2025 IRI — Isolamentos, Revestimentos e Impermeabilização, Lda.</p>
            <p>
              Redesenhado por <span className="font-semibold text-[#AEBDC8]">ProofStudio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
