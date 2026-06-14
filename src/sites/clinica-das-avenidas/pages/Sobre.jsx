import { Link } from 'react-router-dom'
import { ArrowRight, Quote, BadgeCheck, MapPin } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, team, values, stats } from '../data.jsx'

export default function Sobre() {
  usePageMeta(
    'Sobre | Clínica das Avenidas — Dr. Rui Delfim',
    'Conheça a Clínica das Avenidas e a sua equipa de médicos dentistas — Dr. Rui Delfim e especialistas em periodontologia, ortodontia e estética, no centro de Lisboa.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F2F6FC] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157B7F]">
              Quem somos
            </span>
            <h1 className="mt-3 max-w-3xl font-outfit text-5xl font-bold leading-[1.05] text-[#102438] sm:text-6xl">
              Uma clínica de excelência no centro de Lisboa.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Clinic story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E2A33] to-[#11505A] p-10">
              <Quote className="h-10 w-10 text-[#36B0A6]" />
              <p className="mt-6 font-outfit text-2xl font-medium leading-snug text-white">
                “O nosso cuidado com os pacientes — desde a marcação da consulta ao acompanhamento
                pós-tratamento — reflecte-se na qualidade de toda a equipa que temos à sua disposição.”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#36B0A6] font-outfit text-lg font-bold text-[#0E2A33]">
                  RD
                </span>
                <div>
                  <p className="font-sans font-bold text-white">Dr. Rui Delfim</p>
                  <p className="text-sm text-[#9fc0cb]">Implantologia &amp; Cirurgia · OM 30450</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#4A6076]">
                A Clínica das Avenidas — Dr. Rui Delfim dispõe de todas as especialidades na área da
                medicina dentária e dos cuidados de saúde oral. Equipada com as tecnologias mais
                modernas e alguns dos melhores médicos e especialistas, é uma clínica de excelência,
                moderna e inovadora, no centro de Lisboa.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#4A6076]">
                Cuidamos dos nossos pacientes em todo o processo, da primeira avaliação ao
                acompanhamento depois do tratamento. Reunimos implantologia, periodontologia,
                ortodontia, estética e muitas outras áreas numa equipa que trabalha em conjunto, sempre
                à volta de si e da sua família.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-outfit text-2xl font-bold text-[#102438] sm:text-3xl">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7388a0]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Photo + location strip */}
      <section className="bg-[#F2F6FC] py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="h-full overflow-hidden rounded-3xl">
              <img
                src="https://picsum.photos/seed/clinica-das-avenidas-2/1200/700"
                alt="Instalações da Clínica das Avenidas em Lisboa"
                className="h-full min-h-[260px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-[#11707A] p-8 text-white">
              <MapPin className="h-8 w-8 text-[#9fe7e0]" />
              <h3 className="mt-4 font-outfit text-2xl font-semibold">No coração de Lisboa</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#cfeae7]">
                {brand.address}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#cfeae7]">
                Metro (Linha Amarela) e comboio na estação de Entrecampos, com estacionamento no Piso -1.
              </p>
              <Link
                to={siteLink(slug, 'contacto')}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#11707A] transition-colors hover:bg-[#eafbf9] cursor-pointer"
              >
                Como chegar <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team — real */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157B7F]">
              A equipa
            </span>
            <h2 className="mt-3 font-outfit text-4xl font-bold leading-tight text-[#102438] sm:text-5xl">
              Médicos dentistas ao seu dispor.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#51677d]">
              Profissionais inscritos na Ordem dos Médicos Dentistas, cada um na sua especialidade.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-[#102438]/10 bg-[#F2F6FC] p-7">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#11707A] font-outfit text-2xl font-semibold text-white">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 font-outfit text-lg font-semibold text-[#102438]">{m.name}</h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#157B7F]">{m.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#51677d]">{m.bio}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7388a0]">
                    <BadgeCheck className="h-4 w-4 text-[#11707A]" /> {m.reg}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F2F6FC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-white p-8 ring-1 ring-[#102438]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#36B0A6]/15 text-[#11707A]">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-outfit text-xl font-semibold text-[#102438]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#51677d]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-14 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#11707A] px-8 py-4 font-sans text-base font-bold text-white transition-colors hover:bg-[#0E5A62] cursor-pointer"
            >
              Marcar a sua consulta <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
