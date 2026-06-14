import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Check, Sparkles } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, treatments, protocols, technology } from '../data.jsx'

export default function Tratamentos() {
  usePageMeta(
    'Tratamentos | DentoFisis — Clínica Dentária, Lisboa',
    'Implantologia, ortodontia, facetas, periodontologia e mais — medicina dentária completa com tecnologia avançada em Entrecampos, Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F1F7F5] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157E72]">
              Tratamentos
            </span>
            <h1 className="mt-3 max-w-3xl font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0F2A2A] sm:text-6xl">
              Medicina dentária completa, num só espaço.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3C5852]">
              Da prevenção à reabilitação oral, reunimos todas as especialidades com diagnóstico
              rigoroso e tratamentos minimamente invasivos — sempre centrados em si.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Treatments grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 70}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#0F2A2A]/10 bg-[#F1F7F5] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F9E8E]/40 hover:bg-white hover:shadow-xl hover:shadow-[#1F9E8E]/5">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#0F2A2A] text-[#5BB6C9]">
                    <s.icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <h2 className="mt-6 font-manrope text-2xl font-bold text-[#0F2A2A]">{s.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#52706A]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive protocols */}
      <section className="bg-[#F1F7F5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157E72]">
              O que nos distingue
            </span>
            <h2 className="mt-3 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#0F2A2A] sm:text-5xl">
              Protocolos exclusivos
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {protocols.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-[#0F2A2A]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#1F9E8E]/10 text-[#157E72]">
                    <p.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-manrope text-lg font-bold text-[#0F2A2A]">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#52706A]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157E72]">
              <Sparkles className="h-4 w-4" /> Tecnologia de ponta
            </span>
            <h2 className="mt-3 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#0F2A2A] sm:text-5xl">
              Equipamento ao serviço do seu conforto.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technology.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 70}>
                <div className="flex h-full gap-4 rounded-2xl bg-[#F1F7F5] p-6 ring-1 ring-[#0F2A2A]/5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#157E72] shadow-sm">
                    <t.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-manrope text-base font-bold text-[#0F2A2A]">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#52706A]">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F1F7F5] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#0F2A2A]">
              Não sabe qual o tratamento de que precisa?
            </h2>
            <p className="mt-4 text-lg text-[#52706A]">
              Marque uma primeira consulta de avaliação. Fazemos um diagnóstico completo e explicamos
              todas as opções, sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full bg-[#0F2A2A] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#157E72] cursor-pointer"
              >
                Marcar avaliação <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#0F2A2A]/20 bg-white px-8 py-4 font-sans text-base font-bold text-[#0F2A2A] transition-colors hover:bg-[#1F9E8E]/5 cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
