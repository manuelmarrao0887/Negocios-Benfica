import { useState } from 'react'
import { MapPin, ArrowUpRight, Check, Building2, Gauge, ShieldCheck } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#945600]">
      <span className="h-px w-7 bg-[#F2A33C]" />
      {children}
    </span>
  )
}

function GridLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(20,24,29,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,24,29,0.045) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
  )
}

const reasons = [
  { icon: Gauge, text: 'Resposta com orientação técnica em LSF' },
  { icon: Building2, text: 'Residencial, comercial e industrial' },
  { icon: ShieldCheck, text: 'Sem compromisso, com transparência' },
]

const projectTypes = ['Residencial', 'Comercial', 'Industrial', 'Remodelação / Ampliação', 'Projeto / Consultoria', 'Outro']

const inputClass =
  'w-full rounded-xl border border-[#CBD2D9] bg-[#F7F8FA] px-4 py-3 font-sans text-[#14181D] outline-none transition-colors placeholder:text-[#5E6B78] focus:border-[#F2A33C] focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#F2A33C]/30'

export default function Contacto() {
  usePageMeta(
    'Contacto | Farol Vibrante — Construções LSF',
    'Peça o seu orçamento de construção em Light Steel Framing. Conte-nos o seu projeto — respondemos com orientação técnica.',
  )

  const [form, setForm] = useState({ nome: '', email: '', telefone: '', tipo: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F7F8FA] px-6 pt-36 pb-16">
        <GridLines />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-1/3 right-[16%] h-[100vh] w-[34rem] rotate-[16deg] bg-gradient-to-b from-[#F2A33C]/20 to-transparent blur-2xl" />
          <div className="absolute right-[12%] top-28 h-2 w-2 rounded-full bg-[#F2A33C] shadow-[0_0_20px_6px_rgba(242,163,60,0.45)]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-sora text-5xl font-bold leading-[1.04] text-[#14181D] sm:text-6xl">
              Peça o seu orçamento.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A5763]">
              Conte-nos o que tem em mente. Quanto mais nos disser sobre o seu projeto, mais precisa será
              a nossa resposta — com orientação técnica em Light Steel Framing e sem compromisso.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + address/map */}
      <section className="border-t border-[#E2E6EA] bg-[#EDF0F3] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Quote request form */}
          <Reveal>
            <div className="rounded-3xl border border-[#E2E6EA] bg-[#FFFFFF] p-8 shadow-sm shadow-[#14181D]/[0.04] sm:p-10">
              <h2 className="font-sora text-2xl font-bold text-[#14181D]">Pedido de orçamento</h2>
              <p className="mt-2 text-sm text-[#4A5763]">Preencha os campos abaixo e entraremos em contacto.</p>

              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-[#F2A33C]/40 bg-[#F7F8FA] p-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#F2A33C] text-[#14181D]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-sora text-xl font-bold text-[#14181D]">Pedido enviado!</p>
                  <p className="max-w-sm text-sm leading-relaxed text-[#4A5763]">
                    Obrigado pelo seu interesse na Farol Vibrante. Recebemos o seu pedido de orçamento e
                    entraremos em contacto consigo brevemente.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm({ nome: '', email: '', telefone: '', tipo: '', mensagem: '' })
                      setSent(false)
                    }}
                    className="mt-2 inline-flex items-center gap-2 rounded-lg border border-[#CBD2D9] bg-[#FFFFFF] px-5 py-2.5 font-sans text-sm font-bold text-[#14181D] transition-colors hover:bg-[#EDF0F3] cursor-pointer"
                  >
                    Enviar outro pedido
                  </button>
                </div>
              ) : (
                <form className="mt-7 space-y-5" onSubmit={onSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nome" className="mb-2 block font-sans text-sm font-bold text-[#14181D]">
                        Nome
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        value={form.nome}
                        onChange={update('nome')}
                        placeholder="O seu nome"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="mb-2 block font-sans text-sm font-bold text-[#14181D]">
                        Telefone <span className="font-normal text-[#5E6B78]">(opcional)</span>
                      </label>
                      <input
                        id="telefone"
                        type="tel"
                        value={form.telefone}
                        onChange={update('telefone')}
                        placeholder="Para contacto mais rápido"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-sans text-sm font-bold text-[#14181D]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder="email@exemplo.pt"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="tipo" className="mb-2 block font-sans text-sm font-bold text-[#14181D]">
                      Tipo de projeto
                    </label>
                    <select
                      id="tipo"
                      required
                      value={form.tipo}
                      onChange={update('tipo')}
                      className={inputClass + (form.tipo ? '' : ' text-[#5E6B78]')}
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="text-[#14181D]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#14181D]">
                      O seu projeto
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={update('mensagem')}
                      placeholder="Descreva a sua ideia, localização, área aproximada, prazos…"
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F2A33C] px-7 py-3.5 font-sans text-base font-bold text-[#14181D] transition-colors hover:bg-[#E2912A] cursor-pointer"
                  >
                    Enviar pedido de orçamento
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-center text-xs leading-relaxed text-[#5E6B78]">
                    Formulário de demonstração — ainda não está ligado a um servidor, pelo que nenhum
                    dado é enviado ou guardado.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Address + reasons + map */}
          <Reveal delay={120} className="flex flex-col gap-6">
            {/* Address card */}
            <div className="rounded-3xl border border-[#E2E6EA] bg-[#FFFFFF] p-8 shadow-sm shadow-[#14181D]/[0.04]">
              <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-[#F2A33C] text-[#14181D]">
                <MapPin className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-sora text-xl font-bold text-[#14181D]">Onde estamos</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4A5763]">{brand.address}</p>
              <p className="mt-1 text-sm text-[#5E6B78]">{brand.domain}</p>

              <ul className="mt-6 space-y-3 border-t border-[#E2E6EA] pt-6">
                {reasons.map((r) => (
                  <li key={r.text} className="flex items-center gap-3 text-sm text-[#4A5763]">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#F2A33C]/12 text-[#945600]">
                      <r.icon className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                    {r.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="flex-1 overflow-hidden rounded-3xl border border-[#E2E6EA] shadow-sm shadow-[#14181D]/[0.04]">
              <iframe
                title="Mapa — Farol Vibrante, R. Cmte. Henrique Maya 7C, Lisboa"
                src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                className="h-full min-h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
