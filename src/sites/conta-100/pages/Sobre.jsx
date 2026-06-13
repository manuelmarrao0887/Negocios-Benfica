import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, BadgeCheck, Plane, Layers, Users } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, team, values, stats } from '../data.jsx'

const trustPoints = [
  { icon: BadgeCheck, title: '12+ anos de experiência', text: 'Percurso sólido desde 2005, com experiência nacional e internacional.' },
  { icon: ShieldCheck, title: 'Contabilista Certificado (OCC)', text: 'Responsabilização técnica e inscrição na Ordem dos Contabilistas Certificados.' },
  { icon: Layers, title: 'Gama completa de serviços', text: 'Contabilidade, RH, fiscalidade, IRS e seguros — tudo no mesmo gabinete.' },
  { icon: Plane, title: 'Deslocação ao cliente', text: 'Vamos ter consigo, esteja onde estiver a sua empresa.' },
]

export default function Sobre() {
  usePageMeta(
    'Sobre | Conta 100% — Contabilidade',
    'A Conta 100% é um gabinete de contabilidade em Benfica, fundado em 2005, com Contabilista Certificado e deslocação ao cliente.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F4F8F6] px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-[#3AC2CF]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#0B7C88]">
              Sobre nós
            </span>
            <h1 className="mt-3 max-w-3xl font-jakarta text-5xl font-extrabold leading-[1.05] text-[#16363B] sm:text-6xl">
              Um gabinete de confiança, desde 2005.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#FFFFFF] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#16363B] to-[#0B7C88] p-10">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#3AC2CF]/20 blur-2xl" />
              <span className="font-jakarta text-7xl font-extrabold text-[#3AC2CF]">{brand.since}</span>
              <p className="mt-3 max-w-sm font-jakarta text-xl font-bold text-[#FFFFFF]">
                Ano em que a Conta 100% começou a cuidar das contas dos seus clientes.
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0B7C88] font-jakarta text-lg font-extrabold text-[#FFFFFF]">
                  BS
                </span>
                <div>
                  <p className="font-sans font-bold text-[#FFFFFF]">Bruno Santos</p>
                  <p className="text-sm text-[#a9c2b8]">Contabilista Certificado</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#51635C]">
                A Conta 100% — Contabilidade, Lda. é um gabinete de contabilidade, auditoria e consultoria
                fiscal fundado em {brand.since}. Ao longo de mais de 12 anos, construímos um percurso sólido,
                com experiência nacional e internacional ao serviço de empresas, PME, freelancers e
                particulares.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#51635C]">
                Sediados em Benfica, Lisboa, distinguimo-nos pela proximidade: uma equipa dinâmica que
                conhece cada cliente, com responsabilização de Contabilista Certificado e deslocação ao
                cliente sempre que necessário. Acreditamos que a contabilidade não serve só para cumprir
                obrigações — serve para fazer crescer o seu negócio.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-jakarta text-3xl font-extrabold text-[#16363B]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#51635C]/70">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust section (replaces testimonials — none fabricated) */}
      <section className="bg-[#F4F8F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#0B7C88]">
              Porque pode confiar
            </span>
            <h2 className="mt-3 font-jakarta text-4xl font-extrabold leading-tight text-[#16363B] sm:text-5xl">
              Razões para nos escolher.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#51635C]">
              Mais de uma década a apoiar negócios de vários setores, com rigor técnico e relação de
              proximidade.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} delay={(i % 4) * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-[#FFFFFF] p-7 ring-1 ring-[#16363B]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#0B7C88]/10 text-[#0B7C88]">
                    <t.icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-jakarta text-lg font-bold text-[#16363B]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51635C]">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#FFFFFF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#0B7C88]">
              A equipa
            </span>
            <h2 className="mt-3 font-jakarta text-4xl font-extrabold leading-tight text-[#16363B] sm:text-5xl">
              Uma equipa dinâmica ao seu dispor.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#51635C]">
              Profissionais dedicados à contabilidade, fiscalidade e gestão administrativa do seu negócio.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-[#16363B]/10 bg-[#F4F8F6] p-8">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#16363B] font-jakarta text-2xl font-extrabold text-[#3AC2CF]">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 font-jakarta text-xl font-bold text-[#16363B]">{m.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-wide text-[#0B7C88]">{m.role}</p>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#51635C]">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-[#51635C]/80">
              <Users className="h-4 w-4 text-[#0B7C88]" /> Equipa pequena e próxima, entre 2 e 10 pessoas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values + CTA */}
      <section className="bg-[#F4F8F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#0B7C88]">
              Os nossos valores
            </span>
            <h2 className="mt-3 font-jakarta text-4xl font-extrabold leading-tight text-[#16363B] sm:text-5xl">
              O que nos orienta.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-[#FFFFFF] p-8 ring-1 ring-[#16363B]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#0B7C88]/10 text-[#0B7C88]">
                    <v.icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-jakarta text-xl font-bold text-[#16363B]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51635C]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-14 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#0B7C88] px-8 py-4 font-sans text-base font-bold text-[#FFFFFF] transition-colors hover:bg-[#0A6A74] cursor-pointer"
            >
              Marcar uma reunião <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
