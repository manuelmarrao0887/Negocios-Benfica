import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Clock, Check } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, services, values, stats } from '../data.jsx'

export default function Home() {
  usePageMeta('Filipitsch — Terapia Activa | Clínica multidisciplinar em Benfica', brand.intro)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FBF9F2] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* organic decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-24 h-[36rem] w-[36rem] rounded-full bg-[#7FB39B]/15 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#CBA35C]/10 blur-3xl" />
          <svg className="absolute right-6 top-24 hidden h-72 w-72 text-[#0E3B34]/[0.04] lg:block" viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
            <path d="M44.6,-58.3C57.2,-49.4,66.1,-35.1,69.8,-19.6C73.5,-4.1,72,12.7,65.1,26.9C58.2,41.1,45.9,52.8,31.6,60.4C17.3,68,1,71.6,-15.8,69.8C-32.6,68,-49.9,60.8,-60.6,47.9C-71.3,35,-75.4,16.4,-73.2,-1.1C-71,-18.6,-62.5,-35,-49.9,-44.2C-37.3,-53.4,-20.6,-55.4,-3.4,-51.2C13.8,-47,27.6,-67.2,44.6,-58.3Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0E3B34]/15 bg-white/60 px-4 py-1.5 font-nunito text-xs font-bold uppercase tracking-[0.15em] text-[#0E3B34]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#CBA35C]" /> Clínica em Benfica · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-fraunces text-5xl font-semibold leading-[1.04] tracking-tight text-[#0E3B34] text-balance sm:text-6xl lg:text-7xl">
                A sua saúde, em boas mãos.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#46564f]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0E3B34] px-7 py-3.5 font-nunito text-base font-bold text-[#F4F0E4] shadow-lg shadow-[#0E3B34]/20 transition-all duration-200 hover:bg-[#0a2c27] hover:shadow-xl cursor-pointer"
                >
                  Marcar consulta <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0E3B34]/20 px-7 py-3.5 font-nunito text-base font-bold text-[#0E3B34] transition-colors duration-200 hover:bg-[#0E3B34]/5 cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          {/* floating info card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#0E3B34] p-8 text-[#F4F0E4] shadow-2xl shadow-[#0E3B34]/30">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7FB39B]/20 blur-2xl" />
              <p className="font-fraunces text-2xl font-semibold">Cuidamos de si, todos os dias.</p>
              <p className="mt-3 text-sm leading-relaxed text-[#9fb8ac]">
                Uma equipa multidisciplinar pronta a ajudá-lo a recuperar, prevenir e viver melhor.
              </p>
              <ul className="mt-6 space-y-3">
                {['Avaliação personalizada', 'Tratamento ao domicílio', 'Para todas as idades'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#CBA35C] text-[#0E3B34]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5 text-sm">
                <span className="flex items-center gap-2 text-[#cfe0d8]">
                  <Clock className="h-4 w-4 text-[#CBA35C]" /> {brand.hours}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#0E3B34]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <h.icon className="h-7 w-7 text-[#CBA35C]" strokeWidth={1.6} />
              <h3 className="mt-4 font-fraunces text-lg font-semibold text-[#0E3B34]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5C6B66]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-[#FBF9F2] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-nunito text-sm font-bold uppercase tracking-[0.15em] text-[#CBA35C]">
                As nossas especialidades
              </span>
              <h2 className="mt-3 max-w-2xl font-fraunces text-4xl font-semibold leading-tight text-[#0E3B34] sm:text-5xl">
                Tudo o que precisa, sob o mesmo teto.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-nunito text-sm font-bold text-[#0E3B34] transition-colors hover:text-[#CBA35C] cursor-pointer"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-[#0E3B34]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#CBA35C]/40 hover:shadow-xl hover:shadow-[#0E3B34]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#0E3B34]/5 text-[#0E3B34] transition-colors duration-300 group-hover:bg-[#0E3B34] group-hover:text-[#CBA35C]">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-fraunces text-xl font-semibold text-[#0E3B34]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6B66]">{s.desc}</p>
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
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E3B34] to-[#163f37]">
                <div className="flex h-full flex-col justify-end p-10">
                  <span className="font-fraunces text-7xl font-semibold text-[#CBA35C]">{brand.since}</span>
                  <p className="mt-2 font-nunito text-lg font-semibold text-[#F4F0E4]">
                    Ano em que abrimos a nossa clínica em Benfica.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#CBA35C] px-6 py-5 text-[#0E3B34] shadow-xl sm:block">
                <span className="font-fraunces text-3xl font-bold">20+</span>
                <p className="text-xs font-bold uppercase tracking-wide">anos de prática</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-nunito text-sm font-bold uppercase tracking-[0.15em] text-[#CBA35C]">
                Quem somos
              </span>
              <h2 className="mt-3 font-fraunces text-4xl font-semibold leading-tight text-[#0E3B34] sm:text-5xl">
                Uma abordagem integrativa à sua saúde.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#46564f]">
                Fundada por Bernardo Filipitsch, terapeuta com mais de 20 anos de experiência, a Terapia
                Activa nasceu da convicção de que a saúde é um direito de todos. Reunimos várias
                especialidades para tratar a pessoa como um todo — não apenas o sintoma.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-fraunces text-3xl font-bold text-[#0E3B34]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7a8a82]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to={siteLink(slug, 'sobre')}
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#0E3B34]/20 px-6 py-3 font-nunito text-sm font-bold text-[#0E3B34] transition-colors hover:bg-[#0E3B34]/5 cursor-pointer"
              >
                Conhecer a equipa <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="bg-[#FBF9F2] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-fraunces text-4xl font-semibold leading-tight text-[#0E3B34] sm:text-5xl">
              O que nos move
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5C6B66]">
              Princípios simples que orientam cada consulta e cada tratamento.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-white p-8 ring-1 ring-[#0E3B34]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#7FB39B]/15 text-[#0E3B34]">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-fraunces text-xl font-semibold text-[#0E3B34]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6B66]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0E3B34] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#7FB39B]/15 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#CBA35C]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-fraunces text-4xl font-semibold leading-tight text-[#F4F0E4] text-balance sm:text-5xl">
              Pronto para cuidar de si?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#9fb8ac]">
              Marque a sua consulta hoje. Estamos disponíveis todos os dias, também ao domicílio.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#CBA35C] px-8 py-4 font-nunito text-base font-bold text-[#0E3B34] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full border border-[#F4F0E4]/25 px-8 py-4 font-nunito text-base font-bold text-[#F4F0E4] transition-colors hover:bg-white/5 cursor-pointer"
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
