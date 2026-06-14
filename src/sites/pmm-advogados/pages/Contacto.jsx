import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, Smartphone } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Smartphone, label: 'Telemóvel', value: brand.mobileDisplay, href: brand.mobileHref },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Enviar mensagem',
    href: brand.whatsapp,
    external: true,
  },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.address },
  { icon: Clock, label: 'Horário', value: brand.hours },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Pereira Mouta Mendes & Associados',
    'Contacte a Pereira Mouta Mendes & Associados, Sociedade de Advogados, em Lisboa. Telefone, email, morada e horário.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#16203A] px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-16 h-80 w-80 rounded-full bg-[#1E3A5F]/50 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#A6802E]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-archivo text-sm font-bold uppercase tracking-[0.18em] text-[#C9A227]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-archivo text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
              Estamos à sua disposição.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#AEB9CE]">
              Contacte-nos por telefone, email ou WhatsApp, ou deixe-nos uma mensagem. Respondemos com
              a maior brevidade possível.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-[#F5F6F8] pb-6 pt-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {infoCards.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            return (
              <Reveal key={c.label} delay={i * 60}>
                <Tag
                  {...(c.href
                    ? { href: c.href, ...(c.external ? { target: '_blank', rel: 'noreferrer' } : {}) }
                    : {})}
                  className={
                    'flex h-full items-start gap-4 rounded-xl border border-[#16203A]/10 bg-white p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#A6802E]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#1E3A5F] text-[#C9A227]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#7A8398]">
                      {c.label}
                    </p>
                    <p className="mt-1 font-archivo font-bold text-[#16203A]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-[#F5F6F8] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-xl border border-[#16203A]/10 bg-white p-8 sm:p-10">
              <h2 className="font-archivo text-2xl font-bold text-[#16203A]">Enviar mensagem</h2>
              <p className="mt-2 text-sm text-[#5A6479]">
                Preencha o formulário e entraremos em contacto consigo.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-[#16203A] p-10 text-center text-white">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#A6802E] text-[#16203A]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-archivo text-xl font-bold">Mensagem enviada!</p>
                  <p className="text-sm text-[#AEB9CE]">
                    Obrigado pelo seu contacto. Entraremos em contacto consigo brevemente.
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
                  <Field id="assunto" label="Assunto" placeholder="Em que o podemos ajudar?" />
                  <div>
                    <label
                      htmlFor="mensagem"
                      className="mb-2 block font-archivo text-sm font-bold text-[#16203A]"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Descreva, em breves linhas, a sua questão."
                      className="w-full rounded-lg border border-[#16203A]/15 bg-[#F5F6F8] px-4 py-3 font-sans text-[#16203A] outline-none transition-colors placeholder:text-[#9AA3B4] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1E3A5F] px-7 py-3.5 font-archivo text-base font-bold text-white transition-colors hover:bg-[#16203A] cursor-pointer"
                  >
                    <Mail className="h-4 w-4" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#7A8398]">
                    Formulário de demonstração. Para um contacto imediato, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-xl border border-[#16203A]/10">
                <iframe
                  title="Mapa — Pereira Mouta Mendes & Associados, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    brand.mapsQuery,
                  )}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#16203A]/10 bg-white px-6 py-5 font-archivo text-base font-bold text-[#16203A] transition-all duration-200 hover:border-[#A6802E]/40 hover:shadow-lg cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 text-[#A6802E]" /> Falar connosco por WhatsApp
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
      <label htmlFor={id} className="mb-2 block font-archivo text-sm font-bold text-[#16203A]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#16203A]/15 bg-[#F5F6F8] px-4 py-3 font-sans text-[#16203A] outline-none transition-colors placeholder:text-[#9AA3B4] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/25"
      />
    </div>
  )
}
