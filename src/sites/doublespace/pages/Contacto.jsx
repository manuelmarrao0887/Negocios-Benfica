import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Instagram, Check, CalendarHeart } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand, services } from '../data.jsx'

const infoCards = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Enviar mensagem', href: brand.whatsapp, external: true },
  { icon: Instagram, label: 'Instagram', value: brand.instagramHandle, href: brand.instagram, external: true },
  { icon: MapPin, label: 'Morada', value: brand.address },
  { icon: Clock, label: 'Horário', value: brand.hours },
  { icon: CalendarHeart, label: 'Marcações', value: 'Telefone · WhatsApp · DM' },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | DoubleSpace — Nails · Cosmetology · Barber',
    'Marca a tua visita à DoubleSpace, em Benfica. Telefone, WhatsApp, Instagram, morada e horário.',
  )
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Page hero (light) */}
      <section className="relative overflow-hidden bg-[#F6F1EC] px-6 pt-36 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-28 -top-20 h-[26rem] w-[26rem] rounded-full bg-[#C06A52]/12 blur-3xl" />
          <div className="absolute -left-28 bottom-[-4rem] h-72 w-72 rounded-full bg-[#A98DA0]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#C06A52]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-bricolage text-5xl font-bold leading-[1.03] text-[#1B1714] sm:text-6xl">
              Marca a tua visita.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#46413c]">
              Estamos em Benfica, abertos todos os dias das 9h às 21h. Marca por telefone, WhatsApp ou
              DM do Instagram — ou deixa-nos o teu pedido aqui.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-[#FFFFFF] pb-6 pt-12">
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
                    'flex h-full items-center gap-4 rounded-2xl border border-[#1B1714]/10 bg-[#F6F1EC] p-5 ' +
                    (c.href
                      ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C06A52]/40 hover:shadow-lg cursor-pointer'
                      : '')
                  }
                >
                  <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#C06A52] text-[#F6F1EC]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#8a7f76]">{c.label}</p>
                    <p className="mt-0.5 truncate font-sans font-bold text-[#1B1714]">{c.value}</p>
                  </div>
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Quick actions */}
      <section className="bg-[#FFFFFF] pb-6 pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-wrap gap-4">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#1B1714] px-6 py-3 font-sans text-sm font-bold text-[#F6F1EC] transition-colors hover:bg-[#332b25] cursor-pointer"
              >
                <Phone className="h-4 w-4" /> Ligar {brand.phoneDisplay}
              </a>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C06A52] px-6 py-3 font-sans text-sm font-bold text-[#F6F1EC] transition-colors hover:bg-[#a85842] cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1B1714]/20 px-6 py-3 font-sans text-sm font-bold text-[#1B1714] transition-colors hover:bg-[#1B1714]/5 cursor-pointer"
              >
                <Instagram className="h-4 w-4" /> DM no Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-[#FFFFFF] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-[#1B1714]/10 bg-[#F6F1EC] p-8 sm:p-10">
              <h2 className="font-bricolage text-2xl font-bold text-[#1B1714]">Pedir marcação</h2>
              <p className="mt-2 text-sm text-[#6B625B]">
                Diz-nos o que procuras e em que espaço. Confirmamos contigo a disponibilidade.
              </p>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#1B1714] p-10 text-center text-[#F6F1EC]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#C06A52] text-[#F6F1EC]">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-bricolage text-xl font-bold">Pedido enviado!</p>
                  <p className="text-sm text-[#F6F1EC]/70">
                    Obrigado pelo contacto. Para confirmar mais depressa, fala connosco por WhatsApp ou
                    DM do Instagram.
                  </p>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#C06A52] px-6 py-3 font-sans text-sm font-bold text-[#F6F1EC] transition-colors hover:bg-[#a85842] cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" /> Abrir WhatsApp
                  </a>
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
                    <Field id="nome" label="Nome" placeholder="O teu nome" />
                    <Field id="telefone" label="Telefone" type="tel" placeholder="9XX XXX XXX" />
                  </div>
                  <div>
                    <label htmlFor="servico" className="mb-2 block font-sans text-sm font-bold text-[#1B1714]">
                      Espaço
                    </label>
                    <select
                      id="servico"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-[#1B1714]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#1B1714] outline-none transition-colors focus:border-[#C06A52] focus:ring-2 focus:ring-[#C06A52]/30"
                    >
                      <option value="" disabled>
                        Escolhe um espaço
                      </option>
                      {services.map((s) => (
                        <option key={s.key} value={s.tag}>
                          {s.tag} — {s.label}
                        </option>
                      ))}
                      <option value="styling">Styling & Hairdressing</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#1B1714]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder="O que gostarias de marcar e quando?"
                      className="w-full rounded-xl border border-[#1B1714]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#1B1714] outline-none transition-colors placeholder:text-[#a99e94] focus:border-[#C06A52] focus:ring-2 focus:ring-[#C06A52]/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C06A52] px-7 py-3.5 font-sans text-base font-bold text-[#F6F1EC] transition-colors hover:bg-[#a85842] cursor-pointer"
                  >
                    <CalendarHeart className="h-4 w-4" /> Enviar pedido
                  </button>
                  <p className="text-center text-xs text-[#8a7f76]">
                    Formulário de demonstração. Para marcações imediatas, liga {brand.phoneDisplay} ou
                    usa o WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-[#1B1714]/10">
                <iframe
                  title="Mapa — DoubleSpace, Benfica"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-3xl bg-[#1B1714] p-7 text-[#F6F1EC]">
                <h3 className="font-bricolage text-lg font-bold">DoubleSpace · Benfica</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3 text-[#F6F1EC]/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C06A52]" /> {brand.address}
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1EC]/80">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#C06A52]" /> {brand.hours}
                  </li>
                  <li className="flex items-start gap-3 text-[#F6F1EC]/80">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C06A52]" />
                    <a href={brand.phoneHref} className="transition-colors hover:text-[#C06A52] cursor-pointer">
                      {brand.phoneDisplay}
                    </a>
                  </li>
                </ul>
              </div>
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
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#1B1714]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#1B1714]/15 bg-[#FFFFFF] px-4 py-3 font-sans text-[#1B1714] outline-none transition-colors placeholder:text-[#a99e94] focus:border-[#C06A52] focus:ring-2 focus:ring-[#C06A52]/30"
      />
    </div>
  )
}
