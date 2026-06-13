import { Link } from 'react-router-dom'
import { ArrowRight, Check, Snowflake, Phone } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, promise, trust, areas } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | Técnico Frio — Assistência Técnica',
    'A nossa promessa de serviço: rapidez, eficácia e prolongar a vida útil do seu equipamento, em casa e no seu negócio, por toda a Grande Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F1F8FC] px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-[#0B6CC0]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#16B5C9]">
              Sobre nós
            </span>
            <h1 className="mt-3 max-w-3xl font-outfit text-5xl font-bold leading-[1.05] text-[#0B2536] sm:text-6xl">
              Frio e ar condicionado, com rapidez e rigor.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A5E70]">
              O Técnico Frio é uma assistência técnica especializada na reparação e manutenção de ar
              condicionado e frigoríficos, para clientes residenciais e comerciais. Trabalhamos com um
              objetivo simples: repor o seu conforto sem demoras e prolongar a vida útil do equipamento.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Promise + visual */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <img
                  src="https://picsum.photos/seed/tecnico-frio-1/800/1000"
                  alt="Técnico em assistência a equipamento de climatização"
                  width="800"
                  height="1000"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2536]/90 via-[#0B2536]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <Snowflake className="h-9 w-9 text-[#16B5C9]" strokeWidth={1.6} aria-hidden="true" />
                  <p className="mt-3 font-outfit text-2xl font-bold text-white">{brand.claim}</p>
                  <p className="mt-1.5 text-sm text-[#a7bccb]">Assistência ao domicílio em toda a Grande Lisboa.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-to-br from-[#0B6CC0] to-[#16B5C9] px-6 py-5 text-white shadow-xl sm:block">
                <span className="font-outfit text-3xl font-bold">4 eixos</span>
                <p className="text-xs font-bold uppercase tracking-wide text-white/90">de cobertura</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#16B5C9]">
                A nossa promessa
              </span>
              <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#0B2536] sm:text-5xl">
                Tratamos a causa, não só o sintoma.
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#4A5E70]">
                Cada avaria é diferente. Por isso começamos sempre por um diagnóstico rápido ao domicílio,
                identificamos a verdadeira origem do problema e aplicamos a solução mais eficaz — seja num
                frigorífico, num congelador ou no seu ar condicionado.
              </p>
            </Reveal>
            <div className="mt-9 space-y-4">
              {promise.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="flex items-start gap-4 rounded-2xl border border-[#0B2536]/10 bg-[#F1F8FC] p-5">
                    <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#0B6CC0] to-[#16B5C9] text-white">
                      <p.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-outfit text-lg font-semibold text-[#0B2536]">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#4A5E70]">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-[#F1F8FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-4xl font-bold leading-tight text-[#0B2536] sm:text-5xl">
              Para quem trabalhamos
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A5E70]">
              Respondemos a particulares e a negócios com o mesmo rigor técnico e a mesma rapidez.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trust.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-white p-8 ring-1 ring-[#0B2536]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#0B6CC0]/10 text-[#0B6CC0]">
                    <t.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-outfit text-lg font-semibold text-[#0B2536]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5E70]">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#16B5C9]">
                Onde atuamos
              </span>
              <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#0B2536] sm:text-5xl">
                Ampla cobertura na Grande Lisboa.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#4A5E70]">
                Atuamos em quatro eixos — Lisboa, Margem Sul, Linha de Sintra e Linha de Cascais —
                cobrindo as duas margens do Tejo e as principais zonas residenciais e comerciais.
              </p>
              <Link
                to={siteLink(slug, 'contacto')}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#0B2536]/15 px-6 py-3 font-sans text-sm font-bold text-[#0B2536] transition-colors hover:border-[#0B6CC0]/40 hover:text-[#0B6CC0] cursor-pointer"
              >
                Verificar a minha zona <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {areas.map((a) => (
                  <div key={a.title} className="rounded-2xl border border-[#0B2536]/10 bg-[#F1F8FC] p-6">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-grid h-9 w-9 place-items-center rounded-lg bg-white text-[#0B6CC0] shadow-sm">
                        <a.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                      </span>
                      <h3 className="font-outfit text-base font-semibold text-[#0B2536]">{a.title}</h3>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {a.zones.map((z) => (
                        <li
                          key={z}
                          className="flex items-center gap-1.5 text-sm text-[#4A5E70]"
                        >
                          <Check className="h-3 w-3 text-[#16B5C9]" strokeWidth={3} /> {z}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F1F8FC] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-outfit text-4xl font-bold leading-tight text-[#0B2536]">
              Vamos resolver a sua avaria?
            </h2>
            <p className="mt-4 text-lg text-[#4A5E70]">
              Atendimento de segunda a sábado, mediante marcação. Diga-nos o que se passa e agendamos a
              visita técnica.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B6CC0] to-[#16B5C9] px-8 py-4 font-sans text-base font-bold text-white shadow-lg shadow-[#0B6CC0]/25 transition-all hover:brightness-105 cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full border border-[#0B2536]/15 bg-white px-8 py-4 font-sans text-base font-bold text-[#0B2536] transition-colors hover:border-[#0B6CC0]/40 hover:text-[#0B6CC0] cursor-pointer"
              >
                {brand.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
