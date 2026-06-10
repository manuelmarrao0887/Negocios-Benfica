import { Link } from 'react-router-dom'
import { Phone, ArrowRight, HardHat, ShieldCheck, Flame } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, process } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | Fornoportugal — Refractários Industriais',
    'Construção e reconstrução refractária, reparações a frio e a quente, demolição, supervisão, orçamentação e métodos de segurança para fornos de alta temperatura.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#17110D] px-6 pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#E5562A]/15 blur-[110px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#E8A33D]/10 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#E5562A]">
              Serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-oswald text-5xl font-bold uppercase leading-[1.0] text-[#F3EAE2] sm:text-6xl">
              Da demolição à entrega do forno.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#B59E90]">
              Cobrimos todo o ciclo de vida de um revestimento refractário — avaliação, construção,
              reparação e supervisão — com engenharia rigorosa e foco permanente na segurança.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services detailed list */}
      <section className="bg-[#1c1410] py-20">
        <div className="mx-auto max-w-7xl space-y-5 px-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80}>
              <div className="group grid gap-6 rounded-2xl border border-white/10 bg-[#211814] p-8 transition-colors duration-300 hover:border-[#E5562A]/40 sm:grid-cols-[auto_1fr] sm:p-10">
                <div className="flex items-start gap-5">
                  <span className="font-oswald text-3xl font-bold text-white/15 sm:text-4xl">
                    0{i + 1}
                  </span>
                  <span className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-md bg-gradient-to-br from-[#E5562A] to-[#E8A33D] text-[#17110D]">
                    <s.icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                </div>
                <div>
                  <h2 className="font-oswald text-2xl font-semibold uppercase tracking-wide text-[#F3EAE2] sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#B59E90]">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process / how we work */}
      <section className="bg-[#17110D] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#E5562A]">
              Método de trabalho
            </span>
            <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#F3EAE2] sm:text-5xl">
              Cada obra, um processo controlado.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="relative h-full rounded-xl border border-white/10 bg-[#211814] p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-oswald text-4xl font-bold text-[#E5562A]/30">{p.step}</span>
                    <span className="inline-grid h-11 w-11 place-items-center rounded-md bg-[#17110D] text-[#E8A33D] ring-1 ring-white/10">
                      <p.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-oswald text-xl font-semibold uppercase tracking-wide text-[#F3EAE2]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8a7565]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methods & safety — feature band with photo */}
      <section className="bg-[#1c1410] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://picsum.photos/seed/fornoportugal-1/900/1100"
                  alt="Estrutura industrial de aço numa instalação de alta temperatura"
                  width="900"
                  height="1100"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {/* ember overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/40 to-transparent" />
                <div className="pointer-events-none absolute inset-0 mix-blend-multiply" style={{ background: 'linear-gradient(135deg, rgba(229,86,42,0.45), rgba(232,163,61,0.15))' }} />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E8A33D]/40 bg-[#17110D]/70 px-4 py-1.5 font-oswald text-xs font-medium uppercase tracking-[0.18em] text-[#E8A33D] backdrop-blur-sm">
                    <Flame className="h-3.5 w-3.5" /> Ambiente de alta temperatura
                  </span>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#E5562A]">
                  Segurança · Zero acidentes
                </span>
                <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#F3EAE2] sm:text-5xl">
                  Métodos operativos e análise de riscos.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-lg leading-relaxed text-[#B59E90]">
                  Trabalhar dentro de fornos industriais exige preparação meticulosa. Para cada
                  intervenção elaboramos métodos operativos detalhados e análises de risco específicas,
                  base de uma cultura de segurança orientada para o objetivo de zero acidentes.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <ul className="mt-8 space-y-4">
                  {[
                    { icon: ShieldCheck, t: 'ISO 45001 — Segurança e Saúde no Trabalho' },
                    { icon: HardHat, t: 'Planos de intervenção e procedimentos por obra' },
                    { icon: ShieldCheck, t: 'ISO 9001 — Qualidade certificada desde 2010' },
                  ].map((item) => (
                    <li key={item.t} className="flex items-center gap-4">
                      <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#E5562A]/12 text-[#E5562A]">
                        <item.icon className="h-5 w-5" strokeWidth={1.9} />
                      </span>
                      <span className="font-oswald text-base font-medium uppercase tracking-wide text-[#F3EAE2]">
                        {item.t}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#17110D] py-24">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#E5562A]/15 to-transparent" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-oswald text-4xl font-bold uppercase leading-tight text-[#F3EAE2] sm:text-5xl">
              Precisa de uma avaliação técnica?
            </h2>
            <p className="mt-4 text-lg text-[#B59E90]">
              Apresentamos uma proposta detalhada para a sua intervenção refractária.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="group inline-flex items-center gap-2 rounded-md bg-[#E5562A] px-8 py-4 font-oswald text-base font-semibold uppercase tracking-[0.06em] text-[#17110D] transition-all duration-200 hover:bg-[#E8A33D] cursor-pointer"
              >
                Pedir orçamento
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-8 py-4 font-oswald text-base font-medium uppercase tracking-[0.06em] text-[#F3EAE2] transition-colors hover:bg-white/5 cursor-pointer"
              >
                <Phone className="h-5 w-5" /> Ligar agora
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
