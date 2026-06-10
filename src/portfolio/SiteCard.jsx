import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cn, siteLink } from '../shared/utils'

const FONT_CLASS = {
  fraunces: 'font-fraunces',
  nunito: 'font-nunito',
  space: 'font-space',
  syne: 'font-syne',
  outfit: 'font-outfit',
  archivo: 'font-archivo',
  sora: 'font-sora',
  oswald: 'font-oswald',
  jakarta: 'font-jakarta',
  plex: 'font-plex',
  plexmono: 'font-plexmono',
  bricolage: 'font-bricolage',
  cormorant: 'font-cormorant',
  jost: 'font-jost',
  playfair: 'font-playfair',
  manrope: 'font-manrope',
  sans: 'font-sans',
}

/**
 * A portfolio card that renders a small, brand-accurate "browser mockup" of the
 * site using its palette + display font — so the grid reads like a real portfolio.
 */
export default function SiteCard({ site, domain, index = 0 }) {
  const { slug, name, short, category, tagline, location, palette } = site
  const displayFont = FONT_CLASS[site.font?.display] || 'font-space'

  return (
    <Link
      to={siteLink(slug)}
      className="group relative block cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      aria-label={`Ver o novo site de ${name}`}
    >
      <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:ring-white/25 group-hover:shadow-2xl group-hover:shadow-black/40">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 bg-neutral-800 px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 truncate rounded-md bg-neutral-700/70 px-2.5 py-1 text-[11px] font-medium text-neutral-300">
            {domain}
          </span>
        </div>

        {/* Mini site mockup */}
        <div
          className="relative aspect-[4/3] overflow-hidden px-5 py-4"
          style={{ backgroundColor: palette.bg, color: palette.fg }}
        >
          {/* faux nav */}
          <div className="flex items-center justify-between">
            <span className={cn('text-[13px] font-semibold tracking-tight', displayFont)}>
              {short}
            </span>
            <div className="flex items-center gap-2 opacity-70">
              <span className="h-1 w-5 rounded-full" style={{ backgroundColor: palette.fg }} />
              <span className="h-1 w-5 rounded-full" style={{ backgroundColor: palette.fg }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: palette.accent }} />
            </div>
          </div>

          {/* faux hero */}
          <div className="mt-5">
            <p
              className={cn('max-w-[16rem] text-[19px] font-semibold leading-[1.15] text-balance', displayFont)}
            >
              {tagline}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span
                className="rounded-full px-3 py-1.5 text-[10px] font-semibold"
                style={{ backgroundColor: palette.accent, color: palette.bg }}
              >
                Ver mais
              </span>
              <span
                className="rounded-full px-3 py-1.5 text-[10px] font-medium ring-1"
                style={{ color: palette.fg, borderColor: palette.fg, boxShadow: `inset 0 0 0 1px ${palette.fg}55` }}
              >
                Contacto
              </span>
            </div>
          </div>

          {/* faux content strip */}
          <div className="absolute inset-x-5 bottom-4 flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-10 flex-1 rounded-lg"
                style={{ backgroundColor: palette.accent2, opacity: 0.22 + i * 0.07 }}
              />
            ))}
          </div>

          {/* hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-lg">
              Ver site <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-3.5 flex items-start justify-between gap-3 px-0.5">
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-semibold text-white">{name}</h3>
          <p className="mt-0.5 truncate text-[13px] text-neutral-400">{location}</p>
        </div>
        <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-neutral-300 ring-1 ring-white/10">
          {category}
        </span>
      </div>
    </Link>
  )
}
