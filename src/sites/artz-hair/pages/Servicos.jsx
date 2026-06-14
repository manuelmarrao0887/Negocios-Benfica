import { Link } from 'react-router-dom'
import { ArrowRight, Check, CalendarHeart, Sparkles } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, partners } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | Art.Z Hair & Experience — Lisboa',
    'Corte e hairstyling, coloração, balayage, tratamentos, alisamentos, spa, maquilhagem, unhas, barbearia e noivas — numa só experiência de beleza em Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F7F3EF] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
              Serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-cormorant text-6xl font-semibold leading-[0.98] text-[#1A1614] sm:text-7xl">
              Uma experiência de beleza completa.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A413B]">
              Do corte ao spa, da cor à barbearia — reunimos tudo o que a sua rotina de beleza precisa,
              com técnica, produtos de referência e tempo para si. Cada serviço é adaptado a quem nos
              procura.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.key} delay={(i % 3) * 70}>
                <article className="group flex h-full flex-col rounded-2xl border border-[#1A1614]/10 bg-[#F7F3EF] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#A8854E]/40 hover:bg-white hover:shadow-xl hover:shadow-[#1A1614]/5">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-full bg-[#1A1614] text-[#D8B57E]">
                    <s.icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <h2 className="mt-6 font-cormorant text-3xl font-semibold text-[#1A1614]">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#6E5A52]">{s.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-[#1A1614]/10 pt-5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-sm text-[#4A413B]">
                        <Check className="h-4 w-4 shrink-0 text-[#A8854E]" strokeWidth={2.5} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-10 text-center text-sm text-[#8A7E74]">
              Lista ilustrativa de serviços. Para o leque completo e aconselhamento personalizado,
              fale connosco — teremos todo o gosto em ajudar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partner brands */}
      <section className="border-y border-[#1A1614]/10 bg-[#F7F3EF] py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
              Trabalhamos com
            </span>
            <h2 className="mt-3 font-cormorant text-4xl font-semibold text-[#1A1614] sm:text-5xl">
              Marcas profissionais de referência
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
              {partners.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1A1614]/15 bg-white px-6 py-3 font-cormorant text-xl font-semibold text-[#1A1614]"
                >
                  <Sparkles className="h-4 w-4 text-[#A8854E]" /> {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience callout */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#1A1614] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#A8854E]/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-[#6E5A52]/25 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-jost text-xs font-semibold uppercase tracking-wider text-[#D8B57E]">
                    <Sparkles className="h-4 w-4" /> Mais do que um serviço
                  </span>
                  <h2 className="mt-5 font-cormorant text-4xl font-semibold leading-tight text-[#F7F3EF] sm:text-5xl">
                    Cada visita é um momento só seu.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#CDBFB3]">
                    Na Art.Z, o serviço é só o início. O que nos distingue é a experiência à volta dele —
                    o acolhimento, o cuidado e o tempo que dedicamos a cada cliente.
                  </p>
                </div>
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#A8854E] px-8 py-4 font-jost text-base font-semibold tracking-wide text-[#1A1614] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <CalendarHeart className="h-5 w-5" /> Marcar agora
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F3EF] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-cormorant text-5xl font-semibold leading-tight text-[#1A1614]">
              Não sabe por onde começar?
            </h2>
            <p className="mt-4 text-lg text-[#6E5A52]">
              Fale connosco. Ouvimos o que procura e desenhamos a experiência certa para si.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#1A1614] px-8 py-4 font-jost text-base font-semibold tracking-wide text-[#F7F3EF] transition-colors hover:bg-[#A8854E] cursor-pointer"
            >
              Marcar experiência <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
