import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Mail, Check, Smartphone, Landmark } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Smartphone, label: 'Telemóvel / WhatsApp', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Landmark, label: 'Telefone fixo', value: brand.landlineDisplay, href: brand.landlineHref },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.address, href: `https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}`, external: true },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | ImoBenfica by Marta Pereira',
    'Peça uma avaliação gratuita do seu imóvel. Telemóvel, WhatsApp, email e morada da ImoBenfica em Benfica, Lisboa.',
  )

  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: 'Pedir avaliação',
    zona: '',
    mensagem: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <>
      {/* Page hero (light) */}
      <section className="border-b border-[#7A1B47]/15 bg-[#F4EAEE] px-6 pt-20 pb-16 text-[#241019]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#7A1B47]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-playfair text-5xl font-semibold leading-[1.05] text-[#241019] sm:text-6xl">
              Vamos avaliar o seu imóvel?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#46343D]">
              Peça uma avaliação gratuita e sem compromisso, ou fale connosco por telefone, WhatsApp ou
              email. A Marta e a equipa respondem-lhe o mais rápido possível.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-[#FFFFFF] pb-6 pt-12">
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
                    'flex h-full flex-col gap-3 rounded-xl border border-[#241019]/10 bg-[#F6F3EC] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7A1B47]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-[#241019] text-[#7A1B47]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#6E5A63]">{c.label}</p>
                    <p className="mt-1 font-sans font-bold text-[#241019]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Quick actions: call / call / whatsapp */}
      <section className="bg-[#FFFFFF] pb-10 pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-3 rounded-xl border border-[#241019]/10 bg-[#F6F3EC] p-4 sm:flex-row">
              <a
                href={brand.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#241019] px-5 py-3 font-sans text-sm font-bold text-[#F6F3EC] transition-colors hover:bg-[#3A1228] cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#7A1B47]" /> {brand.phoneDisplay}
              </a>
              <a
                href={brand.landlineHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-[#241019]/15 bg-[#FFFFFF] px-5 py-3 font-sans text-sm font-bold text-[#241019] transition-colors hover:border-[#7A1B47]/50 cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#7A1B47]" /> {brand.landlineDisplay}
              </a>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#7A1B47] px-5 py-3 font-sans text-sm font-bold text-[#F6F3EC] transition-colors hover:bg-[#66163C] cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + map + hours */}
      <section className="bg-[#FFFFFF] py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-2xl border border-[#241019]/10 bg-[#F6F3EC] p-8 sm:p-10">
              <h2 className="font-playfair text-2xl font-semibold text-[#241019]">Pedir avaliação / contacto</h2>
              <p className="mt-2 text-sm text-[#5A4750]">
                Preencha e entramos em contacto consigo. Sem compromisso.
              </p>

              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-[#241019] p-10 text-center text-[#F6F3EC]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#7A1B47] text-[#F6F3EC]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-playfair text-xl font-semibold">Pedido enviado!</p>
                  <p className="text-sm text-[#D8C2CC]">
                    Obrigado, {form.nome || 'pelo seu contacto'}. A Marta entrará em contacto consigo brevemente.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-sm font-semibold text-[#7A1B47] underline-offset-4 hover:underline cursor-pointer"
                  >
                    Enviar outro pedido
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
                    <Field id="nome" label="Nome" placeholder="O seu nome" value={form.nome} onChange={update('nome')} />
                    <Field id="telefone" label="Telefone" type="tel" placeholder="9XX XXX XXX" value={form.telefone} onChange={update('telefone')} />
                  </div>
                  <Field id="email" label="Email" type="email" placeholder="email@exemplo.pt" value={form.email} onChange={update('email')} />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="assunto" className="mb-2 block font-sans text-sm font-bold text-[#241019]">
                        Assunto
                      </label>
                      <select
                        id="assunto"
                        value={form.assunto}
                        onChange={update('assunto')}
                        className="w-full rounded-lg border border-[#241019]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#241019] outline-none transition-colors focus:border-[#7A1B47] focus:ring-2 focus:ring-[#7A1B47]/30 cursor-pointer"
                      >
                        <option>Pedir avaliação</option>
                        <option>Comprar</option>
                        <option>Vender</option>
                        <option>Arrendar</option>
                        <option>Outro assunto</option>
                      </select>
                    </div>
                    <Field
                      id="zona"
                      label="Zona / Imóvel"
                      placeholder="Ex.: T3 em Benfica"
                      required={false}
                      value={form.zona}
                      onChange={update('zona')}
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#241019]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={update('mensagem')}
                      placeholder="Conte-nos como o podemos ajudar."
                      className="w-full rounded-lg border border-[#241019]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#241019] outline-none transition-colors placeholder:text-[#C0A2AF] focus:border-[#7A1B47] focus:ring-2 focus:ring-[#7A1B47]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#241019] px-7 py-3.5 font-sans text-base font-bold text-[#F6F3EC] transition-colors hover:bg-[#3A1228] cursor-pointer"
                  >
                    <Mail className="h-4 w-4 text-[#7A1B47]" /> Enviar pedido
                  </button>
                  <p className="text-center text-xs text-[#6E5A63]">
                    Formulário de demonstração — não envia dados. Para marcações imediatas, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + hours */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-2xl border border-[#241019]/10">
                <iframe
                  title="Mapa — ImoBenfica by Marta Pereira"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-2xl border border-[#241019]/10 bg-[#F6F3EC] p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-lg bg-[#241019] text-[#7A1B47]">
                    <Clock className="h-5 w-5" />
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-[#241019]">Horário</h3>
                </div>
                <ul className="mt-5 divide-y divide-[#241019]/10">
                  {brand.hoursLines.map((h) => (
                    <li key={h.day} className="flex items-center justify-between py-2.5 text-sm">
                      <span className="font-semibold text-[#241019]">{h.day}</span>
                      <span className="text-[#5A4750]">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-center gap-2 border-t border-[#241019]/10 pt-4 text-sm text-[#5A4750]">
                  <MapPin className="h-4 w-4 text-[#7A1B47]" /> {brand.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', placeholder, value, onChange, required = true }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#241019]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#241019]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#241019] outline-none transition-colors placeholder:text-[#C0A2AF] focus:border-[#7A1B47] focus:ring-2 focus:ring-[#7A1B47]/30"
      />
    </div>
  )
}
