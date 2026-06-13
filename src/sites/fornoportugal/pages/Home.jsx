import { Link } from 'react-router-dom'
import { Phone, ArrowRight, ArrowUpRight, Flame, CheckCircle2 } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, stats, highlights, services, sectors, countries, certifications } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Fornoportugal — Engenharia de Refractários para a Indústria',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ── the one retained dark "furnace" band (industrial drama) ── */}
      <section className="relative overflow-hidden bg-[#141B2E] pt-36 pb-24 sm:pt-44 sm:pb-32">
        {/* heat / flame decoration (brand red over navy) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-[42rem] w-[42rem] rounded-full bg-[#D11F2A]/22 blur-[120px]" />
          <div className="absolute -left-40 bottom-[-12rem] h-[36rem] w-[36rem] rounded-full bg-[#1F2D5E]/40 blur-[120px]" />
          {/* hot floor glow */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#D11F2A]/18 to-transparent" />
          {/* engineering grid */}
          <svg className="absolute inset-0 h-full w-full text-white/[0.05]" aria-hidden="true">
            <defs>
              <pattern id="fp-grid" width="56" height="56" patternUnits="userSpaceOnUse">
                <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fp-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D11F2A]/45 bg-[#D11F2A]/12 px-4 py-1.5 font-oswald text-xs font-medium uppercase tracking-[0.2em] text-[#FF8A8F]">
                <Flame className="h-3.5 w-3.5" /> Desde {brand.since} · Atuação internacional
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-oswald text-5xl font-bold uppercase leading-[0.98] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
                Engenharia de{' '}
                <span className="bg-gradient-to-r from-[#FF5159] to-[#D11F2A] bg-clip-text text-transparent">
                  refractários
                </span>{' '}
                para a indústria.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#C7CDDD]">
                Construção, reconstrução e isolamento de fornos para alta temperatura. Mais de 30 anos
                a servir vidreiras, siderurgias, cimenteiras e refinarias em 27 países.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="group inline-flex items-center gap-2 rounded-md bg-[#D11F2A] px-7 py-3.5 font-oswald text-base font-semibold uppercase tracking-[0.06em] text-white shadow-[0_12px_30px_-8px_rgba(209,31,42,0.8)] transition-all duration-200 hover:bg-[#FF5159] hover:shadow-[0_14px_36px_-6px_rgba(255,81,89,0.9)] cursor-pointer"
                >
                  Pedir orçamento
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  to={siteLink(slug, 'servicos')}
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-7 py-3.5 font-oswald text-base font-medium uppercase tracking-[0.06em] text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer"
                >
                  Ver serviços
                </Link>
              </div>
            </Reveal>
          </div>

          {/* hero side panel — furnace gauge card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1B2540] p-8 shadow-2xl shadow-black/40">
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#D11F2A]/28 blur-2xl" />
              <div className="relative flex items-center justify-between">
                <span className="font-oswald text-xs font-medium uppercase tracking-[0.22em] text-[#C7CDDD]">
                  Temperatura de serviço
                </span>
                <Flame className="h-5 w-5 text-[#FF5159]" />
              </div>
              <div className="relative mt-3 font-oswald text-6xl font-bold leading-none text-white">
                1550<span className="text-[#FF8A8F]">°C</span>
              </div>
              <p className="relative mt-2 text-sm text-[#9AA3BD]">
                Regime típico de fusão num forno de vidro float.
              </p>

              {/* heat bar */}
              <div className="relative mt-6 h-2.5 overflow-hidden rounded-full bg-[#0F1424]">
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#FF8A8F] via-[#FF5159] to-[#D11F2A]" />
              </div>

              <ul className="relative mt-7 space-y-3 border-t border-white/10 pt-6">
                {['Revestimentos refractários de alta performance', 'Reparações a frio e a quente', 'Supervisão e métodos de segurança'].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm font-medium text-white">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF5159]" strokeWidth={2} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* stats band */}
        <Reveal delay={120} className="relative mx-auto mt-16 max-w-7xl px-6 sm:mt-20">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#1B2540] px-6 py-7 text-center">
                <div className="font-oswald text-4xl font-bold text-[#FF8A8F] sm:text-5xl">{s.value}</div>
                <div className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#C7CDDD]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Trust strip (LIGHT) ──────────────────────────────────────── */}
      <section className="border-b border-[#1F2D5E]/12 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden px-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="py-9 sm:px-6">
              <span className="inline-grid h-11 w-11 place-items-center rounded-md bg-[#D11F2A]/10 text-[#D11F2A]">
                <h.icon className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 font-oswald text-lg font-semibold uppercase tracking-wide text-[#1B2540]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5A6175]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services preview (LIGHT) ─────────────────────────────────── */}
      <section className="bg-[#F7F5F1] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#D11F2A]">
                O que fazemos
              </span>
              <h2 className="mt-3 max-w-2xl font-oswald text-4xl font-bold uppercase leading-tight text-[#1B2540] sm:text-5xl">
                Soluções refractárias de ponta a ponta.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="group inline-flex shrink-0 items-center gap-2 font-oswald text-sm font-semibold uppercase tracking-[0.1em] text-[#1F2D5E] transition-colors hover:text-[#D11F2A] cursor-pointer"
              >
                Todos os serviços
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-xl border border-[#1F2D5E]/12 bg-white p-7 shadow-sm shadow-[#1F2D5E]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D11F2A]/40 hover:shadow-xl hover:shadow-[#1F2D5E]/10">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-md bg-[#1F2D5E]/8 text-[#1F2D5E] ring-1 ring-[#1F2D5E]/10 transition-colors duration-300 group-hover:bg-[#D11F2A] group-hover:text-white group-hover:ring-[#D11F2A]">
                    <s.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-oswald text-xl font-semibold uppercase tracking-wide text-[#1B2540]">{s.short}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6175]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sectors / furnace types (LIGHT, warm-stone alt) ──────────── */}
      <section className="relative overflow-hidden border-y border-[#1F2D5E]/12 bg-[#ECE7DF] py-24">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#D11F2A]/8 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#D11F2A]">
              Setores · Tipos de forno
            </span>
            <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#1B2540] sm:text-5xl">
              A indústria pesada confia em nós.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5A6175]">
              Do vidro float ao aço, do cimento à petroquímica — intervimos nos fornos mais exigentes
              de cada setor.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sec, i) => (
              <Reveal key={sec.title} delay={(i % 3) * 80}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-[#1F2D5E]/12 bg-white p-7 shadow-sm shadow-[#1F2D5E]/5 transition-all duration-300 hover:border-[#1F2D5E]/40 hover:shadow-lg hover:shadow-[#1F2D5E]/10">
                  {/* ember sweep */}
                  <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#D11F2A]/0 blur-2xl transition-all duration-500 group-hover:bg-[#D11F2A]/15" />
                  <div className="relative flex items-center gap-4">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-md bg-[#1F2D5E] text-white">
                      <sec.icon className="h-6 w-6" strokeWidth={1.9} />
                    </span>
                    <h3 className="font-oswald text-2xl font-semibold uppercase tracking-wide text-[#1B2540]">{sec.title}</h3>
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-[#5A6175]">{sec.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── International presence (LIGHT) ────────────────────────────── */}
      <section className="bg-[#F7F5F1] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#D11F2A]">
                Presença internacional
              </span>
              <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#1B2540] sm:text-5xl">
                Obras em quatro continentes.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5A6175]">
                A partir de Lisboa, levamos a nossa engenharia de refractários a 27 países — da Europa
                ao Médio Oriente, de África à Ásia e às Américas.
              </p>
              <div className="mt-8 inline-flex items-baseline gap-3 rounded-lg border border-[#1F2D5E]/12 bg-white px-6 py-4 shadow-sm shadow-[#1F2D5E]/5">
                <span className="font-oswald text-5xl font-bold text-[#1F2D5E]">27</span>
                <span className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#5A6175]">
                  países de atuação
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-wrap gap-2.5">
                {countries.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[#1F2D5E]/15 bg-white px-4 py-2 font-oswald text-sm font-medium uppercase tracking-[0.08em] text-[#5A6175] transition-colors duration-200 hover:border-[#D11F2A]/50 hover:text-[#1B2540] cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Certifications (LIGHT, warm-stone alt) ───────────────────── */}
      <section className="border-y border-[#1F2D5E]/12 bg-[#ECE7DF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#D11F2A]">
              Certificações · Confiança
            </span>
            <h2 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight text-[#1B2540] sm:text-5xl">
              Rigor certificado, segurança comprovada.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.code} delay={i * 100}>
                <div className="flex h-full items-start gap-5 rounded-2xl border border-[#1F2D5E]/12 bg-white p-8 shadow-sm shadow-[#1F2D5E]/5">
                  <span className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-md bg-[#1F2D5E] text-white">
                    <c.icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-oswald text-2xl font-bold uppercase tracking-wide text-[#1F2D5E]">{c.code}</p>
                    <p className="mt-0.5 font-oswald text-sm font-medium uppercase tracking-[0.1em] text-[#1B2540]">
                      {c.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#5A6175]">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-10 text-center">
            <p className="font-oswald text-lg font-medium uppercase tracking-[0.12em] text-[#5A6175]">
              30+ anos de experiência ·{' '}
              <span className="text-[#D11F2A]">{brand.claim}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band (LIGHT, navy panel for contrast) ───────────────── */}
      <section className="bg-[#F7F5F1] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#141B2E] px-6 py-16 sm:px-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#D11F2A]/22 to-transparent" />
              <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#1F2D5E]/50 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#D11F2A]/18 blur-3xl" />
            </div>
            <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
              <Reveal>
                <h2 className="font-oswald text-4xl font-bold uppercase leading-tight text-white text-balance sm:text-5xl">
                  Tem um forno para construir ou reparar?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-[#C7CDDD]">
                  Avaliamos a sua obra e apresentamos uma proposta detalhada. Fale com a nossa equipa de
                  engenharia.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="group inline-flex items-center gap-2 rounded-md bg-[#D11F2A] px-8 py-4 font-oswald text-base font-semibold uppercase tracking-[0.06em] text-white transition-all duration-200 hover:bg-[#FF5159] cursor-pointer"
                  >
                    Pedir orçamento
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <a
                    href={brand.phoneHref}
                    className="inline-flex items-center gap-2 rounded-md border border-white/25 px-8 py-4 font-oswald text-base font-medium uppercase tracking-[0.06em] text-white transition-colors hover:bg-white/10 cursor-pointer"
                  >
                    <Phone className="h-5 w-5" /> {brand.phoneDisplay}
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
