import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, team, values, stats } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | Value Advantage — Contabilidade e Gestão',
    'Conheça a Value Advantage: contabilidade, consultoria e apoio à gestão com mais de 20 anos de experiência, nas Avenidas Novas, em Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F5F8F6] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#B68A2E]">
              Quem somos
            </span>
            <h1 className="mt-3 max-w-3xl font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-[#102A23] sm:text-6xl">
              Um parceiro de confiança para a sua gestão.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                <img
                  src="https://picsum.photos/seed/value-advantage-1/800/1000"
                  alt="Equipa de contabilidade e gestão em reunião de trabalho"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[#102A23] px-6 py-5 text-white shadow-xl sm:block">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-[#B68A2E] text-[#B68A2E]" />
                  <span className="font-manrope text-2xl font-extrabold">{brand.rating}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#9DBDB1]">
                  {brand.reviews} avaliações Google
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#3F5249]">
                A <span className="font-bold text-[#102A23]">Value Advantage</span> é uma empresa que presta
                serviços de contabilidade, consultoria e apoio à gestão, apoiando os seus clientes no
                desenvolvimento de projetos e negócios, a partir das Avenidas Novas, em Lisboa.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#3F5249]">
                Distinguimo-nos pelo acompanhamento dedicado e permanente e por uma relação de proximidade
                que nos permite conhecer a fundo a realidade dos negócios dos clientes — suportada na
                confiança e numa atuação profissional e transparente.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-manrope text-3xl font-extrabold text-[#2E7D6A]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#6E827A]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values band */}
      <section className="bg-[#F5F8F6] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#B68A2E]">
              O que nos move
            </span>
            <h2 className="mt-3 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#102A23] sm:text-5xl">
              Os valores que nos definem.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[#102A23]/10 bg-white p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#2E7D6A]/10 text-[#2E7D6A]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-manrope text-xl font-bold text-[#102A23]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6E64]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#B68A2E]">
              A equipa
            </span>
            <h2 className="mt-3 font-manrope text-4xl font-extrabold leading-tight tracking-tight text-[#102A23] sm:text-5xl">
              Profissionais ao seu lado.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-[#102A23]/10 bg-[#F5F8F6] p-8">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#102A23] font-manrope text-2xl font-extrabold text-[#B68A2E]">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 font-manrope text-xl font-bold text-[#102A23]">{m.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-wide text-[#2E7D6A]">{m.role}</p>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5A6E64]">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section className="bg-[#F5F8F6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-[#102A23]/10 bg-white p-8 sm:p-10">
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#B68A2E]/12 text-[#9A741F]">
                <MapPin className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <h2 className="mt-5 font-manrope text-2xl font-extrabold text-[#102A23]">
                Onde nos encontra
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3F5249]">
                {brand.address}. No coração das Avenidas Novas, bem servido de transportes, a poucos
                minutos do Saldanha e do Campo Pequeno.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="text-center lg:text-left">
            <h2 className="font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#102A23] sm:text-4xl">
              Vamos falar sobre o seu negócio?
            </h2>
            <p className="mt-4 text-lg text-[#5A6E64]">
              Marque uma conversa connosco. Sem compromisso, apenas as respostas de que precisa.
            </p>
            <Link
              to={siteLink(slug, 'contacto')}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2E7D6A] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#256655] cursor-pointer"
            >
              Falar connosco <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
