import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Check, MessageCircle, Wrench } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, equipmentTags } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | Técnico Frio — Reparação de AC e frigoríficos',
    'Reparação de frigoríficos e congeladores, reparação de ar condicionado e manutenção preventiva na Grande Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F1F8FC] px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-[#16B5C9]/12 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#16B5C9]">
              Os nossos serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-outfit text-5xl font-bold leading-[1.05] text-[#0B2536] sm:text-6xl">
              Reparação e manutenção, sem rodeios.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A5E70]">
              Assistência técnica a frigoríficos, congeladores e ar condicionado — residencial e
              comercial — com diagnóstico rápido ao domicílio em toda a Grande Lisboa.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {equipmentTags.map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0B2536]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0B2536]"
                >
                  <t.icon className="h-4 w-4 text-[#0E7FC1]" strokeWidth={1.8} /> {t.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detailed services — problema → solução */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <article className="overflow-hidden rounded-3xl border border-[#0B2536]/10 bg-[#F1F8FC]">
                <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                  {/* Header side */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#0B2536] to-[#103a52] p-8 sm:p-10">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#16B5C9]/20 blur-2xl" />
                    <span className="relative inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#0E7FC1] to-[#16B5C9] text-white shadow-lg">
                      <s.icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <p className="relative mt-6 font-sans text-xs font-bold uppercase tracking-wide text-[#16B5C9]">
                      {s.eyebrow}
                    </p>
                    <h2 className="relative mt-2 font-outfit text-2xl font-bold leading-snug text-white sm:text-3xl">
                      {s.title}
                    </h2>
                    <p className="relative mt-4 text-[15px] leading-relaxed text-[#a7bccb]">{s.desc}</p>
                    <a
                      href={brand.phoneHref}
                      className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 font-sans text-sm font-bold text-white transition-colors hover:bg-white/20 cursor-pointer"
                    >
                      <Phone className="h-4 w-4 text-[#16B5C9]" /> Pedir orçamento
                    </a>
                  </div>

                  {/* Problems → solution side */}
                  <div className="p-8 sm:p-10">
                    <p className="font-sans text-sm font-bold uppercase tracking-wide text-[#0E7FC1]">
                      {s.id === 'manutencao' ? 'O que inclui' : 'Sintomas que resolvemos'}
                    </p>
                    <ul className="mt-5 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                      {s.problems.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#16B5C9]/15 text-[#0E7FC1]">
                            <Check className="h-3 w-3" strokeWidth={3.5} />
                          </span>
                          <span className="text-[15px] leading-snug text-[#0B2536]">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Home visit callout */}
      <section className="bg-[#F1F8FC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E7FC1] to-[#16B5C9] px-8 py-12 sm:px-14 sm:py-16">
              <Wrench className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-white/10" strokeWidth={0.8} aria-hidden="true" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-white">
                    Ao domicílio
                  </span>
                  <h2 className="mt-5 font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Diagnóstico rápido onde precisar.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-white/90">
                    Deslocamo-nos a sua casa ou ao seu espaço comercial em toda a Grande Lisboa. Conte-nos
                    o que se passa e tratamos do resto.
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-3">
                  <a
                    href={brand.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-sans text-base font-bold text-[#0E7FC1] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <Phone className="h-5 w-5" /> {brand.phoneDisplay}
                  </a>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/10 cursor-pointer"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-outfit text-4xl font-bold leading-tight text-[#0B2536]">
              Não sabe qual é a avaria?
            </h2>
            <p className="mt-4 text-lg text-[#4A5E70]">
              Descreva-nos os sintomas e fazemos o diagnóstico. Indicamos a melhor solução para o seu
              equipamento.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0E7FC1] to-[#16B5C9] px-8 py-4 font-sans text-base font-bold text-white shadow-lg shadow-[#0E7FC1]/25 transition-all hover:brightness-105 cursor-pointer"
            >
              {brand.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
