import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, credentials, bio, highlights, stats } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | Advogada Suelen Cunha',
    'Suelen Cunha, advogada em Portugal e no Brasil, especialista em nacionalidade portuguesa e direito migratório. Conheça o seu percurso e abordagem.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F8F5F0] px-6 pt-20 pb-16 sm:pt-24">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#B0913F]/[0.08] blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#B0913F]">
              A advogada
            </span>
            <h1 className="mt-3 max-w-3xl font-playfair text-5xl font-semibold leading-[1.05] text-[#1E1B2E] sm:text-6xl">
              Excelência jurídica, além das fronteiras.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Bio + portrait */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2A2438] to-[#1E1B2E] shadow-2xl shadow-[#1E1B2E]/20 ring-1 ring-[#1E1B2E]/5">
                <img
                  src="https://picsum.photos/seed/suelen-cunha-2/680/850"
                  alt="Advogada Suelen Cunha — escritório em Lisboa"
                  className="h-full w-full object-cover opacity-90"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-[#7A2E3B] px-6 py-4 text-center text-[#F8F5F0] shadow-xl">
                <p className="font-playfair text-lg font-semibold">Suelen Cunha</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#E7C77E]">
                  Advogada · Portugal e Brasil
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-playfair text-2xl font-medium leading-snug text-[#1E1B2E]">
                Especializada em Nacionalidade Portuguesa e Direito Migratório, com um atendimento
                personalizado que transforma processos burocráticos em jornadas seguras.
              </p>
            </Reveal>
            <div className="mt-6 space-y-5">
              {bio.map((p, i) => (
                <Reveal key={i} delay={80 + i * 60}>
                  <p className="text-pretty text-lg leading-relaxed text-[#4A4453]">{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Credentials */}
            <Reveal delay={200}>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 rounded-2xl border border-[#1E1B2E]/10 bg-[#F8F5F0] p-4"
                  >
                    <span className="inline-grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#7A2E3B]/8 text-[#7A2E3B]">
                      <c.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <p className="text-sm font-semibold text-[#1E1B2E]">{c.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={260}>
              <div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#1E1B2E]/10 pt-8 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-playfair text-3xl font-bold text-[#7A2E3B]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase leading-snug tracking-wide text-[#8A8194]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote / philosophy */}
      <section className="bg-[#F8F5F0] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2A2438] to-[#1E1B2E] p-10 sm:p-14">
              <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[#7A2E3B]/30 blur-3xl" />
              <Quote className="h-12 w-12 text-[#E7C77E]" />
              <p className="mt-6 font-playfair text-2xl font-medium leading-snug text-[#F8F5F0] sm:text-3xl">
                “Advocacia internacional focada na busca por resultados estratégicos, com ética e
                transparência — especialista em conectar histórias entre Portugal e os outros países.”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sm ring-1 ring-white/10">
                  <img src="/logos/suelen-cunha.webp" alt="" className="h-10 w-10 object-contain" />
                </span>
                <div>
                  <p className="font-sans font-bold text-[#F8F5F0]">Suelen Cunha</p>
                  <p className="text-sm text-[#A99FB2]">Advogada · Advocacia Internacional</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose / approach */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#B0913F]">
              Por que me escolher
            </span>
            <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-[#1E1B2E] sm:text-5xl">
              Compromisso com a sua tranquilidade jurídica.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5E5766]">
              Uma advocacia pautada em cada cidadão estrangeiro que precisa de acompanhamento em
              Portugal, com o melhor suporte internacional — sem surpresas.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-[#1E1B2E]/10 bg-[#F8F5F0] p-7">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#7A2E3B] text-[#E7C77E]">
                    <h.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-playfair text-xl font-semibold text-[#1E1B2E]">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5E5766]">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-14 flex flex-col items-center gap-5 text-center">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#5E5766]">
              <Star className="h-4 w-4 fill-[#B0913F] text-[#B0913F]" />
              {brand.rating} · {brand.reviews} avaliações no Google
            </p>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#7A2E3B] px-8 py-4 font-sans text-base font-bold text-[#F8F5F0] transition-colors hover:bg-[#67262F] cursor-pointer"
            >
              Falar com a advogada <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
