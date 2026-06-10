import { useState } from 'react'
import { MapPin, Instagram, ArrowUpRight, Check, Send } from 'lucide-react'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { GraoStrip } from '../components.jsx'
import { brand, disciplines } from '../data.jsx'

const initialForm = { nome: '', email: '', assunto: disciplines[0], mensagem: '' }

export default function Contacto() {
  usePageMeta(
    'Contacto | Pedrita — Estúdio de Design',
    'Fale com a Pedrita. Estúdio na Calçada do Tojal 71A, Lisboa. Formulário de demonstração e Instagram.',
  )

  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────────────── */}
      <section className="bg-[#F1EEE6] px-6 pt-36 pb-12 sm:pt-44 lg:px-10">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <span className="font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#2B5BD7]">
              Contacto
            </span>
            <h1 className="mt-5 font-syne text-6xl font-extrabold uppercase leading-[0.9] tracking-tight text-[#15181D] sm:text-7xl lg:text-8xl">
              Falar
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#5B6068] sm:text-xl">
              Conte-nos sobre o seu projeto. Deixe-nos uma mensagem ou siga o trabalho do estúdio no
              Instagram.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10">
              <GraoStrip count={28} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Form + info ──────────────────────────────────────────────── */}
      <section className="bg-[#F1EEE6] py-12 sm:py-16">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10">
          {/* Form */}
          <Reveal>
            <div className="border-t-2 border-[#15181D] pt-8">
              <h2 className="font-syne text-2xl font-bold uppercase tracking-tight text-[#15181D]">
                Enviar mensagem
              </h2>

              {sent ? (
                <div className="mt-8 flex flex-col items-start gap-5 bg-[#15181D] p-10 text-[#F1EEE6]">
                  <span className="grid h-14 w-14 place-items-center bg-[#E0B23B] text-[#15181D]">
                    <Check className="h-7 w-7" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <p className="font-syne text-2xl font-bold uppercase tracking-tight">
                    Mensagem enviada
                  </p>
                  <p className="text-[15px] leading-relaxed text-[#9aa0a8]">
                    Obrigado pelo contacto, {form.nome || 'sim'}. Este é um formulário de demonstração —
                    nenhuma mensagem foi efetivamente enviada.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initialForm)
                      setSent(false)
                    }}
                    className="mt-2 inline-flex items-center gap-2 border border-[#F1EEE6]/30 px-5 py-2.5 font-syne text-[12px] font-bold uppercase tracking-[0.14em] text-[#F1EEE6] transition-colors hover:bg-[#F1EEE6] hover:text-[#15181D] cursor-pointer"
                  >
                    Enviar outra
                  </button>
                </div>
              ) : (
                <form className="mt-7 space-y-6" onSubmit={onSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      id="nome"
                      label="Nome"
                      value={form.nome}
                      onChange={update('nome')}
                      placeholder="O seu nome"
                      autoComplete="name"
                    />
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="email@exemplo.pt"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="assunto"
                      className="mb-2 block font-syne text-[12px] font-bold uppercase tracking-[0.16em] text-[#15181D]"
                    >
                      Área do projeto
                    </label>
                    <select
                      id="assunto"
                      value={form.assunto}
                      onChange={update('assunto')}
                      className="w-full appearance-none border border-[#15181D]/20 bg-[#F1EEE6] px-4 py-3 font-sans text-[#15181D] outline-none transition-colors focus:border-[#2B5BD7] focus:ring-2 focus:ring-[#2B5BD7]/25 cursor-pointer"
                    >
                      {disciplines.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="mb-2 block font-syne text-[12px] font-bold uppercase tracking-[0.16em] text-[#15181D]"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={5}
                      value={form.mensagem}
                      onChange={update('mensagem')}
                      placeholder="Fale-nos do seu projeto…"
                      className="w-full resize-none border border-[#15181D]/20 bg-[#F1EEE6] px-4 py-3 font-sans text-[#15181D] outline-none transition-colors placeholder:text-[#9aa0a8] focus:border-[#2B5BD7] focus:ring-2 focus:ring-[#2B5BD7]/25"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 bg-[#15181D] px-7 py-4 font-syne text-sm font-bold uppercase tracking-[0.14em] text-[#F1EEE6] transition-colors duration-200 hover:bg-[#2B5BD7] cursor-pointer"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" /> Enviar mensagem
                  </button>
                  <p className="text-[13px] leading-relaxed text-[#5B6068]">
                    Formulário de demonstração — não envia dados para nenhum servidor. Para
                    acompanhar o estúdio, siga{' '}
                    <a
                      href={brand.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#2B5BD7] underline-offset-2 hover:underline cursor-pointer"
                    >
                      {brand.instagramHandle}
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info: morada + instagram */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-6">
              <div className="border-t-2 border-[#15181D] pt-8">
                <h2 className="font-syne text-2xl font-bold uppercase tracking-tight text-[#15181D]">
                  Estúdio
                </h2>
                <div className="mt-6 flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center bg-[#15181D] text-[#E0B23B]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <address className="not-italic">
                    <p className="font-syne text-[12px] font-bold uppercase tracking-[0.16em] text-[#5B6068]">
                      Morada
                    </p>
                    <p className="mt-1 text-lg font-medium leading-snug text-[#15181D]">
                      {brand.address}
                    </p>
                  </address>
                </div>

                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 flex items-center gap-3 cursor-pointer"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-[#15181D] text-[#E0B23B] transition-colors duration-200 group-hover:bg-[#2B5BD7] group-hover:text-[#F1EEE6]">
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-syne text-[12px] font-bold uppercase tracking-[0.16em] text-[#5B6068]">
                      Instagram
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-lg font-medium text-[#15181D] transition-colors group-hover:text-[#2B5BD7]">
                      {brand.instagramHandle}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </div>

              {/* Map */}
              <div className="overflow-hidden border border-[#15181D]/15">
                <iframe
                  title="Mapa — Pedrita, Calçada do Tojal 71A, Lisboa"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                  className="h-full min-h-[300px] w-full grayscale-[0.2]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Closing strip ────────────────────────────────────────────── */}
      <section className="bg-[#15181D] py-16 text-[#F1EEE6]">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <p className="font-syne text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            Pedrita — estúdio de design multidisciplinar em Lisboa,{' '}
            <span className="text-[#E0B23B]">desde {brand.since}</span>.
          </p>
          <div className="mt-8">
            <GraoStrip count={36} />
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', value, onChange, placeholder, autoComplete }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-syne text-[12px] font-bold uppercase tracking-[0.16em] text-[#15181D]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full border border-[#15181D]/20 bg-[#F1EEE6] px-4 py-3 font-sans text-[#15181D] outline-none transition-colors placeholder:text-[#9aa0a8] focus:border-[#2B5BD7] focus:ring-2 focus:ring-[#2B5BD7]/25"
      />
    </div>
  )
}
