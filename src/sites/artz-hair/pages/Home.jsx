import { Link } from 'react-router-dom'
import { ArrowRight, Star, CalendarHeart, Phone, MapPin, Clock, Sparkles } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, services, experience, stats, gallery } from '../data.jsx'

// Small reusable gold rating pill — the social-proof signature, used in the hero.
function RatingPill({ className = '' }) {
  return (
    <span
      className={
        'inline-flex items-center gap-2.5 rounded-full border border-[#A8854E]/30 bg-white/70 px-4 py-2 shadow-[0_8px_24px_-18px_rgba(26,22,20,0.5)] backdrop-blur ' +
        className
      }
    >
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-4 w-4 fill-[#A8854E] text-[#A8854E]" />
        ))}
      </span>
      <span className="font-jost text-sm font-semibold text-[#1A1614]">
        {brand.rating}
        <span className="text-[#A8854E]"> ★</span>
      </span>
      <span className="font-jost text-sm text-[#6E5A52]">· {brand.reviews} avaliações Google</span>
    </span>
  )
}

export default function Home() {
  usePageMeta(
    'Art.Z Hair & Experience — Cabeleireiro & Spa em Lisboa | Saldanha',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F7F3EF] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* soft luxe decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-32 h-[40rem] w-[40rem] rounded-full bg-[#A8854E]/[0.10] blur-3xl" />
          <div className="absolute -left-44 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#6E5A52]/[0.08] blur-3xl" />
          <svg
            className="absolute right-8 top-28 hidden h-72 w-72 text-[#A8854E]/[0.10] lg:block"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            aria-hidden="true"
          >
            {[70, 56, 42, 28].map((r) => (
              <circle key={r} cx="100" cy="100" r={r} />
            ))}
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
                <span className="h-px w-8 bg-[#A8854E]" /> {brand.signature}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-cormorant text-6xl font-semibold leading-[0.98] tracking-tight text-[#1A1614] text-balance sm:text-7xl lg:text-[5.5rem]">
                Beleza com
                <span className="block italic text-[#A8854E]">assinatura.</span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-[#4A413B]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-7">
                <RatingPill />
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A1614] px-8 py-4 font-jost text-base font-semibold tracking-wide text-[#F7F3EF] shadow-lg shadow-[#1A1614]/20 transition-all duration-200 hover:bg-[#A8854E] hover:shadow-xl cursor-pointer"
                >
                  <CalendarHeart className="h-5 w-5" /> Marcar experiência
                </Link>
                <Link
                  to={siteLink(slug, 'servicos')}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1A1614]/20 px-8 py-4 font-jost text-base font-semibold tracking-wide text-[#1A1614] transition-colors duration-200 hover:bg-[#1A1614]/5 cursor-pointer"
                >
                  Ver serviços <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* editorial image card */}
          <Reveal delay={320} className="relative">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#1A1614]/25 ring-1 ring-[#1A1614]/10">
                <img
                  src={gallery[0].src}
                  alt={gallery[0].alt}
                  width="640"
                  height="800"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1614]/55 via-[#1A1614]/5 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <p className="font-cormorant text-2xl font-medium leading-tight text-[#F7F3EF]">
                    Viva a experiência Art.Z
                  </p>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#A8854E] text-[#1A1614]">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </div>
              </div>
              {/* floating mini info card */}
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-[#1A1614]/10 bg-[#F7F3EF] px-6 py-5 shadow-xl sm:block">
                <p className="font-cormorant text-3xl font-semibold text-[#1A1614]">{brand.followers}</p>
                <p className="mt-0.5 font-jost text-xs font-medium uppercase tracking-[0.18em] text-[#6E5A52]">
                  na comunidade Art.Z
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#1A1614]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-9 sm:px-6">
              <h.icon className="h-7 w-7 text-[#A8854E]" strokeWidth={1.5} />
              <h3 className="mt-4 font-cormorant text-xl font-semibold text-[#1A1614]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6E5A52]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-[#F7F3EF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
                O que fazemos
              </span>
              <h2 className="mt-3 max-w-2xl font-cormorant text-5xl font-semibold leading-[1.02] text-[#1A1614] sm:text-6xl">
                Beleza de A a Z, sob o mesmo teto.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-jost text-sm font-semibold uppercase tracking-wider text-[#1A1614] transition-colors hover:text-[#A8854E] cursor-pointer"
              >
                Todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.key} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-[#1A1614]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#A8854E]/40 hover:shadow-xl hover:shadow-[#1A1614]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#F7F3EF] text-[#A8854E] ring-1 ring-[#A8854E]/20 transition-colors duration-300 group-hover:bg-[#1A1614] group-hover:text-[#D8B57E]">
                    <s.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-cormorant text-2xl font-semibold text-[#1A1614]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5A52]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The experience (editorial split) ─────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-[#1A1614]/10">
              <img
                src={gallery[1].src}
                alt={gallery[1].alt}
                width="640"
                height="800"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#A8854E]/25 via-transparent to-transparent" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
                A experiência Art.Z
              </span>
              <h2 className="mt-3 font-cormorant text-5xl font-semibold leading-[1.02] text-[#1A1614] sm:text-6xl">
                Não é um salão. É como a sua casa.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#4A413B]">
                Desde 2020 que repensámos o que pode ser uma ida ao cabeleireiro. Na Art.Z, cada visita
                é uma pausa: tempo, conforto e atenção ao detalhe, num espaço pensado para se sentir bem.
              </p>
            </Reveal>
            <div className="mt-9 space-y-5">
              {experience.map((e, i) => (
                <Reveal key={e.title} delay={160 + i * 80}>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#F7F3EF] text-[#A8854E] ring-1 ring-[#A8854E]/20">
                      <e.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-cormorant text-xl font-semibold text-[#1A1614]">{e.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#6E5A52]">{e.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="bg-[#F7F3EF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
              Galeria
            </span>
            <h2 className="mt-3 font-cormorant text-5xl font-semibold leading-[1.02] text-[#1A1614] sm:text-6xl">
              Momentos em estúdio
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6E5A52]">
              Um vislumbre do ambiente e dos trabalhos que partilhamos em {brand.instagramHandle}.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.n} delay={(i % 3) * 80}>
                <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-[#1A1614]/10">
                  <img
                    src={g.src}
                    alt={g.alt}
                    width="640"
                    height="800"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1614]/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                  <figcaption className="absolute bottom-3 left-3 right-3 flex items-center gap-2 font-jost text-[11px] font-medium uppercase tracking-[0.16em] text-[#F7F3EF] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Sparkles className="h-3.5 w-3.5 text-[#D8B57E]" /> Art.Z Studio
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-12 text-center">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-jost text-sm font-semibold uppercase tracking-wider text-[#1A1614] transition-colors hover:text-[#A8854E] cursor-pointer"
            >
              Ver mais em {brand.instagramHandle} <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band (the dark moment) ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1A1614] py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#A8854E]/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#6E5A52]/25 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <RatingPill className="!bg-white/10 !ring-0" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-cormorant text-5xl font-semibold leading-[1.02] text-[#F7F3EF] text-balance sm:text-6xl">
              Pronto para viver a experiência?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#CDBFB3]">
              Marque a sua visita por telefone, WhatsApp ou deixe-nos uma mensagem. Reserve com
              antecedência para garantir o seu horário.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#A8854E] px-8 py-4 font-jost text-base font-semibold tracking-wide text-[#1A1614] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <CalendarHeart className="h-5 w-5" /> Marcar via WhatsApp
              </a>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#F7F3EF]/25 px-8 py-4 font-jost text-base font-semibold tracking-wide text-[#F7F3EF] transition-colors hover:bg-white/5 cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#A89A8E]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#D8B57E]" /> {brand.address}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#D8B57E]" /> {brand.hours}
              </span>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
