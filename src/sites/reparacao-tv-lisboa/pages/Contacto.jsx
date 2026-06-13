import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, Send, Car } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Enviar mensagem', href: brand.whatsapp, external: true },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.address },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Reparação TV Lisboa',
    'Contacte a Reparação TV Lisboa por telefone, WhatsApp ou email. Calçada do Tojal 53B, 1500-592 Lisboa.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-white px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#2E7DF6]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#1E66D6]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-space text-4xl font-bold leading-[1.05] text-[#0F1B2D] sm:text-5xl">
              Diga-nos o que a sua TV está a fazer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#51607A]">
              Ligue ou envie mensagem e descreva a avaria. O diagnóstico e o orçamento são gratuitos — só
              avançamos com a reparação após a sua aprovação.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="border-t border-[#E3E9F2] bg-[#F4F7FB] pb-6 pt-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            return (
              <Reveal key={c.label} delay={i * 70}>
                <Tag
                  {...(c.href ? { href: c.href, ...(c.external ? { target: '_blank', rel: 'noreferrer' } : {}) } : {})}
                  className={
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#E3E9F2] bg-white p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2E7DF6]/40 hover:shadow-lg hover:shadow-[#2E7DF6]/5 cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#EAF1FE] text-[#2E7DF6] ring-1 ring-[#2E7DF6]/15">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#7A8AA3]">{c.label}</p>
                    <p className="mt-1 break-words font-space font-bold text-[#0F1B2D]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Hours + travel note */}
      <section className="bg-[#F4F7FB] pb-12 pt-6">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-[#E3E9F2] bg-white p-6">
              <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#18C29C]/10 text-[#0B8C73]">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#7A8AA3]">Horário</p>
                <p className="mt-1 font-space font-bold text-[#0F1B2D]">{brand.hours}</p>
                <p className="mt-0.5 text-sm text-[#51607A]">{brand.hoursWeekend}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-[#E3E9F2] bg-white p-6">
              <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2E7DF6]/10 text-[#2E7DF6]">
                <Car className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#7A8AA3]">Deslocação</p>
                <p className="mt-1 font-space font-bold text-[#0F1B2D]">Taxa de deslocação na zona de Lisboa</p>
                <p className="mt-0.5 text-sm text-[#51607A]">Acréscimo para zonas mais distantes.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-[#F4F7FB] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#E3E9F2] bg-white p-8 sm:p-10">
              <h2 className="font-space text-2xl font-bold text-[#0F1B2D]">Descrever a avaria</h2>
              <p className="mt-2 text-sm text-[#51607A]">
                Conte-nos a marca da TV e o que está a acontecer. Respondemos o mais rápido possível.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-[#0E9C82]/25 bg-[#F0FAF7] p-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#18C29C] text-[#0B1220]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-space text-xl font-bold text-[#0F1B2D]">Mensagem enviada!</p>
                  <p className="text-sm text-[#51607A]">
                    Obrigado pelo contacto. Entraremos em contacto consigo brevemente. Para uma resposta
                    imediata, ligue {brand.phoneDisplay}.
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
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="Email" type="email" placeholder="email@exemplo.pt" />
                    <Field id="marca" label="Marca da TV" placeholder="Samsung, LG…" required={false} />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#0F1B2D]">
                      Descrição da avaria
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Ex.: ecrã preto mas com som; LED de presença a piscar…"
                      className="w-full rounded-xl border border-[#E3E9F2] bg-white px-4 py-3 font-sans text-[#0F1B2D] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#2E7DF6] focus:ring-2 focus:ring-[#2E7DF6]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2E7DF6] px-7 py-3.5 font-sans text-base font-bold text-white transition-colors hover:bg-[#1f6fe8] cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#7A8AA3]">
                    Formulário de demonstração. Para marcações imediatas, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-[#E3E9F2]">
                <iframe
                  title="Mapa — Reparação TV Lisboa, Calçada do Tojal 53B"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={brand.phoneHref}
                className="flex items-center justify-between gap-4 rounded-2xl border border-[#2E7DF6]/30 bg-gradient-to-r from-[#F2F7FF] to-white p-6 transition-colors hover:border-[#2E7DF6]/50 cursor-pointer"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#51607A]">Apoio técnico por telefone</p>
                  <p className="mt-1 font-space text-xl font-bold text-[#0F1B2D]">{brand.phoneDisplay}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#2E7DF6] text-white">
                  <Phone className="h-6 w-6" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', placeholder, required = true }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#0F1B2D]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#E3E9F2] bg-white px-4 py-3 font-sans text-[#0F1B2D] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#2E7DF6] focus:ring-2 focus:ring-[#2E7DF6]/30"
      />
    </div>
  )
}
