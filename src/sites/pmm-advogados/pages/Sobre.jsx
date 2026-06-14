import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, team, values, stats } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'A Sociedade | Pereira Mouta Mendes & Associados',
    'Conheça a Pereira Mouta Mendes & Associados — sociedade de advogados independente e inovadora, e a sua equipa, em Lisboa.',
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
              A Sociedade
            </span>
            <h1 className="mt-3 max-w-3xl font-archivo text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
              Uma sociedade de advogados de referência, independente e inovadora.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Firm story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border-t-4 border-[#A6802E] bg-[#16203A] p-10">
              <Quote className="h-10 w-10 text-[#C9A227]" />
              <p className="mt-6 font-archivo text-2xl font-medium leading-snug text-white">
                “A nossa conduta e atividade são pautadas pelos mais elevados padrões de excelência,
                rigor, profissionalismo e ética.”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#A6802E] font-archivo text-lg font-bold text-[#16203A]">
                  FM
                </span>
                <div>
                  <p className="font-archivo font-bold text-white">Flávio Mouta Mendes</p>
                  <p className="text-sm text-[#AEB9CE]">Sócio e Administrador · Managing Partner</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#4A546B]">
                A Pereira Mouta Mendes &amp; Associados é uma sociedade de advogados que assume como
                compromisso a qualidade dos serviços prestados e a satisfação dos interesses dos seus
                Clientes.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#4A546B]">
                Privilegiamos uma abordagem direcionada para a satisfação e superação dos interesses,
                objetivos e pretensões dos nossos Clientes, aconselhando e fornecendo sempre as
                soluções que vão mais ao encontro das suas necessidades, sempre num quadro de
                proximidade e no cumprimento dos deveres deontológicos.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-archivo text-2xl font-bold text-[#1E3A5F] sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7A8398]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F5F6F8] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-archivo text-sm font-bold uppercase tracking-[0.18em] text-[#A6802E]">
              A nossa equipa
            </span>
            <h2 className="mt-3 font-archivo text-3xl font-bold leading-tight text-[#16203A] sm:text-4xl">
              Advogados ao serviço dos seus direitos.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5A6479]">
              Uma equipa de sócios e advogados associados, dedicada a acompanhar cada Cliente com
              rigor e proximidade.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col rounded-xl border border-[#16203A]/10 bg-white p-7">
                  <span className="grid h-16 w-16 place-items-center rounded-lg bg-[#1E3A5F] font-archivo text-xl font-bold text-[#C9A227]">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 font-archivo text-lg font-bold text-[#16203A]">{m.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#A6802E]">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-archivo text-3xl font-bold leading-tight text-[#16203A] sm:text-4xl">
              Os valores que nos orientam
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5A6479]">
              Princípios que pautam cada processo e cada relação com os nossos Clientes.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-xl bg-[#F5F6F8] p-8 ring-1 ring-[#16203A]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#A6802E]/12 text-[#A6802E]">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-archivo text-lg font-bold text-[#16203A]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6479]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Google rating reminder */}
          <Reveal delay={120} className="mt-14">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-xl border border-[#16203A]/10 bg-[#F5F6F8] px-8 py-8 text-center">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-[#C9A227] text-[#C9A227]" />
                ))}
              </div>
              <p className="font-archivo text-lg font-bold text-[#16203A]">
                {brand.rating} · {brand.reviews} avaliações no Google
              </p>
              <p className="text-sm text-[#5A6479]">
                A confiança de quem nos procura é o nosso melhor testemunho.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-12 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-md bg-[#1E3A5F] px-8 py-4 font-archivo text-base font-bold text-white transition-colors hover:bg-[#16203A] cursor-pointer"
            >
              Marcar uma reunião <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
