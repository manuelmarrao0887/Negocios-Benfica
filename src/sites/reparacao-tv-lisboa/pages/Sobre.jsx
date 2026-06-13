import { Link } from 'react-router-dom'
import { ArrowRight, Quote, GraduationCap, Building2, Wrench, ShieldCheck } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, values, stats } from '../data.jsx'

const timeline = [
  {
    icon: GraduationCap,
    year: 'Formação',
    title: 'Escola Técnica Telaxis',
    desc: 'Formação em eletrónica analógica, rádio, TV a cores e eletrónica digital — a base de toda a atividade.',
  },
  {
    icon: Building2,
    year: '1990',
    title: 'Técnico na Samsung Electrónica Portuguesa',
    desc: 'Início de carreira como Técnico de Eletrónica, com contacto direto com a tecnologia dos televisores.',
  },
  {
    icon: Wrench,
    year: 'Hoje',
    title: '35 anos a reparar televisores',
    desc: 'Assistência técnica dedicada em exclusivo à reparação de TVs, com atendimento pessoal e garantia.',
  },
]

export default function Sobre() {
  usePageMeta(
    'Sobre | Reparação TV Lisboa',
    'Narciso Silva, técnico de eletrónica com 35 anos de experiência e início de carreira na Samsung. Atendimento pessoal e garantia a sério.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-white px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full bg-[#18C29C]/12 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#1E66D6]">
              Sobre
            </span>
            <h1 className="mt-3 max-w-3xl font-space text-4xl font-bold leading-[1.05] text-[#0F1B2D] sm:text-5xl">
              35 anos de eletrónica, dedicados aos televisores.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#51607A]">
              Por trás da Reparação TV Lisboa está Narciso Silva, técnico de eletrónica que fez da
              reparação de televisores a sua especialidade de uma vida.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder story + quote */}
      <section className="border-t border-[#E3E9F2] bg-[#F4F7FB] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#E3E9F2] bg-gradient-to-br from-[#F2F7FF] to-white p-10">
              <Quote className="h-10 w-10 text-[#2E7DF6]" />
              <p className="mt-6 font-space text-2xl font-semibold leading-snug text-[#0F1B2D]">
                “Quando se fala em garantia, não se pode negar a mesma em caso algum.”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-[#E3E9F2] pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#2E7DF6] font-space text-lg font-bold text-white">
                  NS
                </span>
                <div>
                  <p className="font-sans font-bold text-[#0F1B2D]">Narciso Silva</p>
                  <p className="text-sm text-[#51607A]">Técnico de Eletrónica</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#51607A]">
                A carreira de Narciso Silva começou em <span className="text-[#0F1B2D]">1990</span>, como
                Técnico de Eletrónica na <span className="text-[#0F1B2D]">Samsung Electrónica Portuguesa</span>.
                Antes disso, formou-se na Escola Técnica Telaxis, em eletrónica analógica, rádio, TV a cores
                e eletrónica digital — uma base sólida que continua a fazer a diferença em cada reparação.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#51607A]">
                Foram <span className="text-[#0F1B2D]">35 anos</span> a aprofundar o conhecimento dos
                televisores — das primeiras TVs a cores aos painéis LED e Smart TV de hoje. Dessa
                experiência nasceu uma forma de trabalhar muito própria: atendimento pessoal, explicação
                clara da avaria e do custo, e apoio técnico mesmo por telefone.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-space text-3xl font-bold text-[#2E7DF6]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7A8AA3]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#1E66D6]">
              Percurso
            </span>
            <h2 className="mt-3 font-space text-3xl font-bold leading-tight text-[#0F1B2D] sm:text-4xl">
              De aprendiz de eletrónica a especialista em TVs.
            </h2>
          </Reveal>
          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-[#2E7DF6]/30 to-transparent md:block" />
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 110}>
                <div className="h-full rounded-2xl border border-[#E3E9F2] bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#EAF1FE] text-[#2E7DF6] ring-1 ring-[#2E7DF6]/15">
                      <t.icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="font-space text-sm font-bold uppercase tracking-wider text-[#0B8C73]">
                      {t.year}
                    </span>
                  </div>
                  <h3 className="mt-5 font-space text-lg font-bold leading-snug text-[#0F1B2D]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51607A]">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + recognition band */}
      <section className="border-y border-[#E3E9F2] bg-[#F4F7FB] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#E3E9F2]">
              <img
                src="https://picsum.photos/seed/reparacao-tv-7/900/700"
                alt="Bancada de eletrónica com ferramentas e equipamento de medição"
                width="900"
                height="700"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/55 to-[#0B1220]/10" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#18C29C]/20 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#46D9BC] ring-1 ring-[#18C29C]/40">
                  <ShieldCheck className="h-4 w-4" /> 100% recomendado · Facebook
                </span>
                <p className="mt-3 font-space text-xl font-bold text-white">
                  Reparação feita com método e instrumentação.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#0B8C73]">
                Reconhecimento
              </span>
              <h2 className="mt-3 font-space text-3xl font-bold leading-tight text-[#0F1B2D] sm:text-4xl">
                Confiança construída a cada reparação.
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#51607A]">
                No Facebook, a Reparação TV Lisboa tem uma avaliação de{' '}
                <span className="text-[#0F1B2D]">100% recomendado</span>, com base em 6 avaliações de
                clientes. É o reflexo de um atendimento próximo e de uma garantia que se cumpre.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E3E9F2] bg-white p-6">
                  <div className="font-space text-3xl font-bold text-[#2E7DF6]">100%</div>
                  <p className="mt-1 text-sm text-[#51607A]">recomendado no Facebook</p>
                </div>
                <div className="rounded-2xl border border-[#E3E9F2] bg-white p-6">
                  <div className="font-space text-3xl font-bold text-[#2E7DF6]">6</div>
                  <p className="mt-1 text-sm text-[#51607A]">avaliações de clientes</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy / values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#1E66D6]">
              Como trabalho
            </span>
            <h2 className="mt-3 font-space text-3xl font-bold leading-tight text-[#0F1B2D] sm:text-4xl">
              A filosofia por trás de cada reparação.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[#E3E9F2] bg-white p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#2E7DF6]/10 text-[#2E7DF6]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-space text-xl font-bold text-[#0F1B2D]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51607A]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-14 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-lg bg-[#2E7DF6] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#1f6fe8] cursor-pointer"
            >
              Falar com o técnico <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
