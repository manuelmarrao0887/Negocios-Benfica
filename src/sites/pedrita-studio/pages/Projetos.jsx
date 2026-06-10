import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { siteLink, cn } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { GraoStrip } from '../components.jsx'
import { slug, projects, categories } from '../data.jsx'

export default function Projetos() {
  usePageMeta(
    'Projetos | Pedrita — Estúdio de Design',
    'Arquivo de projetos da Pedrita: azulejo, produto, espaço, arte pública, instalação, curadoria e projetos digitais (2007–2022).',
  )

  const [active, setActive] = useState('Todos')

  const filtered = useMemo(
    () => (active === 'Todos' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────────────── */}
      <section className="bg-[#F1EEE6] px-6 pt-36 pb-12 sm:pt-44 lg:px-10">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#2B5BD7]">
              Arquivo · 2007–2022
            </span>
            <h1 className="mt-5 font-syne text-6xl font-extrabold uppercase leading-[0.9] tracking-tight text-[#15181D] sm:text-7xl lg:text-8xl">
              Projetos
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#5B6068] sm:text-xl">
              Uma seleção do trabalho do estúdio — do azulejo industrial reinventado ao design de
              espaço, arte pública e investigação. Imagens ilustrativas (placeholder).
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10">
              <GraoStrip count={28} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Filters ──────────────────────────────────────────────────── */}
      <section className="sticky top-[60px] z-30 border-y border-[#15181D]/10 bg-[#F1EEE6]/90 backdrop-blur-md">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div
            className="flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filtrar projetos por categoria"
          >
            {categories.map((c) => {
              const isActive = active === c
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  aria-pressed={isActive}
                  className={cn(
                    'shrink-0 border px-4 py-2 font-syne text-[12px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B5BD7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1EEE6]',
                    isActive
                      ? 'border-[#15181D] bg-[#15181D] text-[#F1EEE6]'
                      : 'border-[#15181D]/20 text-[#5B6068] hover:border-[#15181D] hover:text-[#15181D]',
                  )}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F1EEE6] py-14 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <p className="mb-8 font-syne text-xs font-bold uppercase tracking-[0.18em] text-[#5B6068]" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'projeto' : 'projetos'}
            {active !== 'Todos' && <span className="text-[#2B5BD7]"> · {active}</span>}
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.seed} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col">
                  <figure className="relative overflow-hidden bg-[#15181D]">
                    <img
                      src={`https://picsum.photos/seed/${p.seed}/800/600`}
                      alt={`Imagem ilustrativa (placeholder) do projeto ${p.name}, ${p.year}`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-90 grayscale-[0.15] transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#15181D]/70 via-transparent to-transparent transition-opacity duration-500 group-hover:from-[#1E40A8]/75" />
                    <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-[#2B5BD7]/10" />
                    <span className="absolute left-4 top-4 bg-[#E0B23B] px-2.5 py-1 font-syne text-[11px] font-bold uppercase tracking-[0.14em] text-[#15181D]">
                      {p.category}
                    </span>
                    <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[#F1EEE6]/40 text-[#F1EEE6] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-[#E0B23B] group-hover:bg-[#E0B23B] group-hover:text-[#15181D]">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </figure>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#15181D]/15 pb-4 pt-5">
                    <h2 className="font-syne text-2xl font-bold leading-tight text-[#15181D]">
                      {p.name}
                    </h2>
                    <span className="shrink-0 font-syne text-sm font-bold tabular-nums text-[#5B6068]">
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#5B6068]">{p.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note + CTA ───────────────────────────────────────────────── */}
      <section className="border-t border-[#15181D]/10 bg-[#F1EEE6] py-20">
        <div className="mx-auto flex max-w-[88rem] flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <Reveal>
            <p className="max-w-2xl text-pretty text-xl font-medium leading-snug text-[#15181D] sm:text-2xl">
              Mais de 50 projetos entre 2004 e 2022, do objeto à arte pública.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="group inline-flex shrink-0 items-center gap-2.5 bg-[#15181D] px-7 py-4 font-syne text-sm font-bold uppercase tracking-[0.14em] text-[#F1EEE6] transition-colors duration-200 hover:bg-[#2B5BD7] cursor-pointer"
            >
              Iniciar um projeto
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
