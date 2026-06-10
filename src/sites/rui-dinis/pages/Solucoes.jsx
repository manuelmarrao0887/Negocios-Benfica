import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Wrench, ArrowUpRight } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, solutions, consumables, process, sectors } from '../data.jsx'

function GridField({ className = '', tone = '#FFFFFF', opacity = 0.05 }) {
  return (
    <svg aria-hidden="true" className={className} width="100%" height="100%" style={{ color: tone, opacity }}>
      <defs>
        <pattern id="rd-grid-sol" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rd-grid-sol)" />
    </svg>
  )
}

export default function Solucoes() {
  usePageMeta(
    'Soluções | Rui Dinis, Lda. — Alta frequência, ultra-sons e assistência industrial',
    'Catálogo técnico: máquinas de alta frequência (HF/RF), ultra-sons, reparação de eletrónica industrial, componentes e consumíveis.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F4F6F9] px-6 pt-36 pb-16">
        <GridField className="absolute inset-0" tone="#10161D" opacity={0.05} />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#1A56DB]">
              Soluções & Equipamento
            </span>
            <h1 className="mt-3 max-w-3xl font-plex text-5xl font-bold leading-[1.05] text-[#10161D] sm:text-6xl">
              Catálogo de equipamento e assistência.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4C5A68]">
              Da máquina de alta frequência ao consumível de produção: reunimos comercialização,
              reparação e assistência técnica num único parceiro industrial.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Equipment catalogue — detailed list */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-5">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 80}>
                <div className="group grid items-start gap-6 rounded-xl border border-[#10161D]/10 bg-[#F4F6F9] p-7 transition-all duration-300 hover:border-[#1A56DB]/40 hover:bg-white hover:shadow-xl hover:shadow-[#10161D]/5 sm:grid-cols-[auto_1fr_auto] sm:p-8">
                  <span className="inline-grid h-16 w-16 place-items-center rounded-lg bg-[#10161D] text-white transition-colors duration-300 group-hover:bg-[#1A56DB]">
                    <s.icon className="h-8 w-8" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-plex text-2xl font-bold text-[#10161D]">{s.title}</h2>
                      <span className="rounded border border-[#1A56DB]/30 bg-[#1A56DB]/5 px-2 py-0.5 font-plexmono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1A56DB]">
                        {s.code}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#4C5A68]">{s.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-white px-2.5 py-1 font-plexmono text-[10px] uppercase tracking-[0.1em] text-[#4C5A68] ring-1 ring-[#10161D]/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={siteLink(slug, 'contacto')}
                    aria-label={`Pedir informação sobre ${s.title}`}
                    className="inline-grid h-11 w-11 shrink-0 place-items-center self-center rounded-md border border-[#10161D]/15 text-[#10161D] transition-colors duration-200 hover:border-[#1A56DB] hover:bg-[#1A56DB] hover:text-white cursor-pointer"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consumables */}
      <section className="bg-[#F4F6F9] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#2FA39B]">
              Consumíveis & Acessórios
            </span>
            <h2 className="mt-3 font-plex text-4xl font-bold leading-tight text-[#10161D] sm:text-5xl">
              Tudo o que a linha precisa.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4C5A68]">
              Para além do equipamento, fornecemos os consumíveis e acessórios que mantêm a produção a
              funcionar.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {consumables.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 70}>
                <div className="h-full rounded-xl border border-[#10161D]/10 bg-white p-7">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-md bg-[#2FA39B]/12 text-[#2FA39B]">
                    <c.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-plex text-lg font-bold text-[#10161D]">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4C5A68]">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment photo + process */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-[#10161D]/10">
              <img
                src="https://picsum.photos/seed/rui-dinis-2/900/760"
                alt="Equipamento industrial de soldadura de alta frequência em ambiente de produção"
                width="900"
                height="760"
                loading="lazy"
                className="aspect-[9/7.6] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10161D]/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded bg-[#10161D]/80 px-3 py-1.5 font-plexmono text-[11px] uppercase tracking-[0.16em] text-[#2FA39B] backdrop-blur">
                Equipamento HF · em produção
              </span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#1A56DB]">
                Como trabalhamos
              </span>
              <h2 className="mt-3 font-plex text-4xl font-bold leading-tight text-[#10161D] sm:text-5xl">
                Um processo claro, do diagnóstico ao pós-venda.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 80}>
                  <div className="flex items-start gap-4 rounded-xl border border-[#10161D]/10 bg-[#F4F6F9] p-5">
                    <span className="font-plexmono text-xl font-semibold text-[#1A56DB]">{p.step}</span>
                    <div>
                      <h3 className="font-plex text-lg font-bold text-[#10161D]">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#4C5A68]">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors quick band */}
      <section className="relative overflow-hidden bg-[#10161D] py-20 text-[#F4F6F9]">
        <GridField className="absolute inset-0" tone="#FFFFFF" opacity={0.04} />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-plex text-3xl font-bold text-white sm:text-4xl">Setores que servimos</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {sectors.map((s, i) => (
              <Reveal key={s.title} delay={(i % 5) * 50}>
                <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 font-plex text-sm font-semibold text-[#E4EAF1]">
                  <s.icon className="h-4 w-4 text-[#2FA39B]" strokeWidth={1.6} /> {s.title}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assistance CTA */}
      <section className="bg-[#F4F6F9] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-[#1A56DB] px-8 py-12 sm:px-14 sm:py-16">
              <GridField className="absolute inset-0" tone="#FFFFFF" opacity={0.09} />
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#2FA39B]/30 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-md bg-white/15 px-3.5 py-1.5 font-plexmono text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    <Wrench className="h-4 w-4" /> Assistência técnica
                  </span>
                  <h2 className="mt-5 font-plex text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Equipamento com avaria? Falamos a mesma linguagem técnica.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-white/85">
                    Diagnóstico, reparação e manutenção de alta frequência, ultra-sons e eletrónica
                    industrial. Peça assistência ou um orçamento sem compromisso.
                  </p>
                </div>
                <Link
                  to={siteLink(slug, 'contacto')}
                  className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-7 py-4 font-plex text-base font-bold text-[#1A56DB] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="h-5 w-5" /> Pedir assistência
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-plex text-4xl font-bold leading-tight text-[#10161D]">
              Não encontrou o que procura?
            </h2>
            <p className="mt-4 text-lg text-[#4C5A68]">
              Trabalhamos um nicho específico. Diga-nos qual o seu equipamento ou aplicação e
              indicamos a melhor solução.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-md bg-[#10161D] px-8 py-4 font-plex text-base font-bold text-white transition-colors hover:bg-[#1A56DB] cursor-pointer"
            >
              Falar com a equipa <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
