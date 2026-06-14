import { useState } from 'react'
import { Phone, MapPin, MessageCircle, Mail, Check, CalendarCheck, Building2 } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telemóvel', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Enviar mensagem', href: brand.whatsapp, external: true },
  { icon: Phone, label: 'Telefone fixo', value: brand.landlineDisplay, href: brand.landlineHref },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
]

const subjects = [
  'Nacionalidade Portuguesa',
  'Vistos (D7 · D2 · D8)',
  'Reagrupamento Familiar',
  'Casamento e Divórcio',
  'Revisão de Sentença Estrangeira',
  'Transcrição de Casamento',
  'Outro assunto',
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Advogada Suelen Cunha',
    'Marque a sua consulta. Escritório em Campo Pequeno, Lisboa. Telemóvel, WhatsApp e email da advogada Suelen Cunha.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F8F5F0] px-6 pt-20 pb-16 sm:pt-24">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#7A2E3B]/[0.06] blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#B0913F]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-playfair text-5xl font-semibold leading-[1.05] text-[#1E1B2E] sm:text-6xl">
              Fale com a advogada especialista.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A4453]">
              Tenha segurança em cada etapa do seu processo. Marque a sua reunião por telefone,
              WhatsApp ou email — presencialmente no escritório em Lisboa ou à distância.
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
                  {...(c.href
                    ? { href: c.href, ...(c.external ? { target: '_blank', rel: 'noreferrer' } : {}) }
                    : {})}
                  className={
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#1E1B2E]/10 bg-[#F8F5F0] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B0913F]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#7A2E3B] text-[#E7C77E]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#8A8194]">{c.label}</p>
                    <p className="mt-1 break-words font-sans font-bold text-[#1E1B2E]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Address + hours banner */}
      <section className="bg-white pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-4 rounded-2xl border border-[#1E1B2E]/10 bg-[#1E1B2E] p-6 text-[#E9E2EC] sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <span className="flex items-center gap-3">
                <Building2 className="h-5 w-5 shrink-0 text-[#E7C77E]" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-[#B0913F]">
                    Escritório em Lisboa
                  </span>
                  <span className="font-semibold text-[#F8F5F0]">{brand.address}</span>
                </span>
              </span>
              <span className="flex items-center gap-3 sm:text-right">
                <CalendarCheck className="h-5 w-5 shrink-0 text-[#E7C77E] sm:order-2" />
                <span className="sm:order-1">
                  <span className="block text-xs font-bold uppercase tracking-wide text-[#B0913F]">
                    Atendimento
                  </span>
                  <span className="font-semibold text-[#F8F5F0]">{brand.hours}</span>
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-[2rem] border border-[#1E1B2E]/10 bg-[#F8F5F0] p-8 sm:p-10">
              <h2 className="font-playfair text-2xl font-semibold text-[#1E1B2E]">Marcar consulta</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5E5766]">
                Conte-me brevemente o seu caso. Respondo o mais rapidamente possível.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#7A2E3B] p-10 text-center text-[#F8F5F0]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#E7C77E] text-[#1E1B2E]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-playfair text-xl font-semibold">Pedido enviado!</p>
                  <p className="text-sm text-[#EAD9DD]">
                    Obrigada pelo contacto. Entrarei em contacto consigo brevemente para agendar a sua
                    reunião.
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
                    <Field id="telefone" label="Telefone" type="tel" placeholder="+351 / +55 …" />
                  </div>
                  <Field id="email" label="Email" type="email" placeholder="email@exemplo.com" />
                  <div>
                    <label htmlFor="assunto" className="mb-2 block font-sans text-sm font-bold text-[#1E1B2E]">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-[#1E1B2E]/15 bg-white px-4 py-3 font-sans text-[#1E1B2E] outline-none transition-colors focus:border-[#7A2E3B] focus:ring-2 focus:ring-[#7A2E3B]/20"
                    >
                      <option value="" disabled>
                        Selecione o assunto
                      </option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#1E1B2E]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Descreva brevemente a sua situação."
                      className="w-full rounded-xl border border-[#1E1B2E]/15 bg-white px-4 py-3 font-sans text-[#1E1B2E] outline-none transition-colors placeholder:text-[#9a93a2] focus:border-[#7A2E3B] focus:ring-2 focus:ring-[#7A2E3B]/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A2E3B] px-7 py-3.5 font-sans text-base font-bold text-[#F8F5F0] transition-colors hover:bg-[#67262F] cursor-pointer"
                  >
                    <CalendarCheck className="h-4 w-4" /> Pedir marcação
                  </button>
                  <p className="text-center text-xs text-[#8A8194]">
                    Formulário de demonstração. Para marcações imediatas, ligue {brand.phoneDisplay} ou
                    use o WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + quick contact */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-[2rem] border border-[#1E1B2E]/10">
                <iframe
                  title="Mapa — Escritório da Advogada Suelen Cunha em Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-[#1E1B2E]/10 bg-[#F8F5F0] p-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-3 text-sm text-[#4A4453]">
                  <MapPin className="h-5 w-5 shrink-0 text-[#7A2E3B]" />
                  {brand.address}
                </span>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#1E1B2E] px-5 py-2.5 font-sans text-sm font-bold text-[#F8F5F0] transition-colors hover:bg-[#2A2438] cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 text-[#E7C77E]" /> Chamar no WhatsApp
                </a>
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
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#1E1B2E]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#1E1B2E]/15 bg-white px-4 py-3 font-sans text-[#1E1B2E] outline-none transition-colors placeholder:text-[#9a93a2] focus:border-[#7A2E3B] focus:ring-2 focus:ring-[#7A2E3B]/20"
      />
    </div>
  )
}
