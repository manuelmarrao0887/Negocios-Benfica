import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Headset, Check } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, process } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | Nipolândia — Climatização e Ventilação',
    'Climatização chave-na-mão, ventilação, projetos AVAC, desumidificação industrial, instalação e manutenção. Lisboa, desde 1977.',
  )

  return (
    <>
      {/* Page hero (light) */}
      <section className="relative overflow-hidden bg-[#F2F6FC] px-6 pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#2C7BE5]/10 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'linear-gradient(#0A2E5C 1px, transparent 1px), linear-gradient(90deg, #0A2E5C 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
              opacity: 0.05,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#C25E00]">
              Os nossos serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-archivo text-5xl font-extrabold leading-[1.04] tracking-tight text-[#0A2E5C] sm:text-6xl">
              Soluções completas de climatização e ventilação.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5B7493]">
              Do estudo técnico à instalação chave-na-mão e à manutenção preventiva. Respondemos a
              particulares e à indústria com o rigor que nos define desde 1977.
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
                <div className="group flex h-full flex-col rounded-xl border border-[#0A2E5C]/10 bg-[#F2F6FC] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#2C7BE5]/40 hover:bg-white hover:shadow-xl hover:shadow-[#0A2E5C]/5">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-xl bg-[#0A2E5C] text-[#FF9A3C]">
                    <s.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-6 font-archivo text-2xl font-bold text-[#0A2E5C]">{s.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5B7493]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F2F6FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#2C7BE5]">
              Como trabalhamos
            </span>
            <h2 className="mt-3 font-archivo text-4xl font-extrabold leading-tight tracking-tight text-[#0A2E5C] sm:text-5xl">
              Um método claro, do início ao fim.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="relative flex h-full flex-col rounded-xl border border-[#0A2E5C]/10 bg-white p-7">
                  <span className="font-archivo text-5xl font-extrabold text-[#2C7BE5]/15">{p.step}</span>
                  <span className="mt-2 inline-grid h-11 w-11 place-items-center rounded-lg bg-[#2C7BE5]/10 text-[#2C7BE5]">
                    <p.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-archivo text-lg font-bold text-[#0A2E5C]">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5B7493]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial photo block */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-[#0A2E5C]/10 bg-white lg:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden bg-[#0A2E5C]">
                <img
                  src="https://picsum.photos/seed/nipolandia-1/900/700"
                  alt="Instalação técnica de sistemas de climatização e ventilação industrial"
                  width="900"
                  height="700"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E5C]/60 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#C25E00]">
                  Indústria &amp; grandes projetos
                </span>
                <h2 className="mt-4 font-archivo text-3xl font-extrabold leading-tight text-[#0A2E5C] sm:text-4xl">
                  Preparados para os projetos mais exigentes.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#5B7493]">
                  Desumidificação industrial, ventilação de processos e climatização de instalações
                  críticas — com projeto AVAC dedicado e assistência em todo o país.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {['Farmacêutica', 'Logística', 'Indústria', 'Retalho'].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm font-semibold text-[#0A2E5C]">
                      <span className="grid h-5 w-5 place-items-center rounded bg-[#FF7F00] text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Maintenance / contracts callout */}
      <section className="bg-[#F2F6FC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-start gap-8 rounded-3xl border border-[#0A2E5C]/10 bg-white px-8 py-12 sm:px-14 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#2C7BE5]/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#2C7BE5]">
                  <Headset className="h-4 w-4" /> Pós-venda
                </span>
                <h2 className="mt-5 font-archivo text-3xl font-extrabold leading-tight text-[#0A2E5C] sm:text-4xl">
                  Manutenção preventiva e contratos de assistência.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#5B7493]">
                  Mantemos os seus equipamentos a render no máximo, com menos avarias e maior vida útil.
                  Planos de manutenção à medida, para casa ou para a sua empresa.
                </p>
              </div>
              <a
                href={brand.phoneHref}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#2C7BE5] px-7 py-4 font-sans text-base font-bold text-white transition-colors duration-200 hover:bg-[#1f63c4] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> Falar connosco
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-archivo text-4xl font-extrabold leading-tight tracking-tight text-[#0A2E5C]">
              Precisa de uma solução à medida?
            </h2>
            <p className="mt-4 text-lg text-[#5B7493]">
              Conte-nos o seu projeto. Fazemos o estudo, indicamos os equipamentos certos e apresentamos
              um orçamento claro.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF7F00] px-8 py-4 font-sans text-base font-bold text-white shadow-lg shadow-[#FF7F00]/25 transition-all hover:bg-[#e67200] cursor-pointer"
            >
              Pedir orçamento <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
