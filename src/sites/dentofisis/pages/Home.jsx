import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Clock, Check, Star, Sparkles } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, treatments, protocols, technology, values, stats } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'DentoFisis — Clínica Dentária em Entrecampos, Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F1F7F5] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* soft clinical decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-24 h-[36rem] w-[36rem] rounded-full bg-[#1F9E8E]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#5BB6C9]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1F9E8E]/25 bg-white px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#157E72]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F9E8E]" /> Clínica em Entrecampos · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-manrope text-5xl font-extrabold leading-[1.04] tracking-tight text-[#0F2A2A] text-balance sm:text-6xl lg:text-7xl">
                Excelência na prevenção e reabilitação oral.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#3C5852]">
                Combinamos tecnologia avançada com um atendimento humanizado para transformar a sua
                saúde oral. Descubra uma nova experiência no dentista.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F2A2A] px-7 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-[#0F2A2A]/15 transition-all duration-200 hover:bg-[#157E72] hover:shadow-xl cursor-pointer"
                >
                  Marcar consulta <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0F2A2A]/20 bg-white px-7 py-3.5 font-sans text-base font-bold text-[#0F2A2A] transition-colors duration-200 hover:bg-[#1F9E8E]/5 cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-[#0F2A2A]/5">
                <span className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-[#1F9E8E] text-[#1F9E8E]" />
                  ))}
                </span>
                <span className="text-sm font-bold text-[#0F2A2A]">{brand.rating}</span>
                <span className="text-sm text-[#5C7470]">· {brand.reviews} avaliações no Google</span>
              </div>
            </Reveal>
          </div>

          {/* floating photo + info card */}
          <Reveal delay={300} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-[#0F2A2A]/15 ring-1 ring-[#0F2A2A]/5">
              <img
                src="https://picsum.photos/seed/dentofisis-1/900/700"
                alt="Ambiente moderno e confortável da clínica DentoFisis"
                className="aspect-[9/7] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl ring-1 ring-[#0F2A2A]/5 sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#1F9E8E]/12 text-[#157E72]">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#5C7470]">Horário</p>
                  <p className="font-manrope font-bold text-[#0F2A2A]">{brand.hoursShort}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#0F2A2A]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <h.icon className="h-7 w-7 text-[#1F9E8E]" strokeWidth={1.6} />
              <h3 className="mt-4 font-manrope text-lg font-bold text-[#0F2A2A]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#52706A]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Treatments preview ───────────────────────────────────────── */}
      <section className="bg-[#F1F7F5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157E72]">
                Tratamentos
              </span>
              <h2 className="mt-3 max-w-2xl font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#0F2A2A] sm:text-5xl">
                Medicina dentária completa, num só espaço.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'tratamentos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#0F2A2A] transition-colors hover:text-[#157E72] cursor-pointer"
              >
                Ver todas as especialidades <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-[#0F2A2A]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F9E8E]/40 hover:shadow-xl hover:shadow-[#1F9E8E]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#1F9E8E]/10 text-[#157E72] transition-colors duration-300 group-hover:bg-[#0F2A2A] group-hover:text-[#5BB6C9]">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-manrope text-xl font-bold text-[#0F2A2A]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#52706A]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exclusive protocols band ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157E72]">
              O que nos distingue
            </span>
            <h2 className="mt-3 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#0F2A2A] sm:text-5xl">
              Serviços que não encontra noutro lugar.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {protocols.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-[#F1F7F5] p-7 ring-1 ring-[#0F2A2A]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-white text-[#157E72] shadow-sm">
                    <p.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-manrope text-lg font-bold text-[#0F2A2A]">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#52706A]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology / image split ─────────────────────────────────── */}
      <section className="bg-[#F1F7F5] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-[#0F2A2A]/10 ring-1 ring-[#0F2A2A]/5">
                <img
                  src="https://picsum.photos/seed/dentofisis-2/800/900"
                  alt="Tecnologia digital e equipamento de última geração na clínica"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -right-5 -top-5 hidden rounded-2xl bg-[#1F9E8E] px-5 py-4 text-white shadow-xl sm:block">
                <span className="font-manrope text-2xl font-extrabold">3D</span>
                <p className="text-xs font-bold uppercase tracking-wide">scanner intraoral</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157E72]">
                <Sparkles className="h-4 w-4" /> Tecnologia de ponta
              </span>
              <h2 className="mt-3 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#0F2A2A] sm:text-5xl">
                O futuro da saúde oral, hoje.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#3C5852]">
                Investimos em equipamento minimamente invasivo para que cada tratamento seja mais
                previsível, mais rápido e mais confortável — da primeira avaliação ao pós-operatório.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {technology.map((t) => (
                  <li key={t.title} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-[#0F2A2A]/5">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1F9E8E]/12 text-[#157E72]">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="font-manrope text-sm font-bold text-[#0F2A2A]">{t.title}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to={siteLink(slug, 'tratamentos')}
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#0F2A2A]/20 bg-white px-6 py-3 font-sans text-sm font-bold text-[#0F2A2A] transition-colors hover:bg-[#1F9E8E]/5 cursor-pointer"
              >
                Conhecer os tratamentos <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#0F2A2A] sm:text-5xl">
              Uma nova experiência no dentista
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#52706A]">
              Princípios que orientam cada consulta e cada tratamento.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-[#F1F7F5] p-8 ring-1 ring-[#0F2A2A]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#5BB6C9]/15 text-[#157E72]">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-manrope text-xl font-bold text-[#0F2A2A]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#52706A]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-12 grid grid-cols-2 gap-6 rounded-3xl bg-[#0F2A2A] px-8 py-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-manrope text-3xl font-extrabold text-[#5BB6C9] sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#8fb0aa]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1F9E8E] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#5BB6C9]/25 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl">
              Pronto para sorrir com total confiança?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#E4F4F1]">
              Marque a sua primeira consulta de avaliação e descubra o plano de tratamento ideal para si.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-base font-bold text-[#0F2A2A] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/10 cursor-pointer"
              >
                <MapPin className="h-5 w-5" /> Onde estamos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
