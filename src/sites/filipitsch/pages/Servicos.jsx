import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Home as HomeIcon } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services } from '../data.jsx'

export default function Servicos() {
  usePageMeta('Serviços | Filipitsch — Terapia Activa', 'Fisioterapia, osteopatia, naturopatia, nutrição, psicomotricidade e mais — numa só clínica em Benfica.')

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#FBF9F2] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-nunito text-sm font-bold uppercase tracking-[0.15em] text-[#CBA35C]">
              As nossas especialidades
            </span>
            <h1 className="mt-3 max-w-3xl font-fraunces text-5xl font-semibold leading-[1.05] text-[#0E3B34] sm:text-6xl">
              Cuidados completos, da reabilitação à prevenção.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#46564f]">
              Dez áreas de especialidade que trabalham em conjunto para tratar a pessoa como um todo.
              Cada plano é desenhado à medida de quem nos procura.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 70}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#0E3B34]/10 bg-[#FBF9F2] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#CBA35C]/40 hover:bg-white hover:shadow-xl hover:shadow-[#0E3B34]/5">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#0E3B34] text-[#CBA35C]">
                    <s.icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <h2 className="mt-6 font-fraunces text-2xl font-semibold text-[#0E3B34]">{s.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5C6B66]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Home visits callout */}
      <section className="bg-[#FBF9F2] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#0E3B34] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#7FB39B]/15 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-nunito text-xs font-bold uppercase tracking-wider text-[#CBA35C]">
                    <HomeIcon className="h-4 w-4" /> Ao domicílio
                  </span>
                  <h2 className="mt-5 font-fraunces text-3xl font-semibold leading-tight text-[#F4F0E4] sm:text-4xl">
                    Não consegue deslocar-se? Nós vamos ter consigo.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#9fb8ac]">
                    Vários dos nossos serviços estão disponíveis em sua casa, com o mesmo rigor e
                    atenção de sempre. Fale connosco e encontramos a melhor solução.
                  </p>
                </div>
                <a
                  href={brand.phoneHref}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#CBA35C] px-7 py-4 font-nunito text-base font-bold text-[#0E3B34] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="h-5 w-5" /> Ligar agora
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-fraunces text-4xl font-semibold leading-tight text-[#0E3B34]">
              Não sabe qual o serviço de que precisa?
            </h2>
            <p className="mt-4 text-lg text-[#5C6B66]">
              Marque uma primeira avaliação. Ouvimos o seu caso e indicamos o melhor caminho.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E3B34] px-8 py-4 font-nunito text-base font-bold text-[#F4F0E4] transition-colors hover:bg-[#0a2c27] cursor-pointer"
            >
              Marcar avaliação <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
