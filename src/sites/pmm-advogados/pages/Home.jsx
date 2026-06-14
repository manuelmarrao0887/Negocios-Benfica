import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Star, Check, ShieldCheck, Scale } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, areas, values, approach, pillars } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Pereira Mouta Mendes & Associados | Sociedade de Advogados em Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#16203A] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* decoration — subtle institutional gradient + frame lines */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#1E3A5F]/50 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#A6802E]/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-archivo text-xs font-bold uppercase tracking-[0.18em] text-[#C9A227]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A6802E]" /> Sociedade de Advogados ·
                Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-archivo text-4xl font-bold leading-[1.06] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                Defendemos os seus direitos com rigor e proximidade.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#AEB9CE]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-md bg-[#A6802E] px-7 py-3.5 font-archivo text-base font-bold text-[#16203A] shadow-lg shadow-black/20 transition-all duration-200 hover:bg-[#C9A227] hover:shadow-xl cursor-pointer"
                >
                  Marcar reunião <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 px-7 py-3.5 font-archivo text-base font-bold text-white transition-colors duration-200 hover:bg-white/5 cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-[#C9A227] text-[#C9A227]" />
                    ))}
                  </span>
                  {brand.rating} · {brand.reviews} avaliações
                </span>
                <span className="text-sm text-[#8C97AE]">Avaliação Google</span>
              </div>
            </Reveal>
          </div>

          {/* institutional info card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-xl border-t-4 border-[#A6802E] bg-white p-8 shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#1E3A5F] text-[#C9A227]">
                  <Scale className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-archivo text-lg font-bold text-[#16203A]">PMM &amp; Associados</p>
                  <p className="text-sm text-[#5A6479]">Assessoria jurídica de referência</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  '12 áreas de prática do Direito',
                  'Acompanhamento próximo do Cliente',
                  'Conduta ética e deontológica',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold text-[#16203A]">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#A6802E] text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#16203A]/10 bg-[#16203A]/10 text-center">
                {pillars.map((p) => (
                  <div key={p} className="bg-white px-3 py-3">
                    <span className="font-archivo text-sm font-bold text-[#1E3A5F]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-b border-[#16203A]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden px-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <h.icon className="h-7 w-7 text-[#A6802E]" strokeWidth={1.6} />
              <h3 className="mt-4 font-archivo text-lg font-bold text-[#16203A]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5A6479]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Areas preview ────────────────────────────────────────────── */}
      <section className="bg-[#F5F6F8] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-archivo text-sm font-bold uppercase tracking-[0.18em] text-[#A6802E]">
                Áreas de prática
              </span>
              <h2 className="mt-3 max-w-2xl font-archivo text-3xl font-bold leading-tight text-[#16203A] sm:text-4xl">
                Assessoria nas diferentes áreas do Direito.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'areas')}
                className="inline-flex shrink-0 items-center gap-2 font-archivo text-sm font-bold text-[#1E3A5F] transition-colors hover:text-[#A6802E] cursor-pointer"
              >
                Ver todas as áreas <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.slice(0, 6).map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-xl border border-[#16203A]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#A6802E]/40 hover:shadow-xl hover:shadow-[#16203A]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#1E3A5F]/8 text-[#1E3A5F] transition-colors duration-300 group-hover:bg-[#1E3A5F] group-hover:text-[#C9A227]">
                    <a.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-archivo text-lg font-bold text-[#16203A]">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6479]">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach / values ────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="font-archivo text-sm font-bold uppercase tracking-[0.18em] text-[#A6802E]">
                A nossa abordagem
              </span>
              <h2 className="mt-3 font-archivo text-3xl font-bold leading-tight text-[#16203A] sm:text-4xl">
                Próximos de si, do primeiro contacto à resolução.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#4A546B]">
                Privilegiamos uma abordagem direcionada para a satisfação e superação dos interesses,
                objetivos e pretensões dos nossos Clientes, aconselhando e fornecendo sempre as
                soluções que melhor respondem às suas necessidades.
              </p>
            </Reveal>
            <div className="mt-9 space-y-4">
              {approach.map((s, i) => (
                <Reveal key={s.step} delay={i * 90}>
                  <div className="flex items-start gap-4 rounded-xl border border-[#16203A]/10 bg-[#F5F6F8] p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#1E3A5F] font-archivo text-sm font-bold text-[#C9A227]">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-archivo text-base font-bold text-[#16203A]">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#5A6479]">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* values + photo block */}
          <div className="space-y-6 lg:mt-14">
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-[#16203A]/10">
                <div
                  className="aspect-[16/10] w-full bg-cover bg-center grayscale-[35%]"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/seed/pmm-advogados-1/960/600')",
                  }}
                  role="img"
                  aria-label="Escritório da Pereira Mouta Mendes & Associados em Lisboa"
                />
                <div className="flex items-center gap-3 bg-[#16203A] px-6 py-4">
                  <ShieldCheck className="h-5 w-5 text-[#C9A227]" />
                  <p className="font-archivo text-sm font-semibold text-white">
                    Excelência, rigor, profissionalismo e ética.
                  </p>
                </div>
              </div>
            </Reveal>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="rounded-xl bg-[#F5F6F8] p-6 ring-1 ring-[#16203A]/5">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-[#A6802E]/12 text-[#A6802E]">
                    <v.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-archivo text-lg font-bold text-[#16203A]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6479]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Google rating / trust band ───────────────────────────────── */}
      <section className="bg-[#F5F6F8] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-[#16203A]/10 bg-white px-8 py-12 text-center shadow-sm">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-7 w-7 fill-[#C9A227] text-[#C9A227]" />
                ))}
              </div>
              <div>
                <p className="font-archivo text-4xl font-bold text-[#16203A]">
                  {brand.rating}
                  <span className="text-2xl text-[#5A6479]"> / 5</span>
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#5A6479]">
                  {brand.reviews} avaliações no Google
                </p>
              </div>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-[#4A546B]">
                A confiança dos nossos Clientes é o reflexo do nosso compromisso com a qualidade dos
                serviços prestados e a satisfação dos seus interesses.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#16203A] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#1E3A5F]/50 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#A6802E]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-archivo text-3xl font-bold leading-tight text-white text-balance sm:text-4xl">
              Tem uma questão jurídica? Estamos aqui para si.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#AEB9CE]">
              Marque uma reunião e exponha-nos a sua situação. Encontramos, consigo, a melhor solução.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-md bg-[#A6802E] px-8 py-4 font-archivo text-base font-bold text-[#16203A] transition-transform duration-200 hover:scale-[1.02] hover:bg-[#C9A227] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-8 py-4 font-archivo text-base font-bold text-white transition-colors hover:bg-white/5 cursor-pointer"
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
