// ── Pedrita Studio — shared visual components ────────────────────────────────
// The "Grão" motif: a pixel-like azulejo composition built as a CSS grid of
// small coloured squares (azulejo blue, ochre, ink, white/paper). This is the
// studio's real visual signature, rebuilt in pure CSS — no images.
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { siteLink } from '../../shared/utils'
import { slug } from './data.jsx'

// Palette tokens for the tiles.
const C = {
  blue: '#2B5BD7',
  blueDeep: '#1E40A8',
  ochre: '#E0B23B',
  ink: '#15181D',
  paper: '#F1EEE6',
  sky: '#9DB8F0',
}

// A 12×12 hand-tuned grain. Letters map to colours in `C`. Reads as an abstract
// azulejo composition (figure dissolving into grain), echoing the "Grão" system.
const GRID = [
  'pppppbbppppp',
  'ppppbbbbpppp',
  'pppbbBBbbppp',
  'ppbbBBBBbbpp',
  'pbbBBkkBBbbp',
  'bbBBkooKBBbb',
  'bbBBkooKBBbb',
  'pbbBBkkBBbbp',
  'ppbbBBBBbboo',
  'pppbbBBbboop',
  'ppppbbbboppp',
  'pppppbbppppp',
]

const LETTER = {
  p: C.paper,
  b: C.sky,
  B: C.blue,
  k: C.blueDeep,
  K: C.ink,
  o: C.ochre,
}

/**
 * Grão — the signature azulejo pixel motif.
 * Props: size (px of whole tile, default fluid), className, gap, animated.
 */
export function Grao({ className = '', gap = '2px', rounded = false }) {
  const cells = GRID.join('').split('')
  return (
    <div
      className={className}
      role="img"
      aria-label="Motivo «Grão» — composição em azulejo"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
        gap,
        aspectRatio: '1 / 1',
      }}
    >
      {cells.map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            backgroundColor: LETTER[ch] || C.paper,
            borderRadius: rounded ? '2px' : 0,
          }}
        />
      ))}
    </div>
  )
}

/**
 * GraoStrip — a single horizontal row of azulejo squares, used as a thin
 * decorative rule / divider. `seed` shifts the colour sequence.
 */
export function GraoStrip({ count = 24, className = '', seed = 0 }) {
  const seq = [C.blue, C.sky, C.ochre, C.ink, C.blueDeep, C.blue, C.sky, C.paper]
  return (
    <div className={'flex gap-1 ' + className} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="h-3 w-3 shrink-0 sm:h-4 sm:w-4"
          style={{ backgroundColor: seq[(i + seed) % seq.length] }}
        />
      ))}
    </div>
  )
}

/**
 * ProjectCard — a portfolio thumbnail using a clearly-placeholder picsum image
 * with an azulejo-blue/ink overlay and a name / year / category caption.
 */
export function ProjectCard({ project, index = 0, linkToProjects = false }) {
  const img = (
    <figure className="group relative block overflow-hidden bg-[#15181D]">
      <img
        src={`https://picsum.photos/seed/${project.seed}/800/600`}
        alt={`Imagem ilustrativa (placeholder) do projeto ${project.name}, ${project.year}`}
        width={800}
        height={600}
        loading="lazy"
        className="h-full w-full object-cover opacity-90 grayscale-[0.15] transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
      />
      {/* azulejo-blue / ink overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#15181D]/85 via-[#1E40A8]/15 to-transparent transition-opacity duration-500 group-hover:from-[#1E40A8]/85" />
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-[#2B5BD7]/10" />

      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div>
          <span className="block font-syne text-xs font-bold uppercase tracking-[0.22em] text-[#E0B23B]">
            {project.category} · {project.year}
          </span>
          <span className="mt-1.5 block font-syne text-xl font-bold leading-tight text-[#F1EEE6] sm:text-2xl">
            {project.name}
          </span>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#F1EEE6]/30 text-[#F1EEE6] transition-all duration-300 group-hover:border-[#E0B23B] group-hover:bg-[#E0B23B] group-hover:text-[#15181D]">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </figcaption>
    </figure>
  )

  if (linkToProjects) {
    return (
      <Link
        to={siteLink(slug, 'projetos')}
        aria-label={`Ver projetos — ${project.name}`}
        className="block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B5BD7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1EEE6]"
      >
        {img}
      </Link>
    )
  }
  return img
}
