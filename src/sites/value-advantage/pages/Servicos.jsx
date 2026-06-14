import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Check, MessageCircle } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, approach } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | Value Advantage — Contabilidade e Gestão',
    'Contabilidade, recursos humanos, faturação, consultoria de gestão, finanças pessoais, constituição de empresas, alojamento local, E-Fatura e IRS — em Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F5F8F6] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#B68A2E]">
              O que fazemos
            </span>
            <h1 className="mt-3 max-w-3xl font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-[#102A23] sm:text-6xl">
              Da contabilidade à gestão, tratamos de tudo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3F5249]">
              Uma gama completa de serviços de contabilidade, fiscalidade e apoio à gestão, executados com
              rigor técnico e a proximidade que nos define. Cada solução é ajustada à realidade do seu
              negócio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list — alternating, with points */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90}>
              <div className="group grid gap-8 rounded-3xl border border-[#102A23]/10 bg-[#F5F8F6] p-8 transition-colors duration-300 hover:border-[#2E7D6A]/30 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#2E7D6A] text-white">
                      <s.icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <span className="font-manrope text-sm font-bold text-[#B68A2E]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-5 font-manrope text-2xl font-extrabold text-[#102A23] sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#3F5249]">{s.desc}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-snug text-[#33473F] ring-1 ring-[#102A23]/5"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#2E7D6A]/12 text-[#2E7D6A]">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#F5F8F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#B68A2E]">
              Como trabalhamos
            </span>
            <h2 className="mt-3 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#102A23] sm:text-5xl">
              Um método próximo, do primeiro dia.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal key={a.step} delay={(i % 4) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-[#102A23]/10 bg-white p-7">
                  <span className="font-manrope text-4xl font-extrabold text-[#2E7D6A]/25">{a.step}</span>
                  <h3 className="mt-4 font-manrope text-lg font-bold text-[#102A23]">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A6E64]">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign callout */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#102A23] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#2E7D6A]/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#B68A2E]/20 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#D8B45E]">
                    Começar um negócio
                  </span>
                  <h2 className="mt-5 font-manrope text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    Vai constituir empresa ou legalizar o seu Alojamento Local?
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#9DBDB1]">
                    Tratamos de toda a constituição da sociedade e do enquadramento fiscal, para que possa
                    arrancar com o pé direito. Fale connosco e simplificamos o processo.
                  </p>
                </div>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#B68A2E] px-7 py-4 font-sans text-base font-bold text-[#102A23] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F8F6] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#102A23]">
              Não sabe por onde começar?
            </h2>
            <p className="mt-4 text-lg text-[#5A6E64]">
              Conte-nos o que precisa. Analisamos o seu caso e indicamos a melhor solução, sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#2E7D6A] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#256655] cursor-pointer"
            >
              Pedir proposta <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
