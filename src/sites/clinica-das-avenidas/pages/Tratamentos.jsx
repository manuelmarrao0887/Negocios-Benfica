import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Moon } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, treatments, technology } from '../data.jsx'

export default function Tratamentos() {
  usePageMeta(
    'Tratamentos | Clínica das Avenidas — Dr. Rui Delfim',
    'Implantologia, ortodontia, reabilitação oral, estética, endodontia, periodontologia e mais — medicina dentária completa em Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F2F6FC] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157B7F]">
              Os nossos tratamentos
            </span>
            <h1 className="mt-3 max-w-3xl font-outfit text-5xl font-bold leading-[1.05] text-[#102438] sm:text-6xl">
              Medicina dentária completa, da prevenção à reabilitação.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A6076]">
              Todas as especialidades da medicina dentária reunidas numa só clínica, com tecnologia
              moderna e uma equipa que acompanha cada caso de perto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Treatments grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 70}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#102438]/10 bg-[#F2F6FC] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F9A9E]/40 hover:bg-white hover:shadow-xl hover:shadow-[#102438]/5">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#11707A] text-white">
                    <s.icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <h2 className="mt-6 font-outfit text-2xl font-semibold text-[#102438]">{s.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#51677d]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology band */}
      <section className="bg-[#F2F6FC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157B7F]">
              Tecnologia
            </span>
            <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#102438] sm:text-5xl">
              Equipamento moderno ao serviço do seu sorriso.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technology.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-[#102438]/10 bg-white p-7">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#36B0A6]/15 text-[#11707A]">
                    <t.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-outfit text-lg font-semibold text-[#102438]">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#51677d]">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sedation callout — real differentiator */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#0E2A33] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#1F9A9E]/20 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#36B0A6]">
                    <Moon className="h-4 w-4" /> Sem medo do dentista
                  </span>
                  <h2 className="mt-5 font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Anestesia geral e sedação consciente.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#9fc0cb]">
                    Pânico de ir ao dentista? Realizamos tratamentos com sedação consciente ou anestesia
                    geral, para que possa cuidar do seu sorriso com tranquilidade. Fale connosco e
                    conheça as opções.
                  </p>
                </div>
                <a
                  href={brand.phoneHref}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#36B0A6] px-7 py-4 font-sans text-base font-bold text-[#0E2A33] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="h-5 w-5" /> Ligar agora
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2F6FC] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-outfit text-4xl font-bold leading-tight text-[#102438]">
              Não sabe de que tratamento precisa?
            </h2>
            <p className="mt-4 text-lg text-[#51677d]">
              Marque uma primeira avaliação. Vemos o seu caso e indicamos o melhor plano para si.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#11707A] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#0E5A62] cursor-pointer"
            >
              Marcar avaliação <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
