import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { Grao, GraoStrip } from '../components.jsx'
import { slug, brand, founders, approach, clients, press, stats } from '../data.jsx'

export default function Estudio() {
  usePageMeta(
    'Estúdio | Pedrita — Estúdio de Design',
    'Rita João e Pedro Ferreira fundaram a Pedrita em Lisboa, em 2005. Conheça o percurso, a filosofia e o método do estúdio.',
  )

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────────────── */}
      <section className="bg-[#F1EEE6] px-6 pt-36 pb-16 sm:pt-44 lg:px-10">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <Reveal>
                <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#2B5BD7]">
                  O estúdio
                </span>
                <h1 className="mt-5 max-w-4xl font-syne text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-[#15181D] sm:text-7xl lg:text-8xl">
                  Olhar
                  <br />
                  inquisitivo
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#5B6068] sm:text-xl">
                  {brand.tagline} {brand.statement}
                </p>
              </Reveal>
            </div>
            <Reveal delay={160} className="hidden lg:block">
              <Grao className="w-64" gap="3px" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Origin / Fabrica ─────────────────────────────────────────── */}
      <section className="bg-[#15181D] py-24 text-[#F1EEE6] sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
            <Reveal>
              <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#E0B23B]">
                (Origem)
              </span>
            </Reveal>
            <div>
              <Reveal>
                <p className="max-w-4xl text-balance font-syne text-2xl font-semibold leading-[1.25] tracking-tight sm:text-3xl lg:text-4xl">
                  Antes da Pedrita, Rita João e Pedro Ferreira trabalharam na{' '}
                  <span className="text-[#E0B23B]">Fabrica</span> — o centro de pesquisa da Benetton —
                  entre 2002 e 2004, onde coordenaram o Departamento de Design 3D, ao lado de Jaime
                  Hayon.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#9aa0a8]">
                  Em 2005 fundaram o estúdio em Lisboa. Desde então, montam equipa e recursos à medida
                  de cada projeto e acolhem estagiários internacionais — uma estrutura que se molda ao
                  problema, e não o contrário.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-12 grid grid-cols-2 gap-px sm:grid-cols-4">
                  {stats.map((s) => (
                    <div key={s.label} className="py-4">
                      <div className="font-syne text-4xl font-extrabold tracking-tight text-[#F1EEE6] sm:text-5xl">
                        {s.value}
                      </div>
                      <div className="mt-2 font-syne text-[11px] font-bold uppercase tracking-[0.16em] text-[#7d828a]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founders ─────────────────────────────────────────────────── */}
      <section className="bg-[#F1EEE6] py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Reveal>
            <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#2B5BD7]">
              Cofundadores
            </span>
            <h2 className="mt-4 font-syne text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#15181D] sm:text-5xl">
              Rita &amp; Pedro
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <article className="flex h-full flex-col border-t-2 border-[#15181D] bg-[#F1EEE6] pt-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-16 w-16 place-items-center bg-[#15181D] font-syne text-2xl font-bold text-[#E0B23B]">
                      {f.initials}
                    </span>
                    <span className="font-syne text-xs font-bold uppercase tracking-[0.18em] text-[#5B6068]">
                      n. {f.born}
                    </span>
                  </div>
                  <h3 className="mt-6 font-syne text-3xl font-bold text-[#15181D]">{f.name}</h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#5B6068]">{f.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-12 max-w-3xl text-pretty text-lg leading-relaxed text-[#5B6068]">
              Ambos se formaram em Design na Faculdade de Arquitetura da Universidade Técnica de
              Lisboa. Rita estudou também na TU Delft; Pedro, no Politecnico di Milano.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Signature / Grão ─────────────────────────────────────────── */}
      <section className="border-y border-[#15181D]/10 bg-[#F1EEE6] py-24 sm:py-28">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-24">
            <div>
              <Reveal>
                <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#2B5BD7]">
                  Assinatura
                </span>
                <h2 className="mt-4 max-w-xl font-syne text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#15181D] sm:text-5xl">
                  O sistema Grão
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5B6068]">
                  Criado em 2007, o «Grão» é uma composição visual abstrato-figurativa feita com
                  azulejo industrial descontinuado. Reaproveita técnicas e materiais tradicionais
                  portugueses, transformando o desperdício industrial num vocabulário próprio — a
                  imagem que resume todo o trabalho do estúdio.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8">
                  <GraoStrip count={24} />
                </div>
              </Reveal>
            </div>
            <Reveal delay={140} className="mx-auto">
              <Grao className="w-72 sm:w-80" gap="3px" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Approach / method ────────────────────────────────────────── */}
      <section className="bg-[#15181D] py-24 text-[#F1EEE6] sm:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Reveal>
            <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#E0B23B]">
              Método
            </span>
            <h2 className="mt-4 max-w-2xl font-syne text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Como trabalhamos
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px sm:grid-cols-2">
            {approach.map((a, i) => (
              <Reveal key={a.no} delay={(i % 2) * 90}>
                <div className="flex h-full flex-col border-t border-white/15 py-8">
                  <span className="font-syne text-5xl font-extrabold text-[#2B5BD7] sm:text-6xl">
                    {a.no}
                  </span>
                  <h3 className="mt-5 font-syne text-2xl font-bold text-[#F1EEE6]">{a.title}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#9aa0a8]">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients & press ──────────────────────────────────────────── */}
      <section className="bg-[#F1EEE6] py-24 sm:py-28">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#5B6068]">
                Clientes &amp; colaborações
              </span>
              <ul className="mt-6 border-t border-[#15181D]/15">
                {clients.map((c) => (
                  <li
                    key={c}
                    className="border-b border-[#15181D]/15 py-3.5 font-syne text-xl font-semibold text-[#15181D] sm:text-2xl"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#5B6068]">
                Imprensa &amp; instituições
              </span>
              <ul className="mt-6 border-t border-[#15181D]/15">
                {press.map((p) => (
                  <li
                    key={p}
                    className="border-b border-[#15181D]/15 py-3.5 font-syne text-xl font-semibold text-[#15181D] sm:text-2xl"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#2B5BD7] py-20 text-[#F1EEE6] sm:py-28">
        <div className="mx-auto flex max-w-[88rem] flex-col items-start gap-10 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-balance font-syne text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
              Tem um projeto<br />em mente?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="group inline-flex items-center gap-3 bg-[#F1EEE6] px-8 py-4 font-syne text-sm font-bold uppercase tracking-[0.14em] text-[#15181D] transition-colors duration-200 hover:bg-[#E0B23B] cursor-pointer"
            >
              Contactar o estúdio
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
