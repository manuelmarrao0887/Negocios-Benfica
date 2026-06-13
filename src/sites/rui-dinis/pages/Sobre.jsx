import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, positioning, stats, process } from '../data.jsx'

function GridField({ className = '', tone = '#FFFFFF', opacity = 0.05 }) {
  return (
    <svg aria-hidden="true" className={className} width="100%" height="100%" style={{ color: tone, opacity }}>
      <defs>
        <pattern id="rd-grid-sobre" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rd-grid-sobre)" />
    </svg>
  )
}

export default function Sobre() {
  usePageMeta(
    'Sobre | Rui Dinis, Lda. — Especialista de eletrónica industrial desde 2002',
    'Rui Dinis — Reparações e Acessórios Industriais, Lda.: especialista de nicho em alta frequência e ultra-sons desde 2002, representante exclusivo em Portugal.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F4F6F9] px-6 pt-36 pb-16">
        <GridField className="absolute inset-0" tone="#16182B" opacity={0.05} />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#2E3192]">
              Sobre a empresa
            </span>
            <h1 className="mt-3 max-w-3xl font-plex text-5xl font-bold leading-[1.05] text-[#16182B] sm:text-6xl">
              Especialistas num nicho técnico, desde 2002.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Company story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-[#16182B] p-10">
              <GridField className="absolute inset-0" tone="#FFFFFF" opacity={0.05} />
              <div className="relative">
                <Quote className="h-10 w-10 text-[#E0A126]" />
                <p className="mt-6 font-plex text-2xl font-semibold leading-snug text-white">
                  “Resposta às exigências industriais. Conhecemos o equipamento a fundo — desde a
                  soldadura de alta frequência aos ultra-sons — e respondemos com o rigor que a
                  produção exige.”
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-[#2E3192] font-plexmono text-base font-semibold text-white">
                    RD
                  </span>
                  <div>
                    <p className="font-plex font-bold text-white">Rui Dinis, Lda.</p>
                    <p className="font-plexmono text-[11px] uppercase tracking-[0.16em] text-[#9DAAB8]">
                      Eletrónica industrial · EST. {brand.since}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#4C5A68]">
                A <span className="font-semibold text-[#16182B]">Rui Dinis — Reparações e Acessórios
                Industriais, Lda.</span> foi fundada em {brand.since} e dedica-se, desde então, à
                eletrónica industrial de alta frequência (soldadura HF/RF de termoplásticos) e de
                ultra-sons.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#4C5A68]">
                Atuamos num segmento técnico de nicho, combinando a comercialização de equipamento com
                uma forte componente de reparação, manutenção e assistência técnica. Como
                representante exclusivo em Portugal de marcas de equipamento industrial, somos o ponto
                único de contacto entre o fabricante e o cliente nacional.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#16182B]/10 bg-[#16182B]/10 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white px-4 py-5">
                    <div className="font-plexmono text-2xl font-semibold text-[#16182B]">{s.value}</div>
                    <div className="mt-1 font-plexmono text-[10px] uppercase tracking-[0.12em] text-[#4C5A68]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-[#F4F6F9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#2E3192]">
              Posicionamento
            </span>
            <h2 className="mt-3 font-plex text-4xl font-bold leading-tight text-[#16182B] sm:text-5xl">
              Porque a indústria nos escolhe.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {positioning.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 90}>
                <div className="flex h-full items-start gap-5 rounded-xl border border-[#16182B]/10 bg-white p-8">
                  <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[#16182B] text-[#E0A126]">
                    <p.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-plex text-xl font-bold text-[#16182B]">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#4C5A68]">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach / process + photo */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#2E3192]">
                A nossa abordagem
              </span>
              <h2 className="mt-3 font-plex text-4xl font-bold leading-tight text-[#16182B] sm:text-5xl">
                Comercialização e assistência, lado a lado.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#4C5A68]">
                Não nos limitamos a vender equipamento. Acompanhamos o cliente ao longo de todo o ciclo
                de vida da máquina — instalação, manutenção, reparação e fornecimento de componentes e
                consumíveis — para garantir disponibilidade e desempenho.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 70}>
                  <div className="rounded-xl border border-[#16182B]/10 bg-[#F4F6F9] p-5">
                    <span className="font-plexmono text-lg font-semibold text-[#2E3192]">{p.step}</span>
                    <h3 className="mt-1 font-plex text-base font-bold text-[#16182B]">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4C5A68]">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl border border-[#16182B]/10">
              <img
                src="https://picsum.photos/seed/rui-dinis-3/900/1040"
                alt="Detalhe de placa de eletrónica industrial em intervenção técnica"
                width="900"
                height="1040"
                loading="lazy"
                className="aspect-[9/10.4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16182B]/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-plexmono text-[11px] uppercase tracking-[0.18em] text-[#E0A126]">
                  Reparação · ao nível de componente
                </span>
                <p className="mt-2 font-plex text-2xl font-bold text-white">
                  Know-how técnico próprio.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#16182B] py-20">
        <GridField className="absolute inset-0" tone="#FFFFFF" opacity={0.05} />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#2E3192]/25 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-plex text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
              Um parceiro técnico para a sua produção.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#9DAAB8]">
              Fale connosco sobre o seu equipamento de alta frequência ou ultra-sons.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-md bg-[#2E3192] px-8 py-4 font-plex text-base font-bold text-white transition-colors hover:bg-[#23265E] cursor-pointer"
            >
              Pedir assistência <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
