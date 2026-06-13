import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Check, Activity, Cpu, Plus } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, capabilities, solutions, sectors, stats } from '../data.jsx'

// Reusable blueprint grid background (technical / engineering motif).
function GridField({ className = '', tone = '#16182B', opacity = 0.05 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="100%"
      height="100%"
      style={{ color: tone, opacity }}
    >
      <defs>
        <pattern id="rd-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rd-grid)" />
    </svg>
  )
}

export default function Home() {
  usePageMeta(
    'Rui Dinis, Lda. | Máquinas de alta frequência e ultra-sons · Eletrónica industrial',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero (LIGHT — dark text) ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F4F6F9] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <GridField className="absolute inset-0" tone="#16182B" opacity={0.05} />
          <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#2E3192]/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#E0A126]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-md border border-[#16182B]/15 bg-white px-3.5 py-1.5 font-plexmono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#16182B]">
                <span className="h-1.5 w-1.5 bg-[#2E3192]" /> Eletrónica Industrial · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-plex text-5xl font-bold leading-[1.04] tracking-tight text-[#16182B] text-balance sm:text-6xl">
                Máquinas de alta frequência e ultra-sons.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#4C5A68]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-md bg-[#2E3192] px-7 py-3.5 font-plex text-base font-bold text-white shadow-lg shadow-[#2E3192]/25 transition-all duration-200 hover:bg-[#23265E] hover:shadow-xl cursor-pointer"
                >
                  Pedir assistência <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md border border-[#16182B]/20 bg-white px-7 py-3.5 font-plex text-base font-bold text-[#16182B] transition-colors duration-200 hover:border-[#16182B]/40 hover:bg-[#16182B]/[0.03] cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 font-plexmono text-xs uppercase tracking-[0.16em] text-[#4C5A68]">
                Soldadura HF/RF · Ultra-sons · Reparação · Pós-venda
              </p>
            </Reveal>
          </div>

          {/* Technical spec card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-xl bg-[#16182B] p-8 text-[#F4F6F9] shadow-2xl shadow-[#16182B]/30">
              <GridField className="absolute inset-0" tone="#FFFFFF" opacity={0.05} />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2E3192]/25 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-plexmono text-[11px] uppercase tracking-[0.2em] text-[#E0A126]">
                    Capacidade técnica
                  </span>
                  <Activity className="h-5 w-5 text-[#E0A126]" />
                </div>
                <p className="mt-4 font-plex text-2xl font-bold leading-snug">
                  Resposta às exigências industriais.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Soldadura de alta frequência (HF/RF)',
                    'Soldadura por ultra-sons',
                    'Reparação de eletrónica industrial',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm font-medium">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded bg-[#2E3192] text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 text-center">
                  <div className="bg-[#16182B] px-3 py-4">
                    <div className="font-plexmono text-2xl font-semibold text-white">2002</div>
                    <div className="mt-1 font-plexmono text-[10px] uppercase tracking-[0.16em] text-[#7E8C9B]">
                      Desde
                    </div>
                  </div>
                  <div className="bg-[#16182B] px-3 py-4">
                    <div className="font-plexmono text-2xl font-semibold text-white">PT</div>
                    <div className="mt-1 font-plexmono text-[10px] uppercase tracking-[0.16em] text-[#7E8C9B]">
                      Exclusivo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Capability strip ─────────────────────────────────────────── */}
      <section className="border-y border-[#16182B]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <div className="flex items-center justify-between">
                <c.icon className="h-7 w-7 text-[#2E3192]" strokeWidth={1.6} />
                <span className="font-plexmono text-[10px] font-medium uppercase tracking-[0.14em] text-[#9DAAB8]">
                  {c.code}
                </span>
              </div>
              <h3 className="mt-4 font-plex text-lg font-bold text-[#16182B]">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4C5A68]">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Solutions / equipment catalogue ──────────────────────────── */}
      <section className="bg-[#F4F6F9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#2E3192]">
                Soluções & Equipamento
              </span>
              <h2 className="mt-3 max-w-2xl font-plex text-4xl font-bold leading-tight text-[#16182B] sm:text-5xl">
                Catálogo técnico para a indústria.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'solucoes')}
                className="inline-flex shrink-0 items-center gap-2 font-plex text-sm font-bold text-[#16182B] transition-colors hover:text-[#2E3192] cursor-pointer"
              >
                Ver catálogo completo <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-xl border border-[#16182B]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E3192]/40 hover:shadow-xl hover:shadow-[#16182B]/5">
                  <div className="flex items-start justify-between">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-md bg-[#16182B]/[0.05] text-[#16182B] transition-colors duration-300 group-hover:bg-[#2E3192] group-hover:text-white">
                      <s.icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="rounded border border-[#16182B]/10 px-2 py-1 font-plexmono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4C5A68]">
                      {s.code}
                    </span>
                  </div>
                  <h3 className="mt-5 font-plex text-xl font-bold text-[#16182B]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4C5A68]">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-[#F4F6F9] px-2 py-0.5 font-plexmono text-[10px] uppercase tracking-[0.1em] text-[#4C5A68]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Applications / sectors ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#16182B] py-24 text-[#F4F6F9]">
        <GridField className="absolute inset-0" tone="#FFFFFF" opacity={0.04} />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#E0A126]">
              Aplicações & Setores
            </span>
            <h2 className="mt-3 font-plex text-4xl font-bold leading-tight text-white sm:text-5xl">
              Onde o nosso equipamento trabalha.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#9DAAB8]">
              Tecnologia de soldadura de alta frequência e ultra-sons aplicada a um leque alargado de
              processos industriais.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group flex h-full items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#E0A126]/40 hover:bg-white/[0.06]">
                  <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#2E3192]/15 text-[#E0A126]">
                    <s.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-plex text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#9DAAB8]">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assistência técnica + equipment photo ────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-[#16182B]/10">
              <img
                src="https://picsum.photos/seed/rui-dinis-1/900/1000"
                alt="Bancada de reparação de eletrónica industrial com equipamento de soldadura"
                width="900"
                height="1000"
                loading="lazy"
                className="aspect-[9/10] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16182B]/80 via-[#16182B]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-plexmono text-[11px] uppercase tracking-[0.18em] text-[#E0A126]">
                  Oficina & Terreno
                </span>
                <p className="mt-2 font-plex text-2xl font-bold text-white">
                  Manutenção preventiva e corretiva.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#2E3192]">
                Assistência técnica
              </span>
              <h2 className="mt-3 font-plex text-4xl font-bold leading-tight text-[#16182B] sm:text-5xl">
                Equipamento parado custa-lhe dinheiro.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#4C5A68]">
                Damos resposta a avarias e necessidades de manutenção em equipamentos de alta
                frequência, ultra-sons e demais eletrónica industrial — em oficina ou no terreno, com
                peças e consumíveis próprios.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <ul className="mt-8 space-y-3">
                {[
                  'Diagnóstico e reparação ao nível de componente',
                  'Manutenção preventiva e corretiva',
                  'Fornecimento de componentes e consumíveis',
                  'Apoio pós-venda dedicado',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] text-[#16182B]">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded bg-[#2E3192]/10 text-[#2E3192]">
                      <Plus className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to={siteLink(slug, 'solucoes')}
                className="mt-9 inline-flex items-center gap-2 rounded-md border border-[#16182B]/20 px-6 py-3 font-plex text-sm font-bold text-[#16182B] transition-colors hover:border-[#2E3192]/50 hover:text-[#2E3192] cursor-pointer"
              >
                Ver soluções <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Desde 2002 / stats ───────────────────────────────────────── */}
      <section className="bg-[#F4F6F9] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-[#16182B] p-10">
              <GridField className="absolute inset-0" tone="#FFFFFF" opacity={0.05} />
              <div className="relative flex h-full flex-col justify-between">
                <Cpu className="h-10 w-10 text-[#E0A126]" strokeWidth={1.4} />
                <div className="mt-10">
                  <span className="font-plexmono text-6xl font-semibold text-white sm:text-7xl">
                    {brand.since}
                  </span>
                  <p className="mt-2 font-plex text-lg font-semibold text-[#9DAAB8]">
                    Ano em que iniciámos atividade na eletrónica industrial.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#2E3192]">
                Quem somos
              </span>
              <h2 className="mt-3 font-plex text-4xl font-bold leading-tight text-[#16182B] sm:text-5xl">
                Especialistas de nicho, desde 2002.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#4C5A68]">
                A Rui Dinis — Reparações e Acessórios Industriais, Lda. dedica-se há mais de duas
                décadas a um segmento técnico exigente: a soldadura de alta frequência e por
                ultra-sons. Como representante exclusivo em Portugal de marcas de equipamento, aliamos
                comercialização e assistência técnica num só parceiro.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#16182B]/10 bg-[#16182B]/10 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-[#F4F6F9] px-4 py-5">
                    <div className="font-plexmono text-2xl font-semibold text-[#16182B]">{s.value}</div>
                    <div className="mt-1 font-plexmono text-[10px] uppercase tracking-[0.12em] text-[#4C5A68]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to={siteLink(slug, 'sobre')}
                className="mt-9 inline-flex items-center gap-2 rounded-md border border-[#16182B]/20 px-6 py-3 font-plex text-sm font-bold text-[#16182B] transition-colors hover:border-[#2E3192]/50 hover:text-[#2E3192] cursor-pointer"
              >
                Conhecer a empresa <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#2E3192] py-20">
        <GridField className="absolute inset-0" tone="#FFFFFF" opacity={0.08} />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#E0A126]/25 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-plex text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
              Precisa de assistência ou de um orçamento?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Fale connosco sobre o seu equipamento de alta frequência ou ultra-sons. Respondemos com
              o rigor que a indústria exige.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 font-plex text-base font-bold text-[#2E3192] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-8 py-4 font-plex text-base font-bold text-white transition-colors hover:bg-white/10 cursor-pointer"
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
