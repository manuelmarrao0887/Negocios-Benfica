import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, team, values, stats } from '../data.jsx'

export default function Sobre() {
  usePageMeta('Sobre | Filipitsch — Terapia Activa', 'Conheça Bernardo Filipitsch e a equipa multidisciplinar da Terapia Activa, em Benfica.')

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#FBF9F2] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-nunito text-sm font-bold uppercase tracking-[0.15em] text-[#CBA35C]">
              Quem somos
            </span>
            <h1 className="mt-3 max-w-3xl font-fraunces text-5xl font-semibold leading-[1.05] text-[#0E3B34] sm:text-6xl">
              Uma clínica nascida da paixão por cuidar.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Founder story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E3B34] to-[#17453c] p-10">
              <Quote className="h-10 w-10 text-[#CBA35C]" />
              <p className="mt-6 font-fraunces text-2xl font-medium leading-snug text-[#F4F0E4]">
                “Trabalhamos para que a saúde seja, verdadeiramente, um direito de todos — com tempo,
                escuta e uma abordagem que trata a pessoa por inteiro.”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#CBA35C] font-fraunces text-lg font-bold text-[#0E3B34]">
                  BF
                </span>
                <div>
                  <p className="font-nunito font-bold text-[#F4F0E4]">Bernardo Filipitsch</p>
                  <p className="text-sm text-[#9fb8ac]">Fundador · Terapeuta Manual & Osteopatia</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#46564f]">
                A Terapia Activa abriu portas em {brand.since}, em Benfica, mas a sua história começa muito
                antes. Bernardo Filipitsch dedica-se há mais de duas décadas à terapia manual e à
                osteopatia, acompanhando desde atletas de alta competição a bebés e idosos.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#46564f]">
                Dessa experiência nasceu uma certeza: o corpo funciona como um todo. Por isso reunimos
                fisioterapia, osteopatia, naturopatia, nutrição, psicomotricidade e outras áreas numa
                equipa que comunica e trabalha em conjunto — sempre à volta de si.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-fraunces text-3xl font-bold text-[#0E3B34]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7a8a82]">
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
      <section className="bg-[#FBF9F2] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-nunito text-sm font-bold uppercase tracking-[0.15em] text-[#CBA35C]">
              A equipa
            </span>
            <h2 className="mt-3 font-fraunces text-4xl font-semibold leading-tight text-[#0E3B34] sm:text-5xl">
              Profissionais ao seu inteiro dispor.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-[#0E3B34]/10 bg-white p-8">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#0E3B34] font-fraunces text-2xl font-semibold text-[#CBA35C]">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 font-fraunces text-xl font-semibold text-[#0E3B34]">{m.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-wide text-[#CBA35C]">{m.role}</p>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5C6B66]">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-[#FBF9F2] p-8 ring-1 ring-[#0E3B34]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#7FB39B]/15 text-[#0E3B34]">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-fraunces text-xl font-semibold text-[#0E3B34]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6B66]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-14 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#0E3B34] px-8 py-4 font-nunito text-base font-bold text-[#F4F0E4] transition-colors hover:bg-[#0a2c27] cursor-pointer"
            >
              Marcar a sua consulta <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
