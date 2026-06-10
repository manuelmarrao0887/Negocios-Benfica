// ── Pedrita Studio — data ────────────────────────────────────────────────────
// Estúdio de design multidisciplinar em Lisboa, fundado em 2005.
// Apenas factos reais. Sem contactos inventados (telefone/email não encontrados).

export const slug = 'pedrita-studio'

export const brand = {
  name: 'Pedrita',
  full: 'Pedrita — Estúdio de Design',
  tagline: 'Estúdio de design multidisciplinar em Lisboa, desde 2005.',
  // Filosofia parafraseada em PT-PT (não é citação literal).
  statement:
    'Cada projeto lança um olhar inquisitivo sobre o processo e a cultura material, reunindo soluções formais inesperadas e conscientes.',
  signature:
    'Reinventamos técnicas e materiais tradicionais portugueses — sobretudo o azulejo industrial descontinuado. O sistema «Grão» (2007) é a assinatura do estúdio.',
  city: 'Lisboa',
  since: 2005,
  // Contactos (apenas o que existe)
  address: 'Calçada do Tojal 71A, 1500-592 Lisboa',
  mapsQuery: 'Calçada do Tojal 71A, 1500-592 Lisboa',
  instagram: 'https://instagram.com/pedritastudio',
  instagramHandle: '@pedritastudio',
  domain: 'pedrita.net',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Projetos', to: 'projetos' },
  { label: 'Estúdio', to: 'estudio' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Disciplines / áreas de trabalho ──────────────────────────────────────────
export const disciplines = [
  'Produto',
  'Design de Espaço',
  'Azulejo / Arte',
  'Instalação',
  'Arte Pública',
  'Artesanato',
  'Curadoria',
  'Editorial',
  'Investigação',
  'Consultoria',
]

// ── Categories used to filter the portfolio ──────────────────────────────────
export const categories = [
  'Todos',
  'Azulejo',
  'Produto',
  'Espaço',
  'Arte Pública',
  'Instalação',
  'Curadoria',
  'Digital',
]

// ── Projects (reais, 2007–2022) ──────────────────────────────────────────────
// seed -> picsum placeholder seed; img índice apenas para variar o recorte.
export const projects = [
  {
    seed: 'pedrita-1',
    name: 'Grão',
    year: '2007',
    category: 'Azulejo',
    note: 'Sistema de composição abstrato-figurativa em azulejo industrial descontinuado — a assinatura do estúdio.',
  },
  {
    seed: 'pedrita-2',
    name: 'Fabrico Próprio',
    year: '2008',
    category: 'Produto',
    note: 'Estudo premiado sobre a estandardização da pastelaria portuguesa enquanto cultura de objeto.',
  },
  {
    seed: 'pedrita-3',
    name: 'Fora de Escala',
    year: '2011',
    category: 'Instalação',
    note: 'Exercício de leitura do território e da escala através do objeto e da matéria.',
  },
  {
    seed: 'pedrita-4',
    name: 'Unidade',
    year: '2012',
    category: 'Arte Pública',
    note: 'Intervenção de arte pública que opera por repetição e variação de um módulo elementar.',
  },
  {
    seed: 'pedrita-5',
    name: 'Espaço Espelho d’Água',
    year: '2014',
    category: 'Espaço',
    note: 'Design de espaço para o equipamento cultural à beira-Tejo, em Belém.',
  },
  {
    seed: 'pedrita-6',
    name: 'Passionswege',
    year: '2014',
    category: 'Instalação',
    note: 'Instalação para a Vienna Design Week, cruzando ofício local e linguagem contemporânea.',
  },
  {
    seed: 'pedrita-7',
    name: 'Ensaio para um Arquivo',
    year: '2015',
    category: 'Curadoria',
    note: 'Projeto curatorial e expositivo no MUDE — Museu do Design e da Moda, Lisboa.',
  },
  {
    seed: 'pedrita-8',
    name: 'Vhils Studio',
    year: '2015',
    category: 'Espaço',
    note: 'Conceção do espaço de trabalho do artista Vhils.',
  },
  {
    seed: 'pedrita-9',
    name: 'Underdogs Art Store',
    year: '2015',
    category: 'Espaço',
    note: 'Design do espaço comercial da Underdogs, plataforma de arte urbana e contemporânea.',
  },
  {
    seed: 'pedrita-10',
    name: 'Festival Iminente',
    year: '2016–2021',
    category: 'Espaço',
    note: 'Design espacial do festival ao longo de várias edições e localizações.',
  },
  {
    seed: 'pedrita-11',
    name: 'Pavilhão',
    year: '2016',
    category: 'Instalação',
    note: 'Estrutura efémera concebida como dispositivo de encontro e fruição pública.',
  },
  {
    seed: 'pedrita-12',
    name: 'Lost and Found',
    year: '2018',
    category: 'Azulejo',
    note: 'Na Underdogs Gallery, recria fotografias com azulejos industriais descontinuados.',
  },
  {
    seed: 'pedrita-13',
    name: 'Simplesmente Maria NFTs',
    year: '2021',
    category: 'Digital',
    note: 'Coleção de objetos digitais que estende o vocabulário do estúdio ao território cripto.',
  },
  {
    seed: 'pedrita-14',
    name: 'Corrupio',
    year: '2022',
    category: 'Produto',
    note: 'Objeto que parte do gesto e do movimento como princípio de desenho.',
  },
]

export const featuredSeeds = ['pedrita-1', 'pedrita-12', 'pedrita-7', 'pedrita-4', 'pedrita-9', 'pedrita-14']

// ── Clients (apenas texto — sem logótipos falsos) ────────────────────────────
export const clients = [
  'Benetton',
  'Camper',
  'Casa da Música',
  'Coca-Cola',
  'Fundação EDP',
  'MUDE',
  'TAP',
  'Vienna Design Week',
]

// ── Press / publicações ──────────────────────────────────────────────────────
export const press = [
  'Designboom',
  'Vienna Design Week',
  'MUDE',
  'Underdogs Gallery',
  'ArteCapital',
]

// ── Founders ─────────────────────────────────────────────────────────────────
export const founders = [
  {
    name: 'Rita João',
    initials: 'RJ',
    born: '1978',
    bio: 'Cofundadora. Formação em Design na Faculdade de Arquitetura da Universidade Técnica de Lisboa, com estudos também na TU Delft.',
  },
  {
    name: 'Pedro Ferreira',
    initials: 'PF',
    born: '1978',
    bio: 'Cofundador. Formação em Design na Faculdade de Arquitetura da Universidade Técnica de Lisboa, com estudos também no Politecnico di Milano.',
  },
]

// ── Approach / método ────────────────────────────────────────────────────────
export const approach = [
  {
    no: '01',
    title: 'Olhar inquisitivo',
    text: 'Cada projeto começa por uma pergunta sobre o processo, o material e a cultura que lhe dá origem.',
  },
  {
    no: '02',
    title: 'Cultura material',
    text: 'Trabalhamos a partir de técnicas e materiais tradicionais portugueses, reinventando-os no presente.',
  },
  {
    no: '03',
    title: 'Equipa à medida',
    text: 'Montamos equipa e recursos à escala de cada projeto, acolhendo estagiários internacionais.',
  },
  {
    no: '04',
    title: 'Forma consciente',
    text: 'Procuramos soluções formais inesperadas, sempre conscientes do seu contexto e consequência.',
  },
]

// ── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '2005', label: 'Fundado' },
  { value: '50+', label: 'Projetos 2004–2022' },
  { value: '10', label: 'Disciplinas' },
  { value: '2', label: 'Cofundadores' },
]
