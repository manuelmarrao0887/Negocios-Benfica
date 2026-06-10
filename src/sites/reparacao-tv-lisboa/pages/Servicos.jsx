import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Check, ArrowDown, Lightbulb } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, diagnosis, equipment, guarantees } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | Reparação TV Lisboa',
    'Reparação de televisores de quase todas as marcas, substituição de kits de LED, diagnóstico detalhado e garantia até 2 anos.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#0B1220] px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#2E7DF6]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#2E7DF6]">
              Serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-space text-4xl font-bold leading-[1.05] text-[#E8EEF7] sm:text-5xl">
              Tudo o que a sua televisão pode precisar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#93A4BC]">
              Trabalhamos em exclusivo com televisores — LED, LCD, Plasma e Smart TV — de quase todas as
              marcas. Diagnóstico rigoroso, orçamento gratuito e reparação só após a sua aprovação.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core services */}
      <section className="border-t border-white/[0.06] bg-[#0d1526] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div
                  className={
                    'flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ' +
                    (s.featured
                      ? 'border-[#2E7DF6]/40 bg-gradient-to-b from-[#15233d] to-[#131C2E] shadow-xl shadow-[#2E7DF6]/10'
                      : 'border-white/[0.07] bg-[#131C2E] hover:border-[#2E7DF6]/30')
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#0B1220] text-[#2E7DF6] ring-1 ring-[#2E7DF6]/25">
                      <s.icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    {s.featured && (
                      <span className="rounded-full bg-[#2E7DF6]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2E7DF6]">
                        Especialidade
                      </span>
                    )}
                  </div>
                  <h2 className="mt-6 font-space text-2xl font-bold text-[#E8EEF7]">{s.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#93A4BC]">{s.desc}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-6">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-[#cdd7e6]">
                        <Check className="h-4 w-4 shrink-0 text-[#18C29C]" strokeWidth={2.5} /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LED specialty feature */}
      <section className="bg-[#0B1220] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#2E7DF6]/25 bg-gradient-to-br from-[#15233d] to-[#0e1730] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#2E7DF6]/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-[#18C29C]/12 blur-3xl" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#2E7DF6]/15 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#2E7DF6]">
                    <Lightbulb className="h-4 w-4" /> A nossa especialidade
                  </span>
                  <h2 className="mt-5 font-space text-3xl font-bold leading-tight text-[#E8EEF7] sm:text-4xl">
                    Substituição de kits de LED
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#93A4BC]">
                    A retroiluminação é a causa mais comum de ecrãs pretos, imagens escuras e
                    escurecimentos parciais. Substituímos kits de LED em quase todas as marcas, com um
                    acabamento testado e <span className="text-[#E8EEF7]">2 anos de garantia</span>.
                  </p>
                  <a
                    href={brand.phoneHref}
                    className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#2E7DF6] px-6 py-3 font-sans text-sm font-bold text-white transition-colors hover:bg-[#1f6fe8] cursor-pointer"
                  >
                    <Phone className="h-4 w-4" /> Falar sobre a minha TV
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: '2 anos', l: 'Garantia nos LEDs' },
                    { v: 'Quase todas', l: 'as marcas' },
                    { v: 'Testado', l: 'antes da entrega' },
                    { v: 'Grátis', l: 'Diagnóstico' },
                  ].map((c) => (
                    <div key={c.l} className="rounded-2xl border border-white/[0.08] bg-[#0B1220]/60 p-5 text-center">
                      <div className="font-space text-2xl font-bold text-[#18C29C]">{c.v}</div>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#93A4BC]">{c.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Symptom → solution */}
      <section className="border-y border-white/[0.06] bg-[#0d1526] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#18C29C]">
              Do sintoma à solução
            </span>
            <h2 className="mt-3 font-space text-3xl font-bold leading-tight text-[#E8EEF7] sm:text-4xl">
              O que o sintoma costuma revelar.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#93A4BC]">
              Cada avaria deixa pistas. Estas são as causas mais frequentes — confirmadas sempre com
              medição antes de avançar.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4">
            {diagnosis.map((d, i) => (
              <Reveal key={d.symptom} delay={i * 80}>
                <div className="grid items-center gap-4 rounded-2xl border border-white/[0.07] bg-[#131C2E] p-5 sm:grid-cols-[auto_1fr_auto_1fr] sm:p-6">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#18C29C]/10 text-[#18C29C]">
                    <d.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#6c7d96]">Sintoma</p>
                    <p className="mt-0.5 font-space text-base font-bold text-[#E8EEF7]">{d.symptom}</p>
                  </div>
                  <ArrowDown className="h-5 w-5 justify-self-start text-[#2E7DF6] sm:rotate-[-90deg] sm:justify-self-center" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#6c7d96]">Causa provável</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#93A4BC]">{d.cause}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-[#0B1220] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#2E7DF6]">
              Equipamento
            </span>
            <h2 className="mt-3 font-space text-3xl font-bold leading-tight text-[#E8EEF7] sm:text-4xl">
              Diagnóstico ao nível do componente.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#93A4BC]">
              Instrumentação profissional que nos permite encontrar a causa exata, em vez de trocar peças
              à sorte.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((e, i) => (
              <Reveal key={e.title} delay={(i % 4) * 80}>
                <div className="group h-full rounded-2xl border border-white/[0.07] bg-[#131C2E] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E7DF6]/30">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#0B1220] text-[#2E7DF6] ring-1 ring-[#2E7DF6]/25 transition-colors duration-300 group-hover:bg-[#2E7DF6] group-hover:text-white">
                    <e.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-space text-base font-bold leading-snug text-[#E8EEF7]">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#93A4BC]">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee + CTA */}
      <section className="border-t border-white/[0.06] bg-[#0d1526] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#18C29C]">
                Garantia
              </span>
              <h2 className="mt-3 font-space text-3xl font-bold leading-tight text-[#E8EEF7] sm:text-4xl">
                O trabalho fica garantido.
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#93A4BC]">
                Toda a reparação tem garantia. E a substituição de LEDs, por ser a nossa especialidade,
                tem cobertura ainda mais alargada.
              </p>
              <Link
                to={siteLink(slug, 'contacto')}
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#2E7DF6] px-7 py-3.5 font-sans text-base font-bold text-white transition-colors hover:bg-[#1f6fe8] cursor-pointer"
              >
                Pedir orçamento <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {guarantees.map((g) => (
                  <div key={g.period} className="rounded-2xl border border-white/[0.07] bg-[#131C2E] p-7 text-center">
                    <span className="mx-auto inline-grid h-12 w-12 place-items-center rounded-full bg-[#18C29C]/10 text-[#18C29C]">
                      <g.icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div className="mt-4 font-space text-3xl font-bold text-[#E8EEF7]">{g.period}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#93A4BC]">{g.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
