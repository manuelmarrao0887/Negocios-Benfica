import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShieldCheck } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, highlights, values, stats } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | DentoFisis — Clínica Dentária, Lisboa',
    'Há mais de 20 anos a cuidar de sorrisos em Entrecampos, Lisboa. Clínica licenciada, com tecnologia avançada e atendimento humanizado.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F1F7F5] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157E72]">
              Quem somos
            </span>
            <h1 className="mt-3 max-w-3xl font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0F2A2A] sm:text-6xl">
              Há mais de 20 anos a cuidar do seu sorriso.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-[#0F2A2A]/10 ring-1 ring-[#0F2A2A]/5">
                <img
                  src="https://picsum.photos/seed/dentofisis-3/800/900"
                  alt="Equipa e instalações da clínica DentoFisis em Entrecampos"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#1F9E8E] px-6 py-5 text-white shadow-xl sm:block">
                <span className="font-manrope text-3xl font-extrabold">20+</span>
                <p className="text-xs font-bold uppercase tracking-wide">anos de experiência</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#3C5852]">
                A DentoFisis é uma clínica médica dentária no coração de Entrecampos, em Lisboa.
                Construímos a nossa reputação tratamento a tratamento, com diagnóstico rigoroso,
                tecnologia de ponta e uma relação de confiança com cada paciente.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#3C5852]">
                Acreditamos numa medicina dentária minimamente invasiva e centrada na pessoa — com
                tempo para ouvir, explicar e tranquilizar. É essa a experiência que milhares de
                pacientes reconhecem ao longo de duas décadas.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-manrope text-3xl font-extrabold text-[#0F2A2A]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#5C7470]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#F1F7F5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-[#0F2A2A]/5">
                  <h.icon className="h-7 w-7 text-[#1F9E8E]" strokeWidth={1.6} />
                  <h3 className="mt-4 font-manrope text-lg font-bold text-[#0F2A2A]">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#52706A]">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values + trust */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
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

          {/* Rating + regulatory */}
          <Reveal delay={120}>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#0F2A2A] px-8 py-8 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-4">
                <span className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-[#5BB6C9] text-[#5BB6C9]" />
                  ))}
                </span>
                <div>
                  <p className="font-manrope text-2xl font-extrabold text-white">
                    {brand.rating} <span className="text-base font-semibold text-[#8fb0aa]">/ 5</span>
                  </p>
                  <p className="text-sm text-[#8fb0aa]">{brand.reviews} avaliações no Google</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#cfe6e1]">
                <ShieldCheck className="h-6 w-6 text-[#5BB6C9]" />
                <p className="text-sm">
                  Clínica licenciada pela ERS (n.º {brand.ers}) · Licença {brand.licenca}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-12 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#1F9E8E] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#157E72] cursor-pointer"
            >
              Marcar a sua consulta <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
