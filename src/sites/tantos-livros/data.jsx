import {
  BookOpen,
  BookMarked,
  Coffee,
  Palette,
  Library,
  Sparkles,
  Users,
  CalendarHeart,
  PenLine,
  Baby,
  GraduationCap,
  Globe,
  Wine,
  Cake,
  Search,
  Truck,
  HandHeart,
  Quote,
  Theater,
  Landmark,
  Heart,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
// Real facts confirmed from tantoslivroslivreiros.pt, Time Out Lisboa, NiT,
// Foursquare, pai.pt and the WordPress site footer. No invented data.
export const slug = 'tantos-livros'

export const brand = {
  name: 'Tantos Livros',
  full: 'Tantos Livros, Livreiros',
  legal: 'Tantos Livros, Livreiros, Lda.',
  motto: 'Amigos e Conselheiros',
  tagline: 'Uma livraria com tantos livros e tantas histórias.',
  intro:
    'Nas Avenidas Novas, uma casa para todos: mais de 100 mil livros, uma galeria de arte, antiquário, papelaria e cafetaria. Um sítio de conforto para descobrir um livro com um café à mão.',
  // Contacts — real, from the site footer.
  phoneDisplay: '+351 21 356 3791',
  phoneHref: 'tel:+351213563791',
  phoneNote: 'Chamada para a rede fixa nacional',
  email: 'encomendas@tantoslivroslivreiros.pt',
  emailHref: 'mailto:encomendas@tantoslivroslivreiros.pt',
  address: 'Av. Marquês de Tomar 1B, 1050-066 Lisboa',
  addressShort: 'Av. Marquês de Tomar 1B · Avenidas Novas',
  mapsQuery: 'Avenida Marquês de Tomar 1B, Lisboa',
  hours: 'Segunda a Sábado · 10h00 – 19h00',
  hoursClosed: 'Encerra ao Domingo',
  parede: 'Tantos Livros também tem livraria na Parede.',
  instagram: 'https://www.instagram.com/tantoslivroslivreiros/',
  facebook: 'https://www.facebook.com/TantosLivrosLivreiros/',
  since: 2020,
  rating: '4,7',
  reviews: '150',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Catálogo', to: 'catalogo' },
  { label: 'A Livraria', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Trust strip (home) ───────────────────────────────────────────────────────
export const highlights = [
  { icon: Library, title: '+100 mil exemplares', text: 'De novidades a edições esgotadas, há sempre um livro à sua espera.' },
  { icon: Coffee, title: 'Cafetaria', text: 'Sente-se, folheie e descubra com um café ou uma fatia de bolo.' },
  { icon: Palette, title: 'Galeria de Arte', text: 'Uma galeria de arte e antiquário no coração da livraria de Lisboa.' },
  { icon: HandHeart, title: 'Amigos e conselheiros', text: 'Livreiros que ouvem, recomendam e ajudam a encontrar o livro certo.' },
]

// ── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: BookOpen,
    title: 'Venda de livros',
    desc: 'Todas as editoras portuguesas e muitas estrangeiras, para todo o tipo de leitores — da ficção ao ensaio.',
  },
  {
    icon: Search,
    title: 'Curadoria & recomendações',
    desc: 'Livreiros amigos e conselheiros que o ajudam a escolher e a descobrir leituras à sua medida.',
  },
  {
    icon: Truck,
    title: 'Encomendas',
    desc: 'Procuramos o livro que precisa e tratamos da encomenda — mesmo os títulos mais difíceis de encontrar.',
  },
  {
    icon: BookMarked,
    title: 'Antiquário & edições esgotadas',
    desc: 'Edições raras, fora de catálogo e exemplares procurados, para colecionadores e curiosos.',
  },
  {
    icon: Palette,
    title: 'Galeria de Arte',
    desc: 'Exposições e arte que dão à livraria uma vida cultural própria, em diálogo com os livros.',
  },
  {
    icon: PenLine,
    title: 'Papelaria',
    desc: 'Cadernos, material de escrita e pequenos prazeres de papelaria para acompanhar a leitura.',
  },
  {
    icon: Coffee,
    title: 'Cafetaria',
    desc: 'Café, chá ou um copo de vinho. Um espaço de conforto feito para ficar e conversar.',
  },
  {
    icon: CalendarHeart,
    title: 'Agenda cultural',
    desc: 'Clube de Leitura, apresentações e lançamentos com autores ao longo do ano.',
  },
]

// ── Catalogue categories / genres ────────────────────────────────────────────
export const categories = [
  { icon: BookOpen, title: 'Ficção & Romance', desc: 'Dos clássicos às novidades, em português e em língua estrangeira.' },
  { icon: PenLine, title: 'Poesia', desc: 'Vozes maiores e descobertas, num género que aqui tem casa.' },
  { icon: GraduationCap, title: 'Ensaio & Não-ficção', desc: 'Pensamento, história, filosofia e ideias para refletir.' },
  { icon: Baby, title: 'Infanto-juvenil', desc: 'Literatura para os mais novos — para crescer a ler.' },
  { icon: Palette, title: 'Arte & Fotografia', desc: 'Grandes edições de arte, fotografia e design, incluindo Taschen.' },
  { icon: Globe, title: 'Línguas estrangeiras', desc: 'Títulos importados e editoras internacionais para todo o tipo de públicos.' },
  { icon: GraduationCap, title: 'Obras técnicas', desc: 'Referência e obras técnicas para estudo e trabalho.' },
  { icon: BookMarked, title: 'Antiquário & raros', desc: 'Edições esgotadas e exemplares de coleção, difíceis de encontrar.' },
]

// ── Featured books (real titles seen on the site, Jan 2026) ──────────────────
// We intentionally do not invent authors/prices; titles only, as a curated wall.
export const featured = [
  { title: 'A Partida', seed: 'tantos-livros-1' },
  { title: 'Botto', seed: 'tantos-livros-2' },
  { title: 'Cães Pretos', seed: 'tantos-livros-3' },
  { title: 'O Caminho até Casa', seed: 'tantos-livros-4' },
  { title: 'Nervo Mestre', seed: 'tantos-livros-5' },
  { title: 'Refém', seed: 'tantos-livros-6' },
  { title: 'Relatividade', seed: 'tantos-livros-7' },
  { title: 'Susan', seed: 'tantos-livros-8' },
]

// Publishers / distributors really represented (logos seen on the site).
export const publishers = [
  'Penguin',
  'LeYa',
  'Bertrand',
  'Editorial Presença',
  'Orfeu Negro',
  'Taschen',
  'Antígona',
  'Europa-América',
  'Companhia das Letras',
  'Maldoror',
]

// ── Events / agenda cultural (real examples from the site) ───────────────────
export const events = [
  {
    icon: Users,
    date: 'Mensal',
    title: 'Clube de Leitura',
    text: 'Encontros para ler e conversar em conjunto — já recebemos autores como João Tordo.',
  },
  {
    icon: Theater,
    date: 'Ao longo do ano',
    title: 'Apresentações & lançamentos',
    text: 'Sessões com autores e novidades editoriais, como “Um Mundo de Orquídeas”.',
  },
  {
    icon: Palette,
    date: 'Em exposição',
    title: 'Exposições na Galeria',
    text: 'A galeria de arte da livraria recebe artistas e mostras ao longo da estação.',
  },
]

// ── Why visit / values ───────────────────────────────────────────────────────
export const values = [
  {
    icon: HandHeart,
    title: 'Amigos e conselheiros',
    text: 'Mais do que vender, gostamos de aconselhar. Ouvimos cada leitor e sugerimos o livro certo.',
  },
  {
    icon: Heart,
    title: 'Um livro nunca se substitui',
    text: 'Acreditamos no valor insubstituível de cada livro — e na cultura como bem de todos.',
  },
  {
    icon: Landmark,
    title: 'Uma casa de cultura',
    text: 'Livros, arte, café e conversa num só lugar, pensado para ficar e voltar.',
  },
]

export const stats = [
  { value: '+100 mil', label: 'Exemplares' },
  { value: '2', label: 'Livrarias' },
  { value: '2020', label: 'Desde' },
  { value: '4,7★', label: '150 avaliações' },
]
