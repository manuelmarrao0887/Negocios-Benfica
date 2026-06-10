import { useMemo, useState } from 'react'
import { MapPin, ArrowDown, Check } from 'lucide-react'
import { META, groups } from '../sites/registry.jsx'
import { usePageMeta } from '../shared/hooks'
import { cn } from '../shared/utils'
import { Reveal } from '../shared/Reveal'
import SiteCard from './SiteCard.jsx'

const DOMAINS = {
  filipitsch: 'filipitsch.pt',
  'reparacao-tv-lisboa': 'reparacaotvlisboa.pt',
  'pedrita-studio': 'pedrita.net',
  'tecnico-frio': 'tecnicofrio.pt',
  nipolandia: 'nipolandia.pt',
  'farol-vibrante': 'farolvibrante.pt',
  fornoportugal: 'fornoportugal.com',
  iri: 'iri.pt',
  'conta-100': 'contacemporcento.pt',
  'rui-dinis': 'ruidinis.com',
  doublespace: 'double-space.eu',
  'linda-mulher': 'lindamulherstudio.com',
  imobenfica: 'imobenfica.pt',
}

export default function Portfolio() {
  usePageMeta(
    'ProofStudio — Portfólio de Websites',
    'ProofStudio · Rebuild de 13 websites de negócios da zona da Calçada do Tojal, Benfica/Carnide, Lisboa.',
  )
  const [active, setActive] = useState('Todos')

  const filtered = useMemo(
    () => (active === 'Todos' ? META : META.filter((m) => m.group === active)),
    [active],
  )

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-lime-400/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-t from-emerald-500/10 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent 75%)',
          }}
        />
      </div>

      <div className="relative">
        {/* Top bar */}
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-300 text-neutral-950 shadow-[0_0_24px_-4px_rgba(190,242,100,0.6)]">
              <Check className="h-5 w-5" strokeWidth={3} />
            </span>
            <span className="font-space text-base font-bold tracking-tight">
              Proof<span className="text-neutral-400">Studio</span>
            </span>
          </div>
          <span className="hidden items-center gap-1.5 text-sm text-neutral-400 sm:flex">
            <MapPin className="h-4 w-4" /> Benfica · Carnide, Lisboa
          </span>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-10 sm:pt-16">
          <Reveal>
            <p className="flex items-center gap-2 font-space text-sm font-medium uppercase tracking-[0.2em] text-lime-300/90">
              <span className="h-px w-8 bg-lime-300/50" />
              Calçada do Tojal · Rebuild de Websites
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl font-space text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl">
              Treze negócios locais,
              <span className="bg-gradient-to-r from-lime-200 via-white to-emerald-200 bg-clip-text text-transparent">
                {' '}reimaginados online.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-300">
              A <span className="font-semibold text-white">ProofStudio</span> redesenhou os websites dos
              negócios da zona da Calçada do Tojal. Cada cartão abre um site completo, com identidade
              própria. Escolha um para explorar.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="font-space text-2xl font-bold text-white">13</span> negócios
              </span>
              <span className="h-4 w-px bg-white/15" />
              <span className="flex items-center gap-2">
                <span className="font-space text-2xl font-bold text-white">4</span> setores
              </span>
              <span className="h-4 w-px bg-white/15" />
              <span className="flex items-center gap-2 text-neutral-400">
                <ArrowDown className="h-4 w-4 animate-bounce" /> selecione um negócio
              </span>
            </div>
          </Reveal>
        </section>

        {/* Filters */}
        <div className="sticky top-0 z-20 border-y border-white/10 bg-neutral-950/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3.5">
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => setActive(g)}
                className={cn(
                  'shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                  active === g
                    ? 'bg-white text-neutral-950'
                    : 'bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10',
                )}
              >
                {g}
                <span className={cn('ml-2 text-xs', active === g ? 'text-neutral-500' : 'text-neutral-500')}>
                  {g === 'Todos' ? META.length : META.filter((m) => m.group === g).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div
            key={active}
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((site, i) => (
              <Reveal key={site.slug} delay={(i % 3) * 80}>
                <SiteCard site={site} domain={DOMAINS[site.slug]} index={i} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm text-neutral-500">
              Portfólio de demonstração da ProofStudio. Conteúdos baseados em pesquisa pública de cada
              negócio — dados a confirmar com cada cliente antes de qualquer publicação.
            </p>
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-lime-300 text-neutral-950">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <p className="font-space text-sm font-semibold text-white">
                Proof<span className="text-neutral-400">Studio</span> · 2025
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
