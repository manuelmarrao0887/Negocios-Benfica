import { useState } from 'react'
import { Phone, MapPin, Clock, Mail, Send, Check, Instagram, BookOpen } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, sub: brand.phoneNote, href: brand.phoneHref },
  { icon: Mail, label: 'Email', value: brand.email, sub: 'Encomendas e informações', href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.address, sub: 'Avenidas Novas' },
  { icon: Clock, label: 'Horário', value: brand.hours, sub: brand.hoursClosed },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Tantos Livros, Livreiros',
    'Visite a Tantos Livros na Av. Marquês de Tomar 1B, Lisboa. Telefone, email, morada, horário e mapa.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F6F1E8] px-6 pt-36 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-fraunces text-5xl font-semibold leading-[1.05] text-[#2A2018] sm:text-6xl">
              Venha visitar-nos.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5C4F42]">
              Estamos nas Avenidas Novas, de segunda a sábado. Telefone, escreva-nos ou deixe uma
              mensagem — e passe por cá para um café entre livros.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-[#FBF7F0] pb-6 pt-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {infoCards.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            return (
              <Reveal key={c.label} delay={i * 70}>
                <Tag
                  {...(c.href ? { href: c.href } : {})}
                  className={
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#2A2018]/10 bg-[#F6F1E8] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#A4471F]/30 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#A4471F] text-[#FBF7F0]">
                    <c.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#8A7B6C]">{c.label}</p>
                    <p className="mt-1 break-words font-sans font-bold text-[#2A2018]">{c.value}</p>
                    {c.sub && <p className="mt-0.5 text-xs text-[#8A7B6C]">{c.sub}</p>}
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-[#FBF7F0] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#2A2018]/10 bg-[#F6F1E8] p-8 sm:p-10">
              <h2 className="font-fraunces text-2xl font-semibold text-[#2A2018]">Deixe-nos uma mensagem</h2>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#2A2018] p-10 text-center text-[#F6F1E8]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#D8B24A] text-[#2A2018]">
                    <Check className="h-7 w-7" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <p className="font-fraunces text-xl font-semibold">Mensagem enviada!</p>
                  <p className="text-sm text-[#B9A892]">
                    Obrigado pelo contacto. Respondemos o mais breve possível.
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
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#2A2018]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="Procura um livro? Quer encomendar? Diga-nos como podemos ajudar."
                      className="w-full rounded-xl border border-[#2A2018]/15 bg-[#FBF7F0] px-4 py-3 font-sans text-[#2A2018] outline-none transition-colors placeholder:text-[#9C8C7A] focus:border-[#A4471F] focus:ring-2 focus:ring-[#A4471F]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A4471F] px-7 py-3.5 font-sans text-base font-bold text-[#FBF7F0] transition-colors hover:bg-[#8E3D1A] cursor-pointer"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#8A7B6C]">
                    Formulário de demonstração. Para respostas imediatas, ligue {brand.phoneDisplay} ou
                    escreva para {brand.email}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + extras */}
          <div className="flex flex-col gap-6">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-3xl border border-[#2A2018]/10">
                <iframe
                  title="Mapa — Tantos Livros, Livreiros, Av. Marquês de Tomar 1B, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col gap-4 rounded-3xl bg-[#2A2018] p-7 text-[#F6F1E8] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="flex items-center gap-2 font-fraunces text-lg font-semibold">
                    <BookOpen className="h-5 w-5 text-[#D8B24A]" aria-hidden="true" /> Siga a Tantos Livros
                  </p>
                  <p className="mt-1 text-sm text-[#B9A892]">Novidades, agenda cultural e recomendações.</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram da Tantos Livros"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#F6F1E8] transition-colors hover:border-[#D8B24A] hover:text-[#D8B24A] cursor-pointer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={brand.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook da Tantos Livros"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#F6F1E8] transition-colors hover:border-[#D8B24A] hover:text-[#D8B24A] cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M14 9h3l.4-3H14V4.2c0-.8.3-1.3 1.5-1.3H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.2V6H7.5v3h2.8v9H14V9z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#2A2018]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#2A2018]/15 bg-[#FBF7F0] px-4 py-3 font-sans text-[#2A2018] outline-none transition-colors placeholder:text-[#9C8C7A] focus:border-[#A4471F] focus:ring-2 focus:ring-[#A4471F]/25"
      />
    </div>
  )
}
