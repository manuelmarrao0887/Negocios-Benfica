import { Link } from 'react-router-dom'
import { ArrowRight, Check, Phone, Globe2 } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, areas, approach } from '../data.jsx'

export default function Areas() {
  usePageMeta(
    'Áreas de Prática | Advogada Suelen Cunha',
    'Nacionalidade portuguesa, vistos (D7, D2, D8), reagrupamento familiar, revisão de sentença estrangeira e direito migratório, em Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F8F5F0] px-6 pt-20 pb-16 sm:pt-24">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#7A2E3B]/[0.06] blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#B0913F]">
              Áreas de prática
            </span>
            <h1 className="mt-3 max-w-3xl font-playfair text-5xl font-semibold leading-[1.05] text-[#1E1B2E] sm:text-6xl">
              Soluções especializadas em Portugal.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A4453]">
              Atuação estratégica e focada nas necessidades dos cidadãos estrangeiros em Portugal.
              Do pedido de nacionalidade ao planeamento da sua mudança, acompanho cada etapa com
              rigor técnico e proximidade.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Areas grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 90}>
                <div className="group flex h-full flex-col rounded-3xl border border-[#1E1B2E]/10 bg-[#F8F5F0] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#B0913F]/40 hover:bg-white hover:shadow-xl hover:shadow-[#1E1B2E]/5 sm:p-9">
                  <div className="flex items-start gap-5">
                    <span className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#7A2E3B] text-[#E7C77E]">
                      <a.icon className="h-7 w-7" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h2 className="font-playfair text-2xl font-semibold text-[#1E1B2E]">{a.title}</h2>
                    </div>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-[#5E5766]">{a.desc}</p>
                  <ul className="mt-6 grid gap-2.5 border-t border-[#1E1B2E]/8 pt-6">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm font-medium text-[#3F3947]">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#B0913F]/15 text-[#8A6E1F]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#F8F5F0] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#B0913F]">
              Método de trabalho
            </span>
            <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-[#1E1B2E] sm:text-5xl">
              Como conduzo o seu processo.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal key={a.step} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-[#1E1B2E]/10 bg-white p-7">
                  <span className="absolute right-6 top-5 font-playfair text-4xl font-bold text-[#7A2E3B]/10">
                    {a.step}
                  </span>
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#7A2E3B]/8 text-[#7A2E3B]">
                    <a.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-playfair text-lg font-semibold text-[#1E1B2E]">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5E5766]">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* International callout */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#1E1B2E] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#7A2E3B]/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-[#B0913F]/15 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#E7C77E]">
                    <Globe2 className="h-4 w-4" /> Advocacia internacional
                  </span>
                  <h2 className="mt-5 font-playfair text-3xl font-semibold leading-tight text-[#F8F5F0] sm:text-4xl">
                    Não sabe por onde começar o seu processo?
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#CFC6D6]">
                    Cada situação é diferente. Conte-me a sua história e indico-lhe o melhor caminho,
                    com uma análise honesta e personalizada do seu caso.
                  </p>
                </div>
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#E7C77E] px-7 py-4 font-sans text-base font-bold text-[#1E1B2E] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  Marcar consulta <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F5F0] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-playfair text-4xl font-semibold leading-tight text-[#1E1B2E]">
              Pronto para dar o próximo passo?
            </h2>
            <p className="mt-4 text-lg text-[#5E5766]">
              Agende uma reunião e tenha segurança jurídica em cada etapa, presencialmente em Lisboa
              ou à distância.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full bg-[#7A2E3B] px-8 py-4 font-sans text-base font-bold text-[#F8F5F0] transition-colors hover:bg-[#67262F] cursor-pointer"
              >
                Agendar reunião <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#1E1B2E]/20 px-8 py-4 font-sans text-base font-bold text-[#1E1B2E] transition-colors hover:bg-white cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#7A2E3B]" /> {brand.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
