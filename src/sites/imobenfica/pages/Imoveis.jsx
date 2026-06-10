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
      {/* Page hero */}
      <section className="bg-[#14233B] px-6 pt-20 pb-16 text-[#F6F3EC]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#B7892E]">
              A nossa carteira
            </span>
            <h1 className="mt-3 max-w-3xl font-playfair text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Imóveis em Benfica e arredores.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#bcc6d4]">
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
            <div className="flex flex-col gap-5 rounded-2xl border border-[#14233B]/10 bg-[#FFFFFF] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
              <FilterGroup label="Operação" options={operations} value={op} onChange={setOp} />
              <div className="hidden h-10 w-px bg-[#14233B]/10 lg:block" />
              <FilterGroup label="Tipo" options={propertyTypes} value={type} onChange={setType} />
            </div>
          </Reveal>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-semibold text-[#5A6577]">
              {filtered.length} {filtered.length === 1 ? 'imóvel' : 'imóveis'}
            </p>
            <span className="rounded-full bg-[#B7892E]/12 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#a2792a]">
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
            <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-[#14233B]/15 bg-[#FFFFFF] p-16 text-center">
              <SearchX className="h-10 w-10 text-[#B7892E]" />
              <p className="font-playfair text-xl font-semibold text-[#14233B]">
                Sem imóveis para estes filtros.
              </p>
              <p className="max-w-sm text-sm text-[#5A6577]">
                Ajuste a pesquisa ou fale connosco — temos sempre novas oportunidades em Benfica.
              </p>
              <button
                onClick={() => {
                  setOp('Todas')
                  setType('Todos')
                }}
                className="mt-1 inline-flex items-center gap-2 rounded-md bg-[#14233B] px-5 py-2.5 text-sm font-bold text-[#F6F3EC] transition-colors hover:bg-[#1b2c45] cursor-pointer"
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
            <div className="relative overflow-hidden rounded-2xl bg-[#1E3A5F] px-8 py-12 text-[#F6F3EC] sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#B7892E]/15 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="font-playfair text-3xl font-semibold leading-tight sm:text-4xl">
                    Não encontra o que procura?
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#c3cdda]">
                    Diga-nos o que procura e a Marta encontra a oportunidade certa. Também o ajudamos a
                    vender ou arrendar o seu imóvel com a nossa partilha 50/50.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0 lg:flex-col xl:flex-row">
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#B7892E] px-7 py-4 font-sans text-base font-bold text-[#14233B] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    Pedir avaliação <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href={brand.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#F6F3EC]/25 px-7 py-4 font-sans text-base font-bold text-[#F6F3EC] transition-colors hover:bg-white/5 cursor-pointer"
                  >
                    <Phone className="h-5 w-5 text-[#B7892E]" /> Ligar
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
      <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#8a93a3]">
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
                ? 'bg-[#14233B] text-[#F6F3EC]'
                : 'bg-[#14233B]/5 text-[#5A6577] hover:bg-[#14233B]/10 hover:text-[#14233B]',
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
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#14233B]/10 bg-[#FFFFFF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#14233B]/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={`https://picsum.photos/seed/imobenfica-${l.id}/800/600`}
          alt={`${l.title} — ${l.zone} (imagem ilustrativa)`}
          width="800"
          height="600"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14233B]/70 via-[#14233B]/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-md bg-[#B7892E] px-3 py-1 text-xs font-bold text-[#14233B]">
          {l.operation}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-[#14233B]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F6F3EC] backdrop-blur-sm">
          Ilustrativo
        </span>
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="rounded bg-[#14233B]/75 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#e7e1d3] backdrop-blur-sm">
            {l.type}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#B7892E]">
            <MapPin className="h-3.5 w-3.5" /> {l.zone}
          </p>
        </div>
        <h2 className="mt-2 font-playfair text-xl font-semibold text-[#14233B]">{l.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A6577]">{l.desc}</p>
        <div className="mt-5 flex flex-wrap gap-4 border-t border-[#14233B]/10 pt-4 text-sm text-[#3c4655]">
          {specs.map((s) => (
            <span key={s.label} className="flex items-center gap-1.5">
              <s.icon className="h-4 w-4 text-[#B7892E]" /> {s.label}
            </span>
          ))}
        </div>
        <p className="mt-4 font-playfair text-2xl font-semibold text-[#14233B]">{l.price}</p>
      </div>
    </article>
  )
}
