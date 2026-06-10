import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Instagram, Phone, Clock, Globe, Sparkles } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, verticals, stats, gallery } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'DoubleSpace — Nails · Cosmetology · Barber | Salão de beleza em Benfica',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero (dark, editorial) ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1B1714] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* warm glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#C06A52]/25 blur-3xl" />
          <div className="absolute -left-40 bottom-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[#A98DA0]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,241,236,0.06),transparent_55%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#F6F1EC] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C06A52]" /> Benfica · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-bricolage text-5xl font-bold leading-[1.02] tracking-tight text-[#F6F1EC] text-balance sm:text-6xl lg:text-7xl">
                O teu espaço de{' '}
                <span className="bg-gradient-to-r from-[#C06A52] via-[#cf8068] to-[#A98DA0] bg-clip-text text-transparent">
                  beleza
                </span>{' '}
                em Benfica.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#F6F1EC]/75">
                Nails · Cosmetology · Barber. Três mundos num só salão — unhas, estética e barbearia
                — com uma equipa que fala a tua língua.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#C06A52] px-7 py-3.5 font-sans text-base font-bold text-[#F6F1EC] shadow-lg shadow-[#C06A52]/25 transition-all duration-200 hover:bg-[#a85842] hover:shadow-xl cursor-pointer"
                >
                  Marcar agora <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-sans text-base font-bold text-[#F6F1EC] transition-colors duration-200 hover:bg-white/10 cursor-pointer"
                >
                  <Instagram className="h-5 w-5" /> {brand.instagramHandle}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#F6F1EC]/70">
                <span className="inline-flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-[#C06A52]" /> {brand.followers} seguidores
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#C06A52]" /> Aberto todos os dias
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#C06A52]" /> PT · EN
                </span>
              </div>
            </Reveal>
          </div>

          {/* Hero collage — three vertical tags over a feed-style tile */}
          <Reveal delay={260} className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="grid grid-cols-2 gap-3">
                {gallery.slice(0, 4).map((g, i) => (
                  <div
                    key={g.n}
                    className={
                      'relative overflow-hidden rounded-2xl ' +
                      (i === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square')
                    }
                  >
                    <img
                      src={g.src}
                      alt={g.alt}
                      width="600"
                      height="600"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1714]/45 via-transparent to-[#C06A52]/10" />
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1B1714]/90 px-5 py-3 shadow-2xl backdrop-blur">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#C06A52] text-[#F6F1EC]">
                  <Instagram className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="font-bricolage text-lg font-bold text-[#F6F1EC]">{brand.followers}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#F6F1EC]/55">
                    seguidores
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-b border-[#1B1714]/10 bg-[#FFFFFF]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <h.icon className="h-7 w-7 text-[#C06A52]" strokeWidth={1.6} />
              <h3 className="mt-4 font-bricolage text-lg font-bold text-[#1B1714]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6B625B]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── The three spaces ─────────────────────────────────────────── */}
      <section className="bg-[#F6F1EC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#C06A52]">
                Três espaços, um só lugar
              </span>
              <h2 className="mt-3 max-w-2xl font-bricolage text-4xl font-bold leading-tight text-[#1B1714] sm:text-5xl">
                Nails. Cosmetology. Barber.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#1B1714] transition-colors hover:text-[#C06A52] cursor-pointer"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {verticals.map((v, i) => (
              <Reveal key={v.key} delay={i * 90}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#1B1714]/10 bg-[#FFFFFF] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1B1714]/5">
                  <div
                    className="relative flex h-36 items-end p-6"
                    style={{ backgroundColor: v.accent }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_60%)]" />
                    <v.icon className="absolute right-5 top-5 h-10 w-10 text-white/40" strokeWidth={1.4} />
                    <div className="relative">
                      <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                        {v.label}
                      </p>
                      <p className="font-bricolage text-2xl font-bold text-white">{v.tag}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-bricolage text-xl font-bold leading-snug text-[#1B1714]">
                      {v.headline}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#6B625B]">{v.desc}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {v.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-full border border-[#1B1714]/10 bg-[#F6F1EC] px-3 py-1 text-xs font-semibold text-[#6B625B]"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram feed gallery ───────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#C06A52]">
                A nossa montra
              </span>
              <h2 className="mt-3 max-w-2xl font-bricolage text-4xl font-bold leading-tight text-[#1B1714] sm:text-5xl">
                Vê o nosso trabalho no Instagram.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#6B625B]">
                {brand.followers} seguidores acompanham o dia a dia do salão. Espreita o feed e marca
                pela DM.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1B1714] px-6 py-3 font-sans text-sm font-bold text-[#F6F1EC] transition-colors hover:bg-[#332b25] cursor-pointer"
              >
                <Instagram className="h-4 w-4" /> {brand.instagramHandle}
              </a>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g.n} delay={(i % 4) * 60}>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-2xl cursor-pointer"
                  aria-label={`Abrir o Instagram da DoubleSpace (publicação ${g.n})`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    width="600"
                    height="600"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1714]/40 via-transparent to-transparent transition-opacity duration-300 group-hover:from-[#C06A52]/55" />
                  <span className="absolute inset-0 grid place-items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Instagram className="h-7 w-7" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1B1714] py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#C06A52]/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#A98DA0]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="text-center">
              <div className="font-bricolage text-4xl font-bold text-[#F6F1EC] sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#F6F1EC]/55">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F6F1EC] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C06A52] to-[#A98DA0] px-8 py-14 text-center sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#1B1714]/15 blur-3xl" />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
                <Sparkles className="h-9 w-9 text-white" strokeWidth={1.5} />
                <h2 className="font-bricolage text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
                  Pronto para o teu próximo look?
                </h2>
                <p className="text-lg text-white/85">
                  Marca por telefone, WhatsApp ou DM do Instagram. Estamos abertos todos os dias, das
                  9h às 21h.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1B1714] px-8 py-4 font-sans text-base font-bold text-[#F6F1EC] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <Phone className="h-5 w-5" /> Marcar por WhatsApp
                  </a>
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/10 cursor-pointer"
                  >
                    Ver contactos <ArrowUpRight className="h-5 w-5" />
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
