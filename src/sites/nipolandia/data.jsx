import {
  Snowflake,
  Wind,
  Ruler,
  Droplets,
  Wrench,
  ShieldCheck,
  Home as HomeIcon,
  Factory,
  Building2,
  Award,
  Clock,
  BadgeCheck,
  CalendarClock,
  Handshake,
  Target,
  Headset,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'nipolandia'

export const brand = {
  name: 'Nipolândia',
  full: 'Nipolândia — Ar Condicionado, Ventilação, Lda.',
  tagline:
    'Somos o seu parceiro de confiança em climatização e ventilação. Projetos e soluções com qualidade e rigor desde 1977.',
  motto: 'Os compromissos são para serem cumpridos — é nisto que acreditamos.',
  intro:
    'Empresa de climatização e ventilação (AVAC/HVAC) em Lisboa, fundada em 1977. Projetamos e instalamos soluções chave-na-mão para particulares e para a indústria, com técnicos certificados e assistência em todo o país.',
  phoneDisplay: '21 387 2177',
  phoneHref: 'tel:+351213872177',
  email: 'geral@nipolandia.pt',
  emailHref: 'mailto:geral@nipolandia.pt',
  address: 'Rua Jorge Barradas 49-B, 1500-369 Lisboa (Benfica)',
  addressShort: 'Rua Jorge Barradas 49-B · Benfica, Lisboa',
  mapsQuery: 'Rua Jorge Barradas 49B, 1500-369 Lisboa',
  hours: 'Seg–Sex · 9h00–13h00 e 14h00–18h00',
  hoursWeekend: 'Sábado e Domingo · encerrado',
  coverage: 'Assistência técnica em todo o país',
  since: 1977,
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Trust badges (text only — no fake logos) ─────────────────────────────────
export const badges = [
  'Desde 1977',
  'PME Líder 2012 / 2013',
  'Mitsubishi Electric Diamond Client',
  'Daikin',
  'Panasonic',
]

// ── Highlights / authority strip ─────────────────────────────────────────────
export const highlights = [
  { icon: CalendarClock, title: '+45 anos', text: 'Fundada em 1977. Experiência acumulada em milhares de instalações.' },
  { icon: Award, title: 'PME Líder', text: 'Distinção IAPMEI em 2012 e 2013 pelo mérito e solidez da empresa.' },
  { icon: BadgeCheck, title: 'Diamond Client', text: 'Parceiro Mitsubishi Electric desde 2023, ao mais alto nível.' },
  { icon: ShieldCheck, title: 'Técnicos certificados', text: 'Instalador oficial Daikin e Panasonic. Rigor em cada projeto.' },
]

// ── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: Snowflake,
    title: 'Climatização chave-na-mão',
    desc: 'Sistemas de ar condicionado dimensionados, fornecidos e instalados de ponta a ponta — do estudo à entrega final em pleno funcionamento.',
  },
  {
    icon: Wind,
    title: 'Ventilação',
    desc: 'Soluções de ventilação e renovação de ar para garantir conforto, qualidade do ar interior e eficiência energética.',
  },
  {
    icon: Ruler,
    title: 'Estudos e projetos AVAC',
    desc: 'Conceção técnica de projetos de climatização e ventilação, com dimensionamento rigoroso à medida de cada edifício.',
  },
  {
    icon: Droplets,
    title: 'Desumidificação industrial',
    desc: 'Controlo de humidade para ambientes industriais e processos sensíveis, com equipamentos de elevado desempenho.',
  },
  {
    icon: Wrench,
    title: 'Instalação de equipamentos',
    desc: 'Montagem profissional de unidades das principais marcas, com execução cuidada e cumprimento das normas.',
  },
  {
    icon: Headset,
    title: 'Assistência e manutenção',
    desc: 'Pós-venda, manutenção preventiva e contratos de assistência para prolongar a vida útil dos seus sistemas.',
  },
]

// ── Two audiences ────────────────────────────────────────────────────────────
export const audiences = [
  {
    icon: HomeIcon,
    kicker: 'Particulares',
    title: 'Conforto para a sua casa',
    text: 'Aconselhamos, instalamos e mantemos o sistema de climatização ideal para a sua habitação — silencioso, eficiente e à medida de cada divisão.',
    points: ['Aconselhamento sem compromisso', 'Instalação limpa e cuidada', 'Manutenção e pós-venda'],
  },
  {
    icon: Factory,
    kicker: 'Empresas e Indústria',
    title: 'Soluções para profissionais',
    text: 'Respondemos às exigências dos setores Farmacêutico, Logística, Indústria e Retalho, com projetos AVAC robustos e assistência em todo o país.',
    points: ['Projetos AVAC à medida', 'Desumidificação industrial', 'Contratos de manutenção'],
  },
]

// ── Sectors served ───────────────────────────────────────────────────────────
export const sectors = [
  { icon: Factory, label: 'Farmacêutica' },
  { icon: Building2, label: 'Logística' },
  { icon: Wrench, label: 'Indústria' },
  { icon: HomeIcon, label: 'Retalho' },
]

// Reference clients (named generically — no fake logos)
export const clients = [
  'Bancos',
  'Ministérios',
  'Embaixadas',
  'Setor automóvel',
  'Laboratórios',
]

// ── Values / approach ────────────────────────────────────────────────────────
export const values = [
  {
    icon: Handshake,
    title: 'Compromisso',
    text: 'Os compromissos são para serem cumpridos. Prazos, orçamentos e qualidade — é nisto que acreditamos desde 1977.',
  },
  {
    icon: Target,
    title: 'Rigor técnico',
    text: 'Cada projeto é dimensionado e executado com precisão, por técnicos certificados e com formação contínua.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiança',
    text: 'Bancos, ministérios, embaixadas e laboratórios confiam-nos os seus sistemas. Um parceiro de longo prazo.',
  },
]

// ── Testimonials (verbatim — Google 5,0/5 · 3 avaliações) ────────────────────
export const testimonials = [
  {
    quote: 'Qualidade do serviço em todos os aspetos. Muito profissionais. Fiquei mto contente com o trabalho.',
    name: 'Beatriz Castelão',
  },
  {
    quote: 'Serviço exemplar, bons preços e pessoal especializado.',
    name: 'Vítor Júlio Coelho Ferreira',
  },
  {
    quote: 'Excelentes profissionais! Desde a conceção da proposta à instalação dos equipamentos, tudo correu na perfeição.',
    name: 'António Coelho',
  },
]

// ── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '1977', label: 'Fundada em' },
  { value: '45+', label: 'Anos de atividade' },
  { value: '5,0', label: 'Avaliação Google' },
  { value: '100%', label: 'Cobertura nacional' },
]

// ── Process (how we work) ────────────────────────────────────────────────────
export const process = [
  { step: '01', icon: Ruler, title: 'Estudo e projeto', text: 'Visitamos, ouvimos e dimensionamos a solução técnica certa para o seu espaço.' },
  { step: '02', icon: BadgeCheck, title: 'Proposta clara', text: 'Apresentamos um orçamento transparente, com equipamentos e prazos definidos.' },
  { step: '03', icon: Wrench, title: 'Instalação chave-na-mão', text: 'A nossa equipa executa a obra com rigor, do fornecimento à entrega final.' },
  { step: '04', icon: Headset, title: 'Assistência contínua', text: 'Manutenção preventiva e pós-venda para garantir desempenho ao longo do tempo.' },
]
