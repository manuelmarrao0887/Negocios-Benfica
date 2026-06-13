import { useState } from 'react'
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2, Factory } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand, sectors } from '../data.jsx'

const sectorNames = sectors.map((s) => s.title)

export default function Contacto() {
  usePageMeta(
    'Contacto | Fornoportugal — Pedir Orçamento',
    'Peça um orçamento para a construção, reconstrução ou reparação do seu forno refractário. Telefone, email e morada em Lisboa.',
  )
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    setor: '',
    mensagem: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const infoCards = [
    { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref, note: '+2 linhas' },
    { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
    { icon: MapPin, label: 'Sede', value: brand.address },
    { icon: Clock, label: 'Horário', value: brand.hours },
  ]

  return (
    <>
      {/* Page hero — compact dark navy band (keeps header nav legible at top) */}
      <section className="relative overflow-hidden bg-[#141B2E] px-6 pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#D11F2A]/18 blur-[110px]" />
          <div className="absolute -left-24 bottom-[-8rem] h-72 w-72 rounded-full bg-[#1F2D5E]/45 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-oswald text-sm font-medium uppercase tracking-[0.22em] text-[#FF8A8F]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-oswald text-5xl font-bold uppercase leading-[1.0] text-white sm:text-6xl">
              Falemos da sua obra.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C7CDDD]">
              Peça um orçamento ou esclareça uma dúvida técnica. A nossa equipa de engenharia responde
              o mais rápido possível.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards (LIGHT) */}
      <section className="bg-[#F7F5F1] pb-6 pt-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            return (
              <Reveal key={c.label} delay={i * 70}>
                <Tag
                  {...(c.href ? { href: c.href } : {})}
                  className={
                    'flex h-full flex-col gap-3 rounded-xl border border-[#1F2D5E]/12 bg-white p-6 shadow-sm shadow-[#1F2D5E]/5 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D11F2A]/50 hover:shadow-lg hover:shadow-[#1F2D5E]/10 cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-md bg-[#1F2D5E] text-white">
                    <c.icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="font-oswald text-xs font-medium uppercase tracking-[0.16em] text-[#5A6175]">
                      {c.label}
                      {c.note ? <span className="ml-2 text-[#D11F2A]">{c.note}</span> : null}
                    </p>
                    <p className="mt-1 font-oswald text-base font-semibold uppercase tracking-wide text-[#1B2540]">
                      {c.value}
                    </p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
        {/* extra phone lines */}
        <Reveal delay={120} className="mx-auto mt-5 max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-[#1F2D5E]/12 bg-white/70 px-6 py-4">
            <span className="font-oswald text-xs font-medium uppercase tracking-[0.16em] text-[#5A6175]">
              Outras linhas
            </span>
            {brand.phones.slice(1).map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="inline-flex items-center gap-2 font-oswald text-sm font-medium uppercase tracking-wide text-[#1F2D5E] transition-colors hover:text-[#D11F2A] cursor-pointer"
              >
                <Phone className="h-4 w-4" /> {p.display}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Form + map (LIGHT) */}
      <section className="bg-[#F7F5F1] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-2xl border border-[#1F2D5E]/12 bg-white p-8 shadow-sm shadow-[#1F2D5E]/5 sm:p-10">
              <h2 className="font-oswald text-2xl font-semibold uppercase tracking-wide text-[#1B2540]">
                Pedir orçamento
              </h2>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-[#D11F2A]/30 bg-[#F7F5F1] p-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#D11F2A] text-white">
                    <CheckCircle2 className="h-7 w-7" strokeWidth={2.2} />
                  </span>
                  <p className="font-oswald text-xl font-semibold uppercase tracking-wide text-[#1B2540]">
                    Pedido enviado!
                  </p>
                  <p className="text-sm text-[#5A6175]">
                    Obrigado pelo contacto. A nossa equipa analisará o seu pedido e responderá brevemente.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false)
                      setForm({ nome: '', empresa: '', email: '', telefone: '', setor: '', mensagem: '' })
                    }}
                    className="mt-2 font-oswald text-sm font-medium uppercase tracking-[0.1em] text-[#D11F2A] underline-offset-4 hover:underline cursor-pointer"
                  >
                    Enviar novo pedido
                  </button>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="nome" label="Nome" placeholder="O seu nome" value={form.nome} onChange={update('nome')} />
                    <Field id="empresa" label="Empresa" placeholder="Nome da empresa" value={form.empresa} onChange={update('empresa')} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="Email" type="email" placeholder="email@empresa.com" value={form.email} onChange={update('email')} />
                    <Field id="telefone" label="Telefone" type="tel" placeholder="+351 ..." value={form.telefone} onChange={update('telefone')} />
                  </div>
                  <div>
                    <label htmlFor="setor" className="mb-2 block font-oswald text-sm font-medium uppercase tracking-wide text-[#1B2540]">
                      Setor / Tipo de forno
                    </label>
                    <select
                      id="setor"
                      value={form.setor}
                      onChange={update('setor')}
                      className="w-full rounded-lg border border-[#1F2D5E]/20 bg-[#F7F5F1] px-4 py-3 font-sans text-[#1B2540] outline-none transition-colors focus:border-[#D11F2A] focus:ring-2 focus:ring-[#D11F2A]/25 cursor-pointer"
                    >
                      <option value="">Selecione um setor</option>
                      {sectorNames.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-oswald text-sm font-medium uppercase tracking-wide text-[#1B2540]">
                      Descrição da obra
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={update('mensagem')}
                      placeholder="Descreva a intervenção pretendida (construção, reparação, demolição...)"
                      className="w-full rounded-lg border border-[#1F2D5E]/20 bg-[#F7F5F1] px-4 py-3 font-sans text-[#1B2540] outline-none transition-colors placeholder:text-[#8a90a3] focus:border-[#D11F2A] focus:ring-2 focus:ring-[#D11F2A]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#D11F2A] px-7 py-3.5 font-oswald text-base font-semibold uppercase tracking-[0.06em] text-white transition-all duration-200 hover:bg-[#1F2D5E] hover:shadow-[0_10px_24px_-8px_rgba(31,45,94,0.6)] cursor-pointer"
                  >
                    <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    Enviar pedido
                  </button>
                  <p className="text-center text-xs text-[#7a8095]">
                    Formulário de demonstração — não envia dados. Para pedidos imediatos, ligue{' '}
                    <a href={brand.phoneHref} className="text-[#1F2D5E] underline-offset-2 hover:text-[#D11F2A] hover:underline cursor-pointer">
                      {brand.phoneDisplay}
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + sectors */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-2xl border border-[#1F2D5E]/12 shadow-sm shadow-[#1F2D5E]/5">
                <iframe
                  title="Mapa — Fornoportugal, Rua das Pedralvas 23A, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-2xl border border-[#1F2D5E]/12 bg-white p-7 shadow-sm shadow-[#1F2D5E]/5">
                <div className="flex items-center gap-3">
                  <Factory className="h-5 w-5 text-[#D11F2A]" />
                  <h3 className="font-oswald text-lg font-semibold uppercase tracking-wide text-[#1B2540]">
                    Trabalhamos para
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sectorNames.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[#1F2D5E]/15 px-3.5 py-1.5 font-oswald text-xs font-medium uppercase tracking-[0.08em] text-[#5A6175]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-oswald text-sm font-medium uppercase tracking-wide text-[#1B2540]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#1F2D5E]/20 bg-[#F7F5F1] px-4 py-3 font-sans text-[#1B2540] outline-none transition-colors placeholder:text-[#8a90a3] focus:border-[#D11F2A] focus:ring-2 focus:ring-[#D11F2A]/25"
      />
    </div>
  )
}
