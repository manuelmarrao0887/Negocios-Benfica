import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Check, Plane } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, audience } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | Conta 100% — Contabilidade',
    'Contabilidade geral, outsourcing administrativo, recursos humanos, consultoria fiscal, IRS e gestão de seguros. Em Benfica, Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F4F8F6] px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-[#3AC2CF]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#0B7C88]">
              Serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-jakarta text-5xl font-extrabold leading-[1.05] text-[#16363B] sm:text-6xl">
              Da contabilidade à fiscalidade, tratamos de tudo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#51635C]">
              Seis áreas de serviço que cobrem todo o ciclo de vida do seu negócio — e também a sua vida
              pessoal. Com responsabilização de Contabilista Certificado e acompanhamento próximo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid (detailed) */}
      <section className="bg-[#FFFFFF] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 90}>
                <div className="group flex h-full flex-col rounded-3xl border border-[#16363B]/10 bg-[#F4F8F6] p-8 transition-all duration-300 hover:border-[#0B7C88]/40 hover:bg-[#FFFFFF] hover:shadow-xl hover:shadow-[#16363B]/5 sm:p-10">
                  <div className="flex items-center gap-4">
                    <span className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#16363B] text-[#3AC2CF] transition-colors duration-300 group-hover:bg-[#0B7C88] group-hover:text-[#FFFFFF]">
                      <s.icon className="h-7 w-7" strokeWidth={1.7} />
                    </span>
                    <h2 className="font-jakarta text-2xl font-bold text-[#16363B]">{s.title}</h2>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-[#51635C]">{s.desc}</p>
                  <ul className="mt-6 grid gap-2.5 border-t border-[#16363B]/10 pt-6">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15px] text-[#16363B]">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0B7C88]/15 text-[#0B7C88]">
                          <Check className="h-3 w-3" strokeWidth={3.5} />
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* For-whom strip */}
      <section className="bg-[#F4F8F6] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#0B7C88]">
              Para quem
            </span>
            <h2 className="mt-3 font-jakarta text-3xl font-extrabold leading-tight text-[#16363B] sm:text-4xl">
              Trabalhamos consigo, seja qual for a sua dimensão.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 70}>
                <div className="flex h-full items-start gap-4 rounded-2xl bg-[#FFFFFF] p-6 ring-1 ring-[#16363B]/5">
                  <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0B7C88]/10 text-[#0B7C88]">
                    <a.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-jakarta text-base font-bold text-[#16363B]">{a.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#51635C]">{a.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deslocação ao cliente callout */}
      <section className="bg-[#FFFFFF] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#16363B] to-[#0B7C88] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#3AC2CF]/20 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#3AC2CF]">
                    <Plane className="h-4 w-4" /> Deslocação ao cliente
                  </span>
                  <h2 className="mt-5 font-jakarta text-3xl font-extrabold leading-tight text-[#FFFFFF] sm:text-4xl">
                    Não precisa de vir ter connosco. Nós vamos ter consigo.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#a9c2b8]">
                    Estamos sediados em Benfica, mas deslocamo-nos à sua empresa para reuniões e
                    acompanhamento. Fale connosco e encontramos a forma mais cómoda de trabalhar juntos.
                  </p>
                </div>
                <a
                  href={brand.phoneHref}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0B7C88] px-7 py-4 font-sans text-base font-bold text-[#FFFFFF] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="h-5 w-5" /> {brand.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F8F6] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-jakarta text-4xl font-extrabold leading-tight text-[#16363B]">
              Não sabe por onde começar?
            </h2>
            <p className="mt-4 text-lg text-[#51635C]">
              Marque uma reunião sem compromisso. Analisamos a sua situação e propomos a solução certa.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#16363B] px-8 py-4 font-sans text-base font-bold text-[#FFFFFF] transition-colors hover:bg-[#0B7C88] cursor-pointer"
            >
              Marcar reunião <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
