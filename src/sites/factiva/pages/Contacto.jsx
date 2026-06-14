import { useState } from 'react'
import { Phone, MapPin, Clock, Mail, Check, Send, Landmark } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.addressShort },
  { icon: Clock, label: 'Horário', value: brand.hours },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Factiva — Contabilidade e Gestão, Lisboa',
    'Fale com a Factiva na Avenida da República, em Lisboa. Telefone, email, morada e horário.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F4F7FB] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#18A07A]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-jakarta text-5xl font-extrabold leading-[1.05] text-[#14233B] sm:text-6xl">
              Vamos conversar sobre as suas contas.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#46566F]">
              Ligue, envie-nos um email ou deixe uma mensagem no formulário. Respondemos o mais rápido
              possível para perceber como podemos ajudar.
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
                  {...(c.href ? { href: c.href } : {})}
                  className={
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#14233B]/10 bg-[#F4F7FB] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563B0]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#2563B0] text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#7E8CA3]">{c.label}</p>
                    <p className="mt-1 font-jakarta font-bold text-[#14233B]">{c.value}</p>
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
            <div className="rounded-3xl border border-[#14233B]/10 bg-[#F4F7FB] p-8 sm:p-10">
              <h2 className="font-jakarta text-2xl font-bold text-[#14233B]">Enviar mensagem</h2>
              <p className="mt-2 text-sm text-[#5C6A82]">
                Conte-nos brevemente a sua situação e entraremos em contacto.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#14233B] p-10 text-center text-white">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#18A07A] text-white">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-jakarta text-xl font-bold">Mensagem enviada!</p>
                  <p className="text-sm text-[#A9B8D1]">
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
                    <Field id="nome" label="Nome" placeholder="O seu nome" autoComplete="name" />
                    <Field id="telefone" label="Telefone" type="tel" placeholder="9XX XXX XXX" autoComplete="tel" />
                  </div>
                  <Field id="email" label="Email" type="email" placeholder="email@exemplo.pt" autoComplete="email" />
                  <div>
                    <label htmlFor="assunto" className="mb-2 block font-sans text-sm font-bold text-[#14233B]">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      className="w-full rounded-xl border border-[#14233B]/15 bg-white px-4 py-3 font-sans text-[#14233B] outline-none transition-colors focus:border-[#2563B0] focus:ring-2 focus:ring-[#2563B0]/30 cursor-pointer"
                    >
                      <option>Contabilidade de empresa</option>
                      <option>Empresário em nome individual</option>
                      <option>IRS / particulares</option>
                      <option>Constituição de empresa</option>
                      <option>Outro assunto</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#14233B]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Como podemos ajudar?"
                      className="w-full rounded-xl border border-[#14233B]/15 bg-white px-4 py-3 font-sans text-[#14233B] outline-none transition-colors placeholder:text-[#94A2B8] focus:border-[#2563B0] focus:ring-2 focus:ring-[#2563B0]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2563B0] px-7 py-3.5 font-sans text-base font-bold text-white transition-colors hover:bg-[#1d4f8f] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563B0] focus-visible:ring-offset-2"
                  >
                    <Send className="h-4 w-4" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#7E8CA3]">
                    Formulário de demonstração. Para um contacto imediato, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + address card */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-[#14233B]/10">
                <iframe
                  title="Mapa — Factiva, Avenida da República 47, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-3xl border border-[#14233B]/10 bg-[#F4F7FB] p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#14233B] text-[#3AA0E6]">
                    <Landmark className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-jakarta font-bold text-[#14233B]">{brand.full}</p>
                    <p className="mt-1 text-sm text-[#5C6A82]">{brand.address}</p>
                    <p className="mt-1 text-sm text-[#5C6A82]">{brand.hoursNote}</p>
                  </div>
                </div>
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
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#14233B]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-[#14233B]/15 bg-white px-4 py-3 font-sans text-[#14233B] outline-none transition-colors placeholder:text-[#94A2B8] focus:border-[#2563B0] focus:ring-2 focus:ring-[#2563B0]/30"
      />
    </div>
  )
}
