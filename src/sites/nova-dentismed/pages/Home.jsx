import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Clock, Check, Star, MessageCircle } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, treatments, why, stats } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Nova Dentismed — Clínica Médico-Dentária no Campo Pequeno, Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F0F8F9] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* soft clinical decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-24 h-[36rem] w-[36rem] rounded-full bg-[#3FB6A0]/15 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#0E8E9E]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0E8E9E]/20 bg-white px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#0E8E9E]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3FB6A0]" /> Campo Pequeno · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-outfit text-5xl font-bold leading-[1.05] tracking-tight text-[#0E2A33] text-balance sm:text-6xl lg:text-7xl">
                O seu sorriso em mãos especializadas.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#3D5F68]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0E8E9E] px-7 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-[#0E8E9E]/25 transition-all duration-200 hover:bg-[#0B7886] hover:shadow-xl cursor-pointer"
                >
                  Marcar consulta <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0E2A33]/15 bg-white px-7 py-3.5 font-sans text-base font-bold text-[#0E2A33] transition-colors duration-200 hover:bg-[#0E8E9E]/5 cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={290}>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-[#F2B705] text-[#F2B705]" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#3D5F68]">
                  <span className="font-bold text-[#0E2A33]">{brand.rating}</span> · {brand.reviews} avaliações no Google
                </p>
              </div>
            </Reveal>
          </div>

          {/* floating info card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#0E2A33] p-8 text-white shadow-2xl shadow-[#0E2A33]/30">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#3FB6A0]/25 blur-2xl" />
              <p className="font-outfit text-2xl font-semibold">Cuidamos do seu sorriso.</p>
              <p className="mt-3 text-sm leading-relaxed text-[#9FC0C8]">
                Equipas especializadas em todas as áreas da medicina dentária, num só espaço, no centro de Lisboa.
              </p>
              <ul className="mt-6 space-y-3">
                {['Avaliação e diagnóstico cuidados', 'Plano de tratamento personalizado', 'Todas as idades, da criança ao adulto'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#3FB6A0] text-[#0E2A33]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 space-y-2 border-t border-white/10 pt-5 text-sm">
                <span className="flex items-center gap-2 text-[#BBD3D9]">
                  <Clock className="h-4 w-4 text-[#3FB6A0]" /> {brand.hoursWeek}
                </span>
                <span className="flex items-center gap-2 text-[#BBD3D9]">
                  <MapPin className="h-4 w-4 text-[#3FB6A0]" /> {brand.addressShort}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#0E2A33]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <h.icon className="h-7 w-7 text-[#0E8E9E]" strokeWidth={1.6} />
              <h3 className="mt-4 font-outfit text-lg font-semibold text-[#0E2A33]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#516E76]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Treatments preview ───────────────────────────────────────── */}
      <section className="bg-[#F0F8F9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#0E8E9E]">
                Os nossos tratamentos
              </span>
              <h2 className="mt-3 max-w-2xl font-outfit text-4xl font-bold leading-tight text-[#0E2A33] sm:text-5xl">
                Todas as especialidades, sob o mesmo teto.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'tratamentos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#0E8E9E] transition-colors hover:text-[#0B7886] cursor-pointer"
              >
                Ver todos os tratamentos <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.slice(0, 6).map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-[#0E2A33]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0E8E9E]/40 hover:shadow-xl hover:shadow-[#0E8E9E]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#0E8E9E]/10 text-[#0E8E9E] transition-colors duration-300 group-hover:bg-[#0E8E9E] group-hover:text-white">
                    <t.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-outfit text-xl font-semibold text-[#0E2A33]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#516E76]">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us + photo ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-[#0E2A33]">
                <img
                  src="https://picsum.photos/seed/nova-dentismed-1/900/1100"
                  alt="Ambiente da clínica Nova Dentismed"
                  className="h-full w-full object-cover opacity-95"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#0E8E9E] px-6 py-5 text-white shadow-xl sm:block">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-white text-white" />
                  <span className="font-outfit text-3xl font-bold">{brand.rating}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#CDEAEE]">{brand.reviews} avaliações</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#0E8E9E]">
                Porquê a Nova Dentismed
              </span>
              <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#0E2A33] sm:text-5xl">
                Cuidado, rigor e proximidade.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#3D5F68]">
                Há mais de 20 anos no Campo Pequeno, reunimos equipas especializadas para tratar cada
                sorriso com a atenção que merece — do diagnóstico ao acompanhamento.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {why.map((w) => (
                  <div key={w.title} className="rounded-2xl bg-[#F0F8F9] p-5">
                    <span className="inline-grid h-10 w-10 place-items-center rounded-lg bg-white text-[#0E8E9E] ring-1 ring-[#0E8E9E]/10">
                      <w.icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-4 font-outfit text-base font-semibold text-[#0E2A33]">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#516E76]">{w.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to={siteLink(slug, 'sobre')}
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#0E2A33]/15 px-6 py-3 font-sans text-sm font-bold text-[#0E2A33] transition-colors hover:bg-[#0E8E9E]/5 cursor-pointer"
              >
                Conhecer a clínica <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────────── */}
      <section className="bg-[#F0F8F9] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-white p-10 ring-1 ring-[#0E2A33]/5 sm:p-12 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="font-outfit text-3xl font-bold text-[#0E8E9E] sm:text-4xl">{s.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#5A7780]">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0E2A33] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#3FB6A0]/15 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#0E8E9E]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-outfit text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
              Pronto para cuidar do seu sorriso?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#9FC0C8]">
              Marque a sua consulta hoje. Atendemos de 2.ª a sábado, no Campo Pequeno.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#3FB6A0] px-8 py-4 font-sans text-base font-bold text-[#0E2A33] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/5 cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
