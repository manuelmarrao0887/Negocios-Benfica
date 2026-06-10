import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, MessageCircle, Check, Snowflake } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, services, problemSolutions, steps, areas, areaChips, trust } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Técnico Frio | Reparação de ar condicionado e frigoríficos na Grande Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F1F8FC] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* cool decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#16B5C9]/15 blur-3xl" />
          <div className="absolute -left-44 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#0E7FC1]/10 blur-3xl" />
          <Snowflake className="absolute right-8 top-28 hidden h-72 w-72 text-[#0E7FC1]/[0.05] lg:block" strokeWidth={1} aria-hidden="true" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0E7FC1]/20 bg-white/70 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#0E7FC1] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16B5C9]" /> Grande Lisboa · Ao domicílio
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-outfit text-5xl font-bold leading-[1.04] tracking-tight text-[#0B2536] text-balance sm:text-6xl lg:text-7xl">
                Reparação de ar condicionado e frigoríficos.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#4A5E70]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0E7FC1] to-[#16B5C9] px-7 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-[#0E7FC1]/25 transition-all duration-200 hover:shadow-xl hover:brightness-105 cursor-pointer"
                >
                  {brand.cta} <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0B2536]/15 bg-white px-7 py-3.5 font-sans text-base font-bold text-[#0B2536] transition-colors duration-200 hover:border-[#0E7FC1]/40 hover:text-[#0E7FC1] cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-5 font-outfit text-sm font-semibold uppercase tracking-wide text-[#16B5C9]">
                {brand.claim}
              </p>
            </Reveal>
          </div>

          {/* floating info card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B2536] to-[#103a52] p-8 text-white shadow-2xl shadow-[#0B2536]/30">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#16B5C9]/25 blur-2xl" />
              <Snowflake className="absolute right-6 top-6 h-10 w-10 text-[#16B5C9]/40" strokeWidth={1.5} aria-hidden="true" />
              <p className="font-outfit text-2xl font-bold">Avariou? Nós resolvemos.</p>
              <p className="mt-3 text-sm leading-relaxed text-[#a7bccb]">
                Diagnóstico rápido ao domicílio e a solução certa para repor o seu conforto.
              </p>
              <ul className="mt-6 space-y-3">
                {['Diagnóstico rápido ao domicílio', 'Equipamento residencial e comercial', 'Ar condicionado e frigoríficos'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0E7FC1] to-[#16B5C9] text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 text-[#16B5C9]" /> WhatsApp
                </a>
                <a
                  href={brand.phone2Href}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-[#16B5C9]" /> {brand.phone2Display}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#0B2536]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#0E7FC1]/10 text-[#0E7FC1]">
                <h.icon className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 font-outfit text-lg font-semibold text-[#0B2536]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4A5E70]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-[#F1F8FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#16B5C9]">
                O que reparamos
              </span>
              <h2 className="mt-3 max-w-2xl font-outfit text-4xl font-bold leading-tight text-[#0B2536] sm:text-5xl">
                Especialistas em frio e ar condicionado.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#0E7FC1] transition-colors hover:text-[#16B5C9] cursor-pointer"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#0B2536]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#16B5C9]/50 hover:shadow-xl hover:shadow-[#0E7FC1]/10">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#0E7FC1]/10 text-[#0E7FC1] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#0E7FC1] group-hover:to-[#16B5C9] group-hover:text-white">
                    <s.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <p className="mt-5 font-sans text-xs font-bold uppercase tracking-wide text-[#16B5C9]">{s.eyebrow}</p>
                  <h3 className="mt-1.5 font-outfit text-xl font-semibold text-[#0B2536]">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4A5E70]">{s.desc}</p>
                  <Link
                    to={siteLink(slug, 'servicos')}
                    className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-bold text-[#0E7FC1] transition-colors hover:text-[#16B5C9] cursor-pointer"
                  >
                    Saber mais <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problema → Solução ───────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#16B5C9]">
              Problema → Solução
            </span>
            <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#0B2536] sm:text-5xl">
              Conhece o problema. Nós temos a solução.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A5E70]">
              Os sintomas mais comuns nos equipamentos de frio e climatização — e como os resolvemos.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problemSolutions.map((p, i) => (
              <Reveal key={p.problem} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-[#0B2536]/10 bg-[#F1F8FC] p-6 transition-all duration-300 hover:border-[#16B5C9]/50 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="inline-grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0E7FC1] shadow-sm">
                      <p.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-outfit text-base font-semibold text-[#0B2536]">{p.problem}</h3>
                  </div>
                  <div className="mt-4 flex items-start gap-2 border-t border-[#0B2536]/10 pt-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16B5C9]" strokeWidth={3} />
                    <p className="text-sm leading-relaxed text-[#4A5E70]">{p.solution}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process / fast diagnosis ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B2536] py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#0E7FC1]/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#16B5C9]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#16B5C9]">
              Como trabalhamos
            </span>
            <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-white sm:text-5xl">
              Diagnóstico rápido, solução eficaz.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 90}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.07]">
                  <span className="font-outfit text-5xl font-bold text-[#16B5C9]/30">{s.step}</span>
                  <span className="mt-3 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#0E7FC1] to-[#16B5C9] text-white">
                    <s.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-outfit text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#a7bccb]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service area ─────────────────────────────────────────────── */}
      <section className="bg-[#F1F8FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#16B5C9]">
              Onde atuamos
            </span>
            <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#0B2536] sm:text-5xl">
              Cobertura em toda a Grande Lisboa.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A5E70]">
              Quatro eixos de atuação — Lisboa, Margem Sul, Linha de Sintra e Linha de Cascais.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-[#0B2536]/10 bg-white p-7">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#0E7FC1]/10 text-[#0E7FC1]">
                    <a.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-outfit text-lg font-semibold text-[#0B2536]">{a.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {a.zones.map((z) => (
                      <li key={z} className="flex items-center gap-2 text-sm text-[#4A5E70]">
                        <span className="h-1 w-1 rounded-full bg-[#16B5C9]" /> {z}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10 flex flex-wrap justify-center gap-2">
            {areaChips.map((z) => (
              <span
                key={z}
                className="rounded-full border border-[#0B2536]/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#4A5E70]"
              >
                {z}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Trust / why us ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-4xl font-bold leading-tight text-[#0B2536] sm:text-5xl">
              Porquê o Técnico Frio
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A5E70]">
              Rapidez, eficácia e uma cobertura ampla — para casa e para o seu negócio.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-[#F1F8FC] p-7 ring-1 ring-[#0B2536]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#0E7FC1] to-[#16B5C9] text-white">
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

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E7FC1] to-[#16B5C9] py-20">
        <div className="pointer-events-none absolute inset-0">
          <Snowflake className="absolute -left-10 -top-10 h-72 w-72 text-white/10" strokeWidth={0.8} aria-hidden="true" />
          <Snowflake className="absolute -bottom-16 right-0 h-80 w-80 text-white/10" strokeWidth={0.8} aria-hidden="true" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-outfit text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
              Pedir orçamento / Agendar visita técnica
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Descreva-nos a avaria e marcamos o diagnóstico ao domicílio. Atendimento de segunda a sábado, mediante marcação.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-base font-bold text-[#0E7FC1] shadow-lg transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/10 cursor-pointer"
              >
                <MapPin className="h-5 w-5" /> Contacto
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
