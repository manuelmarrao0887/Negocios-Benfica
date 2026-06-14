import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin, Quote, ShieldCheck } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, values, stats, audiences } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | Factiva — Contabilidade e Gestão, Lisboa',
    'Conheça a Factiva, gabinete de contabilidade e gestão na Avenida da República, em Lisboa, ao serviço de empresas e particulares desde 1989.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F4F7FB] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#18A07A]">
              Quem somos
            </span>
            <h1 className="mt-3 max-w-3xl font-jakarta text-5xl font-extrabold leading-[1.05] text-[#14233B] sm:text-6xl">
              Mais de três décadas a tratar das suas contas.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#14233B] to-[#1d3559] p-10">
              <Quote className="h-10 w-10 text-[#3AA0E6]" />
              <p className="mt-6 font-jakarta text-2xl font-semibold leading-snug text-white">
                “Acreditamos que uma boa contabilidade não é só cumprir prazos — é dar tranquilidade a
                quem nos confia o seu negócio.”
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#9DC0E6]">
                A nossa forma de trabalhar
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <div className="font-jakarta text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#90A2BF]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#46566F]">
                A Factiva — Gabinete de Contabilidade e Gestão, Lda. está sediada na Avenida da
                República, no Saldanha, e tem atividade desde {brand.since}. Ao longo destes anos,
                construímos uma carteira de clientes que valoriza a proximidade, o rigor e a confiança.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#46566F]">
                Trabalhamos com sociedades, empresários em nome individual e particulares, tratando da
                contabilidade financeira, das obrigações fiscais e do apoio à gestão. Acompanhamos cada
                cliente de perto, com tempo para ouvir e explicar — porque por trás de cada número há
                uma decisão a tomar.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-[#14233B]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#18A07A]/12 text-[#18A07A]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="font-semibold">{brand.address}</span>
                </div>
                <div className="flex items-center gap-3 text-[#14233B]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#2563B0]/12 text-[#2563B0]">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <span className="font-semibold">NIF {brand.nif} · Sociedade por quotas</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-[#F4F7FB] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#18A07A]">
              Para quem trabalhamos
            </span>
            <h2 className="mt-3 font-jakarta text-4xl font-extrabold leading-tight text-[#14233B] sm:text-5xl">
              Ao lado de quem faz o país acontecer.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-[#14233B]/10 bg-white p-8">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#14233B] text-[#3AA0E6]">
                    <a.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-jakarta text-xl font-bold text-[#14233B]">{a.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5C6A82]">{a.text}</p>
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
            <h2 className="font-jakarta text-4xl font-extrabold leading-tight text-[#14233B] sm:text-5xl">
              O que nos distingue
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5C6A82]">
              Princípios que orientam o trabalho do gabinete, todos os dias.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl bg-[#F4F7FB] p-7 ring-1 ring-[#14233B]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#2563B0]/10 text-[#2563B0]">
                    <v.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-jakarta text-lg font-bold text-[#14233B]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6A82]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / rating (real Google rating, no fabricated review text) */}
      <section className="bg-[#F4F7FB] pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-[#14233B]/10 bg-white px-8 py-12 text-center">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-7 w-7 fill-[#E0A11B] text-[#E0A11B]" />
                ))}
              </div>
              <p className="font-jakarta text-3xl font-extrabold text-[#14233B]">
                {brand.rating} <span className="text-xl font-bold text-[#5C6A82]">/ 5 no Google</span>
              </p>
              <p className="max-w-xl text-[15px] leading-relaxed text-[#5C6A82]">
                A confiança de quem trabalha connosco reflete-se na nossa avaliação. Continuamos a
                trabalhar todos os dias para merecer essa confiança.
              </p>
              <Link
                to={siteLink(slug, 'contacto')}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#2563B0] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#1d4f8f] cursor-pointer"
              >
                Falar com a Factiva <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
