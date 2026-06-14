import { useState } from 'react'
import {
  Phone,
  Smartphone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Check,
  CalendarHeart,
  Instagram,
} from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Smartphone, label: 'Telemóvel', value: brand.mobileDisplay, href: brand.mobileHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Enviar mensagem', href: brand.whatsappText, external: true },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | Art.Z Hair & Experience — Lisboa',
    'Marque a sua experiência na Art.Z, na Av. Luís Bívar (Saldanha), Lisboa. Telefone, WhatsApp, email, morada, horário e mapa.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F7F3EF] px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-[#A8854E]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-cormorant text-6xl font-semibold leading-[0.98] text-[#1A1614] sm:text-7xl">
              Vamos marcar a sua experiência.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4A413B]">
              Estamos na Av. Luís Bívar, no Saldanha. Ligue, envie mensagem por WhatsApp ou deixe-nos
              os seus dados — respondemos com todo o gosto. {brand.hoursNote}
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
                  {...(c.href
                    ? { href: c.href, ...(c.external ? { target: '_blank', rel: 'noreferrer' } : {}) }
                    : {})}
                  className={
                    'flex h-full flex-col gap-3 rounded-2xl border border-[#1A1614]/10 bg-[#F7F3EF] p-6 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#A8854E]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-full bg-[#1A1614] text-[#D8B57E]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A7E74]">
                      {c.label}
                    </p>
                    <p className="mt-1 font-jost font-semibold text-[#1A1614]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Address + hours strip */}
      <section className="bg-white pb-6 pt-4">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-[#1A1614]/10 bg-[#F7F3EF] p-6">
              <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#A8854E]/15 text-[#A8854E]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A7E74]">Morada</p>
                <p className="mt-1 font-jost font-semibold text-[#1A1614]">{brand.address}</p>
                <p className="mt-0.5 text-sm text-[#6E5A52]">{brand.district}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-[#1A1614]/10 bg-[#F7F3EF] p-6">
              <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#A8854E]/15 text-[#A8854E]">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A7E74]">Horário</p>
                <p className="mt-1 font-jost font-semibold text-[#1A1614]">{brand.hours}</p>
                <p className="mt-0.5 text-sm text-[#6E5A52]">{brand.hoursNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-[2rem] border border-[#1A1614]/10 bg-[#F7F3EF] p-8 sm:p-10">
              <h2 className="font-cormorant text-3xl font-semibold text-[#1A1614]">Marcar experiência</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6E5A52]">
                Deixe-nos os seus dados e o que procura. Entramos em contacto para confirmar dia e hora.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#1A1614] p-10 text-center text-[#F7F3EF]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#A8854E] text-[#1A1614]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-cormorant text-2xl font-semibold">Pedido enviado!</p>
                  <p className="text-sm text-[#CDBFB3]">
                    Obrigado pelo seu contacto. Entraremos em contacto consigo brevemente para confirmar
                    a sua marcação.
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
                    <Field
                      id="telefone"
                      label="Telefone"
                      type="tel"
                      placeholder="9XX XXX XXX"
                      autoComplete="tel"
                    />
                  </div>
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="email@exemplo.pt"
                    autoComplete="email"
                  />
                  <div>
                    <label htmlFor="servico" className="mb-2 block font-jost text-sm font-semibold text-[#1A1614]">
                      Serviço pretendido
                    </label>
                    <select
                      id="servico"
                      defaultValue=""
                      required
                      className="w-full rounded-xl border border-[#1A1614]/15 bg-white px-4 py-3 font-jost text-[#1A1614] outline-none transition-colors focus:border-[#A8854E] focus:ring-2 focus:ring-[#A8854E]/30 cursor-pointer"
                    >
                      <option value="" disabled>
                        Escolha um serviço
                      </option>
                      <option>Corte & Hairstyling</option>
                      <option>Coloração / Balayage</option>
                      <option>Tratamentos capilares</option>
                      <option>Alisamentos & Anti-frizz</option>
                      <option>Spa & Bem-estar</option>
                      <option>Maquilhagem & Olhar</option>
                      <option>Unhas & Nail Art</option>
                      <option>Barbearia</option>
                      <option>Noivas & Eventos</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-jost text-sm font-semibold text-[#1A1614]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      placeholder="Conte-nos o que procura ou a sua disponibilidade…"
                      className="w-full rounded-xl border border-[#1A1614]/15 bg-white px-4 py-3 font-jost text-[#1A1614] outline-none transition-colors placeholder:text-[#A89A8E] focus:border-[#A8854E] focus:ring-2 focus:ring-[#A8854E]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1A1614] px-7 py-3.5 font-jost text-base font-semibold tracking-wide text-[#F7F3EF] transition-colors hover:bg-[#A8854E] cursor-pointer"
                  >
                    <CalendarHeart className="h-4 w-4" /> Enviar pedido de marcação
                  </button>
                  <p className="text-center text-xs text-[#8A7E74]">
                    Formulário de demonstração. Para marcações imediatas, ligue {brand.phoneDisplay} ou
                    use o WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + quick actions */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-[2rem] border border-[#1A1614]/10">
                <iframe
                  title="Mapa — Art.Z Hair & Experience, Av. Luís Bívar, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={brand.whatsappText}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#A8854E] px-5 py-3.5 font-jost text-sm font-semibold tracking-wide text-[#1A1614] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#1A1614]/20 px-5 py-3.5 font-jost text-sm font-semibold tracking-wide text-[#1A1614] transition-colors hover:bg-[#1A1614]/5 cursor-pointer"
                >
                  <Instagram className="h-4 w-4" /> {brand.instagramHandle}
                </a>
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
      <label htmlFor={id} className="mb-2 block font-jost text-sm font-semibold text-[#1A1614]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-[#1A1614]/15 bg-white px-4 py-3 font-jost text-[#1A1614] outline-none transition-colors placeholder:text-[#A89A8E] focus:border-[#A8854E] focus:ring-2 focus:ring-[#A8854E]/30"
      />
    </div>
  )
}
