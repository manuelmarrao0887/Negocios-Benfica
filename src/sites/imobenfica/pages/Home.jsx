import { Link } from 'react-router-dom'
import {
  Phone,
  ArrowRight,
  Check,
  Quote,
  MapPin,
  Star,
  BedDouble,
  Bath,
  Ruler,
} from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import {
  slug,
  brand,
  highlights,
  services,
  differentiator,
  listings,
  testimonials,
  primaryAreas,
  stats,
} from '../data.jsx'

export default function Home() {
  usePageMeta(
    'ImoBenfica by Marta Pereira | Imobiliária em Benfica, Lisboa',
    brand.intro,
  )

  const featured = listings.slice(0, 3)

  return (
    <>
      {/* ── Hero (the single dark plum band) ─────────────────────────── */}
      <section className="relative overflow-hidden bg-[#2A0E1C] pt-16 pb-20 text-[#F6F3EC] sm:pt-20 sm:pb-28">
        {/* decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#5A1235]/55 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#7A1B47]/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#F6F3EC 1px, transparent 1px), linear-gradient(90deg, #F6F3EC 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7A1B47]/40 bg-white/5 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#7A1B47]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7A1B47]" /> Benfica · São Domingos de Benfica · {brand.ami}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-playfair text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Especialistas no imobiliário de{' '}
                <span className="text-[#7A1B47]">Benfica</span>.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#D8C2CC]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-md bg-[#7A1B47] px-7 py-3.5 font-sans text-base font-bold text-[#F6F3EC] shadow-lg shadow-black/20 transition-all duration-200 hover:bg-[#66163C] hover:shadow-xl cursor-pointer"
                >
                  Pedir avaliação gratuita <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={siteLink(slug, 'imoveis')}
                  className="inline-flex items-center gap-2 rounded-md border border-[#F6F3EC]/25 px-7 py-3.5 font-sans text-base font-bold text-[#F6F3EC] transition-colors duration-200 hover:bg-white/5 cursor-pointer"
                >
                  Ver imóveis
                </Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-6">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <div className="font-playfair text-2xl font-bold text-[#F6F3EC]">{s.value}</div>
                    <div className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-[#B08F9D]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Personal-brand card: Marta Pereira */}
          <Reveal delay={320} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-[#7A1B47]/30 bg-gradient-to-br from-[#3A1228] to-[#241019] p-8 shadow-2xl shadow-black/40">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#7A1B47]/10 blur-2xl" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#7A1B47] bg-[#241019] font-playfair text-2xl font-semibold text-[#7A1B47]">
                  MP
                </span>
                <div>
                  <p className="font-playfair text-2xl font-semibold text-[#F6F3EC]">Marta Pereira</p>
                  <p className="text-sm text-[#7A1B47]">Gerente · Consultora Imobiliária</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#D8C2CC]">
                “{brand.mission}” Com mais de 20 anos de experiência, conheço Benfica como ninguém —
                e trato cada cliente de forma próxima e dedicada.
              </p>
              <ul className="mt-6 space-y-3">
                {['Avaliação gratuita do seu imóvel', 'Partilha com todas as imobiliárias', 'Acompanhamento jurídico e de crédito'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold text-[#EDE0E6]">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#7A1B47] text-[#F6F3EC]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={brand.phoneHref}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#F6F3EC]/20 px-5 py-3 font-sans text-sm font-bold text-[#F6F3EC] transition-colors hover:bg-white/5 cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#7A1B47]" /> {brand.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-b border-[#241019]/10 bg-[#FFFFFF]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <h.icon className="h-7 w-7 text-[#7A1B47]" strokeWidth={1.6} />
              <h3 className="mt-4 font-playfair text-lg font-semibold text-[#241019]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5A4750]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="bg-[#F6F3EC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#7A1B47]">
                Como o ajudamos
              </span>
              <h2 className="mt-3 max-w-2xl font-playfair text-4xl font-semibold leading-tight text-[#241019] sm:text-5xl">
                Um serviço completo, do primeiro contacto à escritura.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'sobre')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#241019] transition-colors hover:text-[#7A1B47] cursor-pointer"
              >
                Sobre a agência <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div
                  className={
                    'group h-full rounded-xl border bg-[#FFFFFF] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#241019]/5 ' +
                    (s.featured
                      ? 'border-[#7A1B47]/50 ring-1 ring-[#7A1B47]/30'
                      : 'border-[#241019]/10 hover:border-[#7A1B47]/40')
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#241019]/5 text-[#241019] transition-colors duration-300 group-hover:bg-[#241019] group-hover:text-[#7A1B47]">
                      <s.icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    {s.featured && (
                      <span className="rounded-full bg-[#7A1B47]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7A1B47]">
                        Serviço próprio
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-playfair text-xl font-semibold text-[#241019]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A4750]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiator: partilha com todas (light premium band) ──── */}
      <section className="relative overflow-hidden border-y border-[#7A1B47]/15 bg-[#F4EAEE] py-24 text-[#241019]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full bg-[#7A1B47]/10 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#7A1B47]/[0.06] blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#7A1B47]">
              {differentiator.eyebrow}
            </span>
            <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-balance text-[#241019] sm:text-5xl">
              {differentiator.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#46343D]">
              {differentiator.text}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ul className="space-y-4">
              {differentiator.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-4 rounded-xl border border-[#7A1B47]/15 bg-[#FFFFFF] p-5 shadow-sm"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#7A1B47] text-[#F6F3EC]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium leading-relaxed text-[#46343D]">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Featured listings ────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#7A1B47]">
                Imóveis em destaque
              </span>
              <h2 className="mt-3 max-w-2xl font-playfair text-4xl font-semibold leading-tight text-[#241019] sm:text-5xl">
                Uma seleção do que procuramos para si.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'imoveis')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#241019] transition-colors hover:text-[#7A1B47] cursor-pointer"
              >
                Ver todos os imóveis <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((l, i) => (
              <Reveal key={l.id} delay={(i % 3) * 80}>
                <FeaturedCard listing={l} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-8 text-center text-xs text-[#6E5A63]">
              Imóveis ilustrativos. Consulte-nos para a carteira atualizada.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="bg-[#F6F3EC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#7A1B47]">
              Quem confia em nós
            </span>
            <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-[#241019] sm:text-5xl">
              Histórias de quem já comprou e vendeu connosco.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 80}>
                <figure className="flex h-full flex-col rounded-xl border border-[#241019]/10 bg-[#FFFFFF] p-7 shadow-sm">
                  <Quote className="h-8 w-8 text-[#7A1B47]/40" />
                  <div className="mt-3 flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-[#7A1B47] text-[#7A1B47]" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#46343D]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-[#241019]/10 pt-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#241019] font-playfair text-sm font-semibold text-[#7A1B47]">
                      {t.initials}
                    </span>
                    <span className="font-sans text-sm font-bold text-[#241019]">{t.name}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band (light) ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-[#7A1B47]/15 bg-[#FFFFFF] py-20 text-[#241019]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#7A1B47]/[0.06] blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#7A1B47]/[0.06] blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#7A1B47]">
              {primaryAreas.join(' · ')}
            </span>
            <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-balance text-[#241019] sm:text-5xl">
              Quanto vale o seu imóvel hoje?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#46343D]">
              Peça uma avaliação gratuita e sem compromisso. A Marta e a equipa respondem-lhe rapidamente.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-md bg-[#7A1B47] px-8 py-4 font-sans text-base font-bold text-[#F6F3EC] shadow-sm transition-all duration-200 hover:bg-[#66163C] hover:scale-[1.02] cursor-pointer"
              >
                Pedir avaliação <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#7A1B47]/40 px-8 py-4 font-sans text-base font-bold text-[#7A1B47] transition-colors hover:bg-[#7A1B47]/[0.06] cursor-pointer"
              >
                <MapPin className="h-5 w-5 text-[#7A1B47]" /> Falar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function FeaturedCard({ listing: l }) {
  const specs = [
    l.beds > 0 && { icon: BedDouble, label: `${l.beds} quartos` },
    { icon: Bath, label: `${l.baths} WC` },
    { icon: Ruler, label: l.area },
  ].filter(Boolean)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#241019]/10 bg-[#FFFFFF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#241019]/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={`https://picsum.photos/seed/imobenfica-${l.id}/800/600`}
          alt={`${l.title} — ${l.zone} (imagem ilustrativa)`}
          width="800"
          height="600"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241019]/70 via-[#241019]/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-md bg-[#7A1B47] px-3 py-1 text-xs font-bold text-[#F6F3EC]">
          {l.operation}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-[#241019]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F6F3EC] backdrop-blur-sm">
          Ilustrativo
        </span>
        <p className="absolute bottom-3 left-3 font-playfair text-2xl font-semibold text-[#F6F3EC]">
          {l.price}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#7A1B47]">
          <MapPin className="h-3.5 w-3.5" /> {l.zone}
        </p>
        <h3 className="mt-2 font-playfair text-xl font-semibold text-[#241019]">{l.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A4750]">{l.desc}</p>
        <div className="mt-5 flex flex-wrap gap-4 border-t border-[#241019]/10 pt-4 text-sm text-[#46343D]">
          {specs.map((s) => (
            <span key={s.label} className="flex items-center gap-1.5">
              <s.icon className="h-4 w-4 text-[#7A1B47]" /> {s.label}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
