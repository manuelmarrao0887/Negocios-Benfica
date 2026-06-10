import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Instagram, Check, Send } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Enviar mensagem', href: brand.whatsappText, external: true },
  { icon: MapPin, label: 'Morada', value: brand.address, sub: brand.area },
  { icon: Clock, label: 'Horário', value: brand.hours, sub: brand.hoursNote },
]

function Field({ id, label, type = 'text', placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-jost text-sm font-medium text-[#F3E7E4]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#C98A6B]/20 bg-[#15100F] px-4 py-3 font-jost text-[#F3E7E4] outline-none transition-colors placeholder:text-[#C3ABA6]/50 focus:border-[#C98A6B] focus:ring-2 focus:ring-[#C98A6B]/30"
      />
    </div>
  )
}

export default function Contacto() {
  usePageMeta(
    'Contacto | Linda Mulher Studio',
    'Marque a sua consultoria no Linda Mulher Studio, no Parque das Nações. Telefone, WhatsApp, morada e horário.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#15100F] px-6 pt-40 pb-16">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#C98A6B]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#C98A6B]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-cormorant text-5xl font-semibold leading-[1.04] text-[#F3E7E4] sm:text-6xl">
              Vamos marcar a sua consultoria.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C3ABA6]">
              A forma mais rápida de falar connosco é por WhatsApp. Deixe-nos também uma mensagem e
              respondemos com todo o gosto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-[#15100F] pb-6 pt-6">
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
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#C98A6B]/15 bg-[#1E1816] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C98A6B]/40 hover:shadow-[0_16px_40px_-20px_rgba(201,138,107,0.5)] cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#E6B9B0] to-[#C98A6B] text-[#15100F]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#C98A6B]">{c.label}</p>
                    <p className="mt-1 font-jost font-semibold text-[#F3E7E4]">{c.value}</p>
                    {c.sub && <p className="mt-1 text-xs leading-relaxed text-[#C3ABA6]/80">{c.sub}</p>}
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Primary WhatsApp CTA */}
      <section className="bg-[#15100F] pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#C98A6B]/25 bg-gradient-to-r from-[#1E1816] to-[#15100F] px-7 py-7 sm:flex-row">
              <div className="flex items-center gap-4">
                <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#E6B9B0] to-[#C98A6B] text-[#15100F]">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-cormorant text-2xl font-semibold text-[#F3E7E4]">Marcação por WhatsApp</p>
                  <p className="text-sm text-[#C3ABA6]">Consultoria e orçamento personalizados, sem compromisso.</p>
                </div>
              </div>
              <a
                href={brand.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-br from-[#C98A6B] to-[#b1714f] px-7 py-3.5 font-jost text-base font-semibold text-[#15100F] shadow-[0_12px_30px_-10px_rgba(201,138,107,0.7)] transition-all duration-200 hover:shadow-[0_16px_40px_-10px_rgba(201,138,107,0.85)] cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-[#15100F] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#C98A6B]/15 bg-[#1E1816] p-8 sm:p-10">
              <h2 className="font-cormorant text-3xl font-semibold text-[#F3E7E4]">Marcar consultoria</h2>
              <p className="mt-2 text-sm text-[#C3ABA6]">Conte-nos o que procura e entramos em contacto consigo.</p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-[#C98A6B]/25 bg-[#15100F] p-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#E6B9B0] to-[#C98A6B] text-[#15100F]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-cormorant text-2xl font-semibold text-[#F3E7E4]">Pedido enviado!</p>
                  <p className="text-sm text-[#C3ABA6]">
                    Obrigada pelo seu contacto. Entraremos em contacto consigo brevemente para confirmar a
                    consultoria.
                  </p>
                  <a
                    href={brand.whatsappText}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#C98A6B]/40 px-5 py-2.5 font-jost text-sm font-semibold text-[#E6B9B0] transition-colors hover:bg-[#C98A6B] hover:text-[#15100F] cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" /> Falar agora por WhatsApp
                  </a>
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
                  <div>
                    <label htmlFor="servico" className="mb-2 block font-jost text-sm font-medium text-[#F3E7E4]">
                      Serviço de interesse
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-[#C98A6B]/20 bg-[#15100F] px-4 py-3 font-jost text-[#F3E7E4] outline-none transition-colors focus:border-[#C98A6B] focus:ring-2 focus:ring-[#C98A6B]/30"
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      <option>Extensões capilares</option>
                      <option>Cabeleireiro</option>
                      <option>Tratamentos capilares</option>
                      <option>Unhas</option>
                      <option>Sobrancelhas & rosto</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-jost text-sm font-medium text-[#F3E7E4]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      placeholder="Descreva o resultado que deseja ou as suas dúvidas…"
                      className="w-full rounded-xl border border-[#C98A6B]/20 bg-[#15100F] px-4 py-3 font-jost text-[#F3E7E4] outline-none transition-colors placeholder:text-[#C3ABA6]/50 focus:border-[#C98A6B] focus:ring-2 focus:ring-[#C98A6B]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#C98A6B] to-[#b1714f] px-7 py-3.5 font-jost text-base font-semibold text-[#15100F] transition-all duration-200 hover:shadow-[0_12px_30px_-10px_rgba(201,138,107,0.8)] cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar pedido
                  </button>
                  <p className="text-center text-xs text-[#C3ABA6]/70">
                    Formulário de demonstração. Para marcações imediatas, contacte-nos por WhatsApp ou para
                    o {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + side info */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-[#C98A6B]/15">
                <iframe
                  title="Mapa — Linda Mulher Studio, Parque das Nações, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={brand.phoneHref}
                  className="flex items-center gap-3 rounded-2xl border border-[#C98A6B]/15 bg-[#1E1816] p-5 transition-colors duration-200 hover:border-[#C98A6B]/40 cursor-pointer"
                >
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-[#C98A6B]/12 text-[#E6B9B0]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-[#C98A6B]">Ligar</span>
                    <span className="font-jost font-semibold text-[#F3E7E4]">{brand.phoneDisplay}</span>
                  </span>
                </a>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-[#C98A6B]/15 bg-[#1E1816] p-5 transition-colors duration-200 hover:border-[#C98A6B]/40 cursor-pointer"
                >
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-[#C98A6B]/12 text-[#E6B9B0]">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-[#C98A6B]">Instagram</span>
                    <span className="font-jost font-semibold text-[#F3E7E4]">35K seguidores</span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
