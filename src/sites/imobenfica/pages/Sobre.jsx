import { Link } from 'react-router-dom'
import { ArrowRight, Quote, ShieldCheck, Star } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, team, partners, timeline, purpose, stats } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | ImoBenfica by Marta Pereira',
    'Conheça Marta Pereira e a ImoBenfica — agência imobiliária de referência em Benfica, com mais de 20 anos de experiência.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#14233B] px-6 pt-20 pb-16 text-[#F6F3EC]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#B7892E]">
              A marca pessoal
            </span>
            <h1 className="mt-3 max-w-3xl font-playfair text-5xl font-semibold leading-[1.05] sm:text-6xl">
              ImoBenfica <span className="text-[#B7892E]">by Marta Pereira</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#bcc6d4]">
              Mais do que uma agência, uma pessoa de confiança. Marta Pereira construiu a ImoBenfica
              sobre o conhecimento profundo de Benfica e um compromisso simples: tratar cada cliente como único.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder story — Marta Pereira */}
      <section className="bg-[#FFFFFF] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-[#B7892E]/30 bg-gradient-to-br from-[#1b2c45] to-[#14233B] p-10 text-[#F6F3EC]">
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#B7892E]/10 blur-2xl" />
              <Quote className="relative h-10 w-10 text-[#B7892E]" />
              <p className="relative mt-6 font-playfair text-2xl font-medium leading-snug">
                “{brand.mission}”
              </p>
              <div className="relative mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[#B7892E] bg-[#14233B] font-playfair text-lg font-bold text-[#B7892E]">
                  MP
                </span>
                <div>
                  <p className="font-sans font-bold text-[#F6F3EC]">Marta Pereira</p>
                  <p className="text-sm text-[#9aa6b6]">Gerente · Consultora Imobiliária</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#B7892E]">
                Quem é a Marta
              </span>
              <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-[#14233B] sm:text-5xl">
                Mais de 20 anos a fazer de Benfica a sua especialidade.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#46505f]">
                Marta Pereira dedica-se há mais de duas décadas ao mercado imobiliário e é o rosto da
                ImoBenfica. Conhece Benfica e São Domingos de Benfica como ninguém — cada rua, cada
                prédio, cada oportunidade — e transformou esse conhecimento numa agência reconhecida na zona.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#46505f]">
                À frente da gestão da agência, mantém o foco no que sempre a distinguiu: proximidade,
                rigor e total transparência em cada negócio.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-playfair text-2xl font-bold text-[#14233B]">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#8a93a3]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="bg-[#F6F3EC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#B7892E]">
              O nosso percurso
            </span>
            <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-[#14233B] sm:text-5xl">
              De 2020 ao Método Imobenfica.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 100}>
                <div className="relative h-full rounded-xl border border-[#14233B]/10 bg-[#FFFFFF] p-8">
                  <span className="font-playfair text-5xl font-bold text-[#B7892E]/30">{t.year}</span>
                  <h3 className="mt-3 font-playfair text-xl font-semibold text-[#14233B]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6577]">{t.text}</p>
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
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#B7892E]">
              A equipa
            </span>
            <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-[#14233B] sm:text-5xl">
              Quem o acompanha em cada passo.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div
                  className={
                    'flex h-full gap-6 rounded-xl border bg-[#F6F3EC] p-8 ' +
                    (m.lead ? 'border-[#B7892E]/40 ring-1 ring-[#B7892E]/20' : 'border-[#14233B]/10')
                  }
                >
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-[#14233B] font-playfair text-2xl font-semibold text-[#B7892E]">
                    {m.initials}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-playfair text-xl font-semibold text-[#14233B]">{m.name}</h3>
                      {m.lead && (
                        <span className="rounded-full bg-[#B7892E]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#a2792a]">
                          Gerente
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#B7892E]">{m.role}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#5A6577]">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-[#F6F3EC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {purpose.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-xl bg-[#FFFFFF] p-8 ring-1 ring-[#14233B]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#14233B] text-[#B7892E]">
                    <p.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-playfair text-xl font-semibold text-[#14233B]">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5A6577]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#FFFFFF] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#B7892E]">
              Parcerias de confiança
            </span>
            <h2 className="mt-3 font-playfair text-4xl font-semibold leading-tight text-[#14233B] sm:text-5xl">
              Apoio jurídico e financeiro, sempre ao seu lado.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className="flex h-full gap-6 rounded-xl border border-[#14233B]/10 bg-[#F6F3EC] p-8">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#14233B] text-[#B7892E]">
                    <p.icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#B7892E]">{p.title}</p>
                    <h3 className="mt-1 font-playfair text-xl font-semibold text-[#14233B]">{p.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#5A6577]">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMI / trust band + CTA */}
      <section className="bg-[#14233B] py-20 text-[#F6F3EC]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B7892E]/40 bg-white/5 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#B7892E]">
              <ShieldCheck className="h-4 w-4" /> Licença {brand.ami}
            </span>
            <h2 className="mt-5 font-playfair text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              A agência de referência em Benfica.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#bcc6d4]">
              Atividade regulada e total segurança jurídica em cada transação. É essa a nossa visão —
              e o nosso compromisso consigo.
            </p>
            <div className="mt-5 flex justify-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-[#B7892E] text-[#B7892E]" />
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-md bg-[#B7892E] px-8 py-4 font-sans text-base font-bold text-[#14233B] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
            >
              Falar com a Marta <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
