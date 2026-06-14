import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, Send } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Enviar mensagem', href: brand.whatsapp, external: true },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.addressShort },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Value Advantage — Contabilidade e Gestão',
    'Fale com a Value Advantage: telefone, WhatsApp, email e morada nas Avenidas Novas, em Lisboa. Peça uma proposta sem compromisso.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F5F8F6] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#B68A2E]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-[#102A23] sm:text-6xl">
              Falemos sobre o seu negócio.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3F5249]">
              Telefone, WhatsApp ou email — escolha como prefere falar connosco. Pedidos de proposta sem
              qualquer compromisso.
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
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#102A23]/10 bg-[#F5F8F6] p-6 ' +
                    (c.href ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2E7D6A]/40 hover:shadow-lg cursor-pointer' : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#2E7D6A] text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#6E827A]">{c.label}</p>
                    <p className="mt-1 font-manrope font-bold text-[#102A23]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Hours strip */}
      <section className="bg-white pt-2">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[#102A23] px-6 py-5 text-center sm:flex-row sm:gap-3">
              <Clock className="h-5 w-5 text-[#D8B45E]" />
              <p className="font-sans text-sm font-semibold text-[#BFD3CA]">
                Horário de atendimento: <span className="font-bold text-white">{brand.hours}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#102A23]/10 bg-[#F5F8F6] p-8 sm:p-10">
              <h2 className="font-manrope text-2xl font-extrabold text-[#102A23]">Pedir proposta</h2>
              <p className="mt-2 text-sm text-[#5A6E64]">
                Deixe-nos os seus dados e a sua necessidade. Entramos em contacto consigo brevemente.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#102A23] p-10 text-center text-white">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#B68A2E] text-[#102A23]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-manrope text-xl font-bold">Mensagem enviada!</p>
                  <p className="text-sm text-[#9DBDB1]">
                    Obrigado pelo seu contacto. A Value Advantage responderá com a maior brevidade.
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
                    <label htmlFor="assunto" className="mb-2 block font-sans text-sm font-bold text-[#102A23]">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      defaultValue=""
                      className="w-full cursor-pointer rounded-xl border border-[#102A23]/15 bg-white px-4 py-3 font-sans text-[#102A23] outline-none transition-colors focus:border-[#2E7D6A] focus:ring-2 focus:ring-[#2E7D6A]/25"
                    >
                      <option value="" disabled>
                        Selecione um serviço
                      </option>
                      <option>Contabilidade</option>
                      <option>Recursos Humanos</option>
                      <option>Faturação</option>
                      <option>Consultoria e Apoio à Gestão</option>
                      <option>Constituição de Empresa</option>
                      <option>Alojamento Local</option>
                      <option>E-Fatura e IRS</option>
                      <option>Outro assunto</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#102A23]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Como podemos ajudar?"
                      className="w-full rounded-xl border border-[#102A23]/15 bg-white px-4 py-3 font-sans text-[#102A23] outline-none transition-colors placeholder:text-[#90A89D] focus:border-[#2E7D6A] focus:ring-2 focus:ring-[#2E7D6A]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2E7D6A] px-7 py-3.5 font-sans text-base font-bold text-white transition-colors hover:bg-[#256655] cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#6E827A]">
                    Formulário de demonstração. Para contacto imediato, ligue {brand.phoneDisplay} ou use o
                    WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="flex-1 overflow-hidden rounded-3xl border border-[#102A23]/10">
                <iframe
                  title="Mapa — Value Advantage, Av. 5 de Outubro 151, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#2E7D6A]/30 bg-[#2E7D6A]/5 px-6 py-4 font-sans text-base font-bold text-[#256655] transition-colors hover:bg-[#2E7D6A] hover:text-white cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" /> Falar agora no WhatsApp
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
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#102A23]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#102A23]/15 bg-white px-4 py-3 font-sans text-[#102A23] outline-none transition-colors placeholder:text-[#90A89D] focus:border-[#2E7D6A] focus:ring-2 focus:ring-[#2E7D6A]/25"
      />
    </div>
  )
}
