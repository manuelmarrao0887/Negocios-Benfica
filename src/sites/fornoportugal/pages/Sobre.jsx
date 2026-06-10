import { Link } from 'react-router-dom'
import { ArrowRight, Flame, Globe2 } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, stats, certifications, values, countries } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | Fornoportugal — Refractários desde 1991',
    'Fundada em 1991, a Fornoportugal soma mais de 30 anos de engenharia de refractários, certificação ISO 9001 e ISO 45001 e obras em 27 países.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#17110D] px-6 pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#E5562A]/15 blur-[110px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#E8A33D]/10 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#E5562A]">
              Sobre a Fornoportugal
            </span>
            <h1 className="mt-3 max-w-4xl font-oswald text-5xl font-bold uppercase leading-[1.0] text-[#F3EAE2] sm:text-6xl">
              Três décadas a dominar o calor.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#B59E90]">
              Desde 1991 que a Fornoportugal — Montagem de Refractários, Lda. constrói, reconstrói e
              isola fornos industriais de alta temperatura para a indústria de toda a Europa e do mundo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#1c1410] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#211814] p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#E5562A]/20 blur-3xl" />
              <Flame className="relative h-10 w-10 text-[#E5562A]" />
              <p className="relative mt-6 font-oswald text-2xl font-medium uppercase leading-snug tracking-wide text-[#F3EAE2]">
                “A engenharia de refractários é a base invisível da indústria pesada. É o nosso ofício
                há mais de 30 anos.”
              </p>
              <div className="relative mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {stats.map((s) => (
                  <div key={s.label} className="bg-[#211814] px-5 py-5 text-center">
                    <div className="font-oswald text-3xl font-bold text-[#E8A33D]">{s.value}</div>
                    <div className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B59E90]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#B59E90]">
                A Fornoportugal nasceu em {brand.since} com uma especialização clara: a montagem de
                revestimentos refractários para fornos industriais. Ao longo das décadas, acompanhámos
                a evolução da indústria do vidro, do aço, do cimento e da petroquímica, sempre com a
                mesma exigência técnica.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#B59E90]">
                Hoje somos uma referência B2B com atuação internacional, capazes de mobilizar equipas
                especializadas para construir, reparar e supervisionar fornos onde quer que a indústria
                precise — sustentados por um compromisso firme com a qualidade e a segurança.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-[#E5562A]/40 bg-[#E5562A]/10 px-6 py-4">
                <span className="font-oswald text-lg font-semibold uppercase tracking-[0.08em] text-[#E8A33D]">
                  {brand.claim}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#17110D] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#E5562A]">
              Qualidade e segurança
            </span>
            <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#F3EAE2] sm:text-5xl">
              Certificados pelos mais altos padrões.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#B59E90]">
              A nossa atuação é auditada e certificada — garantia de processos consistentes e de um
              ambiente de trabalho seguro em cada obra.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.code} delay={i * 100}>
                <div className="flex h-full items-start gap-5 rounded-2xl border border-white/10 bg-[#211814] p-8">
                  <span className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-md bg-gradient-to-br from-[#E5562A] to-[#E8A33D] text-[#17110D]">
                    <c.icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-oswald text-2xl font-bold uppercase tracking-wide text-[#E8A33D]">{c.code}</p>
                    <p className="mt-0.5 font-oswald text-sm font-medium uppercase tracking-[0.1em] text-[#F3EAE2]">
                      {c.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#8a7565]">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/10 bg-[#1c1410] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#E5562A]">
              O que nos define
            </span>
            <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#F3EAE2] sm:text-5xl">
              Valores forjados em obra.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-xl border border-white/10 bg-[#211814] p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-md bg-[#E5562A]/12 text-[#E5562A]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-oswald text-xl font-semibold uppercase tracking-wide text-[#F3EAE2]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8a7565]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* International footprint */}
      <section className="bg-[#17110D] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#E5562A]">
                <Globe2 className="h-4 w-4" /> Presença internacional
              </span>
              <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#F3EAE2] sm:text-5xl">
                Onde a indústria nos chama.
              </h2>
            </div>
            <span className="font-oswald text-6xl font-bold leading-none text-[#E8A33D]">27</span>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap gap-2.5">
              {countries.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-[#211814] px-4 py-2 font-oswald text-sm font-medium uppercase tracking-[0.08em] text-[#B59E90] transition-colors duration-200 hover:border-[#E5562A]/50 hover:text-[#F3EAE2] cursor-default"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-14 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="group inline-flex items-center gap-2 rounded-md bg-[#E5562A] px-8 py-4 font-oswald text-base font-semibold uppercase tracking-[0.06em] text-[#17110D] transition-all duration-200 hover:bg-[#E8A33D] cursor-pointer"
            >
              Trabalhe connosco
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
