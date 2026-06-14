import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Check, ShieldCheck, Star } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, services, audiences, steps, values, stats } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Factiva — Gabinete de Contabilidade e Gestão | Av. da República, Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F4F7FB] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* soft decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#2563B0]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#18A07A]/10 blur-3xl" />
          <svg
            className="absolute inset-0 h-full w-full text-[#14233B]/[0.04]"
            aria-hidden="true"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#14233B]/15 bg-white px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#14233B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#18A07A]" /> Av. da República · Saldanha, Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-jakarta text-5xl font-extrabold leading-[1.05] tracking-tight text-[#14233B] text-balance sm:text-6xl lg:text-[4.2rem]">
                A sua contabilidade em mãos de confiança.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#46566F]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563B0] px-7 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-[#2563B0]/25 transition-all duration-200 hover:bg-[#1d4f8f] hover:shadow-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563B0] focus-visible:ring-offset-2"
                >
                  Pedir orçamento <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#14233B]/20 bg-white px-7 py-3.5 font-sans text-base font-bold text-[#14233B] transition-colors duration-200 hover:bg-[#14233B]/5 cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#5C6A82]">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#18A07A]" /> Ativo desde {brand.since}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 fill-[#E0A11B] text-[#E0A11B]" /> {brand.rating} no Google
                </span>
              </div>
            </Reveal>
          </div>

          {/* floating info card (one accent dark card — not a full dark band) */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#14233B] p-8 text-white shadow-2xl shadow-[#14233B]/25">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2563B0]/30 blur-2xl" />
              <p className="font-jakarta text-2xl font-bold">Tratamos de tudo. Você foca-se no negócio.</p>
              <p className="mt-3 text-sm leading-relaxed text-[#A9B8D1]">
                Contabilidade, fiscalidade e gestão sob o mesmo teto, com prazos cumpridos e
                aconselhamento ao longo de todo o ano.
              </p>
              <ul className="mt-6 space-y-3">
                {['Obrigações fiscais em dia', 'Apoio a empresas e particulares', 'Relação próxima e dedicada'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#18A07A] text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5 text-sm">
                <MapPin className="h-4 w-4 text-[#3AA0E6]" />
                <span className="text-[#C6D3E6]">{brand.addressShort}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#14233B]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <h.icon className="h-7 w-7 text-[#2563B0]" strokeWidth={1.7} />
              <h3 className="mt-4 font-jakarta text-lg font-bold text-[#14233B]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5C6A82]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-[#F4F7FB] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#18A07A]">
                O que fazemos
              </span>
              <h2 className="mt-3 max-w-2xl font-jakarta text-4xl font-extrabold leading-tight text-[#14233B] sm:text-5xl">
                Serviços de contabilidade e gestão, à medida.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#2563B0] transition-colors hover:text-[#1d4f8f] cursor-pointer"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-[#14233B]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563B0]/40 hover:shadow-xl hover:shadow-[#14233B]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#2563B0]/10 text-[#2563B0] transition-colors duration-300 group-hover:bg-[#2563B0] group-hover:text-white">
                    <s.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-jakarta text-xl font-bold text-[#14233B]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6A82]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview (photo + stats) ────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-[#14233B]/10">
                <img
                  src="https://picsum.photos/seed/factiva-1/900/680"
                  alt="Ambiente de escritório do gabinete Factiva"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#14233B] px-6 py-5 text-white shadow-xl sm:block">
                <span className="font-jakarta text-3xl font-extrabold text-[#3AA0E6]">35+</span>
                <p className="text-xs font-bold uppercase tracking-wide text-[#A9B8D1]">anos de atividade</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#18A07A]">
                Quem somos
              </span>
              <h2 className="mt-3 font-jakarta text-4xl font-extrabold leading-tight text-[#14233B] sm:text-5xl">
                Um gabinete com história, focado em si.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#46566F]">
                A Factiva é um gabinete de contabilidade e gestão sediado na Avenida da República, no
                Saldanha. Ao longo de mais de três décadas, ajudámos empresas e particulares a manter
                as contas em ordem e a tomar melhores decisões — sempre com proximidade e rigor.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-jakarta text-3xl font-extrabold text-[#14233B]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7E8CA3]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to={siteLink(slug, 'sobre')}
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#14233B]/20 px-6 py-3 font-sans text-sm font-bold text-[#14233B] transition-colors hover:bg-[#14233B]/5 cursor-pointer"
              >
                Conhecer o gabinete <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Who we help ──────────────────────────────────────────────── */}
      <section className="bg-[#F4F7FB] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-jakarta text-4xl font-extrabold leading-tight text-[#14233B] sm:text-5xl">
              Para quem trabalhamos
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5C6A82]">
              Seja qual for a dimensão do seu projeto, encontramos a solução de contabilidade certa.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[#14233B]/10 bg-white p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#18A07A]/12 text-[#18A07A]">
                    <a.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-jakarta text-xl font-bold text-[#14233B]">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6A82]">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#18A07A]">
              Como trabalhamos
            </span>
            <h2 className="mt-3 font-jakarta text-4xl font-extrabold leading-tight text-[#14233B] sm:text-5xl">
              Simples, transparente e sem sobressaltos.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl bg-[#F4F7FB] p-7 ring-1 ring-[#14233B]/5">
                  <span className="font-jakarta text-4xl font-extrabold text-[#2563B0]/25">{s.n}</span>
                  <h3 className="mt-3 font-jakarta text-lg font-bold text-[#14233B]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6A82]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="bg-[#F4F7FB] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-[#14233B]/10 bg-white p-7">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#2563B0]/10 text-[#2563B0]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-jakarta text-lg font-bold text-[#14233B]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6A82]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band (the one accent band) ───────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#14233B] px-8 py-14 text-center sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-[#2563B0]/25 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-[#18A07A]/20 blur-3xl" />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
                <h2 className="font-jakarta text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl">
                  Vamos cuidar das suas contas?
                </h2>
                <p className="text-lg text-[#A9B8D1]">
                  Fale connosco para uma primeira conversa sem compromisso. Explicamos como podemos
                  ajudar a sua empresa ou a sua situação pessoal.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={brand.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-[#2563B0] px-8 py-4 font-sans text-base font-bold text-white transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <Phone className="h-5 w-5" /> {brand.phoneDisplay}
                  </a>
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/10 cursor-pointer"
                  >
                    <MapPin className="h-5 w-5" /> Onde estamos
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
