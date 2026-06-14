import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Search, BookMarked } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, categories, featured, publishers } from '../data.jsx'

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

export default function Catalogo() {
  usePageMeta(
    'Catálogo | Tantos Livros, Livreiros',
    'Ficção, poesia, ensaio, infanto-juvenil, arte, obras técnicas e antiquário. Mais de 100 mil exemplares de todas as editoras portuguesas e muitas estrangeiras.',
  )

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F6F1E8] px-6 pt-36 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
              Catálogo
            </span>
            <h1 className="mt-3 max-w-3xl font-fraunces text-5xl font-semibold leading-[1.05] text-[#2A2018] sm:text-6xl">
              Há um livro para cada leitor.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5C4F42]">
              São mais de 100 mil exemplares — entre novidades, edições esgotadas, obras técnicas e
              literatura infanto-juvenil. Não encontra o que procura? Encomendamos por si.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#FBF7F0] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-fraunces text-3xl font-semibold leading-tight text-[#2A2018] sm:text-4xl">
              Por género
            </h2>
            <p className="mt-3 text-[#6B5D4F]">
              Uma vista geral das secções que enchem as nossas estantes.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 70}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#2A2018]/10 bg-[#F6F1E8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#A4471F]/30 hover:bg-white hover:shadow-xl hover:shadow-[#2A2018]/5">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#3E6B57]/12 text-[#3E6B57] transition-colors duration-300 group-hover:bg-[#3E6B57] group-hover:text-[#FBF7F0]">
                    <c.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-fraunces text-xl font-semibold text-[#2A2018]">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B5D4F]">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured wall */}
      <section className="bg-[#F6F1E8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
              Sugestões dos livreiros
            </span>
            <h2 className="mt-3 font-fraunces text-3xl font-semibold leading-tight text-[#2A2018] sm:text-4xl">
              A nossa montra, agora.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {featured.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 60}>
                <div className="group">
                  <GalleryImg
                    seed={b.seed}
                    alt={`Capa do livro ${b.title} em destaque na Tantos Livros`}
                    className="aspect-[3/4] rounded-2xl shadow-md shadow-[#2A2018]/10 ring-1 ring-[#2A2018]/5"
                  />
                  <h3 className="mt-3 font-fraunces text-lg font-semibold leading-snug text-[#2A2018]">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[#8A7B6C]">Em destaque</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Order callout */}
      <section className="bg-[#FBF7F0] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#2A2018] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#D8B24A]/15 blur-3xl" />
              <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#D8B24A]">
                    <Search className="h-4 w-4" aria-hidden="true" /> Encomendas
                  </span>
                  <h2 className="mt-5 font-fraunces text-3xl font-semibold leading-tight text-[#F6F1E8] sm:text-4xl">
                    Procura um título difícil de encontrar?
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#B9A892]">
                    Entre o nosso fundo de antiquário e as encomendas a editoras, ajudamos a chegar a
                    quase qualquer livro. Diga-nos o que procura — nós tratamos do resto.
                  </p>
                </div>
                <a
                  href={brand.phoneHref}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D8B24A] px-7 py-4 font-sans text-base font-bold text-[#2A2018] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" /> Pedir um livro
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Publishers */}
      <section className="bg-[#F6F1E8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#A4471F]">
              <BookMarked className="h-4 w-4" aria-hidden="true" /> Editoras
            </span>
            <h2 className="mt-3 font-fraunces text-3xl font-semibold leading-tight text-[#2A2018] sm:text-4xl">
              Algumas das chancelas nas nossas estantes.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {publishers.map((p, i) => (
              <Reveal key={p} delay={(i % 6) * 50}>
                <span className="rounded-full border border-[#2A2018]/12 bg-[#FBF7F0] px-5 py-2.5 font-fraunces text-lg font-medium text-[#3C3328]">
                  {p}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FBF7F0] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-fraunces text-4xl font-semibold leading-tight text-[#2A2018]">
              Os livros sabem melhor ao vivo.
            </h2>
            <p className="mt-4 text-lg text-[#6B5D4F]">
              Venha folhear, pedir conselho e descobrir. A montra completa está à sua espera na livraria.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-[#A4471F] px-8 py-4 font-sans text-base font-bold text-[#FBF7F0] transition-colors hover:bg-[#8E3D1A] cursor-pointer"
            >
              Como chegar à livraria <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
