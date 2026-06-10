import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, services, process, sectors } from '../data.jsx'

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#F2A33C]">
      <span className="h-px w-7 bg-[#F2A33C]" />
      {children}
    </span>
  )
}

function GridLines({ className = '' }) {
  return (
    <div
      className={'pointer-events-none absolute inset-0 ' + className}
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
  )
}

export default function Servicos() {
  usePageMeta(
    'Serviços | Farol Vibrante — Construções LSF',
    'Construção e remodelações, projeto e consultoria, gestão e fiscalização de obra em Light Steel Framing.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#14181D] px-6 pt-36 pb-16">
        <GridLines />
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#F2A33C]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow>O que fazemos</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-sora text-5xl font-bold leading-[1.04] text-[#ECEFF2] sm:text-6xl">
              Soluções completas em Light Steel Framing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#9AA7B4]">
              Da conceção à entrega, dominamos cada etapa da construção em aço leve. Escolha o ponto de
              partida — nós orientamos o resto com método e rigor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed services */}
      <section className="border-t border-white/10 bg-[#1C2128] py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 70}>
              <div className="grid gap-8 rounded-2xl border border-white/10 bg-[#14181D] p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="inline-grid h-14 w-14 place-items-center rounded-xl bg-[#F2A33C] text-[#14181D]">
                      <s.icon className="h-7 w-7" strokeWidth={1.7} />
                    </span>
                    <span className="font-sora text-sm font-bold uppercase tracking-wider text-[#7C8B9C]">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="mt-5 font-sora text-2xl font-bold text-[#ECEFF2] sm:text-3xl">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#9AA7B4]">{s.desc}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#1C2128] p-4 text-sm leading-relaxed text-[#C7D0DA]"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded bg-[#F2A33C]/15 text-[#F2A33C]">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sectors strip */}
      <section className="bg-[#14181D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Setores</Eyebrow>
            <h2 className="mt-4 font-sora text-3xl font-bold leading-tight text-[#ECEFF2] sm:text-4xl">
              Construímos para quem vive, trabalha e produz.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-white/10 bg-[#1C2128] p-8 transition-colors duration-300 hover:border-[#F2A33C]/40">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#F2A33C]/10 text-[#F2A33C]">
                    <s.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-sora text-xl font-bold text-[#ECEFF2]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9AA7B4]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#1C2128] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Como trabalhamos</Eyebrow>
            <h2 className="mt-4 font-sora text-4xl font-bold leading-tight text-[#ECEFF2] sm:text-5xl">
              Um processo claro, do esboço à entrega.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.num} delay={(i % 5) * 70}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-[#14181D] p-6 transition-colors duration-300 hover:border-[#F2A33C]/40">
                  <span className="font-sora text-3xl font-bold text-[#F2A33C]/30 transition-colors group-hover:text-[#F2A33C]/60">
                    {p.num}
                  </span>
                  <span className="mt-4 inline-grid h-11 w-11 place-items-center rounded-lg bg-[#F2A33C]/10 text-[#F2A33C]">
                    <p.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-sora text-lg font-bold text-[#ECEFF2]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9AA7B4]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + CTA */}
      <section className="relative overflow-hidden bg-[#14181D] py-20">
        <GridLines className="opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-2">
              <div className="relative min-h-[280px]">
                <img
                  src="https://picsum.photos/seed/farol-vibrante-2/900/700"
                  alt="Obra de construção em aço leve com estrutura montada a seco"
                  width={900}
                  height={700}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#14181D]/30 to-[#F2A33C]/15 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14181D]/60 to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-center bg-[#1C2128] p-8 sm:p-12">
                <h2 className="font-sora text-3xl font-bold leading-tight text-[#ECEFF2] sm:text-4xl">
                  Não sabe por onde começar?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#9AA7B4]">
                  Avaliamos a viabilidade da sua ideia em Light Steel Framing e indicamos o melhor
                  caminho — com transparência e orientação técnica desde o início.
                </p>
                <div className="mt-8">
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="group inline-flex items-center gap-2 rounded-lg bg-[#F2A33C] px-7 py-4 font-sans text-base font-bold text-[#14181D] transition-colors duration-200 hover:bg-[#ffb651] cursor-pointer"
                  >
                    Pedir orçamento
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
