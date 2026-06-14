import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Check } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, steps } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | Factiva — Contabilidade e Gestão, Lisboa',
    'Contabilidade geral, fiscalidade (IRS, IRC, IVA), processamento salarial, constituição de empresas e consultoria de gestão, em Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F4F7FB] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#18A07A]">
              O que fazemos
            </span>
            <h1 className="mt-3 max-w-3xl font-jakarta text-5xl font-extrabold leading-[1.05] text-[#14233B] sm:text-6xl">
              Serviços de contabilidade e gestão.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#46566F]">
              Desde a contabilidade do dia a dia ao cumprimento das obrigações fiscais e ao apoio na
              gestão, reunimos tudo o que a sua empresa ou a sua situação pessoal precisam.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 70}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#14233B]/10 bg-[#F4F7FB] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563B0]/40 hover:bg-white hover:shadow-xl hover:shadow-[#14233B]/5">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#2563B0] text-white">
                    <s.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-6 font-jakarta text-2xl font-bold text-[#14233B]">{s.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5C6A82]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F4F7FB] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#18A07A]">
              O nosso método
            </span>
            <h2 className="mt-3 font-jakarta text-4xl font-extrabold leading-tight text-[#14233B] sm:text-5xl">
              Quatro passos para contas tranquilas.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-[#14233B]/10 bg-white p-7">
                  <span className="font-jakarta text-4xl font-extrabold text-[#2563B0]/25">{s.n}</span>
                  <h3 className="mt-3 font-jakarta text-lg font-bold text-[#14233B]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6A82]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Included callout */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#14233B] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#2563B0]/25 blur-3xl" />
              <div className="relative grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="font-jakarta text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    Acompanhamento durante todo o ano.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#A9B8D1]">
                    Não desaparecemos depois do fecho de contas. Estamos disponíveis sempre que precisar
                    de esclarecer uma dúvida ou tomar uma decisão importante para o seu negócio.
                  </p>
                  <a
                    href={brand.phoneHref}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2563B0] px-7 py-4 font-sans text-base font-bold text-white transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <Phone className="h-5 w-5" /> Ligar agora
                  </a>
                </div>
                <ul className="grid gap-4">
                  {[
                    'Esclarecimento de dúvidas fiscais',
                    'Alertas dos prazos das obrigações',
                    'Apoio na relação com a Autoridade Tributária',
                    'Linguagem clara, sem jargão desnecessário',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 rounded-xl bg-white/5 p-4 text-[#C6D3E6]">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#18A07A] text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm font-semibold">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-jakarta text-4xl font-extrabold leading-tight text-[#14233B]">
              Não sabe por onde começar?
            </h2>
            <p className="mt-4 text-lg text-[#5C6A82]">
              Conte-nos a sua situação. Indicamos o melhor enquadramento e um orçamento à medida.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#2563B0] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#1d4f8f] cursor-pointer"
            >
              Pedir orçamento <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
