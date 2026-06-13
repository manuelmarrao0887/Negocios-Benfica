import { Link } from 'react-router-dom'
import { ArrowRight, Instagram, MapPin } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, concept, verticals, stats, gallery } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | DoubleSpace — Nails · Cosmetology · Barber',
    'DoubleSpace é um salão em Benfica que reúne unhas, estética e barbearia num só espaço. Equipa multilingue, ambiente acolhedor e expat-friendly.',
  )

  return (
    <>
      {/* Page hero (light) */}
      <section className="relative overflow-hidden bg-[#F6F1EC] px-6 pt-36 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-28 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#A98DA0]/15 blur-3xl" />
          <div className="absolute -left-32 bottom-[-4rem] h-72 w-72 rounded-full bg-[#C06A52]/12 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#C06A52]">
              O conceito
            </span>
            <h1 className="mt-3 max-w-3xl font-bricolage text-5xl font-bold leading-[1.03] text-[#1B1714] sm:text-6xl">
              Três espaços de beleza, debaixo do mesmo teto.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#46413c]">
              Em Benfica, a DoubleSpace nasceu de uma ideia simples: reunir Nails, Cosmetology e
              Barber num só lugar, para que a tua rotina de beleza seja fácil, próxima e cuidada.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Concept story + collage */}
      <section className="bg-[#F6F1EC] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              {gallery.slice(2, 6).map((g, i) => (
                <div
                  key={g.n}
                  className={
                    'relative overflow-hidden rounded-2xl ' +
                    (i === 1 ? 'row-span-2 aspect-[3/5]' : 'aspect-square')
                  }
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    width="600"
                    height="600"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1714]/35 via-transparent to-[#A98DA0]/10" />
                </div>
              ))}
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#C06A52]">
                Um salão, três mundos
              </span>
              <h2 className="mt-3 font-bricolage text-4xl font-bold leading-tight text-[#1B1714] sm:text-5xl">
                Beleza editorial, com alma de bairro.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#46413c]">
                A DoubleSpace é uma marca bilingue PT/EN que vive entre o cuidado das unhas, a ciência
                suave da cosmetologia e a tradição da barbearia. Cada espaço tem a sua linguagem, mas
                partilham o mesmo ambiente: descontraído, atento e com tempo para ti.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#46413c]">
                A nossa maior montra vive no Instagram, onde {brand.followers} seguidores acompanham o
                dia a dia do salão. É lá que mostramos o trabalho — e onde muitos marcam a próxima
                visita.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-bricolage text-3xl font-bold text-[#1B1714]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#8a7f76]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The three spaces recap */}
      <section className="bg-[#FFFFFF] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#C06A52]">
              Dentro do espaço
            </span>
            <h2 className="mt-3 font-bricolage text-4xl font-bold leading-tight text-[#1B1714] sm:text-5xl">
              O que vais encontrar.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {verticals.map((v, i) => (
              <Reveal key={v.key} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-[#1B1714]/10 bg-[#F6F1EC] p-8">
                  <span
                    className="inline-grid h-14 w-14 place-items-center rounded-2xl text-white"
                    style={{ backgroundColor: v.accent }}
                  >
                    <v.icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <p className="mt-6 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#C06A52]">
                    {v.label}
                  </p>
                  <h3 className="mt-1 font-bricolage text-2xl font-bold text-[#1B1714]">{v.tag}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B625B]">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Concept values */}
      <section className="bg-[#F6F1EC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-bricolage text-4xl font-bold leading-tight text-[#1B1714] sm:text-5xl">
              O que nos torna DoubleSpace
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6B625B]">
              Pequenos princípios que se sentem assim que entras.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {concept.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-[#FFFFFF] p-8 ring-1 ring-[#1B1714]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#C06A52]/12 text-[#C06A52]">
                    <c.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-bricolage text-xl font-bold text-[#1B1714]">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B625B]">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFFFF] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-bricolage text-4xl font-bold leading-tight text-[#1B1714]">
              Passa por Benfica.
            </h2>
            <p className="mt-4 text-lg text-[#6B625B]">
              {brand.address}. Aberto todos os dias, das 9h às 21h.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full bg-[#C06A52] px-8 py-4 font-sans text-base font-bold text-[#F6F1EC] transition-colors hover:bg-[#a85842] cursor-pointer"
              >
                <MapPin className="h-5 w-5" /> Onde estamos
              </Link>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1B1714]/20 px-8 py-4 font-sans text-base font-bold text-[#1B1714] transition-colors hover:bg-[#1B1714]/5 cursor-pointer"
              >
                <Instagram className="h-5 w-5" /> Seguir no Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
