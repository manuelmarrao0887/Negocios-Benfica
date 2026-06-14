import { Link } from 'react-router-dom'
import { ArrowRight, Quote, MapPin, Coffee, Palette } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, values, events, stats } from '../data.jsx'

// Warm-tinted picsum gallery image (lazy, sized, with alt).
function GalleryImg({ seed, alt, className = '' }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={`https://picsum.photos/seed/${seed}/640/800`}
        alt={alt}
        width="640"
        height="800"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A2018]/55 via-[#B5532E]/10 to-transparent mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-[#B98A1F]/10 mix-blend-overlay" />
    </div>
  )
}

export default function Sobre() {
  usePageMeta(
    'A Livraria | Tantos Livros, Livreiros',
    'Fundada em 2020 nas Avenidas Novas, a Tantos Livros é uma casa de cultura com galeria de arte, antiquário, papelaria e cafetaria. Livreiros amigos e conselheiros.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F6F1E8] px-6 pt-36 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
              A Livraria
            </span>
            <h1 className="mt-3 max-w-3xl font-fraunces text-5xl font-semibold leading-[1.05] text-[#2A2018] sm:text-6xl">
              Um espaço impulsionador de cultura.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#FBF7F0] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2A2018] to-[#3A2D1F] p-10">
              <Quote className="h-10 w-10 text-[#D8B24A]" aria-hidden="true" />
              <p className="mt-6 font-fraunces text-2xl font-medium leading-snug text-[#F6F1E8]">
                “Um livro nunca poderá ser substituído. Por isso somos, antes de tudo, livreiros amigos
                e conselheiros.”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#D8B24A] font-fraunces text-lg font-bold text-[#2A2018]">
                  TL
                </span>
                <div>
                  <p className="font-sans font-bold text-[#F6F1E8]">{brand.full}</p>
                  <p className="text-sm text-[#B9A892]">{brand.motto}</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#5C4F42]">
                A Tantos Livros abriu portas em {brand.since}, como resposta à necessidade de um espaço
                impulsionador de cultura nas Avenidas Novas. Reunimos todas as editoras portuguesas e
                muitas estrangeiras, para todo o tipo de públicos — da ficção ao ensaio, da poesia à
                literatura infanto-juvenil.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-[#5C4F42]">
                Mas quisemos ser mais do que uma livraria. Por isso esta casa alberga também uma galeria
                de arte, um antiquário, uma papelaria e uma cafetaria — um sítio de conforto onde se pode
                sentar a descobrir um livro com um café, um chá ou um copo de vinho.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-fraunces text-2xl font-bold text-[#2A2018] sm:text-3xl">{s.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#8A7B6C]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The space — gallery + café + curation */}
      <section className="bg-[#F6F1E8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
              A casa
            </span>
            <h2 className="mt-3 font-fraunces text-4xl font-semibold leading-tight text-[#2A2018] sm:text-5xl">
              Livros, arte e café, sob o mesmo teto.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { seed: 'tantos-livros-galeria', icon: Palette, title: 'Galeria de Arte', text: 'Exposições e um antiquário que dão à livraria uma vida cultural própria.' },
              { seed: 'tantos-livros-cafe', icon: Coffee, title: 'Cafetaria', text: 'Café, chá ou vinho num espaço pensado para ficar, ler e conversar.' },
              { seed: 'tantos-livros-estante', icon: MapPin, title: 'Avenidas Novas', text: 'Na Av. Marquês de Tomar, a poucos passos do Saldanha e do Campo Pequeno.' },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="overflow-hidden rounded-3xl border border-[#2A2018]/10 bg-[#FBF7F0]">
                  <GalleryImg
                    seed={b.seed}
                    alt={`${b.title} — Tantos Livros, Livreiros`}
                    className="aspect-[4/3]"
                  />
                  <div className="p-7">
                    <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[#A4471F]/10 text-[#A4471F]">
                      <b.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-fraunces text-xl font-semibold text-[#2A2018]">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B5D4F]">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FBF7F0] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
              Curadoria
            </span>
            <h2 className="mt-3 font-fraunces text-4xl font-semibold leading-tight text-[#2A2018] sm:text-5xl">
              O cuidado de quem aconselha.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-[#F6F1E8] p-8 ring-1 ring-[#2A2018]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#3E6B57]/12 text-[#3E6B57]">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-fraunces text-xl font-semibold text-[#2A2018]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B5D4F]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda cultural */}
      <section className="bg-[#F6F1E8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
              Agenda cultural
            </span>
            <h2 className="mt-3 font-fraunces text-4xl font-semibold leading-tight text-[#2A2018] sm:text-5xl">
              A livraria também é programa.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[#6B5D4F]">
              Ao longo do ano, abrimos portas a clubes de leitura, apresentações e exposições.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-[#2A2018]/10 bg-[#FBF7F0] p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#2A2018] text-[#D8B24A]">
                      <e.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-[#A4471F]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#A4471F]">
                      {e.date}
                    </span>
                  </div>
                  <h3 className="mt-5 font-fraunces text-xl font-semibold text-[#2A2018]">{e.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B5D4F]">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Parede note */}
          <Reveal delay={120}>
            <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#3E6B57]/25 bg-[#3E6B57]/8 p-7 sm:flex-row sm:items-center">
              <p className="font-fraunces text-lg text-[#2A2018]">
                <span className="font-semibold">Também na Parede.</span>{' '}
                <span className="text-[#5C4F42]">A Tantos Livros tem uma segunda livraria, com uma vasta gama de livros e editoras para todos os públicos.</span>
              </p>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#2A2018]/20 px-5 py-2.5 font-sans text-sm font-bold text-[#2A2018] transition-colors hover:bg-[#2A2018]/5 cursor-pointer"
              >
                Falar connosco <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-14 text-center">
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#A4471F] px-8 py-4 font-sans text-base font-bold text-[#FBF7F0] transition-colors hover:bg-[#8E3D1A] cursor-pointer"
            >
              Visitar a livraria <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
