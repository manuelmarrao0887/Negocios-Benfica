import { lazy } from 'react'

/**
 * META — single source of truth for the portfolio grid.
 * Each entry drives a card on the home page and the routing to /site/:slug.
 *
 * palette: { bg, fg, accent, accent2 } — used by the card mini-mockup.
 * font:    { display, body }           — Tailwind font utilities (font-<display>).
 * group:   filter bucket on the portfolio.
 * category: specific sector label shown on the card.
 */
export const META = [
  {
    slug: 'filipitsch',
    name: 'Filipitsch — Terapia Activa',
    short: 'Filipitsch',
    category: 'Terapia & Bem-estar',
    group: 'Saúde & Beleza',
    tagline: 'Profissionais de saúde ao seu inteiro dispor.',
    location: 'Calçada do Tojal 28A · Benfica',
    year: '2025',
    palette: { bg: '#0E3B34', fg: '#F4F0E4', accent: '#CBA35C', accent2: '#7FB39B' },
    font: { display: 'fraunces', body: 'nunito' },
  },
  {
    slug: 'reparacao-tv-lisboa',
    name: 'Reparação TV Lisboa',
    short: 'Reparação TV',
    category: 'Reparação de TV',
    group: 'Casa & Clima',
    tagline: 'Especialistas exclusivos em reparação de televisores.',
    location: 'Calçada do Tojal 53B · Lisboa',
    year: '2025',
    palette: { bg: '#FFFFFF', fg: '#0F1B2D', accent: '#2E7DF6', accent2: '#0B8C73' },
    font: { display: 'space', body: 'sans' },
  },
  {
    slug: 'pedrita-studio',
    name: 'Pedrita Studio',
    short: 'Pedrita',
    category: 'Estúdio de Design',
    group: 'Serviços & Negócios',
    tagline: 'Estúdio de design multidisciplinar em Lisboa desde 2005.',
    location: 'Calçada do Tojal 71A · Lisboa',
    year: '2025',
    palette: { bg: '#F1EEE6', fg: '#15181D', accent: '#2B5BD7', accent2: '#E0B23B' },
    font: { display: 'syne', body: 'sans' },
  },
  {
    slug: 'tecnico-frio',
    name: 'Técnico Frio',
    short: 'Técnico Frio',
    category: 'Frio & Ar Condicionado',
    group: 'Casa & Clima',
    tagline: 'Reparação de ar condicionado e frigoríficos na Grande Lisboa.',
    location: 'Calçada do Tojal 03 · Lisboa',
    year: '2025',
    palette: { bg: '#F1F8FC', fg: '#0B2536', accent: '#0B6CC0', accent2: '#16B5C9' },
    font: { display: 'outfit', body: 'sans' },
  },
  {
    slug: 'nipolandia',
    name: 'Nipolândia',
    short: 'Nipolândia',
    category: 'Climatização AVAC',
    group: 'Casa & Clima',
    tagline: 'Climatização e ventilação com rigor desde 1977.',
    location: 'R. Jorge Barradas 49B · Benfica',
    year: '2025',
    palette: { bg: '#F2F6FC', fg: '#0A2E5C', accent: '#2C7BE5', accent2: '#FF7F00' },
    font: { display: 'archivo', body: 'sans' },
  },
  {
    slug: 'farol-vibrante',
    name: 'Farol Vibrante — Construções LSF',
    short: 'Farol Vibrante',
    category: 'Construção LSF',
    group: 'Construção & Indústria',
    tagline: 'Construção em Light Steel Framing — mais rápida, leve e sustentável.',
    location: 'R. Cmte. Henrique Maya 7C · Lisboa',
    year: '2025',
    palette: { bg: '#F7F8FA', fg: '#14181D', accent: '#F2A33C', accent2: '#64727F' },
    font: { display: 'sora', body: 'sans' },
  },
  {
    slug: 'fornoportugal',
    name: 'Fornoportugal — Refractários',
    short: 'Fornoportugal',
    category: 'Refractários Industriais',
    group: 'Construção & Indústria',
    tagline: 'Engenharia de fornos refractários para a indústria, no mundo inteiro.',
    location: 'R. das Pedralvas 23A · Lisboa',
    year: '2025',
    palette: { bg: '#F7F5F1', fg: '#1B2540', accent: '#D11F2A', accent2: '#1F2D5E' },
    font: { display: 'oswald', body: 'sans' },
  },
  {
    slug: 'iri',
    name: 'IRI — Isolamentos e Revestimentos',
    short: 'IRI',
    category: 'Isolamentos & Revestimentos',
    group: 'Construção & Indústria',
    tagline: 'Isolamentos, revestimentos e impermeabilização há 30 anos.',
    location: 'R. Jorge Barradas 37A · Lisboa',
    year: '2025',
    palette: { bg: '#F4F6F8', fg: '#14202B', accent: '#007A79', accent2: '#FAA734' },
    font: { display: 'manrope', body: 'sans' },
  },
  {
    slug: 'conta-100',
    name: 'Conta 100% — Contabilidade',
    short: 'Conta 100%',
    category: 'Contabilidade',
    group: 'Serviços & Negócios',
    tagline: 'Cuidamos da sua contabilidade. Fazemos crescer o seu negócio.',
    location: 'R. Lucília Simões 1A · Benfica',
    year: '2025',
    palette: { bg: '#F4F8F6', fg: '#16363B', accent: '#0B7C88', accent2: '#3AC2CF' },
    font: { display: 'jakarta', body: 'sans' },
  },
  {
    slug: 'rui-dinis',
    name: 'Rui Dinis, Lda.',
    short: 'Rui Dinis',
    category: 'Eletrónica Industrial',
    group: 'Construção & Indústria',
    tagline: 'Máquinas de alta frequência e ultra-sons. Assistência à indústria.',
    location: 'R. Rogério Amaral 6A · Benfica',
    year: '2025',
    palette: { bg: '#F4F6F9', fg: '#16182B', accent: '#2E3192', accent2: '#E0A126' },
    font: { display: 'plex', body: 'plex' },
  },
  {
    slug: 'doublespace',
    name: 'DoubleSpace Beauty Salon',
    short: 'DoubleSpace',
    category: 'Salão de Beleza',
    group: 'Saúde & Beleza',
    tagline: 'Nails · Cosmetology · Barber — o teu espaço de beleza em Benfica.',
    location: 'Estr. de Benfica 706A · Lisboa',
    year: '2025',
    palette: { bg: '#F6F1EC', fg: '#1B1714', accent: '#C06A52', accent2: '#A98DA0' },
    font: { display: 'bricolage', body: 'sans' },
  },
  {
    slug: 'linda-mulher',
    name: 'Linda Mulher Studio',
    short: 'Linda Mulher',
    category: 'Extensões Capilares',
    group: 'Saúde & Beleza',
    tagline: 'Extensões de cabelo 100% humano. Luxo e transformação em Lisboa.',
    location: 'R. Polo Norte 18D · Lisboa',
    year: '2025',
    palette: { bg: '#FBF4F7', fg: '#2A1620', accent: '#CC0C78', accent2: '#B08D3C' },
    font: { display: 'cormorant', body: 'jost' },
  },
  {
    slug: 'imobenfica',
    name: 'Imobenfica by Marta Pereira',
    short: 'Imobenfica',
    category: 'Imobiliária',
    group: 'Serviços & Negócios',
    tagline: 'Especialistas reconhecidos no mercado imobiliário de Benfica.',
    location: 'Av. Gomes Pereira 28B · Benfica',
    year: '2025',
    palette: { bg: '#F6F3EC', fg: '#241019', accent: '#7A1B47', accent2: '#5A1235' },
    font: { display: 'playfair', body: 'sans' },
  },
]

