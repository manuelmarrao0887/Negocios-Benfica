import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Check } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, treatments, journey } from '../data.jsx'

export default function Tratamentos() {
  usePageMeta(
    'Tratamentos | Nova Dentismed — Clínica Médico-Dentária em Lisboa',
    'Implantologia, ortodontia, estética dentária e branqueamento, próteses, endodontia, periodontologia, odontopediatria e higiene oral, no Campo Pequeno, Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F0F8F9] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#0E8E9E]">
              Os nossos tratamentos
            </span>
            <h1 className="mt-3 max-w-3xl font-outfit text-5xl font-bold leading-[1.05] text-[#0E2A33] sm:text-6xl">
              Cuidados completos para o seu sorriso.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3D5F68]">
              Da prevenção à reabilitação, reunimos todas as áreas da medicina dentária numa só
              clínica. Cada plano é desenhado à medida de quem nos procura.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Treatments — detailed list */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 70}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#0E2A33]/10 bg-[#F0F8F9] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#0E8E9E]/40 hover:bg-white hover:shadow-xl hover:shadow-[#0E8E9E]/5">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#0E8E9E] text-white">
                    <t.icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <h2 className="mt-6 font-outfit text-2xl font-semibold text-[#0E2A33]">{t.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#516E76]">{t.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-[#0E2A33]/10 pt-5">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-[#2F4F58]">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#3FB6A0]/20 text-[#0B7886]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Care journey */}
      <section className="bg-[#F0F8F9] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#0E8E9E]">
              Como funciona
            </span>
            <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#0E2A33] sm:text-5xl">
              Do primeiro contacto ao acompanhamento.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <Reveal key={j.step} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-[#0E2A33]/5">
                  <span className="font-outfit text-4xl font-bold text-[#3FB6A0]">{j.step}</span>
                  <h3 className="mt-3 font-outfit text-lg font-semibold text-[#0E2A33]">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#516E76]">{j.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-outfit text-4xl font-bold leading-tight text-[#0E2A33]">
              Não sabe de que tratamento precisa?
            </h2>
            <p className="mt-4 text-lg text-[#516E76]">
              Marque uma consulta de avaliação. Ouvimos o seu caso e indicamos o melhor caminho para si.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full bg-[#0E8E9E] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#0B7886] cursor-pointer"
              >
                Marcar avaliação <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#0E2A33]/15 px-8 py-4 font-sans text-base font-bold text-[#0E2A33] transition-colors hover:bg-[#0E8E9E]/5 cursor-pointer"
              >
                <Phone className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
