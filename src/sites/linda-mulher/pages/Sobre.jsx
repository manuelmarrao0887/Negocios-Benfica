import { Link } from 'react-router-dom'
import { ArrowRight, Instagram, Sparkles, Quote } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, pillars, hairFeatures, stats } from '../data.jsx'

function LookImage({ seed, alt, className = '' }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-[#1E1816] ${className}`}>
      <img
        src={`https://picsum.photos/seed/${seed}/600/800`}
        alt={alt}
        width={600}
        height={800}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#15100F] via-[#15100F]/30 to-[#C98A6B]/15 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#E6B9B0]/15" />
    </div>
  )
}

export default function Sobre() {
  usePageMeta(
    'Sobre | Linda Mulher Studio',
    'Um estúdio de luxo em Lisboa dedicado às extensões de cabelo 100% humano — qualidade premium, técnicas refinadas e uma experiência de transformação natural.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#15100F] px-6 pt-40 pb-16">
        <div className="pointer-events-none absolute -left-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#E6B9B0]/12 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#C98A6B]">
              O estúdio
            </span>
            <h1 className="mt-3 max-w-3xl font-cormorant text-5xl font-semibold leading-[1.04] text-[#F3E7E4] sm:text-6xl">
              Um estúdio de luxo dedicado à sua transformação.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Concept story */}
      <section className="bg-[#15100F] py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <LookImage
                seed="linda-mulher-2"
                alt="Ambiente do estúdio e resultado de extensões em tom platinado"
                className="aspect-[4/5]"
              />
              <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-[#C98A6B]/30 bg-[#1E1816]/95 px-6 py-5 backdrop-blur-sm shadow-xl sm:block">
                <span className="flex items-center gap-2 font-cormorant text-2xl font-semibold text-[#E6B9B0]">
                  <Sparkles className="h-5 w-5 text-[#C98A6B]" /> 35K
                </span>
                <p className="text-xs uppercase tracking-wide text-[#C3ABA6]">na comunidade</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#C98A6B]">
                Quem somos
              </span>
              <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#F3E7E4] sm:text-5xl">
                Beleza, detalhe e cabelo de eleição.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#C3ABA6]">
                O Linda Mulher Studio é um estúdio de luxo no Parque das Nações, em Lisboa, especializado em
                extensões capilares de cabelo 100% humano. Aqui, cada transformação começa com uma
                consultoria personalizada e termina num resultado natural, fluido e feito à sua medida.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#C3ABA6]">
                Além das extensões, oferecemos serviços completos de cabeleireiro, tratamentos capilares,
                unhas e design de sobrancelhas — sempre com o mesmo rigor e atenção ao detalhe que nos
                distinguem.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-cormorant text-3xl font-semibold text-[#E6B9B0]">{s.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-[#C3ABA6]">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#1E1816] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#C98A6B]">
              O que nos distingue
            </span>
            <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#F3E7E4] sm:text-5xl">
              Uma experiência pensada ao pormenor.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[#C98A6B]/15 bg-[#15100F] p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#C98A6B]/12 text-[#E6B9B0]">
                    <p.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-cormorant text-2xl font-semibold text-[#F3E7E4]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#C3ABA6]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hair quality + pull quote */}
      <section className="bg-[#15100F] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#C98A6B]/20 bg-gradient-to-br from-[#1E1816] to-[#15100F] p-10">
              <Quote className="h-10 w-10 text-[#C98A6B]" />
              <p className="mt-6 font-cormorant text-3xl font-medium leading-snug text-[#F3E7E4]">
                Cabelo 100% humano, certificado e de eleição — porque uma transformação natural começa na
                qualidade da matéria-prima.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-[#C98A6B]/15 pt-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#E6B9B0] to-[#C98A6B] font-cormorant text-lg font-semibold text-[#15100F]">
                  LM
                </span>
                <div>
                  <p className="font-jost text-sm font-semibold text-[#F3E7E4]">Linda Mulher Studio</p>
                  <p className="text-xs text-[#C3ABA6]">Parque das Nações · Lisboa</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#C98A6B]">
                A qualidade do cabelo
              </span>
              <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#F3E7E4] sm:text-5xl">
                Premium, do fio ao acabamento.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#C3ABA6]">
                Trabalhamos apenas com cabelo 100% humano certificado, em vários comprimentos, texturas e
                tonalidades. Com garantia de preço europeu, asseguramos qualidade premium e o melhor valor
                — e vendemos também o cabelo, além da aplicação.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {hairFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-[#F3E7E4]/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C98A6B]" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E1816] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-cormorant text-4xl font-semibold leading-tight text-[#F3E7E4] sm:text-5xl">
              Venha conhecer o estúdio.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#C3ABA6]">
              Marque a sua consultoria ou siga as nossas transformações no Instagram.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#C98A6B] to-[#b1714f] px-8 py-4 font-jost text-base font-semibold text-[#15100F] shadow-[0_12px_30px_-10px_rgba(201,138,107,0.7)] transition-all duration-200 hover:shadow-[0_16px_40px_-10px_rgba(201,138,107,0.85)] cursor-pointer"
              >
                Marcar consultoria <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#E6B9B0]/25 px-8 py-4 font-jost text-base font-semibold text-[#F3E7E4] transition-colors hover:bg-[#E6B9B0]/10 cursor-pointer"
              >
                <Instagram className="h-5 w-5" /> {brand.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
