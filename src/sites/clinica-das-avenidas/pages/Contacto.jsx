import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, CalendarCheck, Train, Car } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand, subjects, transports } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: MessageCircle, label: 'Telemóvel / WhatsApp', value: brand.mobileDisplay, href: brand.whatsapp, external: true },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: Clock, label: 'Horário', value: brand.hours },
]

const transportIcons = { Metro: Train, Comboio: Train, Estacionamento: Car }

export default function Contacto() {
  usePageMeta(
    'Contacto | Clínica das Avenidas — Dr. Rui Delfim',
    'Marque a sua consulta na Clínica das Avenidas, no centro de Lisboa. Telefone, WhatsApp, email e morada na Av. das Forças Armadas.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F2F6FC] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#157B7F]">
              Contacto &amp; marcações
            </span>
            <h1 className="mt-3 max-w-3xl font-outfit text-5xl font-bold leading-[1.05] text-[#102438] sm:text-6xl">
              Estamos aqui para o seu sorriso.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A6076]">
              Marque a sua consulta por telefone, WhatsApp ou email — ou peça uma marcação através do
              formulário e a nossa equipa entra em contacto para confirmar o horário.
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
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#102438]/10 bg-[#F2F6FC] p-6 ' +
                    (c.href ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1F9A9E]/40 hover:shadow-lg cursor-pointer' : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#11707A] text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#7388a0]">{c.label}</p>
                    <p className="mt-1 break-words font-sans font-bold text-[#102438]">{c.value}</p>
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
            <div className="rounded-3xl border border-[#102438]/10 bg-[#F2F6FC] p-8 sm:p-10">
              <h2 className="font-outfit text-2xl font-bold text-[#102438]">Pedir marcação</h2>
              <p className="mt-2 text-sm text-[#51677d]">
                Preencha os seus dados e ligamos para si para confirmar a consulta.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#0E2A33] p-10 text-center text-white">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#36B0A6] text-[#0E2A33]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-outfit text-xl font-semibold">Pedido enviado!</p>
                  <p className="text-sm text-[#9fc0cb]">
                    Obrigado pelo seu contacto. A nossa equipa entra em contacto consigo para confirmar a marcação.
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
                    <label htmlFor="assunto" className="mb-2 block font-sans text-sm font-bold text-[#102438]">
                      Tratamento pretendido
                    </label>
                    <select
                      id="assunto"
                      required
                      defaultValue=""
                      className="w-full cursor-pointer rounded-xl border border-[#102438]/15 bg-white px-4 py-3 font-sans text-[#102438] outline-none transition-colors focus:border-[#1F9A9E] focus:ring-2 focus:ring-[#1F9A9E]/30"
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#102438]">
                      Mensagem <span className="font-normal text-[#7388a0]">(opcional)</span>
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      placeholder="Conte-nos como podemos ajudar."
                      className="w-full rounded-xl border border-[#102438]/15 bg-white px-4 py-3 font-sans text-[#102438] outline-none transition-colors placeholder:text-[#94a4ba] focus:border-[#1F9A9E] focus:ring-2 focus:ring-[#1F9A9E]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#11707A] px-7 py-3.5 font-sans text-base font-bold text-white transition-colors hover:bg-[#0E5A62] cursor-pointer"
                  >
                    <CalendarCheck className="h-5 w-5" /> Pedir marcação
                  </button>
                  <p className="text-center text-xs text-[#7388a0]">
                    Formulário de demonstração. Para marcações imediatas, ligue {brand.phoneDisplay} ou {brand.mobileDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + address + transports */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-3xl border border-[#102438]/10">
                <iframe
                  title="Mapa — Clínica das Avenidas, Av. das Forças Armadas 4, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[300px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-3xl border border-[#102438]/10 bg-[#F2F6FC] p-7">
                <h3 className="flex items-center gap-2 font-outfit text-lg font-semibold text-[#102438]">
                  <MapPin className="h-5 w-5 text-[#11707A]" /> Onde estamos
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#51677d]">{brand.address}</p>
                <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                  {transports.map((t) => {
                    const Icon = transportIcons[t.label] || Train
                    return (
                      <li key={t.label} className="rounded-xl bg-white p-4 ring-1 ring-[#102438]/5">
                        <Icon className="h-5 w-5 text-[#11707A]" strokeWidth={1.7} />
                        <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#7388a0]">{t.label}</p>
                        <p className="mt-0.5 text-sm leading-snug text-[#33485B]">{t.text}</p>
                      </li>
                    )
                  })}
                </ul>
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
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#102438]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#102438]/15 bg-white px-4 py-3 font-sans text-[#102438] outline-none transition-colors placeholder:text-[#94a4ba] focus:border-[#1F9A9E] focus:ring-2 focus:ring-[#1F9A9E]/30"
      />
    </div>
  )
}
