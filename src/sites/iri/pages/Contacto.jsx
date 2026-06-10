import { useState } from 'react'
import { Phone, MapPin, Clock, Mail, Check, Smartphone, Store, HardHat, Send } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { brand } from '../data.jsx'

const phoneLines = [
  {
    icon: Store,
    label: 'Loja',
    sub: 'Materiais e aconselhamento',
    value: brand.phoneStoreDisplay,
    href: brand.phoneStoreHref,
  },
  {
    icon: HardHat,
    label: 'Obras & Orçamentos',
    sub: 'Aplicação e visitas técnicas',
    value: brand.phoneWorksDisplay,
    href: brand.phoneWorksHref,
  },
]

export default function Contacto() {
  usePageMeta(
    'Contacto | IRI — Isolamentos, Revestimentos e Impermeabilização',
    'Fale com a IRI em Lisboa. Linha de loja e linha de obras, telemóvel, emails e morada na Rua Jorge Barradas 37A.',
  )
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', assunto: 'Impermeabilização', mensagem: '' })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#F4F6F8] px-6 pt-36 pb-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(28,109,208,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,109,208,0.07) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
            maskImage: 'radial-gradient(ellipse 70% 80% at 30% 20%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 30% 20%, black, transparent)',
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#1C6DD0]">
              Contacto
            </span>
            <h1 className="mt-3 max-w-3xl font-manrope text-4xl font-extrabold leading-[1.05] tracking-tight text-[#14202B] sm:text-5xl">
              Fale connosco. Estamos cá para ajudar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#51616E]">
              Para materiais e aconselhamento, ligue à loja. Para obras e orçamentos, use a linha de
              obras. Ou deixe-nos uma mensagem e respondemos o mais rápido possível.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two phone lines */}
      <section className="bg-white pb-4 pt-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2">
          {phoneLines.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                className="group flex h-full items-center gap-5 rounded-2xl border border-[#14202B]/10 bg-[#F4F6F8] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1C6DD0]/40 hover:shadow-lg cursor-pointer"
              >
                <span className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#1C6DD0] text-white transition-colors group-hover:bg-[#1559a8]">
                  <c.icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#7a8a96]">{c.label}</p>
                  <p className="mt-0.5 font-manrope text-xl font-extrabold text-[#14202B]">{c.value}</p>
                  <p className="mt-0.5 text-sm text-[#51616E]">{c.sub}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Secondary contacts */}
      <section className="bg-white pb-6 pt-5">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <a
              href={brand.mobileHref}
              className="flex h-full flex-col gap-3 rounded-2xl border border-[#14202B]/10 bg-[#F4F6F8] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1C6DD0]/40 hover:shadow-lg cursor-pointer"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#1C6DD0] text-white">
                <Smartphone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#7a8a96]">Telemóvel</p>
                <p className="mt-1 font-sans font-bold text-[#14202B]">{brand.mobileDisplay}</p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={70}>
            <a
              href={`mailto:${brand.emailComercial}`}
              className="flex h-full flex-col gap-3 rounded-2xl border border-[#14202B]/10 bg-[#F4F6F8] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1C6DD0]/40 hover:shadow-lg cursor-pointer"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#1C6DD0] text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#7a8a96]">Email comercial</p>
                <p className="mt-1 break-all font-sans font-bold text-[#14202B]">{brand.emailComercial}</p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={140}>
            <a
              href={`mailto:${brand.emailInfo}`}
              className="flex h-full flex-col gap-3 rounded-2xl border border-[#14202B]/10 bg-[#F4F6F8] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1C6DD0]/40 hover:shadow-lg cursor-pointer"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#1C6DD0] text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#7a8a96]">Email geral</p>
                <p className="mt-1 break-all font-sans font-bold text-[#14202B]">{brand.emailInfo}</p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={210}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-[#14202B]/10 bg-[#F4F6F8] p-6">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#1C6DD0] text-white">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#7a8a96]">Horário</p>
                <p className="mt-1 font-sans font-bold text-[#14202B]">{brand.hours}</p>
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
            <div className="rounded-3xl border border-[#14202B]/10 bg-[#F4F6F8] p-8 sm:p-10">
              <h2 className="font-manrope text-2xl font-bold text-[#14202B]">Pedir orçamento ou informação</h2>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#14202B] p-10 text-center text-white">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#1C6DD0] text-white">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <p className="font-manrope text-xl font-bold">Mensagem enviada!</p>
                  <p className="text-sm text-[#9fb0bf]">
                    Obrigado pelo contacto. A equipa da IRI responderá brevemente.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 rounded-lg border border-white/25 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10 cursor-pointer"
                  >
                    Enviar outra mensagem
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
                  <div>
                    <label htmlFor="assunto" className="mb-2 block font-sans text-sm font-bold text-[#14202B]">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      value={form.assunto}
                      onChange={update('assunto')}
                      className="w-full cursor-pointer rounded-xl border border-[#14202B]/15 bg-white px-4 py-3 font-sans text-[#14202B] outline-none transition-colors focus:border-[#1C6DD0] focus:ring-2 focus:ring-[#1C6DD0]/25"
                    >
                      {['Impermeabilização', 'Revestimentos', 'Isolamento Térmico', 'Isolamento Acústico', 'Pavimentos', 'Compra de materiais (loja)', 'Outro'].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-2 block font-sans text-sm font-bold text-[#14202B]">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={update('mensagem')}
                      placeholder="Descreva o que precisa (local, tipo de obra, materiais...)"
                      className="w-full rounded-xl border border-[#14202B]/15 bg-white px-4 py-3 font-sans text-[#14202B] outline-none transition-colors placeholder:text-[#9aa8b2] focus:border-[#1C6DD0] focus:ring-2 focus:ring-[#1C6DD0]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1C6DD0] px-7 py-3.5 font-sans text-base font-bold text-white shadow-sm shadow-[#1C6DD0]/30 transition-colors hover:bg-[#1559a8] cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Enviar mensagem
                  </button>
                  <p className="text-center text-xs text-[#7a8a96]">
                    Formulário de demonstração — não envia dados para nenhum servidor. Para resposta
                    imediata, ligue {brand.phoneStoreDisplay}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map + address */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="flex items-start gap-3 rounded-2xl border border-[#14202B]/10 bg-[#F4F6F8] p-6">
                <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1C6DD0] text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#7a8a96]">Morada da loja</p>
                  <p className="mt-1 font-sans font-bold text-[#14202B]">{brand.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.mapsQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#1C6DD0] hover:text-[#1559a8] cursor-pointer"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>
              <div className="min-h-[360px] flex-1 overflow-hidden rounded-3xl border border-[#14202B]/10">
                <iframe
                  title="Mapa — IRI, Rua Jorge Barradas 37A, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
      <label htmlFor={id} className="mb-2 block font-sans text-sm font-bold text-[#14202B]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#14202B]/15 bg-white px-4 py-3 font-sans text-[#14202B] outline-none transition-colors placeholder:text-[#9aa8b2] focus:border-[#1C6DD0] focus:ring-2 focus:ring-[#1C6DD0]/25"
      />
    </div>
  )
}
