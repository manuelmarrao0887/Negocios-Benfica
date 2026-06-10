import { Link } from 'react-router-dom'
import { ArrowRight, Award, ShieldCheck, Star, Building2 } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, team, values, stats, partners } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | IRI — Isolamentos, Revestimentos e Impermeabilização',
    'Há 30 anos no mercado, desde 1993. Loja de referência em Lisboa, PME Líder, com gama técnica profunda e aconselhamento especializado.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F4F6F8] px-6 pt-36 pb-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(28,109,208,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,109,208,0.07) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
            maskImage: 'radial-gradient(ellipse 70% 80% at 30% 20%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 30% 20%, black, transparent)',
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#1C6DD0]">
              Sobre a IRI
            </span>
            <h1 className="mt-3 max-w-3xl font-manrope text-4xl font-extrabold leading-[1.05] tracking-tight text-[#14202B] sm:text-5xl">
              Há 30 anos, uma empresa de referência.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-[#14202B] p-10">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.5]"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="relative flex h-full flex-col justify-end">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#F0A93B]">
                    No mercado desde
                  </span>
                  <span className="mt-2 font-manrope text-7xl font-extrabold tracking-tight text-white">
                    1993
                  </span>
                  <p className="mt-3 font-sans text-lg font-semibold text-[#9fb0bf]">
                    Três décadas a isolar, revestir e impermeabilizar na região de Lisboa.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#1C6DD0] px-6 py-5 text-white shadow-xl sm:block">
                <span className="font-manrope text-3xl font-extrabold">30</span>
                <p className="text-xs font-bold uppercase tracking-wide">anos de experiência</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#33424E]">
                Estamos no mercado há 30 anos. Na impermeabilização já somos uma empresa de
                referência — e esse é o reconhecimento que nos orgulha e responsabiliza.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#51616E]">
                Fundada em 1993, a IRI cresceu como empresa de materiais e aplicação técnica e como
                loja de referência na região de Lisboa. Reunimos uma gama profunda das melhores
                marcas, uma equipa experiente e o hábito de aconselhar a sério — não apenas vender.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-manrope text-3xl font-extrabold text-[#14202B]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7a8a96]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1C6DD0]/25 bg-[#1C6DD0]/[0.06] px-4 py-2 font-sans text-sm font-bold text-[#1C6DD0]">
                  <Award className="h-4 w-4" /> PME Líder
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#F0A93B]/30 bg-[#F0A93B]/10 px-4 py-2 font-sans text-sm font-bold text-[#b07512]">
                  <Star className="h-4 w-4 fill-[#F0A93B] text-[#F0A93B]" /> 4,4★ · 71 avaliações
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#14202B]/15 bg-white px-4 py-2 font-sans text-sm font-bold text-[#33424E]">
                  <Building2 className="h-4 w-4 text-[#1C6DD0]" /> 16–20 colaboradores
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[#F4F6F8] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#1C6DD0]">
              Porquê a IRI
            </span>
            <h2 className="mt-3 font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#14202B] sm:text-4xl">
              Experiência, gama e aconselhamento.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[#14202B]/10 bg-white p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#1C6DD0]/10 text-[#1C6DD0]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-manrope text-xl font-bold text-[#14202B]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51616E]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#1C6DD0]">
              A equipa
            </span>
            <h2 className="mt-3 font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#14202B] sm:text-4xl">
              Uma equipa que conhece o terreno e a loja.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#51616E]">
              Entre 16 e 20 colaboradores, da aplicação ao atendimento, dedicados a encontrar a
              solução certa para cada cliente.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-[#14202B]/10 bg-[#F4F6F8] p-8">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#1C6DD0] text-white">
                    <m.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-manrope text-xl font-bold text-[#14202B]">{m.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#51616E]">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners + CTA */}
      <section className="bg-[#F4F6F8] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className="font-manrope text-2xl font-extrabold tracking-tight text-[#14202B] sm:text-3xl">
              Parcerias com as melhores marcas
            </h2>
            <p className="mt-3 text-base text-[#51616E]">
              Trabalhamos com fabricantes de referência no setor.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {partners.map((p, i) => (
              <Reveal key={p} delay={i * 50}>
                <span className="rounded-lg border border-[#14202B]/10 bg-white px-5 py-3 font-manrope text-base font-bold tracking-tight text-[#33424E] transition-colors hover:border-[#1C6DD0]/40 hover:text-[#1C6DD0]">
                  {p}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-14 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1C6DD0] px-8 py-4 font-sans text-base font-bold text-white shadow-lg shadow-[#1C6DD0]/25 transition-colors hover:bg-[#1559a8] cursor-pointer"
            >
              <ShieldCheck className="h-5 w-5" /> Falar com a IRI <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
