import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Check, Star, Quote, ArrowUpRight } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, badges, highlights, services, audiences, testimonials, stats } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Nipolândia — Ar Condicionado e Ventilação em Lisboa | Desde 1977',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero (deep-blue) ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A2E5C] pt-36 pb-24 sm:pt-44 sm:pb-32">
        {/* structured / blueprint decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-[40rem] w-[40rem] rounded-full bg-[#2C7BE5]/25 blur-[120px]" />
          <div className="absolute -left-40 bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#5BC8E8]/15 blur-[120px]" />
          {/* grid lines */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(#EAF1FB 1px, transparent 1px), linear-gradient(90deg, #EAF1FB 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF9A3C]/40 bg-white/5 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#FF9A3C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A3C]" /> Climatização &amp; Ventilação · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-archivo text-5xl font-extrabold leading-[1.02] tracking-tight text-[#EAF1FB] text-balance sm:text-6xl lg:text-7xl">
                O seu parceiro de confiança{' '}
                <span className="text-[#FF9A3C]">
                  desde 1977
                </span>
                .
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#c4d6ef]">
                {brand.tagline}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2C7BE5] px-7 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-[#2C7BE5]/30 transition-all duration-200 hover:bg-[#1f63c4] hover:shadow-xl cursor-pointer"
                >
                  Pedir orçamento <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 font-sans text-base font-bold text-[#EAF1FB] backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          {/* heritage / authority card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF7F00]/20 blur-2xl" />
              <div className="relative flex items-baseline gap-3">
                <span className="font-archivo text-6xl font-extrabold leading-none text-white">45</span>
                <span className="pb-1 font-archivo text-2xl font-bold text-[#FF9A3C]">+ anos</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#9fbce6]">
                Mais de quatro décadas a projetar e instalar sistemas de climatização e ventilação para
                particulares e indústria.
              </p>
              <ul className="mt-6 space-y-3">
                {['Soluções chave-na-mão', 'Técnicos certificados', 'Assistência em todo o país'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold text-[#EAF1FB]">
                    <span className="grid h-6 w-6 place-items-center rounded-md bg-[#FF7F00] text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FF9A3C] text-[#FF9A3C]" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#c4d6ef]">5,0 / 5 · Google</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* badges strip */}
        <div className="relative mx-auto mt-16 max-w-7xl px-6">
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 border-t border-white/10 pt-8 sm:gap-x-4">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#7693bd]">
                Reconhecimentos
              </span>
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-sm font-semibold text-[#c4d6ef]"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Authority strip ──────────────────────────────────────────── */}
      <section className="border-b border-[#0A2E5C]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-9 sm:px-6">
              <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-[#2C7BE5]/10 text-[#2C7BE5]">
                <h.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-archivo text-xl font-bold text-[#0A2E5C]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5B7493]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-[#F2F6FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#2C7BE5]">
                O que fazemos
              </span>
              <h2 className="mt-3 max-w-2xl font-archivo text-4xl font-extrabold leading-tight tracking-tight text-[#0A2E5C] sm:text-5xl">
                Climatização e ventilação, do projeto à manutenção.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#0A2E5C] transition-colors hover:text-[#2C7BE5] cursor-pointer"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-xl border border-[#0A2E5C]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2C7BE5]/40 hover:shadow-xl hover:shadow-[#0A2E5C]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#0A2E5C]/5 text-[#0A2E5C] transition-colors duration-300 group-hover:bg-[#2C7BE5] group-hover:text-white">
                    <s.icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-archivo text-xl font-bold text-[#0A2E5C]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5B7493]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two audiences ────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#2C7BE5]">
              Para quem trabalhamos
            </span>
            <h2 className="mt-3 font-archivo text-4xl font-extrabold leading-tight tracking-tight text-[#0A2E5C] sm:text-5xl">
              Dois públicos, o mesmo rigor.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.kicker} delay={i * 120}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#0A2E5C]/10 bg-white">
                  <div className="flex items-center gap-4 border-b border-[#0A2E5C]/10 bg-[#F2F6FC] p-7">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#FF7F00] text-white shadow-sm shadow-[#FF7F00]/25">
                      <a.icon className="h-7 w-7" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#C25E00]">
                        {a.kicker}
                      </p>
                      <h3 className="mt-1 font-archivo text-2xl font-bold text-[#0A2E5C]">{a.title}</h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-[15px] leading-relaxed text-[#5B7493]">{a.text}</p>
                    <ul className="mt-6 space-y-3">
                      {a.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-sm font-semibold text-[#0A2E5C]">
                          <span className="grid h-6 w-6 place-items-center rounded-md bg-[#2C7BE5]/10 text-[#2C7BE5]">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          {p}
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

      {/* ── Heritage / stats band (light, orange accent) ─────────────── */}
      <section className="relative overflow-hidden bg-[#F2F6FC] py-20">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-9 w-9 text-[#FF7F00]" />
            <p className="mt-5 font-archivo text-2xl font-bold leading-snug text-[#0A2E5C] sm:text-3xl">
              “{brand.motto}”
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-[#0A2E5C]/10 pt-12 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="font-archivo text-4xl font-extrabold text-[#0A2E5C] sm:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#5B7493]">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="bg-[#F2F6FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#2C7BE5] text-[#2C7BE5]" />
                ))}
              </div>
              <span className="font-sans text-sm font-bold text-[#5B7493]">5,0 / 5 · 3 avaliações Google</span>
            </div>
            <h2 className="mt-4 font-archivo text-4xl font-extrabold leading-tight tracking-tight text-[#0A2E5C] sm:text-5xl">
              O que dizem os nossos clientes.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-2xl border border-[#0A2E5C]/10 bg-white p-8">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-[#FF7F00] text-[#FF7F00]" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#33486b]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-[#0A2E5C]/10 pt-4 font-archivo font-bold text-[#0A2E5C]">
                    {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band (light, orange-forward) ─────────────────────────── */}
      <section className="bg-[#F2F6FC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#0A2E5C]/10 bg-white px-8 py-14 shadow-sm sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#FF7F00]/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#2C7BE5]/10 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="font-archivo text-3xl font-extrabold leading-tight text-[#0A2E5C] text-balance sm:text-4xl">
                    Vamos climatizar o seu espaço?
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#5B7493]">
                    Fale connosco para um estudo e orçamento sem compromisso. Resposta rápida, do projeto à
                    instalação chave-na-mão.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={brand.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF7F00] px-7 py-4 font-sans text-base font-bold text-white shadow-lg shadow-[#FF7F00]/25 transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <Phone className="h-5 w-5" /> {brand.phoneDisplay}
                  </a>
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0A2E5C]/20 px-7 py-4 font-sans text-base font-bold text-[#0A2E5C] transition-colors hover:bg-[#F2F6FC] cursor-pointer"
                  >
                    <MapPin className="h-5 w-5" /> Onde estamos <ArrowUpRight className="h-4 w-4" />
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
