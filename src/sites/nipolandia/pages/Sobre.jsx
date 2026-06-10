import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Award, BadgeCheck, Handshake } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, values, stats, sectors, clients, badges } from '../data.jsx'

const partners = [
  { name: 'Mitsubishi Electric', tag: 'Diamond Client desde 2023', icon: BadgeCheck },
  { name: 'Daikin', tag: 'Instalador oficial', icon: Handshake },
  { name: 'Panasonic', tag: 'Instalador oficial', icon: Handshake },
]

export default function Sobre() {
  usePageMeta(
    'Sobre | Nipolândia — Climatização e Ventilação desde 1977',
    'Fundada em 1977, a Nipolândia é PME Líder e Mitsubishi Electric Diamond Client. Instalador oficial Daikin e Panasonic, com técnicos certificados.',
  )

  return (
    <>
      {/* Page hero (deep-blue) */}
      <section className="relative overflow-hidden bg-[#0A2E5C] px-6 pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#2C7BE5]/25 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(#EAF1FB 1px, transparent 1px), linear-gradient(90deg, #EAF1FB 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#5BC8E8]">
              Quem somos
            </span>
            <h1 className="mt-3 max-w-3xl font-archivo text-5xl font-extrabold leading-[1.04] tracking-tight text-[#EAF1FB] sm:text-6xl">
              Mais de 45 anos a climatizar Portugal.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* History */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A2E5C] to-[#103a73] p-10">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#5BC8E8]/15 blur-2xl" />
              <Quote className="relative h-10 w-10 text-[#5BC8E8]" />
              <p className="relative mt-6 font-archivo text-2xl font-bold leading-snug text-[#EAF1FB]">
                “{brand.motto}”
              </p>
              <div className="relative mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#5BC8E8] font-archivo text-lg font-extrabold text-[#0A2E5C]">
                  N
                </span>
                <div>
                  <p className="font-archivo font-bold text-[#EAF1FB]">Nipolândia</p>
                  <p className="text-sm text-[#9fbce6]">Ar Condicionado, Ventilação, Lda. · desde 1977</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#33486b]">
                A Nipolândia nasceu em {brand.since}, em Lisboa, com uma missão simples: levar conforto e
                qualidade do ar a casas, escritórios e instalações industriais. Mais de quatro décadas
                depois, continuamos a projetar e instalar sistemas de climatização e ventilação com o
                mesmo rigor do primeiro dia.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#33486b]">
                Fomos distinguidos como <strong className="text-[#0A2E5C]">PME Líder em 2012 e 2013</strong>{' '}
                pelo IAPMEI, um reconhecimento do mérito, da solidez e da confiança que construímos ao
                longo dos anos. Hoje, somos um parceiro de longo prazo para particulares e para a indústria.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-archivo text-3xl font-extrabold text-[#0A2E5C]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#5B7493]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recognitions */}
      <section className="bg-[#F2F6FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#2C7BE5]">
              Reconhecimentos
            </span>
            <h2 className="mt-3 font-archivo text-4xl font-extrabold leading-tight tracking-tight text-[#0A2E5C] sm:text-5xl">
              Distinções que falam por nós.
            </h2>
          </Reveal>

          {/* PME Líder cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {[2012, 2013].map((year, i) => (
              <Reveal key={year} delay={i * 100}>
                <div className="flex items-center gap-5 rounded-2xl border border-[#0A2E5C]/10 bg-white p-7">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#2C7BE5]/10 text-[#2C7BE5]">
                    <Award className="h-7 w-7" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-archivo text-xl font-bold text-[#0A2E5C]">PME Líder {year}</h3>
                    <p className="mt-1 text-sm text-[#5B7493]">Distinção IAPMEI por mérito e solidez.</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Partnerships */}
          <Reveal delay={120} className="mt-10">
            <h3 className="text-center font-archivo text-xl font-bold text-[#0A2E5C]">
              Parcerias com os principais fabricantes
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-[#0A2E5C]/10 bg-white p-8 text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0A2E5C] text-[#5BC8E8]">
                    <p.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <p className="mt-5 font-archivo text-lg font-bold text-[#0A2E5C]">{p.name}</p>
                  <p className="mt-1 text-sm font-semibold text-[#2C7BE5]">{p.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#2C7BE5]">
              Os nossos valores
            </span>
            <h2 className="mt-3 font-archivo text-4xl font-extrabold leading-tight tracking-tight text-[#0A2E5C] sm:text-5xl">
              O que nos guia desde 1977.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-[#F2F6FC] p-8 ring-1 ring-[#0A2E5C]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#5BC8E8]/20 text-[#2C7BE5]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-archivo text-xl font-bold text-[#0A2E5C]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5B7493]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors & reference clients */}
      <section className="bg-[#F2F6FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#2C7BE5]">
              Setores que servimos
            </span>
            <h2 className="mt-3 font-archivo text-4xl font-extrabold leading-tight tracking-tight text-[#0A2E5C] sm:text-5xl">
              A confiança de quem mais exige.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5B7493]">
              Trabalhamos para particulares e para a indústria. Ao longo dos anos servimos clientes de
              referência em vários setores.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="flex items-center gap-4 rounded-xl border border-[#0A2E5C]/10 bg-white p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#2C7BE5]/10 text-[#2C7BE5]">
                    <s.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-archivo text-lg font-bold text-[#0A2E5C]">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10">
            <div className="rounded-2xl border border-[#0A2E5C]/10 bg-white p-8">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#5B7493]">
                Clientes de referência
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {clients.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-[#0A2E5C]/[0.04] px-4 py-2 font-sans text-sm font-semibold text-[#0A2E5C]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A2E5C] to-[#103a73] px-8 py-14 text-center sm:px-14">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#5BC8E8]/15 blur-3xl" />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {badges.slice(0, 3).map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-[#9fbce6]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <h2 className="font-archivo text-3xl font-extrabold leading-tight text-[#EAF1FB] text-balance sm:text-4xl">
                  Trabalhe com um parceiro de confiança.
                </h2>
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#5BC8E8] px-8 py-4 font-sans text-base font-bold text-[#0A2E5C] transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  Falar com a Nipolândia <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
