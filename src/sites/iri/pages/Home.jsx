import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Check, Star, Award, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, pillars, partners, values, steps, stats, gallery } from '../data.jsx'

export default function Home() {
  usePageMeta(
    'IRI — Isolamentos, Revestimentos e Impermeabilização | Loja e aplicação em Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F4F6F8] pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* blueprint grid + glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(28,109,208,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,109,208,0.07) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
              maskImage: 'radial-gradient(ellipse 80% 70% at 70% 30%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 70% 30%, black, transparent)',
            }}
          />
          <div className="absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#007A79]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#FAA734]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#007A79]/20 bg-white px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#007A79] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FAA734]" /> Loja de referência · Lisboa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-manrope text-4xl font-extrabold leading-[1.05] tracking-tight text-[#14202B] text-balance sm:text-5xl lg:text-6xl">
                Isolamentos, Revestimentos,{' '}
                <span className="text-[#007A79]">Impermeabilização</span>.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#51616E]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#007A79] px-7 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-[#007A79]/25 transition-all duration-200 hover:bg-[#006D6C] hover:shadow-xl cursor-pointer"
                >
                  Pedir orçamento <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={brand.phoneStoreHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#14202B]/15 bg-white px-7 py-3.5 font-sans text-base font-bold text-[#14202B] transition-colors duration-200 hover:border-[#007A79]/40 hover:text-[#007A79] cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {brand.phoneStoreDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FAA734] text-[#FAA734]" />
                    ))}
                  </div>
                  <span className="font-sans text-sm font-bold text-[#14202B]">{brand.rating}</span>
                  <span className="font-sans text-sm text-[#51616E]">· {brand.reviews} avaliações Google</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#007A79]/10 px-3 py-1 font-sans text-xs font-bold text-[#007A79]">
                  <Award className="h-3.5 w-3.5" /> PME Líder
                </span>
              </div>
            </Reveal>
          </div>

          {/* engineering info card */}
          <Reveal delay={300} className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-[#14202B] p-8 text-white shadow-2xl shadow-[#14202B]/25">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#007A79]/25 blur-2xl" />
              <div className="relative">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#FAA734]">
                  Há {brand.years} anos
                </span>
                <p className="mt-2 font-manrope text-2xl font-bold leading-snug">
                  Uma empresa de referência na impermeabilização.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#9fb0bf]">
                  Materiais técnicos das melhores marcas e aplicação especializada — tudo num só
                  parceiro.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Gama técnica profunda', 'Aconselhamento especializado', 'Loja física em Lisboa'].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                      <span className="grid h-6 w-6 place-items-center rounded-md bg-[#007A79] text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                  <div>
                    <div className="font-manrope text-2xl font-extrabold text-white">1993</div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-[#7f93a3]">Desde</div>
                  </div>
                  <div>
                    <div className="font-manrope text-2xl font-extrabold text-[#FAA734]">4,4★</div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-[#7f93a3]">71 avaliações</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Brand partners strip ─────────────────────────────────────── */}
      <section className="border-y border-[#14202B]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <p className="shrink-0 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#51616E]">
              Trabalhamos com as melhores marcas
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
              {partners.map((p, i) => (
                <Reveal key={p} delay={i * 50}>
                  <span className="rounded-lg border border-[#14202B]/10 bg-[#F4F6F8] px-4 py-2 font-manrope text-sm font-bold tracking-tight text-[#33424E] transition-colors hover:border-[#007A79]/40 hover:text-[#007A79]">
                    {p}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars grid (5 + loja) ──────────────────────────────────── */}
      <section className="bg-[#F4F6F8] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#007A79]">
                O que fazemos
              </span>
              <h2 className="mt-3 max-w-2xl font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#14202B] sm:text-4xl">
                Cinco áreas técnicas e uma loja a sério.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#007A79] transition-colors hover:text-[#14202B] cursor-pointer"
              >
                Ver serviços em detalhe <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <div
                  className={
                    'group relative h-full overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#14202B]/5 ' +
                    (p.highlight
                      ? 'border-[#007A79]/30 bg-[#007A79]/[0.04] hover:border-[#007A79]/50'
                      : 'border-[#14202B]/10 bg-white hover:border-[#007A79]/30')
                  }
                >
                  {p.highlight && (
                    <span className="absolute right-5 top-5 rounded-full bg-[#FAA734] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#14202B]">
                      Loja
                    </span>
                  )}
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#007A79]/10 text-[#007A79] transition-colors duration-300 group-hover:bg-[#007A79] group-hover:text-white">
                    <p.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-manrope text-xl font-bold text-[#14202B]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51616E]">{p.desc}</p>
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
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#007A79]">
              Como trabalhamos
            </span>
            <h2 className="mt-3 font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#14202B] sm:text-4xl">
              Do diagnóstico ao resultado que dura.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-[#14202B]/10 bg-[#F4F6F8] p-7">
                  <span className="font-manrope text-sm font-extrabold text-[#007A79]">
                    0{i + 1}
                  </span>
                  <span className="mt-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-white text-[#007A79] ring-1 ring-[#007A79]/15">
                    <s.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-manrope text-lg font-bold text-[#14202B]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51616E]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Obras Realizadas preview ─────────────────────────────────── */}
      <section className="bg-[#F4F6F8] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#007A79]">
                Obras realizadas
              </span>
              <h2 className="mt-3 max-w-2xl font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#14202B] sm:text-4xl">
                Trabalho técnico, feito para durar.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-[#007A79] transition-colors hover:text-[#14202B] cursor-pointer"
              >
                Ver mais obras <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.seed} delay={(i % 3) * 80}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#14202B]/10 bg-[#14202B]">
                  <img
                    src={`https://picsum.photos/seed/${g.seed}/800/600`}
                    alt={`${g.title} — obra de ${g.tag.toLowerCase()} pela IRI`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14202B]/85 via-[#14202B]/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-block rounded-full bg-[#007A79] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      {g.tag}
                    </span>
                    <p className="mt-2 font-manrope text-base font-bold text-white">{g.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <p className="text-center text-xs text-[#7a8a96]">
              Imagens ilustrativas de demonstração.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reputation band ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-3xl border border-[#14202B]/10 bg-[#F4F6F8] p-10 text-center">
                <div className="font-manrope text-6xl font-extrabold tracking-tight text-[#14202B]">
                  {brand.rating}
                </div>
                <div className="mt-3 flex justify-center">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-6 w-6 fill-[#FAA734] text-[#FAA734]" />
                  ))}
                </div>
                <p className="mt-3 font-sans text-sm font-semibold text-[#51616E]">
                  {brand.reviews} avaliações no Google
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#007A79]/10 px-4 py-2 font-sans text-sm font-bold text-[#007A79]">
                  <Award className="h-4 w-4" /> Selo PME Líder
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#14202B] sm:text-4xl">
                  O que nos distingue
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#51616E]">
                  Quem nos procura destaca o atendimento, o aconselhamento técnico e a amplitude da
                  nossa gama de materiais.
                </p>
              </Reveal>
              <div className="mt-8 space-y-4">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 90}>
                    <div className="flex gap-4 rounded-2xl border border-[#14202B]/10 bg-white p-5">
                      <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#007A79]/10 text-[#007A79]">
                        <v.icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <div>
                        <h3 className="font-manrope text-lg font-bold text-[#14202B]">{v.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#51616E]">{v.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#14202B] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.6]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
            }}
          />
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#007A79]/20 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#FAA734]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#FAA734]">
              <ShieldCheck className="h-4 w-4" /> Há 30 anos no terreno
            </span>
            <h2 className="mt-5 font-manrope text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl">
              Tem um projeto ou um problema de humidade?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#9fb0bf]">
              Fale connosco. Avaliamos o seu caso e indicamos a melhor solução — material e aplicação.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.phoneWorksHref}
                className="inline-flex items-center gap-2 rounded-lg bg-[#007A79] px-8 py-4 font-sans text-base font-bold text-white transition-all duration-200 hover:bg-[#006D6C] hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-5 w-5" /> Obras: {brand.phoneWorksDisplay}
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/5 cursor-pointer"
              >
                <MapPin className="h-5 w-5" /> Onde estamos <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
