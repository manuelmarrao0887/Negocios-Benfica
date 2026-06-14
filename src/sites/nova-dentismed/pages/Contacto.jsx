import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, Send } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: brand.mobileDisplay, href: brand.whatsapp, external: true },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.address, href: `https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}`, external: true },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Nova Dentismed — Clínica Médico-Dentária em Lisboa',
    'Marque a sua consulta na Nova Dentismed, no Campo Pequeno. Telefone, WhatsApp, email, morada e horário.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F0F8F9] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#0E8E9E]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-outfit text-5xl font-bold leading-[1.05] text-[#0E2A33] sm:text-6xl">
              Estamos aqui para si.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3D5F68]">
              Marque a sua consulta por telefone ou WhatsApp, ou deixe-nos uma mensagem. Respondemos o
              mais rápido possível.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-white pb-6 pt-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            return (
              <Reveal key={c.label} delay={i * 70}>
                <Tag
                  {...(c.href ? { href: c.href, ...(c.external ? { target: '_blank', rel: 'noreferrer' } : {}) } : {})}
                  className={
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#0E2A33]/10 bg-[#F0F8F9] p-6 ' +
                    (c.href ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0E8E9E]/40 hover:shadow-lg cursor-pointer' : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#0E8E9E] text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#5A7780]">{c.label}</p>
                    <p className="mt-1 break-words font-sans font-bold text-[#0E2A33]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Hours strip */}
      <section className="bg-white pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#0E2A33] px-7 py-6 text-white sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#3FB6A0] text-[#0E2A33]">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#9FC0C8]">Horário</p>
                  <p className="font-sans font-bold">Aberto de 2.ª a sábado</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-sm font-medium text-[#BBD3D9] sm:flex-row sm:gap-8">
                <span>{brand.hoursWeek}</span>
                <span>{brand.hoursSat}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#0E2A33]/10 bg-[#F0F8F9] p-8 sm:p-10">
              <h2 className="font-outfit text-2xl font-semibold text-[#0E2A33]">Pedir marcação</h2>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#0E2A33] p-10 text-center text-white">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#3FB6A0] text-[#0E2A33]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-outfit text-xl font-semibold">Mensagem enviada!</p>
                  <p className="text-sm text-[#9FC0C8]">
                    Obrigado pelo contacto. A equipa da Nova Dentismed entrará em contacto consigo brevemente.
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
                    <Field id="nome" label="Nome" placeholder="O seu nome" />
                    <Field id="telefone" label="Telefone" type="tel" placeholder="9XX XXX XXX" />
                  </div>
                  <Field id="email" label="Email" type="email" placeholder="email@exemplo.pt" />
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#0E2A33]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Como podemos ajudar? Indique o tratamento ou a sua disponibilidade."
                      className="w-full rounded-xl border border-[#0E2A33]/15 bg-white px-4 py-3 font-sans text-[#0E2A33] outline-none transition-colors placeholder:text-[#90A6AC] focus:border-[#0E8E9E] focus:ring-2 focus:ring-[#0E8E9E]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0E8E9E] px-7 py-3.5 font-sans text-base font-bold text-white transition-colors hover:bg-[#0B7886] cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar pedido
                  </button>
                  <p className="text-center text-xs text-[#5A7780]">
                    Formulário de demonstração. Para marcações imediatas, ligue {brand.phoneDisplay} ou use o WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="flex-1 overflow-hidden rounded-3xl border border-[#0E2A33]/10">
                <iframe
                  title="Mapa — Nova Dentismed, Av. da República 56, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3FB6A0] px-6 py-4 font-sans text-base font-bold text-[#0E2A33] transition-colors hover:bg-[#36a392] cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" /> Falar connosco no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#0E2A33]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#0E2A33]/15 bg-white px-4 py-3 font-sans text-[#0E2A33] outline-none transition-colors placeholder:text-[#90A6AC] focus:border-[#0E8E9E] focus:ring-2 focus:ring-[#0E8E9E]/30"
      />
    </div>
  )
}
