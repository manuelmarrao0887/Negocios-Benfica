import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Check, ArrowRightLeft } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, serviceGroups, beforeAfter } from '../data.jsx'

function BeforeAfterCard({ item }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#C98A6B]/15 bg-[#15100F]">
      <div className="grid grid-cols-2 gap-px bg-[#C98A6B]/15">
        {[
          { seed: item.seedBefore, label: 'Antes' },
          { seed: item.seedAfter, label: 'Depois' },
        ].map((side) => (
          <div key={side.label} className="group relative overflow-hidden bg-[#1E1816]">
            <img
              src={`https://picsum.photos/seed/${side.seed}/600/800`}
              alt={`${side.label} — ${item.alt}`}
              width={600}
              height={800}
              loading="lazy"
              className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#15100F] via-[#15100F]/25 to-[#C98A6B]/15 mix-blend-multiply" />
            <span className="absolute left-3 top-3 rounded-full bg-[#15100F]/80 px-3 py-1 font-jost text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E6B9B0] backdrop-blur-sm">
              {side.label}
            </span>
          </div>
        ))}
      </div>
      <p className="px-6 py-5 text-sm leading-relaxed text-[#C3ABA6]">{item.caption}</p>
    </div>
  )
}

export default function Servicos() {
  usePageMeta(
    'Serviços | Linda Mulher Studio',
    'Extensões capilares de cabelo 100% humano, cabeleireiro, tratamentos, unhas e design de sobrancelhas, no Parque das Nações.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#15100F] px-6 pt-40 pb-16">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#C98A6B]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#C98A6B]">
              Os nossos serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-cormorant text-5xl font-semibold leading-[1.04] text-[#F3E7E4] sm:text-6xl">
              Beleza completa, num só estúdio de luxo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C3ABA6]">
              Da nossa especialidade — extensões de cabelo 100% humano — ao cabeleireiro, tratamentos,
              unhas e sobrancelhas. Tudo pensado para uma transformação natural e cuidada.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service groups */}
      <section className="bg-[#15100F] pb-8">
        <div className="mx-auto max-w-7xl space-y-6 px-6">
          {serviceGroups.map((g, i) => (
            <Reveal key={g.id} delay={(i % 2) * 80}>
              <div className="grid gap-8 rounded-3xl border border-[#C98A6B]/15 bg-[#1E1816] p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2.5">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#E6B9B0] to-[#C98A6B] text-[#15100F]">
                      <g.icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#C98A6B]">
                      {g.eyebrow}
                    </span>
                  </span>
                  <h2 className="mt-5 font-cormorant text-3xl font-semibold text-[#F3E7E4] sm:text-4xl">
                    {g.title}
                  </h2>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#C3ABA6]">{g.blurb}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#C98A6B]/12 bg-[#15100F] px-4 py-3 text-[15px] text-[#F3E7E4]/90 transition-colors duration-200 hover:border-[#C98A6B]/35"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C98A6B]/20 text-[#E6B9B0]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-[#15100F] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#C98A6B]">
              <ArrowRightLeft className="h-4 w-4" /> Antes & depois
            </span>
            <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#F3E7E4] sm:text-5xl">
              O poder de uma transformação.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#C3ABA6]">
              Resultados criados com cabelo premium e técnicas de aplicação à medida.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {beforeAfter.map((b, i) => (
              <Reveal key={b.seedBefore} delay={i * 100}>
                <BeforeAfterCard item={b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* No prices note + CTA */}
      <section className="bg-[#1E1816] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#C98A6B]/20 bg-[#15100F] px-8 py-12 text-center sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#C98A6B]/15 blur-[100px]" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#E6B9B0]/10 blur-[100px]" />
              <div className="relative">
                <h2 className="font-cormorant text-3xl font-semibold leading-tight text-[#F3E7E4] sm:text-4xl">
                  Cada transformação é única.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#C3ABA6]">
                  Por isso, o orçamento é sempre personalizado. Fale connosco por WhatsApp e receba uma
                  consultoria à medida do que procura.
                </p>
                <a
                  href={brand.whatsappText}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#C98A6B] to-[#b1714f] px-8 py-4 font-jost text-base font-semibold text-[#15100F] shadow-[0_12px_30px_-10px_rgba(201,138,107,0.7)] transition-all duration-200 hover:shadow-[0_16px_40px_-10px_rgba(201,138,107,0.85)] cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5" /> Consultoria e orçamento
                </a>
                <p className="mt-5 text-xs text-[#C3ABA6]/70">
                  Sem preços públicos — orçamento por WhatsApp, com garantia de preço europeu.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="mt-12 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 font-jost text-sm font-semibold uppercase tracking-[0.12em] text-[#E6B9B0] transition-colors hover:text-[#C98A6B] cursor-pointer"
            >
              Ver morada e horário <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
