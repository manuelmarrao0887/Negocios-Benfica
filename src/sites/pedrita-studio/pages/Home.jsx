import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { Grao, GraoStrip, ProjectCard } from '../components.jsx'
import { slug, brand, projects, featuredSeeds, disciplines, clients, press, stats } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Pedrita — Estúdio de design multidisciplinar em Lisboa',
    'Pedrita é um estúdio de design multidisciplinar em Lisboa, fundado em 2005. Produto, espaço, arte pública, azulejo, curadoria e investigação.',
  )

  const featured = featuredSeeds
    .map((s) => projects.find((p) => p.seed === s))
    .filter(Boolean)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F1EEE6] pt-32 sm:pt-40 lg:pt-48">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2.5 font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#2B5BD7]">
                  <span className="h-2 w-2 bg-[#E0B23B]" />
                  Lisboa · desde {brand.since}
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-7 font-syne text-[14vw] font-extrabold uppercase leading-[0.86] tracking-[-0.02em] text-[#15181D] sm:text-[12vw] lg:text-[8.5rem]">
                  Estúdio<br />
                  de <span className="text-[#2B5BD7]">design</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-[#5B6068] sm:text-xl">
                  Estúdio de design multidisciplinar em Lisboa. {brand.statement}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to={siteLink(slug, 'projetos')}
                    className="group inline-flex items-center gap-2.5 bg-[#15181D] px-7 py-4 font-syne text-sm font-bold uppercase tracking-[0.14em] text-[#F1EEE6] transition-colors duration-200 hover:bg-[#2B5BD7] cursor-pointer"
                  >
                    Ver projetos
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to={siteLink(slug, 'estudio')}
                    className="inline-flex items-center gap-2 border border-[#15181D]/25 px-7 py-4 font-syne text-sm font-bold uppercase tracking-[0.14em] text-[#15181D] transition-colors duration-200 hover:border-[#15181D] hover:bg-[#15181D]/[0.04] cursor-pointer"
                  >
                    O estúdio
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Signature Grão motif */}
            <Reveal delay={200} className="hidden lg:block">
              <Grao className="w-[19rem] xl:w-[22rem]" gap="3px" />
              <p className="mt-4 text-right font-syne text-[11px] font-bold uppercase tracking-[0.22em] text-[#5B6068]">
                Grão — 2007
              </p>
            </Reveal>
          </div>

          {/* mobile Grão */}
          <Reveal delay={200} className="mt-12 lg:hidden">
            <Grao className="mx-auto w-56 max-w-full" gap="3px" />
            <p className="mt-3 text-center font-syne text-[11px] font-bold uppercase tracking-[0.22em] text-[#5B6068]">
              Grão — 2007
            </p>
          </Reveal>
        </div>

        {/* discipline marquee */}
        <div className="mt-16 overflow-hidden border-y border-[#15181D]/10 py-4 sm:mt-24">
          <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
            {[...disciplines, ...disciplines].map((d, i) => (
              <span key={i} className="flex items-center gap-10 font-syne text-sm font-bold uppercase tracking-[0.2em] text-[#15181D]">
                {d}
                <span className="h-2 w-2 shrink-0 rotate-45 bg-[#2B5BD7]" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statement ────────────────────────────────────────────────── */}
      <section className="bg-[#F1EEE6] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
            <Reveal>
              <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#5B6068]">
                (Manifesto)
              </span>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-4xl text-balance font-syne text-3xl font-semibold leading-[1.18] tracking-tight text-[#15181D] sm:text-4xl lg:text-[3.25rem]">
                Reinventamos técnicas e materiais tradicionais portugueses — sobretudo o{' '}
                <span className="text-[#2B5BD7]">azulejo</span> industrial descontinuado — reunindo
                soluções formais inesperadas e{' '}
                <span className="text-[#2B5BD7]">conscientes</span>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Featured projects ────────────────────────────────────────── */}
      <section className="bg-[#15181D] py-24 text-[#F1EEE6] sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#E0B23B]">
                Trabalho selecionado
              </span>
              <h2 className="mt-4 max-w-2xl font-syne text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
                Projetos
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'projetos')}
                className="group inline-flex shrink-0 items-center gap-2 font-syne text-sm font-bold uppercase tracking-[0.14em] text-[#F1EEE6] transition-colors hover:text-[#E0B23B] cursor-pointer"
              >
                Arquivo completo
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.seed} delay={(i % 3) * 90}>
                <ProjectCard project={p} index={i} linkToProjects />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disciplines / what we do ─────────────────────────────────── */}
      <section className="bg-[#F1EEE6] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#2B5BD7]">
                Disciplinas
              </span>
              <h2 className="mt-4 font-syne text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#15181D] sm:text-5xl">
                Uma prática<br />multidisciplinar
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#5B6068]">
                Montamos equipa e recursos à medida de cada projeto, do objeto ao espaço, da arte
                pública à investigação.
              </p>
              <div className="mt-8">
                <GraoStrip count={20} />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="grid grid-cols-1 border-t border-[#15181D]/15 sm:grid-cols-2">
                {disciplines.map((d, i) => (
                  <li
                    key={d}
                    className="group flex items-baseline gap-4 border-b border-[#15181D]/15 py-5 sm:py-6"
                  >
                    <span className="font-syne text-xs font-bold tabular-nums text-[#9aa0a8]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-syne text-xl font-semibold text-[#15181D] transition-colors duration-200 group-hover:text-[#2B5BD7] sm:text-2xl">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────────── */}
      <section className="border-y border-[#15181D]/10 bg-[#F1EEE6]">
        <div className="mx-auto grid max-w-[88rem] grid-cols-2 gap-px px-6 lg:grid-cols-4 lg:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="py-12 sm:py-16">
              <div className="font-syne text-5xl font-extrabold tracking-tight text-[#15181D] sm:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 font-syne text-xs font-bold uppercase tracking-[0.18em] text-[#5B6068]">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Clients ──────────────────────────────────────────────────── */}
      <section className="bg-[#F1EEE6] py-24 sm:py-28">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Reveal>
            <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#5B6068]">
              Clientes &amp; colaborações
            </span>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5 sm:gap-x-14">
              {clients.map((c) => (
                <span
                  key={c}
                  className="font-syne text-2xl font-bold uppercase tracking-tight text-[#15181D]/80 transition-colors duration-200 hover:text-[#2B5BD7] sm:text-3xl"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-16 flex flex-col gap-4 border-t border-[#15181D]/15 pt-8 sm:flex-row sm:items-center sm:gap-8">
              <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#5B6068]">
                Imprensa
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-[#5B6068]">
                {press.map((p, i) => (
                  <span key={p} className="flex items-center gap-6">
                    <span className="text-[#15181D]">{p}</span>
                    {i < press.length - 1 && <span className="text-[#2B5BD7]" aria-hidden="true">/</span>}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#2B5BD7] py-20 text-[#F1EEE6] sm:py-28">
        <div className="mx-auto flex max-w-[88rem] flex-col items-start gap-10 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-balance font-syne text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
              Vamos trabalhar<br />juntos?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="group inline-flex items-center gap-3 bg-[#F1EEE6] px-8 py-4 font-syne text-sm font-bold uppercase tracking-[0.14em] text-[#15181D] transition-colors duration-200 hover:bg-[#E0B23B] cursor-pointer"
            >
              Falar com o estúdio
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