/**
 * APPS — lazy-loaded site applications, keyed by slug.
 * A site appears as "em construção" on the grid until its entry is wired here.
 * (Sites são ligados à medida que ficam prontos.)
 */
export const APPS = {
  filipitsch: lazy(() => import('./filipitsch/index.jsx')),
  'reparacao-tv-lisboa': lazy(() => import('./reparacao-tv-lisboa/index.jsx')),
  'pedrita-studio': lazy(() => import('./pedrita-studio/index.jsx')),
  'tecnico-frio': lazy(() => import('./tecnico-frio/index.jsx')),
  nipolandia: lazy(() => import('./nipolandia/index.jsx')),
  'farol-vibrante': lazy(() => import('./farol-vibrante/index.jsx')),
  fornoportugal: lazy(() => import('./fornoportugal/index.jsx')),
  iri: lazy(() => import('./iri/index.jsx')),
  'conta-100': lazy(() => import('./conta-100/index.jsx')),
  'rui-dinis': lazy(() => import('./rui-dinis/index.jsx')),
  'linda-mulher': lazy(() => import('./linda-mulher/index.jsx')),
  imobenfica: lazy(() => import('./imobenfica/index.jsx')),
  doublespace: lazy(() => import('./doublespace/index.jsx')),
}

export const sites = META.map((m) => ({ ...m, App: APPS[m.slug] || null }))

export const groups = ['Todos', ...Array.from(new Set(META.map((m) => m.group)))]

export function getSite(slug) {
  return sites.find((s) => s.slug === slug) || null
}
