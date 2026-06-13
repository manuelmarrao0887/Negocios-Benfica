import { Link } from 'react-router-dom'
import { ArrowRight, Instagram, Sparkles, Quote } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, pillars, hairFeatures, stats } from '../data.jsx'

function LookImage({ seed, alt, className = '' }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-[#F6E9EF] ${className}`}>
      <img
        src={`https://picsum.photos/seed/${seed}/600/800`}
        alt={alt}
        width={600}
        height={800}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A1620]/45 via-transparent to-[#CC0C78]/10" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#CC0C78]/15" />
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
      <section className="relative overflow-hidden bg-[#FBF4F7] px-6 pt-40 pb-16">
        <div className="pointer-events-none absolute -left-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#E8A8C8]/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
              O estúdio
            </span>
            <h1 className="mt-3 max-w-3xl font-cormorant text-5xl font-semibold leading-[1.04] text-[#2A1620] sm:text-6xl">
              Um estúdio de luxo dedicado à sua transformação.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Concept story */}
      <section className="bg-[#FBF4F7] py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <LookImage
                seed="linda-mulher-2"
                alt="Ambiente do estúdio e resultado de extensões em tom platinado"
                className="aspect-[4/5]"
              />
              <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-[#CC0C78]/20 bg-white/95 px-6 py-5 backdrop-blur-sm shadow-[0_18px_40px_-22px_rgba(42,22,32,0.4)] sm:block">
                <span className="flex items-center gap-2 font-cormorant text-2xl font-semibold text-[#CC0C78]">
                  <Sparkles className="h-5 w-5 text-[#B08D3C]" /> 35K
                </span>
                <p className="text-xs uppercase tracking-wide text-[#6E5560]">na comunidade</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
                Quem somos
              </span>
              <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#2A1620] sm:text-5xl">
                Beleza, detalhe e cabelo de eleição.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#6E5560]">
                O Linda Mulher Studio é um estúdio de luxo no Parque das Nações, em Lisboa, especializado em
                extensões capilares de cabelo 100% humano. Aqui, cada transformação começa com uma
                consultoria personalizada e termina num resultado natural, fluido e feito à sua medida.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#6E5560]">
                Além das extensões, oferecemos serviços completos de cabeleireiro, tratamentos capilares,
                unhas e design de sobrancelhas — sempre com o mesmo rigor e atenção ao detalhe que nos
                distinguem.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-cormorant text-3xl font-semibold text-[#CC0C78]">{s.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-[#6E5560]">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
              O que nos distingue
            </span>
            <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#2A1620] sm:text-5xl">
              Uma experiência pensada ao pormenor.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[#CC0C78]/12 bg-[#FBF4F7] p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#CC0C78]/10 text-[#CC0C78]">
                    <p.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-cormorant text-2xl font-semibold text-[#2A1620]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5560]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hair quality + pull quote */}
      <section className="bg-[#FBF4F7] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#CC0C78]/20 bg-gradient-to-br from-white to-[#F6E9EF] p-10 shadow-[0_24px_60px_-38px_rgba(42,22,32,0.4)]">
              <Quote className="h-10 w-10 text-[#CC0C78]" />
              <p className="mt-6 font-cormorant text-3xl font-medium leading-snug text-[#2A1620]">
                Cabelo 100% humano, certificado e de eleição — porque uma transformação natural começa na
                qualidade da matéria-prima.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-[#CC0C78]/15 pt-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white p-0.5 ring-1 ring-[#CC0C78]/15">
                  <img
                    src="/logos/linda-mulher.png"
                    alt="Linda Mulher Studio logótipo"
                    className="h-full w-auto rounded-full"
                    width={44}
                    height={44}
                  />
                </span>
                <div>
                  <p className="font-jost text-sm font-semibold text-[#2A1620]">Linda Mulher Studio</p>
                  <p className="text-xs text-[#6E5560]">Parque das Nações · Lisboa</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
                A qualidade do cabelo
              </span>
              <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#2A1620] sm:text-5xl">
                Premium, do fio ao acabamento.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#6E5560]">
                Trabalhamos apenas com cabelo 100% humano certificado, em vários comprimentos, texturas e
                tonalidades. Com garantia de preço europeu, asseguramos qualidade premium e o melhor valor
                — e vendemos também o cabelo, além da aplicação.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {hairFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-[#3A2230]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CC0C78]" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-cormorant text-4xl font-semibold leading-tight text-[#2A1620] sm:text-5xl">
              Venha conhecer o estúdio.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6E5560]">
              Marque a sua consultoria ou siga as nossas transformações no Instagram.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#CC0C78] to-[#A50A60] px-8 py-4 font-jost text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(204,12,120,0.6)] transition-all duration-200 hover:shadow-[0_16px_40px_-10px_rgba(204,12,120,0.75)] cursor-pointer"
              >
                Marcar consultoria <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#CC0C78]/30 bg-white px-8 py-4 font-jost text-base font-semibold text-[#2A1620] transition-colors hover:bg-[#CC0C78]/10 cursor-pointer"
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
