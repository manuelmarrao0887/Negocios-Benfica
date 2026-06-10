import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, Smartphone } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Smartphone, label: 'Telemóvel · WhatsApp', value: brand.mobileDisplay, href: brand.whatsapp, external: true },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.address },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Conta 100% — Contabilidade',
    'Fale com a Conta 100% em Benfica, Lisboa. Telefone 217 789 402, WhatsApp 937 022 373 e email geral@contacemporcento.pt.',
  )
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.id]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F4F8F6] px-6 pt-36 pb-16">
        <div className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-[#1F9D6B]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#1F9D6B]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-jakarta text-5xl font-extrabold leading-[1.05] text-[#0E2A23] sm:text-6xl">
              Falemos sobre o seu negócio.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#51635C]">
              Marque uma reunião por telefone ou WhatsApp, ou deixe-nos uma mensagem. Respondemos o mais
              rápido possível — e, se preferir, deslocamo-nos à sua empresa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-[#FFFFFF] pb-6 pt-10">
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
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#0E2A23]/10 bg-[#F4F8F6] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1F9D6B]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#0E2A23] text-[#1F9D6B]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#51635C]/70">{c.label}</p>
                    <p className="mt-1 font-sans font-bold text-[#0E2A23]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Quick actions */}
      <section className="bg-[#FFFFFF] pt-4">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-4 px-6">
          <a
            href={brand.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#1F9D6B] px-6 py-3 font-sans text-sm font-bold text-[#FFFFFF] transition-colors hover:bg-[#178a5c] cursor-pointer"
          >
            <Phone className="h-4 w-4" /> Ligar {brand.phoneDisplay}
          </a>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#0E2A23]/15 px-6 py-3 font-sans text-sm font-bold text-[#0E2A23] transition-colors hover:border-[#1F9D6B]/40 hover:text-[#1F9D6B] cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp {brand.mobileDisplay}
          </a>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-[#FFFFFF] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#0E2A23]/10 bg-[#F4F8F6] p-8 sm:p-10">
              <h2 className="font-jakarta text-2xl font-bold text-[#0E2A23]">Enviar mensagem</h2>
              <p className="mt-2 text-sm text-[#51635C]">
                Conte-nos o que precisa e entraremos em contacto.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-[#0E2A23] to-[#123C66] p-10 text-center text-[#FFFFFF]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#1F9D6B] text-[#FFFFFF]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-jakarta text-xl font-bold">Mensagem enviada!</p>
                  <p className="text-sm text-[#a9c2b8]">
                    Obrigado pelo contacto, {form.nome ? form.nome.split(' ')[0] : ''}. Entraremos em
                    contacto consigo brevemente.
                  </p>
                </div>
              ) : (
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="nome" label="Nome" placeholder="O seu nome" value={form.nome} onChange={update} />
                    <Field
                      id="telefone"
                      label="Telefone"
                      type="tel"
                      placeholder="9XX XXX XXX"
                      value={form.telefone}
                      onChange={update}
                    />
                  </div>
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="email@exemplo.pt"
                    value={form.email}
                    onChange={update}
                  />
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#0E2A23]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={update}
                      placeholder="Em que podemos ajudar? (ex.: contabilidade da minha empresa, IRS, recibos verdes...)"
                      className="w-full rounded-xl border border-[#0E2A23]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#0E2A23] outline-none transition-colors placeholder:text-[#9aa8a2] focus:border-[#1F9D6B] focus:ring-2 focus:ring-[#1F9D6B]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1F9D6B] px-7 py-3.5 font-sans text-base font-bold text-[#FFFFFF] transition-colors hover:bg-[#178a5c] cursor-pointer"
                  >
                    <Mail className="h-4 w-4" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#51635C]/80">
                    Formulário de demonstração — não envia dados para nenhum servidor. Para marcações
                    imediatas, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + hours */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-[#0E2A23]/10">
                <iframe
                  title="Mapa — Conta 100% Contabilidade, Benfica"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-[#0E2A23] p-6 text-[#FFFFFF]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1F9D6B] text-[#FFFFFF]">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#a9c2b8]">Horário</p>
                  <p className="mt-1 font-sans font-bold">{brand.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#0E2A23]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#0E2A23]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#0E2A23] outline-none transition-colors placeholder:text-[#9aa8a2] focus:border-[#1F9D6B] focus:ring-2 focus:ring-[#1F9D6B]/30"
      />
    </div>
  )
}
