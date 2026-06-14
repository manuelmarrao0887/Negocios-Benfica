import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star, Check } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, why, stats } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | Nova Dentismed — Clínica Médico-Dentária em Lisboa',
    'Conheça a Nova Dentismed, clínica médico-dentária no Campo Pequeno com mais de 20 anos de experiência e equipas especializadas em todas as áreas.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F0F8F9] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#0E8E9E]">
              Quem somos
            </span>
            <h1 className="mt-3 max-w-3xl font-outfit text-5xl font-bold leading-[1.05] text-[#0E2A33] sm:text-6xl">
              Uma clínica dedicada ao seu sorriso.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#0E2A33] p-10">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#3FB6A0]/20 blur-2xl" />
              <Quote className="h-10 w-10 text-[#3FB6A0]" />
              <p className="mt-6 font-outfit text-2xl font-medium leading-snug text-white">
                “Tratamos cada sorriso como único — com tempo, escuta e rigor, do diagnóstico ao
                acompanhamento.”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#3FB6A0] font-outfit text-lg font-bold text-[#0E2A33]">
                  APA
                </span>
                <div>
                  <p className="font-sans font-bold text-white">{brand.director}</p>
                  <p className="text-sm text-[#9FC0C8]">Direção clínica · Nova Dentismed</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#3D5F68]">
                A Nova Dentismed é uma clínica médico-dentária no Campo Pequeno, em Lisboa, com mais de
                20 anos ao serviço da saúde oral. Sob a direção clínica da {brand.director}, reunimos
                equipas especializadas em todas as áreas da medicina dentária.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#3D5F68]">
                Da medicina dentária geral à implantologia, da ortodontia à estética dentária,
                trabalhamos em conjunto para que cada pessoa tenha o tratamento certo, num ambiente
                tranquilo e de confiança — no centro de Lisboa, a um passo do metro do Campo Pequeno.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-outfit text-2xl font-bold text-[#0E2A33] sm:text-3xl">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#5A7780]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#F0F8F9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#0E8E9E]">
              O que nos move
            </span>
            <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#0E2A33] sm:text-5xl">
              Princípios que orientam cada consulta.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-[#0E2A33]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#0E8E9E]/10 text-[#0E8E9E]">
                    <w.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-outfit text-lg font-semibold text-[#0E2A33]">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#516E76]">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / reviews section (real Google rating, no invented quotes) */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#0E2A33]/10 bg-[#F0F8F9] px-8 py-12 text-center sm:px-14 sm:py-16">
              <div className="mb-4 flex justify-center">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-7 w-7 fill-[#F2B705] text-[#F2B705]" />
                ))}
              </div>
              <p className="font-outfit text-5xl font-bold text-[#0E2A33]">{brand.rating}</p>
              <p className="mt-2 text-base font-semibold text-[#3D5F68]">
                {brand.reviews} avaliações de pacientes no Google
              </p>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-[#516E76]">
                A confiança de quem nos visita é o nosso melhor cartão de visita. Obrigado a todos os
                pacientes que partilham a sua experiência na Nova Dentismed.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-[#2F4F58]">
                {['Mais de 20 anos de experiência', 'Equipas especializadas', 'Aberto ao sábado'].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#0E2A33]/10">
                    <Check className="h-4 w-4 text-[#0B7886]" strokeWidth={3} /> {b}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="mt-14 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E8E9E] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#0B7886] cursor-pointer"
            >
              Marcar a sua consulta <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
