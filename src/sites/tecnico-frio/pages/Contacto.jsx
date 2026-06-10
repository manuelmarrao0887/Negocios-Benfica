import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, Send } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Phone, label: 'Telefone', value: brand.phone2Display, href: brand.phone2Href },
  { icon: MessageCircle, label: 'WhatsApp', value: brand.whatsappDisplay, href: brand.whatsapp, external: true },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.address },
  { icon: Clock, label: 'Atendimento', value: brand.hours },
]

const services = ['Frigorífico / congelador', 'Ar condicionado', 'Manutenção preventiva', 'Outro / não sei']

export default function Contacto() {
  usePageMeta(
    'Contacto | Técnico Frio — Reparação de AC e frigoríficos',
    'Peça orçamento ou agende a visita técnica. Telefone, WhatsApp, email e morada em Lisboa. Cobertura em toda a Grande Lisboa.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F1F8FC] px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-[#16B5C9]/12 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#16B5C9]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-outfit text-5xl font-bold leading-[1.05] text-[#0B2536] sm:text-6xl">
              Pedir orçamento ou agendar visita.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A5E70]">
              Fale connosco por telefone ou WhatsApp, ou deixe-nos uma mensagem. Descreva a avaria e
              marcamos o diagnóstico ao domicílio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-white pb-6 pt-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {infoCards.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            return (
              <Reveal key={c.label + c.value} delay={i * 60}>
                <Tag
                  {...(c.href ? { href: c.href, ...(c.external ? { target: '_blank', rel: 'noreferrer' } : {}) } : {})}
                  className={
                    'flex h-full items-start gap-4 rounded-2xl border border-[#0B2536]/10 bg-[#F1F8FC] p-6 ' +
                    (c.href ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#16B5C9]/50 hover:shadow-lg cursor-pointer' : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#0E7FC1] to-[#16B5C9] text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#4A5E70]">{c.label}</p>
                    <p className="mt-1 font-outfit font-semibold text-[#0B2536]">{c.value}</p>
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
            <div className="rounded-3xl border border-[#0B2536]/10 bg-[#F1F8FC] p-8 sm:p-10">
              <h2 className="font-outfit text-2xl font-bold text-[#0B2536]">Deixe-nos uma mensagem</h2>
              <p className="mt-2 text-sm text-[#4A5E70]">Respondemos o mais rápido possível.</p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-[#0E7FC1] to-[#16B5C9] p-10 text-center text-white">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#0E7FC1]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-outfit text-xl font-bold">Mensagem enviada!</p>
                  <p className="text-sm text-white/90">
                    Obrigado pelo contacto. Entraremos em contacto consigo brevemente. Para marcações
                    imediatas, ligue {brand.phoneDisplay}.
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
                    <Field id="nome" label="Nome" placeholder="O seu nome" autoComplete="name" />
                    <Field id="telefone" label="Telefone" type="tel" placeholder="9XX XXX XXX" autoComplete="tel" />
                  </div>
                  <Field id="email" label="Email" type="email" placeholder="email@exemplo.pt" autoComplete="email" />
                  <div>
                    <label htmlFor="servico" className="mb-2 block font-sans text-sm font-bold text-[#0B2536]">
                      Equipamento
                    </label>
                    <select
                      id="servico"
                      defaultValue=""
                      className="w-full rounded-xl border border-[#0B2536]/15 bg-white px-4 py-3 font-sans text-[#0B2536] outline-none transition-colors focus:border-[#0E7FC1] focus:ring-2 focus:ring-[#0E7FC1]/30 cursor-pointer"
                    >
                      <option value="" disabled>
                        Selecione o equipamento
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#0B2536]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Descreva a avaria ou o que precisa..."
                      className="w-full rounded-xl border border-[#0B2536]/15 bg-white px-4 py-3 font-sans text-[#0B2536] outline-none transition-colors placeholder:text-[#90a4b3] focus:border-[#0E7FC1] focus:ring-2 focus:ring-[#0E7FC1]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0E7FC1] to-[#16B5C9] px-7 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-[#0E7FC1]/25 transition-all hover:brightness-105 cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#4A5E70]">
                    Formulário de demonstração. Para marcações imediatas, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + quick contacts */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-[#0B2536]/10">
                <iframe
                  title="Mapa — Técnico Frio, Calçada do Tojal 3, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0B2536] px-5 py-4 font-sans text-sm font-bold text-white transition-colors hover:bg-[#103a52] cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-[#16B5C9]" /> {brand.phoneDisplay}
                </a>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#0B2536]/15 px-5 py-4 font-sans text-sm font-bold text-[#0B2536] transition-colors hover:border-[#16B5C9]/50 hover:text-[#0E7FC1] cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 text-[#16B5C9]" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#0B2536]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#0B2536]/15 bg-white px-4 py-3 font-sans text-[#0B2536] outline-none transition-colors placeholder:text-[#90a4b3] focus:border-[#0E7FC1] focus:ring-2 focus:ring-[#0E7FC1]/30"
      />
    </div>
  )
}
