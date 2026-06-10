import { Suspense } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Hammer } from 'lucide-react'
import { getSite } from '../sites/registry.jsx'

function BackToPortfolio() {
  return (
    <Link
      to="/"
      aria-label="Voltar ao portfólio"
      className="fixed bottom-5 left-5 z-[200] inline-flex items-center gap-2 rounded-full bg-neutral-900/85 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-black/25 ring-1 ring-white/10 backdrop-blur-md transition-colors duration-200 hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      <span className="hidden sm:inline">Voltar ao portfólio</span>
      <span className="sm:hidden">Portfólio</span>
    </Link>
  )
}

function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-neutral-50">
      <div className="flex flex-col items-center gap-4 text-neutral-400">
        <div className="h-8 w-8 animate-spin-slow rounded-full border-2 border-neutral-200 border-t-neutral-500" />
        <p className="text-sm">A carregar o site…</p>
      </div>
    </div>
  )
}

function UnderConstruction({ site }) {
  return (
    <div className="grid min-h-screen place-items-center bg-neutral-950 px-6 text-center">
      <div className="max-w-md">
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white">
          <Hammer className="h-6 w-6" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-semibold text-white">{site.name}</h1>
        <p className="mt-3 text-neutral-400">
          Este site faz parte do portfólio mas ainda está a ser construído.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Ver portfólio
        </Link>
      </div>
    </div>
  )
}

export default function SiteHost() {
  const { slug } = useParams()
  const site = getSite(slug)

  if (!site) return <Navigate to="/" replace />

  const SiteApp = site.App

  return (
    <>
      {SiteApp ? (
        <Suspense fallback={<Loading />}>
          <SiteApp />
        </Suspense>
      ) : (
        <UnderConstruction site={site} />
      )}
      <BackToPortfolio />
    </>
  )
}
