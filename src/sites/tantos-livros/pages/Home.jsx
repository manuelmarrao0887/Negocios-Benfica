import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Clock, Star, Coffee, BookOpen } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, services, categories, featured, publishers, values, stats } from '../data.jsx'

// A decorative row of book spines drawn in SVG, in the logo's warm gold tones.
function BookSpines({ className = '' }) {
  const spines = [
    { w: 16, h: 110, c: '#B98A1F' },
    { w: 12, h: 96, c: '#D8B24A' },
    { w: 18, h: 118, c: '#8A7320' },
    { w: 13, h: 88, c: '#E0A93C' },
    { w: 15, h: 104, c: '#A4471F' },
    { w: 11, h: 92, c: '#C9A227' },
    { w: 17, h: 112, c: '#3E6B57' },
    { w: 13, h: 84, c: '#D8B24A' },
    { w: 16, h: 100, c: '#8A7320' },
    { w: 12, h: 94, c: '#B98A1F' },
  ]
  let x = 0
  return (
    <svg className={className} viewBox="0 0 170 130" fill="none" aria-hidden="true" preserveAspectRatio="xMidYEnd meet">
      {spines.map((s, i) => {
        const el = <rect key={i} x={x} y={126 - s.h} width={s.w} height={s.h} rx="2" fill={s.c} />
        x += s.w + 1.5
        return el
      })}
      <rect x="0" y="126" width="170" height="4" rx="1.5" fill="#2A2018" opacity="0.85" />
    </svg>
  )
}

// Warm-tinted picsum gallery image (lazy, sized, with alt).
function GalleryImg({ seed, alt, className = '' }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={`https://picsum.photos/seed/${seed}/640/800`}
        alt={alt}
        width="640"
        height="800"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* warm literary overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A2018]/55 via-[#B5532E]/10 to-transparent mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-[#B98A1F]/10 mix-blend-overlay" />
    </div>
  )
}

