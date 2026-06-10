import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Check, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, services, audience, differentiators, stats } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'Conta 100% — Contabilidade | Gabinete de contabilidade em Benfica, Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero (light) ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F4F8F6] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* subtle grid + glow decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(14,42,35,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,42,35,0.04) 1px, transparent 1px)',
              backgroundSize: '46px 46px',
              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)',
            }}
          />
          <div className="absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#1F9D6B]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#123C66]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0E2A23]/12 bg-[#FFFFFF] px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#0E2A23] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F9D6B]" /> Contabilidade em Benfica · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-jakarta text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0E2A23] text-balance sm:text-6xl lg:text-7xl">
                Cuidamos de si.<br />
                <span className="text-[#1F9D6B]">Fazemos crescer</span> o seu negócio.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#51635C]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1F9D6B] px-7 py-3.5 font-sans text-base font-bold text-[#FFFFFF] shadow-lg shadow-[#1F9D6B]/25 transition-all duration-200 hover:bg-[#178a5c] hover:shadow-xl cursor-pointer"
                >
                  Marcar reunião <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0E2A23]/15 bg-[#FFFFFF] px-7 py-3.5 font-sans text-base font-bold text-[#0E2A23] transition-colors duration-200 hover:border-[#1F9D6B]/40 hover:text-[#1F9D6B] cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-[#51635C]">
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F9D6B]" strokeWidth={3} /> Desde 2005
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F9D6B]" strokeWidth={3} /> Contabilista Certificado
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F9D6B]" strokeWidth={3} /> Deslocação ao cliente
                </span>
              </div>
            </Reveal>
          </div>

          {/* floating info card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E2A23] to-[#123C66] p-8 text-[#FFFFFF] shadow-2xl shadow-[#0E2A23]/30">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#1F9D6B]/25 blur-2xl" />
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7fe3bb]">
                <ShieldCheck className="h-4 w-4" /> Parceiro de confiança
              </span>
              <p className="mt-5 font-jakarta text-2xl font-bold leading-snug">
                A sua contabilidade tratada a 100%.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#a9c2b8]">
                Cumprimos as suas obrigações, simplificamos a gestão e damos-lhe informação para decidir
                com confiança.
              </p>
              <ul className="mt-6 space-y-3">
                {['Balancetes mensais', 'Acompanhamento económico-financeiro', 'Planeamento fiscal'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#1F9D6B] text-[#FFFFFF]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div>
                  <div className="font-jakarta text-3xl font-extrabold text-[#FFFFFF]">12+</div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#a9c2b8]">anos no mercado</div>
                </div>
                <div>
                  <div className="font-jakarta text-3xl font-extrabold text-[#FFFFFF]">6</div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#a9c2b8]">áreas de serviço</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-y border-[#0E2A23]/10 bg-[#FFFFFF]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-8 sm:px-6">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#1F9D6B]/10 text-[#1F9D6B]">
                <h.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-jakarta text-lg font-bold text-[#0E2A23]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#51635C]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-[#F4F8F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#1F9D6B]">
                O que fazemos
              </span>
              <h2 className="mt-3 max-w-2xl font-jakarta text-4xl font-extrabold leading-tight text-[#0E2A23] sm:text-5xl">
                Tudo o que a sua empresa precisa, num só gabinete.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#0E2A23] transition-colors hover:text-[#1F9D6B] cursor-pointer"
              >
                Ver todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <Link
                  to={siteLink(slug, 'servicos')}
                  className="group flex h-full flex-col rounded-2xl border border-[#0E2A23]/10 bg-[#FFFFFF] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F9D6B]/40 hover:shadow-xl hover:shadow-[#0E2A23]/5 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#0E2A23]/5 text-[#0E2A23] transition-colors duration-300 group-hover:bg-[#1F9D6B] group-hover:text-[#FFFFFF]">
                      <s.icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[#0E2A23]/20 transition-colors duration-300 group-hover:text-[#1F9D6B]" />
                  </div>
                  <h3 className="mt-5 font-jakarta text-xl font-bold text-[#0E2A23]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51635C]">{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── For whom ─────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#1F9D6B]">
              Para quem trabalhamos
            </span>
            <h2 className="mt-3 font-jakarta text-4xl font-extrabold leading-tight text-[#0E2A23] sm:text-5xl">
              Soluções para cada fase do seu projeto.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#51635C]">
              De empresas estabelecidas a quem está a começar — adaptamo-nos a si.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 70}>
                <div className="group h-full rounded-2xl border border-[#0E2A23]/10 bg-[#F4F8F6] p-7 transition-colors duration-300 hover:border-[#123C66]/30">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#123C66]/10 text-[#123C66] transition-colors duration-300 group-hover:bg-[#123C66] group-hover:text-[#FFFFFF]">
                    <a.icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-jakarta text-lg font-bold text-[#0E2A23]">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51635C]">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiators ──────────────────────────────────────────── */}
      <section className="bg-[#F4F8F6] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#1F9D6B]">
              Porquê a Conta 100%
            </span>
            <h2 className="mt-3 font-jakarta text-4xl font-extrabold leading-tight text-[#0E2A23] sm:text-5xl">
              Experiência que faz a diferença nas suas contas.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-[#51635C]">
              Desde 2005 que acompanhamos empresas e particulares com rigor técnico e uma relação de
              proximidade. Mais do que cumprir obrigações, ajudamos a tomar melhores decisões.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-jakarta text-3xl font-extrabold text-[#0E2A23]">{s.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#51635C]/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to={siteLink(slug, 'sobre')}
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#0E2A23]/15 bg-[#FFFFFF] px-6 py-3 font-sans text-sm font-bold text-[#0E2A23] transition-colors hover:border-[#1F9D6B]/40 hover:text-[#1F9D6B] cursor-pointer"
            >
              Conhecer o gabinete <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 90}>
                <div className="h-full rounded-2xl bg-[#FFFFFF] p-7 ring-1 ring-[#0E2A23]/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#0E2A23]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#1F9D6B]/10 text-[#1F9D6B]">
                    <d.icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-jakarta text-lg font-bold text-[#0E2A23]">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51635C]">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0E2A23] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#1F9D6B]/15 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#123C66]/40 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <h2 className="font-jakarta text-4xl font-extrabold leading-tight text-[#FFFFFF] text-balance sm:text-5xl">
              Vamos pôr as suas contas a 100%?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#a9c2b8]">
              Marque uma reunião sem compromisso. Conhecemos o seu caso e mostramos como o podemos ajudar
              — também com deslocação ao cliente.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full bg-[#1F9D6B] px-8 py-4 font-sans text-base font-bold text-[#FFFFFF] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                Marcar reunião <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF]/25 px-8 py-4 font-sans text-base font-bold text-[#FFFFFF] transition-colors hover:bg-white/5 cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <p className="inline-flex items-center gap-2 text-sm text-[#7d9389]">
              <MapPin className="h-4 w-4" /> {brand.address}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
