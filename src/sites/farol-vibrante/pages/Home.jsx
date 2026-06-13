import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, MapPin, Check, X as XIcon, Minus } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import {
  slug,
  brand,
  highlights,
  lsfReasons,
  ratio,
  comparison,
  services,
  values,
  sectors,
  stats,
} from '../data.jsx'

// Reusable structural-grid backdrop (blueprint lines).
// `onDark` switches the hairlines from light-on-dark (hero) to steel-on-light (sections).
function GridLines({ className = '', onDark = false }) {
  const line = onDark ? 'rgba(255,255,255,0.05)' : 'rgba(20,24,29,0.045)'
  return (
    <div
      className={'pointer-events-none absolute inset-0 ' + className}
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
      }}
    />
  )
}

// Eyebrow / blueprint label
function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#945600]">
      <span className="h-px w-7 bg-[#F2A33C]" />
      {children}
    </span>
  )
}

export default function Home() {
  usePageMeta(
    'Farol Vibrante — Construções LSF | Especialistas em Light Steel Framing',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#14181D] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <GridLines onDark />
        {/* lighthouse beam */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-1/3 right-[12%] h-[120vh] w-[42rem] rotate-[18deg] bg-gradient-to-b from-[#F2A33C]/20 via-[#F2A33C]/5 to-transparent blur-2xl" />
          <div className="absolute right-[8%] top-24 h-2.5 w-2.5 rounded-full bg-[#F2A33C] shadow-[0_0_24px_8px_rgba(242,163,60,0.55)]" />
          <div className="absolute -left-32 bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#7C8B9C]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#C7D0DA]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F2A33C]" /> Light Steel Framing · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-sora text-5xl font-bold leading-[1.02] tracking-tight text-[#ECEFF2] text-balance sm:text-6xl lg:text-7xl">
                Construímos com{' '}
                <span className="relative whitespace-nowrap text-[#F2A33C]">
                  aço leve
                </span>
                , método e luz.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#9AA7B4]">
                {brand.tagline} {brand.claim} Construção industrializada em LSF para habitação,
                comércio e indústria — orientada com o rigor de um farol.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#F2A33C] px-7 py-3.5 font-sans text-base font-bold text-[#14181D] shadow-lg shadow-[#F2A33C]/20 transition-all duration-200 hover:bg-[#E2912A] hover:shadow-xl cursor-pointer"
                >
                  Pedir orçamento
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to={siteLink(slug, 'servicos')}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 font-sans text-base font-bold text-[#ECEFF2] transition-colors duration-200 hover:bg-white/5 cursor-pointer"
                >
                  Ver serviços <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Project image card with steel/amber overlay */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="https://picsum.photos/seed/farol-vibrante-1/720/880"
                alt="Estrutura em aço leve galvanizado durante a montagem em obra"
                width={720}
                height={880}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14181D] via-[#14181D]/40 to-[#F2A33C]/15" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="rounded-xl border border-white/10 bg-[#14181D]/80 p-5 backdrop-blur-sm">
                  <p className="font-sora text-lg font-bold text-[#ECEFF2]">Construção industrializada</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#9AA7B4]">
                    Estrutura leve, montagem a seco e prazos reduzidos — sem abdicar de solidez.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -left-5 -top-5 hidden rounded-xl border border-[#F2A33C]/30 bg-[#1C2128] px-5 py-4 shadow-xl sm:block">
              <span className="font-sora text-2xl font-bold text-[#F2A33C]">~80%</span>
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#9AA7B4]">mais leve</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#E2E6EA] bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden bg-[#E2E6EA] lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70} className="bg-[#FFFFFF] px-2 py-8 sm:px-6">
                <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-[#F2A33C]/12 text-[#945600]">
                  <h.icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 font-sora text-lg font-bold text-[#14181D]">{h.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#4A5763]">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Porquê LSF (educational) ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F7F8FA] py-24">
        <GridLines className="opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow>Porquê Light Steel Framing</Eyebrow>
            <h2 className="mt-4 font-sora text-4xl font-bold leading-tight text-[#14181D] sm:text-5xl">
              Um sistema construtivo pensado para o presente.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4A5763]">
              O Light Steel Framing usa perfis de aço leve galvanizado para erguer estruturas sólidas,
              precisas e sustentáveis. Eis porque é uma escolha cada vez mais sólida:
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lsfReasons.map((r, i) => (
              <Reveal key={r.label} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-[#E2E6EA] bg-[#FFFFFF] p-7 shadow-sm shadow-[#14181D]/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#F2A33C]/60 hover:shadow-md hover:shadow-[#14181D]/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#F7F8FA] text-[#945600] ring-1 ring-[#E2E6EA] transition-colors duration-300 group-hover:bg-[#F2A33C] group-hover:text-[#14181D] group-hover:ring-[#F2A33C]">
                      <r.icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <div className="text-right">
                      <div className="font-sora text-2xl font-bold leading-none text-[#14181D]">{r.stat}</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#5E6B78]">{r.label}</div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-[#4A5763]">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Material vs labour ratio */}
          <Reveal delay={120} className="mt-14">
            <div className="overflow-hidden rounded-2xl border border-[#E2E6EA] bg-[#FFFFFF] shadow-sm shadow-[#14181D]/[0.03]">
              <div className="grid sm:grid-cols-[1.4fr_1fr]">
                <div className="border-b border-[#E2E6EA] p-8 sm:border-b-0 sm:border-r">
                  <p className="font-sora text-xl font-bold text-[#14181D]">
                    Rácio ~80% material / ~20% mão-de-obra
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#4A5763]">
                    Ao deslocar o esforço para o fabrico de componentes de precisão, a obra torna-se
                    mais rápida, limpa e previsível — menos imprevistos, menos desperdício.
                  </p>
                  {/* ratio bar */}
                  <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-[#E2E6EA]">
                    <div className="h-full bg-[#F2A33C]" style={{ width: '80%' }} />
                    <div className="h-full bg-[#64727F]" style={{ width: '20%' }} />
                  </div>
                  <div className="mt-3 flex items-center gap-6 text-xs font-semibold text-[#4A5763]">
                    <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-[#F2A33C]" /> Material</span>
                    <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-[#64727F]" /> Mão-de-obra</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-1">
                  {ratio.map((r) => (
                    <div key={r.label} className="flex flex-col justify-center border-[#E2E6EA] p-8 [&:not(:last-child)]:border-b">
                      <span className={'font-sora text-4xl font-bold ' + (r.accent ? 'text-[#945600]' : 'text-[#64727F]')}>
                        {r.value}
                      </span>
                      <span className="mt-1 font-sora text-sm font-bold text-[#14181D]">{r.label}</span>
                      <span className="mt-1 text-xs leading-relaxed text-[#4A5763]">{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Sectors ──────────────────────────────────────────────────── */}
      <section className="bg-[#EDF0F3] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Onde construímos</Eyebrow>
            <h2 className="mt-4 font-sora text-3xl font-bold leading-tight text-[#14181D] sm:text-4xl">
              Um sistema, três frentes.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#E2E6EA] bg-[#FFFFFF] p-8 shadow-sm shadow-[#14181D]/[0.03] transition-colors duration-300 hover:border-[#F2A33C]/60">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#F2A33C]/12 text-[#945600]">
                    <s.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-sora text-xl font-bold text-[#14181D]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5763]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-[#F7F8FA] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <Eyebrow>O que fazemos</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-sora text-4xl font-bold leading-tight text-[#14181D] sm:text-5xl">
                Do primeiro traço à chave na mão.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#945600] transition-colors hover:text-[#714200] cursor-pointer"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#E2E6EA] bg-[#FFFFFF] p-8 shadow-sm shadow-[#14181D]/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#F2A33C]/60 hover:shadow-md hover:shadow-[#14181D]/[0.06]">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#F7F8FA] text-[#945600] ring-1 ring-[#E2E6EA] transition-colors duration-300 group-hover:bg-[#F2A33C] group-hover:text-[#14181D] group-hover:ring-[#F2A33C]">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-sora text-xl font-bold text-[#14181D]">{s.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#4A5763]">{s.desc}</p>
                  <Link
                    to={siteLink(slug, 'servicos')}
                    className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-bold text-[#945600] transition-colors hover:text-[#714200] cursor-pointer"
                  >
                    Saber mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="border-y border-[#E2E6EA] bg-[#EDF0F3] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>O que nos guia</Eyebrow>
            <h2 className="mt-4 font-sora text-4xl font-bold leading-tight text-[#14181D] sm:text-5xl">
              Fazemos Juntos · com Excelência · Diferente.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A5763]">
              Três compromissos assentes numa relação de confiança mútua.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[#E2E6EA] bg-[#FFFFFF] p-8 shadow-sm shadow-[#14181D]/[0.03]">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#F2A33C]/12 text-[#945600]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-sora text-xl font-bold text-[#14181D]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5763]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Convencional vs Steel Frame ──────────────────────────────── */}
      <section className="bg-[#F7F8FA] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>A diferença</Eyebrow>
            <h2 className="mt-4 font-sora text-4xl font-bold leading-tight text-[#14181D] sm:text-5xl">
              Convencional vs. Steel Frame
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A5763]">
              A mesma exigência, dois caminhos. Veja onde o aço leve faz a diferença.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <div className="overflow-hidden rounded-2xl border border-[#E2E6EA] shadow-sm shadow-[#14181D]/[0.03]">
              {/* header row */}
              <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-[#EDF0F3] text-sm font-bold">
                <div className="p-5 text-[#5E6B78]" />
                <div className="flex items-center gap-2 border-l border-[#E2E6EA] p-5 font-sora text-[#4A5763]">
                  <Minus className="h-4 w-4 text-[#64727F]" /> Convencional
                </div>
                <div className="flex items-center gap-2 border-l border-[#F2A33C]/40 bg-[#F2A33C]/12 p-5 font-sora text-[#945600]">
                  <Check className="h-4 w-4" strokeWidth={3} /> Steel Frame
                </div>
              </div>
              {/* rows */}
              {comparison.rows.map((row, i) => (
                <div
                  key={row.label}
                  className={
                    'grid grid-cols-[1.2fr_1fr_1fr] border-t border-[#E2E6EA] text-sm ' +
                    (i % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#FAFBFC]')
                  }
                >
                  <div className="p-5 font-sora font-semibold text-[#14181D]">{row.label}</div>
                  <div className="flex items-start gap-2 border-l border-[#E2E6EA] p-5 text-[#4A5763]">
                    <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#64727F]" />
                    {row.conv}
                  </div>
                  <div className="flex items-start gap-2 border-l border-[#F2A33C]/40 bg-[#F2A33C]/[0.08] p-5 font-medium text-[#14181D]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#945600]" strokeWidth={3} />
                    {row.lsf}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-[#5E6B78]">
              Comparação indicativa do sistema construtivo. Cada projeto é avaliado de forma individual.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────────── */}
      <section className="border-y border-[#E2E6EA] bg-[#EDF0F3] py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="text-center">
              <div className="font-sora text-4xl font-bold text-[#945600] sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#4A5763]">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F7F8FA] py-24">
        <GridLines className="opacity-50" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-1/4 left-1/2 h-[80vh] w-[36rem] -translate-x-1/2 rotate-[8deg] bg-gradient-to-b from-[#F2A33C]/20 to-transparent blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-sora text-4xl font-bold leading-tight text-[#14181D] text-balance sm:text-5xl">
              Tem um projeto em mente?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#4A5763]">
              Conte-nos a sua ideia e ajudamo-lo a construir mais rápido, mais leve e mais sustentável.
              Peça o seu orçamento sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="group inline-flex items-center gap-2 rounded-lg bg-[#F2A33C] px-8 py-4 font-sans text-base font-bold text-[#14181D] transition-colors duration-200 hover:bg-[#E2912A] cursor-pointer"
              >
                Pedir orçamento
                <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-lg border border-[#CBD2D9] bg-[#FFFFFF] px-8 py-4 font-sans text-base font-bold text-[#14181D] transition-colors hover:bg-[#EDF0F3] cursor-pointer"
              >
                <MapPin className="h-5 w-5 text-[#945600]" /> Onde estamos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
