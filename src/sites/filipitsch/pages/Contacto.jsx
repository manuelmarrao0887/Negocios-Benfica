import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Enviar mensagem', href: brand.whatsapp, external: true },
  { icon: MapPin, label: 'Morada', value: brand.address },
  { icon: Clock, label: 'Horário', value: brand.hours },
]

export default function Contacto() {
  usePageMeta('Contacto | Filipitsch — Terapia Activa', 'Marque a sua consulta na Terapia Activa, em Benfica. Telefone, WhatsApp e morada.')
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#FBF9F2] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-nunito text-sm font-bold uppercase tracking-[0.15em] text-[#CBA35C]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-fraunces text-5xl font-semibold leading-[1.05] text-[#0E3B34] sm:text-6xl">
              Estamos aqui para si.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#46564f]">
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
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#0E3B34]/10 bg-[#FBF9F2] p-6 ' +
                    (c.href ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CBA35C]/40 hover:shadow-lg cursor-pointer' : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#0E3B34] text-[#CBA35C]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#7a8a82]">{c.label}</p>
                    <p className="mt-1 font-nunito font-bold text-[#0E3B34]">{c.value}</p>
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
            <div className="rounded-3xl border border-[#0E3B34]/10 bg-[#FBF9F2] p-8 sm:p-10">
              <h2 className="font-fraunces text-2xl font-semibold text-[#0E3B34]">Enviar mensagem</h2>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#0E3B34] p-10 text-center text-[#F4F0E4]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#CBA35C] text-[#0E3B34]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-fraunces text-xl font-semibold">Mensagem enviada!</p>
                  <p className="text-sm text-[#9fb8ac]">
                    Obrigado pelo contacto. Entraremos em contacto consigo brevemente.
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
                    <label htmlFor="mensagem" className="mb-2 block font-nunito text-sm font-bold text-[#0E3B34]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Como podemos ajudar?"
                      className="w-full rounded-xl border border-[#0E3B34]/15 bg-white px-4 py-3 font-nunito text-[#1A2B27] outline-none transition-colors placeholder:text-[#9aa8a2] focus:border-[#CBA35C] focus:ring-2 focus:ring-[#CBA35C]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0E3B34] px-7 py-3.5 font-nunito text-base font-bold text-[#F4F0E4] transition-colors hover:bg-[#0a2c27] cursor-pointer"
                  >
                    <Mail className="h-4 w-4" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#7a8a82]">
                    Formulário de demonstração. Para marcações imediatas, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-3xl border border-[#0E3B34]/10">
              <iframe
                title="Mapa — Filipitsch Terapia Activa"
                src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                className="h-full min-h-[420px] w-full"
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

function Field({ id, label, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-nunito text-sm font-bold text-[#0E3B34]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#0E3B34]/15 bg-white px-4 py-3 font-nunito text-[#1A2B27] outline-none transition-colors placeholder:text-[#9aa8a2] focus:border-[#CBA35C] focus:ring-2 focus:ring-[#CBA35C]/30"
      />
    </div>
  )
}
