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
      {/* Page hero — compact dark navy band (keeps header nav legible at top) */}
      <section className="relative overflow-hidden bg-[#141B2E] px-6 pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#D11F2A]/18 blur-[110px]" />
          <div className="absolute -left-24 bottom-[-8rem] h-72 w-72 rounded-full bg-[#1F2D5E]/45 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#FF8A8F]">
              Serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-oswald text-5xl font-bold uppercase leading-[1.0] text-white sm:text-6xl">
              Da demolição à entrega do forno.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C7CDDD]">
              Cobrimos todo o ciclo de vida de um revestimento refractário — avaliação, construção,
              reparação e supervisão — com engenharia rigorosa e foco permanente na segurança.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services detailed list (LIGHT) */}
      <section className="bg-[#F7F5F1] py-20">
        <div className="mx-auto max-w-7xl space-y-5 px-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80}>
              <div className="group grid gap-6 rounded-2xl border border-[#1F2D5E]/12 bg-white p-8 shadow-sm shadow-[#1F2D5E]/5 transition-colors duration-300 hover:border-[#D11F2A]/40 sm:grid-cols-[auto_1fr] sm:p-10">
                <div className="flex items-start gap-5">
                  <span className="font-oswald text-3xl font-bold text-[#1F2D5E]/20 sm:text-4xl">
                    0{i + 1}
                  </span>
                  <span className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-md bg-[#1F2D5E] text-white">
                    <s.icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                </div>
                <div>
                  <h2 className="font-oswald text-2xl font-semibold uppercase tracking-wide text-[#1B2540] sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5A6175]">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process / how we work (LIGHT, warm-stone alt) */}
      <section className="border-y border-[#1F2D5E]/12 bg-[#ECE7DF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#D11F2A]">
              Método de trabalho
            </span>
            <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#1B2540] sm:text-5xl">
              Cada obra, um processo controlado.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="relative h-full rounded-xl border border-[#1F2D5E]/12 bg-white p-7 shadow-sm shadow-[#1F2D5E]/5">
                  <div className="flex items-center justify-between">
                    <span className="font-oswald text-4xl font-bold text-[#D11F2A]/30">{p.step}</span>
                    <span className="inline-grid h-11 w-11 place-items-center rounded-md bg-[#1F2D5E]/8 text-[#1F2D5E] ring-1 ring-[#1F2D5E]/10">
                      <p.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-oswald text-xl font-semibold uppercase tracking-wide text-[#1B2540]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6175]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methods & safety — feature band with photo (LIGHT) */}
      <section className="bg-[#F7F5F1] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-[#1F2D5E]/12 shadow-lg shadow-[#1F2D5E]/10">
                <img
                  src="https://picsum.photos/seed/fornoportugal-1/900/1100"
                  alt="Estrutura industrial de aço numa instalação de alta temperatura"
                  width="900"
                  height="1100"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {/* navy/heat overlay for legibility of the badge */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141B2E] via-[#141B2E]/30 to-transparent" />
                <div className="pointer-events-none absolute inset-0 mix-blend-multiply" style={{ background: 'linear-gradient(135deg, rgba(31,45,94,0.45), rgba(209,31,42,0.18))' }} />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#FF8A8F]/40 bg-[#141B2E]/75 px-4 py-1.5 font-oswald text-xs font-medium uppercase tracking-[0.18em] text-[#FF8A8F] backdrop-blur-sm">
                    <Flame className="h-3.5 w-3.5" /> Ambiente de alta temperatura
                  </span>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#D11F2A]">
                  Segurança · Zero acidentes
                </span>
                <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#1B2540] sm:text-5xl">
                  Métodos operativos e análise de riscos.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-lg leading-relaxed text-[#5A6175]">
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
                      <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#D11F2A]/10 text-[#D11F2A]">
                        <item.icon className="h-5 w-5" strokeWidth={1.9} />
                      </span>
                      <span className="font-oswald text-base font-medium uppercase tracking-wide text-[#1B2540]">
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

      {/* CTA (LIGHT, navy panel) */}
      <section className="bg-[#F7F5F1] pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#141B2E] px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#D11F2A]/18 to-transparent" />
            <div className="relative flex flex-col items-center gap-7">
              <Reveal>
                <h2 className="font-oswald text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
                  Precisa de uma avaliação técnica?
                </h2>
                <p className="mt-4 text-lg text-[#C7CDDD]">
                  Apresentamos uma proposta detalhada para a sua intervenção refractária.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="group inline-flex items-center gap-2 rounded-md bg-[#D11F2A] px-8 py-4 font-oswald text-base font-semibold uppercase tracking-[0.06em] text-white transition-all duration-200 hover:bg-[#FF5159] cursor-pointer"
                  >
                    Pedir orçamento
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={brand.phoneHref}
                    className="inline-flex items-center gap-2 rounded-md border border-white/25 px-8 py-4 font-oswald text-base font-medium uppercase tracking-[0.06em] text-white transition-colors hover:bg-white/10 cursor-pointer"
                  >
                    <Phone className="h-5 w-5" /> Ligar agora
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
