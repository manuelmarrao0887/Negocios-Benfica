import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MessageCircle, Check, ShieldCheck, Activity } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, trust, process, symptoms, services, guarantees, brands, stats } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Reparação TV Lisboa | Reparação de televisores LED, LCD, Plasma e Smart TV',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero (light) ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* glow + grid backdrop */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4F8FF] via-white to-white" />
          <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#2E7DF6]/15 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#18C29C]/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.6]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(46,125,246,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(46,125,246,0.07) 1px, transparent 1px)',
              backgroundSize: '46px 46px',
              maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2E7DF6]/25 bg-[#EAF1FE] px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#1E66D6]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#18C29C] opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#18C29C]" />
                </span>
                Assistência técnica · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-space text-4xl font-bold leading-[1.05] tracking-tight text-[#0F1B2D] text-balance sm:text-5xl lg:text-6xl">
                Especialistas exclusivos em{' '}
                <span className="bg-gradient-to-r from-[#2E7DF6] to-[#0E9C82] bg-clip-text text-transparent">
                  reparação de televisores.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#51607A]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2E7DF6] px-7 py-3.5 font-sans text-base font-bold text-white shadow-[0_8px_24px_-8px_#2E7DF6] transition-all duration-200 hover:bg-[#1f6fe8] hover:shadow-[0_10px_28px_-6px_#2E7DF6] cursor-pointer"
                >
                  <Phone className="h-5 w-5" /> {brand.phoneDisplay}
                </a>
                <Link
                  to={siteLink(slug, 'servicos')}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#CBD7E8] bg-white px-7 py-3.5 font-sans text-base font-bold text-[#0F1B2D] transition-colors duration-200 hover:border-[#2E7DF6]/50 hover:bg-[#F4F8FF] cursor-pointer"
                >
                  Ver serviços <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#51607A]">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#0E9C82]" /> Garantia até 2 anos
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#0E9C82]" /> Orçamento gratuito
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#0E9C82]" /> 35 anos de experiência
                </span>
              </div>
            </Reveal>
          </div>

          {/* Diagnostic TV-panel mockup (stays a dark device — sharp on light) */}
          <Reveal delay={260} className="relative">
            <div className="relative mx-auto max-w-md">
              {/* TV body */}
              <div className="relative overflow-hidden rounded-2xl border border-[#1b2740] bg-[#131C2E] p-3 shadow-2xl shadow-[#0B1220]/25 ring-1 ring-[#E3E9F2]">
                {/* screen */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0B1220] to-[#0e1730] p-6 ring-1 ring-[#2E7DF6]/15">
                  <div className="flex items-center justify-between">
                    <span className="font-space text-xs font-bold uppercase tracking-[0.2em] text-[#5AA0FF]">
                      Diagnóstico
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#18C29C]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#46D9BC]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#18C29C]" /> Ativo
                    </span>
                  </div>

                  {/* fake waveform */}
                  <svg className="mt-5 h-20 w-full" viewBox="0 0 320 80" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#2E7DF6" />
                        <stop offset="100%" stopColor="#18C29C" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 40 L40 40 L52 18 L66 62 L80 28 L96 40 L150 40 L164 12 L178 68 L192 40 L320 40"
                      stroke="url(#wave)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* readouts */}
                  <div className="mt-4 space-y-3">
                    {[
                      { k: 'Retroiluminação LED', v: 'Verificada', ok: true },
                      { k: 'Fonte de alimentação', v: 'Estável', ok: true },
                      { k: 'Placa principal', v: 'OK', ok: true },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center justify-between border-b border-[#22304d] pb-2.5">
                        <span className="font-sans text-xs text-[#A9B6CC]">{r.k}</span>
                        <span className="inline-flex items-center gap-1.5 font-space text-xs font-bold text-[#46D9BC]">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} /> {r.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* stand light */}
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Activity className="h-3.5 w-3.5 text-[#5AA0FF]" />
                  <span className="font-space text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8294B0]">
                    Painel de medição
                  </span>
                </div>
              </div>

              {/* floating badge (light card) */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-[#E3E9F2] bg-white px-5 py-4 shadow-xl shadow-[#0B1220]/10 sm:block">
                <div className="font-space text-2xl font-bold text-[#0F1B2D]">35 anos</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-[#51607A]">a reparar TVs</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#E3E9F2] bg-[#E3E9F2]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 70} className="bg-white px-3 py-8 sm:px-6">
              <span className="inline-grid h-10 w-10 place-items-center rounded-lg bg-[#2E7DF6]/10 text-[#2E7DF6]">
                <t.icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-space text-base font-bold text-[#0F1B2D]">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#51607A]">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Process (3 steps) ────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#1E66D6]">
              Como trabalhamos
            </span>
            <h2 className="mt-3 font-space text-3xl font-bold leading-tight text-[#0F1B2D] sm:text-4xl">
              Três passos, sem surpresas.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#51607A]">
              A reparação só avança depois de saber exatamente o que falhou e quanto custa.
            </p>
          </Reveal>

          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            {/* connector line */}
            <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-[#2E7DF6]/30 to-transparent md:block" />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 110} className="relative">
                <div className="group h-full rounded-2xl border border-[#E3E9F2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E7DF6]/40 hover:shadow-xl hover:shadow-[#2E7DF6]/5">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#EAF1FE] text-[#2E7DF6] ring-1 ring-[#2E7DF6]/15 transition-colors duration-300 group-hover:bg-[#2E7DF6] group-hover:text-white">
                      <p.icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="font-space text-4xl font-bold text-[#0F1B2D]/[0.06]">{p.step}</span>
                  </div>
                  <h3 className="mt-5 font-space text-xl font-bold text-[#0F1B2D]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51607A]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Symptoms ("reconhece estes sinais?") ─────────────────────── */}
      <section className="relative overflow-hidden border-y border-[#E3E9F2] bg-[#F4F7FB] py-24">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#2E7DF6]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#0B8C73]">
                Reconhece estes sinais?
              </span>
              <h2 className="mt-3 font-space text-3xl font-bold leading-tight text-[#0F1B2D] sm:text-4xl">
                A sua TV está a dar sinais de avaria.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#51607A]">
                Muitos destes sintomas têm origem na retroiluminação LED ou na fonte de alimentação — e
                quase sempre têm solução. Diga-nos o que vê e ajudamos a perceber a causa.
              </p>
              <a
                href={brand.phoneHref}
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#2E7DF6] px-6 py-3 font-sans text-sm font-bold text-white transition-colors hover:bg-[#1f6fe8] cursor-pointer"
              >
                <Phone className="h-4 w-4" /> Descrever a avaria
              </a>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-3 sm:grid-cols-2">
                {symptoms.map((s) => (
                  <div
                    key={s.label}
                    className="group flex items-start gap-3.5 rounded-xl border border-[#E3E9F2] bg-white p-4 transition-colors duration-200 hover:border-[#18C29C]/40"
                  >
                    <span className="mt-0.5 inline-grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#18C29C]/10 text-[#0B8C73]">
                      <s.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-space text-sm font-bold text-[#0F1B2D]">{s.label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#51607A]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#1E66D6]">
                O que fazemos
              </span>
              <h2 className="mt-3 max-w-xl font-space text-3xl font-bold leading-tight text-[#0F1B2D] sm:text-4xl">
                Reparação focada, com uma especialidade clara.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#2E7DF6] transition-colors hover:text-[#0B8C73] cursor-pointer"
              >
                Todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div
                  className={
                    'group flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ' +
                    (s.featured
                      ? 'border-[#2E7DF6]/40 bg-gradient-to-b from-[#F2F7FF] to-white shadow-xl shadow-[#2E7DF6]/10'
                      : 'border-[#E3E9F2] bg-white hover:border-[#2E7DF6]/30 hover:shadow-xl hover:shadow-[#2E7DF6]/5')
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#EAF1FE] text-[#2E7DF6] ring-1 ring-[#2E7DF6]/15">
                      <s.icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    {s.featured && (
                      <span className="rounded-full bg-[#2E7DF6]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1A5FCC]">
                        Especialidade
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-space text-xl font-bold text-[#0F1B2D]">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#51607A]">{s.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-[#E3E9F2] pt-5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-[#475569]">
                        <Check className="h-4 w-4 shrink-0 text-[#0B8C73]" strokeWidth={2.5} /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantee ────────────────────────────────────────────────── */}
      <section className="border-y border-[#E3E9F2] bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#0B8C73]">
                Garantia
              </span>
              <h2 className="mt-3 font-space text-3xl font-bold leading-tight text-[#0F1B2D] sm:text-4xl">
                Reparação com garantia a sério.
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#51607A]">
                Assumimos por escrito o trabalho que fazemos. Porque, como costumamos dizer,
                <span className="text-[#0F1B2D]"> quando se fala em garantia, não se pode negar a mesma em caso algum.</span>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {guarantees.map((g) => (
                  <div key={g.period} className="rounded-2xl border border-[#E3E9F2] bg-white p-7 text-center">
                    <span className="mx-auto inline-grid h-12 w-12 place-items-center rounded-full bg-[#18C29C]/10 text-[#0B8C73]">
                      <g.icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div className="mt-4 font-space text-3xl font-bold text-[#0F1B2D]">{g.period}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#51607A]">{g.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Brands strip ─────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#51607A]">
              Reparamos quase todas as marcas
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {brands.map((b) => (
                <span
                  key={b}
                  className="font-space text-xl font-bold tracking-tight text-[#7A8AA3] transition-colors duration-200 hover:text-[#0F1B2D] sm:text-2xl"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band (the single retained dark accent band) ───────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0e1a33] to-[#0B1220] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-[#2E7DF6]/20 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#18C29C]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-space text-3xl font-bold leading-tight text-white text-balance sm:text-4xl">
              A sua TV em boas mãos.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#A9B6CC]">
              Ligue e descreva a avaria. O diagnóstico e o orçamento são gratuitos — só repara se quiser.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-[#2E7DF6] px-8 py-4 font-sans text-base font-bold text-white shadow-[0_0_28px_-6px_#2E7DF6] transition-all duration-200 hover:scale-[1.02] hover:bg-[#1f6fe8] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#18C29C]/50 px-8 py-4 font-sans text-base font-bold text-[#46D9BC] transition-colors duration-200 hover:bg-[#18C29C] hover:text-[#0B1220] cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
