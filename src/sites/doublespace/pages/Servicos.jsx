import { Link } from 'react-router-dom'
import { ArrowRight, Instagram, Phone, Sparkles } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, styling } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | DoubleSpace — Nails · Cosmetology · Barber',
    'Unhas, cosmetologia/estética e barbearia em Benfica: manicure, nail art, tratamentos faciais, limpeza de pele, cortes, barba e styling.',
  )

  return (
    <>
      {/* Page hero (light) */}
      <section className="relative overflow-hidden bg-[#F6F1EC] px-6 pt-36 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-28 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#C06A52]/12 blur-3xl" />
          <div className="absolute -left-32 bottom-[-4rem] h-72 w-72 rounded-full bg-[#A98DA0]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#C06A52]">
              Os nossos serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-bricolage text-5xl font-bold leading-[1.03] text-[#1B1714] sm:text-6xl">
              Tudo num só espaço, do detalhe ao acabamento.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#46413c]">
              Três verticais que se complementam — Nails, Cosmetology e Barber — mais styling, para
              cuidarmos de ti de uma ponta à outra. Preçário sob marcação.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 flex flex-wrap gap-3">
              {services.map((s) => (
                <a
                  key={s.key}
                  href={`#${s.key}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1B1714]/15 bg-[#FFFFFF] px-4 py-2 font-sans text-sm font-semibold text-[#1B1714] transition-colors hover:border-[#C06A52] hover:text-[#C06A52] cursor-pointer"
                >
                  <s.icon className="h-4 w-4" style={{ color: s.accent === '#1B1714' ? '#1B1714' : s.accent }} />
                  {s.tag}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vertical sections */}
      {services.map((s, idx) => (
        <section
          key={s.key}
          id={s.key}
          className={idx % 2 === 0 ? 'scroll-mt-24 bg-[#F6F1EC] py-20' : 'scroll-mt-24 bg-[#FFFFFF] py-20'}
        >
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-white"
                    style={{ backgroundColor: s.accent }}
                  >
                    <s.icon className="h-4 w-4" /> {s.tag}
                  </span>
                  <h2 className="mt-5 font-bricolage text-4xl font-bold leading-tight text-[#1B1714] sm:text-5xl">
                    {s.label}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#6B625B]">{s.desc}</p>
                </div>
                <span
                  className="font-bricolage text-7xl font-bold leading-none opacity-15 sm:text-8xl"
                  style={{ color: s.accent }}
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {s.items.map((it, i) => (
                <Reveal key={it.title} delay={(i % 4) * 70}>
                  <div className="group flex h-full flex-col rounded-2xl border border-[#1B1714]/10 bg-[#FFFFFF] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1B1714]/5">
                    <span
                      className="inline-grid h-12 w-12 place-items-center rounded-xl text-white transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: s.accent }}
                    >
                      <it.icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 font-bricolage text-lg font-bold text-[#1B1714]">{it.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B625B]">{it.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Styling extra */}
      <section className="bg-[#F6F1EC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#1B1714]/10 bg-[#FFFFFF] p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#A98DA0]/15 blur-3xl" />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                <span className="inline-grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#A98DA0] text-white">
                  <styling.icon className="h-8 w-8" strokeWidth={1.5} />
                </span>
                <div>
                  <h2 className="font-bricolage text-3xl font-bold text-[#1B1714]">{styling.title}</h2>
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#6B625B]">{styling.text}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing note + CTA */}
      <section className="relative overflow-hidden bg-[#F6F1EC] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C06A52] to-[#A98DA0] px-8 py-14 text-center sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#1B1714]/15 blur-3xl" />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
                <Sparkles className="h-9 w-9 text-white" strokeWidth={1.5} />
                <h2 className="font-bricolage text-4xl font-bold leading-tight text-white">
                  Preçário sob marcação.
                </h2>
                <p className="text-lg text-white/85">
                  Conta-nos o que procuras e indicamos-te o serviço e o valor. Marcação por telefone,
                  WhatsApp ou DM do Instagram.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1B1714] px-8 py-4 font-sans text-base font-bold text-[#F6F1EC] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <Phone className="h-5 w-5" /> Marcar agora
                  </a>
                  <Link
                    to={siteLink(slug, 'contacto')}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-white/10 cursor-pointer"
                  >
                    Ver contactos <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white/80 transition-colors hover:text-white cursor-pointer"
                >
                  <Instagram className="h-4 w-4" /> {brand.instagramHandle}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
