import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Check, ArrowRightLeft } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, serviceGroups, beforeAfter } from '../data.jsx'

function BeforeAfterCard({ item }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#CC0C78]/15 bg-white shadow-[0_18px_50px_-30px_rgba(42,22,32,0.3)]">
      <div className="grid grid-cols-2 gap-px bg-[#CC0C78]/12">
        {[
          { seed: item.seedBefore, label: 'Antes' },
          { seed: item.seedAfter, label: 'Depois' },
        ].map((side) => (
          <div key={side.label} className="group relative overflow-hidden bg-[#F6E9EF]">
            <img
              src={`https://picsum.photos/seed/${side.seed}/600/800`}
              alt={`${side.label} — ${item.alt}`}
              width={600}
              height={800}
              loading="lazy"
              className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A1620]/40 via-transparent to-[#CC0C78]/10" />
            <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 font-jost text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CC0C78] backdrop-blur-sm">
              {side.label}
            </span>
          </div>
        ))}
      </div>
      <p className="px-6 py-5 text-sm leading-relaxed text-[#6E5560]">{item.caption}</p>
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
      <section className="relative overflow-hidden bg-[#FBF4F7] px-6 pt-40 pb-16">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#CC0C78]/12 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
              Os nossos serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-cormorant text-5xl font-semibold leading-[1.04] text-[#2A1620] sm:text-6xl">
              Beleza completa, num só estúdio de luxo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6E5560]">
              Da nossa especialidade — extensões de cabelo 100% humano — ao cabeleireiro, tratamentos,
              unhas e sobrancelhas. Tudo pensado para uma transformação natural e cuidada.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service groups */}
      <section className="bg-[#FBF4F7] pb-8">
        <div className="mx-auto max-w-7xl space-y-6 px-6">
          {serviceGroups.map((g, i) => (
            <Reveal key={g.id} delay={(i % 2) * 80}>
              <div className="grid gap-8 rounded-3xl border border-[#CC0C78]/15 bg-white p-8 shadow-[0_18px_50px_-34px_rgba(42,22,32,0.35)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2.5">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#CC0C78] to-[#A50A60] text-white">
                      <g.icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
                      {g.eyebrow}
                    </span>
                  </span>
                  <h2 className="mt-5 font-cormorant text-3xl font-semibold text-[#2A1620] sm:text-4xl">
                    {g.title}
                  </h2>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6E5560]">{g.blurb}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#CC0C78]/12 bg-[#FBF4F7] px-4 py-3 text-[15px] text-[#3A2230] transition-colors duration-200 hover:border-[#CC0C78]/35"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#CC0C78]/12 text-[#CC0C78]">
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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
              <ArrowRightLeft className="h-4 w-4" /> Antes & depois
            </span>
            <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#2A1620] sm:text-5xl">
              O poder de uma transformação.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6E5560]">
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
      <section className="bg-[#FBF4F7] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#CC0C78]/15 bg-white px-8 py-12 text-center shadow-[0_24px_60px_-36px_rgba(42,22,32,0.4)] sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#CC0C78]/10 blur-[100px]" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#E8A8C8]/20 blur-[100px]" />
              <div className="relative">
                <h2 className="font-cormorant text-3xl font-semibold leading-tight text-[#2A1620] sm:text-4xl">
                  Cada transformação é única.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#6E5560]">
                  Por isso, o orçamento é sempre personalizado. Fale connosco por WhatsApp e receba uma
                  consultoria à medida do que procura.
                </p>
                <a
                  href={brand.whatsappText}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#CC0C78] to-[#A50A60] px-8 py-4 font-jost text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(204,12,120,0.6)] transition-all duration-200 hover:shadow-[0_16px_40px_-10px_rgba(204,12,120,0.75)] cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5" /> Consultoria e orçamento
                </a>
                <p className="mt-5 text-xs text-[#6E5560]/80">
                  Sem preços públicos — orçamento por WhatsApp, com garantia de preço europeu.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="mt-12 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 font-jost text-sm font-semibold uppercase tracking-[0.12em] text-[#CC0C78] transition-colors hover:text-[#A50A60] cursor-pointer"
            >
              Ver morada e horário <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
