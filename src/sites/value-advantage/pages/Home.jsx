import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Check, Star, ArrowUpRight, Quote } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, services, values, stats, audience, trust } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Value Advantage — Contabilidade e Gestão em Lisboa | Avenidas Novas',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F5F8F6] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* soft decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-24 h-[36rem] w-[36rem] rounded-full bg-[#2E7D6A]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#B68A2E]/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(16,42,35,0.06) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#102A23]/12 bg-white px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#102A23]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B68A2E]" /> {brand.zone}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-[#102A23] text-balance sm:text-6xl lg:text-[4.2rem]">
                Acrescentamos <span className="text-[#2E7D6A]">valor</span> ao seu negócio.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#3F5249]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2E7D6A] px-7 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-[#2E7D6A]/25 transition-all duration-200 hover:bg-[#256655] hover:shadow-xl cursor-pointer"
                >
                  Pedir proposta <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#102A23]/15 bg-white/60 px-7 py-3.5 font-sans text-base font-bold text-[#102A23] transition-colors duration-200 hover:bg-white cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-[#B68A2E] text-[#B68A2E]" />
                  ))}
                </div>
                <p className="text-sm text-[#3F5249]">
                  <span className="font-bold text-[#102A23]">{brand.rating}</span> em {brand.reviews} avaliações Google
                </p>
              </div>
            </Reveal>
          </div>

          {/* floating info card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#102A23] p-8 text-white shadow-2xl shadow-[#102A23]/25">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#2E7D6A]/30 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#B68A2E]/20 blur-2xl" />
              <p className="relative font-manrope text-2xl font-bold">O parceiro de gestão do seu negócio.</p>
              <p className="relative mt-3 text-sm leading-relaxed text-[#9DBDB1]">
                Tratamos da contabilidade e das obrigações fiscais para que se possa concentrar no que faz
                melhor — fazer crescer a sua empresa.
              </p>
              <ul className="relative mt-6 space-y-3">
                {['Contabilidade e fiscalidade', 'Consultoria e apoio à gestão', 'Acompanhamento próximo e permanente'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#B68A2E] text-[#102A23]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                to={siteLink(slug, 'servicos')}
                className="relative mt-7 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-bold text-[#D8B45E] transition-colors hover:text-white cursor-pointer"
              >
                Ver todos os serviços <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#102A23]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <h.icon className="h-7 w-7 text-[#2E7D6A]" strokeWidth={1.7} />
              <h3 className="mt-4 font-manrope text-lg font-bold text-[#102A23]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5A6E64]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-[#F5F8F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#B68A2E]">
                O que fazemos
              </span>
              <h2 className="mt-3 max-w-2xl font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#102A23] sm:text-5xl">
                Uma gama completa, ao serviço do seu negócio.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#2E7D6A] transition-colors hover:text-[#B68A2E] cursor-pointer"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-[#102A23]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E7D6A]/40 hover:shadow-xl hover:shadow-[#102A23]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#2E7D6A]/10 text-[#2E7D6A] transition-colors duration-300 group-hover:bg-[#2E7D6A] group-hover:text-white">
                    <s.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-manrope text-xl font-bold text-[#102A23]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6E64]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview ────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[#102A23] to-[#1C3D33]">
                <div className="flex h-full flex-col justify-between p-10">
                  <Quote className="h-12 w-12 text-[#B68A2E]" />
                  <div>
                    <p className="font-manrope text-2xl font-semibold leading-snug text-white">
                      “Distinguimo-nos pelo acompanhamento dedicado e por uma relação de proximidade e
                      confiança com cada cliente.”
                    </p>
                    <p className="mt-6 text-sm font-bold uppercase tracking-wide text-[#9DBDB1]">
                      Eva Barbosa · Sócia-Gerente
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#B68A2E] px-6 py-5 text-[#102A23] shadow-xl sm:block">
                <span className="font-manrope text-3xl font-extrabold">20+</span>
                <p className="text-xs font-bold uppercase tracking-wide">anos de experiência</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#B68A2E]">
                Quem somos
              </span>
              <h2 className="mt-3 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#102A23] sm:text-5xl">
                Mais do que um contabilista, um parceiro.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#3F5249]">
                A Value Advantage presta serviços de contabilidade, consultoria e apoio à gestão,
                apoiando os clientes no desenvolvimento dos seus projetos e negócios. A proximidade
                permite-nos conhecer a fundo a realidade de cada empresa — e é aí que acrescentamos valor.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-manrope text-3xl font-extrabold text-[#2E7D6A]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#6E827A]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to={siteLink(slug, 'sobre')}
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#102A23]/15 px-6 py-3 font-sans text-sm font-bold text-[#102A23] transition-colors hover:bg-[#F5F8F6] cursor-pointer"
              >
                Conhecer a equipa <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Audience ─────────────────────────────────────────────────── */}
      <section className="bg-[#F5F8F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#102A23] sm:text-5xl">
              Para quem trabalhamos
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5A6E64]">
              De empresas e empreendedores a particulares — adaptamos cada solução a quem nos procura.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-[#102A23]/10 bg-white p-7">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#B68A2E]/12 text-[#9A741F]">
                    <a.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-manrope text-lg font-bold text-[#102A23]">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A6E64]">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#B68A2E]">
              O que nos move
            </span>
            <h2 className="mt-3 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#102A23] sm:text-5xl">
              Princípios que orientam cada decisão.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-[#F5F8F6] p-8 ring-1 ring-[#102A23]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#2E7D6A]/10 text-[#2E7D6A]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-manrope text-xl font-bold text-[#102A23]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6E64]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust / reviews ──────────────────────────────────────────── */}
      <section className="bg-[#F5F8F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-[#102A23]/10 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="flex items-center justify-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-7 w-7 fill-[#B68A2E] text-[#B68A2E]" />
              ))}
            </div>
            <p className="mt-5 font-manrope text-5xl font-extrabold text-[#102A23]">{brand.rating}<span className="text-2xl text-[#6E827A]"> / 5</span></p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#6E827A]">
              {brand.reviews} avaliações no Google
            </p>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-[#3F5249]">
              Uma classificação construída cliente a cliente, ano após ano, com base no rigor técnico e na
              proximidade que nos definem.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">
            {trust.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-[#102A23]/10 bg-white p-7 text-center">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#B68A2E]/12 text-[#9A741F]">
                    <t.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-manrope text-lg font-bold text-[#102A23]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6E64]">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#102A23] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#2E7D6A]/25 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#B68A2E]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl">
              Vamos acrescentar valor ao seu negócio?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#9DBDB1]">
              Fale connosco para uma proposta sem compromisso. Respondemos com soluções à medida da sua
              empresa.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#B68A2E] px-8 py-4 font-sans text-base font-bold text-[#102A23] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/5 cursor-pointer"
              >
                Pedir proposta <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
