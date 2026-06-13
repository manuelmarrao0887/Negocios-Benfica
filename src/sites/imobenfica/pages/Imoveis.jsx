import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, BedDouble, Bath, Ruler, ArrowRight, SearchX, Phone } from 'lucide-react'
import { siteLink, cn } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, listings, operations, propertyTypes, primaryAreas, otherAreas } from '../data.jsx'

export default function Imoveis() {
  usePageMeta(
    'Imóveis | ImoBenfica by Marta Pereira',
    'Apartamentos, moradias e lojas em Benfica, São Domingos de Benfica e arredores. Compra, venda e arrendamento.',
  )

  const [op, setOp] = useState('Todas')
  const [type, setType] = useState('Todos')

  const filtered = useMemo(
    () =>
      listings.filter(
        (l) =>
          (op === 'Todas' || l.operation === op) && (type === 'Todos' || l.type === type),
      ),
    [op, type],
  )

  return (
    <>
      {/* Page hero (light) */}
      <section className="border-b border-[#7A1B47]/15 bg-[#F4EAEE] px-6 pt-20 pb-16 text-[#241019]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#7A1B47]">
              A nossa carteira
            </span>
            <h1 className="mt-3 max-w-3xl font-playfair text-5xl font-semibold leading-[1.05] text-[#241019] sm:text-6xl">
              Imóveis em Benfica e arredores.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#46343D]">
              Uma seleção ilustrativa de apartamentos, moradias e lojas para compra e arrendamento.
              Especializados em {primaryAreas.join(' e ')}, também em {otherAreas.join(', ')}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="bg-[#F6F3EC] py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-col gap-5 rounded-2xl border border-[#241019]/10 bg-[#FFFFFF] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
              <FilterGroup label="Operação" options={operations} value={op} onChange={setOp} />
              <div className="hidden h-10 w-px bg-[#241019]/10 lg:block" />
              <FilterGroup label="Tipo" options={propertyTypes} value={type} onChange={setType} />
            </div>
          </Reveal>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-semibold text-[#5A4750]">
              {filtered.length} {filtered.length === 1 ? 'imóvel' : 'imóveis'}
            </p>
            <span className="rounded-full bg-[#7A1B47]/12 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#66163C]">
              Imóveis ilustrativos
            </span>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((l, i) => (
                <Reveal key={l.id} delay={(i % 3) * 70}>
                  <ListingCard listing={l} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-[#241019]/15 bg-[#FFFFFF] p-16 text-center">
              <SearchX className="h-10 w-10 text-[#7A1B47]" />
              <p className="font-playfair text-xl font-semibold text-[#241019]">
                Sem imóveis para estes filtros.
              </p>
              <p className="max-w-sm text-sm text-[#5A4750]">
                Ajuste a pesquisa ou fale connosco — temos sempre novas oportunidades em Benfica.
              </p>
              <button
                onClick={() => {
                  setOp('Todas')
                  setType('Todos')
                }}
                className="mt-1 inline-flex items-center gap-2 rounded-md bg-[#241019] px-5 py-2.5 text-sm font-bold text-[#F6F3EC] transition-colors hover:bg-[#3A1228] cursor-pointer"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFFFF] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-[#7A1B47]/20 bg-[#F4EAEE] px-8 py-12 text-[#241019] shadow-sm sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#7A1B47]/[0.08] blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="font-playfair text-3xl font-semibold leading-tight text-[#241019] sm:text-4xl">
                    Não encontra o que procura?
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#46343D]">
                    Diga-nos o que procura e a Marta encontra a oportunidade certa. Também o ajudamos a
                    vender ou arrendar o seu imóvel com a nossa partilha 50/50.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0 lg:flex-col xl:flex-row">
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#7A1B47] px-7 py-4 font-sans text-base font-bold text-[#F6F3EC] shadow-sm transition-all duration-200 hover:bg-[#66163C] hover:scale-[1.02] cursor-pointer"
                  >
                    Pedir avaliação <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href={brand.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#7A1B47]/40 bg-[#FFFFFF] px-7 py-4 font-sans text-base font-bold text-[#7A1B47] transition-colors hover:bg-[#7A1B47]/[0.06] cursor-pointer"
                  >
                    <Phone className="h-5 w-5 text-[#7A1B47]" /> Ligar
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
      <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#6E5A63]">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={cn(
              'rounded-md px-4 py-2 font-sans text-sm font-semibold transition-colors duration-200 cursor-pointer',
              value === o
                ? 'bg-[#241019] text-[#F6F3EC]'
                : 'bg-[#241019]/5 text-[#5A4750] hover:bg-[#241019]/10 hover:text-[#241019]',
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}

function ListingCard({ listing: l }) {
  const specs = [
    l.beds > 0 && { icon: BedDouble, label: `${l.beds} quartos` },
    { icon: Bath, label: `${l.baths} WC` },
    { icon: Ruler, label: l.area },
  ].filter(Boolean)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#241019]/10 bg-[#FFFFFF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#241019]/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={`https://picsum.photos/seed/imobenfica-${l.id}/800/600`}
          alt={`${l.title} — ${l.zone} (imagem ilustrativa)`}
          width="800"
          height="600"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241019]/70 via-[#241019]/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-md bg-[#7A1B47] px-3 py-1 text-xs font-bold text-[#F6F3EC]">
          {l.operation}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-[#241019]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F6F3EC] backdrop-blur-sm">
          Ilustrativo
        </span>
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="rounded bg-[#241019]/75 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#EDE0E6] backdrop-blur-sm">
            {l.type}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#7A1B47]">
            <MapPin className="h-3.5 w-3.5" /> {l.zone}
          </p>
        </div>
        <h2 className="mt-2 font-playfair text-xl font-semibold text-[#241019]">{l.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A4750]">{l.desc}</p>
        <div className="mt-5 flex flex-wrap gap-4 border-t border-[#241019]/10 pt-4 text-sm text-[#46343D]">
          {specs.map((s) => (
            <span key={s.label} className="flex items-center gap-1.5">
              <s.icon className="h-4 w-4 text-[#7A1B47]" /> {s.label}
            </span>
          ))}
        </div>
        <p className="mt-4 font-playfair text-2xl font-semibold text-[#241019]">{l.price}</p>
      </div>
    </article>
  )
}
