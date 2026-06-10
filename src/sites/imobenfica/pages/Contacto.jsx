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
      {/* Page hero */}
      <section className="bg-[#14233B] px-6 pt-20 pb-16 text-[#F6F3EC]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#B7892E]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-playfair text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Vamos avaliar o seu imóvel?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#bcc6d4]">
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
                    'flex h-full flex-col gap-3 rounded-xl border border-[#14233B]/10 bg-[#F6F3EC] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B7892E]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-[#14233B] text-[#B7892E]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#8a93a3]">{c.label}</p>
                    <p className="mt-1 font-sans font-bold text-[#14233B]">{c.value}</p>
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
            <div className="flex flex-col gap-3 rounded-xl border border-[#14233B]/10 bg-[#F6F3EC] p-4 sm:flex-row">
              <a
                href={brand.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#14233B] px-5 py-3 font-sans text-sm font-bold text-[#F6F3EC] transition-colors hover:bg-[#1b2c45] cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#B7892E]" /> {brand.phoneDisplay}
              </a>
              <a
                href={brand.landlineHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-[#14233B]/15 bg-[#FFFFFF] px-5 py-3 font-sans text-sm font-bold text-[#14233B] transition-colors hover:border-[#B7892E]/50 cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#B7892E]" /> {brand.landlineDisplay}
              </a>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#B7892E] px-5 py-3 font-sans text-sm font-bold text-[#14233B] transition-colors hover:bg-[#a2792a] cursor-pointer"
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
            <div className="rounded-2xl border border-[#14233B]/10 bg-[#F6F3EC] p-8 sm:p-10">
              <h2 className="font-playfair text-2xl font-semibold text-[#14233B]">Pedir avaliação / contacto</h2>
              <p className="mt-2 text-sm text-[#5A6577]">
                Preencha e entramos em contacto consigo. Sem compromisso.
              </p>

              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-[#14233B] p-10 text-center text-[#F6F3EC]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#B7892E] text-[#14233B]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-playfair text-xl font-semibold">Pedido enviado!</p>
                  <p className="text-sm text-[#bcc6d4]">
                    Obrigado, {form.nome || 'pelo seu contacto'}. A Marta entrará em contacto consigo brevemente.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-sm font-semibold text-[#B7892E] underline-offset-4 hover:underline cursor-pointer"
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
                      <label htmlFor="assunto" className="mb-2 block font-sans text-sm font-bold text-[#14233B]">
                        Assunto
                      </label>
                      <select
                        id="assunto"
                        value={form.assunto}
                        onChange={update('assunto')}
                        className="w-full rounded-lg border border-[#14233B]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#14233B] outline-none transition-colors focus:border-[#B7892E] focus:ring-2 focus:ring-[#B7892E]/30 cursor-pointer"
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
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#14233B]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={update('mensagem')}
                      placeholder="Conte-nos como o podemos ajudar."
                      className="w-full rounded-lg border border-[#14233B]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#14233B] outline-none transition-colors placeholder:text-[#9aa6b6] focus:border-[#B7892E] focus:ring-2 focus:ring-[#B7892E]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#14233B] px-7 py-3.5 font-sans text-base font-bold text-[#F6F3EC] transition-colors hover:bg-[#1b2c45] cursor-pointer"
                  >
                    <Mail className="h-4 w-4 text-[#B7892E]" /> Enviar pedido
                  </button>
                  <p className="text-center text-xs text-[#8a93a3]">
                    Formulário de demonstração — não envia dados. Para marcações imediatas, ligue {brand.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + hours */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-2xl border border-[#14233B]/10">
                <iframe
                  title="Mapa — ImoBenfica by Marta Pereira"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-2xl border border-[#14233B]/10 bg-[#F6F3EC] p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-lg bg-[#14233B] text-[#B7892E]">
                    <Clock className="h-5 w-5" />
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-[#14233B]">Horário</h3>
                </div>
                <ul className="mt-5 divide-y divide-[#14233B]/10">
                  {brand.hoursLines.map((h) => (
                    <li key={h.day} className="flex items-center justify-between py-2.5 text-sm">
                      <span className="font-semibold text-[#14233B]">{h.day}</span>
                      <span className="text-[#5A6577]">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-center gap-2 border-t border-[#14233B]/10 pt-4 text-sm text-[#5A6577]">
                  <MapPin className="h-4 w-4 text-[#B7892E]" /> {brand.address}
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
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#14233B]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#14233B]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#14233B] outline-none transition-colors placeholder:text-[#9aa6b6] focus:border-[#B7892E] focus:ring-2 focus:ring-[#B7892E]/30"
      />
    </div>
  )
}
