import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Star, Check, MessageCircle, Quote } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, areas, approach, stats } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Advogada Suelen Cunha | Nacionalidade Portuguesa e Direito Migratório · Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F8F5F0] pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* soft decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#7A2E3B]/[0.06] blur-3xl" />
          <div className="absolute -left-44 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#B0913F]/[0.08] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7A2E3B]/15 bg-white/70 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#7A2E3B]">
                <Star className="h-3.5 w-3.5 fill-[#B0913F] text-[#B0913F]" /> {brand.rating} · {brand.reviews} avaliações no Google
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-playfair text-5xl font-semibold leading-[1.04] tracking-tight text-[#1E1B2E] text-balance sm:text-6xl lg:text-[4.25rem]">
                A sua ponte segura para Portugal.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#4A4453]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#7A2E3B] px-7 py-3.5 font-sans text-base font-bold text-[#F8F5F0] shadow-lg shadow-[#7A2E3B]/20 transition-all duration-200 hover:bg-[#67262F] hover:shadow-xl cursor-pointer"
                >
                  Marcar consulta <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1E1B2E]/15 bg-white/60 px-7 py-3.5 font-sans text-base font-bold text-[#1E1B2E] transition-colors duration-200 hover:bg-white cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 text-[#7A2E3B]" /> WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#564F5C]">
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#B0913F]" strokeWidth={3} /> Advogada em Portugal e no Brasil
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#B0913F]" strokeWidth={3} /> +18 anos de experiência
                </span>
              </div>
            </Reveal>
          </div>

          {/* portrait + floating card */}
          <Reveal delay={260} className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2A2438] to-[#1E1B2E] shadow-2xl shadow-[#1E1B2E]/25 ring-1 ring-white/10">
                <img
                  src="https://picsum.photos/seed/suelen-cunha-1/720/900"
                  alt="Escritório de advocacia em Lisboa"
                  className="h-full w-full object-cover opacity-90"
                  loading="eager"
                />
              </div>
              {/* logo seal */}
              <div className="absolute -left-5 -top-5 hidden grid h-20 w-20 place-items-center rounded-full bg-white shadow-xl ring-1 ring-[#7A2E3B]/10 sm:grid">
                <img
                  src="/logos/suelen-cunha.webp"
                  alt="Suelen Cunha logótipo"
                  className="h-16 w-16 object-contain"
                />
              </div>
              {/* floating credential card */}
              <div className="absolute -bottom-6 -right-4 max-w-[15rem] rounded-2xl bg-[#7A2E3B] p-5 text-[#F8F5F0] shadow-xl sm:-right-6">
                <p className="font-playfair text-lg font-semibold leading-snug">Suelen Cunha</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#E7C77E]">
                  Advogada · Advocacia Internacional
                </p>
                <p className="mt-3 border-t border-white/15 pt-3 text-xs leading-relaxed text-[#EAD9DD]">
                  Nacionalidade Portuguesa · Vistos · Direito Migratório
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#1E1B2E]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#7A2E3B]/8 text-[#7A2E3B]">
                <h.icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 font-playfair text-lg font-semibold text-[#1E1B2E]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5E5766]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Áreas preview ────────────────────────────────────────────── */}
      <section className="bg-[#F8F5F0] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#B0913F]">
                Áreas de prática
              </span>
              <h2 className="mt-3 max-w-2xl font-playfair text-4xl font-semibold leading-tight text-[#1E1B2E] sm:text-5xl">
                Soluções especializadas em Portugal.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'areas')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#7A2E3B] transition-colors hover:text-[#B0913F] cursor-pointer"
              >
                Ver todas as áreas <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.slice(0, 6).map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 80}>
                <Link
                  to={siteLink(slug, 'areas')}
                  className="group flex h-full flex-col rounded-2xl border border-[#1E1B2E]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B0913F]/40 hover:shadow-xl hover:shadow-[#1E1B2E]/5 cursor-pointer"
                >
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#7A2E3B]/8 text-[#7A2E3B] transition-colors duration-300 group-hover:bg-[#7A2E3B] group-hover:text-[#E7C77E]">
                    <a.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-playfair text-xl font-semibold text-[#1E1B2E]">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5E5766]">{a.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rating / social proof band ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1E1B2E] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#7A2E3B]/25 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#B0913F]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-7 w-7 fill-[#E7C77E] text-[#E7C77E]" />
                ))}
              </div>
              <p className="mt-5 font-playfair text-5xl font-semibold text-[#F8F5F0]">
                {brand.rating} <span className="text-2xl font-normal text-[#B0913F]">/ 5,0</span>
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#A99FB2]">
                Com base em {brand.reviews} avaliações no Google
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#CFC6D6]">
                A confiança de mais de 5.000 clientes acompanhados entre Portugal e o estrangeiro,
                com ética, transparência e foco em resultados.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <Quote className="h-8 w-8 text-[#B0913F]" />
                <p className="mt-4 text-base leading-relaxed text-[#E9E2EC]">
                  Cada caso é único. O seu processo é tratado com atenção individualizada e
                  humanizada, do primeiro contacto à conclusão.
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-[#B0913F]">
                  O compromisso do escritório
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="font-playfair text-3xl font-bold text-[#E7C77E]">{s.value}</div>
                    <div className="mt-1.5 text-xs font-semibold uppercase leading-snug tracking-wide text-[#A99FB2]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Approach / porquê ────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#B0913F]">
              Como trabalho consigo
            </span>
            <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-[#1E1B2E] sm:text-5xl">
              Um caminho claro, do início ao fim.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5E5766]">
              Transformamos processos burocráticos em jornadas seguras e transparentes — sem surpresas.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal key={a.step} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-[#1E1B2E]/10 bg-[#F8F5F0] p-7">
                  <span className="absolute right-6 top-5 font-playfair text-4xl font-bold text-[#7A2E3B]/10">
                    {a.step}
                  </span>
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#7A2E3B] text-[#E7C77E]">
                    <a.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-playfair text-lg font-semibold text-[#1E1B2E]">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5E5766]">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="bg-[#F8F5F0] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#7A2E3B] px-8 py-14 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#B0913F]/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
              <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
                <h2 className="font-playfair text-4xl font-semibold leading-tight text-[#F8F5F0] text-balance sm:text-5xl">
                  Não deixe o seu sonho para depois.
                </h2>
                <p className="max-w-xl text-lg text-[#EAD9DD]">
                  Fale com a advogada especialista e tenha segurança em cada etapa do seu processo em
                  Portugal.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="inline-flex items-center gap-2 rounded-full bg-[#E7C77E] px-8 py-4 font-sans text-base font-bold text-[#1E1B2E] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    Agendar reunião <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href={brand.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-sans text-base font-bold text-[#F8F5F0] transition-colors hover:bg-white/10 cursor-pointer"
                  >
                    <Phone className="h-5 w-5" /> {brand.phoneDisplay}
                  </a>
                </div>
                <p className="flex items-center gap-2 text-sm text-[#EAD9DD]/80">
                  <MapPin className="h-4 w-4 text-[#E7C77E]" /> {brand.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
