import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, Train } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: MessageCircle, label: 'Telemóvel / WhatsApp', value: brand.whatsappDisplay, href: brand.whatsapp, external: true },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: Clock, label: 'Horário', value: brand.hours },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | DentoFisis — Clínica Dentária, Lisboa',
    'Marque a sua consulta na DentoFisis, em Entrecampos, Lisboa. Telefone, WhatsApp, email e mapa.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F1F7F5] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157E72]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0F2A2A] sm:text-6xl">
              Marque a sua consulta.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3C5852]">
              Estamos em Entrecampos, Lisboa. Contacte-nos por telefone ou WhatsApp, ou deixe-nos uma
              mensagem — respondemos o mais rápido possível.
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
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#0F2A2A]/10 bg-[#F1F7F5] p-6 ' +
                    (c.href ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1F9E8E]/40 hover:shadow-lg cursor-pointer' : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#0F2A2A] text-[#5BB6C9]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#5C7470]">{c.label}</p>
                    <p className="mt-1 font-manrope font-bold text-[#0F2A2A]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#0F2A2A]/10 bg-[#F1F7F5] p-8 sm:p-10">
              <h2 className="font-manrope text-2xl font-bold text-[#0F2A2A]">Pedir marcação</h2>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#0F2A2A] p-10 text-center text-white">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#1F9E8E]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-manrope text-xl font-bold">Pedido enviado!</p>
                  <p className="text-sm text-[#8fb0aa]">
                    Obrigado. A nossa equipa entrará em contacto consigo para confirmar a marcação.
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
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#0F2A2A]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Que tratamento procura? Qual a melhor altura para o contactarmos?"
                      className="w-full rounded-xl border border-[#0F2A2A]/15 bg-white px-4 py-3 font-sans text-[#0F2A2A] outline-none transition-colors placeholder:text-[#9ab2ac] focus:border-[#1F9E8E] focus:ring-2 focus:ring-[#1F9E8E]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F2A2A] px-7 py-3.5 font-sans text-base font-bold text-white transition-colors hover:bg-[#157E72] cursor-pointer"
                  >
                    <Mail className="h-4 w-4" /> Enviar pedido
                  </button>
                  <p className="text-center text-xs text-[#5C7470]">
                    Formulário de demonstração. Para marcações imediatas, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + address */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-[#0F2A2A]/10">
                <iframe
                  title="Mapa — DentoFisis, Entrecampos"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-2xl bg-[#F1F7F5] p-6 ring-1 ring-[#0F2A2A]/5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#157E72]" />
                  <p className="font-manrope font-bold text-[#0F2A2A]">{brand.address}</p>
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <Train className="mt-0.5 h-5 w-5 shrink-0 text-[#157E72]" />
                  <p className="text-sm text-[#52706A]">{brand.transport}</p>
                </div>
              </div>
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
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#0F2A2A]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#0F2A2A]/15 bg-white px-4 py-3 font-sans text-[#0F2A2A] outline-none transition-colors placeholder:text-[#9ab2ac] focus:border-[#1F9E8E] focus:ring-2 focus:ring-[#1F9E8E]/30"
      />
    </div>
  )
}
