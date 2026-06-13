import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Instagram, Check, Sparkles, MapPin } from 'lucide-react'
import { siteLink } from '../../../shared/utils'
import { usePageMeta } from '../../../shared/hooks'
import { Reveal } from '../../../shared/Reveal'
import { slug, brand, hallmarks, techniques, hairFeatures, lookbook, stats } from '../data.jsx'

// Lookbook image with a soft blush/rose overlay — picsum seeds give stable imagery.
function LookImage({ seed, alt, className = '' }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-[#F6E9EF] ${className}`}>
      <img
        src={`https://picsum.photos/seed/${seed}/600/800`}
        alt={alt}
        width={600}
        height={800}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A1620]/45 via-transparent to-[#CC0C78]/10" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#CC0C78]/15" />
    </div>
  )
}

export default function Home() {
  usePageMeta(
    'Linda Mulher Studio | Extensões de cabelo 100% humano em Lisboa',
    brand.intro,
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FBF4F7] pt-36 pb-24 sm:pt-44 sm:pb-32">
        {/* luxe glow decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#CC0C78]/12 blur-[120px]" />
          <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#E8A8C8]/20 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #CC0C78 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#CC0C78]/25 bg-white/70 px-4 py-1.5 font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
                <Sparkles className="h-3.5 w-3.5 text-[#B08D3C]" /> Estúdio de luxo · Parque das Nações
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 font-cormorant text-5xl font-semibold leading-[1.02] tracking-tight text-[#2A1620] text-balance sm:text-6xl lg:text-7xl">
                A transformação que <em className="not-italic text-[#CC0C78]">realça</em> a sua beleza.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#6E5560]">
                {brand.intro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={brand.whatsappText}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#CC0C78] to-[#A50A60] px-7 py-3.5 font-jost text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(204,12,120,0.6)] transition-all duration-200 hover:shadow-[0_16px_40px_-10px_rgba(204,12,120,0.75)] cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5" /> Marcar consultoria
                </a>
                <Link
                  to={siteLink(slug, 'servicos')}
                  className="inline-flex items-center gap-2 rounded-full border border-[#CC0C78]/30 bg-white/60 px-7 py-3.5 font-jost text-base font-semibold text-[#2A1620] transition-colors duration-200 hover:bg-[#CC0C78]/10 cursor-pointer"
                >
                  Ver serviços <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex items-center gap-6 border-t border-[#CC0C78]/15 pt-6">
                <div>
                  <div className="font-cormorant text-3xl font-semibold text-[#CC0C78]">35K</div>
                  <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-[#6E5560]">Seguidores</div>
                </div>
                <div className="h-10 w-px bg-[#CC0C78]/20" />
                <div>
                  <div className="font-cormorant text-3xl font-semibold text-[#CC0C78]">100%</div>
                  <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-[#6E5560]">Cabelo humano</div>
                </div>
                <div className="h-10 w-px bg-[#CC0C78]/20" />
                <div>
                  <div className="font-cormorant text-3xl font-semibold text-[#CC0C78]">55–80</div>
                  <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-[#6E5560]">cm</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* hero image cluster */}
          <Reveal delay={260} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <LookImage seed="linda-mulher-1" alt="Resultado de extensões longas e onduladas em cabelo 100% humano" className="aspect-[3/4] translate-y-6" />
              <LookImage seed="linda-mulher-5" alt="Penteado elegante criado com extensões premium" className="aspect-[3/4]" />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-[#CC0C78]/20 bg-white/90 px-5 py-3 backdrop-blur-sm shadow-[0_18px_40px_-20px_rgba(42,22,32,0.4)]">
              <p className="flex items-center gap-2 font-jost text-sm font-medium text-[#CC0C78]">
                <Sparkles className="h-4 w-4 text-[#B08D3C]" /> Transformação natural
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Hallmarks strip ──────────────────────────────────────────── */}
      <section className="border-y border-[#CC0C78]/12 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 lg:grid-cols-4">
          {hallmarks.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="px-2 py-9 sm:px-6">
              <h.icon className="h-7 w-7 text-[#CC0C78]" strokeWidth={1.5} />
              <h3 className="mt-4 font-cormorant text-xl font-semibold text-[#2A1620]">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6E5560]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Extensions highlight ─────────────────────────────────────── */}
      <section className="bg-[#FBF4F7] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <LookImage
                seed="linda-mulher-3"
                alt="Cabelo com volume, brilho e comprimento após aplicação de extensões"
                className="aspect-[4/5]"
              />
              <div className="absolute -right-5 -top-5 hidden rounded-2xl bg-gradient-to-br from-[#CC0C78] to-[#A50A60] px-6 py-5 text-white shadow-[0_16px_36px_-14px_rgba(204,12,120,0.6)] sm:block">
                <span className="font-cormorant text-3xl font-semibold">100%</span>
                <p className="text-xs font-semibold uppercase tracking-wide">humano</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
                A nossa assinatura
              </span>
              <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#2A1620] sm:text-5xl">
                Extensões capilares de cabelo 100% humano.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-[#6E5560]">
                Cabelo certificado de 55 a 80 cm — liso, ondulado ou cacheado — em tonalidades que vão dos
                castanhos aos loiros, acobreados, ruivos e platinados. Além da aplicação, vendemos também o
                cabelo, com garantia de preço europeu.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {hairFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-[#3A2230]">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#CC0C78]/12 text-[#CC0C78]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Techniques ───────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
                Técnicas de aplicação
              </span>
              <h2 className="mt-3 max-w-2xl font-cormorant text-4xl font-semibold leading-tight text-[#2A1620] sm:text-5xl">
                Cada método, pensado para si.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to={siteLink(slug, 'servicos')}
                className="inline-flex shrink-0 items-center gap-2 font-jost text-sm font-semibold uppercase tracking-[0.12em] text-[#CC0C78] transition-colors hover:text-[#A50A60] cursor-pointer"
              >
                Todos os serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techniques.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-[#CC0C78]/12 bg-[#FBF4F7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#CC0C78]/35 hover:shadow-[0_20px_50px_-22px_rgba(204,12,120,0.35)]">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#CC0C78]/10 text-[#CC0C78] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#CC0C78] group-hover:to-[#A50A60] group-hover:text-white">
                    <t.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-cormorant text-2xl font-semibold text-[#2A1620]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5560]">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lookbook gallery ─────────────────────────────────────────── */}
      <section className="bg-[#FBF4F7] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
              Lookbook
            </span>
            <h2 className="mt-3 font-cormorant text-4xl font-semibold leading-tight text-[#2A1620] sm:text-5xl">
              Transformações que falam por si.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6E5560]">
              Uma seleção de resultados reais criados com cabelo 100% humano.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {lookbook.map((l, i) => (
              <Reveal key={l.seed} delay={(i % 6) * 60}>
                <LookImage seed={l.seed} alt={l.alt} className="aspect-[3/4]" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12 flex justify-center">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#CC0C78]/35 bg-white px-6 py-3 font-jost text-sm font-semibold text-[#CC0C78] transition-colors hover:bg-[#CC0C78] hover:text-white cursor-pointer"
            >
              <Instagram className="h-4 w-4" /> Ver mais em {brand.instagramHandle}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Social proof band ────────────────────────────────────────── */}
      <section className="border-y border-[#CC0C78]/12 bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="text-center">
              <div className="font-cormorant text-4xl font-semibold text-[#CC0C78] sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[#6E5560]">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FBF4F7] py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#CC0C78]/12 blur-[110px]" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#E8A8C8]/20 blur-[110px]" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
          <Reveal>
            <span className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#CC0C78]">
              {brand.tagline}
            </span>
            <h2 className="mt-4 font-cormorant text-4xl font-semibold leading-tight text-[#2A1620] text-balance sm:text-5xl">
              Marque a sua consultoria personalizada.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#6E5560]">
              Falamos consigo sobre o resultado que deseja e desenhamos a transformação ideal. Orçamento
              por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={brand.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#CC0C78] to-[#A50A60] px-8 py-4 font-jost text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(204,12,120,0.6)] transition-all duration-200 hover:shadow-[0_16px_40px_-10px_rgba(204,12,120,0.75)] cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" /> Marcar consultoria
              </a>
              <Link
                to={siteLink(slug, 'contacto')}
                className="inline-flex items-center gap-2 rounded-full border border-[#CC0C78]/30 bg-white/70 px-8 py-4 font-jost text-base font-semibold text-[#2A1620] transition-colors hover:bg-[#CC0C78]/10 cursor-pointer"
              >
                <MapPin className="h-5 w-5" /> Onde estamos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
