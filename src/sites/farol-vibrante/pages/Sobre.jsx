import { Link } from 'react-router-dom'
import { ArrowUpRight, Compass, FileText, Quote } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, values, lsfReasons, stats } from '../data.jsx'

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#F2A33C]">
      <span className="h-px w-7 bg-[#F2A33C]" />
      {children}
    </span>
  )
}

function GridLines({ className = '' }) {
  return (
    <div
      className={'pointer-events-none absolute inset-0 ' + className}
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
  )
}

export default function Sobre() {
  usePageMeta(
    'Sobre | Farol Vibrante — Construções LSF',
    'A filosofia do Light Steel Framing, os nossos valores e o conceito de farol: orientar cada cliente com luz e rigor.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#14181D] px-6 pt-36 pb-16">
        <GridLines />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-1/3 right-[18%] h-[100vh] w-[34rem] rotate-[16deg] bg-gradient-to-b from-[#F2A33C]/15 to-transparent blur-2xl" />
          <div className="absolute right-[14%] top-28 h-2 w-2 rounded-full bg-[#F2A33C] shadow-[0_0_20px_6px_rgba(242,163,60,0.5)]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow>Quem somos</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-sora text-5xl font-bold leading-[1.04] text-[#ECEFF2] sm:text-6xl">
              Um farol na construção em aço leve.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#9AA7B4]">
              A Farol Vibrante existe para orientar cada cliente com luz e rigor — levando a construção
              industrializada em Light Steel Framing a quem quer construir melhor, mais rápido e mais
              sustentável.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lighthouse concept */}
      <section className="border-t border-white/10 bg-[#1C2128] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#14181D] p-10">
              <div className="pointer-events-none absolute -top-1/4 left-1/2 h-[60vh] w-72 -translate-x-1/2 rotate-[6deg] bg-gradient-to-b from-[#F2A33C]/20 to-transparent blur-2xl" aria-hidden="true" />
              <div className="relative">
                <span className="inline-grid h-14 w-14 place-items-center rounded-xl bg-[#F2A33C] text-[#14181D]">
                  <Compass className="h-7 w-7" strokeWidth={1.7} />
                </span>
                <p className="mt-7 font-sora text-2xl font-semibold leading-snug text-[#ECEFF2]">
                  Um farol não constrói o caminho — ilumina-o. É assim que trabalhamos: com método,
                  transparência e orientação técnica em cada decisão.
                </p>
                <p className="mt-6 text-[15px] leading-relaxed text-[#9AA7B4]">
                  O nome diz tudo. Vibrante pela energia com que abraçamos a construção do futuro; farol
                  pela confiança de quem sabe para onde vai.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>A nossa filosofia</Eyebrow>
              <h2 className="mt-4 font-sora text-4xl font-bold leading-tight text-[#ECEFF2] sm:text-5xl">
                Construção industrializada, feita com gente.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#9AA7B4]">
                Acreditamos que o Light Steel Framing é mais do que uma técnica: é uma forma de construir
                mais limpa, precisa e responsável. Perfis de aço leve galvanizado, produzidos com rigor
                industrial e montados a seco, dão origem a estruturas sólidas com muito menos desperdício.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#9AA7B4]">
                Mas a tecnologia só ganha sentido quando está ao serviço das pessoas. Por isso colocamos
                a relação de confiança no centro de tudo — fazemos juntos, fazemos com excelência e
                fazemos diferente.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-sora text-3xl font-bold text-[#F2A33C]">{s.value}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-wide text-[#7C8B9C]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#14181D] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>O que nos guia</Eyebrow>
            <h2 className="mt-4 font-sora text-4xl font-bold leading-tight text-[#ECEFF2] sm:text-5xl">
              Três valores, uma só forma de construir.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#9AA7B4]">
              Assente numa relação de confiança mútua com cada cliente e parceiro.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#1C2128] p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#F2A33C]/10 text-[#F2A33C]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-sora text-xl font-bold text-[#ECEFF2]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9AA7B4]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Porquê LSF recap */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#1C2128] py-24">
        <GridLines className="opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Porquê LSF</Eyebrow>
            <h2 className="mt-4 font-sora text-4xl font-bold leading-tight text-[#ECEFF2] sm:text-5xl">
              As vantagens que nos fazem escolher o aço leve.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lsfReasons.map((r, i) => (
              <Reveal key={r.label} delay={(i % 3) * 80}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-[#14181D] p-6">
                  <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#F2A33C]/10 text-[#F2A33C]">
                    <r.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-sora text-base font-bold text-[#ECEFF2]">
                      {r.stat} <span className="text-[#7C8B9C]">· {r.label}</span>
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#9AA7B4]">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials note + CTA */}
      <section className="bg-[#14181D] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1C2128] p-8 sm:p-12">
              <Quote className="absolute right-8 top-8 h-16 w-16 text-white/[0.04]" aria-hidden="true" />
              <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#F2A33C]/10 text-[#F2A33C]">
                <FileText className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <h2 className="mt-6 font-sora text-2xl font-bold text-[#ECEFF2] sm:text-3xl">
                Quer conhecer-nos melhor?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#9AA7B4]">
                Teremos todo o gosto em partilhar as credenciais da empresa, referências e detalhes
                técnicos do nosso trabalho em Light Steel Framing. Fale connosco e enviamos-lhe a
                informação que precisar para decidir com confiança.
              </p>
              <div className="mt-8">
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#F2A33C] px-7 py-4 font-sans text-base font-bold text-[#14181D] transition-colors duration-200 hover:bg-[#ffb651] cursor-pointer"
                >
                  Falar connosco
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              <p className="mt-6 text-sm text-[#7C8B9C]">
                Sediados em {brand.address}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
