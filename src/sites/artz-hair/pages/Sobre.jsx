import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, values, stats, experienceDetails, gallery } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | Art.Z Hair & Experience — Lisboa',
    'A Art.Z nasceu em 2020 com um conceito de beleza de A a Z, sob a direcção criativa de Luís Zamban. Conheça o salão e a experiência.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F7F3EF] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
              Sobre
            </span>
            <h1 className="mt-3 max-w-3xl font-cormorant text-6xl font-semibold leading-[0.98] text-[#1A1614] sm:text-7xl">
              Um salão pensado como uma experiência.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-[#1A1614]/10">
              <img
                src={gallery[2].src}
                alt={gallery[2].alt}
                width="640"
                height="800"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1614]/40 via-transparent to-transparent" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
                A nossa história
              </span>
              <h2 className="mt-3 font-cormorant text-5xl font-semibold leading-[1.02] text-[#1A1614] sm:text-6xl">
                Beleza de A a Z, desde {brand.since}.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#4A413B]">
                A Art.Z abriu portas em 2020 com uma ideia clara: a beleza vai muito além do cabelo.
                Daí o nome — uma experiência de A a Z, que reúne hairstyling, cor, tratamentos, spa,
                maquilhagem, unhas e barbearia num só lugar, no coração das Avenidas Novas.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#4A413B]">
                Sob a direcção criativa de <strong className="font-semibold text-[#1A1614]">Luís Zamban</strong>,
                a Art.Z afirmou-se como um espaço onde o atendimento e o ambiente contam tanto como o
                resultado. Não é um salão convencional — é, como gostamos de dizer, como a sua casa.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-cormorant text-4xl font-semibold text-[#1A1614]">{s.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#8A7E74]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote / social proof */}
      <section className="bg-[#F7F3EF] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#1A1614] px-8 py-14 text-center sm:px-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#A8854E]/20 blur-3xl" />
              <Quote className="mx-auto h-10 w-10 text-[#A8854E]" />
              <p className="relative mx-auto mt-6 max-w-2xl font-cormorant text-3xl font-medium leading-snug text-[#F7F3EF] sm:text-4xl">
                “A Art.Z não é um salão de beleza convencional — é como a sua casa. Viva esta
                experiência.”
              </p>
              <div className="relative mt-8 flex items-center justify-center gap-2">
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-[#A8854E] text-[#A8854E]" />
                  ))}
                </span>
                <span className="font-jost text-sm font-semibold text-[#F2EBE2]">{brand.rating} ★</span>
                <span className="font-jost text-sm text-[#A89A8E]">
                  · {brand.reviews} avaliações no Google
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience details */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
              Os detalhes
            </span>
            <h2 className="mt-3 font-cormorant text-5xl font-semibold leading-[1.02] text-[#1A1614] sm:text-6xl">
              Pequenos gestos, grande diferença
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6E5A52]">
              É no cuidado com cada detalhe que a experiência Art.Z ganha forma.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4">
            {experienceDetails.map((d, i) => (
              <Reveal key={d.label} delay={i * 70}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-[#1A1614]/10 bg-[#F7F3EF] p-7 text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#1A1614] text-[#D8B57E]">
                    <d.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <p className="font-cormorant text-lg font-semibold text-[#1A1614]">{d.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F7F3EF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
              O que nos move
            </span>
            <h2 className="mt-3 font-cormorant text-5xl font-semibold leading-[1.02] text-[#1A1614] sm:text-6xl">
              Os nossos princípios
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-white p-8 ring-1 ring-[#1A1614]/8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#F7F3EF] text-[#A8854E] ring-1 ring-[#A8854E]/20">
                    <v.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-cormorant text-2xl font-semibold text-[#1A1614]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5A52]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-14 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#1A1614] px-8 py-4 font-jost text-base font-semibold tracking-wide text-[#F7F3EF] transition-colors hover:bg-[#A8854E] cursor-pointer"
            >
              Marcar a sua experiência <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
