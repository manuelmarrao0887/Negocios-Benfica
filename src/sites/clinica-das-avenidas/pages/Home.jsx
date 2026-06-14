import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Clock, Check, ShieldCheck, Stethoscope } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, treatments, technology, values, stats, steps } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Clínica das Avenidas — Dr. Rui Delfim | Medicina dentária em Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F2F6FC] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* soft medical decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#1F9A9E]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#36B0A6]/10 blur-3xl" />
          <svg className="absolute right-8 top-28 hidden h-72 w-72 text-[#1F9A9E]/[0.07] lg:block" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
            <path d="M32 6c-6 0-9 3-13 3S12 6 9 9c-4 4-3 13-1 22 1.6 7.2 3 16 7 16 3.4 0 3.2-9 7-9s3.6 9 7 9c4 0 5.4-8.8 7-16 2-9 3-18-1-22-3-3-5-3-7-3s-7-0-3 0z" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1F9A9E]/25 bg-white/70 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#11707A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F9A9E]" /> Medicina dentária · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-outfit text-5xl font-bold leading-[1.05] tracking-tight text-[#102438] text-balance sm:text-6xl lg:text-[4.2rem]">
                O seu sorriso em mãos especializadas.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#4A6076]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#11707A] px-7 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-[#11707A]/20 transition-all duration-200 hover:bg-[#0E5A62] hover:shadow-xl cursor-pointer"
                >
                  Marcar consulta <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#102438]/15 bg-white px-7 py-3.5 font-sans text-base font-bold text-[#11707A] transition-colors duration-200 hover:bg-[#1F9A9E]/5 cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#51677d]">
                <ShieldCheck className="h-4 w-4 text-[#11707A]" /> {brand.omd} · inscrito na Ordem dos Médicos Dentistas
              </p>
            </Reveal>
          </div>

          {/* floating info card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#0E2A33] p-8 text-white shadow-2xl shadow-[#0E2A33]/25">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#1F9A9E]/25 blur-2xl" />
              <div className="relative">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#1F9A9E]/20 text-[#36B0A6]">
                  <Stethoscope className="h-6 w-6" />
                </span>
                <p className="mt-5 font-outfit text-2xl font-semibold">Cuidamos de si em cada passo.</p>
                <p className="mt-3 text-sm leading-relaxed text-[#9fc0cb]">
                  Da primeira avaliação ao acompanhamento pós-tratamento, com tempo e atenção para si.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Implantes com garantia Straumann®',
                    'Sedação consciente e anestesia geral',
                    'TAC 3D, scanner e impressão 3D',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#36B0A6] text-[#0E2A33]">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-[#9fc0cb]">
                  <Clock className="h-4 w-4 text-[#36B0A6]" /> {brand.hours}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#102438]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <h.icon className="h-7 w-7 text-[#11707A]" strokeWidth={1.6} />
              <h3 className="mt-4 font-outfit text-lg font-semibold text-[#102438]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#51677d]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Treatments preview ───────────────────────────────────────── */}
      <section className="bg-[#F2F6FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157B7F]">
                Os nossos tratamentos
              </span>
              <h2 className="mt-3 max-w-2xl font-outfit text-4xl font-bold leading-tight text-[#102438] sm:text-5xl">
                Todas as especialidades, sob o mesmo teto.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'tratamentos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#11707A] transition-colors hover:text-[#0E2A33] cursor-pointer"
              >
                Ver todos os tratamentos <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-[#102438]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F9A9E]/40 hover:shadow-xl hover:shadow-[#102438]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#1F9A9E]/10 text-[#11707A] transition-colors duration-300 group-hover:bg-[#11707A] group-hover:text-white">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-outfit text-xl font-semibold text-[#102438]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51677d]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise: Dr. Rui Delfim + technology ───────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                <img
                  src="https://picsum.photos/seed/clinica-das-avenidas-1/800/1000"
                  alt="Ambiente clínico moderno da Clínica das Avenidas"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#11707A] px-6 py-5 text-white shadow-xl sm:block">
                <span className="font-outfit text-3xl font-bold">OM 30450</span>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9fc0cb]">Dr. Rui Delfim</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157B7F]">
                A nossa expertise
              </span>
              <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#102438] sm:text-5xl">
                Dirigida por Dr. Rui Delfim.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#4A6076]">
                À frente da Clínica das Avenidas está Dr. Rui Delfim, dedicado à implantologia e à
                cirurgia oral. Ao seu lado, uma equipa de especialistas em periodontologia, ortodontia
                e estética facial reúne, sob o mesmo teto, todas as áreas da medicina dentária.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {technology.map((t) => (
                  <div key={t.title} className="rounded-2xl bg-[#F2F6FC] p-5 ring-1 ring-[#102438]/5">
                    <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-[#1F9A9E]/12 text-[#11707A]">
                      <t.icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-3 font-outfit text-base font-semibold text-[#102438]">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#51677d]">{t.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to={siteLink(slug, 'sobre')}
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#102438]/15 px-6 py-3 font-sans text-sm font-bold text-[#11707A] transition-colors hover:bg-[#1F9A9E]/5 cursor-pointer"
              >
                Conhecer a equipa <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why choose ───────────────────────────────────────────────── */}
      <section className="bg-[#F2F6FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-4xl font-bold leading-tight text-[#102438] sm:text-5xl">
              Porquê a Clínica das Avenidas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#51677d]">
              Uma clínica de medicina dentária pensada à volta de si — equipa, tecnologia e cuidado.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-white p-8 ring-1 ring-[#102438]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#36B0A6]/15 text-[#11707A]">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-outfit text-xl font-semibold text-[#102438]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51677d]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157B7F]">
              Marcação simples
            </span>
            <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#102438] sm:text-5xl">
              Agendar a sua consulta é rápido.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-[#102438]/10 bg-[#F2F6FC] p-7">
                  <span className="font-outfit text-3xl font-bold text-[#1F9A9E]/60">{s.n}</span>
                  <h3 className="mt-3 font-outfit text-lg font-semibold text-[#102438]">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#51677d]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0E2A33] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#1F9A9E]/20 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#36B0A6]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-outfit text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
              Pronto para cuidar do seu sorriso?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#9fc0cb]">
              Marque a sua avaliação na Clínica das Avenidas. Atendemos de segunda a sexta, no centro de Lisboa.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#36B0A6] px-8 py-4 font-sans text-base font-bold text-[#0E2A33] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/5 cursor-pointer"
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
