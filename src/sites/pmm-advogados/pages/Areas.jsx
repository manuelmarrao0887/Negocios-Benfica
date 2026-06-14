import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Scale } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, areas } from '../data.jsx'

export default function Areas() {
  usePageMeta(
    'Áreas de Prática | Pereira Mouta Mendes & Associados',
    'Direito societário e comercial, trabalho, fiscal, família e sucessões, imobiliário, penal, insolvência e mais. Assessoria jurídica em Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#16203A] px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-16 h-80 w-80 rounded-full bg-[#1E3A5F]/50 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#A6802E]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-archivo text-sm font-bold uppercase tracking-[0.18em] text-[#C9A227]">
              Áreas de Prática
            </span>
            <h1 className="mt-3 max-w-3xl font-archivo text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
              Prestamos assessoria e aconselhamento em várias áreas do Direito.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#AEB9CE]">
              Serviços jurídicos personalizados nas diferentes áreas do Direito e setores de
              atividade, num quadro de proximidade com o Cliente, atendendo às suas especificidades.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Areas grid */}
      <section className="bg-[#F5F6F8] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 70}>
                <div className="group flex h-full flex-col rounded-xl border border-[#16203A]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#A6802E]/40 hover:shadow-xl hover:shadow-[#16203A]/5">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-lg bg-[#1E3A5F] text-[#C9A227]">
                    <a.icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <h2 className="mt-6 font-archivo text-xl font-bold text-[#16203A]">{a.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5A6479]">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors callout */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-[#16203A] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#1E3A5F]/50 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 font-archivo text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                    <Scale className="h-4 w-4" /> Aconselhamento transversal
                  </span>
                  <h2 className="mt-5 font-archivo text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Não encontra a sua questão nesta lista? Fale connosco.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#AEB9CE]">
                    Atuamos nas diferentes áreas do Direito e setores de atividade. Exponha-nos a sua
                    situação e indicaremos a melhor forma de o ajudar.
                  </p>
                </div>
                <a
                  href={brand.phoneHref}
                  className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#A6802E] px-7 py-4 font-archivo text-base font-bold text-[#16203A] transition-all duration-200 hover:bg-[#C9A227] cursor-pointer"
                >
                  <Phone className="h-5 w-5" /> {brand.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F6F8] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-archivo text-3xl font-bold leading-tight text-[#16203A]">
              Precisa de aconselhamento jurídico?
            </h2>
            <p className="mt-4 text-lg text-[#5A6479]">
              Marque uma reunião. Analisamos o seu caso e definimos, consigo, a estratégia mais
              adequada.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-md bg-[#1E3A5F] px-8 py-4 font-archivo text-base font-bold text-white transition-colors hover:bg-[#16203A] cursor-pointer"
            >
              Marcar reunião <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
