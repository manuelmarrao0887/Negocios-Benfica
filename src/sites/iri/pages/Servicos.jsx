import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Check, Store, PackageSearch } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, services, partners, gallery } from '../data.jsx'

export default function Servicos() {
  usePageMeta(
    'Serviços | IRI — Isolamentos, Revestimentos e Impermeabilização',
    'Impermeabilização, revestimentos, isolamento térmico e acústico e pavimentos, mais loja de materiais técnicos com aconselhamento, em Lisboa.',
  )

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
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#007A79]">
              Serviços
            </span>
            <h1 className="mt-3 max-w-3xl font-manrope text-4xl font-extrabold leading-[1.05] tracking-tight text-[#14202B] sm:text-5xl">
              Soluções técnicas completas, do material à aplicação.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#51616E]">
              Cinco áreas de especialidade, sustentadas por uma loja de referência e pelo
              aconselhamento de quem trabalha no setor há 30 anos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80}>
              <div className="grid gap-8 rounded-3xl border border-[#14202B]/10 bg-[#F4F6F8] p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#007A79] text-white shadow-sm shadow-[#007A79]/30">
                    <s.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-5 font-manrope text-2xl font-bold text-[#14202B]">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#51616E]">{s.desc}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-3 rounded-xl border border-[#14202B]/10 bg-white px-4 py-3.5 text-sm font-semibold text-[#33424E]"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[#007A79]/10 text-[#007A79]">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Loja / aconselhamento */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#14202B] px-8 py-12 sm:px-14 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#007A79]/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#FAA734]/10 blur-3xl" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#FAA734]">
                    <Store className="h-4 w-4" /> Loja de materiais técnicos
                  </span>
                  <h2 className="mt-5 font-manrope text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                    Mais do que vender. Aconselhar.
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#9fb0bf]">
                    Na nossa loja em Lisboa encontra uma gama profunda de produtos técnicos e quem o
                    ajude a escolher o sistema certo — para particulares, construtores e aplicadores.
                    Se preferir aplicar, fornecemos tudo o que precisa.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                      href={brand.phoneStoreHref}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#007A79] px-7 py-3.5 font-sans text-base font-bold text-white transition-all duration-200 hover:bg-[#006D6C] hover:scale-[1.02] cursor-pointer"
                    >
                      <Phone className="h-5 w-5" /> Loja: {brand.phoneStoreDisplay}
                    </a>
                    <Link
                      to={siteLink(slug, 'contacto')}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 font-sans text-base font-bold text-white transition-colors hover:bg-white/5 cursor-pointer"
                    >
                      Visitar a loja <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#FAA734]">
                    <PackageSearch className="h-4 w-4" /> Marcas que trabalhamos
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {partners.map((p) => (
                      <span
                        key={p}
                        className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-manrope text-sm font-bold tracking-tight text-white"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Obras Realizadas gallery */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#007A79]">
              Obras realizadas
            </span>
            <h2 className="mt-3 font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#14202B] sm:text-4xl">
              Alguns dos nossos trabalhos.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#51616E]">
              Impermeabilização, isolamento, revestimentos e pavimentos — executados com rigor técnico.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.seed} delay={(i % 3) * 80}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#14202B]/10 bg-[#14202B]">
                  <img
                    src={`https://picsum.photos/seed/${g.seed}/800/600`}
                    alt={`${g.title} — obra de ${g.tag.toLowerCase()} pela IRI`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14202B]/85 via-[#14202B]/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-block rounded-full bg-[#007A79] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      {g.tag}
                    </span>
                    <p className="mt-2 font-manrope text-base font-bold text-white">{g.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <p className="text-center text-xs text-[#7a8a96]">Imagens ilustrativas de demonstração.</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
          <Reveal>
            <h2 className="font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#14202B] sm:text-4xl">
              Não sabe qual a melhor solução?
            </h2>
            <p className="mt-4 text-lg text-[#51616E]">
              Diga-nos o que precisa. Avaliamos o caso e indicamos o material e a aplicação certos.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={siteLink(slug, 'contacto')}
              className="inline-flex items-center gap-2 rounded-lg bg-[#007A79] px-8 py-4 font-sans text-base font-bold text-white shadow-lg shadow-[#007A79]/25 transition-colors hover:bg-[#006D6C] cursor-pointer"
            >
              Pedir orçamento <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