export default function Home() {
  usePageMeta(
    'Tantos Livros, Livreiros | Livraria nas Avenidas Novas, Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F6F1E8] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* soft decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-28 h-[34rem] w-[34rem] rounded-full bg-[#D8B24A]/20 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#3E6B57]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2A2018]/15 bg-[#FBF7F0]/70 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#A4471F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B98A1F]" /> Livraria nas Avenidas Novas
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-fraunces text-5xl font-semibold leading-[1.03] tracking-tight text-[#2A2018] text-balance sm:text-6xl lg:text-7xl">
                Tantos livros,
                <br />
                <span className="text-[#A4471F]">tantas histórias.</span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#5C4F42]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#A4471F] px-7 py-3.5 font-sans text-base font-bold text-[#FBF7F0] shadow-lg shadow-[#A4471F]/20 transition-all duration-200 hover:bg-[#8E3D1A] hover:shadow-xl cursor-pointer"
                >
                  <MapPin className="h-5 w-5" aria-hidden="true" /> Visite-nos
                </Link>
                <Link
                  to={siteLink(slug, 'catalogo')}
                  className="inline-flex items-center gap-2 rounded-full border border-[#2A2018]/20 px-7 py-3.5 font-sans text-base font-bold text-[#2A2018] transition-colors duration-200 hover:bg-[#2A2018]/5 cursor-pointer"
                >
                  <BookOpen className="h-5 w-5" aria-hidden="true" /> Ver o catálogo
                </Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-[#B98A1F] text-[#B98A1F]" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#5C4F42]">
                  <span className="text-[#2A2018]">{brand.rating}★</span> · {brand.reviews} avaliações no Google
                </p>
              </div>
            </Reveal>
          </div>

          {/* floating literary card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#2A2018] p-8 text-[#F6F1E8] shadow-2xl shadow-[#2A2018]/30">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D8B24A]/20 blur-2xl" />
              <p className="font-fraunces text-2xl font-semibold leading-snug">
                “Um livro nunca poderá ser substituído.”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#B9A892]">
                Somos livreiros amigos e conselheiros. Entre, sente-se e descubra — com um café à mão.
              </p>
              <div className="mt-7">
                <BookSpines className="h-24 w-full" />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-sm">
                <span className="flex items-center gap-2 text-[#C9B8A6]">
                  <Clock className="h-4 w-4 text-[#D8B24A]" aria-hidden="true" /> {brand.hours}
                </span>
                <span className="flex items-center gap-2 text-[#C9B8A6]">
                  <Coffee className="h-4 w-4 text-[#D8B24A]" aria-hidden="true" /> Cafetaria
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#2A2018]/10 bg-[#FBF7F0]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-2 px-6 py-4 lg:grid-cols-4 lg:px-8">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-1 py-6 sm:px-4">
              <h.icon className="h-7 w-7 text-[#A4471F]" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-4 font-fraunces text-lg font-semibold text-[#2A2018]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6B5D4F]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Featured books ───────────────────────────────────────────── */}
      <section className="bg-[#F6F1E8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
                Em destaque
              </span>
              <h2 className="mt-3 max-w-2xl font-fraunces text-4xl font-semibold leading-tight text-[#2A2018] sm:text-5xl">
                Leituras que estamos a recomendar.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'catalogo')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#A4471F] transition-colors hover:text-[#8E3D1A] cursor-pointer"
              >
                Ver todo o catálogo <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {featured.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 70}>
                <div className="group">
                  <GalleryImg
                    seed={b.seed}
                    alt={`Capa do livro ${b.title} em destaque na Tantos Livros`}
                    className="aspect-[3/4] rounded-2xl shadow-md shadow-[#2A2018]/10 ring-1 ring-[#2A2018]/5"
                  />
                  <h3 className="mt-3 font-fraunces text-lg font-semibold leading-snug text-[#2A2018]">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[#8A7B6C]">Sugestão dos livreiros</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="bg-[#FBF7F0] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
              Mais do que uma livraria
            </span>
            <h2 className="mt-3 font-fraunces text-4xl font-semibold leading-tight text-[#2A2018] sm:text-5xl">
              Tudo o que uma casa de cultura deve ter.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 70}>
                <div className="group h-full rounded-2xl border border-[#2A2018]/10 bg-[#F6F1E8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#A4471F]/30 hover:bg-white hover:shadow-xl hover:shadow-[#2A2018]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#A4471F]/10 text-[#A4471F] transition-colors duration-300 group-hover:bg-[#A4471F] group-hover:text-[#FBF7F0]">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-fraunces text-xl font-semibold text-[#2A2018]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B5D4F]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview ────────────────────────────────────────────── */}
      <section className="bg-[#F6F1E8] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <GalleryImg
                seed="tantos-livros-shelf"
                alt="Estantes repletas de livros na livraria Tantos Livros, em Lisboa"
                className="aspect-[4/5] rounded-3xl shadow-2xl shadow-[#2A2018]/15"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#B98A1F] px-6 py-5 text-[#2A2018] shadow-xl sm:block">
                <span className="font-fraunces text-3xl font-bold">+100 mil</span>
                <p className="text-xs font-bold uppercase tracking-wide">exemplares</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
                A Livraria
              </span>
              <h2 className="mt-3 font-fraunces text-4xl font-semibold leading-tight text-[#2A2018] sm:text-5xl">
                Uma casa para todos, desde {brand.since}.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#5C4F42]">
                A Tantos Livros nasceu em 2020 como resposta à necessidade de um espaço impulsionador de
                cultura. Reunimos todas as editoras portuguesas e muitas estrangeiras, para todo o tipo
                de leitores — e juntámos-lhes uma galeria de arte, um antiquário, uma papelaria e uma
                cafetaria.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-fraunces text-2xl font-bold text-[#2A2018] sm:text-3xl">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#8A7B6C]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to={siteLink(slug, 'sobre')}
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#2A2018]/20 px-6 py-3 font-sans text-sm font-bold text-[#2A2018] transition-colors hover:bg-[#2A2018]/5 cursor-pointer"
              >
                Conhecer a livraria <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="bg-[#FBF7F0] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-fraunces text-4xl font-semibold leading-tight text-[#2A2018] sm:text-5xl">
              O que nos move
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6B5D4F]">
              Princípios simples de quem acredita que ler nos torna mais livres.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-[#F6F1E8] p-8 ring-1 ring-[#2A2018]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#3E6B57]/12 text-[#3E6B57]">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-fraunces text-xl font-semibold text-[#2A2018]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B5D4F]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Publishers marquee ───────────────────────────────────────── */}
      <section className="overflow-hidden border-y border-[#2A2018]/10 bg-[#F6F1E8] py-12">
        <Reveal className="mx-auto mb-8 max-w-7xl px-6 lg:px-8">
          <p className="text-center font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#8A7B6C]">
            Todas as editoras portuguesas e muitas estrangeiras
          </p>
        </Reveal>
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
            {[...publishers, ...publishers].map((p, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-[#2A2018]/12 bg-[#FBF7F0] px-5 py-2 font-fraunces text-lg font-medium text-[#3C3328]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#2A2018] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#D8B24A]/15 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#3E6B57]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-fraunces text-4xl font-semibold leading-tight text-[#F6F1E8] text-balance sm:text-5xl">
              Venha perder-se entre tantos livros.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#B9A892]">
              Estamos de segunda a sábado, na Av. Marquês de Tomar. Traga tempo — e, se quiser, fica para um café.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#D8B24A] px-8 py-4 font-sans text-base font-bold text-[#2A2018] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-5 w-5" aria-hidden="true" /> {brand.phoneDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full border border-[#F6F1E8]/25 px-8 py-4 font-sans text-base font-bold text-[#F6F1E8] transition-colors hover:bg-white/5 cursor-pointer"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" /> Onde estamos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
