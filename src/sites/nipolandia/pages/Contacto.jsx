import { useState } from 'react'
import { Phone, MapPin, Clock, Mail, Check, Send } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.addressShort },
  { icon: Clock, label: 'Horário', value: brand.hours, sub: brand.hoursWeekend },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Nipolândia — Climatização e Ventilação',
    'Fale com a Nipolândia em Lisboa. Telefone 21 387 2177, email geral@nipolandia.pt, Rua Jorge Barradas 49-B, Benfica.',
  )
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', tipo: 'Particular', mensagem: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <>
      {/* Page hero (deep-blue) */}
      <section className="relative overflow-hidden bg-[#0A2E5C] px-6 pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#2C7BE5]/25 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(#EAF1FB 1px, transparent 1px), linear-gradient(90deg, #EAF1FB 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#5BC8E8]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-archivo text-5xl font-extrabold leading-[1.04] tracking-tight text-[#EAF1FB] sm:text-6xl">
              Vamos falar do seu projeto.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c4d6ef]">
              Ligue-nos, envie um email ou deixe-nos uma mensagem. Atendemos particulares e empresas em
              Lisboa, com assistência técnica em todo o país.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-white pb-6 pt-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            return (
              <Reveal key={c.label} delay={i * 70}>
                <Tag
                  {...(c.href ? { href: c.href } : {})}
                  className={
                    'flex h-full flex-col gap-3 rounded-xl border border-[#0A2E5C]/10 bg-[#F2F6FC] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2C7BE5]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-[#0A2E5C] text-[#5BC8E8]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#5B7493]">{c.label}</p>
                    <p className="mt-1 font-archivo font-bold text-[#0A2E5C]">{c.value}</p>
                    {c.sub && <p className="mt-0.5 text-sm text-[#5B7493]">{c.sub}</p>}
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
        <Reveal>
          <p className="mx-auto mt-5 max-w-7xl px-6 text-sm font-semibold text-[#2C7BE5]">
            {brand.coverage}.
          </p>
        </Reveal>
      </section>

      {/* Form + map */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#0A2E5C]/10 bg-[#F2F6FC] p-8 sm:p-10">
              <h2 className="font-archivo text-2xl font-bold text-[#0A2E5C]">Pedir orçamento</h2>
              <p className="mt-2 text-sm text-[#5B7493]">
                Descreva o que precisa e entraremos em contacto consigo.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-[#0A2E5C] to-[#103a73] p-10 text-center text-[#EAF1FB]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#5BC8E8] text-[#0A2E5C]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-archivo text-xl font-bold">Mensagem enviada!</p>
                  <p className="text-sm text-[#9fbce6]">
                    Obrigado pelo seu contacto. A equipa Nipolândia responderá com a maior brevidade.
                  </p>
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
                    <Field
                      id="telefone"
                      label="Telefone"
                      type="tel"
                      placeholder="2XX XXX XXX"
                      value={form.telefone}
                      onChange={update('telefone')}
                    />
                  </div>
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="email@exemplo.pt"
                    value={form.email}
                    onChange={update('email')}
                  />
                  <div>
                    <label htmlFor="tipo" className="mb-2 block font-sans text-sm font-bold text-[#0A2E5C]">
                      Tipo de cliente
                    </label>
                    <select
                      id="tipo"
                      value={form.tipo}
                      onChange={update('tipo')}
                      className="w-full cursor-pointer rounded-lg border border-[#0A2E5C]/15 bg-white px-4 py-3 font-sans text-[#0A2E5C] outline-none transition-colors focus:border-[#2C7BE5] focus:ring-2 focus:ring-[#2C7BE5]/25"
                    >
                      <option>Particular</option>
                      <option>Empresa / Indústria</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#0A2E5C]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={update('mensagem')}
                      placeholder="Descreva o seu projeto ou a sua necessidade…"
                      className="w-full rounded-lg border border-[#0A2E5C]/15 bg-white px-4 py-3 font-sans text-[#0A2E5C] outline-none transition-colors placeholder:text-[#9aafce] focus:border-[#2C7BE5] focus:ring-2 focus:ring-[#2C7BE5]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2C7BE5] px-7 py-3.5 font-sans text-base font-bold text-white transition-colors hover:bg-[#1f63c4] cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#5B7493]">
                    Formulário de demonstração — não envia dados para nenhum servidor. Para um contacto
                    imediato, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-3xl border border-[#0A2E5C]/10">
              <iframe
                title="Mapa — Nipolândia, Rua Jorge Barradas 49-B, Lisboa"
                src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                className="h-full min-h-[460px] w-full"
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

function Field({ id, label, type = 'text', placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#0A2E5C]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#0A2E5C]/15 bg-white px-4 py-3 font-sans text-[#0A2E5C] outline-none transition-colors placeholder:text-[#9aafce] focus:border-[#2C7BE5] focus:ring-2 focus:ring-[#2C7BE5]/25"
      />
    </div>
  )
}
