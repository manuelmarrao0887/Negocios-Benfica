import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, Printer, Smartphone, Send } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

function GridField({ className = '', tone = '#16182B', opacity = 0.05 }) {
  return (
    <svg aria-hidden="true" className={className} width="100%" height="100%" style={{ color: tone, opacity }}>
      <defs>
        <pattern id="rd-grid-ct" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rd-grid-ct)" />
    </svg>
  )
}

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Smartphone, label: 'Telemóvel / WhatsApp', value: brand.mobileDisplay, href: brand.whatsapp, external: true },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: Printer, label: 'Fax', value: brand.faxDisplay },
  { icon: MapPin, label: 'Morada', value: brand.address },
  { icon: Clock, label: 'Horário', value: brand.hours },
]

const ASSUNTOS = [
  'Assistência técnica / avaria',
  'Pedido de orçamento',
  'Máquinas de alta frequência',
  'Máquinas de ultra-sons',
  'Componentes / consumíveis',
  'Outro assunto',
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Rui Dinis, Lda. — Pedir assistência ou orçamento',
    'Peça assistência técnica ou um orçamento à Rui Dinis, Lda. Telefone, WhatsApp, email e morada em Benfica, Lisboa.',
  )
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    assunto: ASSUNTOS[0],
    mensagem: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F4F6F9] px-6 pt-36 pb-16">
        <GridField className="absolute inset-0" tone="#16182B" opacity={0.05} />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-plexmono text-xs font-semibold uppercase tracking-[0.18em] text-[#2E3192]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-plex text-5xl font-bold leading-[1.05] text-[#16182B] sm:text-6xl">
              Pedir assistência ou orçamento.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4C5A68]">
              Fale connosco sobre o seu equipamento industrial. Ligue, envie mensagem de WhatsApp ou
              utilize o formulário — respondemos com a brevidade possível.
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
              <Reveal key={c.label} delay={i * 60}>
                <Tag
                  {...(c.href
                    ? { href: c.href, ...(c.external ? { target: '_blank', rel: 'noreferrer' } : {}) }
                    : {})}
                  className={
                    'flex h-full items-start gap-4 rounded-xl border border-[#16182B]/10 bg-[#F4F6F9] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2E3192]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#16182B] text-[#E0A126]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-plexmono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9DAAB8]">
                      {c.label}
                    </p>
                    <p className="mt-1 font-plex font-bold text-[#16182B]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Quick action row */}
      <section className="bg-white pt-4">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6">
          <a
            href={brand.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-[#2E3192] px-5 py-3 font-plex text-sm font-bold text-white transition-colors hover:bg-[#23265E] cursor-pointer"
          >
            <Phone className="h-4 w-4" /> Ligar agora
          </a>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[#E0A126] px-5 py-3 font-plex text-sm font-bold text-[#9A6206] transition-colors hover:bg-[#E0A126] hover:text-[#16182B] cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={brand.emailHref}
            className="inline-flex items-center gap-2 rounded-md border border-[#16182B]/20 px-5 py-3 font-plex text-sm font-bold text-[#16182B] transition-colors hover:border-[#16182B]/40 hover:bg-[#16182B]/[0.03] cursor-pointer"
          >
            <Mail className="h-4 w-4" /> {brand.email}
          </a>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-xl border border-[#16182B]/10 bg-[#F4F6F9] p-8 sm:p-10">
              <h2 className="font-plex text-2xl font-bold text-[#16182B]">Pedir assistência / orçamento</h2>
              <p className="mt-2 text-sm text-[#4C5A68]">
                Descreva o equipamento e a necessidade. Quanto mais detalhe, mais rápida a resposta.
              </p>

              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-[#16182B] p-10 text-center text-[#F4F6F9]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#2E3192] text-white">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-plex text-xl font-bold">Pedido enviado.</p>
                  <p className="text-sm text-[#9DAAB8]">
                    Obrigado pelo contacto. Entraremos em contacto consigo brevemente. Para casos
                    urgentes, ligue {brand.phoneDisplay}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 font-plexmono text-xs uppercase tracking-[0.14em] text-[#E0A126] underline-offset-4 hover:underline cursor-pointer"
                  >
                    Enviar novo pedido
                  </button>
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
                    <Field id="nome" label="Nome" value={form.nome} onChange={update('nome')} placeholder="O seu nome" />
                    <Field id="empresa" label="Empresa" required={false} value={form.empresa} onChange={update('empresa')} placeholder="Nome da empresa" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="Email" type="email" value={form.email} onChange={update('email')} placeholder="email@empresa.pt" />
                    <Field id="telefone" label="Telefone" type="tel" value={form.telefone} onChange={update('telefone')} placeholder="2XX XXX XXX" />
                  </div>
                  <div>
                    <label htmlFor="assunto" className="mb-2 block font-plex text-sm font-bold text-[#16182B]">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      value={form.assunto}
                      onChange={update('assunto')}
                      className="w-full cursor-pointer rounded-md border border-[#16182B]/15 bg-white px-4 py-3 font-plex text-[#16182B] outline-none transition-colors focus:border-[#2E3192] focus:ring-2 focus:ring-[#2E3192]/25"
                    >
                      {ASSUNTOS.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-plex text-sm font-bold text-[#16182B]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={update('mensagem')}
                      placeholder="Descreva o equipamento, a marca/modelo (se conhecida) e a necessidade."
                      className="w-full rounded-md border border-[#16182B]/15 bg-white px-4 py-3 font-plex text-[#16182B] outline-none transition-colors placeholder:text-[#9DAAB8] focus:border-[#2E3192] focus:ring-2 focus:ring-[#2E3192]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#2E3192] px-7 py-3.5 font-plex text-base font-bold text-white transition-colors hover:bg-[#23265E] cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar pedido
                  </button>
                  <p className="text-center font-plexmono text-[11px] uppercase tracking-[0.1em] text-[#9DAAB8]">
                    Formulário de demonstração — sem envio real. Para resposta imediata, ligue{' '}
                    {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-4">
              <div className="overflow-hidden rounded-xl border border-[#16182B]/10">
                <iframe
                  title="Mapa — Rui Dinis, Lda. (Rua Rogério Amaral, Lisboa)"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-xl border border-[#16182B]/10 bg-[#F4F6F9] p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#2E3192]" />
                  <div>
                    <p className="font-plex font-bold text-[#16182B]">{brand.short}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#4C5A68]">{brand.address}</p>
                    <p className="mt-2 font-plexmono text-[11px] uppercase tracking-[0.14em] text-[#9DAAB8]">
                      {brand.hours}
                    </p>
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

function Field({ id, label, type = 'text', value, onChange, placeholder, required = true }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-plex text-sm font-bold text-[#16182B]">
        {label}
        {!required && <span className="ml-1 font-plexmono text-[10px] font-normal uppercase tracking-wide text-[#9DAAB8]">opcional</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#16182B]/15 bg-white px-4 py-3 font-plex text-[#16182B] outline-none transition-colors placeholder:text-[#9DAAB8] focus:border-[#2E3192] focus:ring-2 focus:ring-[#2E3192]/25"
      />
    </div>
  )
}
