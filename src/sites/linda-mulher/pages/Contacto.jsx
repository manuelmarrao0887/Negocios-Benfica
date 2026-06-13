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
      <label htmlFor={id} className="mb-2 block font-jost text-sm font-medium text-[#2A1620]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#CC0C78]/20 bg-[#FBF4F7] px-4 py-3 font-jost text-[#2A1620] outline-none transition-colors placeholder:text-[#6E5560]/60 focus:border-[#CC0C78] focus:ring-2 focus:ring-[#CC0C78]/25"
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
      <section className="relative overflow-hidden bg-[#FBF4F7] px-6 pt-40 pb-16">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-[#CC0C78]/12 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-cormorant text-5xl font-semibold leading-[1.04] text-[#2A1620] sm:text-6xl">
              Vamos marcar a sua consultoria.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6E5560]">
              A forma mais rápida de falar connosco é por WhatsApp. Deixe-nos também uma mensagem e
              respondemos com todo o gosto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-[#FBF4F7] pb-6 pt-6">
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
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#CC0C78]/15 bg-white p-6 shadow-[0_14px_40px_-30px_rgba(42,22,32,0.35)] ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CC0C78]/40 hover:shadow-[0_16px_40px_-22px_rgba(204,12,120,0.4)] cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#CC0C78] to-[#A50A60] text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#CC0C78]">{c.label}</p>
                    <p className="mt-1 font-jost font-semibold text-[#2A1620]">{c.value}</p>
                    {c.sub && <p className="mt-1 text-xs leading-relaxed text-[#6E5560]/85">{c.sub}</p>}
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Primary WhatsApp CTA */}
      <section className="bg-[#FBF4F7] pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#CC0C78]/20 bg-gradient-to-r from-white to-[#F6E9EF] px-7 py-7 shadow-[0_18px_50px_-34px_rgba(42,22,32,0.4)] sm:flex-row">
              <div className="flex items-center gap-4">
                <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#CC0C78] to-[#A50A60] text-white">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-cormorant text-2xl font-semibold text-[#2A1620]">Marcação por WhatsApp</p>
                  <p className="text-sm text-[#6E5560]">Consultoria e orçamento personalizados, sem compromisso.</p>
                </div>
              </div>
              <a
                href={brand.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-br from-[#CC0C78] to-[#A50A60] px-7 py-3.5 font-jost text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(204,12,120,0.6)] transition-all duration-200 hover:shadow-[0_16px_40px_-10px_rgba(204,12,120,0.75)] cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" /> {brand.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-[#FBF4F7] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#CC0C78]/15 bg-white p-8 shadow-[0_24px_60px_-40px_rgba(42,22,32,0.4)] sm:p-10">
              <h2 className="font-cormorant text-3xl font-semibold text-[#2A1620]">Marcar consultoria</h2>
              <p className="mt-2 text-sm text-[#6E5560]">Conte-nos o que procura e entramos em contacto consigo.</p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-[#CC0C78]/20 bg-[#FBF4F7] p-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#CC0C78] to-[#A50A60] text-white">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-cormorant text-2xl font-semibold text-[#2A1620]">Pedido enviado!</p>
                  <p className="text-sm text-[#6E5560]">
                    Obrigada pelo seu contacto. Entraremos em contacto consigo brevemente para confirmar a
                    consultoria.
                  </p>
                  <a
                    href={brand.whatsappText}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#CC0C78]/40 px-5 py-2.5 font-jost text-sm font-semibold text-[#CC0C78] transition-colors hover:bg-[#CC0C78] hover:text-white cursor-pointer"
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
                    <label htmlFor="servico" className="mb-2 block font-jost text-sm font-medium text-[#2A1620]">
                      Serviço de interesse
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-[#CC0C78]/20 bg-[#FBF4F7] px-4 py-3 font-jost text-[#2A1620] outline-none transition-colors focus:border-[#CC0C78] focus:ring-2 focus:ring-[#CC0C78]/25"
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
                    <label htmlFor="mensagem" className="mb-2 block font-jost text-sm font-medium text-[#2A1620]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      placeholder="Descreva o resultado que deseja ou as suas dúvidas…"
                      className="w-full rounded-xl border border-[#CC0C78]/20 bg-[#FBF4F7] px-4 py-3 font-jost text-[#2A1620] outline-none transition-colors placeholder:text-[#6E5560]/60 focus:border-[#CC0C78] focus:ring-2 focus:ring-[#CC0C78]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#CC0C78] to-[#A50A60] px-7 py-3.5 font-jost text-base font-semibold text-white transition-all duration-200 hover:shadow-[0_12px_30px_-10px_rgba(204,12,120,0.7)] cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar pedido
                  </button>
                  <p className="text-center text-xs text-[#6E5560]/80">
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
              <div className="overflow-hidden rounded-3xl border border-[#CC0C78]/15 shadow-[0_24px_60px_-44px_rgba(42,22,32,0.4)]">
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
                  className="flex items-center gap-3 rounded-2xl border border-[#CC0C78]/15 bg-white p-5 transition-colors duration-200 hover:border-[#CC0C78]/40 cursor-pointer"
                >
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-[#CC0C78]/10 text-[#CC0C78]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-[#CC0C78]">Ligar</span>
                    <span className="font-jost font-semibold text-[#2A1620]">{brand.phoneDisplay}</span>
                  </span>
                </a>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-[#CC0C78]/15 bg-white p-5 transition-colors duration-200 hover:border-[#CC0C78]/40 cursor-pointer"
                >
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-[#CC0C78]/10 text-[#CC0C78]">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-[#CC0C78]">Instagram</span>
                    <span className="font-jost font-semibold text-[#2A1620]">35K seguidores</span>
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
